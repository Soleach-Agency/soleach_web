import type { BlogPost } from "@/lib/blog";
import { geoRehberi } from "./geo-rehberi";
import { instagramReklamRehberi } from "./instagram-reklam-rehberi";
import { capcutFontYuklemeHatasi } from "./capcut-font-yukleme-hatasi";
import { ugcNedenDahaCokSatiyor } from "./ugc-neden-daha-cok-satiyor";
import { studyoCekimineIhtiyacinizVarMi } from "./studyo-cekimine-ihtiyaciniz-var-mi";
import { yapayZekaVideoReklamcilik } from "./yapay-zeka-video-reklamcilik";
import { shopifyMagazaKurulumu } from "./shopify-magaza-kurulumu";

/** Register every post here; lib/blog.ts sorts by date. */
export const posts: BlogPost[] = [
  geoRehberi,
  instagramReklamRehberi,
  capcutFontYuklemeHatasi,
  ugcNedenDahaCokSatiyor,
  studyoCekimineIhtiyacinizVarMi,
  yapayZekaVideoReklamcilik,
  shopifyMagazaKurulumu,
];
