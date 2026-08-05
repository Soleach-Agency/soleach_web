import type { BlogPost } from "@/lib/blog";

export const guzellikMarkalariWebTaramasi: BlogPost = {
  id: "guzellik-markalari-web-taramasi",
  publishedAt: "2026-08-05",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "turkiye-guzellik-markalari-web-sitesi-arastirmasi-2026",
      title: "216 güzellik markasının sitesini taradık: platform ne verdiyse o var",
      metaTitle: "216 Güzellik Markası Web Sitesi Araştırması (2026) | Soleach",
      metaDescription:
        "Türkiye pazarındaki 216 güzellik markasının sitesini taradık. llms.txt %42 ama Shopify dışında %12; ürün sayfalarının %3'ünde ViewContent var. Açık kaynak veri ve yöntem.",
      excerpt:
        "5 Ağustos 2026'da Türkiye pazarındaki 216 güzellik ve kişisel bakım markasının web sitesini taradık. Ortaya çıkan tablo markaların yapay zekâya kapalı olduğu değil; ölçtüğümüz olumlu sinyallerin neredeyse tamamının kullandıkları platformun varsayılanı olduğu. Kurulum gerektiren hiçbir şey yapılmamış.",
      intro: [
        "Türkiye pazarındaki 216 güzellik ve kişisel bakım markasının web sitesini 5 Ağustos 2026'da taradık. Her markanın ana sayfasına, bir kategori sayfasına ve bir ürün sayfasına baktık; yapay zekâ tarayıcılarına ne dediklerini, hangi ölçüm etiketlerini çalıştırdıklarını ve yapılandırılmış verilerinin ne kadar eksiksiz olduğunu kaydettik.",
        "Çalışmaya bir beklentiyle başladık: markalar, Cloudflare'in tek tıklık düğmesi yüzünden farkında olmadan yapay zekâ botlarını engelliyordur. Bu beklenti tamamen yanlış çıktı — erişebildiğimiz 189 markanın hiçbiri cevap motorlarını engellemiyor.",
        "Verinin işaret ettiği şey daha rahatsız edici. Ölçtüğümüz her olumlu sinyal, markanın kullandığı platformun varsayılanı. Kurulum gerektiren tek bir şey yapılmamış. Aşağıda bunun kanıtını, yöntemi ve kendi listenizle aynı taramayı nasıl tekrar edeceğinizi bulacaksınız.",
      ],
      sections: [
        {
          h2: "Yöntem ve sınırları",
          id: "yontem",
          blocks: [
            {
              type: "p",
              text: "Marka başına ana sayfa, bir kategori sayfası ve bir ürün sayfası incelendi. Bir kısmı düz HTTP isteğiyle, bir kısmı gerçek bir tarayıcıda — çünkü Meta Pixel gibi etiketler artık HTML kaynağına yazılmıyor; Google Tag Manager bunları çalışma anında sayfaya ekliyor. Sayfayı çalıştırmadan görmeniz mümkün değil.",
            },
            {
              type: "p",
              text: "Aracın tamamı, marka listesi ve toplulaştırılmış sonuçlar açık kaynak: [github.com/soleach/soleach-web-scraper](https://github.com/soleach/soleach-web-scraper). Kendi listenizle çalıştırıp kendi verinizi üretebilirsiniz.",
            },
            {
              type: "h3",
              text: "Baştan söylenmesi gereken üç sınır",
            },
            {
              type: "ul",
              items: [
                "216 markanın 189'una erişebildik (%88). Kalan 27'nin 16'sı, kimliğini açıkça bildiren tarayıcımıza doğrudan 403 döndü. Bu bir hata değil, o sitelerin tercihi — ve kendisi de bir bulgu.",
                "Çerez banner'ına hiç dokunmadık; onay ziyaretçinin vereceği bir şey, bir botun değil. Dolayısıyla gördüğümüz her etiket, ziyaretçi hiçbir şeyi onaylamadan önce çalışmış demektir. Bunun bedeli şu: onayı doğru bekleyen bir sitenin pixel'ini hiç göremiyoruz, o siteleri pixel'i yok diye saymadık.",
                "Sitelerin %63'ü bir CDN arkasında ve robots.txt dosyasında yapay zekâ botlarına dair tek satır yok. Gerçek politika Cloudflare panelinde olabilir; oraya bakamıyoruz. Bu markaları izin veriyor diye değil, ölçülemedi diye işaretledik.",
              ],
            },
          ],
        },
        {
          h2: "Bulgu 1: llms.txt oranı yüksek — ama markaların eseri değil",
          id: "llms-txt",
          blocks: [
            {
              type: "p",
              text: "Erişilebilen 189 markanın 79'unda (%42) içi dolu bir llms.txt dosyası var. Bu dosya, yapay zekâ motorlarına siteyi ve markayı tanıtmak için önerilen bir standart ([llmstxt.org](https://llmstxt.org/)) ve Türkiye için beklediğimizden çok yüksek bir oran.",
            },
            {
              type: "p",
              text: "Sonra sonuçları kullanılan e-ticaret platformuna göre ayırdık ve tablo tamamen değişti:",
            },
            {
              type: "ul",
              items: [
                "Shopify kullanan 66 markanın 64'ünde llms.txt var — %97.",
                "Shopify dışındaki 123 markanın 15'inde var — %12.",
              ],
            },
            {
              type: "p",
              text: "Yani ortadaki %42, bir yapay zekâ görünürlüğü farkındalığı değil. Shopify bu dosyayı kiracılarına otomatik üretiyor. Shopify'da olmayan bir Türk güzellik markasının llms.txt sahibi olma ihtimali sekizde bir.",
            },
            {
              type: "quote",
              text: "Bu ayrımı yapmasaydık yazının en büyük iddiası yanlış olacaktı: Türk güzellik markalarının GEO konusunda beklenenden iyi olduğunu yazacaktık.",
            },
          ],
        },
        {
          h2: "Bulgu 2: Platformun vermediği hiçbir şey yapılmamış",
          id: "platform-varsayilani",
          blocks: [
            {
              type: "p",
              text: "İlk bulgu bir kalıba işaret ediyor, ikinci bulgu onu doğruluyor. Kurulum gerektiren iki şeye baktık; ikisi de neredeyse hiç yok.",
            },
            {
              type: "h3",
              text: "FAQPage şeması: 189 markadan 1'inde var",
            },
            {
              type: "p",
              text: "Bu, yapay zekâ görünürlüğünün en ucuz kazancı: sayfanızdaki soru-cevapları makine okunur hâle getiren birkaç satırlık işaretleme ([schema.org/FAQPage](https://schema.org/FAQPage)). Cevap motorları tam olarak bu biçimi arıyor. Türkiye'nin güzellik sektöründe tek bir marka yapıyor — 189'da 1, yani %0,5.",
            },
            {
              type: "h3",
              text: "Ürün sayfasında ViewContent: 116 mağazanın 4'ünde",
            },
            {
              type: "p",
              text: "Bu daha da can yakıcı, çünkü doğrudan paraya bağlı. ViewContent, Meta'ya gönderilen bir ziyaretçi bu ürüne baktı sinyalidir ([Meta Pixel standart olayları](https://developers.facebook.com/docs/meta-pixel/reference/)). Olmadan katalog kampanyası kuramaz, ürün bazlı retargeting yapamaz, algoritmaya hangi ürünün ilgi çektiğini söyleyemezsiniz. Kendi mağazası olan 116 markanın 4'ünde tetikleniyor — %3.",
            },
            {
              type: "p",
              text: "Ve bu bir platform kısıtı değil. Shopify'da 63 mağazanın 2'sinde, diğer platformlarda 53 mağazanın 2'sinde var. Yani Shopify size llms.txt'i bedava veriyor ama ViewContent'i kurmanız gerekiyor — ve kimse kurmuyor. Kalıp bu: platform ne verdiyse o var.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/tr/platform-vs-kurulum.png",
              alt: "Yatay çubuk grafik. Platformun otomatik verdiği sinyaller yüksek: Shopify'daki markalarda llms.txt %97 (64/66), ürün sayfasında Product şeması %70 (73/104), ana sayfada Organization şeması %60 (114/189). Kurulum gerektirenler ise dipte: Shopify dışındaki markalarda llms.txt %12 (15/123), ürün sayfasında ViewContent %3,4 (4/116), ana sayfada FAQPage %0,5 (1/189).",
              caption: "Platformun otomatik ürettiği her şey yüksek, kurulum gerektiren her şey dipte. Her çubuk kendi paydasını taşır.",
            },
          ],
        },
        {
          h2: "Bulgu 3: Pixel'i olanların üçte birinde dönüşümler çift sayılıyor",
          id: "capi-deduplication",
          blocks: [
            {
              type: "p",
              text: "Tarayıcıda çalıştırabildiğimiz 175 sitenin 34'ünde (%19) Meta Pixel'in istek gönderdiğini gördük. Bu oran düşük görünüyor, ama hatırlayın: onayı doğru bekleyen siteler burada görünmüyor, dolayısıyla gerçek kurulum oranı daha yüksek.",
            },
            {
              type: "p",
              text: "Asıl bulgu içeride. Pixel'i çalışan 34 siteden 11'inde (%32) olay kimliği yok. Bu parametre, tarayıcıdan giden olayla Conversions API üzerinden sunucudan giden aynı olayı eşleştirip tekilleştirmeye yarar ([Meta: Pixel ve sunucu olaylarını tekilleştirme](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)). Yoksa Meta aynı satın almayı iki kez sayar; raporlanan ROAS gerçeğinden yüksek çıkar ve bütçe yanlış kanala kayar.",
            },
            {
              type: "p",
              text: "Beklenmedik bir ayrıntı: yerli markalarda pixel'i olan 15 markanın 13'ünde olay kimliği var; global markalarda 12'nin 7'sinde. Örneklem küçük, temkinli okumak gerekir — ama yerli markaların bu konuda geride olduğu varsayımını desteklemiyor.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/tr/olcum-zinciri.png",
              alt: "Yatay çubuk grafik: Google Tag Manager %65 (113/175), GA4 ölçüm isteği %56 (98/175), Meta Pixel %19 (34/175), Pixel artı CAPI deduplication %13 (23/175), ürün sayfasında ViewContent %3,4 (4/116). Zincir yukarıdan aşağıya hızla daralıyor.",
              caption: "Etiket yönetimi kurulu, ölçüm isteği gidiyor — ama zincirin sonundaki ürün sinyali neredeyse hiç yok.",
            },
          ],
        },
        {
          h2: "Bulgu 4: Banner var, ama onay beklenmiyor",
          id: "onay",
          blocks: [
            {
              type: "p",
              text: "Çerez banner'ına hiç dokunmadığımızı hatırlayın. Buna göre tarayıcıda çalıştırabildiğimiz 175 site dörde ayrılıyor:",
            },
            {
              type: "ul",
              items: [
                "Banner var, ama pazarlama etiketi zaten çalışmış: 60 site (%34).",
                "Onay arayüzü hiç yok, etiket çalışıyor: 51 site (%29).",
                "Etiket tutuluyor, onay bekleniyor — doğru davranış: 35 site (%20).",
                "Hiç etiket yok: 29 site (%17).",
              ],
            },
            {
              type: "p",
              text: "Yani banner gösteren sitelerin çoğunda banner dekoratif; ziyaretçi kabul et düğmesine basmadan önce pazarlama etiketleri çalışmaya başlamış oluyor.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/tr/onay.png",
              alt: "Tek çubuklu yığılmış grafik, 175 sitenin dağılımı: onay öncesi etiket tetikleyen %34 (60 site), onay arayüzü olmayıp tetikleyen %29 (51 site), hiç etiketi olmayan %17 (29 site), etiketi tutup onay bekleyen %20 (35 site).",
              caption: "Çerez banner'ına hiç dokunulmadı; dolayısıyla soldaki iki grupta görülen her etiket, ziyaretçi onay vermeden önce çalışmış.",
            },
            {
              type: "p",
              text: "Burada bir nüans var ve atlanması yanlış sonuç üretir: GA4 tarafında Google Consent Mode aktifse etiket çalışıp depolamayı reddedebilir — bu doğru davranıştır ve 175 sitenin 101'inde (%58) Consent Mode sinyali gördük ([Google: Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)). Meta Pixel'in ise böyle bir ara kademesi yok; ya çalışır ya çalışmaz.",
            },
          ],
        },
        {
          h2: "Beklentimiz yanlış çıktı: kimse cevap motorlarını engellemiyor",
          id: "ai-tarayicilari",
          blocks: [
            {
              type: "p",
              text: "Burada bir ayrım şart. Eğitim botları (GPTBot, ClaudeBot, CCBot) modelleri eğitmek için içerik toplar; bunları engellemek savunulabilir bir tercihtir ve 6 marka bunu yapıyor. Cevap motoru botları (OAI-SearchBot, ChatGPT-User, PerplexityBot) ise kullanıcının sorusunu cevaplarken sayfayı okumak için gelir; onları engellemek markayı yapay zekâ cevaplarından tamamen siler.",
            },
            {
              type: "p",
              text: "189 markanın hiçbiri ikinci grubu engellemiyor. Beklentimiz buydu ve yanlıştı.",
            },
            {
              type: "p",
              text: "Ama asıl sayı bu değil: 189 markanın 175'inin (%93) robots.txt dosyasında yapay zekâ botlarına dair tek bir kural yok. Ne izin ne yasak — konu hiç ele alınmamış. Üstüne %63'ü bir CDN arkasında, yani kararın nerede alındığını marka tarafının bildiğinden bile emin değiliz.",
            },
            {
              type: "p",
              text: "Yapılandırılmış veri tarafı da aynı kalıba uyuyor: ana sayfaların %60'ında Organization şeması var (çoğu tema varsayılanı), %12'sinde BreadcrumbList, ürün sayfalarının %70'inde Product şeması — ama aggregateRating yalnızca %29'unda. Platform ne koyduysa o duruyor.",
            },
          ],
        },
        {
          h2: "Ne yapmalı",
          id: "ne-yapmali",
          blocks: [
            {
              type: "p",
              text: "Verinin söylediği basit: platformunuz size bir taban veriyor ve kimse üstüne bir şey koymuyor. Koyan öne geçer. En ucuzdan başlayarak:",
            },
            {
              type: "ul",
              items: [
                "ViewContent'i kurun. Kendi mağazanız varsa ve ürün sayfanızda bu olay tetiklenmiyorsa Meta'ya ürün sinyali göndermiyorsunuz demektir. Tek seferlik iş, doğrudan kampanya performansı.",
                "Olay kimliği (event_id) ekleyin. Pixel ve Conversions API'yi birlikte kullanıyorsanız tekilleştirme olmadan dönüşümleriniz şişik raporlanıyor.",
                "FAQPage işaretlemesi ekleyin. Birkaç satır; sektörde tek bir markanın yaptığı bir şey.",
                "robots.txt dosyanızda bilinçli bir pozisyon alın. En azından hangi bota ne dediğinizi bilin — kararın CDN panelinde alınmış olma ihtimali yüksek.",
                "llms.txt yazın. Shopify'da değilseniz muhtemelen yok.",
              ],
            },
          ],
        },
        {
          h2: "Kendiniz tekrar edin",
          id: "tekrar",
          blocks: [
            {
              type: "p",
              text: "Araç, marka listesi ve toplulaştırılmış sonuçlar açık: [github.com/soleach/soleach-web-scraper](https://github.com/soleach/soleach-web-scraper). Tarayıcı robots.txt kurallarına uyar, kimliğini bildirir ve başka bir botun kimliğine bürünmez.",
            },
            {
              type: "p",
              text: "Marka bazlı sonuçları bilerek yayımlamıyoruz. Denedik: veri setindeki her alan kamuya açık bir gözlem olduğu için satır düzeyinde anonimlik sağlanamıyor — isimler silinse bile 216 satırın 216'sı, tüm sütunlar birlikte kullanıldığında tekil kalıyor. Tek dürüst seçenek ya isim vermek ya da toplulaştırmaktı; ikincisini seçtik. Kendi listenizi tarayıp kendi marka bazlı verinizi üretebilirsiniz.",
            },
            {
              type: "p",
              text: "Tarama tarihi: 5 Ağustos 2026. Veriler o günkü durumu yansıtır. Siteler değişir; aynı taramayı bugün çalıştırırsanız farklı sayılar elde edersiniz, beklenen de budur.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Türkiye'de kaç güzellik markasının llms.txt dosyası var?",
          a: "5 Ağustos 2026'da taranan ve erişilebilen 189 markanın 79'unda (%42) içi dolu bir llms.txt dosyası bulundu. Ancak bu oran platforma göre çok keskin ayrışıyor: Shopify kullanan 66 markanın 64'ünde (%97) varken, Shopify dışındaki 123 markanın yalnızca 15'inde (%12) var. Yani genel oran markaların tercihini değil, Shopify'ın varsayılanını yansıtıyor.",
        },
        {
          q: "Meta Pixel kuran markaların kaçı CAPI deduplication yapıyor?",
          a: "Tarayıcıda ölçülebilen 175 sitenin 34'ünde Meta Pixel çalışıyordu; bunların 11'inde (%32) olay kimliği (event_id) yoktu. Olay kimliği olmadan tarayıcıdan ve sunucudan gönderilen aynı dönüşüm tekilleştirilemez, dolayısıyla iki kez sayılır ve raporlanan ROAS gerçeğinden yüksek çıkar.",
        },
        {
          q: "Türk güzellik markaları yapay zekâ tarayıcılarını engelliyor mu?",
          a: "Hayır. Erişilebilen 189 markanın hiçbiri robots.txt dosyasında cevap motoru botlarını (OAI-SearchBot, ChatGPT-User, PerplexityBot gibi) engellemiyor. Yalnızca 6 marka eğitim botlarını engelliyor. Asıl bulgu şu: 189 markanın 175'inin (%93) robots.txt dosyasında yapay zekâ botlarına dair hiçbir kural yok. Ayrıca sitelerin %63'ü bir CDN arkasında olduğu için güvenlik duvarı seviyesindeki engellemeler bu yöntemle görünmüyor.",
        },
        {
          q: "Ürün sayfalarında ViewContent olayı ne kadar yaygın?",
          a: "Kendi mağazası olan ve ürün sayfası ölçülebilen 116 markanın yalnızca 4'ünde (%3) ViewContent tetikleniyor. Bu oran Shopify'da (63 mağazanın 2'si) ve diğer platformlarda (53 mağazanın 2'si) neredeyse aynı; yani platform kısıtı değil, kurulum eksikliği.",
        },
        {
          q: "Bu araştırmayı kendim tekrar edebilir miyim?",
          a: "Evet. Araç, marka listesi ve toplulaştırılmış sonuçlar github.com/soleach/soleach-web-scraper adresinde açık kaynak olarak yayımlandı. Kendi marka listenizle çalıştırıp kendi verinizi üretebilirsiniz. Siteler zamanla değiştiği için birebir aynı sayıları elde etmezsiniz; değişmeyen şey ölçüm yöntemidir.",
        },
        {
          q: "Marka bazlı sonuçlar neden yayımlanmıyor?",
          a: "Satır düzeyinde anonimlik sağlanamadığı için. Veri setindeki her alan kamuya açık bir gözlem olduğundan, isimler silinse bile 216 satırın 216'sı tüm sütunlar birlikte kullanıldığında tekil kalıyor — birisi aynı aracı şüphelendiği markaya çalıştırıp parmak izini eşleştirebilir. Sahte anonimlik yerine toplulaştırılmış sonuç yayımlamayı tercih ettik.",
        },
      ],
      sources: [
        {
          label: "Soleach. beauty-web-audit — güzellik markası web sitesi tarama aracı ve veri seti.",
          url: "https://github.com/soleach/soleach-web-scraper",
          publisher: "Soleach",
        },
        {
          label: "Howard, J. llms.txt — a proposal to standardise information for LLMs.",
          url: "https://llmstxt.org/",
          publisher: "llmstxt.org",
        },
        {
          label: "Meta. Deduplicate Pixel and Server Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
          publisher: "Meta",
        },
        {
          label: "Meta. Reference — Meta Pixel Standard Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/meta-pixel/reference/",
          publisher: "Meta",
        },
        {
          label: "Google. Consent Mode — Tag Platform Security Guides.",
          url: "https://developers.google.com/tag-platform/security/guides/consent",
          publisher: "Google",
        },
        {
          label: "Schema.org. FAQPage type definition.",
          url: "https://schema.org/FAQPage",
          publisher: "Schema.org",
        },
      ],
      tags: [
        "GEO",
        "Araştırma",
        "Meta Pixel",
        "Kozmetik pazarlama",
        "Yapılandırılmış veri",
      ],
    },
    en: {
      slug: "turkish-beauty-brands-website-audit-2026",
      title: "We audited 216 beauty brand websites: whatever the platform gave them, that is what is there",
      metaTitle: "216 Beauty Brand Websites Audited (2026 Research) | Soleach",
      metaDescription:
        "We audited 216 beauty brand websites in Turkey. llms.txt sits at 42% — but only 12% outside Shopify; 3% of product pages fire ViewContent. Open source data and method.",
      excerpt:
        "On 5 August 2026 we crawled the websites of 216 beauty and personal care brands in the Turkish market. The picture is not that brands are closed to AI. It is that almost every positive signal we measured is a default of the platform they use. Nothing that required setting up has been set up.",
      intro: [
        "On 5 August 2026 we crawled the websites of 216 beauty and personal care brands selling in Turkey. For each brand we looked at the homepage, one category page and one product page, recording what they tell AI crawlers, which measurement tags they run, and how complete their structured data is.",
        "We started with an expectation: that brands were unknowingly blocking AI crawlers because of one-click firewall settings. That expectation was simply wrong — none of the 189 brands we could reach block answer engines.",
        "What the data does show is more uncomfortable. Every positive signal we measured turns out to be a default of the brand's platform. Not one thing that requires setting up has been set up. Below is the evidence, the method, and how to repeat the same audit with your own list.",
      ],
      sections: [
        {
          h2: "Method and its limits",
          id: "method",
          blocks: [
            {
              type: "p",
              text: "Per brand we examined the homepage, one category page and one product page. Some of it over plain HTTP, some in a real browser — because tags like the Meta Pixel are no longer written into the HTML source; Google Tag Manager injects them at runtime. You cannot see them without running the page.",
            },
            {
              type: "p",
              text: "The tool, the brand list and the aggregate results are open source: [github.com/soleach/soleach-web-scraper](https://github.com/soleach/soleach-web-scraper). Run it with your own list and produce your own data.",
            },
            {
              type: "h3",
              text: "Three limits worth stating up front",
            },
            {
              type: "ul",
              items: [
                "We reached 189 of 216 brands (88%). Of the remaining 27, sixteen returned a direct 403 to our openly identified crawler. That is not an error, it is those sites' choice — and a finding in itself.",
                "We never touched the cookie banner; consent is the visitor's to give, not a crawler's. So every tag we saw is one that fired before the visitor agreed to anything. The cost is that a site correctly withholding its tags shows us no pixel at all, and we did not count those sites as having none.",
                "63% of sites sit behind a CDN with no mention of AI crawlers in robots.txt. The real policy may live in a Cloudflare panel we cannot see. We marked those brands as unmeasurable rather than as allowing access.",
              ],
            },
          ],
        },
        {
          h2: "Finding 1: llms.txt adoption looks high — but the brands did not do it",
          id: "llms-txt",
          blocks: [
            {
              type: "p",
              text: "79 of the 189 reachable brands (42%) publish a substantive llms.txt file. The file is a proposed standard for describing a site to AI engines ([llmstxt.org](https://llmstxt.org/)), and 42% is far higher than we expected for this market.",
            },
            {
              type: "p",
              text: "Then we split the result by e-commerce platform, and the picture changed completely:",
            },
            {
              type: "ul",
              items: [
                "Of the 66 brands on Shopify, 64 have llms.txt — 97%.",
                "Of the 123 brands not on Shopify, 15 have it — 12%.",
              ],
            },
            {
              type: "p",
              text: "So the headline 42% is not evidence of AI-visibility awareness. Shopify generates the file for its tenants automatically. A Turkish beauty brand that is not on Shopify has roughly a one-in-eight chance of having one.",
            },
            {
              type: "quote",
              text: "Without that split, the biggest claim in this article would have been wrong: we would have written that Turkish beauty brands are doing better at GEO than expected.",
            },
          ],
        },
        {
          h2: "Finding 2: nothing the platform does not provide has been done",
          id: "platform-defaults",
          blocks: [
            {
              type: "p",
              text: "The first finding suggests a pattern; the second confirms it. We looked at two things that require deliberate setup. Both are almost entirely absent.",
            },
            {
              type: "h3",
              text: "FAQPage markup: 1 brand out of 189",
            },
            {
              type: "p",
              text: "This is the cheapest win in AI visibility: a few lines of markup that make the questions and answers on your page machine-readable ([schema.org/FAQPage](https://schema.org/FAQPage)). Answer engines look for exactly this shape. In Turkey's beauty sector one single brand does it — 1 in 189, or 0.5%.",
            },
            {
              type: "h3",
              text: "ViewContent on product pages: 4 shops out of 116",
            },
            {
              type: "p",
              text: "This one costs money directly. ViewContent is the signal telling Meta that a visitor looked at this product ([Meta Pixel standard events](https://developers.facebook.com/docs/meta-pixel/reference/)). Without it you cannot run catalogue campaigns, cannot retarget by product, and cannot tell the delivery system which items attract interest. Of the 116 brands with their own shop, four fire it — 3%.",
            },
            {
              type: "p",
              text: "And this is not a platform limitation. It is present on 2 of 63 Shopify shops and 2 of 53 shops elsewhere. Shopify hands you llms.txt for free, but ViewContent has to be configured — and nobody configures it. That is the pattern: whatever the platform gave them, that is what is there.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/en/platform-vs-kurulum.png",
              alt: "Horizontal bar chart. Signals the platform provides automatically are high: llms.txt on Shopify brands 97% (64/66), Product markup on product pages 70% (73/104), Organization markup on homepages 60% (114/189). Signals requiring setup sit at the bottom: llms.txt on non-Shopify brands 12% (15/123), ViewContent on product pages 3.4% (4/116), FAQPage markup on homepages 0.5% (1/189).",
              caption: "Everything the platform generates automatically is high; everything that requires setting up is near zero. Each bar carries its own denominator.",
            },
          ],
        },
        {
          h2: "Finding 3: a third of the sites running a pixel double-count conversions",
          id: "capi-deduplication",
          blocks: [
            {
              type: "p",
              text: "Of the 175 sites we could render in a browser, 34 (19%) sent Meta Pixel requests. That share looks low, but remember: sites correctly holding their tags until consent are invisible here, so real installation is higher.",
            },
            {
              type: "p",
              text: "The real finding is inside that group. Of the 34 sites with a live pixel, 11 (32%) send no event identifier. That parameter is what lets Meta match a browser event with the same event sent server-side through the Conversions API and count it once ([Meta: deduplicate pixel and server events](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)). Without it the same purchase is counted twice, reported ROAS comes out higher than reality, and budget drifts to the wrong channel.",
            },
            {
              type: "p",
              text: "One unexpected detail: among Turkish brands, 13 of the 15 with a pixel set an event identifier; among global brands it is 7 of 12. The sample is small and should be read cautiously — but it does not support the assumption that local brands lag on this.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/en/olcum-zinciri.png",
              alt: "Horizontal bar chart: Google Tag Manager 65% (113/175), GA4 measurement request 56% (98/175), Meta Pixel firing 19% (34/175), Pixel with CAPI deduplication 13% (23/175), ViewContent on product page 3.4% (4/116). The chain narrows sharply from top to bottom.",
              caption: "Tag management is installed and measurement requests go out — but the product signal at the end of the chain is almost entirely missing.",
            },
          ],
        },
        {
          h2: "Finding 4: the banner is there, but consent is not awaited",
          id: "consent",
          blocks: [
            {
              type: "p",
              text: "Recall that we never touched the cookie banner. On that basis the 175 sites we could render split four ways:",
            },
            {
              type: "ul",
              items: [
                "A banner is shown, but marketing tags had already fired: 60 sites (34%).",
                "No consent interface at all, tags firing: 51 sites (29%).",
                "Tags withheld, consent awaited — the correct behaviour: 35 sites (20%).",
                "No tags at all: 29 sites (17%).",
              ],
            },
            {
              type: "p",
              text: "In other words, on most sites that show a banner the banner is decorative: marketing tags start running before the visitor presses accept.",
            },
            {
              type: "img",
              src: "/blog-media/guzellik-markalari-web-taramasi/en/onay.png",
              alt: "Single stacked bar showing how 175 sites split: 34% (60 sites) fire tags before consent, 29% (51 sites) have no consent interface and fire anyway, 17% (29 sites) run no tags at all, and 20% (35 sites) withhold tags and await consent.",
              caption: "The cookie banner was never touched, so every tag in the two left-hand groups fired before the visitor gave consent.",
            },
            {
              type: "p",
              text: "There is a nuance here, and missing it produces the wrong conclusion. With Google Consent Mode active, a GA4 tag can fire while storage is denied — that is correct behaviour, and we saw Consent Mode signals on 101 of 175 sites (58%) ([Google: Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)). The Meta Pixel has no such intermediate state: it either fires or it does not.",
            },
          ],
        },
        {
          h2: "Our expectation was wrong: nobody blocks answer engines",
          id: "ai-crawlers",
          blocks: [
            {
              type: "p",
              text: "A distinction matters here. Training crawlers (GPTBot, ClaudeBot, CCBot) collect content to train models; blocking them is a defensible choice, and 6 brands do it. Retrieval crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot) fetch a page while answering a user's question; blocking those removes the brand from AI answers entirely.",
            },
            {
              type: "p",
              text: "None of the 189 brands blocks the second group. That was our expectation, and it was wrong.",
            },
            {
              type: "p",
              text: "But the number that matters is a different one: 175 of 189 brands (93%) have no rule about AI crawlers in robots.txt at all. Neither permission nor prohibition — the subject has never been addressed. On top of that, 63% sit behind a CDN, so we cannot even be sure the brand side knows where the decision is being made.",
            },
            {
              type: "p",
              text: "Structured data follows the same pattern: 60% of homepages carry Organization markup (mostly a theme default), 12% BreadcrumbList, and 70% of product pages carry Product markup — but only 29% include an aggregate rating. Whatever the platform put there is still there.",
            },
          ],
        },
        {
          h2: "What to do",
          id: "what-to-do",
          blocks: [
            {
              type: "p",
              text: "The data says something simple: your platform gives you a floor, and nobody builds on top of it. Whoever does, gets ahead. Cheapest first:",
            },
            {
              type: "ul",
              items: [
                "Set up ViewContent. If you have your own shop and this event does not fire on your product pages, you are sending Meta no product signal at all. One-off work, direct campaign impact.",
                "Add an event identifier. If you run the Pixel and Conversions API together without deduplication, your conversions are being reported inflated.",
                "Add FAQPage markup. A few lines — and something exactly one brand in the sector does.",
                "Take a deliberate position in robots.txt. At minimum, know what you are telling which crawler; the decision has probably been made in a CDN panel.",
                "Write an llms.txt. If you are not on Shopify, you almost certainly do not have one.",
              ],
            },
          ],
        },
        {
          h2: "Repeat it yourself",
          id: "repeat",
          blocks: [
            {
              type: "p",
              text: "The tool, the brand list and the aggregate results are public: [github.com/soleach/soleach-web-scraper](https://github.com/soleach/soleach-web-scraper). The crawler obeys robots.txt, identifies itself, and never impersonates another user agent.",
            },
            {
              type: "p",
              text: "We deliberately do not publish per-brand results. We tried: because every field in the dataset is a public observation, row-level anonymity cannot be achieved — with names removed, 216 of 216 rows remain unique once all columns are used together. The only honest options were to name names or to aggregate; we chose the second. Crawl your own list and produce your own per-brand data.",
            },
            {
              type: "p",
              text: "Crawl date: 5 August 2026. The figures describe that day. Sites change; run the same audit today and you will get different numbers, which is exactly as it should be.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How many beauty brands in Turkey have an llms.txt file?",
          a: "Of the 189 reachable brands crawled on 5 August 2026, 79 (42%) publish a substantive llms.txt. The rate splits sharply by platform: 64 of 66 Shopify brands (97%) have one, against 15 of 123 non-Shopify brands (12%). The headline rate reflects a Shopify default rather than a brand decision.",
        },
        {
          q: "How many brands running the Meta Pixel use CAPI deduplication?",
          a: "Of the 175 sites measurable in a browser, 34 were running the Meta Pixel; 11 of those (32%) sent no event identifier. Without one, the same conversion sent from the browser and from the server cannot be matched, so it is counted twice and reported ROAS comes out higher than reality.",
        },
        {
          q: "Do Turkish beauty brands block AI crawlers?",
          a: "No. None of the 189 reachable brands blocks retrieval crawlers such as OAI-SearchBot, ChatGPT-User or PerplexityBot in robots.txt. Only 6 brands block training crawlers. The real finding is that 175 of 189 brands (93%) have no AI crawler rule in robots.txt at all. In addition, 63% of the sites sit behind a CDN, so firewall-level blocking is not visible to this method.",
        },
        {
          q: "How common is the ViewContent event on product pages?",
          a: "Of the 116 brands with their own shop and a measurable product page, only 4 (3%) fire ViewContent. The rate is nearly identical on Shopify (2 of 63) and on other platforms (2 of 53), so this is a configuration gap rather than a platform limitation.",
        },
        {
          q: "Can I reproduce this research?",
          a: "Yes. The tool, the brand list and the aggregate results are published as open source at github.com/soleach/soleach-web-scraper. Run it with your own brand list to produce your own data. You will not get identical numbers because sites change over time; what stays constant is the measurement method.",
        },
        {
          q: "Why are per-brand results not published?",
          a: "Because row-level anonymity could not be achieved. Every field in the dataset is a public observation, so even with names removed, 216 of 216 rows stay unique once all columns are used together — anyone could run the same tool against a brand they suspect and match the fingerprint. Rather than offer false anonymity, we publish aggregate results only.",
        },
      ],
      sources: [
        {
          label: "Soleach. beauty-web-audit — beauty brand website audit tool and dataset.",
          url: "https://github.com/soleach/soleach-web-scraper",
          publisher: "Soleach",
        },
        {
          label: "Howard, J. llms.txt — a proposal to standardise information for LLMs.",
          url: "https://llmstxt.org/",
          publisher: "llmstxt.org",
        },
        {
          label: "Meta. Deduplicate Pixel and Server Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
          publisher: "Meta",
        },
        {
          label: "Meta. Reference — Meta Pixel Standard Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/meta-pixel/reference/",
          publisher: "Meta",
        },
        {
          label: "Google. Consent Mode — Tag Platform Security Guides.",
          url: "https://developers.google.com/tag-platform/security/guides/consent",
          publisher: "Google",
        },
        {
          label: "Schema.org. FAQPage type definition.",
          url: "https://schema.org/FAQPage",
          publisher: "Schema.org",
        },
      ],
      tags: [
        "GEO",
        "Research",
        "Meta Pixel",
        "Cosmetics marketing",
        "Structured data",
      ],
    },
  },
};
