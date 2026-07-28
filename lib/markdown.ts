import type { Locale } from "./i18n";
import { localeHtmlLang } from "./i18n";
import { getDictionary } from "./dictionaries";
import { getPosts, getPostBySlug, type BlogBlock } from "./blog";
import {
  getConceptBySlug,
  getConceptPosts,
  getConcepts,
  relatedConcepts,
} from "./concepts";
import { localeUrl, siteConfig, siteUrl } from "./site";

/**
 * Markdown renderings of every page, generated from the same typed source the
 * HTML comes from.
 *
 * Cloudflare's Markdown for Agents would do this at the edge, but it needs a
 * Pro plan; generating from source is free and produces cleaner output anyway,
 * since it never has to guess which parts of the DOM were content.
 *
 * Served by `functions/_middleware.ts` when a client asks for `text/markdown`.
 */

/** Turn `[label](href)` into an absolute link — relative targets break for agents. */
function absolutise(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label, href) => `[${label}](${href.startsWith("/") ? siteUrl + href : href})`,
  );
}

/** Escape a value for a YAML double-quoted scalar. */
function yaml(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function frontmatter(fields: Record<string, string | undefined>): string {
  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${yaml(v as string)}`);
  return `---\n${lines.join("\n")}\n---\n`;
}

function block(b: BlogBlock): string | null {
  switch (b.type) {
    case "p":
      return absolutise(b.text);
    case "h3":
      return `### ${absolutise(b.text)}`;
    case "ul":
      return b.items.map((i) => `- ${absolutise(i)}`).join("\n");
    case "quote":
      return `> ${absolutise(b.text)}${b.cite ? `\n>\n> — ${b.cite}` : ""}`;
    case "img":
      return `![${b.alt}](${siteUrl}${b.src})${b.caption ? `\n\n*${b.caption}*` : ""}`;
    case "embed":
      return `*[${b.provider} embed: ${b.title}]*`;
    default:
      return null;
  }
}

function faqSection(items: { q: string; a: string }[], heading: string): string[] {
  if (items.length === 0) return [];
  const out = [`## ${heading}`, ""];
  for (const item of items) {
    out.push(`### ${absolutise(item.q)}`, "", absolutise(item.a), "");
  }
  return out;
}

/** A single blog post. */
export function postMarkdown(locale: Locale, slug: string): string | null {
  const found = getPostBySlug(locale, slug);
  if (!found) return null;
  const { post, content } = found;
  const dict = getDictionary(locale);

  const out: string[] = [
    frontmatter({
      title: content.title,
      description: content.metaDescription,
      published: post.publishedAt,
      updated: post.updatedAt,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, `${dict.routes.blog}/${content.slug}`),
      tags: content.tags.join(", "),
    }),
    `# ${content.title}`,
    "",
    ...content.intro.map(absolutise),
    "",
  ];

  for (const section of content.sections) {
    out.push(`## ${absolutise(section.h2)}`, "");
    for (const b of section.blocks) {
      const rendered = block(b);
      if (rendered) out.push(rendered, "");
    }
  }

  out.push(...faqSection(content.faq, dict.blogPage.faqTitle));

  if (content.sources && content.sources.length > 0) {
    out.push(`## ${dict.blogPage.sourcesTitle}`, "");
    for (const s of content.sources) {
      out.push(`- [${s.label}](${s.url})${s.publisher ? ` — ${s.publisher}` : ""}`);
    }
    out.push("");
  }

  return out.join("\n");
}

/** Home page. */
export function homeMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const { hero, manifesto, process, whyUs, faq } = dict.home;

  const out: string[] = [
    frontmatter({
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale),
    }),
    `# ${hero.title} ${hero.titleAccent}`.trim(),
    "",
    hero.subtitle,
    "",
    hero.note,
    "",
    "## " + manifesto.eyebrow,
    "",
    manifesto.big,
    "",
    manifesto.body,
    "",
    "## " + dict.home.servicesIntro.title,
    "",
    dict.home.servicesIntro.subtitle,
    "",
  ];

  for (const s of dict.services) {
    out.push(`### ${s.title}`, "", `*${s.tagline}*`, "", s.summary, "");
    for (const f of s.features) out.push(`- ${f}`);
    out.push("", `**${dict.servicesPage.outcomeLabel}:** ${s.outcome}`, "");
  }

  out.push(`## ${process.title}`, "", process.subtitle, "");
  for (const [i, step] of process.steps.entries()) {
    out.push(`### ${i + 1}. ${step.title}`, "", step.desc, "");
    out.push(`**${process.deliverablesLabel}:**`, "");
    for (const d of step.deliverables) out.push(`- ${d}`);
    out.push("");
  }

  out.push(`## ${whyUs.title}`, "", whyUs.subtitle, "");
  for (const p of whyUs.points) out.push(`### ${p.title}`, "", p.desc, "");

  out.push(...faqSection(faq.items, faq.title));

  out.push(`## ${dict.home.ctaBand.title}`, "", dict.home.ctaBand.subtitle, "");
  out.push(`Contact: ${siteConfig.email} · Brief form: ${siteConfig.formUrl}`, "");

  return out.join("\n");
}

/** Services page. */
export function servicesMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const out: string[] = [
    frontmatter({
      title: dict.meta.services.title,
      description: dict.meta.services.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, dict.routes.services),
    }),
    `# ${dict.servicesPage.hero.title}`,
    "",
    dict.servicesPage.hero.subtitle,
    "",
  ];

  for (const s of dict.services) {
    out.push(`## ${s.title}`, "", `*${s.tagline}*`, "", s.summary, "");
    out.push(`**${dict.servicesPage.featuresLabel}:**`, "");
    for (const f of s.features) out.push(`- ${f}`);
    out.push("", `**${dict.servicesPage.outcomeLabel}:** ${s.outcome}`, "");
  }

  return out.join("\n");
}

