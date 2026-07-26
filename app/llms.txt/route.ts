import { locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getPosts } from "@/lib/blog";
import { localeUrl, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * llms.txt — the curated map of the site for LLMs and agents. The prose is
 * hand-written; the Pages and Blog sections are generated from the same
 * source as the sitemap, so a new post shows up here without anyone having
 * to remember to edit a file in public/.
 */

const intro = `# Soleach

> Soleach is a digital advertising agency focused exclusively on cosmetics, beauty and women's product brands (Turkish: kozmetik ajansı / güzellik markaları için dijital reklam ajansı). Soleach grows these brands with social & performance advertising, content & creative production, website and Shopify e-commerce setup, and SEO & GEO (visibility on search engines and generative AI engines). Soleach is an agency — it does not sell physical products itself; it manages the digital growth of the brands that do.

## What Soleach does

- **Social & Performance Advertising**: Sales-focused ad campaigns on Meta (Instagram & Facebook) and TikTok — setup, management, audience targeting, retargeting, A/B testing and ROAS-driven optimization. Reported on ROAS, CPA and conversion rate, and judged on ROI.
- **Content & Creative Production**: Ad creative, product photography, Reels and short-form video, and UGC-style content tailored to the cosmetics category.
- **Website & Shopify E-Commerce Setup**: Shopify store setup and theme customization, conversion-focused product and collection pages, corporate websites, payment/shipping/integration setup, pixel and e-commerce tracking, mobile speed and technical SEO foundations.
- **SEO & GEO**: Technical and content SEO for search engines, plus Generative Engine Optimization (GEO) to make brands visible and correctly represented in AI engines such as ChatGPT, Perplexity and Google AI Overviews.

## Who Soleach is for

Makeup, skincare, cosmetics, dermocosmetics, fragrance, haircare and women's product brands — from newly launched brands to established brands that want to scale. Primary market: Turkey (Türkiye). The site is available in Turkish and English.

## Key facts

- Type: Digital advertising agency (dijital reklam ajansı / kozmetik ajansı)
- Focus: Cosmetics / beauty / dermocosmetics / women's products
- Services: Performance ads, creative production, website & Shopify e-commerce setup, SEO & GEO
- Metrics used: ROAS, ROI, CPA, conversion rate
- Does NOT sell products directly; grows brands that do
- Contact: hello@soleach.com

## For agents

- **Full content corpus** (every page and article as plain text, one fetch): ${siteUrl}/llms-full.txt
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

  for (const { post, content } of getPosts("en")) {
    const date = (post.updatedAt ?? post.publishedAt).slice(0, 10);
    for (const locale of locales) {
      const dict = getDictionary(locale);
      const loc = post.locales[locale];
      out.push(
        `- ${content.title} (${locale.toUpperCase()}, ${date}): ${localeUrl(locale, `${dict.routes.blog}/${loc.slug}`)}`,
      );
    }
  }

  out.push("");

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
