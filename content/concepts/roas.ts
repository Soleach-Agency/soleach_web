import type { Concept } from "@/lib/concepts";

export const roas: Concept = {
  id: "roas",
  category: "ads",
  publishedAt: "2026-07-28",
  related: ["cpa", "retargeting", "cro", "creative-testing"],
  postIds: ["instagram-reklam-rehberi", "meta-pixel-olcum-hatalari"],
  locales: {
    tr: {
      slug: "roas",
      name: "ROAS (Reklam Harcaması Getirisi)",
      graphLabel: "ROAS",
      metaTitle: "ROAS Nedir? Reklam Harcaması Getirisi | Soleach Kavramlar",
      metaDescription:
        "ROAS (reklam harcaması getirisi) nedir, nasıl hesaplanır? Reklam harcamasının kaç katı ciro ürettiğini gösteren metriğin tanımı ve doğru okunması.",
      shortDef:
        "Reklama harcanan her 1 liranın kaç lira ciro ürettiğini gösteren oran (ciro ÷ reklam harcaması); performans reklamcılığının en çok konuşulan — ve en çok yanlış okunan — metriği.",
      sections: [
        {
          h2: "ROAS nedir?",
          blocks: [
            {
              type: "p",
              text: "ROAS (Return on Ad Spend), reklamdan gelen cironun reklam harcamasına bölünmesiyle bulunur: 10.000 TL harcayıp 40.000 TL ciro ürettiysen ROAS 4'tür. Basit görünür, ama iki büyük tuzağı var: cironun hangi satışları kapsadığı (atıf) ve kârlılıkla karıştırılması.",
            },
            {
              type: "p",
              text: "Yüksek ROAS her zaman iyi işleyen reklam demek değildir. Yalnızca zaten satın alacak kitleye (ör. mevcut müşterilere) reklam gösteren bir hesap çok yüksek ROAS raporlar ama markaya yeni müşteri kazandırmaz. Düşük bütçeyle dar kitlede yüksek ROAS almak kolay, ölçeklerken korumak zordur — bu yüzden ROAS tek başına değil, hacim ve yeni müşteri oranıyla birlikte okunmalıdır.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için ROAS neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte marjlar ürüne göre çok değişir; aynı ROAS bir üründe kârlı, diğerinde zararına satış olabilir. Bu yüzden hedef ROAS'ı belirlerken ürün marjını, iade oranını ve tekrar satın alma davranışını hesaba katmak gerekir — müşterisi düzenli tekrar alan bir markada ilk satışın ROAS'ı tek başına yanıltıcıdır.",
            },
            {
              type: "ul",
              items: [
                "ROAS'ın doğruluğu ölçüme dayanır: pixel ve Conversions API yanlışsa ROAS rakamı da yanlıştır.",
                "Hedef ROAS, 'sektör ortalaması'ndan değil kendi marj yapından türetilmelidir.",
                "Ölçek büyüdükçe ROAS'ın bir miktar düşmesi normaldir; önemli olan toplam kârın büyümesidir.",
              ],
            },
            {
              type: "p",
              text: "Hedef ROAS'ın doğruluğunu ölçüm belirler; nerede kırıldığını [Meta Pixel ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) inceledik. Aynı matematiğin tersinden okunuşu için [CPA](/tr/kavramlar/cpa) kavramına bak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "İyi bir ROAS kaçtır?",
          a: "Markanın marj yapısına bağlıdır; evrensel bir 'iyi ROAS' yoktur. Ürün marjı, operasyon maliyetleri ve iade oranıyla birlikte başabaş ROAS'ını hesaplayıp hedefi onun üzerine koymak, sektör ortalaması kovalamaktan her zaman daha sağlıklıdır.",
        },
        {
          q: "ROAS ile kârlılık aynı şey mi?",
          a: "Hayır. ROAS ciro bazlı bir orandır; ürün maliyetini, kargoyu, iadeleri ve operasyonu görmez. ROAS 4 olan bir kampanya, marjı düşük bir üründe pekâlâ zarar ediyor olabilir. Nihai karar metriği kâr olmalıdır.",
        },
      ],
      tags: ["ROAS", "Reklam harcaması getirisi", "Performans pazarlama", "Reklam metrikleri"],
    },
    en: {
      slug: "roas",
      name: "ROAS (Return on Ad Spend)",
      graphLabel: "ROAS",
      metaTitle: "What Is ROAS? Return on Ad Spend | Soleach Concepts",
      metaDescription:
        "ROAS (return on ad spend) explained: how to calculate the revenue-per-ad-spend ratio, what a good ROAS is, and how to read it without fooling yourself.",
      shortDef:
        "The ratio showing how much revenue every unit of ad spend produces (revenue ÷ ad spend) — performance marketing's most discussed, and most misread, metric.",
      sections: [
        {
          h2: "What is ROAS?",
          blocks: [
            {
              type: "p",
              text: "ROAS (Return on Ad Spend) is revenue attributed to ads divided by ad spend: spend 10,000 and generate 40,000 in revenue, and your ROAS is 4. It looks simple, but it hides two big traps: which sales the revenue actually includes (attribution) and the confusion between ROAS and profitability.",
            },
            {
              type: "p",
              text: "High ROAS does not always mean ads are working. An account that only shows ads to people who would buy anyway (say, existing customers) reports a spectacular ROAS while winning the brand no new customers. High ROAS is easy at low budgets in narrow audiences and hard to keep while scaling — which is why ROAS should be read together with volume and new-customer share, never alone.",
            },
          ],
        },
        {
          h2: "Why ROAS matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty margins vary widely by product; the same ROAS can be profitable on one product and loss-making on another. A target ROAS should be derived from product margin, return rates and repeat-purchase behavior — in a brand whose customers reorder regularly, first-purchase ROAS alone is misleading.",
            },
            {
              type: "ul",
              items: [
                "ROAS is only as accurate as your measurement: if the pixel and Conversions API are wrong, so is the ROAS number.",
                "Target ROAS should come from your own margin structure, not an 'industry average'.",
                "Some ROAS decline while scaling is normal; what matters is total profit growing.",
              ],
            },
            {
              type: "p",
              text: "Your target ROAS is only as good as your measurement — we dig into where it breaks in our [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution) post. For the same math read from the other side, see [CPA](/en/concepts/cpa).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is a good ROAS?",
          a: "It depends on your margin structure; there is no universal 'good ROAS'. Calculating your break-even ROAS from product margin, operating costs and return rates, then setting the target above it, always beats chasing an industry average.",
        },
        {
          q: "Is ROAS the same as profitability?",
          a: "No. ROAS is a revenue-based ratio; it does not see product cost, shipping, returns or operations. A campaign at ROAS 4 can easily lose money on a low-margin product. The final decision metric should be profit.",
        },
      ],
      tags: ["ROAS", "Return on ad spend", "Performance marketing", "Ad metrics"],
    },
  },
};
