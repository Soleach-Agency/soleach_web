import type { BlogPost } from "@/lib/blog";

export const metaPixelOlcumHatalari: BlogPost = {
  id: "meta-pixel-olcum-hatalari",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  category: "ads",
  locales: {
    tr: {
      slug: "meta-pixel-olcum-hatalari-satis-atfi",
      title: "Meta hangi satışın senden geldiğini bilmiyor",
      metaTitle: "Meta Pixel Ölçüm Hataları: Satışlar Neden Eksik | Soleach",
      metaDescription: "Meta Pixel kurulu ama satışlar raporda eksik mi? Olay eşleşmesi, deduplication ve Conversions API kapsamı — ölçümün nerede kırıldığını kaynaklarıyla anlatıyoruz.",
      excerpt: "Pixel'i kurdun, reklam dönüyor, satışlar geliyor — ama Meta hangi satışın kendisinden geldiğini bilmiyor. Yanlış ölçüm kurulumunun sessiz bütçe yakışı ve Meta'nın kendi dokümantasyonuna göre kontrol edilmesi gereken beş nokta.",
      intro: [
        "Bir kozmetik markasının reklam panelinde en sık gördüğümüz cümle şu: \"Sipariş geliyor ama Meta'da görünmüyor.\" Bunun tersi de olur — panelde 40 satış yazar, muhasebede 28 vardır.",
        "İkisi de aynı kökten çıkar: Meta bir satışın gerçekleştiğini öğrenemediğinde ya da aynı satışı iki kez öğrendiğinde, sadece raporun bozulmaz. Yayınlama sistemi kime reklam göstereceğini o veriden öğreniyor. Yani kör ölçüm, kötü rapor değil; kötü optimizasyon demektir.",
        "Bu yazıda Meta'nın kendi geliştirici dokümantasyonuna dayanarak ölçümün tam olarak nerede kırıldığını, hangi metriklere bakman gerektiğini ve düzeltmenin neyi değiştirip neyi değiştirmediğini anlatıyoruz.",
      ],
      sections: [
        {
          h2: "Meta neden bazı satışları hiç göremiyor?",
          blocks: [
            {
              type: "p",
              text: "Klasik Meta Pixel tarayıcıda çalışan bir JavaScript parçasıdır. Yani satın alma olayının Meta'ya ulaşması, kullanıcının tarayıcısının o isteği göndermesine bağlıdır — ve tarayıcılar son yıllarda tam da bu tür istekleri kısıtlamak üzere yeniden tasarlandı.",
            },
            {
              type: "p",
              text: "Safari'nin arkasındaki WebKit, 2020'de çapraz site kaynakları için çerezlerin varsayılan olarak tamamen engellendiğini duyurdu ve aynı güncellemeyle script'in yazabildiği tüm depolama biçimlerine — LocalStorage, IndexedDB, SessionStorage, Service Worker kayıtları dâhil — yedi günlük bir üst sınır getirdi: kullanıcı siteyle etkileşime girmezse bu veriler siliniyor ([WebKit, 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)). Buna reklam engelleyicileri, ağ hataları ve \"teşekkürler\" sayfasına hiç uğramadan biten ödeme akışlarını da ekle.",
            },
            {
              type: "p",
              text: "Sonuç: tarayıcı tarafında ölçülen her satın alma, gerçekleşen her satın almanın yalnızca bir alt kümesidir. Meta'nın buna cevabı sunucu taraflı [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/) — olayı kullanıcının tarayıcısı yerine kendi sunucundan göndermek. Doğru kurulum bugün \"Pixel ya da CAPI\" değil, ikisinin birlikte ve birbirini tanıyarak çalışmasıdır.",
            },
          ],
        },
        {
          h2: "Pixel kurulu olduğu hâlde ölçüm nerede bozuluyor?",
          blocks: [
            {
              type: "p",
              text: "Kurulum \"var/yok\" ikilisi değil, bir kalite ölçeği. Meta'nın Dataset Quality dokümantasyonu, bir veri kümesinin sağlığını ölçmek için birbirinden bağımsız birkaç metrik tanımlıyor — ve bunların hepsi Events Manager'da görünür ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). Pratikte en sık şu beş noktada kırılıyor:",
            },
            {
              type: "h3",
              text: "1. Purchase olayı değersiz gidiyor",
            },
            {
              type: "p",
              text: "Meta'nın Pixel referansına göre Purchase olayında currency ve value zorunlu alanlar ([Meta for Developers](https://developers.facebook.com/docs/meta-pixel/reference/)). Bunlar boş giderse Meta satışın olduğunu bilir ama kaç liralık olduğunu bilmez — ROAS hesabın ve değer optimizasyonun temelsiz kalır. Aynı referans, AddToCart ve ViewContent için contents/content_ids alanlarını Advantage+ katalog reklamlarında zorunlu tutuyor; katalog reklamı yayınlıyorsan bu alanların eksikliği doğrudan formatın çalışmaması demek.",
            },
            {
              type: "h3",
              text: "2. Sunucu tarafı olayların kapsamı düşük",
            },
            {
              type: "p",
              text: "Conversions API'yi \"kurmak\" tek bir olayı sunucudan göndermek değil. Meta bunu event coverage adıyla ölçüyor: Pixel olaylarının yüzde kaçının, deduplication anahtarlarını paylaşan bir Conversions API olayıyla karşılandığının 7 günlük ortalaması. Dokümantasyondaki örnek net: bir reklamverenin ViewContent, AddToCart ve Purchase olayları varsa ve sunucudan yalnızca Purchase gönderiliyorsa event coverage %33 olur. Aynı doküman %75'i eşik olarak kullanıyor ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "h3",
              text: "3. Eşleşme anahtarları zayıf",
            },
            {
              type: "p",
              text: "Event Match Quality (EMQ), sunucundan gönderdiğin müşteri bilgilerinin olayı bir Meta hesabıyla eşleştirmede ne kadar etkili olabileceğini gösteren 10 üzerinden bir puan. Meta'ya göre bu puan, hangi müşteri bilgisi parametrelerinin geldiğine, gelen bilginin kalitesine ve olay örneklerinin yüzde kaçının bir Meta hesabıyla eşleştiğine bakılarak hesaplanıyor; ve yüksek kaliteli eşleşme reklam atfını ve performansını iyileştirebiliyor ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). Dikkat: Meta bunu \"iyileştirir\" diye değil, \"iyileştirebilir\" diye yazıyor — biz de öyle aktarıyoruz.",
            },
            {
              type: "h3",
              text: "4. Olaylar geç gidiyor",
            },
            {
              type: "p",
              text: "Data freshness, olayın gerçekleşmesiyle Meta'ya ulaşması arasındaki gecikmeyi ölçer. Pixel varsayılan olarak gerçek zamanlı gönderir; sunucu tarafında ise günlük toplu (batch) gönderim yapan kurulumlar yaygındır. Meta olayların gerçek zamanlı ya da mümkün olduğunca gerçek zamana yakın paylaşılmasını öneriyor ve gecikmeli gönderilen olayların reklamların doğru kitlelere ne kadar etkili ulaştırılabileceğini etkileyebileceğini belirtiyor ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "h3",
              text: "5. Sunucu yanlış IP gönderiyor",
            },
            {
              type: "p",
              text: "Dokümantasyondaki tanı (diagnostics) örneklerinden biri doğrudan bu konuda: sunucunun, Meta Pixel'inkiyle eşleşmeyen istemci IP adresleri göndermesi — Meta'nın kendi ifadesiyle bu, kampanyalarının atfını ve optimizasyonunu etkileyebilir. Çözüm olarak sunucu yükünde müşteri etkileşiminden alınan client_ip_address değerinin gönderilmesi öneriliyor. Bu, sunucu tarafı kurulumu bir geliştiriciye \"kur gitsin\" diye bıraktığında en sık atlanan ayrıntılardan biri.",
            },
          ],
        },
        {
          h2: "Aynı satış iki kez sayılırsa ne oluyor?",
          blocks: [
            {
              type: "p",
              text: "Pixel ve Conversions API'yi aynı olaylar için birlikte kullanıyorsan Meta aynı satın almayı iki kanaldan alır. Bunları tek olaya indirgemesi için deduplication kurulmuş olmalı — kurulmamışsa panelde şişmiş, gerçekte olmayan satışlar görürsün.",
            },
            {
              type: "quote",
              text: "Bir olayın deduplicate edilmesi için: Facebook Pixel'in eventID değeri Conversions API'nin event_id değeriyle eşleşmeli ve Pixel'in olay adı Conversions API'nin event_name değeriyle eşleşmelidir.",
              cite: "Meta for Developers, Deduplicate Pixel and Server Events",
              citeUrl: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
            },
            {
              type: "p",
              text: "Mekaniğin bilmen gereken üç ayrıntısı var ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)):",
            },
            {
              type: "ul",
              items: [
                "Aynı event_id + event_name kombinasyonu aynı pixel ID'ye 48 saat içinde ikinci kez gelirse sonraki olaylar atılır. 48 saatten sonra gelen kopya ayrı bir olay sayılır — yani gece toplu gönderim yapan bir sunucu entegrasyonu, gecikme uzarsa çift sayıma dönüşebilir.",
                "Sunucu ve tarayıcı olayı birbirine yakın zamanda (yaklaşık 5 dakika içinde) gelirse Meta tarayıcı olayını tercih eder.",
                "Farklı olayları farklı kanallardan göndermek de meşru bir kurulumdur: örneğin Purchase'ı Pixel'den, AddToCart'ı Conversions API'den gönderiyorsan deduplication'ı hiç düşünmen gerekmez. Karar vermen gereken şey, hangi olayın hangi kanaldan gideceği.",
              ],
            },
            {
              type: "p",
              text: "Pixel tarafında eventID, fbq('track', ...) çağrısına dördüncü parametre olarak veriliyor; Meta, Conversions API ile birlikte çalışan her kurulumda bunu öneriyor ([Meta for Developers](https://developers.facebook.com/docs/meta-pixel/reference/)). Events Manager'daki deduplication key feedback bölümü de olaylarının yüzde kaçının bu anahtarlarla geldiğini gösterir — orada düşük bir yüzde görüyorsan sorun kurulumun kendisindedir.",
            },
          ],
        },
        {
          h2: "Ölçümü düzeltmek raporlanan satışı gerçekten artırır mı?",
          blocks: [
            {
              type: "p",
              text: "Meta'nın bunun için ayrı bir metriği var: Additional Conversions Reported (ACR). Tanımı, Conversions API'yi Meta Pixel ile birlikte kullanmanın işletmene ne kadar fayda sağladığını anlamana yardımcı olan bir metrik olması; Meta'ya göre daha fazla raporlanan dönüşüm, sonuç başı maliyeti düşürmene ve reklamlarını onları ilgili bulacak kişilere göstermene yardımcı olabilir ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "p",
              text: "Burada dürüst olmak gerekiyor, çünkü bu metriğin pazarlama içeriklerinde en çok çarpıtıldığı yer burası: ACR raporlanan dönüşümlerdeki artışı ölçer. Yani daha önce de gerçekleşen ama Meta'nın göremediği satışların artık görünür hâle gelmesi. Ciro artışı değil, körlüğün azalması. Ölçümü düzelttiğinde panelindeki satış sayısının yükselmesi beklenen bir sonuçtur — ama o gece kasana giren para değişmemiştir.",
            },
            {
              type: "p",
              text: "Faydası dolaylı ve gerçektir: daha eksiksiz sinyal, yayınlama sisteminin kimi hedefleyeceğini daha iyi öğrenmesi demektir. Bunun performansa yansıması ise zamanla ve garantisiz olur.",
            },
          ],
        },
        {
          h2: "Rapordaki satış, reklamın yarattığı satış mı?",
          blocks: [
            {
              type: "p",
              text: "Ölçümün mükemmel çalıştığı durumda bile cevaplanmamış bir soru kalır: Meta'nın sana atfettiği satış, reklamı hiç görmese de olacak bir satış mıydı? Atıf (attribution) ile artımsallık (incrementality) aynı şey değildir.",
            },
            {
              type: "p",
              text: "Bu ayrımın en bilinen akademik kanıtı Facebook'un kendi verisiyle yapılmış bir çalışma. Gordon, Zettelmeyer, Bhargava ve Chapsky, Facebook'ta yürütülen 15 ABD reklam deneyini — 500 milyon kullanıcı-deney gözlemi ve 1,6 milyar reklam gösterimi — rastgele kontrollü deney sonuçlarıyla gözlemsel yöntemlerin sonuçlarını karşılaştırarak inceledi. Bulgu: gözlemsel yöntemler, kapsamlı demografik ve davranışsal değişkenler kontrol edildikten sonra bile çoğu zaman deneylerle aynı etkileri üretemedi ([Gordon ve diğerleri, 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
            },
            {
              type: "p",
              text: "Bunun pratikteki karşılığı şu: ölçüm altyapını düzeltmek, gördüğün rakamın doğru sayılmasını sağlar; o rakamın reklamın yarattığı fark olduğunu kanıtlamaz. Bütçeyi ciddi biçimde ölçekleyeceğin noktada ihtiyacın olan şey daha iyi bir pixel değil, bir deney tasarımıdır (kapalı/açık test, coğrafi bölme, marka arama hacmi kontrolü). Kreatif tarafında bu deneyi nasıl kuracağını ve kazananı ne zaman ciddiye alabileceğini [beş hook'u test etme yazımızda](/tr/blog/ayni-urun-5-farkli-hook-hangisi-durduruyor) ayrıntılandırdık.",
            },
          ],
        },
        {
          h2: "Kozmetik markası olarak bugün neyi kontrol etmelisin?",
          blocks: [
            {
              type: "p",
              text: "Events Manager üzerinden yarım saatte yapabileceğin bir denetim listesi:",
            },
            {
              type: "ul",
              items: [
                "Test Events aracıyla bir deneme siparişi geç: ViewContent → AddToCart → InitiateCheckout → Purchase zincirinin tamamı düşüyor mu?",
                "Purchase olayında value ve currency dolu mu — ve değer sepetin gerçek tutarıyla mı eşleşiyor, yoksa kargo/vergi dâhil edilmiş sabit bir sayı mı?",
                "Deduplication key feedback: tarayıcı ve sunucu olaylarının yüzde kaçı event_id ile geliyor?",
                "Event coverage: kaç olayın sunucu tarafı karşılığı var, %75 eşiğinin neresindesin?",
                "EMQ: Purchase için puanın kaç, hangi eşleşme anahtarları eksik görünüyor?",
                "Data freshness: sunucu olayların real_time mı, hourly/daily mi?",
                "Diagnostics sekmesindeki uyarılar — özellikle IP eşleşmezliği — çözülmüş mü?",
              ],
            },
            {
              type: "p",
              text: "Bu listenin çoğu, reklam bütçesi harcamadan önce halledilmesi gereken işler. Reklam tarafının bütününe bakmak istersen [güzellik markaları için Instagram reklamlarına başlangıç rehberimiz](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) bu kurulumu daha geniş bir çerçeveye oturtuyor; ölçümün yarısı mağaza tarafında kırıldığı için [kozmetik markası için Shopify mağaza kurulumu rehberine](/tr/blog/kozmetik-markasi-icin-shopify-magaza-kurulumu) ve [web & e-ticaret hizmetimize](/tr/services#web-ecommerce) de bakmanı öneririz.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Pixel kuruluysa Conversions API'ye de ihtiyacım var mı?",
          a: "Tarayıcı tarafı ölçüm yapısal olarak eksik: Safari'nin arkasındaki WebKit çapraz site çerezlerini varsayılan olarak engelliyor ve script'in yazabildiği depolamaya yedi günlük bir üst sınır uyguluyor ([WebKit, 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)). Conversions API bu boşluğu sunucudan olay göndererek kapatır. İkisini birlikte kullanacaksan deduplication kurulumu şart; farklı olayları farklı kanallardan göndermeyi tercih edersen deduplication'a hiç ihtiyacın olmaz ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)).",
        },
        {
          q: "Panelimdeki satış sayısı muhasebemdekinden fazla, neden?",
          a: "En yaygın teknik sebep deduplication eksikliğidir: aynı satın alma hem Pixel'den hem Conversions API'den geliyor ve event_id eşleşmediği için iki ayrı olay sayılıyor. Meta, aynı event_id ve event_name kombinasyonunu 48 saat içinde ikinci kez aldığında sonrakini atar; bu pencere dışında gelen kopya ayrı olay sayılır ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)). İkinci olası sebep teknik değil: Meta'nın raporladığı satış, seçtiğin atıf penceresi içindeki reklamla ilişkilendirilmiş satıştır — muhasebe kaydıyla birebir aynı şeyi ölçmez.",
        },
        {
          q: "Event Match Quality puanım kaç olmalı?",
          a: "Meta bir \"geçer not\" yayımlamıyor; puan 10 üzerinden hesaplanıyor ve hangi müşteri bilgisi parametrelerinin gönderildiğine, bilginin kalitesine ve eşleşen olay oranına bağlı ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). Doğru yaklaşım mutlak bir hedef rakam kovalamak değil, kendi trendini izlemek: puanın düştüğü gün kurulumda bir şey bozulmuş demektir. Ayrıca müşteri verisi gönderirken KVKK ve platformun veri kullanım şartları çerçevesinde hangi verileri hangi rıza ile ilettiğini netleştirmen gerekir.",
        },
        {
          q: "Ölçümü düzeltince satışlarım artacak mı?",
          a: "Raporlanan satışların artması beklenir; gerçek cironun artması garanti değildir. Meta'nın Additional Conversions Reported metriği adı üstünde raporlanan dönüşümlerdeki artışı tarif eder ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). Dolaylı bir performans faydası olabilir çünkü yayınlama sistemi daha eksiksiz sinyalle öğrenir — ama reklamın yarattığı gerçek farkı ölçmek için atıf raporu yetmez; Facebook verisiyle yapılan bir çalışma, gözlemsel yöntemlerin rastgele kontrollü deneylerin sonuçlarını çoğu zaman yeniden üretemediğini gösteriyor ([Gordon ve diğerleri, 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
        },
      ],
      sources: [
        {
          label: "Meta. Deduplicate Pixel and Server Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
          publisher: "Meta",
        },
        {
          label: "Meta. Dataset Quality API. Conversions API, Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/",
          publisher: "Meta",
        },
        {
          label: "Meta. Reference — Meta Pixel Standard Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/meta-pixel/reference/",
          publisher: "Meta",
        },
        {
          label: "Wilander, J. (2020). Full Third-Party Cookie Blocking and More. WebKit Blog, Apple.",
          url: "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/",
          publisher: "WebKit (Apple)",
        },
        {
          label: "Gordon, B. R., Zettelmeyer, F., Bhargava, N., & Chapsky, D. (2019). A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook. Marketing Science, 38(2), 193-225.",
          url: "https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135",
          publisher: "INFORMS Marketing Science",
        },
      ],
      tags: [
        "Meta Pixel",
        "Conversions API",
        "Ölçümleme",
        "Kozmetik",
      ],
    },
    en: {
      slug: "meta-pixel-measurement-errors-attribution",
      title: "Meta doesn't know which sale came from you",
      metaTitle: "Meta Pixel Measurement Errors: Missing Sales | Soleach",
      metaDescription: "Pixel installed but purchases missing from your reports? Event matching, deduplication and Conversions API coverage — where measurement breaks, with sources.",
      excerpt: "You installed the Pixel, ads are running, orders are coming in — but Meta doesn't know which sale came from it. How a misconfigured measurement setup quietly burns budget, and the five things to check in Meta's own documentation.",
      intro: [
        "The sentence we hear most often in a cosmetics brand's ad account: \"Orders are coming in but Meta isn't showing them.\" The reverse happens too — the dashboard reports 40 purchases while accounting shows 28.",
        "Both come from the same root. When Meta can't learn that a sale happened, or learns about the same sale twice, it isn't only your report that breaks. The delivery system learns whom to show ads to from that same data. Blind measurement isn't a reporting problem; it's an optimization problem.",
        "This article walks through exactly where measurement breaks, which metrics to look at, and what fixing it does and doesn't change — grounded in Meta's own developer documentation.",
      ],
      sections: [
        {
          h2: "Why can't Meta see some of your sales at all?",
          blocks: [
            {
              type: "p",
              text: "The classic Meta Pixel is a piece of JavaScript running in the browser. Whether a purchase event reaches Meta depends on the user's browser sending that request — and browsers have spent recent years being redesigned to restrict exactly this kind of request.",
            },
            {
              type: "p",
              text: "WebKit, the engine behind Safari, announced in 2020 that cookies for cross-site resources are blocked by default, and in the same update capped all script-writable storage — LocalStorage, IndexedDB, SessionStorage and Service Worker registrations among them — at seven days, deleting that data if the user doesn't interact with the site ([WebKit, 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)). Add ad blockers, network failures and checkout flows that never land on a thank-you page.",
            },
            {
              type: "p",
              text: "The result: purchases measured in the browser are always a subset of purchases that actually happened. Meta's answer is the server-side [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/) — sending the event from your own server instead of the user's browser. A correct setup today isn't \"Pixel or CAPI\"; it's both, working together and aware of each other.",
            },
          ],
        },
        {
          h2: "Where does measurement break even when the Pixel is installed?",
          blocks: [
            {
              type: "p",
              text: "Setup isn't a yes/no state, it's a quality scale. Meta's Dataset Quality documentation defines several independent metrics for the health of a dataset — all visible in Events Manager ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). In practice it breaks at these five points:",
            },
            {
              type: "h3",
              text: "1. The Purchase event arrives without a value",
            },
            {
              type: "p",
              text: "Meta's Pixel reference lists currency and value as required for the Purchase event ([Meta for Developers](https://developers.facebook.com/docs/meta-pixel/reference/)). If they're empty, Meta knows a sale happened but not how large it was — your ROAS math and value optimization have no ground to stand on. The same reference makes contents/content_ids required for Advantage+ catalogue ads on AddToCart and ViewContent; if you run catalogue ads, missing those fields means the format simply can't work.",
            },
            {
              type: "h3",
              text: "2. Server-side event coverage is low",
            },
            {
              type: "p",
              text: "\"Setting up\" the Conversions API isn't sending a single event from your server. Meta measures this as event coverage: the 7-day average percentage of Pixel events covered by Conversions API events sharing deduplication keys. The documentation's own example is clear: if an advertiser has ViewContent, AddToCart and Purchase but only sends Purchase from the server, event coverage is 33%. The same document treats 75% as the threshold ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "h3",
              text: "3. Match keys are weak",
            },
            {
              type: "p",
              text: "Event Match Quality (EMQ) is a score out of 10 indicating how effective the customer information sent from your server may be at matching event instances to a Meta account. Meta states it is calculated by looking at which customer information parameters are received, the quality of that information, and the percentage of event instances matched to a Meta account — and that high quality event matching may improve ads attribution and performance ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). Note the wording: Meta writes \"may improve\", not \"will improve\", and so do we.",
            },
            {
              type: "h3",
              text: "4. Events arrive late",
            },
            {
              type: "p",
              text: "Data freshness measures the delay between when an event occurred and when Meta received it. The Pixel defaults to real time; server-side setups that batch uploads daily are common. Meta recommends sharing events in real time or as close to real time as possible, and notes that events sent with a delay may impact how effectively ads can be delivered to the right audiences ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "h3",
              text: "5. Your server sends mismatched IP addresses",
            },
            {
              type: "p",
              text: "One of the diagnostics examples in the documentation is exactly this: a server sending client IP addresses that don't match those from the Meta Pixel — which, in Meta's own words, may impact the attribution and optimization of your ad campaigns. The recommended fix is to send the client_ip_address retrieved from customer interactions in your server payload. It's one of the details most often skipped when server-side setup is handed to a developer as a one-off task.",
            },
          ],
        },
        {
          h2: "What happens when the same sale is counted twice?",
          blocks: [
            {
              type: "p",
              text: "If you use the Pixel and the Conversions API for the same events, Meta receives the same purchase through two channels. Collapsing them into one requires deduplication — without it, you see inflated purchases that never happened.",
            },
            {
              type: "quote",
              text: "For an event to be deduplicated: a Facebook Pixel's eventID must match the conversion API's event_id, and a Facebook Pixel's event must match the conversion API's event_name.",
              cite: "Meta for Developers, Deduplicate Pixel and Server Events",
              citeUrl: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
            },
            {
              type: "p",
              text: "Three mechanics are worth knowing ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)):",
            },
            {
              type: "ul",
              items: [
                "If the same event_id + event_name combination reaches the same pixel ID a second time within 48 hours, the subsequent events are discarded. A copy arriving after that window counts as a separate event — so a server integration that uploads in a nightly batch can turn into double counting if the delay stretches.",
                "If the server and browser events arrive at approximately the same time (within 5 minutes of each other), Meta favours the browser event.",
                "Sending different events through different channels is also a legitimate setup: if you send Purchase via the Pixel and AddToCart via the Conversions API, you don't need to think about deduplication at all. The decision is which event goes through which channel.",
              ],
            },
            {
              type: "p",
              text: "On the Pixel side, eventID is passed as a fourth parameter to fbq('track', ...); Meta recommends including it in any setup running alongside the Conversions API ([Meta for Developers](https://developers.facebook.com/docs/meta-pixel/reference/)). The deduplication key feedback section in Events Manager shows what percentage of your browser and server events actually carry those keys — a low percentage there points straight back at the setup.",
            },
          ],
        },
        {
          h2: "Does fixing measurement actually increase reported sales?",
          blocks: [
            {
              type: "p",
              text: "Meta has a dedicated metric for this: Additional Conversions Reported (ACR). It's defined as a metric that helps you understand how much your business benefits from using the Conversions API alongside the Meta Pixel; Meta adds that more reported conversions can help decrease your cost per result and show your ads to people who find them relevant ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)).",
            },
            {
              type: "p",
              text: "Here's where honesty matters, because this is the most distorted metric in marketing content: ACR measures the increase in reported conversions. Sales that were already happening but that Meta couldn't see now become visible. That's less blindness, not more revenue. Seeing your purchase count rise after fixing measurement is the expected outcome — the money in your account that night hasn't changed.",
            },
            {
              type: "p",
              text: "The benefit is real but indirect: a more complete signal means the delivery system learns better whom to target. Whether and when that shows up in performance is neither immediate nor guaranteed.",
            },
          ],
        },
        {
          h2: "Is the sale in your report a sale your ad created?",
          blocks: [
            {
              type: "p",
              text: "Even with measurement working perfectly, one question remains open: would the sale Meta attributes to your ad have happened anyway? Attribution and incrementality are not the same thing.",
            },
            {
              type: "p",
              text: "The best-known academic evidence on this gap comes from Facebook's own data. Gordon, Zettelmeyer, Bhargava and Chapsky used 15 US advertising experiments at Facebook — 500 million user-experiment observations and 1.6 billion ad impressions — to contrast randomized controlled trial results with those from multiple observational models. The finding: the observational methods often failed to produce the same effects as the randomized experiments, even after conditioning on extensive demographic and behavioural variables ([Gordon et al., 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
            },
            {
              type: "p",
              text: "What that means in practice: fixing your measurement infrastructure makes the number you see counted correctly; it doesn't prove that number is the difference your ads made. At the point where you scale budget seriously, what you need isn't a better pixel — it's an experiment design (holdout tests, geo splits, branded search controls). On the creative side, we cover how to build that experiment and when to believe the winner in our piece on [testing five hooks](/en/blog/same-product-five-hooks-which-one-stops-the-scroll).",
            },
          ],
        },
        {
          h2: "What should a beauty brand check today?",
          blocks: [
            {
              type: "p",
              text: "An audit you can run in Events Manager in half an hour:",
            },
            {
              type: "ul",
              items: [
                "Place a test order with the Test Events tool: does the whole ViewContent → AddToCart → InitiateCheckout → Purchase chain fire?",
                "Are value and currency populated on Purchase — and does the value match the real cart total, or is it a fixed number with shipping and tax baked in?",
                "Deduplication key feedback: what percentage of your browser and server events carry event_id?",
                "Event coverage: how many events have a server-side counterpart, and where do you sit against the 75% threshold?",
                "EMQ: what's your score for Purchase, and which match keys are missing?",
                "Data freshness: are your server events real_time, or hourly/daily?",
                "Diagnostics: have the warnings — especially IP mismatch — been resolved?",
              ],
            },
            {
              type: "p",
              text: "Most of this belongs before you spend on ads. For the wider picture on the ads side, our [starter guide to Instagram advertising for beauty brands](/en/blog/instagram-ads-guide-for-beauty-brands) puts this setup in context; and since half of measurement breaks on the store side, see the [Shopify store setup guide for cosmetics brands](/en/blog/shopify-store-setup-for-cosmetics-brands) and our [web & e-commerce service](/en/services#web-ecommerce).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "If the Pixel is installed, do I still need the Conversions API?",
          a: "Browser-side measurement is structurally incomplete: WebKit, the engine behind Safari, blocks cross-site cookies by default and caps script-writable storage at seven days ([WebKit, 2020](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)). The Conversions API closes that gap by sending events from your server. If you run both for the same events, deduplication is mandatory; if you instead send different events through different channels, you don't need deduplication at all ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)).",
        },
        {
          q: "My dashboard shows more sales than my accounting does. Why?",
          a: "The most common technical cause is missing deduplication: the same purchase arrives from both the Pixel and the Conversions API and, because event_id doesn't match, gets counted as two events. Meta discards the second event when it receives the same event_id and event_name combination within 48 hours; a copy arriving outside that window counts separately ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/)). The second cause isn't technical: what Meta reports is the sales attributed to your ads within your chosen attribution window — it isn't measuring the same thing as your ledger.",
        },
        {
          q: "What should my Event Match Quality score be?",
          a: "Meta doesn't publish a passing grade; the score is out of 10 and depends on which customer information parameters you send, the quality of that information and the share of event instances matched ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). The useful approach is tracking your own trend rather than chasing an absolute number: the day the score drops, something in the setup broke. Also make sure you're clear on which customer data you transmit and under what consent, within applicable data protection law and the platform's data use terms.",
        },
        {
          q: "Will fixing measurement increase my sales?",
          a: "Expect reported sales to rise; actual revenue rising is not guaranteed. Meta's Additional Conversions Reported metric describes, as the name says, an increase in reported conversions ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/)). There may be an indirect performance benefit because the delivery system learns from a more complete signal — but an attribution report can't tell you the real difference your ads made; a study using Facebook's own data shows observational methods often fail to reproduce the results of randomized controlled trials ([Gordon et al., 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
        },
      ],
      sources: [
        {
          label: "Meta. Deduplicate Pixel and Server Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/",
          publisher: "Meta",
        },
        {
          label: "Meta. Dataset Quality API. Conversions API, Meta for Developers.",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api/",
          publisher: "Meta",
        },
        {
          label: "Meta. Reference — Meta Pixel Standard Events. Meta for Developers.",
          url: "https://developers.facebook.com/docs/meta-pixel/reference/",
          publisher: "Meta",
        },
        {
          label: "Wilander, J. (2020). Full Third-Party Cookie Blocking and More. WebKit Blog, Apple.",
          url: "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/",
          publisher: "WebKit (Apple)",
        },
        {
          label: "Gordon, B. R., Zettelmeyer, F., Bhargava, N., & Chapsky, D. (2019). A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook. Marketing Science, 38(2), 193-225.",
          url: "https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135",
          publisher: "INFORMS Marketing Science",
        },
      ],
      tags: [
        "Meta Pixel",
        "Conversions API",
        "Measurement",
        "Cosmetics",
      ],
    },
  },
};
