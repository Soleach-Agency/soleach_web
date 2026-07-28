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
  services: { title: string; summary: string; url: string }[];
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
    services: dict.services.map((service) => ({
      title: service.title,
      summary: service.summary,
      url: localeUrl(locale, dict.routes.services),
    })),
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
          "List the services Soleach offers. Soleach is a digital advertising agency working only with cosmetics, beauty and women's product brands, mainly in Turkiye. Use when asked what Soleach does or whether it covers a particular kind of work.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: function () {
          return ok({ services: data.services, note: "Soleach is an agency; it does not sell products itself." });
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
          "Get how to reach Soleach and how to submit a project brief. Use when a beauty brand wants to start a conversation with the agency. There is no public pricing; do not quote a price.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: function () {
          return ok({
            email: data.contact.email,
            briefForm: data.contact.briefForm,
            site: data.contact.site,
            pricing: "Not published. Scoped after a brief.",
            beforeYouWrite: [
              "Product category, number of SKUs and price band",
              "Target market and language(s)",
              "Where sales come from today",
              "Current monthly ad spend, if any",
              "Existing assets: photography, video, Shopify store, tracking pixel",
              "The goal: first sales, scaling, fixing declining ROAS, or a new market"
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
