import type { BlogPost } from "@/lib/blog";

export const shopifyWebmcpAjanAraclari: BlogPost = {
  id: "shopify-webmcp-ajan-araclari",
  publishedAt: "2026-08-08",
  category: "web-ecommerce",
  locales: {
    tr: {
      slug: "shopify-webmcp-yapay-zeka-ajanlari-kozmetik",
      title: "Shopify mağazan artık yapay zekâya ürün değil araç veriyor: WebMCP ne değiştiriyor?",
      metaTitle: "Shopify WebMCP Nedir? Kozmetikte Ne Değişiyor (2026) | Soleach",
      metaDescription: "Shopify 5 Ağustos'ta tüm Liquid mağazalarında WebMCP'yi açtı: yapay zekâ ajanları artık katalogda arıyor, sepeti güncelliyor. Kozmetikte ne değişiyor?",
      excerpt: "5 Ağustos 2026'da Shopify, kurulum gerektirmeyen bir değişiklik yaptı: her Liquid mağazası artık yapay zekâ ajanlarına doğrudan çağırabilecekleri araçlar sunuyor. Ajan artık sayfanı okumaya ve tıklama taklit etmeye çalışmıyor; katalogda arama yapan, varyant seçen, sepeti güncelleyen fonksiyonları çağırıyor. Kozmetik tarafında bunun tek bir somut karşılığı var: ten tonu ve varyant adlandırman, ilk kez makine tarafından okunuyor.",
      intro: [
        "Shopify'ın geliştirici changelog'una 5 Ağustos 2026'da düşen madde, uzunluğuna bakılırsa küçük bir güncelleme: \"Online mağazalar artık yapay zekâ ajanlarının çağırabileceği WebMCP araçları sunuyor.\" Duyuruda kurulum ya da ayar gerekmediği açıkça yazıyor — araçlar her Liquid mağazasında ve Hydrogen developer preview'da o gün itibarıyla canlı ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
        "Bunun anlamı şu: mağazanın yapay zekâya sunduğu şey artık yalnızca bir sayfa değil, bir **fonksiyon listesi**. Ajan ürünü bulmak için sayfayı kazımıyor, `search_catalog` çağırıyor. Sepete eklemek için butonun koordinatını tahmin etmiyor, `update_cart` çağırıyor. Shopify'ın kendi dokümanı bu farkı \"yavaş ve hataya açık\" olan yönteme karşı \"daha doğrudan bir yaklaşım\" diye tarif ediyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
        "Bu yazıda üç şeyi ayırıyoruz: teknik olarak tam olarak ne açıldı, bir kozmetik markasının ürün verisinde bunun karşılığı ne, ve bugün ne kadarı gerçek — çünkü standardın kendisi hâlâ öneri aşamasında ve ajan desteği sınırlı.",
      ],
      sections: [
        {
          h2: "30 saniyede: ne değişti?",
          blocks: [
            {
              type: "ul",
              items: [
                "**Ne oldu:** Shopify, WebMCP araçlarını tüm Liquid mağazalarında ve Hydrogen developer preview'da açtı. Kurulum ya da yapılandırma gerekmiyor ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
                "**Ne zaman:** 5 Ağustos 2026.",
                "**Ne sunuluyor:** Katalog arama, ürün detayı, varyant seçimi, sepet okuma/güncelleme/boşaltma, ödemeye gitme, sipariş geçmişi ve mağaza politikası/SSS araması ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
                "**Nerede çalışıyor:** Alışverişçinin baktığı sekmede, kendi canlı oturumunda. Sepette olan değişikliği alışverişçi de görüyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
                "**Ne kadar yaygın:** WebMCP hâlâ öneri aşamasında bir standart; ajan desteği şimdilik Chromium tabanlı tarayıcılarla ve bir origin trial ile sınırlı ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
                "**Kozmetik açısından kritik nokta (bizim yorumumuz):** `show_variant` aracı kısmi seçimle — örneğin bir renkle — eşleşen varyantı seçebiliyor. Yani shade adlandırman ilk kez makinenin eşleştirmeye çalıştığı bir veri hâline geliyor.",
              ],
            },
          ],
        },
        {
          h2: "WebMCP tam olarak ne, neyin yerine geçiyor?",
          blocks: [
            {
              type: "p",
              text: "WebMCP, sitelerin yapay zekâ ajanlarına yapılandırılmış araçlar sunmasını sağlayan, öneri aşamasındaki bir web standardı. Chrome'un dokümantasyonu amacı şöyle özetliyor: ajanın bir butonun ya da alanın ne işe yaradığını incelemesi yerine, sitenin o öğenin amacını **kendisinin bildirmesi** ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
            },
            {
              type: "p",
              text: "Yerine geçtiği yöntemin adı *actuation*: ajanın, insan kullanıcıymış gibi fare tıklamalarını ve metin girişini taklit etmesi ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). Bu yöntemin maliyeti sadece hız değil — sayfa yapısındaki küçük bir değişiklik, gecikmeli yüklenen bir öğe ya da kayan bir düzen, otomasyon döngüsünün tamamını bozabiliyor ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)).",
            },
            {
              type: "quote",
              text: "Araçlar olmadan ajan, sayfanın kodunu okumak ve butonlara, linklere tıklamayı simüle etmek zorunda kalır; bu da yavaş ve hataya açıktır.",
              cite: "Shopify, WebMCP tools",
              citeUrl: "https://shopify.dev/docs/api/web-mcp",
            },
            {
              type: "p",
              text: "WebMCP'nin bunun yerine koyduğu üç şey var: araçların tarayıcıya kaydedilmesi için standart bir keşif yolu, girdi ve beklenen çıktının JSON Schema ile açıkça tanımlanması, ve sayfanın güncel bağlamının ajanla paylaşılması. Chrome ekibi JSON Schema'nın gerekçesini doğrudan yazıyor: halüsinasyonu ve yanlış anlamayı azaltmak ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
            },
            {
              type: "p",
              text: "Standart Chrome 149'dan itibaren origin trial'da; yani geliştiriciler kendi origin'lerini kaydedip gerçek kullanıcılar üzerinde çalıştırabiliyor ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). Shopify tarafında ise bu işi mağaza sahibinin yapmasına gerek yok — Shopify araçları platform seviyesinde kendisi sunuyor ve spesifikasyonu Google ve Microsoft'la birlikte şekillendirdiğini söylüyor ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
            },
          ],
        },
        {
          h2: "Ajan senin mağazanda hangi araçları çağırabiliyor?",
          blocks: [
            {
              type: "p",
              text: "Shopify'ın dokümanı araçları dört gruba ayırıyor. Hangi aracın çağrılacağına ajan karar veriyor; her araç, ne zaman kullanılacağını anlatan bir açıklamayla geliyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "ul",
              items: [
                "**Katalog:** `search_catalog` (ürün, koleksiyon, makale ve sayfalarda arama; fiyat ve stok durumuyla birlikte), `browse_store` (koleksiyonları listeleme), `get_product` (varyantlar, fiyatlar ve **hangi seçenek kombinasyonlarının stokta olduğu** dahil tam detay), `show_variant` (belirli bir varyantla ürün sayfasına götürme).",
                "**Sepet:** `get_cart` (satır kalemleri, adetler ve toplamlar), `update_cart` (ekleme, adet değiştirme, çıkarma), `cancel_cart` (sepeti boşaltma).",
                "**Ödeme ve siparişler:** `proceed_to_checkout` (sepetin boş olmadığını doğruladıktan sonra ödemeye götürme), `manage_orders` (sipariş geçmişi sayfasına götürme; giriş yapılmamışsa önce giriş isteniyor).",
                "**Mağaza bilgisi:** `search_shop_policies_and_faqs` (iade, kargo, çalışma saatleri gibi politika ve hizmet sorularını mağazanın kendi içeriğinden cevaplama).",
              ],
            },
            {
              type: "p",
              text: "Teknik tarafta iki detay önemli. Katalog araçları veriyi Storefront API üzerinden okuyor; sepet araçları ise uygulamaların da kullandığı standart storefront action'ları — yani `Shopify.actions` üzerindeki aynı fonksiyonları — çağırıyor. Pratik sonucu şu: temanız sepet güncellemesinde bir çekmece açıyorsa, ajanın yaptığı güncelleme de o çekmeceyi tetikliyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "p",
              text: "İkincisi, hiçbir şey arka planda olmuyor. Shopify'ın ifadesiyle ajanın yaptığı her şey alışverişçinin baktığı sekmede gerçekleşiyor: sepet değişikliği alışverişçinin gördüğü sepeti değiştiriyor, gezinme alışverişçiyi o sayfaya götürüyor ([Shopify](https://shopify.dev/docs/api/web-mcp)). Bu, tarayıcıdaki ajanı, Shopify'ın dışarıdan bağlanan ajanlar için sunduğu ayrı yoldan (UCP ve MCP sunucuları) ayıran temel fark ([Shopify](https://shopify.dev/docs/agents)).",
            },
          ],
        },
        {
          h2: "Bu neden özellikle bir kozmetik markasının meselesi?",
          blocks: [
            {
              type: "p",
              text: "Buradan sonrası bizim yorumumuz: araç listesindeki üç madde, kozmetikte diğer kategorilere göre daha sert vuruyor. Sebebi kozmetiğin varyant yapısı.",
            },
            {
              type: "p",
              text: "**Birincisi, shade adlandırması.** `show_variant` aracının dokümandaki tarifi şöyle: ajan tam bir varyant geçirebilir, **ya da bir renk gibi kısmi bir seçenek seçimi** geçirebilir; araç eşleşen, mevcut bir varyantı seçer ([Shopify](https://shopify.dev/docs/api/web-mcp)). Yani \"kavuniçi bir ruj\" isteği, teorik olarak doğrudan bir varyanta bağlanabiliyor. Ama bu eşleşmenin çalışabilmesi için varyantının bir renk anlamı taşıması gerekiyor. Seçenek değerlerin `04`, `07`, `12` ise ortada eşleştirilecek bir şey yok. Bu, yıllardır \"kullanıcı deneyimi\" başlığı altında konuştuğumuz bir konunun ilk kez makine tarafına geçmesi demek.",
            },
            {
              type: "p",
              text: "**İkincisi, stok bilgisinin varyant seviyesine inmesi.** `get_product`, hangi seçenek kombinasyonlarının stokta olduğunu döndürüyor ([Shopify](https://shopify.dev/docs/api/web-mcp)). Kozmetikte tükenen genelde ürün değil, tek bir ton olur. Ajan bunu artık ürün sayfasında gri kutuyu görmeye çalışarak değil, yapılandırılmış veriden okuyor.",
            },
            {
              type: "p",
              text: "**Üçüncüsü, politika metinlerinin cevap hâline gelmesi.** `search_shop_policies_and_faqs`, iade ve kargo gibi soruları mağazanın kendi içeriğinden cevaplıyor ([Shopify](https://shopify.dev/docs/api/web-mcp)). Kozmetikte bu sıradan bir kargo sorusu değil: \"açılmış ürün iade edilir mi\", hijyen kategorisinin en çok sorulan sorusu. O sayfada yazan belirsiz bir cümle, artık ajanın alışverişçiye verdiği cevap oluyor.",
            },
            {
              type: "p",
              text: "Buna bir de risk tarafı ekleniyor. Ajanın okuduğu metin senin ürün açıklaman; kozmetikte iddia dili düzenlemeye tabi ve kozmetik bir ilaç değil. Sayfandaki abartılı ya da tedavi çağrıştıran bir ifade, artık yalnızca sayfada durmuyor — ajanın cevabına girme ihtimali var. Bu, ürün metinlerini yeniden okumak için yeterli bir gerekçe.",
            },
            {
              type: "p",
              text: "Bu maddelerin ortak noktası şu: hiçbiri yeni bir teknoloji yatırımı istemiyor. Üçü de zaten girilmiş verinin kalitesiyle ilgili. Kozmetik markası için Shopify kurulumunun temel kararlarını [ayrı bir rehberde](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu) topladık; WebMCP, o rehberdeki varyant ve içerik kararlarının vadesini öne çekiyor.",
            },
          ],
        },
        {
          h2: "Bugün ne kadar gerçek? Sınırları neler?",
          blocks: [
            {
              type: "p",
              text: "Dürüst cevap: araçlar canlı, ama onları çağıracak ajan yaygın değil. Shopify duyurusunda bunu kendisi yazıyor — WebMCP hâlâ gelişmekte olan bir standart ve ajan desteği şu an Chromium tabanlı tarayıcılarla, bir origin trial üzerinden sınırlı ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
            },
            {
              type: "p",
              text: "Chrome'un dokümantasyonu üç yapısal sınır daha sayıyor ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)):",
            },
            {
              type: "ul",
              items: [
                "**Tarayıcı bağlamı zorunlu.** Araç çağrıları JavaScript'te işlendiği için açık bir sekme ya da webview gerekiyor; headless durumda araç çağrısı desteklenmiyor.",
                "**Keşfedilebilirlik sorunu.** İstemcilerin ve tarayıcıların, bir sitede çağrılabilir araç olup olmadığını bilmesi için siteyi doğrudan ziyaret etmesi gerekiyor.",
                "**Karmaşık arayüzlerde ek yük.** Site karmaşıksa, arayüz ve uygulama durumunu yönetmek için yeniden düzenleme ya da ek JavaScript gerekebiliyor. (Shopify tarafında bu yükü platform üstleniyor.)",
              ],
            },
            {
              type: "p",
              text: "Güvenlik tarafında da açık bir uyarı var. Standardın yazarları, dil modellerinin **dolaylı prompt injection**'a açık olduğunu ve site API'lerini dışarı açmanın yönetilmesi gereken riskler doğurduğunu hatırlatıyor; dışarıdan gelen veri yüklerinin `untrustedContentHint` ile işaretlenmesi, değiştirmeyen işlemlerin ise `readOnlyHint` ile belirtilmesi öneriliyor ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). Bir kozmetik mağazasında dışarıdan gelen içeriğin en yaygın hâli müşteri yorumları ve soru-cevap bölümleri — bunun bir vektör olarak düşünülmesi gerekir (bu, kaynağın genel uyarısından bizim çıkardığımız bir sonuç, kaynağın kendi örneği değil).",
            },
            {
              type: "p",
              text: "Chrome ayrıca hassas işlemler için — satın alma gibi — kullanıcıdan onay diyaloğu isteyen bir komut eklenebileceğini belirtiyor ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). Shopify tarafında `proceed_to_checkout` zaten ödemeyi tamamlamıyor, alışverişçiyi ödemeye götürüyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "p",
              text: "Son bir ölçek notu: erken bir uygulayıcı, Chrome DevTools için yazdığı bir WebMCP polyfill'inde token kullanımında yaklaşık %90 düşüş bildirdi ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). Bunu bir sektör ortalaması gibi okumamak gerekiyor — tek bir geliştiricinin, test otomasyonu senaryosunda kendi bildirdiği bir ölçüm; bağımsız bir çalışma değil.",
            },
          ],
        },
        {
          h2: "Bugün ne yapmalısın?",
          blocks: [
            {
              type: "p",
              text: "Ajan desteği yaygınlaşmadan yapılacak işlerin hiçbiri WebMCP'ye özel değil — hepsi zaten yapılması gereken, sadece vadesi öne gelen işler. Sıralaması şöyle:",
            },
            {
              type: "ul",
              items: [
                "**Varyant seçeneklerini anlamlı isimlendir.** Ton adının yanında ne olduğunu anlatan bir seçenek değeri (renk ailesi, alt ton) bulundur. `show_variant`'ın kısmi eşleştirmesi ancak eşleşecek bir şey varsa çalışır.",
                "**Varyant stok verisini temiz tut.** Stok bilgisi artık ürün seviyesinde değil, seçenek kombinasyonu seviyesinde okunuyor. Yanlış işaretlenmiş bir ton, ajanın önerdiği ama sepete girmeyen bir ürün demek.",
                "**İade ve kargo politikanı net cümlelerle yaz.** Özellikle açılmış kozmetik ürünün iadesi, kargo eşiği ve teslim süresi. Bu sayfalar artık bir ajanın cevap kaynağı.",
                "**Ürün açıklamalarındaki iddia dilini gözden geçir.** Kozmetik bir ilaç değil; tedavi çağrıştıran ifadeler yalnızca mevzuat riski değil, artık ajanın tekrarlayabileceği bir metin.",
                "**Temanın sepet davranışını kontrol et.** Sepet araçları temanın standart action'larını tetikliyor; sepet çekmecesi ya da güncelleme akışı bozuksa ajan da o bozuk akışı tetikler.",
                "**Yorum ve kullanıcı içeriğini ayrı bir risk kalemi say.** Dışarıdan gelen metin, standardın kendi güvenlik uyarısının merkezinde.",
                "**Görünürlüğü tek bir başlık sanma.** Ajanın mağazanda ne yapabildiği ile markanın üretken yapay zekâ cevaplarında görünüp görünmediği farklı mekanikler; ikincisini [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) ayrıntılı anlattık ve [yapay zekâ görünürlüğü tarafındaki çalışmamızı](/tr/services#seo-geo) da oradan yürütüyoruz.",
              ],
            },
            {
              type: "p",
              text: "Bir de beklenti ayarı. WebMCP bir trafik kaynağı değil, bir arayüz katmanı. Chrome ekibi bunu ilerlemeli bir iyileştirme (progressive enhancement) olarak tarif ediyor ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)) — yani ajan destekliyorsa iş kolaylaşıyor, desteklemiyorsa site eskisi gibi çalışıyor. Kimse bugün WebMCP yüzünden satış kaybetmiyor. Ama listede yazan işlerin hiçbiri de bugün yapılmasın diye bir sebep yok; çünkü ajan gelmese bile o veriyi okuyan bir insan zaten var.",
            },
            {
              type: "p",
              text: "Türkiye'deki güzellik markalarının sitelerinde çoğunlukla platformun verdiği varsayılanların durduğunu, [216 markayı taradığımız araştırmada](/tr/blog/turkiye-guzellik-markalari-web-sitesi-arastirmasi-2026) ayrıntısıyla anlattık. WebMCP'nin ilk pratik etkisi de muhtemelen burada olacak: varsayılanla yetinen mağaza ile veri girişini ciddiye alan mağaza arasındaki fark, ilk kez makine tarafında da görünür hâle geliyor.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "WebMCP'yi mağazama kurmam gerekiyor mu?",
          a: "Hayır. Shopify duyurusunda araçların her Liquid mağazasında ve Hydrogen developer preview'da canlı olduğunu, kurulacak ya da yapılandırılacak bir şey olmadığını belirtiyor ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)). Senin tarafındaki iş kurulum değil, araçların okuduğu verinin kalitesi.",
        },
        {
          q: "Yapay zekâ ajanı benim adıma satış tamamlayabiliyor mu?",
          a: "Tarayıcıdaki ajan için hayır. `proceed_to_checkout` aracı, sepetin boş olmadığını doğruladıktan sonra alışverişçiyi ödemeye götürüyor — ödemeyi kendisi tamamlamıyor ([Shopify](https://shopify.dev/docs/api/web-mcp)). Shopify'ın dışarıdan bağlanan ajanlar için sunduğu ayrı UCP yolunda ise güvenilir ajanların doğrudan checkout tamamlaması ayrı bir yetki katmanı olarak tanımlanıyor ([Shopify](https://shopify.dev/docs/agents)).",
        },
        {
          q: "Bu özellik her tarayıcıda çalışıyor mu?",
          a: "Hayır. Shopify, WebMCP'nin hâlâ gelişmekte olan bir standart olduğunu ve ajan desteğinin şu an Chromium tabanlı tarayıcılarla, bir origin trial üzerinden sınırlı olduğunu yazıyor ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)). Chrome tarafında origin trial Chrome 149'dan itibaren açık ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
        },
        {
          q: "Ajan sepeti değiştirirse müşteri bunu görüyor mu?",
          a: "Evet. Shopify'ın dokümanına göre ajanın yaptığı her şey alışverişçinin baktığı sekmede gerçekleşiyor; sepet güncellemeleri alışverişçinin gördüğü sepeti değiştiriyor ve gezinme alışverişçiyi o sayfaya götürüyor ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
        },
        {
          q: "Ton adlarımı değiştirmem gerçekten gerekiyor mu?",
          a: "Zorunlu değil, ama `show_variant` aracı tam varyantın yanı sıra \"bir renk gibi kısmi bir seçenek seçimi\" ile de eşleşen varyantı seçebiliyor ([Shopify](https://shopify.dev/docs/api/web-mcp)). Seçenek değerlerin yalnızca numaradan oluşuyorsa bu kısmi eşleştirmenin dayanacağı bir veri kalmıyor. Bu bizim yorumumuz; Shopify böyle bir öneride bulunmuyor.",
        },
        {
          q: "Güvenlik açısından dikkat etmem gereken bir şey var mı?",
          a: "Standardın yazarları dil modellerinin dolaylı prompt injection'a açık olduğunu ve site API'lerini ajanlara açmanın yönetilmesi gereken riskler doğurduğunu belirtiyor; dışarıdan gelen veri yüklerinin `untrustedContentHint` ile işaretlenmesi öneriliyor ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). Bir mağazada dışarıdan gelen içeriğin en yaygın hâli müşteri yorumlarıdır — bu çıkarım bize ait.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, 5 Ağustos). WebMCP support for Liquid and Hydrogen storefronts. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/webmcp-liquid-hydrogen",
          publisher: "Shopify",
        },
        {
          label: "Shopify. WebMCP tools. Shopify.dev API documentation.",
          url: "https://shopify.dev/docs/api/web-mcp",
          publisher: "Shopify",
        },
        {
          label: "Klepper, A. (2026, 18 Mayıs; güncelleme 9 Haziran 2026). WebMCP. Chrome for Developers, Google.",
          url: "https://developer.chrome.com/docs/ai/webmcp",
          publisher: "Chrome for Developers",
        },
        {
          label: "Couriol, B. (2026, 13 Haziran). WebMCP Standard Proposal for Agentic Web Actuation Now Available in Chrome (Origin Trials). InfoQ.",
          url: "https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/",
          publisher: "InfoQ",
        },
        {
          label: "Shopify. Build commerce agents with UCP. Shopify.dev.",
          url: "https://shopify.dev/docs/agents",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "WebMCP",
        "Yapay zekâ ajanları",
        "E-ticaret",
        "Agentic commerce",
      ],
    },
    en: {
      slug: "shopify-webmcp-ai-agents-beauty-brands",
      title: "Your Shopify store now hands AI tools, not just products: what WebMCP changes",
      metaTitle: "Shopify WebMCP Explained: What Changes for Beauty (2026) | Soleach",
      metaDescription: "Shopify turned WebMCP on across every Liquid storefront on 5 August 2026. Agents can now search your catalogue and update carts. What changes for beauty brands?",
      excerpt: "On 5 August 2026 Shopify shipped a change that requires no installation: every Liquid storefront now exposes tools that AI agents can call directly. The agent no longer reads your page and imitates clicks; it calls functions that search the catalogue, select variants and update the cart. In beauty, that has one concrete consequence: your shade and variant naming is being read by a machine for the first time.",
      intro: [
        "The entry that landed in Shopify's developer changelog on 5 August 2026 reads like a small update: \"Online stores now expose WebMCP tools that AI agents can call.\" The announcement states plainly that there is nothing to install or configure — the tools went live that day on every Liquid storefront and on the Hydrogen developer preview ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
        "What that means is this: what your store offers an AI is no longer just a page, but a **list of functions**. To find a product, the agent doesn't scrape the page, it calls `search_catalog`. To add to cart, it doesn't guess a button's coordinates, it calls `update_cart`. Shopify's own documentation frames the difference as \"a more direct approach\" against a method it describes as \"slow and error-prone\" ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
        "This piece separates three things: what technically went live, what it means for a beauty brand's product data, and how much of it is real today — because the standard itself is still a proposal and agent support remains limited.",
      ],
      sections: [
        {
          h2: "In 30 seconds: what changed?",
          blocks: [
            {
              type: "ul",
              items: [
                "**What happened:** Shopify turned WebMCP tools on across all Liquid storefronts and the Hydrogen developer preview. No installation or configuration required ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
                "**When:** 5 August 2026.",
                "**What's exposed:** Catalogue search, product detail, variant selection, cart read/update/clear, proceeding to checkout, order history, and store policy/FAQ search ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
                "**Where it runs:** In the tab the shopper is looking at, in their own live session. Cart changes are visible to the shopper ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
                "**How widespread:** WebMCP is still a proposed standard; agent support is currently limited to Chromium-based browsers through an origin trial ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
                "**The critical point for beauty (our reading):** The `show_variant` tool can match a variant from a partial selection — a colour, for instance. Which makes your shade naming a piece of data a machine is now trying to match on.",
              ],
            },
          ],
        },
        {
          h2: "What exactly is WebMCP, and what does it replace?",
          blocks: [
            {
              type: "p",
              text: "WebMCP is a proposed web standard that lets sites expose structured tools to AI agents. Chrome's documentation summarises the point of it: instead of the agent reviewing an element, such as a button or a field, to understand its purpose, the website **declares** that purpose itself ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
            },
            {
              type: "p",
              text: "What it replaces has a name: *actuation* — the agent simulating mouse clicks and text input as though it were the human user ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). The cost of that method isn't only speed. A small change in page structure, a late-loading element or a layout shift can break the entire automation loop ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)).",
            },
            {
              type: "quote",
              text: "Without tools, the agent has to read your page's code and simulate clicks on buttons and links, which is slow and error-prone.",
              cite: "Shopify, WebMCP tools",
              citeUrl: "https://shopify.dev/docs/api/web-mcp",
            },
            {
              type: "p",
              text: "WebMCP puts three things in its place: a standard way for pages to register tools with agents, explicit definitions of inputs and expected outputs via JSON Schema, and a shared understanding of the page's current context. The Chrome team states the rationale for JSON Schema directly: to reduce hallucination or misunderstanding ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
            },
            {
              type: "p",
              text: "The standard has been in origin trial from Chrome 149, meaning developers can register their origin and run it with real users ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). On Shopify, though, a merchant doesn't have to do any of that — Shopify provides the tools at platform level and says it is helping shape the specification alongside Google and Microsoft ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
            },
          ],
        },
        {
          h2: "Which tools can an agent call on your store?",
          blocks: [
            {
              type: "p",
              text: "Shopify's documentation groups the tools into four sets. The agent decides which to call, and each ships with a description telling it when to do so ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "ul",
              items: [
                "**Catalogue:** `search_catalog` (search products, collections, articles and pages, with prices and availability), `browse_store` (list collections), `get_product` (full detail including variants, prices and **which option combinations are in stock**), `show_variant` (take the shopper to a product page with a specific variant selected).",
                "**Cart:** `get_cart` (line items, quantities and totals), `update_cart` (add, change quantities, remove), `cancel_cart` (empty the cart).",
                "**Checkout and orders:** `proceed_to_checkout` (take the shopper to checkout after verifying the cart isn't empty), `manage_orders` (take the shopper to order history; if not logged in, they're asked to log in first).",
                "**Store information:** `search_shop_policies_and_faqs` (answer questions about policies and services — returns, shipping, hours — from the store's own content).",
              ],
            },
            {
              type: "p",
              text: "Two technical details matter. Catalogue tools read data through the Storefront API; cart tools call the standard storefront actions — the same functions on `Shopify.actions` that apps use. The practical consequence: if your theme opens a drawer on cart updates, an agent's update triggers that drawer too ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "p",
              text: "Second, nothing happens in the background. In Shopify's words, everything the agent does happens in the tab the shopper is looking at: cart updates change the cart the shopper sees, and navigation takes the shopper to the page ([Shopify](https://shopify.dev/docs/api/web-mcp)). That is the core distinction between an in-browser agent and the separate route Shopify offers for agents connecting from outside, via UCP and its MCP servers ([Shopify](https://shopify.dev/docs/agents)).",
            },
          ],
        },
        {
          h2: "Why is this a beauty brand's problem in particular?",
          blocks: [
            {
              type: "p",
              text: "From here on this is our reading: three items on that tool list land harder in beauty than in other categories. The reason is how cosmetics variants work.",
            },
            {
              type: "p",
              text: "**First, shade naming.** The documentation describes `show_variant` like this: the agent can pass an exact variant, **or a partial option selection such as a colour**, and the tool selects a matching available variant ([Shopify](https://shopify.dev/docs/api/web-mcp)). So a request for \"a coral lipstick\" can, in theory, resolve straight to a variant. But for that matching to work, your variant has to carry a colour meaning. If your option values are `04`, `07`, `12`, there is nothing to match against. A subject we have discussed for years under the heading of user experience has just moved to the machine side.",
            },
            {
              type: "p",
              text: "**Second, stock at variant level.** `get_product` returns which option combinations are in stock ([Shopify](https://shopify.dev/docs/api/web-mcp)). In beauty what sells out is rarely the product — it's a single shade. The agent now reads that from structured data rather than by trying to spot a greyed-out swatch.",
            },
            {
              type: "p",
              text: "**Third, policy text becoming the answer.** `search_shop_policies_and_faqs` answers returns and shipping questions from the store's own content ([Shopify](https://shopify.dev/docs/api/web-mcp)). In cosmetics that isn't a routine shipping question: whether an opened product can be returned is the most-asked question in a hygiene category. A vague sentence on that page is now the answer an agent gives a shopper.",
            },
            {
              type: "p",
              text: "There is a risk side to add. The text the agent reads is your product copy; claim language in cosmetics is regulated, and a cosmetic is not a medicine. An exaggerated or treatment-suggesting phrase on your page no longer just sits there — it may end up in an agent's answer. That alone is reason enough to reread your product descriptions.",
            },
            {
              type: "p",
              text: "What these have in common: none of them asks for new technology spend. All three are about the quality of data you have already entered. We collected the foundational decisions of a cosmetics Shopify build in [a separate guide](/en/blog/shopify-store-setup-for-cosmetics-brands); WebMCP simply brings the variant and content decisions in it forward.",
            },
          ],
        },
        {
          h2: "How real is this today? What are the limits?",
          blocks: [
            {
              type: "p",
              text: "The honest answer: the tools are live, but the agents that call them are not widespread. Shopify says so itself — WebMCP is still an emerging standard, and agent support is currently limited to Chromium-based browsers through an origin trial ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)).",
            },
            {
              type: "p",
              text: "Chrome's documentation lists three further structural limits ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)):",
            },
            {
              type: "ul",
              items: [
                "**A browsing context is required.** Because tool calls are handled in JavaScript, an open tab or webview is needed; there is no support for calling tools in a headless state.",
                "**Tool discoverability.** Clients and browsers must visit a site directly to know whether it has callable tools.",
                "**Overhead on complex interfaces.** A highly complex site likely needs refactoring or additional JavaScript to handle application and interface state. (On Shopify, the platform carries that load.)",
              ],
            },
            {
              type: "p",
              text: "There is an explicit security warning too. The proposal authors remind developers that LLMs are susceptible to **indirect prompt injection** and that exposing native site APIs introduces risks that have to be understood and managed; externally sourced data payloads should carry an `untrustedContentHint`, while non-mutating operations can use a `readOnlyHint` ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). In a beauty store the most common form of externally sourced content is customer reviews and Q&A sections — worth treating as a vector (that inference is ours, not the source's own example).",
            },
            {
              type: "p",
              text: "Chrome also notes that for sensitive actions, such as making a purchase, you can include a command requesting user interaction with a confirmation dialog ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)). On Shopify, `proceed_to_checkout` already stops short of completing payment — it takes the shopper to checkout ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
            },
            {
              type: "p",
              text: "One note on scale: an early implementer who built a WebMCP polyfill for Chrome DevTools reported roughly a 90% reduction in token usage ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). That shouldn't be read as an industry average — it is a single developer's self-reported measurement in a test-automation scenario, not an independent study.",
            },
          ],
        },
        {
          h2: "What should you do today?",
          blocks: [
            {
              type: "p",
              text: "None of the work worth doing before agent support spreads is specific to WebMCP — it is all work that needed doing anyway, just brought forward. In order:",
            },
            {
              type: "ul",
              items: [
                "**Name variant options meaningfully.** Alongside the shade name, carry an option value that says what it actually is (colour family, undertone). `show_variant`'s partial matching only works if there is something to match.",
                "**Keep variant-level stock data clean.** Availability is now read at option-combination level, not product level. A mis-flagged shade means a product an agent recommends but can't add to the cart.",
                "**Write returns and shipping policy in unambiguous sentences.** Especially the return of opened cosmetics, shipping thresholds and delivery times. These pages are now an agent's answer source.",
                "**Review claim language in product descriptions.** A cosmetic is not a medicine; treatment-suggesting phrasing is no longer only a regulatory risk but text an agent may repeat.",
                "**Check your theme's cart behaviour.** Cart tools trigger the theme's standard actions; if your cart drawer or update flow is broken, the agent triggers that broken flow too.",
                "**Treat reviews and user content as a separate risk line.** Externally sourced text sits at the centre of the standard's own security warning.",
                "**Don't treat visibility as one thing.** What an agent can do inside your store and whether your brand appears in generative AI answers are different mechanics; we covered the second in detail in our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide), and run that work through our [AI visibility practice](/en/services#seo-geo).",
              ],
            },
            {
              type: "p",
              text: "And an expectation-setter. WebMCP is not a traffic source, it's an interface layer. The Chrome team describes it as a progressive enhancement ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)) — if the agent supports it, the task gets easier; if not, the site works as before. Nobody is losing sales because of WebMCP today. But there is no reason not to do the items on that list today either, because even if the agent never arrives, a human is already reading that same data.",
            },
            {
              type: "p",
              text: "We documented in detail, in [our audit of 216 beauty brand websites](/en/blog/turkish-beauty-brands-website-audit-2026), how often what sits on those sites is whatever the platform handed them by default. WebMCP's first practical effect will probably land right there: the gap between a store that settles for defaults and one that takes data entry seriously is becoming visible on the machine side too.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Do I need to install WebMCP on my store?",
          a: "No. Shopify's announcement states the tools are live on every Liquid storefront and the Hydrogen developer preview, with nothing to install or configure ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)). The work on your side isn't installation — it's the quality of the data those tools read.",
        },
        {
          q: "Can an AI agent complete a purchase on my behalf?",
          a: "Not the in-browser agent. The `proceed_to_checkout` tool takes the shopper to checkout after verifying the cart isn't empty — it doesn't complete payment ([Shopify](https://shopify.dev/docs/api/web-mcp)). On the separate UCP route Shopify offers for externally connecting agents, direct checkout completion is defined as a distinct trust tier ([Shopify](https://shopify.dev/docs/agents)).",
        },
        {
          q: "Does this work in every browser?",
          a: "No. Shopify writes that WebMCP is still an emerging standard and that agent support is currently limited to Chromium-based browsers through an origin trial ([Shopify, 2026](https://shopify.dev/changelog/webmcp-liquid-hydrogen)). On Chrome's side, the origin trial has been open from Chrome 149 ([Chrome for Developers, 2026](https://developer.chrome.com/docs/ai/webmcp)).",
        },
        {
          q: "If an agent changes the cart, does the customer see it?",
          a: "Yes. According to Shopify's documentation everything the agent does happens in the tab the shopper is looking at; cart updates change the cart the shopper sees, and navigation takes the shopper to the page ([Shopify](https://shopify.dev/docs/api/web-mcp)).",
        },
        {
          q: "Do I really need to rename my shades?",
          a: "It isn't mandatory, but `show_variant` can select a matching variant from \"a partial option selection such as a colour\" as well as an exact variant ([Shopify](https://shopify.dev/docs/api/web-mcp)). If your option values are numbers alone, that partial matching has nothing to work with. This is our reading; Shopify makes no such recommendation.",
        },
        {
          q: "Is there anything to watch on security?",
          a: "The proposal authors note that LLMs are susceptible to indirect prompt injection and that exposing site APIs to agents introduces risks that must be managed; externally sourced data payloads should be marked with an `untrustedContentHint` ([InfoQ, 2026](https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/)). In a store, the most common externally sourced content is customer reviews — that inference is ours.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, August 5). WebMCP support for Liquid and Hydrogen storefronts. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/webmcp-liquid-hydrogen",
          publisher: "Shopify",
        },
        {
          label: "Shopify. WebMCP tools. Shopify.dev API documentation.",
          url: "https://shopify.dev/docs/api/web-mcp",
          publisher: "Shopify",
        },
        {
          label: "Klepper, A. (2026, May 18; updated June 9, 2026). WebMCP. Chrome for Developers, Google.",
          url: "https://developer.chrome.com/docs/ai/webmcp",
          publisher: "Chrome for Developers",
        },
        {
          label: "Couriol, B. (2026, June 13). WebMCP Standard Proposal for Agentic Web Actuation Now Available in Chrome (Origin Trials). InfoQ.",
          url: "https://www.infoq.com/news/2026/06/webmcp-web-agent-standard-chrome/",
          publisher: "InfoQ",
        },
        {
          label: "Shopify. Build commerce agents with UCP. Shopify.dev.",
          url: "https://shopify.dev/docs/agents",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "WebMCP",
        "AI agents",
        "Ecommerce",
        "Agentic commerce",
      ],
    },
  },
};
