import type { Concept } from "@/lib/concepts";

export const metaPixel: Concept = {
  id: "meta-pixel",
  category: "ads",
  publishedAt: "2026-07-28",
  related: ["capi", "roas", "shopify", "retargeting"],
  postIds: [
    "meta-pixel-olcum-hatalari",
    "shopify-magaza-kurulumu",
    "reklam-ajanslari-neden-shopify",
    "sosyal-medya-analitik-araclari",
  ],
  locales: {
    tr: {
      slug: "meta-pixel",
      name: "Meta Pixel",
      metaTitle: "Meta Pixel Nedir? Doğru Kurulum ve Ölçüm | Soleach Kavramlar",
      metaDescription:
        "Meta Pixel (Facebook pixel) nedir, ne işe yarar? Ziyaretçi davranışını Meta reklam sistemine taşıyan dönüşüm takibi kodunun tanımı ve doğru kurulumu.",
      shortDef:
        "Sitene eklenen ve ziyaretçilerin hangi sayfaları gezdiğini, neyi sepete attığını, neyi satın aldığını Meta'nın reklam sistemine bildiren ölçüm kodu; reklam optimizasyonunun veri kaynağı.",
      sections: [
        {
          h2: "Meta Pixel nedir?",
          blocks: [
            {
              type: "p",
              text: "Meta Pixel, web sitene eklenen küçük bir JavaScript kodudur. Ziyaretçinin sayfa görüntüleme, sepete ekleme, ödeme başlatma ve satın alma gibi eylemlerini 'event' olarak Meta'ya iletir. Reklam sistemi bu sinyallerle kimin dönüşüm yapma ihtimalinin yüksek olduğunu öğrenir ve bütçeyi ona göre dağıtır.",
            },
            {
              type: "p",
              text: "Pixel yanlış kurulduğunda reklam hesabın kör uçar: sistem ya eksik veriyle yanlış kişilere gösterim yapar ya da gerçekleşen satışları göremediği için başarılı kampanyaları erken kapatırsın. Bu yüzden pixel kurulumu 'kodu yapıştır ve unut' işi değil; event'lerin doğru sayfada, doğru parametrelerle ve tek sefer tetiklendiğinin düzenli doğrulanması gereken bir ölçüm altyapısıdır.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için Meta Pixel neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte sepet tutarları görece küçük, satın alma sıklığı yüksektir; yani optimizasyon için sisteme akan sinyal sayısı çoktur. Bu, doğru kurulmuş bir pixel'in öğrenmeyi hızlandırdığı ideal senaryodur — ama aynı sebeple ölçüm hataları da hızla büyür: yanlış sayılan her satış, bütçenin yanlış kitleye kaymasıdır.",
            },
            {
              type: "ul",
              items: [
                "Tarayıcı kısıtlamaları ve reklam engelleyiciler nedeniyle pixel tek başına artık yeterli değil; Conversions API ile birlikte kurulmalı.",
                "Event'lerin değer (value) parametresi doğru gönderilmezse ROAS hesabın gerçeği yansıtmaz.",
                "Shopify gibi platformlarda hazır entegrasyon var, ama çift tetiklenme ve eksik event kontrolü yine de şart.",
              ],
            },
            {
              type: "p",
              text: "Pixel kuruluyken bile ölçümün nerede kırıldığını [Meta Pixel ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) tek tek inceledik; sunucu tarafındaki tamamlayıcısı için [Conversions API](/tr/kavramlar/conversion-api) kavramına bak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Pixel kurulumumun doğru olduğunu nasıl anlarım?",
          a: "Meta'nın Events Manager'ındaki event trafiğini gerçek site davranışıyla karşılaştırarak: satın alma sayısı sipariş sayınla örtüşüyor mu, event'ler çift tetikleniyor mu, value parametresi doğru mu? Düzenli kontrol edilmeyen pixel zamanla sessizce bozulur.",
        },
        {
          q: "Pixel varsa Conversions API'ye neden ihtiyaç var?",
          a: "Pixel tarayıcıda çalışır ve tarayıcı kısıtlamaları, çerez engelleri ya da reklam engelleyiciler sinyalin bir kısmını düşürür. Conversions API aynı event'leri sunucudan göndererek bu kaybı telafi eder; Meta ikisinin birlikte kullanılmasını önerir.",
        },
      ],
      tags: ["Meta Pixel", "Facebook pixel", "Dönüşüm takibi", "Ölçümleme", "Meta Ads"],
    },
    en: {
      slug: "meta-pixel",
      name: "Meta Pixel",
      metaTitle: "What Is the Meta Pixel? Setup and Measurement | Soleach",
      metaDescription:
        "The Meta Pixel explained: the measurement code that feeds visitor behavior into Meta's ad system, and why a correct setup decides how well your ads optimize.",
      shortDef:
        "The measurement code on your site that reports which pages visitors browse, what they add to cart and what they buy back to Meta's ad system — the data source ad optimization runs on.",
      sections: [
        {
          h2: "What is the Meta Pixel?",
          blocks: [
            {
              type: "p",
              text: "The Meta Pixel is a small piece of JavaScript added to your website. It reports visitor actions — page views, add-to-carts, checkouts, purchases — to Meta as events. The ad system uses those signals to learn who is likely to convert and allocates budget accordingly.",
            },
            {
              type: "p",
              text: "With a broken pixel your ad account flies blind: the system either targets the wrong people on incomplete data, or you kill winning campaigns early because their sales never show up. Pixel setup is not a paste-and-forget job; it is measurement infrastructure that needs regular verification that events fire on the right pages, with the right parameters, exactly once.",
            },
          ],
        },
        {
          h2: "Why the Meta Pixel matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty carts are relatively small and purchase frequency is high, which means plenty of signal flowing into the system. That is the ideal scenario for a correctly installed pixel to accelerate learning — but for the same reason measurement errors compound fast: every miscounted sale shifts budget toward the wrong audience.",
            },
            {
              type: "ul",
              items: [
                "Browser restrictions and ad blockers mean the pixel alone is no longer enough; pair it with the Conversions API.",
                "If the event's value parameter is wrong, your ROAS math no longer reflects reality.",
                "Platforms like Shopify ship a native integration, but double-firing and missing-event checks are still on you.",
              ],
            },
            {
              type: "p",
              text: "We break down exactly where measurement breaks even with the pixel installed in our [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution) post; for the server-side counterpart, see [Conversions API](/en/concepts/conversions-api).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How do I know my pixel setup is correct?",
          a: "Compare the event traffic in Meta's Events Manager with real site behavior: does the purchase count match your order count, are events firing twice, is the value parameter right? A pixel that is never audited degrades silently over time.",
        },
        {
          q: "If I have the pixel, why do I need the Conversions API?",
          a: "The pixel runs in the browser, and browser restrictions, cookie limits or ad blockers drop part of the signal. The Conversions API sends the same events from the server to recover that loss; Meta recommends running both together.",
        },
      ],
      tags: ["Meta Pixel", "Facebook pixel", "Conversion tracking", "Measurement", "Meta Ads"],
    },
  },
};
