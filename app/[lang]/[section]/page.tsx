import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Entrance } from "@/components/motion/entrance";
import { ConceptGraph } from "@/components/concepts/concept-graph";
import { GraphInteractions } from "@/components/concepts/graph-interactions";
import { GraphZoom } from "@/components/concepts/graph-zoom";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { conceptsSlug } from "@/lib/section-slugs";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, definedTermSetSchema } from "@/lib/schema";
import { getConcepts } from "@/lib/concepts";
import { conceptGraphLayout } from "@/lib/concept-graph";

/**
 * Concepts hub — /tr/kavramlar and /en/concepts. The section slug diverges
 * per locale, so this lives in a dynamic [section] segment that only ever
 * generates the valid lang×section combos; everything else 404s.
 */

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) return [];
  return [{ section: conceptsSlug[params.lang] }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}): Promise<Metadata> {
  const { lang, section } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  if (section !== dict.routes.concepts) return {};

  // The hub slug itself is localized, so hreflang pairs come per locale.
  const pathByLocale = Object.fromEntries(
    locales.map((l) => [l, getDictionary(l).routes.concepts]),
  );

  return buildMetadata({
    locale: lang,
    pathByLocale,
    title: dict.meta.concepts.title,
    description: dict.meta.concepts.description,
  });
}

export default async function ConceptsHubPage({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}) {
  const { lang, section } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  if (section !== dict.routes.concepts) notFound();

  const concepts = getConcepts(locale);
  const baseHref = `/${locale}/${dict.routes.concepts}`;

  return (
    <>
      <JsonLd data={definedTermSetSchema(locale)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.concepts, path: dict.routes.concepts },
        ])}
      />

      {/* Hero — CSS-only entrances and a static glow: no Motion, no Aurora,
          so the H1 (LCP) paints with the first HTML frame. */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28 lg:px-8">
          <Entrance className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent-2" />
              {dict.conceptsPage.hero.eyebrow}
            </span>
          </Entrance>
          <Entrance delay={0.08}>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              {dict.conceptsPage.hero.title}
            </h1>
          </Entrance>
          <Entrance delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {dict.conceptsPage.hero.subtitle}
            </p>
          </Entrance>
        </div>
      </section>

      {/* The graph — server-rendered SVG; every node is a real link. */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Entrance delay={0.2}>
          <div className="relative rounded-2xl border border-border bg-surface/40 p-2 sm:p-4">
            <ConceptGraph
              locale={locale}
              dict={dict}
              layout={conceptGraphLayout()}
              id="concept-graph"
            />
            <GraphInteractions targetId="concept-graph" />
            <GraphZoom
              targetId="concept-graph"
              labels={{
                zoomIn: dict.conceptsPage.graphZoomIn,
                zoomOut: dict.conceptsPage.graphZoomOut,
                reset: dict.conceptsPage.graphResetView,
              }}
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {dict.conceptsPage.graphHint}
          </p>
        </Entrance>
      </section>

      {/* Semantic list — the same content as the graph, grouped by pillar.
          Fully visible on purpose: it is the screen-reader path and the
          crawler-friendly rendering in one. */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {dict.conceptsPage.listTitle}
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {dict.services.map((service) => {
            const group = concepts.filter(
              ({ concept }) => concept.category === service.key,
            );
            if (group.length === 0) return null;
            return (
              <div key={service.key}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.map(({ concept, content }) => (
                    <li key={concept.id}>
                      <Link
                        href={`${baseHref}/${content.slug}`}
                        className="group block rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent/40"
                      >
                        <span className="font-semibold text-foreground transition-colors group-hover:text-accent">
                          {content.name}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {content.shortDef}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
