import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { aboutMarkdown, markdownResponse } from "@/lib/markdown";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return markdownResponse(aboutMarkdown(lang));
}
