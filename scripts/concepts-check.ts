/**
 * Referential-integrity check for the concept map, run before every build
 * (npm run concepts-check, wired into npm run build).
 *
 * Errors (exit 1, fail the build): duplicate ids/slugs, malformed slugs,
 * `related` or `postIds` pointing nowhere, empty sections.
 *
 * Warnings (exit 0): orphan nodes and concepts without posts.
 *
 * With --suggest it additionally scans post text for concept names that
 * don't link back to the post — editorial suggestions only; relations stay
 * hand-curated, never auto-added.
 */
import { locales } from "../lib/i18n";
import { conceptsSlug } from "../lib/section-slugs";
import { posts } from "../content/posts";
import { concepts } from "../content/concepts";
import type { BlogBlock } from "../lib/blog";

const errors: string[] = [];
const warnings: string[] = [];

const conceptIds = new Set(concepts.map((c) => c.id));
const postIds = new Set(posts.map((p) => p.id));

// --- Errors -----------------------------------------------------------------

const seenIds = new Set<string>();
for (const concept of concepts) {
  if (seenIds.has(concept.id)) errors.push(`duplicate concept id "${concept.id}"`);
  seenIds.add(concept.id);

  for (const rel of concept.related) {
    if (rel === concept.id) errors.push(`"${concept.id}" lists itself in related`);
    else if (!conceptIds.has(rel))
      errors.push(`"${concept.id}" relates to unknown concept "${rel}"`);
  }
  for (const pid of concept.postIds) {
    if (!postIds.has(pid))
      errors.push(`"${concept.id}" references unknown post "${pid}"`);
  }

  for (const locale of locales) {
    const content = concept.locales[locale];
    if (!/^[a-z0-9-]+$/.test(content.slug) || content.slug === "index")
      errors.push(`"${concept.id}" has invalid ${locale} slug "${content.slug}"`);
    if (content.sections.length === 0)
      errors.push(`"${concept.id}" has no ${locale} sections`);
  }
}

for (const locale of locales) {
  const seenSlugs = new Set<string>();
  for (const concept of concepts) {
    const slug = concept.locales[locale].slug;
    if (seenSlugs.has(slug))
      errors.push(`duplicate ${locale} slug "${slug}"`);
    seenSlugs.add(slug);
  }
}

// --- Warnings ---------------------------------------------------------------

const degree = new Map<string, number>();
for (const concept of concepts) {
  for (const rel of concept.related) {
    degree.set(concept.id, (degree.get(concept.id) ?? 0) + 1);
    degree.set(rel, (degree.get(rel) ?? 0) + 1);
  }
}
for (const concept of concepts) {
  if (!degree.get(concept.id))
    warnings.push(`"${concept.id}" is an orphan node (no edges)`);
  if (concept.postIds.length === 0)
    warnings.push(`"${concept.id}" links to no blog posts`);
}

// Mention scan (--suggest only): concept names in posts that aren't linked.
// Tags are deliberately excluded — generic ones ("Ölçüm", "Kreatif") drown
// the output in false positives.
function blockText(b: BlogBlock): string {
  switch (b.type) {
    case "ul":
      return b.items.join(" ");
    case "p":
    case "h3":
    case "quote":
      return b.text;
    default:
      return "";
  }
}

const suggest = process.argv.includes("--suggest");
for (const post of suggest ? posts : []) {
  for (const locale of locales) {
    const content = post.locales[locale];
    const text = [
      content.title,
      content.excerpt,
      ...content.intro,
      ...content.sections.flatMap((s) => [s.h2, ...s.blocks.map(blockText)]),
      ...content.faq.flatMap((f) => [f.q, f.a]),
    ].join(" ");

    for (const concept of concepts) {
      if (concept.postIds.includes(post.id)) continue;
      const c = concept.locales[locale];
      // Already linked in prose counts as connected — that is the other half
      // of the relationship, and re-warning about it would train you to
      // ignore this output.
      if (text.includes(`(/${locale}/${conceptsSlug[locale]}/${c.slug})`)) continue;

      // Word boundaries, not substrings: "CRO" would otherwise fire on
      // "mikro" and "GEO" on "geo splits". A trailing apostrophe counts as a
      // boundary so Turkish suffixes ("ROAS'ı") still match.
      const term = c.graphLabel ?? c.name;
      const pattern = new RegExp(
        `(^|[\\s("'‘“])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([\\s.,;:)!?"'’”]|$)`,
        "i",
      );
      if (term.length >= 3 && pattern.test(text))
        warnings.push(
          `post "${post.id}" (${locale}) mentions "${term}" but neither links to it nor appears in "${concept.id}".postIds — consider connecting`,
        );
    }
  }
}

// --- Report -----------------------------------------------------------------

for (const w of warnings) console.warn(`concepts-check warning: ${w}`);
if (errors.length > 0) {
  for (const e of errors) console.error(`concepts-check ERROR: ${e}`);
  process.exit(1);
}
console.log(
  `concepts-check OK: ${concepts.length} concepts, ${warnings.length} warning(s)`,
);
