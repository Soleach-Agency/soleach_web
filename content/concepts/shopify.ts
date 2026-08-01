import type { Concept } from "@/lib/concepts";

export const shopify: Concept = {
  id: "shopify",
  category: "web-ecommerce",
  publishedAt: "2026-07-28",
  related: ["cro"],
  postIds: ["shopify-magaza-kurulumu", "reklam-ajanslari-neden-shopify"],
  locales: {
    tr: {
      slug: "shopify",
      name: "Shopify",
      metaTitle: "Shopify Nedir? E-ticaret Altyapısı | Soleach Kavramlar",
      metaDescription:
        "Shopify nedir, nasıl çalışır? Kozmetik markalarının e-ticaret mağazasını kurduğu platformun tanımı, güçlü yanları ve reklam ölçümüyle ilişkisi.",
      shortDef:
        "Kendi e-ticaret siteni kod yazmadan kurup yönetmeni sağlayan abonelikli platform; hız, güvenlik ve reklam entegrasyonlarını hazır getirdiği için performans pazarlamasının en yaygın zemini.",
      sections: [
        {
          h2: "Shopify nedir?",
          blocks: [
            {
              type: "p",
              text: "Shopify, ürün kataloğu, sepet, ödeme, kargo ve stok yönetimini tek pakette sunan bir e-ticaret platformudur. Barındırma, güvenlik ve ölçeklenme platformun sorumluluğundadır; marka tarafında iş, mağazayı doğru kurgulamak ve satışa odaklanmaktır. Tema ve uygulama ekosistemi sayesinde çoğu ihtiyaç kod yazmadan çözülür.",
            },
            {
              type: "p",
              text: "Reklam veren markalar için asıl değeri entegrasyon tarafında: Meta Pixel ve Conversions API gibi ölçüm bağlantıları platform seviyesinde hazırdır. Bu, özel yazılım bir sitede günler süren ve hataya açık kurulumların, Shopify'da büyük ölçüde standart ayara dönüşmesi demektir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için Shopify neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik e-ticareti hız ister: kampanya dönemleri, ürün lansmanları, reklamla gelen ani trafik. Shopify bu dalgalanmayı altyapı derdi olmadan taşır. Abonelik modeli, paket satışlar ve sadakat uygulamaları gibi kategoriye uygun satış mekanikleri de ekosistemde hazırdır.",
            },
            {
              type: "ul",
              items: [
                "Platform hazır olsa da dönüşüm kendiliğinden gelmez: ürün sayfası kurgusu, hız ve güven öğeleri markanın işidir.",
                "Ölçüm entegrasyonlarının 'açık' olması doğru çalıştığı anlamına gelmez; event doğrulaması yine gerekir.",
                "Tema seçiminde estetik kadar performans (sayfa hızı) kriter olmalıdır.",
              ],
            },
            {
              type: "p",
              text: "Kozmetik markası için mağazayı kurarken satışı belirleyen kararları [Shopify kurulum rehberimizde](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu), ölçüm tarafını ise [bu yazıda](/tr/blog/reklam-ajanslari-neden-shopify-seviyor) anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Shopify yerine özel yazılım site yaptırmalı mıyım?",
          a: "Çoğu marka için hayır: özel yazılımın esnekliği, bakım, güvenlik ve entegrasyon maliyetiyle birlikte gelir. Platformun sınırlarına gerçekten çarpan, özel ihtiyaçları net bir ölçek yoksa Shopify daha hızlı ve düşük riskli bir başlangıçtır.",
        },
        {
          q: "Shopify reklam performansını etkiler mi?",
          a: "Dolaylı ama güçlü şekilde: sayfa hızı, ödeme akışının sürtünmesi ve ölçüm entegrasyonlarının doğruluğu reklamın dönüşüm maliyetine doğrudan yansır. İyi kurulmuş bir mağaza, aynı reklam bütçesinden daha çok satış çıkarır.",
        },
      ],
      tags: ["Shopify", "Shopify mağaza kurulumu", "E-ticaret", "Altyapı"],
    },
    en: {
      slug: "shopify",
      name: "Shopify",
      metaTitle: "What Is Shopify? E-commerce Infrastructure | Soleach",
      metaDescription:
        "Shopify explained: the platform beauty brands build their online store on, its strengths, and how it connects to ad measurement infrastructure.",
      shortDef:
        "The subscription platform for building and running your own e-commerce store without writing code; the most common foundation for performance marketing thanks to built-in speed, security and ad integrations.",
      sections: [
        {
          h2: "What is Shopify?",
          blocks: [
            {
              type: "p",
              text: "Shopify is an e-commerce platform bundling product catalog, cart, payments, shipping and inventory in one package. Hosting, security and scaling are the platform's responsibility; the brand's job is to configure the store well and focus on selling. The theme and app ecosystem solves most needs without code.",
            },
            {
              type: "p",
              text: "For brands running ads, the real value is integration: measurement connections like the Meta Pixel and Conversions API are ready at platform level. Setups that take days and invite errors on a custom-built site largely become standard configuration on Shopify.",
            },
          ],
        },
        {
          h2: "Why Shopify matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty e-commerce demands speed: campaign seasons, product launches, sudden ad-driven traffic spikes. Shopify absorbs those waves without infrastructure worries. Category-fit sales mechanics — subscriptions, bundles, loyalty apps — are ready in the ecosystem too.",
            },
            {
              type: "ul",
              items: [
                "A ready platform doesn't mean automatic conversion: product page structure, speed and trust elements are still the brand's work.",
                "Measurement integrations being 'on' doesn't mean they're correct; event verification is still required.",
                "Theme selection should weigh performance (page speed) as much as aesthetics.",
              ],
            },
            {
              type: "p",
              text: "We cover the decisions that determine sales when building the store in our [Shopify setup guide](/en/blog/shopify-store-setup-for-cosmetics-brands), and the measurement side [here](/en/blog/why-ad-agencies-love-shopify).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Should I build a custom site instead of Shopify?",
          a: "For most brands, no: custom flexibility comes bundled with maintenance, security and integration costs. Unless you are at a scale with clear needs that genuinely hit the platform's limits, Shopify is the faster, lower-risk start.",
        },
        {
          q: "Does Shopify affect ad performance?",
          a: "Indirectly but strongly: page speed, checkout friction and the accuracy of measurement integrations feed straight into your cost per conversion. A well-built store extracts more sales from the same ad budget.",
        },
      ],
      tags: ["Shopify", "Shopify store setup", "E-commerce", "Infrastructure"],
    },
  },
};
