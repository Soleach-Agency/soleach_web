import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Hand-rolled robots.txt instead of Next's `MetadataRoute.Robots`, because that
 * API can only emit the classic directives — we also need `Content-Signal`
 * (contentsignals.org), which declares how crawlers may *use* the content
 * rather than whether they may fetch it.
 *
 * Everything is `yes` on purpose. Soleach is an agency that wants to be found,
 * quoted and recommended by generative engines; being present in training data
 * and in real-time answers is the goal, not a leak. Flip `ai-train` to `no` if
 * that calculus ever changes.
 */
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=yes";

/**
 * Named AI crawlers, listed explicitly so the permission is unambiguous to
 * operators that look for their own user-agent before falling back to `*`.
 * Grouped by operator for readability; the rules are identical.
 */
const AI_USER_AGENTS = [
  // OpenAI — training, ChatGPT search index, and live browsing.
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic — training, Claude search index, and live browsing.
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity — index and live browsing.
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini / Vertex) and Apple (Apple Intelligence) opt-ins.
  "Google-Extended",
  "Applebot-Extended",
  // Meta, Amazon, ByteDance.
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  // Common Crawl feeds a long tail of models.
  "CCBot",
  // Smaller engines that still surface citations.
  "cohere-ai",
  "Diffbot",
  "YouBot",
  "Timpibot",
];

function group(userAgent: string): string {
  return [
    `User-agent: ${userAgent}`,
    `Content-Signal: ${CONTENT_SIGNAL}`,
    "Allow: /",
  ].join("\n");
}

export function GET(): Response {
  const body = [
    "# Soleach — kozmetik ve güzellik markaları için dijital reklam ajansı.",
    "# Structured summary for agents: /llms.txt · Full corpus: /llms-full.txt",
    "# Agent skills: /.well-known/agent-skills/index.json",
    "#",
    "# Content Signals (https://contentsignals.org/) declare how this content",
    "# may be used, not whether it may be fetched:",
    "#   search   — building a search index",
    "#   ai-input — feeding a model to answer a question in real time",
    "#   ai-train — training or fine-tuning a model",
    "",
    group("*"),
    "",
    ...AI_USER_AGENTS.flatMap((ua) => [group(ua), ""]),
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
