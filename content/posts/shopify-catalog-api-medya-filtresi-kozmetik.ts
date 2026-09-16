import type { BlogPost } from "@/lib/blog";

export const shopifyCatalogApiMedyaFiltresiKozmetik: BlogPost = {
  id: "shopify-catalog-api-medya-filtresi-kozmetik",
  publishedAt: "2026-09-16",
  category: "web-ecommerce",
  locales: {
    tr: {
      slug: "shopify-catalog-api-video-3d-filtre",
      title: "Shopify Catalog API medya filtresi kozmetikte ne değiştiriyor?",
      metaTitle: "Shopify Catalog API Medya Filtresi | Soleach",
      metaDescription: "Shopify Catalog API artık video ve 3D medyaya göre ürün filtreliyor. Kozmetik markaları için AR, ürün verisi ve uygulama kontrol listesini öğren.",
      excerpt: "Shopify Catalog API, ürünleri video ve 3D model varlığına göre filtreleyebiliyor; eşleşen ürünlerin medya bağlantılarını da aynı yanıtta döndürüyor. Kozmetik markaları için fırsat, kamera öncelikli alışveriş akışlarında kullanılabilir görsel varlığı baştan seçebilmek. Sınır ise net: filtre tek başına sanal deneme deneyimi kurmuyor.",
      intro: [
        "Shopify, 15 Eylül 2026'da Catalog API aramasına `catalog.filters.media` filtresini ekledi. `search_catalog` artık yalnızca video veya 3D model taşıyan ürünleri seçebiliyor; eşleşen ürünler bu varlıkların bağlantılarını aynı yanıtta döndürüyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
        "Kozmetik tarafındaki değer yeni bir ürün videosu yükleme özelliği değil. Değer, bir ajan ya da alışveriş uygulamasının “gösterilebilir varlığı olan ürünü” arama anında ayırabilmesi. Bu; ambalajı farklı açılardan gösteren 3D deneyimler, ürün uygulama videoları ve kamera öncelikli keşif için daha temiz bir seçim katmanı sağlar. Ama yüz üzerinde sanal makyaj denemesi, ton eşleme veya kamera işleme modelini Shopify senin adına üretmez.",
      ],
      sections: [
        {
          h2: "Shopify Catalog API medya filtresinde ne değişti?",
          blocks: [
            {
              type: "p",
              text: "Shopify Catalog API medya filtresi, ürün aramasını ürünün taşıdığı medya türüne göre daraltıyor. Filtre `image`, `video` ve `model_3d` değerlerini kabul ediyor; `video` ile `model_3d` birlikte istendiğinde koşullar AND mantığıyla birleşiyor ve yalnızca iki türü de taşıyan ürünler dönüyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
            },
            {
              type: "p",
              text: "Değişiklik üç Catalog API aracının yanıtını da genişletiyor. `search_catalog`, `get_product` ve `lookup_catalog` ürünün medya dizisinde video ve 3D model varlıklarını döndürebiliyor; daha önce bu dizi yalnızca görsel taşıyordu ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Filtrenin kendisi yalnızca `search_catalog` için geçerli, ancak medya bağlantıları filtre kullanılmasa da diğer iki araçtan gelebiliyor.",
            },
            {
              type: "p",
              text: "Buradaki ayrım önemli: filtre medyanın varlığını arama koşulu yapıyor, yeni medya üretmiyor. Shopify'ın ürün medya altyapısı zaten görsel, platformda barındırılan video, harici video ve 3D modeli destekliyor ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). Güncelleme, mevcut varlıkları ajanların ve araçların keşfedebileceği Catalog API yanıtına taşıyor.",
            },
          ],
        },
        {
          h2: "Shopify Catalog API video ve 3D filtresi nasıl çalışıyor?",
          blocks: [
            {
              type: "p",
              text: "Shopify Catalog API video ve 3D filtresi, önce uygun ürünü bulup sonra her ürünü tek tek medya açısından eleme döngüsünü arama katmanına taşıyor. Shopify, önceki yöntemde ürünlerin çekildiğini, kullanılabilir medya için incelendiğini ve medyası olmayanların elendiğini; yeni filtrenin bu deseni değiştirdiğini belirtiyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Global Catalog MCP, yapay zekâ ajanlarının Shopify ekosistemindeki ürünleri arayıp keşfetmesi için tasarlandığından, bu elemenin kapsamı tek bir ürün sayfasıyla sınırlı değil ([Shopify Developer Docs](https://shopify.dev/docs/agents/catalog/global-catalog)).",
            },
            {
              type: "ul",
              items: [
                "Yalnızca video gereken akışta `catalog.filters.media` içine `video` eklenir.",
                "Video ve 3D model birlikte gerekiyorsa iki değer de eklenir; sonuç yalnızca iki koşulu da karşılayan ürünlerden oluşur.",
                "Eşleşen ürünün medya dizisindeki video ve 3D kayıtları, farklı dosya biçimlerini içeren bir `sources` dizisi taşır.",
                "İstenen medya türü üründe olsa bile uygulamanın oynatabildiği dosya biçimi olmayabilir; istemci bu durumu ayrıca kontrol etmelidir.",
              ],
            },
            {
              type: "p",
              text: "Video ve 3D yanıtlarını almak için istemcinin ajan profilinde `dev.shopify.catalog.global` uzantısının taslak sürümünü bildirmesi gerekiyor. Taslak sürüm bildirilmezse medya alanı yalnızca görsel döndürüyor; Shopify bu şemanın sonraki UCP sürümünde kararlı duruma geçeceğini söylüyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Mevcut sorgular için migrasyon yok ve video ya da 3D gerekmiyorsa işlem yapmak gerekmiyor.",
            },
          ],
        },
        {
          h2: "Shopify Catalog API medya filtresi kozmetik markasına ne sağlar?",
          blocks: [
            {
              type: "p",
              text: "Shopify Catalog API medya filtresi kozmetik markasına, kamera veya zengin ürün sunumu isteyen bir akışa yalnızca uygun varlığı bulunan ürünleri alma imkânı sağlar. Bir ruj uygulama videosu, parfüm şişesinin 3D modeli ya da ambalaj detayını farklı açılardan gösteren bir varlık yoksa, ürün deneyime seçilmeden elenebilir.",
            },
            {
              type: "p",
              text: "Bu, özellikle sanal deneme ve kamera öncelikli keşif için anlamlıdır; Shopify da güncellemenin AR deneme, 3D ürün görüntüleyici ve kamera öncelikli alışveriş geliştiren ekipler için önemini açıkça vurguluyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Google'ın 2025 tarihli alışveriş duyurusu da ABD'deki kullanıcıların birden fazla makyaj ürününü aynı görünümde sanal olarak deneyebildiğini gösteriyor ([Google (2025)](https://blog.google/products-and-platforms/products/shopping/ai-vision-match-ar-beauty-virtual-try-on/)). Bu, kamera tabanlı güzellik alışverişinin yalnızca teorik bir kullanım olmadığını gösteren ayrı bir platform örneği.",
            },
            {
              type: "p",
              text: "Yine de `model_3d` ile yüz üzerinde sanal makyaj denemesini aynı şey saymamak gerekir. Shopify'ın 3D ürün modelleri GLB ve USDZ biçimlerini destekler ve desteklenen cihazlarda AR için kullanılabilir ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). Fondöten veya rujun yüzde görünmesini sağlayan güzellik AR'ı ise yüz takibi, renk eşleme ve ayrı bir deneyim katmanı ister. Yeni filtre kullanılabilir varlığı bulur; o katmanı inşa etmez.",
            },
          ],
        },
        {
          h2: "Kozmetik kataloğu Shopify medya filtresine nasıl hazırlanmalı?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik kataloğu Shopify medya filtresine, dosya sayısını artırarak değil ürün, varyant ve kullanım amacı arasındaki eşleşmeyi temizleyerek hazırlanmalı. Arama filtresi yalnızca üründe belirli bir medya türünün bulunduğunu doğrular; varlığın doğru tonu, ambalajı veya uygulama biçimini gösterdiğini garanti etmez.",
            },
            {
              type: "ul",
              items: [
                "Her ürün için medya amacını yaz: uygulama tekniği, ambalaj görünümü, doku, bitiş veya 3D inceleme.",
                "Video kaydını doğru ürünle eşleştir ve dosyanın istemcinin oynatabildiği biçimde döndüğünü test et.",
                "3D modellerde GLB ve USDZ çıktılarının ikisini de kontrol et; Shopify bu biçimleri sırasıyla web ve iOS AR için sunuyor ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)).",
                "Varyanta özgü medya gerekiyorsa ilişkiyi ayrıca denetle. Shopify'a göre medya önce üründe bulunmalı; bir varyant yalnızca üründe zaten bulunan medyaya referans verebilir ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)).",
                "Medya türü filtresini ton, stok ve teslimat gibi diğer seçim koşullarının yerine koyma; bunlar ayrı katalog kontrolleridir.",
              ],
            },
            {
              type: "p",
              text: "Bu hazırlık, Shopify mağazasının temel ürün ve varyant mimarisinin devamıdır. Platform kararlarını yeni veriyorsan [kozmetik markaları için Shopify kurulum rehberimiz](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu) önce ürün veri temelini kurar. Ajanın mağaza içinde katalog araması ve sepeti yönetmesi tarafı içinse [Shopify WebMCP yazımız](/tr/blog/shopify-webmcp-yapay-zeka-ajanlari-kozmetik) ayrı mekanizmayı anlatır.",
            },
          ],
        },
        {
          h2: "Shopify Catalog API medya filtresi için bugün ne yapılmalı?",
          blocks: [
            {
              type: "p",
              text: "Shopify Catalog API medya filtresi için bugün yapılacak iş, medya envanterini çıkarmak ve bir küçük sorguyla uçtan uca doğrulama yapmaktır. Video veya 3D kullanan bir ajan ya da alışveriş uygulaması geliştirmiyorsan Shopify açıkça işlem gerekmediğini ve mevcut sorguların aynı ürünleri döndürmeye devam ettiğini söylüyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
            },
            {
              type: "ul",
              items: [
                "Katalogda video veya 3D taşıyan ürünleri ve bunların hangi varyantı temsil ettiğini listele.",
                "Ajan profilinde taslak `dev.shopify.catalog.global` uzantısını yalnızca bu medya türlerine ihtiyacın varsa bildir.",
                "Önce `video`, sonra `model_3d`, ardından iki değeri birlikte isteyen üç test sorgusu çalıştır.",
                "Yanıttaki medya `sources` kayıtlarını hedef cihazlarda aç; var ama oynatılamayan biçimleri hata olarak kaydet.",
                "Sonucu ürün, ton ve stok doğruluğuyla birlikte değerlendir; “medya var” koşulunu “deneyim hazır” sonucu gibi raporlama.",
              ],
            },
            {
              type: "p",
              text: "Bu güncellemenin en iyi kullanımı her ürüne aceleyle 3D model eklemek değil, belirli bir alışveriş deneyiminin gerçekten hangi varlığa ihtiyaç duyduğunu tanımlamaktır. Filtre seçim maliyetini düşürüyor; içerik üretimi, ürün doğruluğu ve deneyim tasarımı hâlâ markanın sorumluluğunda.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Shopify Catalog API hangi medya türlerine göre filtreleme yapıyor?",
          a: "`catalog.filters.media` filtresi `image`, `video` ve `model_3d` değerlerini kabul ediyor. Birden fazla değer AND mantığıyla birleştiği için `video` ve `model_3d` birlikte istenirse yalnızca iki medya türünü de taşıyan ürünler dönüyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Tek bir değerdeyse diğer medya türlerinin bulunması zorunlu değil.",
        },
        {
          q: "Shopify mağazamda bu medya filtresi için migrasyon gerekiyor mu?",
          a: "Video veya 3D medyayı Catalog API yanıtında kullanmıyorsan hayır. Shopify, mevcut filtrelerde değişiklik, yeni endpoint veya migrasyon olmadığını; mevcut sorguların aynı ürünleri döndürmeye devam ettiğini belirtiyor ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Video ve 3D yanıtları için yalnızca taslak global katalog uzantısını bildirmen gerekiyor.",
        },
        {
          q: "Shopify medya filtresi sanal makyaj denemesini otomatik kurar mı?",
          a: "Hayır. Filtre, video veya 3D model varlığı bulunan ürünleri seçer ve varlık bağlantılarını döndürür. Yüz üzerinde ruj, fondöten veya göz makyajı denemesi için gereken yüz takibi, renk eşleme ve arayüz katmanını kurmaz. Onu ayrı bir güzellik AR çözümü olarak tasarlamak gerekir.",
        },
        {
          q: "Shopify ürün videosu ve 3D modeli için hangi dosya biçimleri destekleniyor?",
          a: "Shopify'ın geliştirici belgesinde platformda barındırılan videolar için MP4, MOV ve WEBM; 3D modeller için GLB ve USDZ listeleniyor. Shopify, 3D modelleri web için GLB ve iOS AR için USDZ biçimlerinde sunuyor ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). Catalog API yanıtındaki `sources` dizisini hedef istemcinin desteklediği biçime göre kontrol et.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, 15 September). Filter Catalog search results by media type. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/filter-catalog-search-results-by-media-type",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026). Global Catalog MCP. Shopify Developer Documentation.",
          url: "https://shopify.dev/docs/agents/catalog/global-catalog",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026). Manage media for products and collections. Shopify Developer Documentation.",
          url: "https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media",
          publisher: "Shopify",
        },
        {
          label: "Rincon, L. (2025, 5 March). Use AI to find exactly the right clothes, try on makeup and more. Google.",
          url: "https://blog.google/products-and-platforms/products/shopping/ai-vision-match-ar-beauty-virtual-try-on/",
          publisher: "Google",
        },
      ],
      tags: [
        "Shopify",
        "E-ticaret",
        "Kozmetik pazarlaması",
        "Artırılmış gerçeklik",
        "Agentic commerce",
      ],
    },
    en: {
      slug: "shopify-catalog-api-video-3d-filter-beauty",
      title: "What does Shopify's Catalog API media filter change for beauty?",
      metaTitle: "Shopify Catalog API Media Filter | Soleach",
      metaDescription: "Shopify Catalog API now filters products by video and 3D media. Learn what beauty brands should check for AR, product data and implementation.",
      excerpt: "Shopify's Catalog API can now filter products by the presence of video and 3D models, returning links to the matching media in the same response. For beauty brands, the opportunity is to select products with renderable assets before a camera-first shopping flow begins. The boundary is just as important: the filter does not build virtual try-on by itself.",
      intro: [
        "On 15 September 2026, Shopify added `catalog.filters.media` to Catalog API search. `search_catalog` can now select only products carrying video or 3D models and return links to those assets in the same response ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
        "For a beauty brand, the value is not a new way to upload product videos. It is the ability for an agent or shopping application to separate products with renderable assets at search time. That creates a cleaner selection layer for package models, application videos and camera-first discovery. It does not make Shopify generate face-based makeup try-on, shade matching or camera processing on the brand's behalf.",
      ],
      sections: [
        {
          h2: "What changed in Shopify's Catalog API media filter?",
          blocks: [
            {
              type: "p",
              text: "Shopify's Catalog API media filter narrows product search by the type of media attached to a product. It accepts `image`, `video` and `model_3d`; when `video` and `model_3d` are requested together, the entries combine with AND logic and only products carrying both types qualify ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
            },
            {
              type: "p",
              text: "The release also expands three Catalog API tool responses. `search_catalog`, `get_product` and `lookup_catalog` can return video and 3D assets in a product's media array, which previously carried images only ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). The filter applies only to `search_catalog`, while the asset URLs can appear in the other two tools even when no filter is used.",
            },
            {
              type: "p",
              text: "The distinction matters: this filter makes existing media discoverable as a search condition; it does not create the media. Shopify's product-media infrastructure already supports images, Shopify-hosted video, external video and 3D models ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). The release moves those assets into responses that agents and tools can act on.",
            },
          ],
        },
        {
          h2: "How does Shopify's Catalog API video and 3D filter work?",
          blocks: [
            {
              type: "p",
              text: "Shopify's Catalog API video and 3D filter moves the old fetch-inspect-discard loop into the search layer. Shopify says clients previously had to request products, inspect each one for usable media and discard products without it; the new filter replaces that pattern ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Because Global Catalog MCP is designed for AI agents to search and discover products across the Shopify ecosystem, that selection layer is not confined to one product page ([Shopify Developer Docs](https://shopify.dev/docs/agents/catalog/global-catalog)).",
            },
            {
              type: "ul",
              items: [
                "For a video-only experience, add `video` to `catalog.filters.media`.",
                "If video and a 3D model are both mandatory, include both values; only products meeting both conditions remain.",
                "Video and 3D records in a matched product's media array carry a `sources` array with entries for available file formats.",
                "The requested media can exist while the specific format your client needs does not, so format support still needs a separate check.",
              ],
            },
            {
              type: "p",
              text: "To receive video and 3D responses, the client must declare the draft version of `dev.shopify.catalog.global` in its agent profile. Without that draft declaration, the media field continues to return images only; Shopify says the schema will move to stable in the next UCP release ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). There is no migration for existing queries, and no action is required when an application does not need video or 3D.",
            },
          ],
        },
        {
          h2: "What does Shopify's Catalog API media filter give a beauty brand?",
          blocks: [
            {
              type: "p",
              text: "Shopify's Catalog API media filter lets a beauty brand feed a camera or rich-product flow only with products that carry a suitable asset. A lipstick application video, a 3D fragrance bottle or a multi-angle package asset can become a prerequisite instead of something the application discovers after selecting the product.",
            },
            {
              type: "p",
              text: "That is relevant to virtual try-on and camera-first discovery. Shopify explicitly frames the change for teams building AR try-on, 3D product viewers and camera-first shopping ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Google's 2025 shopping announcement separately shows U.S. users virtually trying beauty looks made from multiple makeup products ([Google (2025)](https://blog.google/products-and-platforms/products/shopping/ai-vision-match-ar-beauty-virtual-try-on/)). It is a separate platform example demonstrating that camera-based beauty shopping is already a real product category, not only a hypothetical use case.",
            },
            {
              type: "p",
              text: "Do not treat `model_3d` as the same thing as face-based makeup try-on. Shopify's 3D product models support GLB and USDZ and can be used for AR on supported devices ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). Putting foundation or lipstick on a face still requires face tracking, colour matching and a dedicated experience layer. The new filter finds a renderable asset; it does not build that layer.",
            },
          ],
        },
        {
          h2: "How should a beauty catalogue prepare for Shopify's media filter?",
          blocks: [
            {
              type: "p",
              text: "A beauty catalogue should prepare for Shopify's media filter by cleaning the relationship between product, variant and use case—not by maximizing file count. The search filter proves that a media type exists on the product; it does not prove the asset depicts the right shade, package or application method.",
            },
            {
              type: "ul",
              items: [
                "Write down the purpose of every asset: application technique, packaging, texture, finish or 3D inspection.",
                "Associate each video with the correct product and test that the returned format can play in the target client.",
                "Check both GLB and USDZ outputs for 3D models; Shopify serves them for the web and iOS AR respectively ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)).",
                "Audit the association separately when media belongs to a variant. Shopify says media must exist on the product before a variant can reference it ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)).",
                "Do not substitute the media-type filter for shade, availability or shipping checks; those remain separate catalogue conditions.",
              ],
            },
            {
              type: "p",
              text: "This preparation extends the store's underlying product and variant architecture. If those platform decisions are still open, our [Shopify setup guide for cosmetics brands](/en/blog/shopify-store-setup-for-cosmetics-brands) establishes the data foundation first. For agents searching a catalogue and operating a cart inside the storefront, our [Shopify WebMCP article](/en/blog/shopify-webmcp-ai-agents-beauty-brands) covers that separate mechanism.",
            },
          ],
        },
        {
          h2: "What should teams do now for Shopify's Catalog API media filter?",
          blocks: [
            {
              type: "p",
              text: "For Shopify's Catalog API media filter, the useful next step is a media inventory followed by one small end-to-end query test. If no agent or shopping application needs video or 3D, Shopify says no action is required and existing queries continue to return the same products ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)).",
            },
            {
              type: "ul",
              items: [
                "List products carrying video or 3D media and record which variant each asset actually represents.",
                "Declare the draft `dev.shopify.catalog.global` extension only for clients that need these richer media responses.",
                "Run three test searches: `video`, `model_3d`, and both values together.",
                "Open the returned media `sources` on target devices and log formats that exist but cannot be rendered.",
                "Evaluate the result alongside product, shade and inventory accuracy; never report “media exists” as “the experience is ready.”",
              ],
            },
            {
              type: "p",
              text: "The strongest use of this release is not adding a 3D model to every product in a rush. It is defining which asset a specific shopping experience genuinely requires. The filter reduces selection cost; content production, product accuracy and experience design remain the brand's work.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Which media types can Shopify's Catalog API filter?",
          a: "`catalog.filters.media` accepts `image`, `video` and `model_3d`. Multiple entries combine with AND logic, so a request for `video` and `model_3d` returns only products carrying both media types ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). With one value, the other media types are not prerequisites for a match.",
        },
        {
          q: "Does my Shopify store need a migration for the media filter?",
          a: "Not if your Catalog API client does not use video or 3D media. Shopify says there is no change to existing filters, no new endpoint and no migration; existing queries keep returning the same products ([Shopify Changelog (2026)](https://shopify.dev/changelog/filter-catalog-search-results-by-media-type)). Clients that need video and 3D responses only need to declare the draft global catalogue extension.",
        },
        {
          q: "Does Shopify's media filter automatically build virtual makeup try-on?",
          a: "No. It selects products carrying video or 3D models and returns links to those assets. It does not supply the face tracking, colour matching or interface required to place lipstick, foundation or eye makeup on a shopper's face. That still needs a dedicated beauty AR implementation.",
        },
        {
          q: "Which file formats does Shopify support for product video and 3D?",
          a: "Shopify's developer documentation lists MP4, MOV and WEBM for hosted video and GLB and USDZ for 3D models. It serves the model formats for the web and iOS AR respectively ([Shopify Developer Docs](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media)). Check the Catalog API `sources` array against the formats your target client can render.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, September 15). Filter Catalog search results by media type. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/filter-catalog-search-results-by-media-type",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026). Global Catalog MCP. Shopify Developer Documentation.",
          url: "https://shopify.dev/docs/agents/catalog/global-catalog",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026). Manage media for products and collections. Shopify Developer Documentation.",
          url: "https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections/manage-media",
          publisher: "Shopify",
        },
        {
          label: "Rincon, L. (2025, March 5). Use AI to find exactly the right clothes, try on makeup and more. Google.",
          url: "https://blog.google/products-and-platforms/products/shopping/ai-vision-match-ar-beauty-virtual-try-on/",
          publisher: "Google",
        },
      ],
      tags: [
        "Shopify",
        "Ecommerce",
        "Cosmetics marketing",
        "Augmented reality",
        "Agentic commerce",
      ],
    },
  },
};
