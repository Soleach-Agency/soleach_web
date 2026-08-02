import type { BlogPost } from "@/lib/blog";

export const searchConsolePlatformProperties: BlogPost = {
  id: "search-console-platform-properties",
  publishedAt: "2026-08-01",
  updatedAt: "2026-08-02",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "search-console-platform-properties-instagram-tiktok-youtube",
      title: "Google Search Console'a artık Instagram, TikTok ve YouTube hesabı eklenebiliyor",
      metaTitle: "Search Console Platform Mülkleri Nedir? (2026) | Soleach",
      metaDescription: "Google Search Console artık Instagram, TikTok, X ve YouTube hesaplarını mülk olarak kabul ediyor; 29 Temmuz 2026'da herkese açıldı. Ne veri veriyor, neyi vermiyor?",
      excerpt: "Google, 7 Temmuz 2026'da Search Console'a platform mülkleri adında yeni bir mülk tipi ekledi: Instagram, TikTok, X ve YouTube hesabını doğrulayıp içeriğinin Google Arama'daki performansını sorgu bazında görebiliyorsun. 29 Temmuz'da dünya genelinde herkese açıldı — takipçi eşiği yok, ücretsiz. Peki bu veri neyi gösteriyor, neyi göstermiyor?",
      intro: [
        "Google, 7 Temmuz 2026'da Search Console'a **platform mülkleri** (platform properties) adında yeni bir mülk tipi ekledi: Instagram, TikTok, X ve YouTube hesabını doğrulayıp, içeriğinin Google Arama ve Discover'daki performansını sorgu bazında görebiliyorsun ([Search Engine Roundtable, 2026](https://www.seroundtable.com/google-search-console-social-content-performance-41636.html)). Özellik kademeli olarak dağıtıldı ve 29 Temmuz 2026 itibarıyla dünya genelinde herkese açıldı ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)). Takipçi eşiği yok, ücretsiz ve kendi web siten olmasa bile kullanabiliyorsun.",
        "Bunun neyi çözdüğünü bir örnekle görmek kolay. Bir Reels ya da TikTok yayınlıyorsun; ilk iki gün normal seyrediyor, sonra beklemediğin bir izlenme dalgası geliyor. Platformun analitik ekranı sana \"arama\" ya da \"keşfet\" diyor — ama hangi kelimenin bu dalgayı getirdiğini söylemiyor. Üstelik o trafiğin bir kısmı platformun kendi aramasından değil, doğrudan Google'dan geliyor olabilir; çünkü Google arama sonuçlarında kısa video karuselleri ve sosyal post modülleri gösteriyor. Asıl soru şu: Instagram ve TikTok içeriğin Google'da hangi kelimeyle bulunuyor? Platform mülkleri tam olarak bunu cevaplıyor.",
        "Bu yazıda üç soruyu ayrı ayrı cevaplıyoruz: bu veri tam olarak neyi gösteriyor, neyi kesinlikle göstermiyor, ve bir güzellik markası bunu içerik planına nasıl çevirebilir? Baştan bir uyarı: bu özellik Instagram Insights'ın yerine geçmiyor, yanına ekleniyor. Kurulumun ekran görüntülü anlatımını ayrı bir yazıya ayırdık: [Search Console'a Instagram hesabı nasıl eklenir](/tr/blog/search-console-instagram-hesabi-nasil-eklenir).",
      ],
      sections: [
        {
          h2: "30 saniyede: ne değişti?",
          id: "ne-degisti",
          blocks: [
            {
              type: "ul",
              items: [
                "**Ne oldu:** Search Console'a platform mülkleri adında yeni bir mülk tipi eklendi. Sosyal ve video hesaplarını doğrulayıp Google Arama performanslarını görebiliyorsun.",
                "**Ne zaman:** 7 Temmuz 2026'da duyuruldu, 29 Temmuz 2026'da dünya genelinde herkese açıldı.",
                "**Hangi platformlar:** Instagram, TikTok, X ve YouTube. Her hesap ayrı bir mülk olarak eklenir.",
                "**Kimler kullanabilir:** Herkes. Takipçi eşiği yok, ücretsiz ve kendi web siten olması gerekmiyor.",
                "**Ne veriyor:** Sorgu, gönderi, ülke ve cihaz kırılımında tıklama, gösterim, CTR ve ortalama pozisyon — Google Arama'nın yanı sıra Discover ve Haberler.",
                "**Ne vermiyor:** Platform içi görüntülenmeleri. Videonun TikTok'ta kaç kez göründüğünü göstermez; geriye dönük veri de gelmez.",
              ],
            },
          ],
        },
        {
          h2: "Search Console'a Instagram veya TikTok hesabı eklemek ne demek?",
          blocks: [
            {
              type: "p",
              text: "Google Search Console bugüne kadar site sahiplerinin aracıydı: bir mülk açmak için domainin sahibi olman ya da sunucuya erişimin olması gerekiyordu. Platform mülkleri bu kuralı değiştiriyor — hesabını platform üzerinden yetkilendirerek doğruluyorsun, dolayısıyla kendi web siten olmasa bile Google Arama verisi görebiliyorsun ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "quote",
              text: "Platform mülklerini tanıtmaktan heyecan duyuyoruz: site sahiplerinin ve kreatörlerin, sosyal ve video gönderilerinin Google Arama ile Discover'da nasıl performans gösterdiğini anlamalarına yardımcı olan yeni bir Search Console mülk tipi.",
              cite: "Google Search Central, 2026",
              citeUrl: "https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms",
            },
            {
              type: "p",
              text: "Desteklenen platformlar şimdilik dört tane: Instagram, TikTok, X ve YouTube. Her hesap ayrı bir mülk olarak eklenir ve verisi ayrı raporlanır; birden fazla platformda hesabın varsa ya da aynı platformda birden fazla profil yönetiyorsan, her biri için işlemi tekrarlaman gerekir ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "p",
              text: "Kurulum Search Console'un standart mülk ekleme akışından yürüyor: karşılama ekranına ya da kenar çubuğundaki mülk seçiciye gidip \"Mülk ekle\" diyorsun, listeden platformu seçiyorsun ve ekrandaki adımlarla bağlantıyı yetkilendiriyorsun. Sahiplik doğrulandıktan sonra raporlarda veri görünmesi birkaç gün sürüyor.",
            },
            {
              type: "p",
              text: "Küçük ama önemli bir işletme detayı: sahiplik periyodik olarak yeniden kontrol ediliyor. Platform tarafındaki oturumun düşerse bağlantı kopuyor ve mülke erişimin duruyor; yeniden doğruladığında aynı rapora geri dönüyorsun ve verinin yeniden birikmesini beklemen gerekmiyor ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
            },
          ],
        },
        {
          h2: "Bu veri sana ne gösteriyor, neyi göstermiyor?",
          blocks: [
            {
              type: "p",
              text: "Platform mülkleri, klasik Search Console mülklerinin raporlarını sosyal ve video içeriğine uyarlanmış hâlde sunuyor. Üç rapor var ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)):",
            },
            {
              type: "ul",
              items: [
                "**Performans raporu:** toplam tıklama, gösterim, ortalama tıklama oranı (CTR) ve ortalama arama pozisyonu. Veriyi sorguya, gönderiye, ülkeye ve cihaza göre filtreleyip dışa aktarabiliyorsun. Google Arama'nın yanı sıra Discover ve Google Haberler de kapsamda — ancak Discover ve Haberler raporları yalnızca içeriğin o yüzeylerden trafik alıyorsa görünüyor.",
                "**Insights raporu:** son dönemdeki trafik eğilimlerinin, en iyi performans gösteren gönderilerin ve insanların seni Google'da hangi aramalarla bulduğunun görsel özeti. Kullanıcıların hangi ülkelerden geldiği de burada.",
                "**Başarılar (Achievements):** toplam tıklama eşiklerini geçmek gibi kilometre taşlarını takip eden bölüm.",
              ],
            },
            {
              type: "p",
              text: "Şimdi asıl önemli kısım — neyi göstermediği. Google bunu dokümanında açıkça yazıyor: platform mülkleri yalnızca içeriğinin **Google Arama'daki** performansını gösterir; insanların içeriğini platformun kendi içinde görmesini takip etmez. Örnek olarak Google'ın kendi verdiği cümle nettir: videonun TikTok'ta kaç kez göründüğünü göstermez ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "p",
              text: "Buna ek olarak, beklentini doğru kurman gereken birkaç sınır daha var:",
            },
            {
              type: "ul",
              items: [
                "Veri geriye dönük gelmiyor. Mülkü bugün eklersen grafikler bugünden itibaren dolmaya başlar; kurulumdan önceki dönem için tablo boş kalır.",
                "Insights sayfasındaki üst özet kartı, mülküne gelen tüm Google tıklamalarını (web, görsel, video, haber aramaları dahil) gösterirken, altındaki detay listeleri yalnızca web arama sonuçlarındaki trafiğe odaklanır. Bu yüzden alt kartların toplamı üstteki özetten düşük çıkabilir — bu bir hata değil, tanım farkı.",
                "Instagram hikâyeleri Google aramada göründüğünde gösterim olarak sayılır; kullanıcı tıklarsa tıklama olarak kaydedilir.",
                "Video içeriğin arama sonuçlarında ya da Discover'da göründüğünde gösterim sayılır. Tıklama Google'ın kendi izleyicisinde açılsa bile Search Console'a tıklama olarak yazılır — yani \"tıklama\" her zaman kullanıcının senin platformundaki sayfana ulaştığı anlamına gelmez.",
                "Hem Insights hem Performans raporunda varsayılan tarih aralığı 28 gün.",
              ],
            },
            {
              type: "p",
              text: "Özetle: bu araç sana yeni bir trafik kaynağı açmıyor. Zaten var olan ama bugüne kadar hiçbir panelde göremediğin bir trafiği ilk kez ölçülebilir hâle getiriyor. Aradaki fark, kurumsal beklenti yönetimi açısından kritik.",
            },
          ],
        },
        {
          h2: "Reels, Shorts ve TikTok için hangi analizleri yapabilirsin?",
          blocks: [
            {
              type: "p",
              text: "Google, 29 Temmuz 2026'da güncellenen resmî rehberinde bu veriyle yapılabilecek analizleri örneklerle anlatıyor ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). Kısa video üreten bir marka için en işe yarar dördü şunlar.",
            },
            {
              type: "h3",
              text: "1. Sorgu grupları: hangi tema yükseliyor, hangisi düşüyor?",
            },
            {
              type: "p",
              text: "Insights raporundaki sorgu grupları kartı, içeriğine trafik gönderen arama terimlerini temalara ayırır ve bunları en çok trafik getirenler, yükselenler ve düşenler olarak gösterir. Google bunu doğrudan bir içerik planlama sinyali olarak konumlandırıyor: hangi temaya zaman ayıracağına dair fikir verir. Pratikte bu, bir sonraki videonun konusunu, açıklama metnini ya da hashtag stratejisini kurarken elindeki en somut veri.",
            },
            {
              type: "h3",
              text: "2. 24 saat filtresi: patlamayı geç kalmadan yakalamak",
            },
            {
              type: "p",
              text: "Performans raporundaki 24 saat filtresi, dün yayınladığın içeriğin bugün hangi aramadan trafik aldığını gösterir. Bunun kıymeti hız: bir video Google'dan beklenmedik bir terimle çekmeye başladıysa, momentum sıcakken aynı konuyu başka bir kanalda desteklemek (örneğin ilgili trendi referans veren bir Instagram hikâyesi paylaşıp arama ilgisini diğer profillerine yönlendirmek) mümkün oluyor.",
            },
            {
              type: "h3",
              text: "3. Format karşılaştırması: Reels mi, carousel mi?",
            },
            {
              type: "p",
              text: "Burası ajans tarafında en çok işe yarayan kısım. Karşılaştırma modunda URL'lerdeki yol parçalarını gruplayarak format bazında kıyas yapabiliyorsun. Google'ın kendi verdiği iki örnek: YouTube'da `/watch` içeren URL'leri `/shorts/` içerenlerle, Instagram'da `/p/` içeren URL'leri `/reels/` içerenlerle karşılaştırmak. Yani \"uzun form mu kısa form mu Google tarafında daha çok getiriyor\" sorusunu artık tahminle değil veriyle cevaplıyorsun.",
            },
            {
              type: "p",
              text: "Aynı mantık sayfa filtresiyle YouTube oynatma listelerine de uygulanabiliyor; ancak Google burada bir uyarı düşüyor: bu filtre oynatma listesi **sayfasının** performansını gösterir, listedeki videoların performansını değil.",
            },
            {
              type: "h3",
              text: "4. Açıklama ve başlık değişikliklerini işaretlemek",
            },
            {
              type: "p",
              text: "Search Console'un açıklama notu (annotation) özelliği, veride belirli bir tarihe yer imi koymanı sağlıyor. Bir TikTok açıklamasını ya da YouTube başlığını yeniden yazdığında o günü işaretleyip, öncesi ve sonrasındaki arama performansını karşılaştırabiliyorsun. Bunun bir kontrollü deney olmadığını akılda tutmak gerekiyor — mevsimsellik, trend ve algoritma değişimleri aynı anda çalışıyor. Yine de \"ne zaman ne değiştirdik\" kaydı tutmak, üç ay sonra veriye bakarken tahmin yürütmekten çok daha iyi.",
            },
          ],
        },
        {
          h2: "Güzellik markaları için bu neden özellikle anlamlı?",
          blocks: [
            {
              type: "p",
              text: "İlginç bir detay: Google'ın kendi resmî rehberinde 24 saat filtresini anlatmak için seçtiği örnek doğrudan bu kategoriden. Dokümanda dünkü GRWM (\"get ready with me\") TikTok videosunun belirli bir cilt bakım markasını ya da özgün bir şekillendirme ipucunu öne çıkardığı ve arama verisine bakınca belirli bir terimin bu yeni videoya insan getirdiğini fark edebileceğin senaryosu kuruluyor ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). Google'ın bu özelliği anlatırken kozmetik içeriğini örnek seçmesi, kategorinin bu davranışa ne kadar uygun olduğunun bir göstergesi.",
            },
            {
              type: "p",
              text: "Sebebi de mekanik olarak anlaşılır. Kozmetikte arama davranışı büyük ölçüde \"birinin bunu kullanırken görmek\" üzerine kurulu: bir ürünün cilt üzerinde nasıl durduğu, bir fondötenin gün sonunda ne hâle geldiği, bir uygulama tekniğinin gerçekte nasıl yapıldığı. Bu tür sorulara metin sayfası değil, video cevap veriyor — ve Google bu sorgularda kısa video sonuçlarını gösteriyor. Yani senin Reels'in, bir arama sonucu olarak da çalışıyor; bugüne kadar bunu ölçemiyordun.",
            },
            {
              type: "p",
              text: "İkinci katman marka güvenliği tarafında. Kozmetikte insanların Google'a yazdığı sorular çoğu zaman ürün adıyla birlikte bir endişe içerir: uyumluluk, yan etki, içerik listesi, hamilelikte kullanım. Sorgu raporu, markanın hangi endişelerle birlikte arandığını doğrudan gösterir. Bu, hangi içeriği üreteceğinden önce **hangi soruyu cevapsız bıraktığını** gösteren bir tablo. Aynı mantığı yapay zekâ yanıtları tarafında da işletmek gerekiyor; bunu [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) ayrıntılı anlattık.",
            },
            {
              type: "p",
              text: "Beklentiyi dürüst kurmakta fayda var: çoğu güzellik markası için Google kaynaklı sosyal trafik, toplam erişimin küçük bir dilimi olacak. Küçük hesaplarda tablolar aylarca seyrek kalabilir. Bu veriyi bir performans kanalı gibi değil, ücretsiz bir tüketici içgörüsü kaynağı gibi ele almak daha gerçekçi: az sayıda tıklama bile, insanların markanı hangi kelimelerle aradığını öğrenmen için yeterli.",
            },
          ],
        },
        {
          h2: "Nereden başlamalısın?",
          blocks: [
            {
              type: "ul",
              items: [
                "Aktif olduğun her hesabı ayrı ayrı ekle. Markanın Instagram'ı, TikTok'u ve YouTube'u varsa üçü için de mülk aç — veri birikmesi zaman aldığı için erken başlamak tek başına bir avantaj. Adımları ekran görüntüleriyle [Instagram hesabı ekleme rehberimizde](/tr/blog/search-console-instagram-hesabi-nasil-eklenir) gösterdik.",
                "İlk iki hafta hiçbir sonuç çıkarma. Veri toplanması birkaç gün sürüyor ve mülk yeniyse grafikler yalnızca toplama başladığı günden itibaren doluyor. Erken çıkarılan sonuç yanıltıcı olur.",
                "İlk gerçek analizini sorgu grupları kartından yap. Hangi temaların yükseldiğine bak; bu, bir sonraki içerik döngün için elindeki en ucuz sinyal.",
                "Format karşılaştırmasını takvimine al. Ayda bir `/p/` ve `/reels/` (ya da `/watch` ve `/shorts/`) kıyasını çalıştır; üretim dengeni buna göre ayarla.",
                "Açıklama ve başlık değişikliklerini annotation olarak işaretle. Üç ay sonra veriye baktığında neyin ne zaman değiştiğini hatırlamak zorunda kalmazsın.",
                "Bağlantının aktif kaldığını kontrol et. Sahiplik periyodik olarak yeniden doğrulanıyor; oturum düşerse veri akışı duruyor.",
                "Veriyi mevcut analitik akışına bağla. Platform panelleriyle birlikte nasıl okunacağını [sosyal medya analitik araçları yazımızda](/tr/blog/guzellik-markalari-icin-sosyal-medya-analitik-araclari) karşılaştırdık.",
              ],
            },
            {
              type: "p",
              text: "Son bir not: Google'ın Search Profile özelliği ile platform mülkleri birbirine bağlı ama aynı şey değil. Search Profile, kreatörlerin Google içindeki halka açık profil sayfası; şu an yalnızca ABD'de kullanılabiliyor ve eşik yüksek — YouTube, Instagram veya X'te en az 100.000, TikTok'ta 300.000 takipçi ve 18 yaş şartı var ([Google Arama Yardım](https://support.google.com/websearch/answer/16904498)). Search Profile'ını hâlihazırda talep ettiysen doğrulanmış hesapların Search Console'a otomatik olarak mülk şeklinde eklenmiş oluyor ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). Etmediysen bir şey kaybetmiyorsun: platform mülkleri takipçi eşiği olmadan, dünya genelinde herkese açık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bu özellik Instagram Insights veya TikTok Analytics'in yerine geçer mi?",
          a: "Hayır. Google bunu dokümanında açıkça yazıyor: platform mülkleri yalnızca içeriğinin Google Arama'daki performansını gösterir, insanların içeriğini platformun kendi içinde görmesini takip etmez — örneğin videonun TikTok'ta kaç kez göründüğünü göstermez ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)). İkisi farklı soruları cevaplar ve birlikte kullanılır.",
        },
        {
          q: "Türkiye'den kullanabilir miyim?",
          a: "Evet. Platform mülkleri 29 Temmuz 2026 itibarıyla dünya genelinde herkese açıldı ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)). Karıştırılmaması gereken nokta şu: ayrı bir özellik olan Search Profile şu an yalnızca ABD'de kullanılabiliyor ([Google Arama Yardım](https://support.google.com/websearch/answer/16904498)).",
        },
        {
          q: "Hesabı ekledim ama grafikler boş, sorun mu var?",
          a: "Büyük ihtimalle yok. Google, kurulumdan sonra performans metriklerinin toplanıp işlenmesinin birkaç gün sürdüğünü belirtiyor; mülk yeni oluşturulduysa grafikler yalnızca toplamanın başladığı günden itibaren veri gösterir ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)). Geriye dönük veri gelmez.",
        },
        {
          q: "Facebook, LinkedIn veya Pinterest hesabı ekleyebilir miyim?",
          a: "Şu anda hayır. Search Console dört platformu destekliyor: Instagram, TikTok, X ve YouTube ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)). Google listenin genişleyip genişlemeyeceğine dair bir taahhütte bulunmadı.",
        },
        {
          q: "Hesabımı eklemek içeriğimin Google'daki sıralamasını değiştirir mi?",
          a: "Platform mülkleri bir ölçüm aracıdır; Search Console'un klasik mülklerinde olduğu gibi mülk açmak sıralama üretmez. Google, ilgili özellik olan Search Profile için bunu açıkça yazıyor: profil oluşturmak içeriğinin Google Arama'daki sıralamasını doğrudan etkilemez ([Google Arama Yardım](https://support.google.com/websearch/answer/16904498)). Veriyi içerik kararlarına çevirdiğinde performans değişir — araç tek başına değil.",
        },
      ],
      sources: [
        {
          label: "Google. About platform properties in Search Console. Search Console Help.",
          url: "https://support.google.com/webmasters/answer/17148418",
          publisher: "Google Search Console Help",
        },
        {
          label: "Google. (2026, 29 Temmuz). Analyze your social and video platform content performance in Search Console. Google Search Central Documentation.",
          url: "https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content",
          publisher: "Google Search Central",
        },
        {
          label: "Google. (2026, 7 Temmuz). See how content from social and video platforms performs on Google Search. Google Search Central Blog.",
          url: "https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms",
          publisher: "Google Search Central",
        },
        {
          label: "Google. Create a new Search profile. Google Search Help.",
          url: "https://support.google.com/websearch/answer/16904498",
          publisher: "Google Search Help",
        },
        {
          label: "Schwartz, B. (2026, 7 Temmuz). Google Search Console Now Shows You Instagram, TikTok, X & YouTube Content Search Performance. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-search-console-social-content-performance-41636.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Southern, M. G. (2026, 29 Temmuz). Google Opens Search Console Social Reporting To Everyone. Search Engine Journal.",
          url: "https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/",
          publisher: "Search Engine Journal",
        },
      ],
      tags: [
        "Google Search Console",
        "Sosyal medya SEO",
        "Reels",
        "TikTok",
        "İçerik stratejisi",
      ],
    },
    en: {
      slug: "search-console-platform-properties-instagram-tiktok-youtube",
      title: "Google Search Console now accepts Instagram, TikTok and YouTube accounts",
      metaTitle: "Search Console Platform Properties Explained (2026) | Soleach",
      metaDescription: "Google Search Console now accepts Instagram, TikTok, X and YouTube accounts as properties, worldwide since 29 July 2026. What data you get and what you don't.",
      excerpt: "On 7 July 2026 Google added a new Search Console property type called platform properties: verify an Instagram, TikTok, X or YouTube account and see how your content performs in Google Search, query by query. It opened to everyone worldwide on 29 July — no follower threshold, no cost. So what does this data show, and what doesn't it?",
      intro: [
        "On 7 July 2026 Google added a new Search Console property type called **platform properties**: verify an Instagram, TikTok, X or YouTube account and see how your content performs in Google Search and Discover, query by query ([Search Engine Roundtable, 2026](https://www.seroundtable.com/google-search-console-social-content-performance-41636.html)). The feature rolled out gradually and became available to everyone worldwide on 29 July 2026 ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)). There is no follower threshold, it costs nothing, and you can use it without a website of your own.",
        "An example makes the gap it closes obvious. You publish a Reel or a TikTok. The first two days look normal, then an unexpected wave of views arrives. Your platform's analytics screen says \"search\" or \"explore\" — but it won't tell you which term caused it. And some of that traffic may not come from the platform's own search at all, but straight from Google, which now shows short-video carousels and social post modules in its results. The real question is: what search terms bring people to your Instagram and TikTok posts? Platform properties answer exactly that.",
        "This guide answers three questions separately: what this data actually shows, what it definitively does not show, and how a beauty brand turns it into a content plan. One warning up front — this feature doesn't replace Instagram Insights, it sits alongside it. The setup itself, screenshot by screenshot, lives in a separate guide: [how to add an Instagram account to Search Console](/en/blog/how-to-add-instagram-to-google-search-console).",
      ],
      sections: [
        {
          h2: "In 30 seconds: what changed?",
          id: "what-changed",
          blocks: [
            {
              type: "ul",
              items: [
                "**What happened:** Search Console gained a new property type called platform properties. Verify your social and video accounts and you can see how they perform in Google Search.",
                "**When:** Announced 7 July 2026, opened to everyone worldwide on 29 July 2026.",
                "**Which platforms:** Instagram, TikTok, X and YouTube. Each account is added as its own property.",
                "**Who can use it:** Anyone. No follower threshold, no cost, and no website required.",
                "**What you get:** Clicks, impressions, CTR and average position broken down by query, post, country and device — across Google Search plus Discover and News.",
                "**What you don't get:** On-platform views. It won't show how many times your video appeared on TikTok, and no historical data arrives retroactively.",
              ],
            },
          ],
        },
        {
          h2: "What does adding an Instagram or TikTok account to Search Console mean?",
          blocks: [
            {
              type: "p",
              text: "Until now Google Search Console was a tool for site owners: opening a property required owning the domain or having server access. Platform properties change that rule — you verify the account by authorizing the connection through the platform itself, so you can see Google Search data even without a website of your own ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "quote",
              text: "We're thrilled to introduce platform properties, a new Search Console property type to help site owners and creators understand how their social and video posts perform on Google Search and Discover.",
              cite: "Google Search Central, 2026",
              citeUrl: "https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms",
            },
            {
              type: "p",
              text: "Four platforms are supported for now: Instagram, TikTok, X and YouTube. Each account is added as its own property and reported separately; if you have accounts across several platforms, or manage more than one profile on a single platform, you need to repeat the process for each ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "p",
              text: "Setup runs through Search Console's standard add-property flow: go to the welcome screen or open the property selector in the sidebar, click \"Add property\", pick the platform from the list, and follow the prompts to authorize the connection. Once ownership is verified, it takes a few days for data to appear in the reports.",
            },
            {
              type: "p",
              text: "A small but important operational detail: ownership is checked periodically. If your login on the platform side expires the connection is lost and access to the property pauses; once you re-verify you get the same report back and don't have to wait for data to accumulate again ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
            },
          ],
        },
        {
          h2: "What does this data show — and what doesn't it show?",
          blocks: [
            {
              type: "p",
              text: "Platform properties offer the reporting you'd expect from a Search Console property, tailored to social and video content. There are three reports ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)):",
            },
            {
              type: "ul",
              items: [
                "**Performance report:** total clicks, impressions, average click-through rate and average search position. You can filter by query, post, country and device, and export the data. Coverage includes Google Search plus Discover and Google News — though Discover and News reports only appear if your content actually receives traffic from those surfaces.",
                "**Insights report:** a visual overview of recent traffic trends, your top-performing posts, and how people discover you on Google. It also shows which countries your audience comes from.",
                "**Achievements:** tracks milestones such as passing a new total-click threshold from Search.",
              ],
            },
            {
              type: "p",
              text: "Now the part that matters most — what it doesn't show. Google states it plainly: platform properties only show how your content performs on **Google Search**; they don't track when people see your content on the platform itself. Google's own example is unambiguous — they won't show how many times your video appeared on TikTok ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
            },
            {
              type: "p",
              text: "There are a few more boundaries worth setting expectations around:",
            },
            {
              type: "ul",
              items: [
                "Data isn't backfilled. Add the property today and the charts start filling from today; the period before setup stays empty.",
                "On the Insights page, the top summary card shows all clicks to your property across Google (web, image, video and news searches), while the detailed lists below it focus specifically on web search traffic. So the totals in those cards can come out lower than the summary figure — that's a definitional difference, not a bug.",
                "Instagram stories that show up in Google Search count as impressions; if a user clicks one, it counts as a click.",
                "Video content counts as an impression when it appears in search results or Discover. A click is recorded even if the video opens inside Google's own viewer — so a \"click\" doesn't always mean the user reached your page on the platform.",
                "The default date range on both the Insights page and the Performance report is 28 days.",
              ],
            },
            {
              type: "p",
              text: "In short: this tool doesn't open a new traffic source. It makes an existing one — invisible in every dashboard until now — measurable for the first time. That distinction matters when you're setting expectations internally or with a client.",
            },
          ],
        },
        {
          h2: "What analyses can you run for Reels, Shorts and TikTok?",
          blocks: [
            {
              type: "p",
              text: "In the official guide updated on 29 July 2026, Google walks through the analyses this data supports ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). Four of them are most useful for a brand producing short-form video.",
            },
            {
              type: "h3",
              text: "1. Query groups: which themes are rising, which are falling?",
            },
            {
              type: "p",
              text: "The query groups card in the Insights report clusters the search terms sending traffic to your content into themes, and sorts them into top, trending up and trending down. Google positions this directly as a content planning signal: an indication of where to invest your time. In practice it's the most concrete input you have when choosing your next video topic, caption or hashtag approach.",
            },
            {
              type: "h3",
              text: "2. The 24-hour filter: catching a spike while it's still hot",
            },
            {
              type: "p",
              text: "The 24-hour filter on the Performance report shows which searches are driving traffic to content you published yesterday. Its value is speed: if a video starts pulling from an unexpected term on Google, you can support that momentum on another channel while it lasts — for example posting an Instagram story referencing the same trend and directing that surging search interest to your other profiles.",
            },
            {
              type: "h3",
              text: "3. Format comparison: Reels or carousel?",
            },
            {
              type: "p",
              text: "This is where the agency value sits. Comparison mode lets you group URLs by path fragment and compare formats head to head. Google's own two examples: on YouTube, compare URLs containing `/watch` against those containing `/shorts/`; on Instagram, compare `/p/` against `/reels/`. In other words, \"does long form or short form bring more from Google\" is now a data question rather than a guess.",
            },
            {
              type: "p",
              text: "The same logic extends to YouTube playlists via a page filter — but Google adds a caveat here: that filter shows the performance of the playlist **page**, not of the videos inside it.",
            },
            {
              type: "h3",
              text: "4. Marking caption and title changes",
            },
            {
              type: "p",
              text: "Search Console's annotations feature lets you bookmark a specific date in your data. When you rewrite a TikTok caption or a YouTube title, mark the day and compare search performance either side of it. Keep in mind this isn't a controlled experiment — seasonality, trends and algorithm shifts all move at once. Still, keeping a record of what changed when beats guessing three months later.",
            },
          ],
        },
        {
          h2: "Why does this matter especially for beauty brands?",
          blocks: [
            {
              type: "p",
              text: "A telling detail: the example Google picked to explain the 24-hour filter in its own guide comes straight from this category. The documentation imagines a GRWM (\"get ready with me\") TikTok posted yesterday featuring a specific skincare brand or a unique styling tip, and notes that looking at your 24-hour search data might reveal a specific term suddenly bringing people to that new video ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). Google choosing cosmetics content to illustrate the feature says something about how well the category fits this behavior.",
            },
            {
              type: "p",
              text: "The mechanism behind it is straightforward. Search behavior in cosmetics is largely built on seeing someone use the product: how a shade sits on skin, what a foundation looks like at the end of the day, how an application technique is actually performed. Those questions are answered by video, not by a text page — and Google surfaces short-video results for exactly those queries. Your Reel already functions as a search result; you just couldn't measure it.",
            },
            {
              type: "p",
              text: "The second layer is brand safety. In cosmetics, what people type into Google usually pairs a product name with a concern: compatibility, side effects, ingredient lists, use during pregnancy. The query report shows you directly which concerns your brand is being searched alongside. That's less a list of content ideas than a map of **which question you've left unanswered**. The same logic applies on the AI-answer side, which we cover in detail in our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide).",
            },
            {
              type: "p",
              text: "It's worth setting expectations honestly: for most beauty brands, Google-driven social traffic will be a small slice of total reach, and smaller accounts may see sparse charts for months. Treating this as a free consumer-insight source rather than a performance channel is the more realistic frame — even a handful of clicks is enough to learn which words people use to look for you.",
            },
          ],
        },
        {
          h2: "Where should you start?",
          blocks: [
            {
              type: "ul",
              items: [
                "Add every account you're active on, separately. If your brand runs Instagram, TikTok and YouTube, open a property for all three — since data takes time to accumulate, starting early is an advantage in itself. Our [step-by-step Instagram guide](/en/blog/how-to-add-instagram-to-google-search-console) walks through it with screenshots.",
                "Draw no conclusions for the first two weeks. Collection takes a few days, and a new property only shows data from the day collection began. Early conclusions will mislead you.",
                "Make the query groups card your first real analysis. See which themes are rising; it's the cheapest signal you have for your next content cycle.",
                "Put format comparison on the calendar. Run the `/p/` versus `/reels/` (or `/watch` versus `/shorts/`) comparison monthly and adjust your production mix accordingly.",
                "Log caption and title changes as annotations. Three months from now you won't have to remember what changed when.",
                "Check that the connection stays live. Ownership is re-verified periodically, and data stops flowing if the session expires.",
                "Wire the data into your existing analytics routine. We compared how to read it alongside the platform dashboards in our [social media analytics tools guide](/en/blog/social-media-analytics-tools-for-beauty-brands).",
              ],
            },
            {
              type: "p",
              text: "One final note: Google's Search Profile feature and platform properties are related but not the same thing. A Search Profile is a public profile page for creators inside Google; it's currently available only in the United States and the bar is high — a minimum of 100,000 followers on YouTube, Instagram or X, or 300,000 on TikTok, plus an age requirement of 18 ([Google Search Help](https://support.google.com/websearch/answer/16904498)). If you've already claimed a Search profile, your verified accounts are automatically added as properties in Search Console ([Google Search Central](https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content)). If you haven't, you lose nothing: platform properties carry no follower threshold and are open to everyone worldwide.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does this replace Instagram Insights or TikTok Analytics?",
          a: "No. Google says so directly in its documentation: platform properties only show how your content performs on Google Search, and don't track when people see your content on the platform itself — they won't show how many times your video appeared on TikTok, for example ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)). The two answer different questions and are used together.",
        },
        {
          q: "Can I use it outside the United States?",
          a: "Yes. Platform properties became available to everyone worldwide on 29 July 2026 ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)). Don't confuse it with Search Profile, a separate feature that is currently only available in the United States ([Google Search Help](https://support.google.com/websearch/answer/16904498)).",
        },
        {
          q: "I added my account but the charts are empty — is something wrong?",
          a: "Most likely not. Google notes that it takes a few days to collect and process performance metrics after setup, and that a recently created property will only show data for the days since collection started ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)). Historical data isn't backfilled.",
        },
        {
          q: "Can I add a Facebook, LinkedIn or Pinterest account?",
          a: "Not at the moment. Search Console supports four platforms: Instagram, TikTok, X and YouTube ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)). Google has made no commitment about whether the list will expand.",
        },
        {
          q: "Does adding my account change how my content ranks on Google?",
          a: "Platform properties are a measurement tool; as with classic Search Console properties, opening one doesn't generate rankings. Google states this explicitly for the related Search Profile feature: creating a profile doesn't directly affect your content's ranking on Google Search ([Google Search Help](https://support.google.com/websearch/answer/16904498)). Performance changes when you turn the data into content decisions — not from the tool alone.",
        },
      ],
      sources: [
        {
          label: "Google. About platform properties in Search Console. Search Console Help.",
          url: "https://support.google.com/webmasters/answer/17148418",
          publisher: "Google Search Console Help",
        },
        {
          label: "Google. (2026, July 29). Analyze your social and video platform content performance in Search Console. Google Search Central Documentation.",
          url: "https://developers.google.com/search/docs/monitor-debug/analyze-social-video-content",
          publisher: "Google Search Central",
        },
        {
          label: "Google. (2026, July 7). See how content from social and video platforms performs on Google Search. Google Search Central Blog.",
          url: "https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms",
          publisher: "Google Search Central",
        },
        {
          label: "Google. Create a new Search profile. Google Search Help.",
          url: "https://support.google.com/websearch/answer/16904498",
          publisher: "Google Search Help",
        },
        {
          label: "Schwartz, B. (2026, July 7). Google Search Console Now Shows You Instagram, TikTok, X & YouTube Content Search Performance. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-search-console-social-content-performance-41636.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Southern, M. G. (2026, July 29). Google Opens Search Console Social Reporting To Everyone. Search Engine Journal.",
          url: "https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/",
          publisher: "Search Engine Journal",
        },
      ],
      tags: [
        "Google Search Console",
        "Social SEO",
        "Reels",
        "TikTok",
        "Content strategy",
      ],
    },
  },
};
