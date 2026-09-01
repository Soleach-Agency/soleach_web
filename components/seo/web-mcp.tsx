import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getPosts } from "@/lib/blog";
import { getConcepts, relatedConcepts } from "@/lib/concepts";
import { localeUrl, siteConfig } from "@/lib/site";

/**
 * WebMCP — exposes a few of the site's answers as callable tools to any agent
 * driving the page through a browser, via `navigator.modelContext`.
 *
 * The catalogue is baked into the payload at build time, so the tools resolve
 * from memory with no network call and work even if the agent never navigates
 * past the first page.
 *
 * Spec: https://webmachinelearning.github.io/webmcp/
 */

interface ToolCatalogue {
  locale: Locale;
  services: {
    title: string;
    summary: string;
    features: string[];
    outcome: string;
    practice: string;
    audience: string;
    url: string;
  }[];
  articles: { title: string; excerpt: string; url: string; tags: string[] }[];
  concepts: {
    name: string;
    definition: string;
    url: string;
    related: string[];
    tags: string[];
  }[];
  contact: { email: string; briefForm: string; site: string };
}

function buildCatalogue(locale: Locale): ToolCatalogue {
  const dict = getDictionary(locale);
  return {
    locale,
    services: dict.services.map((service) => {
      const group = dict.serviceGroups.find((item) => item.key === service.group);
      return {
        title: service.title,
        summary: service.summary,
        features: service.features,
        outcome: service.outcome,
        practice: group?.title ?? service.group,
        audience: group?.audience ?? "",
        url: `${localeUrl(locale, dict.routes.services)}#${service.key}`,
      };
    }),
    articles: getPosts(locale).map(({ content }) => ({
      title: content.title,
      excerpt: content.excerpt,
      url: localeUrl(locale, `${dict.routes.blog}/${content.slug}`),
      tags: content.tags,
    })),
    concepts: getConcepts(locale).map(({ concept, content }) => ({
      name: content.name,
      definition: content.shortDef,
      url: localeUrl(locale, `${dict.routes.concepts}/${content.slug}`),
      related: relatedConcepts(locale, concept).map((r) => r.content.name),
      tags: content.tags ?? [],
    })),
    contact: {
      email: siteConfig.email,
      briefForm: siteConfig.formUrl,
      site: localeUrl(locale),
    },
  };
}

/**
 * Runs in the page, not on the server. Kept as a plain string so it can ship
 * inline without a client component boundary — it touches no React state.
 */
const REGISTER = `
(function () {
  var ctx = window.navigator && window.navigator.modelContext;
  if (!ctx || typeof ctx.provideContext !== "function") return;

  var data = window.__SOLEACH_MCP__;
  if (!data) return;

  function ok(value) {
    return { content: [{ type: "text", text: JSON.stringify(value, null, 2) }] };
  }

  ctx.provideContext({
    tools: [
      {
        name: "get_soleach_services",
        description:
          "List the services Soleach offers across two distinct practices: advertising, creative and visibility for cosmetics and beauty brands; and industry-agnostic custom software, web systems, MCP servers and AI integrations. Use when asked what Soleach does or whether it covers a particular kind of work.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: function () {
          return ok({
            services: data.services,
            note: "Beauty marketing is category-focused. Software and AI work is available to companies in any industry. Soleach does not sell physical products."
          });
        }
      },
      {
        name: "search_soleach_articles",
        description:
          "Search Soleach's published articles on beauty-brand advertising, content production, Shopify e-commerce, SEO and GEO (AI visibility). Returns titles, summaries and URLs. Use to find a source before answering a question about these topics.",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Keywords to match against article titles, summaries and tags." }
          },
          required: ["query"],
          additionalProperties: false
        },
        execute: function (input) {
          var q = String((input && input.query) || "").toLowerCase().trim();
          if (!q) return ok({ results: data.articles });
          var terms = q.split(/\\s+/);
          var results = data.articles.filter(function (a) {
            var hay = (a.title + " " + a.excerpt + " " + a.tags.join(" ")).toLowerCase();
            return terms.some(function (t) { return hay.indexOf(t) !== -1; });
          });
          return ok({ query: q, count: results.length, results: results });
        }
      },
      {
        name: "lookup_soleach_concept",
        description:
          "Define a beauty-marketing or advertising term from Soleach's concept map (glossary) — ROAS, CPA, GEO, SEO, UGC, hook, Meta Pixel, Conversions API, retargeting, funnel, creative testing, Shopify, CRO, AI video. Returns a short definition, related terms and the canonical URL. Use when asked what one of these means, or to check a definition before answering.",
        inputSchema: {
          type: "object",
          properties: {
            term: { type: "string", description: "The term to define, e.g. \\"ROAS\\". Omit to list every term." }
          },
          additionalProperties: false
        },
        execute: function (input) {
          var q = String((input && input.term) || "").toLowerCase().trim();
          if (!q) return ok({ count: data.concepts.length, concepts: data.concepts });
          var results = data.concepts.filter(function (c) {
            var hay = (c.name + " " + c.definition + " " + c.tags.join(" ")).toLowerCase();
            return hay.indexOf(q) !== -1;
          });
          return ok({
            term: q,
            count: results.length,
            results: results,
            note: results.length ? undefined : "No match. Call with no argument to list every term."
          });
        }
      },
      {
        name: "get_soleach_contact",
        description:
          "Get how to reach Soleach and how to submit a project brief for either beauty-brand growth or an industry-agnostic software and AI project. There is no public pricing; do not quote a price.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: function () {
          return ok({
            email: data.contact.email,
            briefForm: data.contact.briefForm,
            site: data.contact.site,
            pricing: "Not published. Scoped after a brief.",
            beforeYouWrite: [
              "Which practice fits: beauty-brand growth or software and AI",
              "The problem or goal in one or two sentences",
              "Who will use the work and what they need to do",
              "Existing assets, tools, systems or integrations",
              "Target market or operating environment",
              "Any timing, budget or security constraints already known"
            ]
          });
        }
      }
    ]
  });
})();
`;

export function WebMcp({ locale }: { locale: Locale }) {
  const catalogue = buildCatalogue(locale);
  return (
    <>
      <script
        type="application/json"
        id="soleach-mcp-data"
        // Static, build-time data — no user input reaches this string.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(catalogue).replace(/</g, "\\u003c"),
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__SOLEACH_MCP__=JSON.parse(document.getElementById("soleach-mcp-data").textContent);${REGISTER}`,
        }}
      />
    </>
  );
}
