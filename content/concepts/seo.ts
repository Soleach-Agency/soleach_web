import type { Concept } from "@/lib/concepts";

export const seo: Concept = {
  id: "seo",
  category: "seo-geo",
  publishedAt: "2026-07-28",
  related: ["cro"],
  postIds: ["geo-rehberi", "shopify-magaza-kurulumu"],
  locales: {
    tr: {
      slug: "seo",
      name: "SEO (Arama Motoru Optimizasyonu)",
      graphLabel: "SEO",
      metaTitle: "SEO Nedir? Arama Motoru Optimizasyonu | Soleach Kavramlar",
      metaDescription:
        "SEO (arama motoru optimizasyonu) nedir? Kozmetik markaları için organik görünürlüğün temeli olan disiplinin tanımı ve GEO ile ilişkisi.",
      shortDef:
        "Sitenin arama motorlarında taranabilir, anlaşılır ve üst sıralarda görünür olmasını sağlayan teknik ve içerik çalışmalarının bütünü; yapay zekâ görünürlüğünün de zemini.",
      sections: [
        {
          h2: "SEO nedir?",
          blocks: [
            {
              type: "p",
              text: "SEO (Search Engine Optimization), bir sitenin arama motorları tarafından taranmasını, doğru anlaşılmasını ve alakalı aramalarda üst sıralarda gösterilmesini sağlayan çalışmaların bütünü. Üç ayağı var: teknik altyapı (hız, taranabilirlik, mobil uyum), içerik (aranan sorulara gerçekten cevap veren sayfalar) ve otorite (başka sitelerin sana bağlantı vermesi ve senden bahsetmesi).",
            },
            {
              type: "p",
              text: "Reklamdan farkı kalıcılığında: reklam bütçe kesildiği an durur, iyi kurgulanmış organik içerik yıllarca trafik taşımaya devam eder. Buna karşılık sonuç almak zaman ister — SEO bir sprint değil, birikimli bir yatırımdır.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik, insanların satın almadan önce en çok araştırma yaptığı kategorilerden biri: içerik listeleri, cilt tipi uyumu, kullanım sırası, yan etkiler. Bu soruların her biri organik trafik fırsatıdır. Reklam maliyetleri yükselirken, bu sorulara cevap veren içerik markaya bileşik getiri sağlayan bir varlığa dönüşür.",
            },
            {
              type: "p",
              text: "Ayrıca SEO artık yalnızca Google için değil: yapay zekâ motorları da cevaplarını taranabilir web içeriğinden kurar. Yani sağlam SEO, markanın yapay zekâ yanıtlarında anılmasının (GEO) ön koşuludur.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "SEO ne kadar sürede sonuç verir?",
          a: "Sayfanın rekabetine ve sitenin mevcut otoritesine göre değişir; genelde haftalar değil aylar ölçeğinde düşünmek gerekir. Önemli olan doğru soruları hedefleyen içeriği istikrarlı üretmek — sonuçlar birikimli gelir.",
        },
        {
          q: "Reklam veriyorsak SEO'ya neden ihtiyacımız var?",
          a: "Reklam, bütçeyle orantılı ve bütçe bitince duran bir trafik kaynağıdır. SEO ise zamanla ucuzlayan ve durmayan bir kanal kurar. İkisi rakip değil; sağlıklı bir karışımda birbirini besler.",
        },
      ],
      tags: ["SEO", "Organik trafik", "İçerik stratejisi"],
    },
    en: {
      slug: "seo",
      name: "SEO (Search Engine Optimization)",
      graphLabel: "SEO",
      metaTitle: "What Is SEO? Search Engine Optimization | Soleach Concepts",
      metaDescription:
        "SEO (search engine optimization) explained: the discipline behind organic visibility for beauty brands, and how it underpins GEO and AI visibility.",
      shortDef:
        "The technical and content work that makes a site crawlable, understandable and highly ranked in search engines — and the foundation AI visibility is built on.",
      sections: [
        {
          h2: "What is SEO?",
          blocks: [
            {
              type: "p",
              text: "SEO (Search Engine Optimization) is the set of practices that make a site crawlable, correctly understood and prominently ranked for relevant searches. It rests on three legs: technical infrastructure (speed, crawlability, mobile), content (pages that genuinely answer what people search for) and authority (other sites linking to and mentioning you).",
            },
            {
              type: "p",
              text: "What separates it from advertising is permanence: ads stop the moment the budget stops, while well-built organic content keeps driving traffic for years. The trade-off is time — SEO is not a sprint but a compounding investment.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty is one of the most research-heavy categories: ingredient lists, skin-type fit, routine order, side effects. Every one of those questions is an organic traffic opportunity. As ad costs rise, content that answers them becomes a compounding asset for the brand.",
            },
            {
              type: "p",
              text: "SEO is also no longer just for Google: AI engines build their answers from crawlable web content. Solid SEO is therefore the precondition for being mentioned in AI answers — the discipline known as GEO.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How long does SEO take to show results?",
          a: "It depends on the competition for the query and your site's existing authority; think in months rather than weeks. What matters is consistently publishing content that targets real questions — results compound.",
        },
        {
          q: "We run ads — why would we need SEO?",
          a: "Advertising is a traffic source proportional to budget that stops when the budget does. SEO builds a channel that gets cheaper over time and doesn't switch off. They are not rivals; in a healthy mix they feed each other.",
        },
      ],
      tags: ["SEO", "Organic traffic", "Content strategy"],
    },
  },
};