/** About page. */
export function aboutMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const { hero, story, mission, vision, values } = dict.aboutPage;

  const out: string[] = [
    frontmatter({
      title: dict.meta.about.title,
      description: dict.meta.about.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, dict.routes.about),
    }),
    `# ${hero.title}`,
    "",
    hero.subtitle,
    "",
    `## ${story.title}`,
    "",
    ...story.paragraphs.map(absolutise),
    "",
    `## ${mission.title}`,
    "",
    mission.body,
    "",
    `## ${vision.title}`,
    "",
    vision.body,
    "",
    `## ${values.title}`,
    "",
  ];

  for (const v of values.items) out.push(`### ${v.title}`, "", v.desc, "");

  return out.join("\n");
}

/** Contact page. */
export function contactMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const { hero, formTitle, formSubtitle, emailTitle, emailDesc } = dict.contactPage;

  return [
    frontmatter({
      title: dict.meta.contact.title,
      description: dict.meta.contact.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, dict.routes.contact),
    }),
    `# ${hero.title}`,
    "",
    hero.subtitle,
    "",
    `## ${formTitle}`,
    "",
    formSubtitle,
    "",
    `Brief form: ${siteConfig.formUrl}`,
    "",
    `## ${emailTitle}`,
    "",
    emailDesc,
    "",
    `Email: ${siteConfig.email}`,
    "",
  ].join("\n");
}

/** Blog index — titles, dates and links, so an agent can pick what to fetch. */
export function blogIndexMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const out: string[] = [
    frontmatter({
      title: dict.meta.blog.title,
      description: dict.meta.blog.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, dict.routes.blog),
    }),
    `# ${dict.blogPage.hero.title}`,
    "",
    dict.blogPage.hero.subtitle,
    "",
  ];

  for (const { post, content } of getPosts(locale)) {
    const url = localeUrl(locale, `${dict.routes.blog}/${content.slug}`);
    out.push(
      `## [${content.title}](${url})`,
      "",
      `*${post.publishedAt}${post.updatedAt ? ` · ${dict.blogPage.updatedLabel} ${post.updatedAt}` : ""} · ${content.tags.join(", ")}*`,
      "",
      content.excerpt,
      "",
    );
  }

  return out.join("\n");
}

/** Concepts hub — names, links and one-line glosses, grouped by pillar. */
export function conceptsIndexMarkdown(locale: Locale): string {
  const dict = getDictionary(locale);
  const out: string[] = [
    frontmatter({
      title: dict.meta.concepts.title,
      description: dict.meta.concepts.description,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, dict.routes.concepts),
    }),
    `# ${dict.conceptsPage.hero.title}`,
    "",
    dict.conceptsPage.hero.subtitle,
    "",
  ];

  for (const service of dict.services) {
    const group = getConcepts(locale).filter(
      ({ concept }) => concept.category === service.key,
    );
    if (group.length === 0) continue;
    out.push(`## ${service.title}`, "");
    for (const { content } of group) {
      const url = localeUrl(locale, `${dict.routes.concepts}/${content.slug}`);
      out.push(`- [${content.name}](${url}) — ${content.shortDef}`);
    }
    out.push("");
  }

  return out.join("\n");
}

/** A single concept page. */
export function conceptMarkdown(locale: Locale, slug: string): string | null {
  const found = getConceptBySlug(locale, slug);
  if (!found) return null;
  const { concept, content } = found;
  const dict = getDictionary(locale);

  const out: string[] = [
    frontmatter({
      title: content.name,
      description: content.metaDescription,
      published: concept.publishedAt,
      updated: concept.updatedAt,
      lang: localeHtmlLang[locale],
      canonical: localeUrl(locale, `${dict.routes.concepts}/${content.slug}`),
      tags: content.tags?.join(", "),
    }),
    `# ${content.name}`,
    "",
    absolutise(content.shortDef),
    "",
  ];

  for (const section of content.sections) {
    out.push(`## ${absolutise(section.h2)}`, "");
    for (const b of section.blocks) {
      const rendered = block(b);
      if (rendered) out.push(rendered, "");
    }
  }

  if (content.faq) {
    out.push(...faqSection(content.faq, dict.blogPage.faqTitle));
  }

  const neighbors = relatedConcepts(locale, concept);
  if (neighbors.length > 0) {
    out.push(`## ${dict.conceptsPage.relatedConceptsTitle}`, "");
    for (const { content: c } of neighbors) {
      const url = localeUrl(locale, `${dict.routes.concepts}/${c.slug}`);
      out.push(`- [${c.name}](${url}) — ${c.shortDef}`);
    }
    out.push("");
  }

  const posts = getConceptPosts(locale, concept);
  if (posts.length > 0) {
    out.push(`## ${dict.conceptsPage.relatedPostsTitle}`, "");
    for (const { content: p } of posts) {
      out.push(`- [${p.title}](${localeUrl(locale, `${dict.routes.blog}/${p.slug}`)})`);
    }
    out.push("");
  }

  return out.join("\n");
}

/**
 * Shared response shape for every `.md` route handler.
 *
 * Only the body survives `output: export` — headers set here are dropped when
 * the route is baked to a file. Content-Type and `X-Robots-Tag: noindex` for
 * these files are therefore set in `public/_headers` instead.
 */
export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
