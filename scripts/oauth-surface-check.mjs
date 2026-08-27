import { readFile } from "node:fs/promises";

const CONSENT_TITLE = "<title>Soleach MCP Yetkilendirme</title>";
const SUPABASE_ORIGIN = "https://thcbkozrgmyqtqjeptbd.supabase.co";
const MCP_RESOURCE = "https://mcp.soleach.com/mcp";
const mode = process.argv[2];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function checkLocalBuild() {
  const [consentHtml, headers] = await Promise.all([
    readFile(new URL("../out/oauth/consent.html", import.meta.url), "utf8"),
    readFile(new URL("../out/_headers", import.meta.url), "utf8"),
  ]);

  assert(consentHtml.includes(CONSENT_TITLE), "OAuth consent page is missing from the static export.");
  assert(headers.includes("/oauth/*"), "OAuth no-store header rule is missing from the static export.");
  assert(headers.includes(SUPABASE_ORIGIN), "Supabase is missing from the exported Content-Security-Policy.");
  console.log("oauth-surface-check: local export OK");
}

async function fetchWithTimeout(url, init = {}) {
  return fetch(url, { ...init, signal: AbortSignal.timeout(10_000) });
}

async function checkLiveOnce() {
  const marker = Date.now().toString(36).padEnd(32, "0");
  const consent = await fetchWithTimeout(
    `https://soleach.com/oauth/consent?authorization_id=${marker}`,
    { headers: { "cache-control": "no-cache" } },
  );
  const consentHtml = await consent.text();
  assert(consent.status === 200, `Live OAuth consent page returned HTTP ${consent.status}.`);
  assert(consentHtml.includes(CONSENT_TITLE), "Live OAuth consent page returned the wrong document.");
  assert(
    consent.headers.get("content-security-policy")?.includes(SUPABASE_ORIGIN),
    "Live OAuth consent page cannot connect to Supabase under its Content-Security-Policy.",
  );

  const metadata = await fetchWithTimeout(`${MCP_RESOURCE.replace(/\/mcp$/, "")}/.well-known/oauth-protected-resource/mcp`);
  assert(metadata.status === 200, `Protected-resource metadata returned HTTP ${metadata.status}.`);
  const metadataBody = await metadata.json();
  assert(metadataBody.resource === MCP_RESOURCE, "Protected-resource metadata advertises the wrong resource.");
  assert(
    Array.isArray(metadataBody.authorization_servers) &&
      metadataBody.authorization_servers.includes(`${SUPABASE_ORIGIN}/auth/v1`),
    "Protected-resource metadata advertises the wrong authorization server.",
  );

  const unauthenticated = await fetchWithTimeout(MCP_RESOURCE);
  assert(unauthenticated.status === 401, `Unauthenticated MCP request returned HTTP ${unauthenticated.status}.`);
  assert(
    unauthenticated.headers.get("www-authenticate")?.includes("resource_metadata="),
    "Unauthenticated MCP response is missing its OAuth discovery pointer.",
  );
}

async function checkLive() {
  let lastError;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      await checkLiveOnce();
      console.log("oauth-surface-check: live OAuth and MCP surfaces OK");
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 6) await new Promise((resolve) => setTimeout(resolve, 2_000));
    }
  }
  throw lastError;
}

if (mode === "local") {
  await checkLocalBuild();
} else if (mode === "live") {
  await checkLive();
} else {
  throw new Error("Usage: node scripts/oauth-surface-check.mjs <local|live>");
}
