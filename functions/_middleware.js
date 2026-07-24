/**
 * Markdown content negotiation.
 *
 * Cloudflare's own "Markdown for Agents" does this at the edge, but it needs a
 * Pro plan. This reproduces the same behaviour on the Free plan by serving the
 * pre-rendered `.md` twin of a page when the client asks for `text/markdown`.
 *
 * The twins are generated at build time from the typed source (see
 * `lib/markdown.ts`), so they are cleaner than an HTML-to-Markdown conversion
 * would be — nothing has to guess which part of the DOM was the content.
 *
 * Negotiation matches Cloudflare's documented rules exactly:
 *   Accept: text/markdown                    -> Markdown
 *   Accept: text/markdown, text/html;q=0.9   -> Markdown
 *   Accept: text/&#42;                          -> Markdown
 *   Accept: &#42;/&#42;                            -> HTML (default browser behaviour)
 */

/** Parse an Accept header into media ranges with their q values. */
function parseAccept(header) {
  return header
    .split(",")
    .map((part) => {
      const [type, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim().match(/^q=([\d.]+)$/i))
        .find(Boolean);
      return { type: type.trim().toLowerCase(), q: q ? parseFloat(q[1]) : 1 };
    })
    .filter((r) => r.type && !Number.isNaN(r.q));
}

/**
 * True when the client prefers Markdown over HTML.
 *
 * `text/*` counts as a Markdown signal but `*​/*` deliberately does not — every
 * browser sends `*​/*` as a fallback, and they want HTML.
 */
function prefersMarkdown(header) {
  if (!header) return false;
  const ranges = parseAccept(header);

  let markdownQ = 0;
  let htmlQ = 0;
  for (const { type, q } of ranges) {
    if (type === "text/markdown") markdownQ = Math.max(markdownQ, q);
    else if (type === "text/*") markdownQ = Math.max(markdownQ, q);
    else if (type === "text/html") htmlQ = Math.max(htmlQ, q);
  }

  return markdownQ > 0 && markdownQ >= htmlQ;
}

/** Map a page path to its generated Markdown twin. */
function markdownPath(pathname) {
  const clean = pathname.replace(/\/+$/, "");
  // Root redirects to /tr, and dotted paths are assets or already Markdown.
  if (!clean || /\.[a-z0-9]+$/i.test(clean)) return null;
  return `${clean}/index.md`;
}

export async function onRequest(context) {
  const { request, next, env } = context;

  if (request.method !== "GET" && request.method !== "HEAD") return next();
  if (!prefersMarkdown(request.headers.get("Accept"))) return next();

  const url = new URL(request.url);
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/.well-known/")) {
    return next();
  }

  const target = markdownPath(url.pathname);
  if (!target) return next();

  const asset = await env.ASSETS.fetch(new URL(target, url.origin));
  // No twin for this page (404s, /links, anything not pre-rendered) — serve HTML.
  if (!asset.ok) return next();

  const headers = new Headers(asset.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  // The same URL now has two representations; caches must key on Accept.
  headers.set("Vary", "Accept");
  // Append rather than set — the twin already carries the site-wide discovery
  // links (llms.txt, api-catalog, agent-skills), and an agent asking for
  // Markdown is exactly who those are for.
  headers.append("Link", `<${url.origin}${url.pathname}>; rel="canonical"`);
  // noindex belongs to the raw twin, not to this page at its canonical URL.
  headers.delete("X-Robots-Tag");

  return new Response(request.method === "HEAD" ? null : asset.body, {
    status: 200,
    headers,
  });
}
