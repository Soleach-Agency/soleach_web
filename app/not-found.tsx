import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { locales, localeLabels } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { siteConfig, siteUrl } from "@/lib/site";

/**
 * The 404 page, served by Cloudflare Pages as out/404.html for anything that
 * does not resolve. Next's built-in one is a bare "This page could not be
 * found." with no links at all, which strands humans and — since a dead end
 * is also where a crawler stops — costs the site the crawl it already earned.
 *
 * Deliberately static and bilingual rather than locale-detecting: a single
 * pre-rendered file cannot know which locale was asked for, and a client that
 * runs no JavaScript (every non-browser fetcher) must still see every route.
 * So it lists both languages' real URLs in full, and points at the machine
 * entry points (sitemap, llms.txt, MCP) that answer "what does exist here?"
 * in one request instead of by guessing.
 */

export const metadata: Metadata = {
  title: "404 — Sayfa bulunamadı / Page not found | Soleach",
  description:
    "Aradığınız sayfa bulunamadı. Soleach'in tüm sayfalarına buradan ulaşabilirsiniz. / The page you asked for does not exist. Every Soleach page is listed here.",
  // No `robots` here — Next already emits noindex on the not-found route, and a
  // second, differently-worded robots tag is just something to contradict later.
};

const copy = {
  tr: {
    heading: "Bu sayfa bulunamadı",
    body: "Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Sitedeki bütün bölümler aşağıda.",
    home: "Ana sayfaya dön",
  },
  en: {
    heading: "This page does not exist",
    body: "The address may be mistyped, or the page may have moved. Every section of the site is listed below.",
    home: "Back to the homepage",
  },
} as const;

/** Machine entry points — the fastest answer to "what URLs are valid here?" */
const agentLinks = [
  { href: "/sitemap.xml", label: "sitemap.xml", sub: "Tüm URL'ler / Every URL" },
  { href: "/llms.txt", label: "llms.txt", sub: "Yapılandırılmış özet / Structured summary" },
  { href: "/llms-full.txt", label: "llms-full.txt", sub: "Tam metin / Full corpus" },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-16 sm:px-6">
      <Link href="/tr" className="self-start">
        <Logo />
      </Link>

      <p className="mt-12 font-display text-6xl font-semibold text-accent">404</p>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {locales.map((locale) => {
          const dict = getDictionary(locale);
          const base = `/${locale}`;
          const links = [
            { href: base, label: dict.nav.home },
            { href: `${base}/${dict.routes.services}`, label: dict.nav.services },
            { href: `${base}/${dict.routes.about}`, label: dict.nav.about },
            { href: `${base}/${dict.routes.blog}`, label: dict.nav.blog },
            { href: `${base}/${dict.routes.concepts}`, label: dict.nav.concepts },
            { href: `${base}/${dict.routes.contact}`, label: dict.nav.contact },
          ];

          return (
            <section key={locale}>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {copy[locale].heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {copy[locale].body}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                {localeLabels[locale]}
              </p>
              <ul className="mt-3 space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={base}
                className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {copy[locale].home}
              </Link>
            </section>
          );
        })}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Ajanlar için / For agents
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {agentLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-accent underline underline-offset-4"
              >
                {l.label}
              </a>
              <span className="ml-2 text-xs text-muted">{l.sub}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Aradığınızı bulamadıysanız yazın / If you still cannot find it, write to us:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </p>
        <p className="mt-2 text-xs text-muted">{siteUrl}</p>
      </div>
    </main>
  );
}
