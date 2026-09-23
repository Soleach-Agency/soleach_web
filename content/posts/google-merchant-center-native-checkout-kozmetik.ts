import type { BlogPost } from "@/lib/blog";

export const googleMerchantCenterNativeCheckoutKozmetik: BlogPost = {
  id: "google-merchant-center-native-checkout-kozmetik",
  publishedAt: "2026-09-23",
  category: "web-ecommerce",
  locales: {
    tr: {
      slug: "google-merchant-center-native-checkout-kozmetik",
      title: "Google native checkout kozmetik markanı nasıl etkiler?",
      metaTitle: "Google Merchant Center Native Checkout | Soleach",
      metaDescription: "Google Merchant Center native checkout uygun Shopify mağazalarında varsayılan açılıyor. Kozmetik markan uygunluğu, ölçümü ve kanal kontrolünü denetlesin.",
      excerpt: "Google AI Mode ve Gemini içindeki native checkout, uygun Shopify mağazalarında varsayılan olarak etkinleşebiliyor. Kozmetik markaları için ilk iş; uygunluğu, ürün verisini, checkout farklarını ve ölçüm kapsamını denetlemek.",
      intro: [
        "Google, uygun Shopify mağazalarını Merchant Center ile eşleştirerek ürünleri AI Mode ve Gemini içindeki native checkout akışına uygun hâle getirdiğini bildiren e-postalar gönderiyor. 22 Eylül 2026 tarihli haber, uygun ürünlerin otomatik olarak kapsama alındığını ve mağazanın isterse özelliği kapatabildiğini aktarıyor ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)).",
        "Shopify, AI Mode ve Gemini içindeki UCP destekli native checkout'un ABD'deki alıcılara satış yapan seçili ABD mağazalarında kullanılabildiğini ve daha geniş dağıtımın sürdüğünü belirtiyor ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Bu nedenle bir mağazanın uygunluğunu Shopify yönetimi ile Merchant Center verilerinden doğrulamadan kanalı aktif kabul etmemelisin.",
        "Kozmetik markası için konu yalnızca yeni bir satış yüzeyi değil. Ton, hacim ve varyant bilgisinin doğruluğu; iade ve yasal açıklamalar; mağaza içi checkout özelleştirmeleri ve ölçüm araçları artık kanal kararıyla birlikte denetlenmeli.",
      ],
      sections: [
        {
          h2: "Google Merchant Center native checkout'ta ne değişti?",
          blocks: [
            {
              type: "p",
              text: "Google Merchant Center native checkout, uygun ürünlerin AI Mode ve Gemini içinde satın alınmasını sağlıyor; ancak Google özelliğin şu anda seçili satıcılara açık olduğunu, Shopify ise seçili ABD mağazaları için daha geniş dağıtımın sürdüğünü belirtiyor ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "22 Eylül tarihli Merchant Center bildirimlerinde, Shopify mağazasıyla Merchant Center eşleştiğinde uygun ürünlerin native checkout'a otomatik alındığı ve ek kurulum gerekmediği aktarılıyor ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)). Buradaki kritik sözcük “uygun”: bildirim almamış veya koşulları karşılamayan bir mağazanın aktif olduğunu varsaymamalısın.",
            },
            {
              type: "p",
              text: "Bu gelişme, daha önce anlattığımız [Merchant Center AI performans raporundan](/tr/blog/merchant-center-ai-performans-kozmetik) farklı bir katman. Rapor görünürlük ve ürün keşfi sinyallerini okur; native checkout ise uygun ürün için satın alma akışının Google AI yüzeyinde tamamlanıp tamamlanmayacağını belirler.",
            },
          ],
        },
        {
          h2: "Google native checkout için Shopify uygunluk şartları neler?",
          blocks: [
            {
              type: "p",
              text: "Google native checkout uygunluğu genel bir Shopify ayarı değil; Google'ın güncel belgesi, deneyimin ABD, Kanada ve Avustralya'da uygun ürünleri bulunan katılımcı satıcılarla sınırlı olduğunu söylüyor. Merchant Center hesabının iyi durumda olması ve ücretsiz listelemeler için onaylı ürünler içermesi de uygulama öncesi şartlar arasında ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
            },
            {
              type: "ul",
              items: [
                "Merchant Center hesabının iyi durumda ve ürünlerin ücretsiz listelemeler için onaylı olduğunu doğrula ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "İade politikasında iade maliyeti, iade süresi ve tam politika bağlantısının bulunduğunu kontrol et ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Ürün bazında Buy düğmesi kontrolü için native_commerce içindeki checkout_eligibility değerini denetle; true etkinleştirir, false veya boş değer devre dışı bırakır ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/17251586?hl=en)).",
                "Yasal uyarı gerektiren ürünlerde consumer_notice alanını uygun tür ve mesajla gönder; Google bu bilginin checkout ekranında gösterildiğini belirtiyor ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
              ],
            },
            {
              type: "p",
              text: "Kozmetikte uygunluk denetimini SKU seviyesine indir. Ürün yayında mı, stok ve fiyat güncel mi, varyant adı görselle aynı mı, kargo kapsamı doğru mu, iade ve tüketici bilgilendirmeleri ürünün gerçek koşullarını yansıtıyor mu? Kanal açılmadan önce bu alanların Merchant Center ile mağazada çelişmediğini örnek ürünlerle kontrol et.",
            },
          ],
        },
        {
          h2: "Google native checkout müşteri yolculuğunu nasıl değiştirir?",
          blocks: [
            {
              type: "p",
              text: "Google native checkout, uygun müşterinin ürün keşfinden ödemeye geçerken markanın mağazasına yönlendirilmesi yerine AI Mode içindeki Shopify destekli gömülü checkout'u kullanmasını sağlar. Shopify, AI Mode için akışı 'streamlined embedded checkout' olarak tanımlıyor ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "İşlem Google yüzeyinde tamamlansa da marka satıcı kaydı olmaya devam eder; Google'ın UCP yardım belgesi bunu açıkça belirtiyor ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en)). Sipariş, fulfillment ve satış sonrası süreç yine markanın sorumluluğundadır.",
            },
            {
              type: "p",
              text: "Ürün keşfi ile checkout kararını ayrı düşün. Shopify'ın açıklamasına göre marka, AI kanal ayarından direct checkout'u açıp kapatabilir; bu seçim alıcının satın almayı AI arayüzünde mi yoksa markanın çevrim içi mağazasında mı tamamlayacağını belirler ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "Ajanların ürün ve sepet araçlarıyla nasıl çalıştığını daha geniş çerçevede görmek için [Shopify WebMCP rehberimize](/tr/blog/shopify-webmcp-yapay-zeka-ajanlari-kozmetik) bakabilirsin. Native checkout burada araç keşfinden sonraki ödeme yüzeyini ilgilendirir.",
            },
          ],
        },
        {
          h2: "Kozmetik markası Google native checkout'u açmalı mı?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik markası Google native checkout'u, temel akış zorunlu bilgi ve ölçüm ihtiyaçlarını karşılıyorsa kontrollü bir pilotla açık tutabilir; kritik bloklar, ürün türleri veya teslimat seçenekleri desteklenmiyorsa mağazaya yönlendirme daha doğru olabilir. Varsayılan ayarı strateji kararı sanma.",
            },
            {
              type: "ul",
              items: [
                "Başlık, açıklama, görsel, fiyat, stok ve kargo verisinin güncel kaldığını doğrula; Shopify bu alanların AI platformlarına gerçek zamanlı aktarıldığını söylüyor ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
                "Merchant Center iade politikasını hesap ve gerekiyorsa ürün seviyesinde eksiksiz tut ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Abonelik, kişiselleştirilmiş ürün, final-sale veya ön sipariş gibi Google'ın uygun görmediği ürünleri checkout_eligibility ile dışarıda bırak ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Yaş kısıtlı veya sağlık/ilaç kategorisine giren ürünleri uygun varsayma; Google bu kategorileri checkout için uygun olmayanlar arasında sayıyor ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Zorunlu tüketici uyarılarını consumer_notice ile ürün verisine ekle ve checkout ekranında doğru göründüğünü test et ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
              ],
            },
            {
              type: "p",
              text: "Ölçüm planını kanal bazında kur. Shopify, siparişlerin hangi AI kanalının satışı getirdiğini gösteren ilişkilendirmeyle yönetim paneline aktığını belirtiyor ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Native checkout siparişlerini site checkout verisiyle tek seri gibi yorumlamak yerine ayrı bir kanal kırılımında izle.",
            },
            {
              type: "p",
              text: "Ayarı değiştirmek için Shopify yönetimindeki Agentic bölümünü kullan. Shopify'a göre AI Mode ve Gemini için direct checkout kanal bazında açılıp kapatılabilir; bu seçim satın almanın AI arayüzünde tamamlanmasını veya markanın mağazasına bağlanmasını belirler ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Google Merchant Center native checkout herkese açık mı?",
          a: "Hayır. Google özelliğin seçili satıcılara açık olduğunu; Shopify ise AI Mode ve Gemini erişiminin ABD'deki alıcılara satış yapan seçili ABD mağazalarında bulunduğunu ve dağıtımın sürdüğünü belirtiyor ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
        },
        {
          q: "Uygun Shopify mağazasında native checkout otomatik açılabilir mi?",
          a: "Evet. 22 Eylül 2026 tarihli Merchant Center bildirimlerinde eşleşen Shopify mağazalarının uygun ürünlerinin otomatik kapsama alındığı ve ek kurulum gerekmediği aktarıldı; istemeyen satıcı ayarı Shopify yönetiminden kapatabiliyor ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)).",
        },
        {
          q: "Native checkout kapatılırsa satın alma nerede tamamlanır?",
          a: "Shopify, kanal ayarının alıcının satın almayı AI arayüzünde mi yoksa markanın çevrim içi mağazasında mı tamamlayacağını belirlediğini açıklıyor ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Ürün keşfi ve listeleme kapsamını Merchant Center'da ayrıca denetlemelisin.",
        },
        {
          q: "Kozmetik ürün verisinde hangi alanlar öncelikli?",
          a: "Başlık, açıklama, görsel, fiyat, stok ve kargo verisini güncel tut; iade politikasını ve gerekiyorsa consumer_notice uyarılarını Merchant Center'da tamamla ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works); [Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
        },
        {
          q: "Kozmetik markası native checkout pilotunda neyi ölçmeli?",
          a: "Uygun ve uygun olmayan SKU sayısını, AI kanalı kaynaklı siparişleri, ödeme başarısını, iptal ve iade nedenlerini ayrı izle. Varyant, stok, fiyat, kargo ve zorunlu uyarıları örnek ürünlerle uçtan uca doğrula.",
        },
      ],
      sources: [
        {
          label: "Shopify Staff. (2026, June 18). Agentic Commerce on Shopify: How It Works.",
          url: "https://www.shopify.com/blog/how-agentic-commerce-works",
          publisher: "Shopify",
        },
        {
          label: "Google Merchant Center Help. (2026). About the Universal Commerce Protocol and UCP-powered checkout feature on Google.",
          url: "https://support.google.com/merchants/answer/16837055?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Merchant Center Help. (2026). Native commerce [native_commerce].",
          url: "https://support.google.com/merchants/answer/17251586?hl=en",
          publisher: "Google",
        },
        {
          label: "Google for Developers. (2026). Prepare your Merchant Center account for UCP.",
          url: "https://developers.google.com/merchant/ucp/guides/merchant-center",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, September 22). Google Merchant Center Auto Enables Native Checkout: Buy On AI Mode & Gemini. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-native-checkout-emails-42140.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Merchant Center",
        "Shopify",
        "Agentic commerce",
        "E-ticaret",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "google-merchant-center-native-checkout-beauty",
      title: "How does Google native checkout affect beauty brands?",
      metaTitle: "Google Merchant Center Native Checkout | Soleach",
      metaDescription: "Google Merchant Center native checkout is on by default for eligible Shopify stores. Audit eligibility, measurement and channel control for beauty.",
      excerpt: "Google native checkout in AI Mode and Gemini can be active by default for eligible Shopify stores. Beauty brands should audit eligibility, product data, checkout differences and measurement before treating the default as a strategy.",
      intro: [
        "Google is sending notices that Merchant Center has matched eligible Shopify stores and made products eligible for native checkout in AI Mode and Gemini. A September 22, 2026 report says eligible products are included automatically and merchants can turn the feature off ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)).",
        "Shopify says UCP-powered native checkout in AI Mode and Gemini is available to select U.S.-based shops selling to U.S. buyers, with a broader rollout underway ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Treat eligibility as something to verify in Shopify admin and Merchant Center, not as a universal store setting.",
        "For a beauty brand, this is not merely a new sales surface. Shade, size and variant accuracy; returns and legal disclosures; checkout customisations and measurement all need review alongside the channel decision.",
      ],
      sections: [
        {
          h2: "What changed in Google Merchant Center native checkout?",
          blocks: [
            {
              type: "p",
              text: "Google Merchant Center native checkout enables eligible products to be purchased in AI Mode and Gemini, but Google says the feature is currently limited to select merchants and Shopify describes a broader rollout for select U.S. shops ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "The September 22 Merchant Center notices say that when a Shopify store is matched to Merchant Center, eligible products are included in native checkout automatically without additional setup ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)). The operative word is eligible: do not assume a store is active when it has not received a notice or met the requirements.",
            },
            {
              type: "p",
              text: "This is a separate layer from the [Merchant Center AI performance report](/en/blog/merchant-center-ai-performance-beauty). That report helps teams read product discovery and visibility signals; native checkout determines whether an eligible product's purchase can finish on a Google AI surface.",
            },
          ],
        },
        {
          h2: "What are the Shopify requirements for Google native checkout?",
          blocks: [
            {
              type: "p",
              text: "Google native checkout eligibility is not a general Shopify setting. Google's current documentation limits the experience to participating merchants with eligible products in the United States, Canada and Australia. A Merchant Center account in good standing with products approved for free listings is also required before implementation ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
            },
            {
              type: "ul",
              items: [
                "Confirm that the Merchant Center account is in good standing and products are approved for free listings ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Check that return policies include return cost, return window and a link to the full policy ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "For product-level Buy-button control, inspect checkout_eligibility inside native_commerce: true enables it; false or empty disables it ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/17251586?hl=en)).",
                "For products requiring legal warnings, send consumer_notice with the correct type and message; Google says these warnings are displayed on the checkout screen ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
              ],
            },
            {
              type: "p",
              text: "For beauty, bring the eligibility check down to SKU level. Is the item published? Are stock and price current? Does the variant name match the image? Are shipping, returns and consumer notices accurate? Test sample products for conflicts between Shopify and Merchant Center before the channel is allowed to scale.",
            },
          ],
        },
        {
          h2: "How does Google native checkout change the customer journey?",
          blocks: [
            {
              type: "p",
              text: "Google native checkout lets an eligible customer move from discovery to a Shopify-powered embedded checkout in AI Mode instead of being redirected to the brand's store. Shopify describes the AI Mode path as a 'streamlined embedded checkout' ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "Even when the transaction completes on a Google surface, the brand remains the seller of record. Google's UCP help page states this explicitly ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en)). The order, fulfilment and post-purchase experience therefore remain operational responsibilities for the brand.",
            },
            {
              type: "p",
              text: "Treat discovery and checkout as separate decisions. Shopify says brands can turn direct checkout on or off for the AI channel; that choice determines whether buyers complete a purchase inside the AI interface or link to the merchant's online store ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
            {
              type: "p",
              text: "Our [Shopify WebMCP guide](/en/blog/shopify-webmcp-ai-agents-beauty-brands) explains the wider product and cart tooling available to agents. Native checkout concerns the payment surface that follows discovery.",
            },
          ],
        },
        {
          h2: "Should a beauty brand enable Google native checkout?",
          blocks: [
            {
              type: "p",
              text: "A beauty brand can keep Google native checkout enabled for a controlled pilot when the basic flow satisfies mandatory information and measurement needs. Redirecting checkout to the store can be more appropriate when critical blocks, product types or delivery options are unsupported. A default setting is not a channel strategy.",
            },
            {
              type: "ul",
              items: [
                "Keep titles, descriptions, images, prices, inventory and shipping data current; Shopify says these fields flow to AI platforms in real time ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
                "Keep Merchant Center return policies complete at account level and, where needed, product level ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Exclude subscriptions, personalised goods, final-sale items and pre-orders that Google lists as ineligible by setting checkout_eligibility appropriately ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Do not assume age-restricted or healthcare and pharmaceutical products are eligible; Google lists these among restricted checkout categories ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
                "Add mandatory consumer warnings through consumer_notice and test that they render correctly on the checkout screen ([Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
              ],
            },
            {
              type: "p",
              text: "Build measurement by channel. Shopify says orders flow into admin with attribution showing which AI channel drove the sale ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Track native checkout orders separately rather than treating them as one identical series with site checkout.",
            },
            {
              type: "p",
              text: "Use the Agentic section in Shopify admin to change the setting. Shopify says direct checkout can be turned on or off per channel for AI Mode and Gemini; the choice determines whether the purchase finishes inside the AI interface or links to the online store ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is Google Merchant Center native checkout available to every store?",
          a: "No. Google says the feature is available to select merchants, while Shopify says AI Mode and Gemini access is available to select U.S.-based shops selling to U.S. buyers, with a broader rollout underway ([Google Merchant Center Help (2026)](https://support.google.com/merchants/answer/16837055?hl=en); [Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)).",
        },
        {
          q: "Can native checkout be enabled automatically for an eligible Shopify store?",
          a: "Yes. September 22, 2026 Merchant Center notices said eligible products in matched Shopify stores were included automatically with no additional setup; merchants could turn the setting off in Shopify admin ([Schwartz (2026)](https://www.seroundtable.com/google-native-checkout-emails-42140.html)).",
        },
        {
          q: "Where does the purchase finish when native checkout is disabled?",
          a: "Shopify says the channel setting determines whether buyers complete purchases inside the AI interface or link to the merchant's online store ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works)). Audit product discovery and listing coverage separately in Merchant Center.",
        },
        {
          q: "Which product-data fields should beauty brands prioritise?",
          a: "Keep titles, descriptions, images, prices, inventory and shipping current, and complete return policies and any required consumer notices in Merchant Center ([Shopify Staff (2026)](https://www.shopify.com/blog/how-agentic-commerce-works); [Google for Developers (2026)](https://developers.google.com/merchant/ucp/guides/merchant-center)).",
        },
        {
          q: "What should a beauty brand measure in a native checkout pilot?",
          a: "Track eligible and ineligible SKUs, AI-channel orders, checkout success, cancellations and return reasons separately. Validate variants, inventory, price, shipping and mandatory notices end to end with sample products.",
        },
      ],
      sources: [
        {
          label: "Shopify Staff. (2026, June 18). Agentic Commerce on Shopify: How It Works.",
          url: "https://www.shopify.com/blog/how-agentic-commerce-works",
          publisher: "Shopify",
        },
        {
          label: "Google Merchant Center Help. (2026). About the Universal Commerce Protocol and UCP-powered checkout feature on Google.",
          url: "https://support.google.com/merchants/answer/16837055?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Merchant Center Help. (2026). Native commerce [native_commerce].",
          url: "https://support.google.com/merchants/answer/17251586?hl=en",
          publisher: "Google",
        },
        {
          label: "Google for Developers. (2026). Prepare your Merchant Center account for UCP.",
          url: "https://developers.google.com/merchant/ucp/guides/merchant-center",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, September 22). Google Merchant Center Auto Enables Native Checkout: Buy On AI Mode & Gemini. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-native-checkout-emails-42140.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Merchant Center",
        "Shopify",
        "Agentic commerce",
        "Ecommerce",
        "Beauty marketing",
      ],
    },
  },
};
