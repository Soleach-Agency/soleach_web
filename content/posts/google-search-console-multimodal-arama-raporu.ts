import type { BlogPost } from "@/lib/blog";

export const googleSearchConsoleMultimodalAramaRaporu: BlogPost = {
  id: "google-search-console-multimodal-arama-raporu",
  publishedAt: "2026-09-25",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "search-console-multimodal-arama-raporu",
      title: "Search Console multimodal arama raporu nasıl kullanılır?",
      metaTitle: "Search Console Multimodal Arama Raporu | Soleach",
      metaDescription: "Search Console multimodal arama raporuyla görsel sorguları ölç, ürün ve içerik sayfalarını karşılaştır, kozmetik markan için net aksiyonlar çıkar.",
      excerpt: "Google Search Console'ın yeni multimodal filtresi, görselle başlayan web aramalarındaki görünürlüğü ayrı okumayı mümkün kılıyor. Kozmetik markaları bu veriyi ürün, kategori ve rehber sayfaları arasında karşılaştırarak görsel içerik kararlarına çevirebilir.",
      intro: [
        "Bir kullanıcı ürünün adını yazmak yerine ambalajını kameraya gösterdiğinde, ekran görüntüsü yüklediğinde veya bir görsele sağ tıklayıp arama yaptığında markanın web sayfası bulunabiliyor. Google, 24 Eylül 2026'da bu davranışları Search Console'da ayrı izlemeyi sağlayan web multimodal arama raporlamasını duyurdu ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
        "Kozmetik markası için fırsat yalnızca yeni bir grafik değil. Ürün görseli, ambalaj, doku, renk ve uygulama içeriğinin hangi sayfalara görünürlük getirdiğini daha düzenli test etmek mümkün. Ancak rapor neden-sonuç kanıtlamaz; doğru kullanım, aynı filtrelerle karşılaştırılabilir bir ölçüm düzeni kurmaktır.",
      ],
      sections: [
        {
          h2: "Search Console multimodal arama raporunda ne değişti?",
          blocks: [
            {
              type: "p",
              text: "Search Console multimodal arama raporu, görselle başlayan web aramalarını metin tabanlı aramalardan ayıran yeni bir performans görünümü getiriyor. Google, raporlamanın hem Arama sonuçları Performans raporunda hem de üretken yapay zekâ özellikleri raporunda yer aldığını açıklıyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
            },
            {
              type: "p",
              text: "Kapsama Lens, Android'de Circle to Search, Google Arama'ya görsel yükleme ve Chrome'daki “Bu görseli ara” özelliğiyle yapılan aramalar dahil ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). Bu liste, raporun yalnızca Google Görseller sekmesini yeniden adlandırmadığını; başlangıç girdisi görsel olan farklı arama yollarını bir araya getirdiğini gösteriyor.",
            },
            {
              type: "p",
              text: "Bu konu, [Search Console AI performans raporundan](/tr/blog/google-search-console-ai-performans-raporu) ayrılıyor. AI raporu üretken özelliklerdeki gösterimleri ele alırken, multimodal filtre kullanıcının görselle başlattığı arama davranışını ayırıyor. İki görünümü tek toplamda eritmek yerine ayrı sorular için kullan.",
            },
          ],
        },
        {
          h2: "Search Console multimodal arama filtresi nasıl kullanılır?",
          blocks: [
            {
              type: "p",
              text: "Search Console multimodal arama filtresini kullanmak için Performans raporunda yeni multimodal arama türünü seç; ardından veriyi dışa aktararak aynı dönem ve kırılımlarla karşılaştır. Google, bu içgörülerin yeni filtre üzerinden görüntülenebildiğini ve “Dışa aktar” seçeneğiyle başka araçlarda analiz edilebildiğini belirtiyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
            },
            {
              type: "ul",
              items: [
                "Önce son 28 gün için multimodal görünümü aç ve tarih aralığını kaydet.",
                "Aynı tarih aralığında sayfa, sorgu, ülke ve cihaz kırılımlarını ayrı dışa aktar.",
                "Ürün, kategori ve editoryal rehber URL'lerini ayrı gruplara ayır.",
                "Bir sonraki dönemde aynı filtreleri kullan; ölçüm yöntemini değiştirerek yapay bir artış üretme.",
              ],
            },
            {
              type: "p",
              text: "Standart Search Console Performans raporu tıklama, gösterim, tıklama oranı ve ortalama konum metriklerini; sorgu, sayfa, ülke, cihaz, arama görünümü ve tarih boyutlarını sunuyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/7576553?hl=en)). Multimodal filtreyi bu çerçeve içinde kullandığında, ekip raporuna seçilen metrikleri ve boyutları açıkça yaz.",
            },
          ],
        },
        {
          h2: "Kozmetik markası multimodal arama performansında neyi ölçmeli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik markası multimodal arama performansını tek bir toplam sayı yerine sayfa türü ve görsel kullanım amacı üzerinden ölçmeli. Ürün detay sayfası “bu ürün nedir?”, kategori sayfası “buna benzer ürünler hangileri?” ve rehber içeriği “bu görünüm nasıl uygulanır?” gibi farklı ihtiyaçlara cevap verdiği için sonuçları aynı sepete koymak karar kalitesini düşürür.",
            },
            {
              type: "ul",
              items: [
                "Ürün sayfalarında ambalaj, renk tonu, doku ve varyant görsellerini ayrı içerik kümeleri olarak izle.",
                "Kategori sayfalarında benzer ürün keşfini; rehberlerde uygulama adımı, görünüm ve karşılaştırma niyetini değerlendir.",
                "Mobil veriyi ayrıca oku; duyurudaki Lens ve Circle to Search örnekleri kamera ve ekran üstü aramayı doğrudan iş akışına dahil ediyor.",
                "Gösterim artışını satış artışı diye adlandırma. Dönüşüm için analitik ve e-ticaret verisini ayrı bağla.",
              ],
            },
            {
              type: "p",
              text: "Google, multimodal ölçümlerin yalnızca site bu tür sorgulardan trafik alıyorsa Performans raporunda görünmeye başlayacağını söylüyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). Bu nedenle boş rapor, tek başına kurulum hatası kanıtı değildir; önce yeterli veri oluşup oluşmadığını kontrol et.",
            },
          ],
        },
        {
          h2: "Multimodal arama raporu görsel içeriğe nasıl çevrilir?",
          blocks: [
            {
              type: "p",
              text: "Multimodal arama raporu, yüksek veya düşük performanslı sayfa kümelerini belirleyip görsel içerik deneyi seçmek için kullanılmalı; filtre tek başına bir optimizasyon reçetesi değildir. Google, görselin bulunduğu sayfanın içeriği ve meta verilerinin görselin Arama'da nerede görüneceğini etkileyebildiğini belirtiyor ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)).",
            },
            {
              type: "p",
              text: "İlk deneyde görseli ilgili metnin yakınına yerleştir, kısa ve açıklayıcı dosya adı kullan, alt metni erişilebilir ve bağlama uygun yaz. Google'ın görsel SEO belgesi, görsellerin ilgili metne yakın ve konuyla ilgili sayfalarda bulunmasını; alt metnin bilgi taşıyan, bağlama uygun bir açıklama olmasını öneriyor ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)).",
            },
            {
              type: "p",
              text: "Ürün sayfalarında görsel düzeni tek başına bırakma. Google, Product yapılandırılmış verisinin ürün bilgisini Google Görseller ve Google Lens dahil Arama sonuçlarında daha zengin biçimde gösterebildiğini; yapılandırılmış veri ile Merchant Center feed'ini birlikte sağlamanın uygunluğu artırdığını açıklıyor ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/structured-data/product)). Fiyat, stok ve varyant bilgisinin sayfa, işaretleme ve feed arasında tutarlı kalmasını sağla.",
            },
          ],
        },
        {
          h2: "Search Console multimodal arama için 30 günlük plan nedir?",
          blocks: [
            {
              type: "p",
              text: "Search Console multimodal arama için 30 günlük plan, önce ölçüm tabanını sabitleyip sonra küçük bir sayfa kümesinde tek değişkenli test yürütmektir. Böylece yeni filtrenin sunduğu görünürlüğü, aynı anda yapılan çok sayıda düzenlemenin gürültüsüne gömmeden okuyabilirsin.",
            },
            {
              type: "ul",
              items: [
                "1–7. gün: multimodal filtreyi dışa aktar; ürün, kategori ve rehber sayfaları için başlangıç tablosu oluştur.",
                "8–14. gün: en anlamlı bir sayfa kümesini seç; görsel yakınlığı, dosya adı ve alt metin gibi tek bir düzenleme paketi uygula.",
                "15–21. gün: indekslenebilirlik, canonical ve görsel erişilebilirliğini kontrol et; yeni değişken ekleme.",
                "22–30. gün: aynı tarih aralığı, filtre ve sayfa grubuyla yeniden ölç; yönü kaydet, fakat kısa dönem birlikteliğini nedensellik diye sunma.",
              ],
            },
            {
              type: "p",
              text: "Video ağırlıklı ürün eğitimlerini ayrı izle. Google, videoların ana Arama sonuçları, Video modu, Google Görseller ve Discover'da görünebildiğini; keşif için yapılandırılmış veri, video site haritası ve Open Graph meta verisini desteklediğini belirtiyor ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/video)). Multimodal raporda değişim gördüğünde, görsel ve video düzenlemelerini aynı testte karıştırma.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Search Console multimodal arama raporuna hangi aramalar dahil?",
          a: "Google; Lens, Android'de Circle to Search, Google Arama'ya görsel yükleme ve Chrome'daki “Bu görseli ara” özelliğiyle yapılan aramaların kapsama dahil olduğunu açıklıyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). Liste, kullanıcının görselle başlattığı birden fazla web arama yolunu aynı ölçüm çerçevesinde topluyor.",
        },
        {
          q: "Multimodal arama verisi neden Search Console'da görünmüyor?",
          a: "Google'a göre metrikler, site bu tür sorgulardan trafik alıyorsa Performans raporunda görünmeye başlar ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). Bu nedenle boş görünüm tek başına teknik hata değildir. Tarih aralığını, filtreyi ve veri oluşumunu kontrol et; yeterli sinyal yoksa sonucu zorla yorumlama.",
        },
        {
          q: "Multimodal arama raporu satış etkisini gösterir mi?",
          a: "Hayır; Search Console Performans raporu arama görünürlüğü ve etkileşim metriklerini sunar, e-ticaret satışını doğrudan ölçmez ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/7576553?hl=en)). Multimodal tıklama ve gösterimleri satışla ilişkilendirmek için analitik ve mağaza verisini ayrı bir ölçüm tasarımıyla bağlaman gerekir.",
        },
        {
          q: "Kozmetik ürün görsellerinde ilk hangi alanlar iyileştirilmeli?",
          a: "Önce görselin ilgili ürün metnine yakınlığını, açıklayıcı dosya adını ve bağlama uygun alt metni kontrol et. Google, sayfa içeriği ve meta verilerinin görsel görünürlüğünü etkileyebildiğini söylüyor ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)). Ardından ürün verisi, stok, fiyat ve varyant bilgilerinin sayfa ile işaretlemede tutarlı olduğundan emin ol.",
        },
      ],
      sources: [
        {
          label: "Google Search Central. (2026, 24 September). Announcing web multimodal Search performance reporting in Search Console.",
          url: "https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Performance report (Search results): Overview and basic setup.",
          url: "https://support.google.com/webmasters/answer/7576553?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026). Google image SEO best practices.",
          url: "https://developers.google.com/search/docs/appearance/google-images?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025). Introduction to Product structured data.",
          url: "https://developers.google.com/search/docs/appearance/structured-data/product",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025). Video SEO best practices.",
          url: "https://developers.google.com/search/docs/appearance/video",
          publisher: "Google",
        },
      ],
      tags: [
        "Google Search Console",
        "Multimodal arama",
        "Görsel SEO",
        "Ölçümleme",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "search-console-multimodal-search-report",
      title: "How should beauty brands use multimodal Search reporting?",
      metaTitle: "Search Console Multimodal Search Report | Soleach",
      metaDescription: "Use Search Console multimodal reporting to measure visual queries, compare product and content pages, and turn the data into actions for beauty brands.",
      excerpt: "Google Search Console's new multimodal filter separates visibility from searches that begin with an image. Beauty brands can compare product, category and guide pages, then turn the data into focused visual-content tests.",
      intro: [
        "A shopper may find a brand's web page by pointing a camera at packaging, uploading a screenshot or right-clicking an image instead of typing a product name. On September 24, 2026, Google announced web multimodal Search reporting in Search Console to separate these journeys ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
        "For a beauty brand, the opportunity is more than a new chart. Teams can test more systematically which product imagery, packaging, texture, shade and tutorial content lead to visibility. The report does not prove causation, however; its useful role is to support a consistent measurement routine.",
      ],
      sections: [
        {
          h2: "What changed in Search Console multimodal Search reporting?",
          blocks: [
            {
              type: "p",
              text: "Search Console multimodal Search reporting adds a performance view that separates image-led web searches from text-based searches. Google says the reporting appears in both the Performance on Search results report and the report for generative AI features ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
            },
            {
              type: "p",
              text: "The scope includes searches with Lens, Circle to Search on Android, image uploads to Google Search and Chrome's “Search this image” feature ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). This is not merely a new name for the Google Images search type; it groups several journeys in which an image is the starting input.",
            },
            {
              type: "p",
              text: "This topic is distinct from the [Search Console AI performance report](/en/blog/google-search-console-ai-performance-report). The AI report covers impressions in generative features, while the multimodal filter separates searches initiated with an image. Use them to answer different questions instead of combining them into one total.",
            },
          ],
        },
        {
          h2: "How do you use the Search Console multimodal Search filter?",
          blocks: [
            {
              type: "p",
              text: "To use the Search Console multimodal Search filter, select the new multimodal search type in the Performance report and export the data for comparison with the same periods and dimensions. Google says the insights are available through the new filter and can be downloaded with Export for analysis in other tools ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)).",
            },
            {
              type: "ul",
              items: [
                "Open the multimodal view for the latest 28 days and record the date range.",
                "Export page, query, country and device dimensions for that same range.",
                "Group product, category and editorial-guide URLs separately.",
                "Reuse the same filters in the next period; do not manufacture growth by changing the measurement method.",
              ],
            },
            {
              type: "p",
              text: "The standard Search Console Performance report offers clicks, impressions, click-through rate and average position, with query, page, country, device, search appearance and date dimensions ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/7576553?hl=en)). When applying the multimodal filter in this framework, document the exact metrics and dimensions in every internal report.",
            },
          ],
        },
        {
          h2: "What should beauty brands measure in multimodal Search performance?",
          blocks: [
            {
              type: "p",
              text: "Beauty brands should measure multimodal Search performance by page type and visual intent rather than treating one property-wide total as the answer. A product detail page may answer “what is this?”, a category page “what is similar?”, and a guide “how do I create this look?”; combining them weakens the decision.",
            },
            {
              type: "ul",
              items: [
                "On product pages, track packaging, shade, texture and variant imagery as separate content clusters.",
                "On category pages, evaluate similar-product discovery; in guides, track application, look and comparison intent.",
                "Read mobile data separately because Google's Lens and Circle to Search examples bring camera and on-screen search directly into the journey.",
                "Do not label impression growth as sales growth. Connect analytics and commerce data separately to measure conversion.",
              ],
            },
            {
              type: "p",
              text: "Google says these metrics begin to appear in the Performance report only if a site is receiving traffic from multimodal queries ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). An empty report is therefore not proof of a configuration error; first check whether enough data exists.",
            },
          ],
        },
        {
          h2: "How should multimodal Search reporting guide visual content?",
          blocks: [
            {
              type: "p",
              text: "Multimodal Search reporting should identify high- and low-performing page clusters and help select the next visual-content experiment; the filter is not an optimization recipe by itself. Google says the content and metadata of an image's landing page can influence how and where the image appears in Search ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)).",
            },
            {
              type: "p",
              text: "For a first test, place each image near relevant text, use a short descriptive filename, and write accessible alt text that fits the page context. Google's image SEO guidance recommends placing images near relevant text on relevant pages and making alt text useful, information-rich and contextual ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)).",
            },
            {
              type: "p",
              text: "Do not isolate the image layer on product pages. Google says Product structured data can present product information more richly across Search, including Google Images and Lens, and that providing both structured data and a Merchant Center feed maximizes eligibility ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/structured-data/product)). Keep price, availability and variant information consistent across the page, markup and feed.",
            },
          ],
        },
        {
          h2: "What is a 30-day plan for Search Console multimodal Search?",
          blocks: [
            {
              type: "p",
              text: "A 30-day plan for Search Console multimodal Search should fix the measurement baseline first, then run a controlled test on a small page cluster. This prevents the new visibility signal from being buried under several simultaneous changes.",
            },
            {
              type: "ul",
              items: [
                "Days 1–7: export the multimodal filter and build a baseline for product, category and guide pages.",
                "Days 8–14: choose one meaningful page cluster and apply one change set covering image proximity, filenames and alt text.",
                "Days 15–21: check indexability, canonical selection and image accessibility; do not add a new variable.",
                "Days 22–30: measure again with the same range, filter and page group; record direction without presenting short-term timing as causation.",
              ],
            },
            {
              type: "p",
              text: "Track video-led product education separately. Google says videos can appear in the main Search results, Video mode, Google Images and Discover, and supports structured data, video sitemaps and Open Graph metadata for discovery ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/video)). When the multimodal report changes, avoid mixing image and video revisions in the same test.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Which searches are included in Search Console multimodal reporting?",
          a: "Google includes searches with Lens, Circle to Search on Android, image uploads to Google Search and Chrome's “Search this image” feature ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). The list brings several image-initiated web Search journeys into one measurement framework.",
        },
        {
          q: "Why is multimodal Search data missing in Search Console?",
          a: "Google says the metrics begin appearing in the Performance report when a site receives traffic from these queries ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc)). An empty view is not automatically a technical error. Check the date range, filter and whether enough data exists; do not force a conclusion from an absent signal.",
        },
        {
          q: "Does the multimodal Search report show sales impact?",
          a: "No. Search Console's Performance report provides Search visibility and interaction metrics, not ecommerce sales ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/7576553?hl=en)). To relate multimodal clicks and impressions to sales, connect analytics and store data through a separate measurement design rather than calling visibility a conversion result.",
        },
        {
          q: "Which beauty product image elements should be improved first?",
          a: "Start with proximity to relevant product text, a descriptive filename and contextual alt text. Google says the landing page's content and metadata can influence image visibility ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/google-images?hl=en)). Then check that product, availability, price and variant information remains consistent between the page and its structured data.",
        },
      ],
      sources: [
        {
          label: "Google Search Central. (2026, September 24). Announcing web multimodal Search performance reporting in Search Console.",
          url: "https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Performance report (Search results): Overview and basic setup.",
          url: "https://support.google.com/webmasters/answer/7576553?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026). Google image SEO best practices.",
          url: "https://developers.google.com/search/docs/appearance/google-images?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025). Introduction to Product structured data.",
          url: "https://developers.google.com/search/docs/appearance/structured-data/product",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025). Video SEO best practices.",
          url: "https://developers.google.com/search/docs/appearance/video",
          publisher: "Google",
        },
      ],
      tags: [
        "Google Search Console",
        "Multimodal search",
        "Image SEO",
        "Measurement",
        "Cosmetics marketing",
      ],
    },
  },
};
