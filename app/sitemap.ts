import type { MetadataRoute } from "next";
import { locales, localeHtmlLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { localeUrl, siteUrl } from "@/lib/site";
import { getPosts } from "@/lib/blog";
import { getConcepts } from "@/lib/concepts";
import {
  staticPageUpdatedAt,
  blogIndexUpdatedAt,
  conceptsIndexUpdatedAt,
} from "@/lib/page-dates";

/** Logical pages, addressed by the route slug ("" = home). */
const pages = ["", "services", "about", "contact", "blog", "concepts"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const dict = getDictionary(locale);
    const slugs: Record<(typeof pages)[number], string> = {
      "": "",
      services: dict.routes.services,
      about: dict.routes.about,
      contact: dict.routes.contact,
      blog: dict.routes.blog,
      concepts: dict.routes.concepts,
    };

    for (const page of pages) {
      const path = slugs[page];
      // hreflang alternates across locales for this logical page.
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        const altSlug =
          page === ""
            ? ""
            : altDict.routes[page as Exclude<(typeof pages)[number], "">];
        // Same hreflang codes as the on-page <link> tags — conflicting
        // codes across the two sources would water down both signals.
        languages[localeHtmlLang[alt]] = localeUrl(alt, altSlug);
      }

      entries.push({
        url: localeUrl(locale, path),
        lastModified: new Date(
          page === "blog"
            ? blogIndexUpdatedAt()
            : page === "concepts"
              ? conceptsIndexUpdatedAt()
              : staticPageUpdatedAt[page],
        ),
        changeFrequency:
          page === "" || page === "blog" || page === "concepts"
            ? "weekly"
            : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: { languages },
      });
    }

    // Blog posts — per-locale slugs, per-post dates.
    for (const { post, content } of getPosts(locale)) {
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        languages[localeHtmlLang[alt]] = localeUrl(
          alt,
          `${altDict.routes.blog}/${post.locales[alt].slug}`,
        );
      }

      entries.push({
        url: localeUrl(locale, `${dict.routes.blog}/${content.slug}`),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }

    // Concepts — per-locale slugs (the section slug diverges too), per-concept dates.
    for (const { concept, content } of getConcepts(locale)) {
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        const altDict = getDictionary(alt);
        languages[localeHtmlLang[alt]] = localeUrl(
          alt,
          `${altDict.routes.concepts}/${concept.locales[alt].slug}`,
        );
      }

      entries.push({
        url: localeUrl(locale, `${dict.routes.concepts}/${content.slug}`),
        lastModified: new Date(concept.updatedAt ?? concept.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  // Language-neutral link-in-bio hub.
  entries.push({
    url: `${siteUrl}/links`,
    lastModified: new Date(staticPageUpdatedAt.links),
    changeFrequency: "monthly",
    priority: 0.3,
  });

  return entries;
}
