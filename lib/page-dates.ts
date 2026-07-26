import { getPosts } from "./blog";

/**
 * Last meaningful content change per static page — the sitemap's `lastmod`
 * source. Bump the date by hand when a page's visible copy changes (a
 * dictionary edit, a section rewrite); leave it alone for refactors that
 * don't change what a visitor reads. Honest `lastmod` values are the whole
 * point: once a crawler catches the sitemap claiming fresh dates on stale
 * pages, it stops trusting the field site-wide.
 *
 * Blog pages are not listed here — posts carry their own publishedAt /
 * updatedAt, and the blog index derives from the newest post.
 */
export const staticPageUpdatedAt = {
  "": "2026-07-11",
  services: "2026-07-11",
  about: "2026-07-11",
  contact: "2026-07-11",
  links: "2026-07-20",
} as const;

/** The blog index changes whenever a post is published or updated. */
export function blogIndexUpdatedAt(): string {
  let latest = "";
  for (const { post } of getPosts("tr")) {
    const date = post.updatedAt ?? post.publishedAt;
    if (date > latest) latest = date;
  }
  return latest || staticPageUpdatedAt[""];
}
