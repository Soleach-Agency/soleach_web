import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody, renderInline } from "@/components/blog/article-body";
import { ConceptGraph } from "@/components/concepts/concept-graph";
import { GraphInteractions } from "@/components/concepts/graph-interactions";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { isLocale, locales, localeHtmlLang, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { conceptsSlug } from "@/lib/section-slugs";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  definedTermSchema,
  faqSchemaFromItems,
} from "@/lib/schema";
import {
  getConceptBySlug,
  getConceptPosts,
  getConcepts,
  relatedConcepts,
} from "@/lib/concepts";
import { readingTimeMinutes } from "@/lib/blog";
import { conceptNeighborhoodLayout } from "@/lib/concept-graph";

/** Concept detail page — /tr/kavramlar/<slug> and /en/concepts/<slug>. */

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) return [];
  return getConcepts(params.lang).map(({ content }) => ({
    section: conceptsSlug[params.lang as Locale],
    slug: content.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; section: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, section, slug } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  if (section !== dict.routes.concepts) return {};
  const found = getConceptBySlug(lang, slug);
  if (!found) return {};
  const { concept, content } = found;

  // Slugs differ per locale, so hreflang pairs come from the concept itself.
  const pathByLocale = Object.fromEntries(
    locales.map((l) => [
      l,
      `${getDictionary(l).routes.concepts}/${concept.locales[l].slug}`,
    ]),
  );

  return buildMetadata({
    locale: lang,
    pathByLocale,
    title: content.metaTitle,
    description: content.metaDescription,
    ogType: "article",
  });
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ lang: string; section: string; slug: string }>;
}) {
  const { lang, section, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = getDictionary(locale);
  if (section !== dict.routes.concepts) notFound();
  const found = getConceptBySlug(locale, slug);
  if (!found) notFound();
  const { concept, content } = found;

  const category = dict.services.find((s) => s.key === concept.category);
  const dateFormat = new Intl.DateTimeFormat(localeHtmlLang[locale], {
    dateStyle: "long",
  });
  const conceptsHref = `/${locale}/${dict.routes.concepts}`;
  const neighbors = relatedConcepts(locale, concept);
  const posts = getConceptPosts(locale, concept);
  // A two-dot graph says nothing the cards below don't; skip it.
  const miniGraph =
    neighbors.length >= 2 ? conceptNeighborhoodLayout(concept.id) : null;

  return (
    <>
      <JsonLd
        data={definedTermSchema(locale, {
          slug: content.slug,
          name: content.name,
          shortDef: content.shortDef,
          tags: content.tags,
          relatedPostPaths: posts.map(
            ({ content: postContent }) =>
              `${dict.routes.blog}/${postContent.slug}`,
          ),
        })}
      />
      {content.faq && content.faq.length > 0 && (
        <JsonLd data={faqSchemaFromItems(content.faq)} />
      )}
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.nav.home, path: "" },
          { name: dict.nav.concepts, path: dict.routes.concepts },
          {
            name: content.name,
            path: `${dict.routes.concepts}/${content.slug}`,
          },
        ])}
      />

      {/* Hero — static glow, no Motion around the H1. */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <Link
            href={conceptsHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            {dict.conceptsPage.backToConcepts}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-flex rounded-full border border-accent/25 bg-background/60 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
              {category?.title ?? dict.nav.services}
            </span>
            <span className="text-xs text-muted">
              <time dateTime={concept.updatedAt ?? concept.publishedAt}>
                {dateFormat.format(
                  new Date(concept.updatedAt ?? concept.publishedAt),
                )}
              </time>
            </span>
          </div>
          <h1 className="mt-5 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {content.name}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border-l-2 border-accent/40 pl-5">
          <p className="text-lg leading-relaxed text-muted">
            {renderInline(content.shortDef)}
          </p>
        </div>

        <div className="mt-12">
          <ArticleBody sections={content.sections} />
        </div>

        {/* FAQ — rendered statically so every answer is crawlable */}
        {content.faq && content.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {dict.blogPage.faqTitle}
            </h2>
            <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface">
              {content.faq.map((item) => (
                <div key={item.q} className="p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {renderInline(item.a)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related concepts — the graph's edges, as crawlable links */}
        {neighbors.length > 0 && (
          <section className="mt-16">
            <h2 className="text-lg font-semibold text-foreground">
              {dict.conceptsPage.relatedConceptsTitle}
            </h2>

            {/* This concept's corner of the map. Decorative: the same links
                are listed as text below, so screen readers and keyboard users
                get them once, not twice. */}
            {miniGraph && (
              <div className="mt-5 rounded-2xl border border-border bg-surface/40 p-2">
                <ConceptGraph
                  locale={locale}
                  dict={dict}
                  layout={miniGraph}
                  id="concept-neighbourhood"
                  activeId={concept.id}
                  decorative
                />
                <GraphInteractions targetId="concept-neighbourhood" />
              </div>
            )}

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {neighbors.map(({ concept: neighbor, content: neighborContent }) => (
                <Link
                  key={neighbor.id}
                  href={`${conceptsHref}/${neighborContent.slug}`}
                  className="card-hover group block rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-semibold text-foreground transition-colors group-hover:text-accent">
                    {neighborContent.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {neighborContent.shortDef}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Posts that discuss this concept */}
        {posts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-lg font-semibold text-foreground">
              {dict.conceptsPage.relatedPostsTitle}
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {posts.map(({ post, content: postContent }) => {
                const postCategory = dict.services.find(
                  (s) => s.key === post.category,
                );
                return (
                  <PostCard
                    key={post.id}
                    href={`/${locale}/${dict.routes.blog}/${postContent.slug}`}
                    categoryTitle={postCategory?.title ?? dict.nav.services}
                    dateLabel={dateFormat.format(new Date(post.publishedAt))}
                    readingLabel={`${readingTimeMinutes(postContent)} ${dict.blogPage.readingTimeSuffix}`}
                    title={postContent.title}
                    excerpt={postContent.excerpt}
                  />
                );
              })}
            </div>
          </section>
        )}
      </article>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
