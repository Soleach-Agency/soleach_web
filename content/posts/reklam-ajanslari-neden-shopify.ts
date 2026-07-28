import type { BlogPost } from "@/lib/blog";

export const reklamAjanslariNedenShopify: BlogPost = {
  id: "reklam-ajanslari-neden-shopify",
  publishedAt: "2026-07-27",
  category: "ads",
  locales: {
    tr: {
      slug: "reklam-ajanslari-neden-shopify-seviyor",
      title: "Reklam ajansları neden Shopify'ı seviyor?",
      metaTitle: "Reklam Ajansları Neden Shopify'ı Seviyor? | Soleach",
      metaDescription: "Cevap kısa: ölçüm kurulumu haftalar değil dakikalar sürüyor. Peki o birkaç tıklama neyi açıyor, nerede yetmiyor? Shopify dokümantasyonuna dayalı rehber.",
      excerpt: "Ajansların Shopify sevgisi estetikle ilgili değil, kurulum süresiyle. Meta pixel ve Conversions API'yi tema koduna dokunmadan açabiliyorsun. Ama o birkaç tıklamanın açtığı şeyi ve sandbox'ın neyi kapattığını bilmek gerekiyor.",
      intro: [
        "Bir ajansa \"hangi altyapıyı tercih edersiniz\" diye sor, cevabın içinde büyük ihtimalle Shopify geçer. Sebep genelde tasarım ya da tema değil — ölçüm kurulumunun ne kadar sürdüğü.",
        "Özel yazılmış bir e-ticaret sitesinde [Meta pixel](/tr/kavramlar/meta-pixel)'i ve sunucu taraflı [Conversions API](/tr/kavramlar/conversion-api)'yi doğru kurmak bir geliştirici işidir: haftalar, sprint'ler, test turları. Shopify'da aynı işin büyük kısmı yönetim panelinde birkaç adımda yapılıyor. Ajansın kazandığı şey \"kolaylık\" değil, kampanyanın ne zaman yayına girebileceği.",
        "Bu yazıda o kurulumun tam olarak ne yaptığını, hangi olayları otomatik gönderdiğini, o birkaç tıklamayla hangi veriyi paylaşmayı kabul ettiğini ve Shopify'ın nerede yetmediğini Shopify'ın kendi dokümantasyonuna dayanarak anlatıyoruz.",
      ],
      sections: [
        {
          h2: "Ajansın Shopify'da kazandığı şey tam olarak ne?",
          blocks: [
            {
              type: "p",
              text: "Zaman — ve bunun nedeni tarihsel. Shopify kendi dokümantasyonunda eski durumu şöyle tarif ediyor: daha önce satıcılar JavaScript parçacıklarını çevrim içi mağaza tercihlerine, checkout script'lerine ve uygulamalara elle ekliyordu; bu script'ler genellikle kalite kontrolünden geçmiyordu ve yönetilmesi zaman alıcıydı ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)).",
            },
            {
              type: "p",
              text: "Bugün ise hepsi tek bir yerde: yönetim panelindeki Ayarlar → Müşteri etkinlikleri (Customer events) bölümü. Shopify'a göre pixel'ler mağazanın vitrininde, checkout'ta, teşekkür sayfasında, sipariş durumu sayfasında ve müşteri hesapları sayfalarında otomatik olarak yükleniyor.",
            },
            {
              type: "p",
              text: "Bu listenin ajans için kritik kısmı checkout ve teşekkür sayfası. Özel yazılmış bir sitede en çok emek isteyen, en sık bozulan ve en çok satış kaybettiren nokta tam olarak orasıdır — çünkü satın alma olayı orada tetiklenir. Shopify'da bu adım zaten kurulmuş hâlde geliyor.",
            },
            {
              type: "p",
              text: "Aynı sayfada Shopify, pixel yöneticisinin sağladığı faydaları da sayıyor: checkout olayları dâhil bir müşteri etkinliği akışına erişim, üçüncü taraflarla paylaşılan veri üzerinde daha fazla kontrol, üçüncü taraf kodunun mağazayla ve checkout ile çakışmasının önlenmesi ve gizlilik uyumu için yerleşik araçlar.",
            },
          ],
        },
        {
          h2: "Pixel kurulumu gerçekten birkaç tıklama mı?",
          blocks: [
            {
              type: "p",
              text: "Meta tarafında büyük ölçüde evet. Shopify'ın kendi adımlarına göre yol şu: yönetim panelinde Satış kanalları → Facebook & Instagram → Ayarlar → Veri paylaşım ayarları, veri paylaşımını aç, seviyeyi seç, pixel'i bağla, onayla ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)).",
            },
            {
              type: "p",
              text: "Seçtiğin seviye ise teknik olarak farklı şeyler yapıyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)):",
            },
            {
              type: "ul",
              items: [
                "Standart: Yalnızca Meta pixel, yani tarayıcı tarafı. Shopify'ın kendi ifadesiyle tarayıcı tabanlı bir reklam engelleyici pixel'in veri paylaşmasını engelleyebilir.",
                "Gelişmiş: Pixel'e ek olarak Conversions API devreye giriyor; satın alma olayı Shopify ve Facebook sunucuları arasında gidiyor ve sunucudan sunucuya giden veri tarayıcı tabanlı engelleyicilerle durdurulamıyor.",
                "Maksimum: Pixel ve Conversions API'ye ek olarak mağaza Facebook'un en yeni reklam teknolojisiyle güncelleniyor. Veri paylaşımı ve engellenememe durumu Gelişmiş ile aynı.",
              ],
            },
            {
              type: "p",
              text: "Bir Meta pixel eklendiğinde otomatik izlenen olaylar da belgelenmiş durumda: PageView, ViewContent, Search, AddToCart, InitiateCheckout, AddPaymentInfo ve Purchase. Sipariş değeri taşıyan olaylarda kullanılan tutar, siparişin toplam fiyatı — yani checkout'taki tüm kalemlerin, gümrük vergileri, vergiler ve indirimler dâhil toplamı.",
            },
            {
              type: "p",
              text: "Bu son cümle önemsiz görünüp [ROAS](/tr/kavramlar/roas) raporunu doğrudan etkileyen ayrıntılardan biri: value alanında kargo, vergi ve indirim dâhil bir tutar gidiyorsa, hesapladığın getiri brüt sepet üzerinden hesaplanıyor demektir. Kâr marjından geriye doğru hesap yapıyorsan bu farkı bilmen gerekir.",
            },
          ],
        },
        {
          h2: "O birkaç tıklamayla neyi açmış oluyorsun?",
          blocks: [
            {
              type: "p",
              text: "Burası yazının en az konuşulan ama en önemli kısmı. Gelişmiş ve Maksimum seviyeler yalnızca \"daha fazla veri\" değil, kişisel veri paylaşımı anlamına geliyor. Shopify'ın ifadesiyle bu ayarlar müşterinin kişisel bilgilerini Facebook ağındaki kullanıcılarla eşleştirmek için paylaşıyor; toplanan bilgiler arasında müşterinin adı, konumu, e-posta adresi ve telefon numarası ile mağazadaki gezinme davranışı yer alıyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)).",
            },
            {
              type: "quote",
              text: "Data sharing is a choice. While customer data improves campaign performance and sales tracking, not everyone wants their data shared.",
              cite: "Shopify Help Center, Facebook data sharing",
              citeUrl: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing",
            },
            {
              type: "p",
              text: "Shopify aynı sayfada sorumluluğu da net biçimde satıcıya bırakıyor: müşterilerine veriyi nasıl paylaştığını anlatmak ve gizlilik politikasını güncel tutmak senin yükümlülüğün. Türkiye'de faaliyet gösteren bir marka için bunun karşılığı KVKK kapsamındaki aydınlatma ve açık rıza yükümlülükleridir; \"panelde Maksimum'u seçtim\" demek bu yükümlülüğü karşılamaz.",
            },
            {
              type: "p",
              text: "Rıza tarafında Shopify'ın teknik bir mekanizması da var: rıza gerektirecek şekilde yapılandırılmış pazarlarda (genellikle Avrupa Ekonomik Alanı ve Birleşik Krallık) web pixel'leri yalnızca ziyaretçi pixel yapılandırmasında istenen izinleri verdiğinde çalışıyor; yeni pixel'ler varsayılan olarak Pazarlama ve Analitik izinlerini istiyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)). Yani Avrupa'ya satış yapıyorsan ölçümündeki boşlukların bir kısmı hata değil, tasarım gereğidir.",
            },
          ],
        },
        {
          h2: "Ajans için asıl kıymetli olan: sunucu tarafı ve checkout olayları",
          blocks: [
            {
              type: "p",
              text: "Shopify'ın pixel altyapısı iki yoldan besleniyor: pazarlama uygulamalarıyla gelen uygulama pixel'leri ve geliştiricinin panelden elle eklediği özel pixel'ler ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)).",
            },
            {
              type: "p",
              text: "Uygulama pixel'lerinde ajansın işine yarayan asıl özellik sunucu pixel'leri. Shopify'a göre sunucu pixel'leri, müşteri etkinliklerini tarayıcı gibi bir aracı yerine sunucu üzerinden ileterek uygulama sahibine ulaşan olay sayısını — checkout olayları dâhil — artırabiliyor ve e-posta adresi gibi kimlik bilgisi ekli olay sayısını yükseltebiliyor. Aynı doküman sunucu pixel'lerini web pixel'leriyle eşleştirmenin, olayların hedefe ulaşma oranını en üst düzeye çıkardığını söylüyor.",
            },
            {
              type: "p",
              text: "Bunun neden önemli olduğunu Meta tarafında ayrıntılı anlattık: eşleşme anahtarları ve olay kapsamı, Meta'nın satışı sana atfedip atfetmemesini doğrudan belirliyor. Konunun tamamı için [Meta pixel ölçüm hataları yazımıza](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) bakabilirsin.",
            },
            {
              type: "p",
              text: "Kurulumu doğrulamak da panelden yapılabiliyor: Shopify Pixel Helper, mağazanda gerçek zamanlı olarak hangi olayların alındığını ve o olayların verisini gösteriyor; yeşil nokta olayın başarıyla alındığını, kırmızı nokta hata olduğunu belirtiyor. Bir ajans için bu, \"pixel çalışıyor mu\" sorusunu günler değil dakikalar meselesi yapıyor.",
            },
          ],
        },
        {
          h2: "Kolaylığın bedeli: sandbox neyi kapatıyor?",
          blocks: [
            {
              type: "p",
              text: "Shopify pixel'leri izole bir sandbox içinde çalıştırıyor. Güvenlik açısından iyi, ama bazı ölçüm alışkanlıklarını doğrudan imkânsız kılıyor. Shopify'ın belgelediği bilinen sınırlar ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)):",
            },
            {
              type: "ul",
              items: [
                "Sandbox'lar buton, form, banner, modal gibi arayüz öğeleri oluşturamıyor.",
                "DOM taramasıyla otomatik olarak şunlar tespit edilemiyor: olaylar, meta veriler, e-posta ve telefon gibi kullanıcı bilgileri, dış bağlantı tıklamaları, sayfa kaydırma ve ısı haritası üretmek için tıklama/fare hareketi.",
              ],
            },
            {
              type: "p",
              text: "Pratik karşılığı şu: özel yazılmış bir sitede alışkın olduğun \"her şeyi dinleyen\" script mantığı Shopify'da çalışmıyor. Isı haritası, scroll derinliği ya da DOM'dan e-posta yakalayan kurulumlar burada ya çalışmıyor ya da özel olay yayımlamayı gerektiriyor.",
            },
            {
              type: "p",
              text: "Özel pixel'lerin statüsü de net: Shopify özel pixel eklemeyi ve kullanmayı desteklemiyor; yasalara uyum, rızalar, kod güvenliği, sorun giderme ve güncellemeler satıcının sorumluluğunda ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels)). Yani \"panelden kolayca eklenir\" cümlesi özel pixel için geçerli değil — orası hâlâ geliştirici işi.",
            },
            {
              type: "p",
              text: "Bir de son dönemde eklenen ve ajansların gözden kaçırdığı bir ayar var: uygulama pixel'lerinde veri erişimi varsayılan olarak Optimize edilmiş (Optimized). Shopify, bir pazarlama pixel'inin ihtiyacından fazla veri paylaştığını tespit ettiğinde, ilgili etkinlik geri dönene kadar o pixel'in paylaştığı verinin bir kısmını ya da tamamını duraklatabiliyor; alternatif ayar Her zaman açık (Always on) ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)). Uzun süre kullanılmayan bir aracı yeniden devreye alırken verinin neden gelmediğini burada aramak gerekiyor.",
            },
          ],
        },
        {
          h2: "Shopify neyi çözmüyor?",
          blocks: [
            {
              type: "p",
              text: "Üç sınırı baştan bilmek, ajans-marka ilişkisindeki en sık yaşanan hayal kırıklığını önler.",
            },
            {
              type: "h3",
              text: "1. Her özellik her mağazaya açık değil",
            },
            {
              type: "p",
              text: "Örneğin Shopify Audiences — mağazanın verisinden reklam platformlarına özel kitle üreten araç — Shopify'ın kendi ifadesine göre Shopify Plus planındaki, Shopify Payments kullanan ve Amerika Birleşik Devletleri ya da Kanada merkezli uygun mağazalarla sınırlı ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/shopify-audiences)). Türkiye'deki bir kozmetik markası için bu özellik pratikte yok.",
            },
            {
              type: "h3",
              text: "2. Kolay kurulum, doğru ölçüm demek değil",
            },
            {
              type: "p",
              text: "Shopify'ın kendi dokümantasyonunda ajanslara doğrudan bir uyarı var: bir reklam ajansıyla çalışıyorsan ya da reklamlarını yönetmek için bir uygulama kullanıyorsan, mağazana Meta pixel eklemenin raporlarında yinelenen veya hatalı veriye yol açmayacağından emin ol ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). Aynı sayfa, tema koduna elle eklenmiş eski pixel kodunun kaldırılması gerektiğini de söylüyor: kaldırılmazsa mağazada birden fazla pixel olur ve raporlarda yinelenen veya hatalı veri oluşur.",
            },
            {
              type: "p",
              text: "Bu, ajansların devraldıkları hesaplarda en sık karşılaştığı tablodur: tema koduna gömülü eski bir pixel, üstüne panelden bağlanmış yeni bir pixel, bir de bir uygulamanın kendi pixel'i. Üçü birden çalıştığında panel iyi görünür, muhasebe uyuşmaz.",
            },
            {
              type: "h3",
              text: "3. Mağazanın kendisi hâlâ senin işin",
            },
            {
              type: "p",
              text: "Ölçüm altyapısı hazır gelse de ürün sayfası, sepet ve ödeme akışındaki kararlar dönüşümü belirlemeye devam ediyor. O tarafın kontrol listesi için [kozmetik markası için Shopify mağaza kurulumu rehberimize](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu) ve [web & e-ticaret hizmetimize](/tr/services#web-ecommerce) bakabilirsin; reklam tarafının bütününe bakmak istersen [güzellik markaları için Instagram reklam rehberimiz](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) iyi bir başlangıç.",
            },
            {
              type: "p",
              text: "Özetle: ajanslar Shopify'ı seviyor çünkü ölçüm altyapısını kurmak için harcanan haftaları geri veriyor. Ama o zamanı kazanmak, kurulumu denetlemekten muaf olmak anlamına gelmiyor — sadece denetimin başlayabileceği günü öne çekiyor.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Shopify'da Meta pixel kurmak için geliştiriciye ihtiyacım var mı?",
          a: "Standart kurulum için hayır. Shopify'ın adımlarına göre yönetim panelinde Satış kanalları → Facebook & Instagram → Ayarlar → Veri paylaşım ayarları yolunu izleyip veri paylaşımını açman, seviyeyi seçmen ve pixel'i bağlaman yeterli ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). Özel pixel yazmak istiyorsan durum değişir: Shopify özel pixel eklemeyi ve kullanmayı desteklemiyor ve JavaScript bilgisi gerektiğini belirtiyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels)).",
        },
        {
          q: "Standart, Gelişmiş ve Maksimum arasında hangisini seçmeliyim?",
          a: "Teknik olarak Gelişmiş ve Maksimum, Conversions API'yi devreye sokar ve satın alma olayını sunucudan sunucuya gönderir — bu veri tarayıcı tabanlı reklam engelleyicilerle durdurulamaz. Ama ikisi de müşterinin adı, konumu, e-posta adresi ve telefon numarası dâhil kişisel bilgileri paylaşır ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)). Karar bu yüzden teknik olduğu kadar hukuki: KVKK kapsamında aydınlatma ve rıza süreçlerini kurmadan üst seviyeyi seçmemek gerekir. Bu bir hukuki tavsiye değildir; kendi hukuk danışmanınla teyit et.",
        },
        {
          q: "Shopify Meta'ya hangi olayları otomatik gönderiyor?",
          a: "Bir Meta pixel eklendiğinde şu olaylar otomatik izleniyor: PageView, ViewContent, Search, AddToCart, InitiateCheckout, AddPaymentInfo ve Purchase. Sipariş değeri taşıyan olaylarda kullanılan tutar, gümrük vergileri, vergiler ve indirimler dâhil sipariş toplamıdır ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)).",
        },
        {
          q: "Panelde satışlar iki kez görünüyor, sebebi Shopify mı?",
          a: "Genelde hayır, kurulum katmanları. Shopify, tema koduna elle eklenmiş eski Meta pixel kodunun kaldırılmasını istiyor; kaldırılmazsa mağazada birden fazla pixel olur ve raporlarda yinelenen veya hatalı veri oluşur. Aynı sayfa, reklam ajansıyla çalışanlara pixel eklemenin yinelenen veriye yol açmayacağından emin olmalarını öneriyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). Meta tarafındaki deduplication mekaniği içinse [Meta pixel ölçüm hataları yazımıza](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) bakabilirsin.",
        },
        {
          q: "Isı haritası ve scroll takibi Shopify'da çalışır mı?",
          a: "Standart yolla çalışmaz. Shopify pixel'leri sandbox içinde çalıştırıyor ve sandbox'ın belgelenmiş sınırları arasında DOM taramasıyla sayfa kaydırmanın ve ısı haritası için tıklama/fare hareketinin otomatik tespit edilememesi yer alıyor; sandbox ayrıca buton, form, banner gibi arayüz öğeleri de oluşturamıyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)). Bu tür ihtiyaçlar için sağlayıcının Shopify uyumlu bir uygulama pixel'i sunup sunmadığını kontrol etmek gerekir.",
        },
      ],
      sources: [
        {
          label: "Shopify. Pixels overview. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/overview",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Facebook data sharing. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Meta pixel. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel",
          publisher: "Shopify",
        },
        {
          label: "Shopify. App pixels. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Custom pixels. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shopify Audiences. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/shopify-audiences",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Web Pixels API. Shopify.dev.",
          url: "https://shopify.dev/docs/api/web-pixels-api",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "Meta Pixel",
        "Conversions API",
        "E-ticaret",
      ],
    },
    en: {
      slug: "why-ad-agencies-love-shopify",
      title: "Why do ad agencies love Shopify?",
      metaTitle: "Why Do Ad Agencies Love Shopify? | Soleach",
      metaDescription: "Short answer: measurement setup takes minutes, not weeks. But what do those few clicks actually turn on, and where do they fall short? A sourced guide.",
      excerpt: "Agencies' love for Shopify isn't about aesthetics, it's about setup time. You can enable the Meta pixel and the Conversions API without touching theme code. But you should know what those clicks turn on — and what the sandbox turns off.",
      intro: [
        "Ask an agency which platform they'd rather work on and Shopify will almost certainly come up. The reason usually isn't design or themes — it's how long the measurement setup takes.",
        "On a custom-built store, wiring up the [Meta pixel](/en/concepts/meta-pixel) and the server-side [Conversions API](/en/concepts/conversions-api) correctly is a developer project: weeks, sprints, rounds of testing. On Shopify, most of that same work happens in the admin in a handful of steps. What the agency gains isn't \"convenience\" — it's the date the campaign can go live.",
        "This piece covers what that setup actually does, which events it sends automatically, what data you agree to share with those clicks, and where Shopify falls short — grounded in Shopify's own documentation.",
      ],
      sections: [
        {
          h2: "What exactly does an agency gain on Shopify?",
          blocks: [
            {
              type: "p",
              text: "Time — and the reason is historical. Shopify describes the old state of things in its own documentation: merchants previously added JavaScript snippets manually in online preferences, checkout scripts and apps; those scripts weren't usually quality controlled and were time-consuming to manage ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)).",
            },
            {
              type: "p",
              text: "Today it all lives in one place: Settings → Customer events in the admin. Per Shopify, pixels load automatically on the Storefront, Checkout, Thank you page, Order status page and Customer Accounts.",
            },
            {
              type: "p",
              text: "The critical part of that list for an agency is checkout and the thank-you page. On a custom build, that's the most labour-intensive, most frequently broken and most sales-costly point — because the purchase event fires there. On Shopify it arrives already wired.",
            },
            {
              type: "p",
              text: "The same page lists the benefits Shopify attributes to the pixel manager: access to a stream of customer events including checkout events, greater control over the customer data shared with third parties, prevention of third-party code interfering with the store and checkout, and built-in tools for privacy compliance.",
            },
          ],
        },
        {
          h2: "Is pixel setup really just a few clicks?",
          blocks: [
            {
              type: "p",
              text: "On the Meta side, largely yes. Per Shopify's own steps: in the admin go to Sales channels → Facebook & Instagram → Settings → Share data settings, enable data sharing, choose a level, select your pixel, confirm ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)).",
            },
            {
              type: "p",
              text: "The level you pick does technically different things ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)):",
            },
            {
              type: "ul",
              items: [
                "Standard: Meta pixel only, i.e. browser-side. In Shopify's own words, a browser-based ad blocker can prevent the Meta pixel from sharing data.",
                "Enhanced: The Conversions API runs alongside the pixel; the purchase event is sent between Shopify and Facebook servers, and server-to-server data can't be blocked by browser-based ad blockers.",
                "Maximum: Pixel plus Conversions API, with the store updated with Facebook's latest advertising technology. The data sharing and non-blockability are the same as Enhanced.",
              ],
            },
            {
              type: "p",
              text: "The events automatically tracked once a Meta pixel is added are documented too: PageView, ViewContent, Search, AddToCart, InitiateCheckout, AddPaymentInfo and Purchase. Events that carry an order value use the order's total price — the sum of all items in the checkout, including duties, taxes and discounts.",
            },
            {
              type: "p",
              text: "That last sentence looks trivial and directly shapes your [ROAS](/en/concepts/roas) report: if the value field carries a total including shipping, tax and discounts, your return is being calculated on the gross basket. If you work backwards from margin, you need to know that difference.",
            },
          ],
        },
        {
          h2: "What do those few clicks actually turn on?",
          blocks: [
            {
              type: "p",
              text: "This is the least-discussed and most important part. Enhanced and Maximum aren't just \"more data\" — they mean sharing personal data. In Shopify's words, these settings share your customer's personal information to match users on Facebook's network, and the information collected includes the customer's name, location, email address and phone number, as well as their browsing behaviour in your online store ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)).",
            },
            {
              type: "quote",
              text: "Data sharing is a choice. While customer data improves campaign performance and sales tracking, not everyone wants their data shared.",
              cite: "Shopify Help Center, Facebook data sharing",
              citeUrl: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing",
            },
            {
              type: "p",
              text: "On the same page Shopify puts the responsibility squarely on the merchant: telling customers how you share data and keeping your privacy policy up to date is your obligation. For a brand operating in Türkiye that maps onto the disclosure and explicit-consent obligations under KVKK; \"I selected Maximum in the admin\" does not discharge it.",
            },
            {
              type: "p",
              text: "Shopify also has a technical mechanism on the consent side: in markets configured to require consent (usually the EEA and the UK), web pixels run only when visitors have provided the permissions required in the pixel configuration, and new pixels require Marketing and Analytics permissions by default ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)). So if you sell into Europe, part of the gap in your measurement isn't a bug — it's by design.",
            },
          ],
        },
        {
          h2: "What agencies actually value: server-side and checkout events",
          blocks: [
            {
              type: "p",
              text: "Shopify's pixel infrastructure is fed two ways: app pixels that arrive with marketing apps, and custom pixels added manually by a developer in the admin ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)).",
            },
            {
              type: "p",
              text: "Within app pixels, the feature that matters to an agency is server pixels. Per Shopify, server pixels can increase the number of customer events — including checkout events — transferred to app owners through a server rather than an intermediary like the browser, and can increase the number of events carrying identification such as an email address. The same document states that pairing server pixels with web pixels ensures the maximum amount of customer events reach their destination.",
            },
            {
              type: "p",
              text: "We covered why this matters on the Meta side in detail: match keys and event coverage directly determine whether Meta attributes a sale to you. For the full picture, see our piece on [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution).",
            },
            {
              type: "p",
              text: "Verifying the setup is also an admin task: the Shopify Pixel Helper shows, in real time, which events are being received on your store and the data attached to them, with a green dot indicating a successful event and a red dot an error. For an agency, that turns \"is the pixel working?\" from a multi-day question into a several-minute one.",
            },
          ],
        },
        {
          h2: "The price of convenience: what the sandbox closes off",
          blocks: [
            {
              type: "p",
              text: "Shopify runs pixels in an isolated sandbox. Good for security, but it makes certain measurement habits outright impossible. Shopify's documented known limitations ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)):",
            },
            {
              type: "ul",
              items: [
                "Pixel sandboxes can't render user interface elements such as buttons, forms, banners or modals.",
                "They can't automatically detect the following from DOM scraping: events, metadata, user information such as email and phone, outbound link clicks, page scrolling, and clicks and mouse movement for heatmaps.",
              ],
            },
            {
              type: "p",
              text: "In practice: the \"listen to everything\" script mentality you're used to on a custom build doesn't work here. Heatmaps, scroll depth or setups that scrape an email from the DOM either don't work or require publishing custom events instead.",
            },
            {
              type: "p",
              text: "The status of custom pixels is equally clear: Shopify doesn't support adding or using custom pixels, and compliance with applicable laws, consents, code security, troubleshooting and updates are the merchant's responsibility ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels)). So \"you can just add it from the admin\" doesn't hold for custom pixels — that's still developer work.",
            },
            {
              type: "p",
              text: "There's also a newer setting agencies tend to miss: data access for app pixels defaults to Optimized. When Shopify detects that a marketing pixel is sharing more data than needed, it can pause some or all of that pixel's data until relevant activity resumes; the alternative setting is Always on ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)). When you bring a long-dormant tool back online and the data doesn't arrive, look here first.",
            },
          ],
        },
        {
          h2: "What Shopify doesn't solve",
          blocks: [
            {
              type: "p",
              text: "Knowing three limits up front prevents the most common disappointment in the agency–brand relationship.",
            },
            {
              type: "h3",
              text: "1. Not every feature is available to every store",
            },
            {
              type: "p",
              text: "Shopify Audiences — the tool that generates custom audiences for ad platforms from store data — is, in Shopify's own words, available to eligible stores on the Shopify Plus plan that use Shopify Payments and are based in the United States or Canada ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/shopify-audiences)). For a cosmetics brand in Türkiye, that feature effectively doesn't exist.",
            },
            {
              type: "h3",
              text: "2. Easy setup isn't the same as correct measurement",
            },
            {
              type: "p",
              text: "Shopify's own documentation contains a direct warning to agencies: if you work with an advertising agency or use an app to manage your Facebook ads or traffic, make sure that adding a Meta pixel to your online store won't cause duplicate or incorrect data in your reports ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). The same page states that old pixel code added manually to theme files must be removed; otherwise the store carries more than one pixel, which results in duplicate or incorrect data in reports.",
            },
            {
              type: "p",
              text: "This is the picture agencies most often inherit: an old pixel buried in theme code, a new one connected through the admin on top of it, plus an app shipping its own. With all three firing, the dashboard looks great and the accounting doesn't match.",
            },
            {
              type: "h3",
              text: "3. The store itself is still your job",
            },
            {
              type: "p",
              text: "Even with the measurement layer prebuilt, decisions on the product page, in the cart and through checkout still determine conversion. For that checklist see our [Shopify store setup guide for cosmetics brands](/en/blog/shopify-store-setup-for-cosmetics-brands) and our [web & e-commerce service](/en/services#web-ecommerce); for the wider ads picture, our [starter guide to Instagram advertising for beauty brands](/en/blog/instagram-ads-guide-for-beauty-brands) is a good starting point.",
            },
            {
              type: "p",
              text: "In short: agencies love Shopify because it hands back the weeks otherwise spent building measurement infrastructure. But saving that time doesn't exempt anyone from auditing the setup — it just moves forward the day the audit can begin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Do I need a developer to set up the Meta pixel on Shopify?",
          a: "Not for the standard setup. Per Shopify's steps, you go to Sales channels → Facebook & Instagram → Settings → Share data settings in the admin, enable data sharing, choose a level and connect your pixel ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). Writing a custom pixel is a different matter: Shopify states that adding and using custom pixels is unsupported and requires JavaScript knowledge ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels)).",
        },
        {
          q: "Should I choose Standard, Enhanced or Maximum?",
          a: "Technically, Enhanced and Maximum bring the Conversions API into play and send the purchase event server to server, which browser-based ad blockers can't stop. But both share personal information including the customer's name, location, email address and phone number ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)). The decision is therefore as much legal as technical: don't select a higher level before your disclosure and consent processes are in place under applicable data protection law. This isn't legal advice; confirm with your own counsel.",
        },
        {
          q: "Which events does Shopify send to Meta automatically?",
          a: "Once a Meta pixel is added, the following are tracked automatically: PageView, ViewContent, Search, AddToCart, InitiateCheckout, AddPaymentInfo and Purchase. Events carrying an order value use the order total including duties, taxes and discounts ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)).",
        },
        {
          q: "My dashboard shows sales twice — is Shopify the cause?",
          a: "Usually not; the layers of setup are. Shopify asks you to remove old Meta pixel code added manually to theme files; if you don't, the store carries more than one pixel and reports show duplicate or incorrect data. The same page advises anyone working with an ad agency to make sure adding a pixel won't cause duplicate data ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel)). For the deduplication mechanics on Meta's side, see our piece on [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution).",
        },
        {
          q: "Do heatmaps and scroll tracking work on Shopify?",
          a: "Not through the standard route. Shopify runs pixels in a sandbox, and its documented limitations include the inability to automatically detect page scrolling, or clicks and mouse movement for heatmaps, from DOM scraping; the sandbox also can't render UI elements like buttons, forms or banners ([Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview)). For those needs, check whether your provider offers a Shopify-compatible app pixel.",
        },
      ],
      sources: [
        {
          label: "Shopify. Pixels overview. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/overview",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Facebook data sharing. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Meta pixel. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel",
          publisher: "Shopify",
        },
        {
          label: "Shopify. App pixels. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Custom pixels. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shopify Audiences. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/promoting-marketing/shopify-audiences",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Web Pixels API. Shopify.dev.",
          url: "https://shopify.dev/docs/api/web-pixels-api",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "Meta Pixel",
        "Conversions API",
        "E-commerce",
      ],
    },
  },
};
