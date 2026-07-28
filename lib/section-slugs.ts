import type { Locale } from "./i18n";

/**
 * Section slugs that diverge per locale. Unlike services/about/blog (same
 * literal segment in both languages), the concepts hub lives at /tr/kavramlar
 * and /en/concepts, so both the dictionaries and the client-side language
 * switcher must read the slug from this single source — they can never drift.
 *
 * These routes are served by the dynamic app/[lang]/[section] segment. Never
 * add a literal `kavramlar/` or `concepts/` directory under app/[lang]/ — a
 * literal segment always wins over [section] and would shadow these pages.
 */
export const conceptsSlug: Record<Locale, string> = {
  tr: "kavramlar",
  en: "concepts",
};

export const conceptsSlugValues: readonly string[] = Object.values(conceptsSlug);
