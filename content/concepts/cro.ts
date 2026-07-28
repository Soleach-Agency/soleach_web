import type { Concept } from "@/lib/concepts";

export const cro: Concept = {
  id: "cro",
  category: "web-ecommerce",
  publishedAt: "2026-07-28",
  related: ["funnel"],
  postIds: ["shopify-magaza-kurulumu"],
  locales: {
    tr: {
      slug: "donusum-orani-optimizasyonu",
      name: "Dönüşüm Oranı Optimizasyonu (CRO)",
      graphLabel: "CRO",
      metaTitle: "CRO Nedir? Dönüşüm Oranı Optimizasyonu | Soleach Kavramlar",
      metaDescription:
        "CRO (dönüşüm oranı optimizasyonu) nedir? Mevcut site trafiğinden daha çok satış çıkarma disiplininin tanımı ve reklam maliyetine etkisi.",
      shortDef:
        "Siteye zaten gelen ziyaretçilerin daha büyük bölümünü müşteriye çeviren sistemli iyileştirme çalışması; reklam bütçesini artırmadan satışı artırmanın yolu.",
      sections: [
        {
          h2: "CRO nedir?",
          blocks: [
            {
              type: "p",
              text: "CRO (Conversion Rate Optimization), sitenin dönüşüm oranını — ziyaretçilerin satın almaya, üyeliğe ya da hedeflenen eyleme ulaşma yüzdesini — sistemli deneylerle yükseltme disiplinidir. Malzemesi tahmin değil gözlemdir: ziyaretçiler nerede takılıyor, hangi sayfada vazgeçiyor, neyi bulamıyor?",
            },
            {
              type: "p",
              text: "Tipik kaldıraçlar bellidir: sayfa hızı, ürün sayfasının ikna kurgusu (görsel, açıklama, sosyal kanıt), sürtünmesiz ödeme akışı, güven öğeleri ve mobil deneyim. Her değişiklik bir hipotezdir ve mümkün olduğunda test ile doğrulanır — CRO, 'siteyi güzelleştirmek' değil, ölçülebilir davranış değişikliği üretmektir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Reklam maliyetleri sürekli artarken, aynı trafikten daha çok satış çıkarmak en ucuz büyüme kaldıracıdır: dönüşüm oranı iki katına çıkan bir sitede, aynı reklam bütçesinin getirisi de ikiye katlanır. CRO bu yüzden reklamın rakibi değil, çarpanıdır.",
            },
            {
              type: "p",
              text: "Kozmetikte dönüşümün önündeki tipik engeller kategoriye özgüdür: 'cildime uyar mı' tereddüdü, içerik ve kullanım soruları, iade politikası endişesi. Bu itirazları ürün sayfasında cevaplayan markalar — net içerik bilgisi, gerçek yorumlar, kullanım rehberi — reklam trafiğini boşa akıtmaz.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "CRO'ya nereden başlamalıyım?",
          a: "Veriden: hangi sayfalar trafiği alıp satışa çeviremiyor, ödeme akışının hangi adımında kayıp var? En çok trafik alan ve en çok kayıp yaşatan noktadan başlamak, etkisi en büyük iyileştirmeyi öne çeker.",
        },
        {
          q: "Dönüşüm oranım kaç olmalı?",
          a: "Kategoriye, trafik kaynağına ve fiyat noktasına göre çok değişir; başkasının oranı senin hedefin olamaz. Sağlıklı yaklaşım, kendi mevcut oranını ölçüp onu istikrarlı şekilde yukarı taşımaktır.",
        },
      ],
      tags: ["CRO", "Dönüşüm oranı", "E-ticaret"],
    },
    en: {
      slug: "conversion-rate-optimization",
      name: "Conversion Rate Optimization (CRO)",
      graphLabel: "CRO",
      metaTitle: "What Is CRO? Conversion Rate Optimization | Soleach Concepts",
      metaDescription:
        "CRO (conversion rate optimization) explained: the discipline of turning more of your existing traffic into sales, and its effect on ad costs.",
      shortDef:
        "The systematic practice of converting a larger share of the visitors you already have into customers; the way to grow sales without growing the ad budget.",
      sections: [
        {
          h2: "What is CRO?",
          blocks: [
            {
              type: "p",
              text: "CRO (Conversion Rate Optimization) is the discipline of raising a site's conversion rate — the percentage of visitors who buy, sign up or complete the target action — through systematic experiments. Its raw material is observation, not guesswork: where do visitors get stuck, which page do they abandon, what can't they find?",
            },
            {
              type: "p",
              text: "The typical levers are well known: page speed, the persuasion structure of the product page (visuals, copy, social proof), a frictionless checkout, trust elements and mobile experience. Every change is a hypothesis, validated with a test whenever possible — CRO is not 'making the site prettier', it is producing measurable behavior change.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "With ad costs rising steadily, extracting more sales from the same traffic is the cheapest growth lever there is: double the conversion rate and the return on the same ad budget doubles with it. CRO is not advertising's rival — it is its multiplier.",
            },
            {
              type: "p",
              text: "In beauty, the barriers to conversion are category-specific: the 'will it suit my skin' hesitation, ingredient and usage questions, return-policy anxiety. Brands that answer those objections on the product page — clear ingredient information, genuine reviews, usage guidance — stop pouring ad traffic down the drain.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Where do I start with CRO?",
          a: "With data: which pages receive traffic but fail to convert it, and at which checkout step do you lose people? Starting where traffic and loss are both highest front-loads the improvement with the biggest impact.",
        },
        {
          q: "What should my conversion rate be?",
          a: "It varies enormously by category, traffic source and price point; someone else's rate cannot be your target. The healthy approach is measuring your own current rate and moving it up consistently.",
        },
      ],
      tags: ["CRO", "Conversion rate", "E-commerce"],
    },
  },
};
