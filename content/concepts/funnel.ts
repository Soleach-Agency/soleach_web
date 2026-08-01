import type { Concept } from "@/lib/concepts";

export const funnel: Concept = {
  id: "funnel",
  category: "ads",
  publishedAt: "2026-07-28",
  related: [],
  postIds: ["instagram-reklam-rehberi"],
  locales: {
    tr: {
      slug: "funnel",
      name: "Funnel (Pazarlama Hunisi)",
      graphLabel: "Funnel",
      metaTitle: "Funnel Nedir? Pazarlama ve Satış Hunisi | Soleach",
      metaDescription:
        "Funnel (pazarlama hunisi) nedir? Müşterinin markayı keşfetmesinden satın almasına uzanan yolculuğun katmanlarının tanımı ve reklam planlamadaki rolü.",
      shortDef:
        "Müşterinin markayı ilk keşfinden satın almaya (ve tekrar almaya) uzanan yolculuğun katmanlı modeli; reklam bütçesinin ve mesajların hangi aşamaya konuşacağını belirleyen çerçeve.",
      sections: [
        {
          h2: "Funnel nedir?",
          blocks: [
            {
              type: "p",
              text: "Funnel, potansiyel müşterinin yolculuğunu katmanlara ayıran modeldir: markayı hiç bilmeyenler (üst), ilgilenip araştıranlar (orta), satın almaya yakın olanlar (alt) — ve giderek daha çok konuşulan dördüncü katman: mevcut müşterinin tekrar alması. Her katmanın sorusu farklıdır ve aynı mesaj hepsine birden konuşamaz.",
            },
            {
              type: "p",
              text: "Reklam planlamada funnel, bütçe ve mesaj haritasıdır: üst katmanda durdurucu, merak uyandıran içerik; ortada itiraz gideren, güven kuran anlatım; altta net teklif ve hatırlatma. Katmanlar birbirini besler — üst funnel'ı kesen marka, bir süre sonra alt funnel'da yeniden hedefleyecek kimse bulamaz.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için funnel neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte yolculuk nadiren tek adımda biter: müşteri ürünü keşfeder, içeriğini araştırır, yorum arar, sonra döner alır. Funnel bilinci olmayan hesaplarda en sık görülen hata, tüm bütçenin 'hemen satın al' diline yığılmasıdır — oysa izleyicinin çoğu henüz o aşamada değildir.",
            },
            {
              type: "ul",
              items: [
                "Her katmanın kendi metriği vardır: üstte erişim ve izlenme derinliği, ortada etkileşim ve site ziyareti, altta dönüşüm maliyeti.",
                "Retargeting alt katmanın aracıdır; hammaddesini üst katman üretir.",
                "Tekrar satın alma katmanı kozmetikte özellikle değerlidir: müşteri kazanma maliyeti, tekrar alımlarla amorti edilir.",
              ],
            },
            {
              type: "p",
              text: "Soğuk, ılık ve sıcak katmanlara bütçeyi nasıl böleceğini [Instagram reklam rehberimizde](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) anlattık; alt katmanın motoru için [retargeting](/tr/kavramlar/retargeting) kavramına bak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Küçük bütçeyle de funnel kurmalı mıyım?",
          a: "Evet, ama basitleştirilmiş haliyle: küçük bütçede katmanları ayrı kampanyalara bölmek yerine, geniş kitleye dönüşüm hedefli ama funnel'ın farklı aşamalarına konuşan kreatif çeşitliliği taşımak daha verimlidir.",
        },
        {
          q: "Bütçeyi katmanlara nasıl bölmeliyim?",
          a: "Evrensel bir oran yok; mevcut trafiğine ve marka bilinirliğine bağlı. Pratik ilke şu: alt funnel kitlelerin doygunsa büyüme üst katmandan gelir; site trafiğin zayıfsa retargeting'e ayrılan bütçe zaten çalışacak kitle bulamaz.",
        },
      ],
      tags: ["Funnel", "Pazarlama hunisi", "Satış hunisi", "Reklam stratejisi"],
    },
    en: {
      slug: "funnel",
      name: "Funnel (Marketing Funnel)",
      graphLabel: "Funnel",
      metaTitle: "What Is a Marketing Funnel? Sales Funnel Explained | Soleach",
      metaDescription:
        "The marketing funnel explained: the layered model of the customer journey from discovery to purchase, and its role in planning your ad budget.",
      shortDef:
        "The layered model of the customer journey from first discovery to purchase (and repurchase); the framework that decides which stage your ad budget and messages speak to.",
      sections: [
        {
          h2: "What is a funnel?",
          blocks: [
            {
              type: "p",
              text: "The funnel splits the potential customer's journey into layers: people who don't know the brand (top), those interested and researching (middle), those close to buying (bottom) — and the increasingly discussed fourth layer: existing customers buying again. Each layer asks a different question, and no single message can speak to all of them at once.",
            },
            {
              type: "p",
              text: "In ad planning the funnel is a budget and message map: scroll-stopping, curiosity-driven content up top; objection-handling, trust-building storytelling in the middle; clear offers and reminders at the bottom. The layers feed each other — a brand that cuts the top of the funnel soon finds nobody left to retarget at the bottom.",
            },
          ],
        },
        {
          h2: "Why the funnel matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "In beauty the journey rarely closes in one step: the customer discovers a product, researches ingredients, hunts for reviews, then comes back to buy. The most common mistake in funnel-blind accounts is piling the whole budget onto 'buy now' language — when most of the audience simply isn't there yet.",
            },
            {
              type: "ul",
              items: [
                "Each layer has its own metric: reach and watch depth at the top, engagement and site visits in the middle, cost per conversion at the bottom.",
                "Retargeting is the bottom layer's tool; its raw material is produced by the top.",
                "The repurchase layer is especially valuable in beauty: customer acquisition costs are amortized through repeat orders.",
              ],
            },
            {
              type: "p",
              text: "We cover how to split budget across cold, warm and hot layers in our [Instagram ads guide](/en/blog/instagram-ads-guide-for-beauty-brands); for the engine of the lower funnel, see [retargeting](/en/concepts/retargeting).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Should I build a funnel on a small budget too?",
          a: "Yes, but simplified: on a small budget, rather than splitting layers into separate campaigns, it is more efficient to run conversion-focused campaigns on broad audiences while carrying creative variety that speaks to different funnel stages.",
        },
        {
          q: "How should I split budget across layers?",
          a: "There is no universal ratio; it depends on your current traffic and brand awareness. The practical principle: if your bottom-funnel audiences are saturated, growth comes from the top; if your site traffic is weak, a retargeting budget has no one to work on anyway.",
        },
      ],
      tags: ["Funnel", "Marketing funnel", "Sales funnel", "Ad strategy"],
    },
  },
};
