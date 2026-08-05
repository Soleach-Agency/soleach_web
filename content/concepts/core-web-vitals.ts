import type { Concept } from "@/lib/concepts";

export const coreWebVitals: Concept = {
  id: "core-web-vitals",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["cro", "seo", "cloudflare", "shopify", "search-console"],
  postIds: ["shopify-magaza-kurulumu"],
  locales: {
    tr: {
      slug: "core-web-vitals",
      name: "Core Web Vitals",
      graphLabel: "Web Vitals",
      metaTitle: "Core Web Vitals Nedir? LCP, INP, CLS | Soleach",
      metaDescription:
        "Core Web Vitals nedir? Google'ın sayfa deneyimini ölçtüğü LCP, INP ve CLS metriklerinin tanımı; satışa ve arama görünürlüğüne etkisi.",
      shortDef:
        "Google'ın bir sayfanın kullanıcı deneyimini ölçtüğü üç metrik — yükleme (LCP), etkileşim (INP) ve görsel kayma (CLS); hem arama sinyali hem de dönüşümün sessiz belirleyicisi.",
      sections: [
        {
          h2: "Core Web Vitals nedir?",
          blocks: [
            {
              type: "p",
              text: "Core Web Vitals, \"site hızlı mı\" sorusunu üç ölçülebilir parçaya bölen metrik setidir. **LCP** (Largest Contentful Paint) sayfanın ana içeriğinin ne kadar sürede göründüğünü, **INP** (Interaction to Next Paint) bir tıklamaya ne kadar sürede tepki verdiğini, **CLS** (Cumulative Layout Shift) ise sayfanın yüklenirken ne kadar zıpladığını ölçer.",
            },
            {
              type: "p",
              text: "Kritik ayrım: bu metrikler laboratuvar testinden değil, gerçek ziyaretçilerin cihazlarından toplanan alan verisiyle değerlendirilir. Yani senin yeni telefonunda ve hızlı bağlantında akıcı görünen bir sayfa, kullanıcı kitlenin gerçek koşullarında pekâlâ zayıf puan alabilir. Değerlendirme ortalamayla değil, ziyaretçilerin büyük çoğunluğunun yaşadığı deneyimle yapılır.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik e-ticareti görsel yüklüdür: yüksek çözünürlüklü ürün fotoğrafları, video, slider'lar, yorum uygulamaları. Her biri sayfayı ağırlaştırır ve fatura ilk açılışta kesilir. Reklamla gelen ziyaretçi, sayfa açılmadan geri dönebilir — o tıklamanın parası çoktan ödenmiştir.",
            },
            {
              type: "ul",
              items: [
                "Etki iki taraflıdır: [dönüşüm oranı](/tr/kavramlar/donusum-orani-optimizasyonu) tarafında satışa, [SEO](/tr/kavramlar/seo) tarafında sayfa deneyimi sinyaline dokunur.",
                "En sık suçlu ilk ekrandaki dev görseldir; LCP öğesi genelde odur. Slider ve animasyonları ilk ekranın altına almak çoğu zaman en hızlı kazanımdır.",
                "[Cloudflare](/tr/kavramlar/cloudflare) gibi bir katman taşımayı hızlandırır ama ağır kurgulanmış bir sayfayı hafifletmez — CDN, tasarım kararlarının yerine geçmez.",
                "Ölçümü tahmin etme: [Search Console](/tr/kavramlar/google-search-console) alan verisini URL grupları hâlinde raporlar.",
              ],
            },
            {
              type: "p",
              text: "Mağaza kurarken hangi kararların hıza ve satışa doğrudan dokunduğunu [Shopify kurulum rehberimizde](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu) örnekleriyle anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Core Web Vitals bir sıralama faktörü mü?",
          a: "Sayfa deneyimi sinyallerinin bir parçası, ama içerik uygunluğunun yerine geçmez. Alakasız bir sayfayı hızlı olduğu için üst sıraya çıkarmaz; buna karşılık yakın rekabette ve özellikle mobilde fark yaratabilir. Asıl kazanç genelde sıralamada değil, dönüşümde görünür.",
        },
        {
          q: "Sitem PageSpeed testinde iyi puan alıyor ama Search Console kötü diyor, neden?",
          a: "İkisi farklı veriye bakar. PageSpeed'in laboratuvar testi tek bir simüle edilmiş koşulda çalışır; Search Console ise gerçek ziyaretçilerin cihaz ve bağlantı koşullarından toplanan alan verisini raporlar. Kitlen daha eski telefonlar ve zayıf bağlantılar kullanıyorsa gerçek tablo laboratuvardan kötü çıkar — ve karar veren gerçek tablodur.",
        },
      ],
      tags: [
        "Core Web Vitals",
        "LCP",
        "INP",
        "CLS",
        "Sayfa hızı",
      ],
    },
    en: {
      slug: "core-web-vitals",
      name: "Core Web Vitals",
      graphLabel: "Web Vitals",
      metaTitle: "What Are Core Web Vitals? LCP, INP, CLS | Soleach",
      metaDescription:
        "Core Web Vitals explained: the LCP, INP and CLS metrics Google uses to measure page experience, and how they quietly decide both rankings and conversions.",
      shortDef:
        "The three metrics Google uses to measure a page's experience — loading (LCP), responsiveness (INP) and visual stability (CLS); both a search signal and a quiet determinant of conversion.",
      sections: [
        {
          h2: "What are Core Web Vitals?",
          blocks: [
            {
              type: "p",
              text: "Core Web Vitals break the question \"is the site fast?\" into three measurable parts. **LCP** (Largest Contentful Paint) measures how long the page's main content takes to appear, **INP** (Interaction to Next Paint) how quickly it responds to a tap or click, and **CLS** (Cumulative Layout Shift) how much the layout jumps around while loading.",
            },
            {
              type: "p",
              text: "One distinction matters most: these are assessed on field data collected from real visitors' devices, not from a lab test. A page that feels smooth on your new phone and fast connection can score poorly under your audience's actual conditions. And the assessment isn't an average — it reflects the experience the large majority of your visitors get.",
            },
          ],
        },
        {
          h2: "Why they matter for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty e-commerce is visually heavy: high-resolution product photography, video, sliders, review apps. Each adds weight, and the bill arrives on first load. A visitor who arrived from an ad can bounce before the page renders — and that click has already been paid for.",
            },
            {
              type: "ul",
              items: [
                "The effect runs both ways: it touches sales through [conversion rate](/en/concepts/conversion-rate-optimization) and search visibility through the page experience signal.",
                "The usual culprit is the oversized hero image; it is typically the LCP element. Moving sliders and animations below the fold is often the fastest win.",
                "A layer like [Cloudflare](/en/concepts/cloudflare) speeds up delivery but cannot lighten a heavy page — a CDN is not a substitute for design decisions.",
                "Don't guess at the measurement: [Search Console](/en/concepts/google-search-console) reports field data grouped by URL.",
              ],
            },
            {
              type: "p",
              text: "Which build decisions touch speed and sales directly is covered with examples in our [Shopify setup guide](/en/blog/shopify-store-setup-for-cosmetics-brands).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Are Core Web Vitals a ranking factor?",
          a: "They are part of the page experience signals, but they do not substitute for relevance. A page that doesn't answer the query won't rank because it is fast; in close competition, though — and especially on mobile — they can make a difference. The bigger gain usually shows up in conversion rather than in position.",
        },
        {
          q: "My site scores well in PageSpeed but Search Console says it's poor. Why?",
          a: "They look at different data. PageSpeed's lab test runs one simulated condition; Search Console reports field data gathered from real visitors' devices and connections. If your audience is on older phones and weaker networks, the real picture is worse than the lab — and the real picture is the one that counts.",
        },
      ],
      tags: [
        "Core Web Vitals",
        "LCP",
        "INP",
        "CLS",
        "Page speed",
      ],
    },
  },
};
