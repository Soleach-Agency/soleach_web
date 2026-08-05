import type { Concept } from "@/lib/concepts";
import { geo } from "./geo";
import { seo } from "./seo";
import { metaPixel } from "./meta-pixel";
import { capi } from "./capi";
import { roas } from "./roas";
import { cpa } from "./cpa";
import { retargeting } from "./retargeting";
import { hook } from "./hook";
import { creativeTesting } from "./creative-testing";
import { ugc } from "./ugc";
import { aiVideo } from "./ai-video";
import { shopify } from "./shopify";
import { cro } from "./cro";
import { funnel } from "./funnel";
import { cta } from "./cta";
import { frequency } from "./frequency";
import { creativeFatigue } from "./creative-fatigue";
import { web } from "./web";
import { cloudflare } from "./cloudflare";
import { cloudflareRoles } from "./cloudflare-roles";
import { cloudflarePartner } from "./cloudflare-partner";
import { dns } from "./dns";
import { llm } from "./llm";
import { slm } from "./slm";
import { aiAgents } from "./ai-agents";
import { aiCrawler } from "./ai-crawler";
import { searchEngine } from "./search-engine";
import { searchConsole } from "./search-console";
import { tiktokPixel } from "./tiktok-pixel";
import { schemaMarkup } from "./schema-markup";
import { coreWebVitals } from "./core-web-vitals";
import { apiToken } from "./api-token";
import { rag } from "./rag";

/**
 * Register every concept here. APPEND-ONLY: the graph layout seeds node
 * positions from this order, so reordering moves every node and churns the
 * exported HTML (and IndexNow content hashes) of both hub pages.
 */
export const concepts: Concept[] = [
  geo,
  seo,
  metaPixel,
  capi,
  roas,
  cpa,
  retargeting,
  hook,
  creativeTesting,
  ugc,
  aiVideo,
  shopify,
  cro,
  funnel,
  cta,
  frequency,
  creativeFatigue,
  web,
  cloudflare,
  cloudflareRoles,
  cloudflarePartner,
  dns,
  llm,
  slm,
  aiAgents,
  aiCrawler,
  searchEngine,
  searchConsole,
  tiktokPixel,
  schemaMarkup,
  coreWebVitals,
  apiToken,
  rag,
];
