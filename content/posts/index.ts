import type { BlogPost } from "@/lib/blog";
import { geoRehberi } from "./geo-rehberi";
import { instagramReklamRehberi } from "./instagram-reklam-rehberi";
import { capcutFontYuklemeHatasi } from "./capcut-font-yukleme-hatasi";
import { ugcNedenDahaCokSatiyor } from "./ugc-neden-daha-cok-satiyor";
import { studyoCekimineIhtiyacinizVarMi } from "./studyo-cekimine-ihtiyaciniz-var-mi";
import { yapayZekaVideoReklamcilik } from "./yapay-zeka-video-reklamcilik";
import { shopifyMagazaKurulumu } from "./shopify-magaza-kurulumu";
import { metaPixelOlcumHatalari } from "./meta-pixel-olcum-hatalari";
import { besHookTesti } from "./bes-hook-testi";
import { ekrandaParfumSatmak } from "./ekranda-parfum-satmak";
import { reklamAjanslariNedenShopify } from "./reklam-ajanslari-neden-shopify";
import { kreatifYorgunluguFrekans } from "./kreatif-yorgunlugu-frekans";
import { sosyalMedyaAnalitikAraclari } from "./sosyal-medya-analitik-araclari";
import { searchConsolePlatformProperties } from "./search-console-platform-properties";
import { searchConsoleInstagramEkleme } from "./search-console-instagram-ekleme";

/** Register every post here; lib/blog.ts sorts by date. */
export const posts: BlogPost[] = [
  geoRehberi,
  instagramReklamRehberi,
  capcutFontYuklemeHatasi,
  ugcNedenDahaCokSatiyor,
  studyoCekimineIhtiyacinizVarMi,
  yapayZekaVideoReklamcilik,
  shopifyMagazaKurulumu,
  metaPixelOlcumHatalari,
  besHookTesti,
  ekrandaParfumSatmak,
  reklamAjanslariNedenShopify,
  kreatifYorgunluguFrekans,
  sosyalMedyaAnalitikAraclari,
  searchConsolePlatformProperties,
  searchConsoleInstagramEkleme,
];
