import type { Concept } from "@/lib/concepts";

export const tiktokPixel: Concept = {
  id: "tiktok-pixel",
  category: "ads",
  publishedAt: "2026-08-04",
  related: ["meta-pixel", "capi", "retargeting", "roas"],
  postIds: [],
  locales: {
    tr: {
      slug: "tiktok-pixel",
      name: "TikTok Pixel",
      graphLabel: "TikTok Pixel",
      metaTitle: "TikTok Pixel Nedir? Ne İşe Yarar? | Soleach Kavramlar",
      metaDescription:
        "TikTok Pixel nedir, nasıl çalışır? Sitedeki ziyaretçi davranışını TikTok reklamlarına bağlayan ölçüm kodunun tanımı ve doğru kurulumun önemi.",
      shortDef:
        "Sitene yerleştirdiğin, ziyaretçilerin sayfa görüntüleme, sepete ekleme ve satın alma gibi davranışlarını TikTok'a bildiren ölçüm kodu.",
      sections: [
        {
          h2: "TikTok Pixel nedir?",
          blocks: [
            {
              type: "p",
              text: "TikTok Pixel, sitene eklediğin küçük bir ölçüm kodudur. Görevi, reklamla gelen ziyaretçinin sitede ne yaptığını TikTok'a bildirmektir: hangi sayfayı gördü, sepete ne ekledi, satın aldı mı. Bu bildirim olmadan TikTok, gösterdiği reklamın satışa dönüşüp dönüşmediğini bilemez; dolayısıyla optimizasyon yapamaz.",
            },
            {
              type: "p",
              text: "Mantığı [Meta Pixel](/tr/kavramlar/meta-pixel) ile aynıdır ve aynı sınırlara çarpar: tarayıcı tabanlı ölçüm, izleme engelleyiciler ve gizlilik kısıtları yüzünden olayların bir kısmını kaybeder. Bu kaybı kapatmanın yolu, olayları sunucudan da göndermektir — Meta tarafında [Conversions API](/tr/kavramlar/conversion-api) olarak bildiğin yaklaşımın TikTok'taki karşılığı Events API'dir.",
            },
          ],
        },
        {
          h2: "Neden doğru kurulum bu kadar önemli?",
          blocks: [
            {
              type: "p",
              text: "Reklam platformları öğrenerek çalışır: hangi kullanıcı tipinin satın aldığını gördükçe bütçeyi oraya kaydırır. Bu öğrenme tamamen sana gelen sinyale bağlıdır. Eksik ya da yanlış kurulmuş bir pixel, platformu yanlış kişiye reklam göstermeye iter — ve fatura aynı kalır.",
            },
            {
              type: "ul",
              items: [
                "Aynı olayın iki kez gönderilmesi (hem tema hem uygulama üzerinden) satın almaları çift sayar ve [ROAS](/tr/kavramlar/roas)'ı olduğundan yüksek gösterir.",
                "Sepete ekleme ve satın alma olayları değer (fiyat) ve para birimi parametresiyle gönderilmezse, raporlar sayı verir ama ciro veremez.",
                "[Retargeting](/tr/kavramlar/retargeting) kitleleri de bu olaylardan kurulur; ölçüm bozuksa kitle de bozuk olur.",
                "Kurulumu \"yeşil yanıyor\" diye doğru saymamak gerekir; olayları test aracıyla ve gerçek bir siparişle doğrula.",
              ],
            },
            {
              type: "p",
              text: "Meta tarafındaki muadili ve en sık yapılan ölçüm hataları için [Meta Pixel](/tr/kavramlar/meta-pixel) kavramına bakabilirsin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "TikTok Pixel ile Meta Pixel arasındaki fark nedir?",
          a: "İşlevleri aynıdır: ikisi de sitedeki davranışı kendi reklam platformuna bildirir. Fark, verinin gittiği yerde ve kurulum ayrıntılarındadır — olay adları, parametre isimleri ve doğrulama araçları farklıdır. İki platformda da reklam veriyorsan ikisini birden kurman gerekir; biri diğerinin verisini görmez.",
        },
        {
          q: "TikTok Pixel kurdum ama dönüşümler eksik görünüyor, sebebi ne olabilir?",
          a: "En yaygın sebep tarayıcı tabanlı ölçümün kaybıdır: izleme engelleyiciler ve gizlilik kısıtları olayların bir kısmını geçirmez. İkinci sebep kurulum hatasıdır — olayın yanlış sayfada tetiklenmesi, değer parametresinin boş gitmesi ya da olayın hiç tanımlanmamış olması. Sunucu tarafı gönderimi (Events API) eklemek ilk kaybı belirgin şekilde azaltır.",
        },
      ],
      tags: [
        "TikTok Pixel",
        "TikTok reklamları",
        "Ölçüm",
        "Dönüşüm takibi",
      ],
    },
    en: {
      slug: "tiktok-pixel",
      name: "TikTok Pixel",
      graphLabel: "TikTok Pixel",
      metaTitle: "What Is the TikTok Pixel? | Soleach Concepts",
      metaDescription:
        "The TikTok Pixel explained: the measurement code that reports on-site behaviour back to TikTok ads, why setup accuracy decides performance, and its limits.",
      shortDef:
        "The measurement code you place on your site to report visitor behaviour — page views, add-to-carts, purchases — back to TikTok.",
      sections: [
        {
          h2: "What is the TikTok Pixel?",
          blocks: [
            {
              type: "p",
              text: "The TikTok Pixel is a small measurement snippet you add to your site. Its job is to tell TikTok what a visitor did after clicking an ad: which page they saw, what they added to the cart, whether they bought. Without that signal TikTok cannot tell whether the ad it served led to a sale — and therefore cannot optimise.",
            },
            {
              type: "p",
              text: "The logic matches the [Meta Pixel](/en/concepts/meta-pixel), and it hits the same limits: browser-based measurement loses a share of events to tracking prevention and privacy restrictions. The way to close that gap is to send events from the server as well — the approach you know as [Conversions API](/en/concepts/conversions-api) on Meta is called the Events API on TikTok.",
            },
          ],
        },
        {
          h2: "Why correct setup matters so much",
          blocks: [
            {
              type: "p",
              text: "Ad platforms work by learning: as they see which kind of user buys, they shift budget there. That learning depends entirely on the signal you send. A missing or misconfigured pixel pushes the platform to show ads to the wrong people — and the invoice stays the same.",
            },
            {
              type: "ul",
              items: [
                "Sending the same event twice (from both the theme and an app) double-counts purchases and inflates [ROAS](/en/concepts/roas).",
                "If add-to-cart and purchase events are sent without a value and currency parameter, reports give you counts but no revenue.",
                "[Retargeting](/en/concepts/retargeting) audiences are built from these events too; broken measurement means broken audiences.",
                "A green status indicator is not verification; confirm events with the test tool and a real order.",
              ],
            },
            {
              type: "p",
              text: "For the Meta equivalent and the most common measurement mistakes, see [Meta Pixel](/en/concepts/meta-pixel).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between the TikTok Pixel and the Meta Pixel?",
          a: "Functionally they do the same thing: report on-site behaviour to their own ad platform. The differences are where the data goes and how setup works — event names, parameter names and verification tools all differ. If you advertise on both platforms you need both; neither sees the other's data.",
        },
        {
          q: "I installed the TikTok Pixel but conversions look under-reported. Why?",
          a: "The most common cause is loss in browser-based measurement: tracking prevention and privacy restrictions block a share of events. The second is setup error — the event firing on the wrong page, an empty value parameter, or an event never defined at all. Adding server-side sending (Events API) noticeably reduces the first kind of loss.",
        },
      ],
      tags: [
        "TikTok Pixel",
        "TikTok ads",
        "Measurement",
        "Conversion tracking",
      ],
    },
  },
};
