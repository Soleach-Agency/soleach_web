import { locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getPosts } from "@/lib/blog";
import { getConcepts } from "@/lib/concepts";
import { localeUrl, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * llms.txt — the curated map of the site for LLMs and agents. The prose is
 * hand-written; the Pages and Blog sections are generated from the same
 * source as the sitemap, so a new post shows up here without anyone having
 * to remember to edit a file in public/.
 */

const intro = `# Soleach

> Soleach has two deliberately separate practices. It provides digital growth services for cosmetics, beauty and women's product brands, and industry-agnostic software and AI solutions for companies. Beauty marketing remains category-focused; software work is available to businesses in any industry. Soleach is a service company and does not sell physical products itself.

## What Soleach does

### Beauty-brand growth

- **Social & Performance Advertising**: Sales-focused ad campaigns on Meta (Instagram & Facebook) and TikTok — setup, management, audience targeting, retargeting, A/B testing and ROAS-driven optimization. Reported on ROAS, CPA and conversion rate, and judged on ROI.
- **Content & Creative Production**: Ad creative, product photography, Reels and short-form video, and UGC-style content tailored to the cosmetics category.
- **SEO & GEO**: Technical and content SEO for search engines, plus Generative Engine Optimization (GEO) to make brands visible and correctly represented in AI engines such as ChatGPT, Perplexity and Google AI Overviews.

### Software & AI for companies in any industry

- **Websites & E-Commerce Systems**: Corporate, product and service websites; Shopify setup and customization; conversion-focused commerce experiences; payment, shipping, CRM and analytics integrations; technical maintenance and iteration.
- **Custom Software Development**: Admin dashboards, customer portals, internal tools, operations and reporting systems designed around the business workflow, including requirements, permissions, integrations, testing, launch and maintenance.
- **MCP Servers & AI Integrations**: Model Context Protocol (MCP) use-case and tool design, custom server development and setup, API/database/document connections, authentication and authorization boundaries, client integration, testing, logging and documentation.

## Who Soleach is for

- Advertising, creative and SEO & GEO: makeup, skincare, cosmetics, dermocosmetics, fragrance, haircare and women's product brands.
- Custom software, web/e-commerce systems, MCP servers and AI integrations: companies in any industry.
- Primary market: Turkey (Türkiye). The site is available in Turkish and English.

## Key facts

- Type: Digital growth and software services company
- Marketing focus: Cosmetics / beauty / dermocosmetics / women's products
- Software focus: Industry-agnostic custom software, web systems, MCP and AI integrations
- Services: Performance ads, creative production, SEO & GEO, website and e-commerce development, custom software, MCP servers and AI integrations
- Beauty-growth metrics: ROAS, ROI, CPA, conversion rate and visibility
- Software success measures: agreed acceptance criteria, adoption, performance, error rates and time saved
- Does NOT sell products directly; grows brands that do
- Contact: hello@soleach.com

## For agents

- **Expanded content corpus** (services, FAQs, articles and concepts in both languages, one fetch): ${siteUrl}/llms-full.txt
- **MCP endpoint** (semantic + keyword search over all of the above, streamable-http, no auth, rate limited): https://86818188-0323-457e-9182-859940cfba5c.search.ai.cloudflare.com/mcp
- **MCP Server Card**: ${siteUrl}/.well-known/mcp/server-card.json
- **Agent Skills index**: ${siteUrl}/.well-known/agent-skills/index.json
- **API catalog**: ${siteUrl}/.well-known/api-catalog
- **RSS feeds**: ${siteUrl}/tr/rss.xml (Turkish) · ${siteUrl}/en/rss.xml (English)

Soleach's content may be used for search, for answering questions in real time, and for training — see the \`Content-Signal\` directives in ${siteUrl}/robots.txt.`;

const pageLabels = {
  "": "Home",
  services: "Services",
  about: "About",
  contact: "Contact",
  blog: "Blog",
  concepts: "Concepts",
} as const;

export function GET() {
  const out: string[] = [intro, "", "## Pages", ""];

  for (const [page, label] of Object.entries(pageLabels)) {
    for (const locale of locales) {
      const dict = getDictionary(locale);
      const slug =
        page === "" ? "" : dict.routes[page as keyof typeof dict.routes];
      out.push(`- ${label} (${locale.toUpperCase()}): ${localeUrl(locale, slug)}`);
    }
  }

  out.push(
    "",
    "## Blog",
    "",
    "Guides on advertising, content, SEO and GEO for beauty and cosmetics brands, in Turkish and English. All posts, newest first:",
    "",
  );

  for (const { post } of getPosts("en")) {
    const date = (post.updatedAt ?? post.publishedAt).slice(0, 10);
    for (const locale of locales) {
      const dict = getDictionary(locale);
      const loc = post.locales[locale];
      out.push(
        `- ${loc.title} (${locale.toUpperCase()}, ${date}): ${localeUrl(locale, `${dict.routes.blog}/${loc.slug}`)}`,
      );
    }
  }

  out.push(
    "",
    "## Concepts",
    "",
    "A concept map (glossary) of beauty marketing: every term has a clear definition, related concepts and links to the articles that discuss it. All terms, both locales:",
    "",
  );

  for (const { concept } of getConcepts("en")) {
    for (const locale of locales) {
      const dict = getDictionary(locale);
      const loc = concept.locales[locale];
      out.push(
        `- ${loc.name} (${locale.toUpperCase()}): ${localeUrl(locale, `${dict.routes.concepts}/${loc.slug}`)} — ${loc.shortDef}`,
      );
    }
  }

  out.push("");

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
