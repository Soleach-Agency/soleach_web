import { locales, type Locale, localeHtmlLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getPosts, type BlogBlock, type BlogPostLocale } from "@/lib/blog";
import { getConcepts } from "@/lib/concepts";
import { localeUrl, siteConfig, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * The whole site as one plain-text file, for agents that would rather do a
 * single fetch than crawl 20 pages. `llms.txt` is the map; this is the
 * territory.
 *
 * Kept deliberately flat — no HTML, no nav chrome, no asset noise — so the
 * token cost is close to the information content.
 */

/** Turn `[label](href)` into `label (href)`, since there is no link target here. */
function flattenLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const target = href.startsWith("/") ? `${siteUrl}${href}` : href;
    return `${label} (${target})`;
  });
}

/** Strip the bold markers the blog renderer understands. */
function plain(text: string): string {
  return flattenLinks(text).replace(/\*\*([^*]+)\*\*/g, "$1");
}

function renderBlock(block: BlogBlock): string | null {
  switch (block.type) {
    case "p":
      return plain(block.text);
    case "h3":
      return `### ${plain(block.text)}`;
    case "ul":
      return block.items.map((item) => `- ${plain(item)}`).join("\n");
    case "quote":
      return `> ${plain(block.text)}${block.cite ? ` — ${block.cite}` : ""}`;
    case "img":
      return `[image: ${block.alt}]`;
    case "embed":
      return `[${block.provider} embed: ${block.title}]`;
    default:
      return null;
  }
}

function renderPost(
  locale: Locale,
  content: BlogPostLocale,
  meta: { url: string; publishedAt: string; updatedAt?: string },
): string {
  const parts: string[] = [
    `## ${content.title}`,
    "",
    `URL: ${meta.url}`,
    `Language: ${localeHtmlLang[locale]}`,
    `Published: ${meta.publishedAt}`,
    ...(meta.updatedAt ? [`Updated: ${meta.updatedAt}`] : []),
    `Tags: ${content.tags.join(", ")}`,
    "",
    ...content.intro.map(plain),
  ];

  for (const section of content.sections) {
    parts.push("", `### ${plain(section.h2)}`, "");
    for (const block of section.blocks) {
      const rendered = renderBlock(block);
      if (rendered) parts.push(rendered, "");
    }
  }

  if (content.faq.length > 0) {
    parts.push("", "### FAQ", "");
    for (const item of content.faq) {
      parts.push(`Q: ${plain(item.q)}`, `A: ${plain(item.a)}`, "");
    }
  }

  if (content.sources && content.sources.length > 0) {
    parts.push("### Sources", "");
    for (const source of content.sources) {
      const publisher = source.publisher ? ` — ${source.publisher}` : "";
      parts.push(`- ${source.label}${publisher}: ${source.url}`);
    }
    parts.push("");
  }

  return parts.join("\n");
}

export function GET(): Response {
  const out: string[] = [
    "# Soleach — full content corpus",
    "",
    "Every page and article on soleach.com as plain text, in both languages.",
    "For the short structured summary instead, fetch /llms.txt.",
    "",
    `Site: ${siteUrl}`,
    `Contact: ${siteConfig.email}`,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
  ];

  for (const locale of locales) {
    const dict = getDictionary(locale);
    const label = locale === "tr" ? "Türkçe" : "English";

    out.push(
      "",
      "=".repeat(70),
      `# ${label} (${localeHtmlLang[locale]})`,
      "=".repeat(70),
      "",
      `Home: ${localeUrl(locale)}`,
      "",
      plain(dict.brandTagline),
      "",
      "## Services",
      "",
      plain(dict.servicesPage.hero.subtitle),
      "",
    );

    for (const service of dict.services) {
      out.push(`### ${plain(service.title)}`, "", plain(service.summary), "");
    }

    if (dict.home.faq.items.length > 0) {
      out.push("## Frequently asked questions", "");
      for (const item of dict.home.faq.items) {
        out.push(`Q: ${plain(item.q)}`, `A: ${plain(item.a)}`, "");
      }
    }

    out.push("", "## Articles", "");

    for (const { post, content } of getPosts(locale)) {
      out.push(
        renderPost(locale, content, {
          url: localeUrl(locale, `${dict.routes.blog}/${content.slug}`),
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        }),
        "",
        "-".repeat(70),
        "",
      );
    }

    out.push("", "## Concepts (glossary)", "");

    for (const { content } of getConcepts(locale)) {
      out.push(
        `### ${plain(content.name)}`,
        "",
        `URL: ${localeUrl(locale, `${dict.routes.concepts}/${content.slug}`)}`,
        `Language: ${localeHtmlLang[locale]}`,
        "",
        plain(content.shortDef),
        "",
      );
      for (const section of content.sections) {
        out.push(`#### ${plain(section.h2)}`, "");
        for (const block of section.blocks) {
          const rendered = renderBlock(block);
          if (rendered) out.push(rendered, "");
        }
      }
      if (content.faq && content.faq.length > 0) {
        out.push("#### FAQ", "");
        for (const item of content.faq) {
          out.push(`Q: ${plain(item.q)}`, `A: ${plain(item.a)}`, "");
        }
      }
      out.push("-".repeat(70), "");
    }
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
