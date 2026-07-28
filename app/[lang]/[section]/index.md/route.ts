import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { conceptsSlug } from "@/lib/section-slugs";
import { conceptsIndexMarkdown, markdownResponse } from "@/lib/markdown";

export const dynamic = "force-static";

/**
 * Route handlers do not inherit params from the layout's own
 * `generateStaticParams`, so this enumerates the lang × section matrix.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang, section: conceptsSlug[lang] }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string; section: string }> },
) {
  const { lang, section } = await params;
  if (!isLocale(lang)) notFound();
  if (section !== getDictionary(lang).routes.concepts) notFound();

  return markdownResponse(conceptsIndexMarkdown(lang));
}
