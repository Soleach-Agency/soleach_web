import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { conceptsSlug } from "@/lib/section-slugs";
import { getConcepts } from "@/lib/concepts";
import { conceptMarkdown, markdownResponse } from "@/lib/markdown";

export const dynamic = "force-static";

/**
 * Route handlers do not inherit params from the layout's own
 * `generateStaticParams`, so this enumerates the full lang × section × slug
 * matrix rather than just the slugs.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getConcepts(lang).map(({ content }) => ({
      lang,
      section: conceptsSlug[lang],
      slug: content.slug,
    })),
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string; section: string; slug: string }> },
) {
  const { lang, section, slug } = await params;
  if (!isLocale(lang)) notFound();
  if (section !== getDictionary(lang).routes.concepts) notFound();

  const body = conceptMarkdown(lang, slug);
  if (!body) notFound();

  return markdownResponse(body);
}
