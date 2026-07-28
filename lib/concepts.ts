import type { Locale } from "./i18n";
import type { ServiceKey } from "./dictionaries";
import type { BlogSection, BlogFaqItem } from "./blog";
import { getPostById } from "./blog";
import { concepts } from "@/content/concepts";

/**
 * Typed concept (glossary) content model behind the Kavram Haritası pages.
 * Mirrors lib/blog.ts: every concept ships both locales with their own
 * slug/meta so hreflang pairs stay correct, and reuses the blog's block
 * model so <ArticleBody> and the markdown serializers work unchanged.
 *
 * Relations are curated by hand — `related` draws the graph's edges,
 * `postIds` connects a concept to the articles that discuss it. The
 * concepts-check script (npm run concepts-check) validates both.
 */

export interface ConceptLocale {
  slug: string;
  /** H1 + list label. */
  name: string;
  /** Short label for the SVG node (≤ ~18 chars); falls back to `name`. */
  graphLabel?: string;
  metaTitle: string;
  metaDescription: string;
  /** 1–2 sentence gloss: hub list, article lede, DefinedTerm description. */
  shortDef: string;
  sections: BlogSection[];
  faq?: BlogFaqItem[];
  tags?: string[];
}

export interface Concept {
  /** Stable id shared by both locales (graph node id + hreflang pairing). */
  id: string;
  /** Service pillar — drives node color and the hub's grouped list. */
  category: ServiceKey;
  /** ISO dates — feed sitemap lastmod, keep them honest. */
  publishedAt: string;
  updatedAt?: string;
  /** Concept ids this one links to — undirected edges, declare once per pair. */
  related: string[];
  /** Blog post ids (BlogPost.id) that discuss this concept. */
  postIds: string[];
  locales: Record<Locale, ConceptLocale>;
}

/** Concepts for a locale, sorted by localized name (hub list order). */
export function getConcepts(locale: Locale) {
  return [...concepts]
    .sort((a, b) =>
      a.locales[locale].name.localeCompare(b.locales[locale].name, locale),
    )
    .map((concept) => ({ concept, content: concept.locales[locale] }));
}

export function getConceptBySlug(locale: Locale, slug: string) {
  const concept = concepts.find((c) => c.locales[locale].slug === slug);
  return concept ? { concept, content: concept.locales[locale] } : null;
}

export function getConceptById(id: string): Concept | null {
  return concepts.find((c) => c.id === id) ?? null;
}

/** Deduped undirected edge list — the union of every `related` declaration. */
export function conceptEdges(): { source: string; target: string }[] {
  const seen = new Set<string>();
  const edges: { source: string; target: string }[] = [];
  for (const concept of concepts) {
    for (const rel of concept.related) {
      const [source, target] =
        concept.id < rel ? [concept.id, rel] : [rel, concept.id];
      const key = `${source}|${target}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({ source, target });
      }
    }
  }
  return edges;
}

/** Number of edges touching a concept — drives node radius. */
export function conceptDegree(id: string): number {
  let degree = 0;
  for (const edge of conceptEdges()) {
    if (edge.source === id || edge.target === id) degree++;
  }
  return degree;
}

/** Neighboring concepts (via `related`, both directions), for detail pages. */
export function relatedConcepts(locale: Locale, concept: Concept) {
  const ids = new Set<string>();
  for (const edge of conceptEdges()) {
    if (edge.source === concept.id) ids.add(edge.target);
    if (edge.target === concept.id) ids.add(edge.source);
  }
  return [...ids]
    .map((id) => getConceptById(id))
    .filter((c): c is Concept => c !== null)
    .sort((a, b) =>
      a.locales[locale].name.localeCompare(b.locales[locale].name, locale),
    )
    .map((c) => ({ concept: c, content: c.locales[locale] }));
}

/** Blog posts referenced by concept.postIds, newest first. */
export function getConceptPosts(locale: Locale, concept: Concept) {
  return concept.postIds
    .map((id) => getPostById(id))
    .filter((p): p is NonNullable<ReturnType<typeof getPostById>> => p !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) => ({ post, content: post.locales[locale] }));
}
