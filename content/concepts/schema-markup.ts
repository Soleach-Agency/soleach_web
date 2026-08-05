import type { Concept } from "@/lib/concepts";

export const schemaMarkup: Concept = {
  id: "schema-markup",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["seo", "geo", "search-engine", "search-console"],
  postIds: ["geo-rehberi"],
  locales: {
    tr: {
      slug: "yapilandirilmis-veri",
      name: "Yapılandırılmış Veri (Schema.org)",
      graphLabel: "Schema",
      metaTitle: "Yapılandırılmış Veri (Schema) Nedir? | Soleach Kavramlar",
      metaDescription:
        "Schema.org yapılandırılmış veri nedir, ne işe yarar? Sayfadaki bilgiyi makinenin anlayacağı biçime çeviren işaretlemenin tanımı, sınırları ve doğru kullanımı.",
      shortDef:
        "Sayfadaki bilginin ne olduğunu makinelere açıkça söyleyen, schema.org sözlüğüyle yazılmış işaretleme; ürün, makale, SSS ve marka bilgisini yoruma açık metin olmaktan çıkarır.",
      sections: [
        {
          h2: "Yapılandırılmış veri nedir?",
          blocks: [
            {
              type: "p",
              text: "Bir ürün sayfasında \"449 TL\" yazdığında insan bunun fiyat olduğunu anlar; makine tahmin eder. Yapılandırılmış veri bu tahmini ortadan kaldırır: sayfaya, genellikle JSON-LD biçiminde, \"bu bir Ürün, adı şu, fiyatı şu, para birimi şu, stok durumu şu\" diyen ayrı bir katman eklersin. Kullanılan ortak sözlüğün adı schema.org.",
            },
            {
              type: "p",
              text: "En sık kullanılan tipler bellidir: ürün için Product ve Offer, blog yazısı için BlogPosting, soru-cevap blokları için FAQPage, gezinme için BreadcrumbList, işletmenin kendisi için Organization. Bu sitede de her blog yazısı ve her kavram sayfası bu işaretlemeyi otomatik üretir — elle yazılan bir şey değildir, içerikten türetilir.",
            },
          ],
        },
        {
          h2: "Neyi çözer, neyi çözmez?",
          blocks: [
            {
              type: "p",
              text: "Çözdüğü şey belirsizliktir. [Arama motoru](/tr/kavramlar/arama-motoru) sayfayı doğru sınıflandırır, zengin sonuçlara (fiyat, puan, SSS açılır blokları) uygun hale gelirsin ve [Search Console](/tr/kavramlar/google-search-console) bu işaretlemelerin geçerli olup olmadığını ayrı bir raporda gösterir. Çözmediği şey ise içeriğin kendisidir: işaretleme, olmayan bir kaliteyi var göstermez.",
            },
            {
              type: "ul",
              items: [
                "İşaretleme sayfada görünen bilgiyle birebir uyuşmalı; görünmeyen bir fiyatı ya da olmayan bir puanı işaretlemek yaptırım sebebidir.",
                "Zengin sonuç garanti değildir — uygunluk sağlar, gösterim kararı arama motorunundur.",
                "[GEO](/tr/kavramlar/geo) tarafında schema bir anahtar değil, kolaylaştırıcıdır: yapay zekâ motorlarının içeriği doğru anlamasına yardım eder ama tek başına yanıtlarda anılmayı sağlamaz.",
                "Yanlış ya da eskimiş işaretleme, hiç işaretleme olmamasından daha zararlıdır: makineye yanlış bilgiyi güvenle söylersin.",
              ],
            },
            {
              type: "p",
              text: "Yapay zekâ görünürlüğü içinde nereye oturduğunu [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) — abartısız biçimde — anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Schema işaretlemesi sıralamamı yükseltir mi?",
          a: "Doğrudan bir sıralama sinyali olarak düşünme. Yaptığı şey sayfanın ne olduğunu netleştirmek ve zengin sonuç biçimlerine uygun hale getirmektir; bu da tıklama oranını artırabilir. Yani etkisi sıralamadan çok, sonuç sayfasındaki görünürlüğün ve doğru sınıflandırılmanın üzerinden gelir.",
        },
        {
          q: "Yapılandırılmış veriyi elle mi yazmalıyım?",
          a: "Tercihen hayır. Elle yazılan işaretleme, içerik değiştikçe eskir ve sayfayla çelişmeye başlar — bu da faydadan çok risktir. Doğru yaklaşım, işaretlemeyi sayfanın kendi verisinden otomatik üretmektir; böylece fiyat ya da başlık değiştiğinde işaretleme de kendiliğinden güncellenir.",
        },
      ],
      tags: [
        "Yapılandırılmış veri",
        "Schema.org",
        "JSON-LD",
        "Zengin sonuçlar",
        "SEO",
      ],
    },
    en: {
      slug: "structured-data",
      name: "Structured Data (Schema.org)",
      graphLabel: "Schema",
      metaTitle: "What Is Structured Data (Schema)? | Soleach Concepts",
      metaDescription:
        "Structured data explained: how schema.org markup tells machines what a page actually contains, what it earns you, and where its limits are.",
      shortDef:
        "Markup written in the schema.org vocabulary that tells machines explicitly what a page contains, turning product, article, FAQ and brand facts from interpretable prose into stated data.",
      sections: [
        {
          h2: "What is structured data?",
          blocks: [
            {
              type: "p",
              text: "When a product page says \"£39\", a human knows that is a price; a machine infers it. Structured data removes the inference: you add a separate layer to the page — usually as JSON-LD — saying \"this is a Product, this is its name, this is its price, this is the currency, this is its availability\". The shared vocabulary used for that is schema.org.",
            },
            {
              type: "p",
              text: "The commonly used types are few: Product and Offer for products, BlogPosting for articles, FAQPage for question blocks, BreadcrumbList for navigation, Organization for the business itself. On this site every blog post and every concept page emits that markup automatically — it is derived from the content, never hand-written.",
            },
          ],
        },
        {
          h2: "What it solves — and what it doesn't",
          blocks: [
            {
              type: "p",
              text: "What it solves is ambiguity. A [search engine](/en/concepts/search-engine) classifies the page correctly, you become eligible for rich results (prices, ratings, expandable FAQ blocks), and [Search Console](/en/concepts/google-search-console) reports separately on whether the markup is valid. What it does not solve is the content itself: markup cannot manufacture quality that isn't there.",
            },
            {
              type: "ul",
              items: [
                "Markup must match what the page visibly says; marking up a price or a rating that isn't shown invites manual action.",
                "Rich results are not guaranteed — markup creates eligibility, the engine decides on display.",
                "For [GEO](/en/concepts/generative-engine-optimization), schema is an enabler rather than a key: it helps generative engines read you correctly but does not on its own get you mentioned.",
                "Wrong or stale markup is worse than none at all: you are confidently telling machines something untrue.",
              ],
            },
            {
              type: "p",
              text: "Where it fits within AI visibility — without the hype — is covered in our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does schema markup improve my rankings?",
          a: "Don't think of it as a direct ranking signal. What it does is clarify what the page is and make it eligible for rich result formats, which can lift click-through rate. Its effect comes through visibility on the results page and correct classification rather than through position.",
        },
        {
          q: "Should I write structured data by hand?",
          a: "Preferably not. Hand-written markup goes stale as content changes and starts contradicting the page — which is a risk rather than a benefit. The right approach is generating it from the page's own data, so that when a price or a title changes, the markup follows automatically.",
        },
      ],
      tags: [
        "Structured data",
        "Schema.org",
        "JSON-LD",
        "Rich results",
        "SEO",
      ],
    },
  },
};
