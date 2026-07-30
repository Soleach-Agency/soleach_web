import type { Concept } from "@/lib/concepts";

export const retargeting: Concept = {
  id: "retargeting",
  category: "ads",
  publishedAt: "2026-07-28",
  related: ["funnel"],
  postIds: ["instagram-reklam-rehberi", "kreatif-yorgunlugu-frekans"],
  locales: {
    tr: {
      slug: "retargeting",
      name: "Retargeting (Yeniden Hedefleme)",
      graphLabel: "Retargeting",
      metaTitle: "Retargeting Nedir? Yeniden Hedefleme | Soleach Kavramlar",
      metaDescription:
        "Retargeting (yeniden hedefleme) nedir? Siteni ziyaret etmiş ama satın almamış kişilere yeniden reklam gösterme stratejisinin tanımı ve doğru kullanımı.",
      shortDef:
        "Markanla daha önce temas etmiş — siteni gezmiş, ürünü sepete atmış, videonu izlemiş — kişilere yeniden reklam gösterme stratejisi; funnel'ın alt katmanının motoru.",
      sections: [
        {
          h2: "Retargeting nedir?",
          blocks: [
            {
              type: "p",
              text: "Retargeting, reklam sisteminin daha önce markanla etkileşime girmiş kişileri — ürün sayfası gezenleri, sepete ekleyenleri, videonu belli bir süre izleyenleri — tanıyıp onlara özel reklam göstermesidir. Sinyal kaynağı sitede pixel ve Conversions API, platform içinde ise etkileşim verileridir.",
            },
            {
              type: "p",
              text: "Gücü niyetten gelir: sepete kadar gelmiş biri, markayı hiç duymamış birinden çok daha yakındır satın almaya. Ama aynı güç tuzağıdır — retargeting kitleleri küçüktür ve zaten dönmeye yakın kişileri kapsadığı için raporlarda hep parlak görünür. Tüm bütçeyi oraya kaydırmak, markaya yeni müşteri kazandıran üst katmanı kurutur.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte satın alma kararı nadiren ilk temasta biter: müşteri içerik listesine bakar, yorum arar, fiyat karşılaştırır. Retargeting bu araştırma boşluğunda markayı hatırlatır — sepette kalan ürünü, merak edilen içeriğin cevabını ya da sosyal kanıtı tam zamanında önüne getirir.",
            },
            {
              type: "ul",
              items: [
                "Retargeting'in hammaddesi ölçümdür: pixel ve CAPI doğru kurulmadan kitleler eksik dolar.",
                "Sıklık sınırı önemlidir; aynı kişiye aynı reklamı defalarca göstermek marka algısını yıpratır.",
                "Sepet hatırlatmasından ibaret değildir: itiraz gideren içerik ve sosyal kanıt da bu katmanın işidir.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bütçemin ne kadarı retargeting'e gitmeli?",
          a: "Markanın olgunluğuna göre değişir, ama retargeting'in ölçeği her zaman üst katmanın beslediği kitle kadar olur. Trafiği küçük bir sitede retargeting bütçesi büyütülemez; önce soğuk kitleye erişim, sonra yeniden hedefleme gelir.",
        },
        {
          q: "Retargeting neden hep en yüksek ROAS'ı gösteriyor?",
          a: "Çünkü zaten satın almaya en yakın kişilere gösterim yapar; bir kısmı reklamsız da dönecekti. Bu yüzden retargeting performansını tek başına değil, toplam yeni müşteri maliyetiyle birlikte okumak gerekir.",
        },
      ],
      tags: ["Retargeting", "Yeniden hedefleme", "Meta reklamları"],
    },
    en: {
      slug: "retargeting",
      name: "Retargeting",
      metaTitle: "What Is Retargeting? | Soleach Concepts",
      metaDescription:
        "Retargeting explained: showing ads again to people who visited your site but didn't buy — how it works and how to use it without fooling your reports.",
      shortDef:
        "The strategy of showing ads to people who already touched your brand — browsed your site, added to cart, watched your video; the engine of the lower funnel.",
      sections: [
        {
          h2: "What is retargeting?",
          blocks: [
            {
              type: "p",
              text: "Retargeting is the ad system recognizing people who previously interacted with your brand — product-page visitors, cart abandoners, viewers who watched a certain share of your video — and serving them dedicated ads. On your site the signal comes from the pixel and Conversions API; on-platform, from engagement data.",
            },
            {
              type: "p",
              text: "Its power comes from intent: someone who reached the cart is far closer to buying than someone who never heard of you. That power is also the trap — retargeting audiences are small and full of people already close to converting, so they always look brilliant in reports. Shifting the whole budget there starves the upper funnel that wins the brand new customers.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty purchase decisions rarely close on first touch: customers check ingredient lists, hunt for reviews, compare prices. Retargeting keeps the brand present in that research gap — resurfacing the product left in the cart, answering the lingering question, or delivering social proof at the right moment.",
            },
            {
              type: "ul",
              items: [
                "Measurement is retargeting's raw material: without a correct pixel and CAPI setup, audiences fill incompletely.",
                "Frequency caps matter; hammering the same person with the same ad erodes brand perception.",
                "It is more than cart reminders: objection-handling content and social proof belong to this layer too.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "How much of my budget should go to retargeting?",
          a: "It varies with brand maturity, but retargeting can only ever be as big as the audience the upper funnel feeds into it. On a low-traffic site the retargeting budget cannot grow; cold reach comes first, re-engagement second.",
        },
        {
          q: "Why does retargeting always show my best ROAS?",
          a: "Because it serves the people already closest to buying — some of whom would have converted without the ad. Read retargeting performance together with your blended new-customer cost, never on its own.",
        },
      ],
      tags: ["Retargeting", "Remarketing", "Meta ads"],
    },
  },
};
