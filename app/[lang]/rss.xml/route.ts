import { notFound } from "next/navigation";
import { isLocale, locales, localeHtmlLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getPosts } from "@/lib/blog";
import { localeUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * RSS 2.0 feed per locale (/tr/rss.xml, /en/rss.xml). Feed readers,
 * aggregators and several AI crawlers poll feeds more often than sitemaps,
 * so a daily publishing cadence gets picked up faster here.
 */

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const posts = getPosts(lang);
  const feedUrl = localeUrl(lang, "rss.xml");
  const blogUrl = localeUrl(lang, dict.routes.blog);

  const items = posts.map(({ post, content }) => {
    const url = localeUrl(lang, `${dict.routes.blog}/${content.slug}`);
    const date = new Date(post.updatedAt ?? post.publishedAt).toUTCString();
    return [
      "    <item>",
      `      <title>${escapeXml(content.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${date}</pubDate>`,
      `      <description>${escapeXml(content.excerpt)}</description>`,
      "    </item>",
    ].join("\n");
  });

  const newest = posts[0]
    ? new Date(
        posts[0].post.updatedAt ?? posts[0].post.publishedAt,
      ).toUTCString()
    : new Date(0).toUTCString();

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    "  <channel>",
    `    <title>${escapeXml(`${siteConfig.name} Blog`)}</title>`,
    `    <link>${blogUrl}</link>`,
    `    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`,
    `    <description>${escapeXml(dict.meta.blog.description)}</description>`,
    `    <language>${localeHtmlLang[lang].toLowerCase()}</language>`,
    `    <lastBuildDate>${newest}</lastBuildDate>`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
