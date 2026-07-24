#!/usr/bin/env node
/**
 * IndexNow ping — tells Bing, Yandex, Seznam, Naver & Yep about pages that
 * actually changed in this build. Runs after `wrangler pages deploy`, so the
 * URLs are already live when the crawlers come knocking.
 *
 * Google does NOT support IndexNow; it discovers changes through sitemap.xml.
 *
 * How "changed" is decided: the exported HTML is stripped of <script>/<link>
 * tags (their hashes churn on every build) and the remaining markup is hashed.
 * The hashes live in indexnow-manifest.json, which is committed — so a fresh
 * clone doesn't re-submit the whole site.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "out");
const MANIFEST = join(root, "indexnow-manifest.json");
const KEY = "05920f3953110a38ed1935c275363f4d";
const HOST = "soleach.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
/** Guard against a churny build spamming the endpoint with the whole site. */
const MAX_URLS = 100;

const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

/** Map a public URL to the exported HTML file backing it. */
function htmlPath(url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, "");
  const candidates = path
    ? [`${path}.html`, join(path, "index.html")]
    : ["index.html"];
  for (const c of candidates) {
    const full = join(OUT, c);
    if (existsSync(full)) return full;
  }
  return null;
}

/** Hash only the rendered markup — asset hashes change every build. */
function contentHash(file) {
  const html = readFileSync(file, "utf8")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*>/gi, "");
  return createHash("sha256").update(html).digest("hex").slice(0, 16);
}

const previous = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, "utf8"))
  : {};
const current = {};
const changed = [];

for (const url of urls) {
  const file = htmlPath(url);
  if (!file) {
    console.warn(`indexnow: no exported HTML for ${url} — skipped`);
    continue;
  }
  const hash = contentHash(file);
  current[url] = hash;
  if (previous[url] !== hash) changed.push(url);
}

if (changed.length === 0) {
  console.log("indexnow: nothing changed, no ping sent");
  process.exit(0);
}

if (changed.length > MAX_URLS) {
  console.warn(
    `indexnow: ${changed.length} URLs changed (> ${MAX_URLS}) — refusing to submit. ` +
      "Delete indexnow-manifest.json and re-run if this is intentional.",
  );
  process.exit(0);
}

if (process.argv.includes("--dry-run")) {
  console.log(`indexnow: would submit ${changed.length} URL(s)`);
  for (const url of changed) console.log(`  ${url}`);
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: changed,
  }),
});

if (!res.ok) {
  // Non-fatal: a failed ping must not fail the deploy.
  console.error(`indexnow: ${res.status} ${res.statusText}`, await res.text());
  process.exit(0);
}

writeFileSync(MANIFEST, `${JSON.stringify(current, null, 2)}\n`);
console.log(`indexnow: submitted ${changed.length} URL(s) — ${res.status}`);
for (const url of changed) console.log(`  ${url}`);
