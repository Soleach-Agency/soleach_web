import type { Concept } from "@/lib/concepts";

export const capi: Concept = {
  id: "capi",
  category: "ads",
  publishedAt: "2026-07-28",
  related: ["cpa"],
  postIds: [
    "meta-pixel-olcum-hatalari",
    "reklam-ajanslari-neden-shopify",
    "sosyal-medya-analitik-araclari",
  ],
  locales: {
    tr: {
      slug: "conversion-api",
      name: "Conversions API (CAPI)",
      graphLabel: "CAPI",
      metaTitle: "Conversions API (CAPI) Nedir? Sunucu Taraflı Takip | Soleach",
      metaDescription:
        "Conversions API (CAPI) nedir? Dönüşüm verilerini tarayıcı yerine sunucudan Meta'ya ileten, pixel sinyal kaybını telafi eden altyapının tanımı.",
      shortDef:
        "Dönüşüm event'lerini tarayıcıdaki pixel yerine doğrudan sunucundan Meta'ya ileten altyapı; çerez kısıtlamaları ve reklam engelleyicilerin düşürdüğü sinyali telafi eder.",
      sections: [
        {
          h2: "Conversions API nedir?",
          blocks: [
            {
              type: "p",
              text: "Conversions API (kısaca CAPI), satın alma ve sepete ekleme gibi event'leri kullanıcının tarayıcısından değil, senin sunucundan (ya da Shopify gibi platformun sunucusundan) Meta'ya ileten bağlantıdır. Pixel'in tarayıcıda karşılaştığı engellerden — çerez kısıtlamaları, izleme önleme özellikleri, reklam engelleyiciler — etkilenmez.",
            },
            {
              type: "p",
              text: "CAPI, pixel'in alternatifi değil tamamlayıcısıdır: iki kanal aynı event'i gönderir, Meta bunları event_id üzerinden eşleştirip tekilleştirir. Doğru kurulumda sonuç, daha yüksek eşleşme kalitesi ve optimizasyonun daha tam veriyle çalışmasıdır; yanlış kurulumda ise aynı satışın iki kez sayılması gibi daha büyük ölçüm hataları doğar.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için Conversions API neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik alışverişinin önemli bölümü, izleme kısıtlamalarının en agresif olduğu mobil tarayıcılarda ve uygulama içi tarayıcılarda gerçekleşir. Yalnızca pixel'e dayanan bir marka bu ortamlarda gerçekleşen dönüşümlerin bir kısmını hiç göremez — kampanya aslında satarken 'satmıyor' görünür ve yanlış kararlara yol açar.",
            },
            {
              type: "p",
              text: "Shopify gibi platformlarda CAPI hazır entegrasyonla açılabilir; kritik nokta pixel ile CAPI'nin aynı event'leri aynı event_id ile göndermesi ve tekilleştirmenin çalıştığının doğrulanmasıdır.",
            },
            {
              type: "p",
              text: "Pixel ile CAPI'nin birlikte nasıl kurulduğunu ve nerede yanlış gittiğini [ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi), Shopify tarafını ise [bu yazıda](/tr/blog/reklam-ajanslari-neden-shopify-seviyor) anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "CAPI kurunca pixel'i kaldırmalı mıyım?",
          a: "Hayır. Meta ikisinin birlikte çalışmasını önerir: pixel tarayıcı sinyalini, CAPI sunucu sinyalini taşır; sistem event_id ile ikisini eşleştirip tekilleştirir. Birlikte, tek başına pixel'den daha tam bir resim verirler.",
        },
        {
          q: "Çift sayım riskini nasıl önlerim?",
          a: "Her event'e iki kanalda da aynı event_id'yi göndererek. Tekilleştirmenin çalıştığını Meta Events Manager'daki event detaylarından doğrulayabilirsin; sipariş sayınla satın alma event sayısını düzenli karşılaştırmak en sağlam kontroldür.",
        },
      ],
      tags: ["Conversions API", "CAPI", "Sunucu taraflı takip", "Ölçümleme"],
    },
    en: {
      slug: "conversions-api",
      name: "Conversions API (CAPI)",
      graphLabel: "CAPI",
      metaTitle: "What Is the Conversions API? Server-Side Tracking | Soleach",
      metaDescription:
        "The Conversions API (CAPI) explained: sending conversion data to Meta from your server instead of the browser, recovering the signal that pixels lose.",
      shortDef:
        "The connection that sends conversion events to Meta directly from your server instead of the browser pixel, recovering the signal lost to cookie restrictions and ad blockers.",
      sections: [
        {
          h2: "What is the Conversions API?",
          blocks: [
            {
              type: "p",
              text: "The Conversions API (CAPI) delivers events like purchases and add-to-carts to Meta from your server (or your platform's server, e.g. Shopify) rather than from the user's browser. It is unaffected by the obstacles the pixel faces in the browser — cookie restrictions, tracking prevention, ad blockers.",
            },
            {
              type: "p",
              text: "CAPI complements the pixel rather than replacing it: both channels send the same event, and Meta matches and deduplicates them via the event_id. Done right, the result is higher match quality and optimization running on more complete data; done wrong, it creates bigger measurement errors, like the same sale being counted twice.",
            },
          ],
        },
        {
          h2: "Why the Conversions API matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "A large share of beauty shopping happens in mobile browsers and in-app browsers — exactly where tracking restrictions are most aggressive. A brand relying on the pixel alone never sees part of the conversions happening there: a campaign that is actually selling looks like it isn't, and drives the wrong decisions.",
            },
            {
              type: "p",
              text: "On platforms like Shopify, CAPI can be enabled through the native integration; the critical part is that the pixel and CAPI send the same events with the same event_id, and that deduplication is verified to work.",
            },
            {
              type: "p",
              text: "We cover how the pixel and CAPI work together — and where it goes wrong — in our [measurement errors](/en/blog/meta-pixel-measurement-errors-attribution) post, and the Shopify side [here](/en/blog/why-ad-agencies-love-shopify).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Should I remove the pixel once CAPI is set up?",
          a: "No. Meta recommends running both: the pixel carries the browser signal, CAPI carries the server signal, and the system deduplicates them via event_id. Together they give a more complete picture than the pixel alone.",
        },
        {
          q: "How do I avoid double counting?",
          a: "By sending the same event_id on both channels for every event. You can verify deduplication in the event details in Meta Events Manager; regularly comparing your order count against purchase events is the most reliable check.",
        },
      ],
      tags: ["Conversions API", "CAPI", "Server-side tracking", "Measurement"],
    },
  },
};
