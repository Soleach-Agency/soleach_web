import type { Concept } from "@/lib/concepts";

export const cpa: Concept = {
  id: "cpa",
  category: "ads",
  publishedAt: "2026-07-28",
  related: ["funnel"],
  postIds: ["instagram-reklam-rehberi", "sosyal-medya-analitik-araclari"],
  locales: {
    tr: {
      slug: "cpa",
      name: "CPA (Edinim Başına Maliyet)",
      graphLabel: "CPA",
      metaTitle: "CPA Nedir? Edinim Başına Maliyet | Soleach Kavramlar",
      metaDescription:
        "CPA (edinim başına maliyet) nedir, nasıl hesaplanır? Bir satışın reklam maliyetini gösteren metriğin tanımı, ROAS ve müşteri edinme maliyetiyle ilişkisi.",
      shortDef:
        "Bir dönüşümün — genelde bir satışın — reklam tarafındaki maliyeti (harcama ÷ dönüşüm sayısı); ROAS'ın tersinden okunuşu ve bütçe planlamanın temel taşı.",
      sections: [
        {
          h2: "CPA nedir?",
          blocks: [
            {
              type: "p",
              text: "CPA (Cost per Acquisition), toplam reklam harcamasının elde edilen dönüşüm sayısına bölümüdür: 10.000 TL harcayıp 200 satış aldıysan satış başına maliyetin 50 TL'dir. 'Dönüşüm' her zaman satış olmak zorunda değil — üyelik, form doldurma ya da sepete ekleme için de CPA hesaplanır; önemli olan neyi saydığını netleştirmektir.",
            },
            {
              type: "p",
              text: "ROAS ile aynı gerçeğin iki yüzüdür: ROAS getiriyi oranlar, CPA maliyeti mutlaklaştırır. Ortalama sepet tutarı sabitken ikisi birbirine çevrilebilir; ama sepet tutarı kampanyadan kampanyaya değişiyorsa ikisini birlikte izlemek yanılgıları önler.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için CPA neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte müşterinin değeri çoğu zaman ilk siparişte değil, tekrar alımlarda ortaya çıkar. Bu yüzden sağlıklı soru 'bir satış kaça mal oluyor' değil, 'bir müşteri kaça mal oluyor ve yaşam boyu ne kazandırıyor'dur. İlk siparişte başabaş görünen bir CPA, tekrar satın alma oranı yüksek bir üründe aslında çok kârlı olabilir.",
            },
            {
              type: "p",
              text: "Kabul edilebilir CPA tavanını marj ve müşteri yaşam boyu değeri belirler; bu tavan netleşmeden bütçe artırma kararı körlemedir.",
            },
            {
              type: "p",
              text: "Bütçeyi CPA tavanına göre planlamayı [Instagram reklam rehberimizde](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) anlattık; hangi katmanın hangi maliyetle çalıştığı için [funnel](/tr/kavramlar/funnel) kavramına bak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "CPA mı ROAS mı takip etmeliyim?",
          a: "İkisini birlikte. ROAS getiriyi, CPA maliyeti gösterir; sepet tutarı dalgalandığında biri sabitken diğeri bozulabilir. Karar verirken ikisinin de marj yapınla ilişkisine bakmak gerekir.",
        },
        {
          q: "CPA'im yükseliyorsa reklamı kapatmalı mıyım?",
          a: "Önce nedenine bak: kreatif yorgunluğu mu, kitlenin daralması mı, sezonluk rekabet mi, yoksa ölçüm hatası mı? CPA artışı çoğu zaman kampanyanın değil, kreatif rotasyonun ya da ölçüm altyapısının sinyalidir.",
        },
      ],
      tags: ["CPA", "Edinim başına maliyet", "Müşteri edinme maliyeti", "Reklam metrikleri", "Bütçe planlama"],
    },
    en: {
      slug: "cpa",
      name: "CPA (Cost per Acquisition)",
      graphLabel: "CPA",
      metaTitle: "What Is CPA? Cost per Acquisition | Soleach Concepts",
      metaDescription:
        "CPA (cost per acquisition) explained: the ad cost of a single sale, how it relates to ROAS and customer acquisition cost, and how to plan budget with it.",
      shortDef:
        "The ad-side cost of one conversion — usually a sale (spend ÷ conversions); ROAS read from the other direction, and the cornerstone of budget planning.",
      sections: [
        {
          h2: "What is CPA?",
          blocks: [
            {
              type: "p",
              text: "CPA (Cost per Acquisition) is total ad spend divided by the number of conversions: spend 10,000 for 200 sales and each sale cost you 50. The 'conversion' does not have to be a sale — CPA can be computed for signups, form fills or add-to-carts; what matters is being explicit about what you count.",
            },
            {
              type: "p",
              text: "CPA and ROAS are two faces of the same reality: ROAS expresses return as a ratio, CPA expresses cost as an absolute. With a stable average order value they convert into each other; when order values vary between campaigns, tracking both prevents blind spots.",
            },
          ],
        },
        {
          h2: "Why CPA matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "In beauty, a customer's value usually shows up in repeat purchases, not the first order. So the healthy question is not 'what does a sale cost' but 'what does a customer cost, and what are they worth over their lifetime'. A CPA that looks break-even on the first order can be very profitable on a product with strong reorder rates.",
            },
            {
              type: "p",
              text: "Margin and customer lifetime value set the acceptable CPA ceiling; scaling budget before that ceiling is known is flying blind.",
            },
            {
              type: "p",
              text: "We cover planning budget against a CPA ceiling in our [Instagram ads starter guide](/en/blog/instagram-ads-guide-for-beauty-brands); for which layer carries which cost, see [funnel](/en/concepts/funnel).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Should I track CPA or ROAS?",
          a: "Both, together. ROAS shows return, CPA shows cost; when order values fluctuate, one can hold steady while the other breaks. Decisions should weigh both against your margin structure.",
        },
        {
          q: "My CPA is rising — should I switch the campaign off?",
          a: "Diagnose first: is it creative fatigue, audience saturation, seasonal competition, or a measurement error? Rising CPA is more often a signal about creative rotation or measurement than about the campaign itself.",
        },
      ],
      tags: ["CPA", "Cost per acquisition", "Customer acquisition cost", "Ad metrics", "Budget planning"],
    },
  },
};
