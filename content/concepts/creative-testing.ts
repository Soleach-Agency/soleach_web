import type { Concept } from "@/lib/concepts";

export const creativeTesting: Concept = {
  id: "creative-testing",
  category: "creative",
  publishedAt: "2026-07-28",
  related: ["ugc"],
  postIds: ["bes-hook-testi", "instagram-reklam-rehberi", "kreatif-yorgunlugu-frekans"],
  locales: {
    tr: {
      slug: "kreatif-testi",
      name: "Kreatif Testi",
      metaTitle: "Kreatif Testi Nedir? Reklamda Sistemli Deney | Soleach Kavramlar",
      metaDescription:
        "Kreatif testi nedir? Reklam görselleri ve videolarını sistemli deneylerle yarıştırıp kazananı veriyle bulma pratiğinin tanımı.",
      shortDef:
        "Reklam kreatiflerini — video, görsel, metin — kontrollü deneylerle birbirine karşı yarıştırıp kazananı hisle değil veriyle seçme pratiği; sürdürülebilir reklam performansının motoru.",
      sections: [
        {
          h2: "Kreatif testi nedir?",
          blocks: [
            {
              type: "p",
              text: "Kreatif testi, 'hangi reklam daha iyi çalışır' sorusunu tahminle değil deneyle cevaplamaktır: aynı kitleye, aynı bütçeyle, aynı anda birden fazla kreatif varyasyonu gösterip sonuçları karşılaştırırsın. Tek seferlik bir iş değil, sürekli bir döngüdür — çünkü en iyi kreatif bile zamanla yorulur ve performansı düşer.",
            },
            {
              type: "p",
              text: "İyi bir testin şartı tek değişkenli olmasıdır: hook'u test ediyorsan gövde sabit kalır; teklifi test ediyorsan görsel değişmez. Her şeyi aynı anda değiştiren 'test', hangi değişikliğin işe yaradığını asla söylemez. Sonuçlar da doğru metrikten okunmalıdır: beğeni değil, dönüşüm maliyeti.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte kreatif, hedeflemeden daha büyük kaldıraçtır: platformların otomasyonu kitle bulmayı devraldıkça, rekabet neredeyse tamamen 'kim daha iyi kreatif üretiyor' sorusuna kaydı. Aynı ürünün farklı açılarla — problem, ritüel, önce-sonra, sosyal kanıt — anlatımı arasında ciddi performans farkları çıkar; hangisinin senin markanda çalıştığını ancak test söyler.",
            },
            {
              type: "ul",
              items: [
                "Test hacmi öğrenme hızıdır: düzenli yeni varyasyon üretemeyen marka, test de edemez.",
                "Kaybeden kreatif israf değildir; neyin çalışmadığı bilgisi bir sonraki üretimi yönlendirir.",
                "Sonuçlara güvenmek için ölçüm altyapısının (pixel, CAPI) doğru olması ön koşuldur.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bir testin sonucuna ne zaman güvenebilirim?",
          a: "Varyasyonlar yeterli gösterim ve dönüşüm biriktirdiğinde — birkaç saatlik veriyle karar vermek gürültüyü sonuç sanmaktır. Pratik kural: karar metriğin (ör. satın alma) anlamlı sayıda gerçekleşmeden kazanan ilan etme.",
        },
        {
          q: "Kaç varyasyonla test etmeliyim?",
          a: "Bütçenin sağlıklı veri biriktirebileceği kadar: az bütçeye çok varyasyon bölmek hiçbirine yeterli sinyal bırakmaz. Az ama net hipotezli varyasyon, çok ama rastgele varyasyondan daha hızlı öğretir.",
        },
      ],
      tags: ["Kreatif testi", "A/B testi", "Reklam optimizasyonu"],
    },
    en: {
      slug: "creative-testing",
      name: "Creative Testing",
      metaTitle: "What Is Creative Testing? | Soleach Concepts",
      metaDescription:
        "Creative testing explained: racing ad videos and visuals in controlled experiments and picking winners with data instead of taste.",
      shortDef:
        "The practice of racing ad creatives — videos, visuals, copy — against each other in controlled experiments and picking winners with data rather than taste; the engine of sustainable ad performance.",
      sections: [
        {
          h2: "What is creative testing?",
          blocks: [
            {
              type: "p",
              text: "Creative testing answers 'which ad works better' with an experiment instead of a guess: you show multiple creative variations to the same audience, on the same budget, at the same time, and compare the results. It is not a one-off task but a continuous loop — even the best creative fatigues and fades over time.",
            },
            {
              type: "p",
              text: "A valid test changes one variable: testing the hook means the body stays fixed; testing the offer means the visual doesn't move. A 'test' that changes everything at once can never tell you which change mattered. And results must be read from the right metric: cost per conversion, not likes.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "In beauty, creative is a bigger lever than targeting: as platform automation takes over audience-finding, competition has shifted almost entirely to 'who produces better creative'. The same product told through different angles — problem, ritual, before-and-after, social proof — performs wildly differently; only testing tells you which angle works for your brand.",
            },
            {
              type: "ul",
              items: [
                "Testing volume is learning speed: a brand that cannot produce fresh variations regularly cannot test either.",
                "A losing creative is not waste; knowing what doesn't work steers the next production round.",
                "Trusting results requires correct measurement infrastructure (pixel, CAPI) underneath.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "When can I trust a test result?",
          a: "When variations have accumulated enough impressions and conversions — deciding on a few hours of data is mistaking noise for signal. Practical rule: don't declare a winner before your decision metric (e.g. purchases) has occurred a meaningful number of times.",
        },
        {
          q: "How many variations should I test?",
          a: "As many as your budget can feed with healthy data: splitting a small budget across many variations leaves none with enough signal. Fewer variations with clear hypotheses teach faster than many random ones.",
        },
      ],
      tags: ["Creative testing", "A/B testing", "Ad optimization"],
    },
  },
};
