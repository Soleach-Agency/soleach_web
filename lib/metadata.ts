import type { Metadata } from "next";
import {
  locales,
  type Locale,
  localeHtmlLang,
  localeOpenGraph,
} from "./i18n";
import { localeUrl, siteConfig, siteUrl } from "./site";

/** Brand Open Graph image, one per locale (1200×630, PNG for WhatsApp/X
 *  compatibility). Generated into public/brand/ by scripts/og-image.mjs. */
export function ogImageUrl(locale: Locale): string {
  return `${siteUrl}/brand/og-${locale}.png`;
}

interface BuildMetadataArgs {
  locale: Locale;
  /** Path after the locale segment, e.g. "" for home or "services". */
  path?: string;
  /** Per-locale paths for pages whose slug differs by language (blog posts). */
  pathByLocale?: Partial<Record<Locale, string>>;
  title: string;
  description: string;
  /** Open Graph type — blog posts use "article". */
  ogType?: "website" | "article";
}

/**
 * Produces canonical + hreflang alternates and Open Graph tags for a page,
 * so every page ships correct bilingual SEO signals.
 */
export function buildMetadata({
  locale,
  path = "",
  pathByLocale,
  title,
  description,
  ogType = "website",
}: BuildMetadataArgs): Metadata {
  const pathFor = (l: Locale) => pathByLocale?.[l] ?? path;
  const canonical = localeUrl(locale, pathFor(locale));

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHtmlLang[l]] = localeUrl(l, pathFor(l));
  }
  // x-default points at the primary (Turkish) locale.
  languages["x-default"] = localeUrl("tr", pathFor("tr"));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
      // RSS autodiscovery — feed readers find /{locale}/rss.xml from any page.
      types: {
        "application/rss+xml": [
          {
            url: localeUrl(locale, "rss.xml"),
            title: `${siteConfig.name} Blog (${locale.toUpperCase()})`,
          },
        ],
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: localeOpenGraph[locale],
      type: ogType,
      images: [
        {
          url: ogImageUrl(locale),
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl(locale)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
