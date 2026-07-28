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
];
