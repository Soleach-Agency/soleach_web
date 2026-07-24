import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getPosts } from "@/lib/blog";
import { postMarkdown, markdownResponse } from "@/lib/markdown";

export const dynamic = "force-static";

/**
 * Route handlers do not inherit params from the layout's own
 * `generateStaticParams`, so this enumerates the full lang × slug matrix
 * rather than just the slugs.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getPosts(lang).map(({ content }) => ({ lang, slug: content.slug })),
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string; slug: string }> },
) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const body = postMarkdown(lang, slug);
  if (!body) notFound();

  return markdownResponse(body);
}
