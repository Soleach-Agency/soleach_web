import type { BlogPost } from "@/lib/blog";

export const yapayZekaVideoReklamcilik: BlogPost = {
  id: "yapay-zeka-video-reklamcilik",
  publishedAt: "2026-07-21",
  category: "creative",
  locales: {
    tr: {
      slug: "yapay-zeka-ile-uretilen-videolar-reklamcilik",
      title: "Yapay zekâ ile üretilen videolar reklamda işe yarıyor mu?",
      metaTitle: "AI Videolar Reklamda İşe Yarıyor mu? | Soleach",
      metaDescription:
        "AI video üretiminin gerçek maliyeti, hız kazancı, halüsinasyon sınırları, tüketici güveni ve Ağustos 2026'da yürürlüğe giren etiketleme zorunlulukları — kaynaklarıyla.",
      excerpt:
        "Üretim maliyeti saniyesi sentlere düştü; asıl fatura seçim, doğrulama ve hukuki inceleme tarafında. Yapay zekâ videosunun nerede kazandırdığını, nerede risk ürettiğini kaynaklarla inceledik.",
      intro: [
        "Bir yıl önce \"yapay zekâ videosu\" demek, sekiz saniyelik, elleri altı parmaklı, izleyeni güldüren bir demo demekti. Bugün aynı teknoloji reklam platformlarının içine gömülü, saniyesi sentlerle fiyatlanan bir üretim aracı. Bu hızlı değişim iki yanlış refleks üretiyor: biri \"artık her şeyi AI ile çekeriz\", diğeri \"biz sahici marka olarak buna hiç girmeyiz\". İkisi de kararı gerçek verilerle değil, hisle veriyor.",
        "Bu yazı o kararı verilere bağlamak için yazıldı. Sırayla dört boyutu inceliyoruz: **fiyat** (gerçekten ne kadar ucuz ve gizli maliyeti ne), **zaman** (kazanç nerede gerçek, nerede yanılsama), **halüsinasyon** (modeller neyi hâlâ beceremiyor ve bu kozmetikte neden özel bir risk) ve **güven** (tüketici AI olduğunu öğrenince ne oluyor — hakemli araştırmalarla). Sonunda da işin en az konuşulan ama en bağlayıcı kısmı var: hem Türkiye'de hem Avrupa Birliği'nde etiketleme zorunlulukları **Ağustos 2026'da**, yani birkaç gün içinde yürürlüğe giriyor.",
      ],
      sections: [
        {
          h2: "Yapay zekâ videosu bugün gerçekte ne yapabiliyor?",
          blocks: [
            {
              type: "p",
              text: "Kısa cevap: görüntüyü çok iyi, fiziği hâlâ kısmen yapabiliyor. Modern metinden videoya modelleri ışığı, dokuyu, kamera hareketini ve artık sesi ikna edici biçimde üretiyor. Zorlandıkları yer görüntünün güzelliği değil, dünyanın kurallarına uyması: nesnelerin çarpışması, sıvının dökülmesi, kumaşın düşmesi, bir elin bir kavanozu gerçekten kavraması.",
            },
            {
              type: "p",
              text: "Bu, ölçülmüş bir sınır. UCLA ve Google araştırmacılarının geliştirdiği [VideoPhy kıyaslamasında](https://arxiv.org/abs/2406.03520) modellere katı-katı, katı-sıvı ve sıvı-sıvı etkileşimleri içeren komutlar verildi ve çıktılar insanlar tarafından değerlendirildi. Sonuç, o dönemin en iyi modelinde bile örneklerin yalnızca %39,6'sının hem verilen metne hem fizik kurallarına uyduğu yönündeydi. Devamı olan [VideoPhy-2 çalışması (Mart 2025)](https://arxiv.org/abs/2503.06800) 200 farklı eylem üzerinden daha zor bir test kurdu ve en iyi modelin zor alt kümede yalnızca %22 birleşik başarı (hem anlamsal uyum hem fiziksel tutarlılık) elde ettiğini raporladı.",
            },
            {
              type: "quote",
              text: "Our findings reveal major shortcomings, with even the best model achieving only 22% joint performance (i.e., high semantic and physical commonsense adherence) on the hard subset of VideoPhy-2.",
              cite: "Bansal ve ark., VideoPhy-2, 2025",
              citeUrl: "https://arxiv.org/abs/2503.06800",
            },
            {
              type: "p",
              text: "Bu rakamları bugünün modellerine doğrudan uyarlamak yanlış olur — her iki çalışma da yayımlandıkları tarihte erişilebilen modelleri ölçüyor ve o tarihten bu yana modeller belirgin biçimde ilerledi. Kendi taramamızda bugünkü modeller için aynı yöntemle yapılmış, insan değerlendirmeli güncel bir yayına ulaşamadık. Ama hata *türü* değişmedi: modeller ikna edici görüntü üretmekte, tutarlı bir dünya üretmekten daha iyi. Reklam açısından önemli olan da tam olarak bu ayrım.",
            },
            {
              type: "ul",
              items: [
                "İyi yaptığı: atmosfer, doku, soyut görsel, arka plan, geçiş, ürünün olmadığı duygusal sahneler.",
                "Zorlandığı: eller ve parmaklar, sıvı davranışı, uzun sahnede karakter tutarlılığı, ekrandaki yazı.",
                "En riskli olduğu: ürünün kendisi — ambalaj oranı, logo tipografisi, kapak mekanizması, ürünün ciltte gerçekte ne yaptığı.",
              ],
            },
          ],
        },
        {
          h2: "Fiyat gerçekten düşüyor mu?",
          blocks: [
            {
              type: "p",
              text: "Üretim maliyeti tarafında evet, çarpıcı biçimde. [Google'ın Gemini API fiyat sayfasına göre](https://ai.google.dev/gemini-api/docs/pricing) (sayfa 21 Temmuz 2026 tarihiyle güncellenmiş) Veo 3.1 ile sesli standart video üretimi 720p ve 1080p'de saniye başına 0,40 ABD doları, 4K'da 0,60 dolar; \"Fast\" sürümü 720p'de 0,10 dolar, \"Lite\" sürümü 720p'de 0,05 dolar. Bu fiyatlar üzerinden sekiz saniyelik tek bir plan, standart kalitede yaklaşık 3,20 dolara, Lite sürümünde yaklaşık 0,40 dolara üretiliyor (hesaplama bize ait, listelenen saniye ücretinin doğrudan çarpımı).",
            },
            {
              type: "p",
              text: "Bu sayı tek başına yanıltıcı. Çünkü bir reklam kreatifinin maliyeti üretim maliyeti değildir; **kullanılabilir** kreatifin maliyetidir. Yapay zekâ videosunda kabul oranı düşüktür: elin yanlış göründüğü, ambalajın deforme olduğu, ışığın markaya oturmadığı çıktılar elenir. On denemeden birini kullanıyorsan gerçek birim maliyetin on katıdır ve buna eleme işini yapan insanın saati de eklenir.",
            },
            {
              type: "ul",
              items: [
                "Görünen maliyet: saniye başına üretim ücreti — düşük ve öngörülebilir.",
                "Gizli maliyet 1: kabul oranı. Kullanılabilir tek plan için kaç üretim gerekti?",
                "Gizli maliyet 2: seçim ve inceleme emeği — çıktıları izleyip ayıklayan kişinin zamanı.",
                "Gizli maliyet 3: hukuki inceleme. Aşağıdaki etiketleme ve iddia bölümlerinde göreceğin gibi, bu artık isteğe bağlı bir adım değil.",
                "Gizli maliyet 4: marka tutarlılığı düzeltmesi — üretilen görüntüyü marka paletine, ambalaj gerçeğine ve kategori koduna oturtma işi.",
              ],
            },
            {
              type: "p",
              text: "Doğru karşılaştırma \"AI videosu mu, stüdyo çekimi mi ucuz\" değil. İkisi farklı işler yapıyor; bunu ayrı bir yazıda [stüdyo çekimine gerçekten ne zaman ihtiyacın olduğunu anlatırken](/tr/blog/studyo-cekimine-ihtiyaciniz-var-mi) ayrıntılandırdık. Yapay zekâ videosu, stüdyo çekiminin yerini almaktan çok, daha önce hiç üretemediğin varyasyonları üretilebilir kılıyor — asıl ekonomik etkisi orada.",
            },
          ],
        },
        {
          h2: "Zaman kazancı nerede gerçek, nerede yanılsama?",
          blocks: [
            {
              type: "p",
              text: "Gerçek kazanç iterasyonda, yanılsama ise \"tek seferde bitmiş iş\" beklentisinde. Bir fikri görselleştirmek, bir açılışın işe yarayıp yaramayacağını görmek, aynı mesajın beş farklı görsel dilini yan yana koymak — bunlar eskiden gün alırdı, şimdi dakikalar alıyor. Reklam sistemleri kreatif çeşitliliğiyle öğrendiği için bu doğrudan performansa dokunan bir kazanç.",
            },
            {
              type: "p",
              text: "Yanılsama ise şu: üretim süresi kısalırken karar süresi kısalmıyor. Onay döngüsü (marka, hukuk, gerekiyorsa ruhsat/mevzuat kontrolü) aynı hızda ilerliyor; hatta AI çıktısı söz konusu olduğunda uzuyor, çünkü doğrulanması gereken yeni sorular ekleniyor: bu yüz gerçek bir kişiye benziyor mu, bu ambalaj bizim ambalajımız mı, bu sahne bir etki iddiası mı? Ekiplerin çoğu üretimi 10 kat hızlandırıp onayı hızlandırmadığı için toplam süre beklendiği kadar düşmüyor.",
            },
            {
              type: "p",
              text: "Bunu bir istatistikle destekleyemiyoruz — sektörde bu döngüyü ölçen, güvenilir ve bağımsız bir yayın bulamadık ve tahmini rakam uydurmak bu yazının kuralına aykırı. Ama mekanizma açık ve kendi süreçlerinde test edilebilir: üretim süresini değil, brief'ten yayına geçen toplam süreyi ölç. Kazanç oradaysa gerçektir.",
            },
          ],
        },
        {
          h2: "Videoda \"halüsinasyon\" ne demek ve kozmetikte neden daha tehlikeli?",
          blocks: [
            {
              type: "p",
              text: "Metinde halüsinasyon uydurulmuş bir olgudur; videoda ise gerçekte var olmayan bir *gerçeklik* üretilmesidir. Modelin ürettiği sahne, dünyanın kuralları ya da senin ürününün gerçeği ile uyuşmayabilir — ve görüntü ne kadar ikna ediciyse hata o kadar geç fark edilir. Yukarıdaki VideoPhy bulguları bunun ölçülmüş hâli.",
            },
            {
              type: "p",
              text: "Kozmetikte iki katman daha var. Birincisi ürün doğruluğu: yapay zekâ senin şişeni değil, \"şişe fikrini\" üretir. Ambalaj oranı kayar, logo tipografisi bozulur, pompa mekanizması gerçekte olmayan bir biçime dönüşür. Tüketici bunu bilinçli olarak fark etmese bile, eline geçen ürünle reklamdaki ürün arasındaki uyumsuzluk iade ve güven kaybı olarak geri döner.",
            },
            {
              type: "p",
              text: "İkincisi ve daha ciddisi: **sonuç göstermek**. Yapay zekâ, cildin sekiz saatte nasıl değiştiğini \"gösterebilir\" — ama bu gösterim hiçbir ölçüme dayanmaz; modelin istatistiksel tahmininden ibarettir. Kozmetik mevzuatında görsel bir iddiadır ve iddianın kanıtlanması gerekir. Bunu aşağıda ayrı bir bölümde ele alıyoruz, çünkü yapay zekâ videosunun kozmetikte tek gerçek kırmızı çizgisi burası.",
            },
            {
              type: "ul",
              items: [
                "Üretilen her karede ürünü gerçek referans görselle yan yana koyup kontrol et (ambalaj, oran, logo, kapak).",
                "Ürünün ciltte/saçta ne yaptığını gösteren hiçbir sahneyi modele ürettirme — bunu ancak gerçek çekim ve gerçek kanıt karşılayabilir.",
                "Eli, tırnağı, kirpiği ve ekrandaki yazıyı özellikle denetle; modellerin en tutarsız olduğu alanlar bunlar.",
                "Kalabalık, ayna, su ve saç gibi \"fizik yoğun\" sahnelerde hata olasılığı yükselir; bu sahneleri gerçek çekimde tut.",
              ],
            },
          ],
        },
        {
          h2: "Tüketici bir reklamın yapay zekâ ile üretildiğini öğrenince ne oluyor?",
          blocks: [
            {
              type: "p",
              text: "Araştırmalar tek yönlü değil ama ağırlık olumsuz tarafta. [Koning ve Voorveld'in 2025 tarihli deneysel çalışması](https://doi.org/10.1080/15252019.2025.2554149) (Journal of Interactive Advertising, N = 304), üretken yapay zekâ ile hazırlanmış bir reklamda AI açıklaması bulunmasının etkisini ölçtü. Sonuç iki yönlüydü: açıklama, katılımcıların kavramsal AI bilgisini ve tutumsal ikna bilgisini artırdı; bu da reklama ve kuruma duyulan güveni **düşürdü**. Aynı çalışmada ters yönde bir yol da bulundu — açıklamanın tutumsal ikna bilgisini artırması, bir kanaldan güveni yükseltti.",
            },
            {
              type: "quote",
              text: "The results showed that AI disclosures increased conceptual AI knowledge and attitudinal persuasion knowledge, resulting in a decrease in trust towards the advertisement and organization. However, a positive effect of AI disclosures was also found…",
              cite: "Koning & Voorveld, Journal of Interactive Advertising, 2025",
              citeUrl: "https://doi.org/10.1080/15252019.2025.2554149",
            },
            {
              type: "p",
              text: "İkinci bir çalışma benzer yöne işaret ediyor. [Baek, Kim ve Kim'in International Journal of Advertising'de yayımlanan araştırmasında](https://doi.org/10.1080/02650487.2024.2401319) yapay zekâ ile üretilmiş içeriğin açıklanması, reklama yönelik olumsuz tutumla ilişkilendi ve bu ilişkide algılanan reklam güvenilirliği aracı rol oynadı. Aynı araştırmanın ikinci çalışması, yapay zekâyı \"makinemsi\" değil \"insansı\" olarak algılayan katılımcılarda bu olumsuz etkinin zayıfladığını buldu. Sınırını da yazalım: bu çalışma prososyal (bağış/kâr amacı gütmeyen) reklam bağlamında yürütüldü; kozmetik e-ticaretine birebir aktarılamaz.",
            },
            {
              type: "p",
              text: "Dikkat çekici olan, iki çalışmanın da aynı teorik çerçeveyi kullanması: İkna Bilgisi Modeli. Yani AI açıklaması, tüketicinin \"bu beni ikna etmeye çalışıyor\" refleksini tetikleyen bir sinyal olarak çalışıyor — [UGC'nin neden daha çok sattığını anlattığımız yazıdaki](/tr/blog/ugc-neden-studyo-cekiminden-cok-satiyor) mekanizmanın tam tersi yönde. Kullanıcı içeriği bu refleksi uyandırmadığı için kazanıyorsa, yapay zekâ etiketi de aynı refleksi uyandırdığı için kaybettiriyor.",
            },
            {
              type: "p",
              text: "Buradan çıkan doğru sonuç \"o hâlde etiketleme\" değil — bir sonraki bölümde göreceğin gibi etiketlemek çoğu durumda artık yasal zorunluluk. Doğru sonuç şu: yapay zekâyı, açıklandığında değeri düşecek bir yerde kullanma. Duygusal bir arka plan sahnesinde AI kullandığını söylemek reklamın ikna gücünü zedelemez; bir \"müşteri deneyimi\" anlatısında söylemek anlatının tamamını çökertir.",
            },
          ],
        },
        {
          h2: "Yapay zekâ ile üretilen reklamı etiketlemek zorunda mısın?",
          blocks: [
            {
              type: "p",
              text: "Türkiye'de ve Avrupa Birliği'nde, birçok durumda evet — ve ikisi de birkaç gün içinde yürürlüğe giriyor. [T.C. Ticaret Bakanlığı'nın duyurusuna göre](https://ticaret.gov.tr/haberler/ticaret-bakanligi-tarafindan-ticari-reklam-ve-haksiz-ticari-uygulamalar-yonetmeliginde-yapilan-degisikliklerle-tuketicilerin-aldatici-reklam-ve-ticari-uygulamalara-karsi-korunmasi-guclendiriliyor) Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği'nde 1 Temmuz 2026 tarihli ve 33297 sayılı Resmî Gazete ile yapılan değişiklikler **1 Ağustos 2026'da** yürürlüğe giriyor. Bakanlığın kendi ifadesiyle, reklamlarda yapay zekâ teknolojileri kullanılarak insandan ayırt edilemeyecek dijital karakterlere yer verilmesi hâlinde bu durumun açık, anlaşılır ve ayırt edilebilir şekilde belirtilmesi zorunlu; ayrıca gerçek bir kişinin yapay zekâ ile oluşturulan dijital kopyasının, bir ürünü gerçekten deneyimlemiş ya da tavsiye ediyormuş izlenimi verecek biçimde kullanılması yasaklanıyor.",
            },
            {
              type: "p",
              text: "Avrupa Birliği tarafında [Yapay Zekâ Tüzüğü'nün (AB) 2024/1689 50. maddesi](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689) **2 Ağustos 2026'da** uygulanmaya başlıyor. Madde iki ayrı yükümlülük getiriyor: sağlayıcılar sentetik ses, görüntü, video veya metin üreten sistemlerin çıktılarını makine tarafından okunabilir biçimde işaretlemek zorunda; kullananlar (deployer) ise derin kurgu (deep fake) niteliğindeki içeriği açıklamakla yükümlü.",
            },
            {
              type: "quote",
              text: "Deployers of an AI system that generates or manipulates image, audio or video content constituting a deep fake, shall disclose that the content has been artificially generated or manipulated.",
              cite: "Regulation (EU) 2024/1689, Article 50(4)",
              citeUrl: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
            },
            {
              type: "p",
              text: "Mevzuatın üstüne bir de platform katmanı var ve o zaten yürürlükte. [Meta'nın kendi açıklamasına göre](https://www.meta.com/help/artificial-intelligence/355108217670024/) reklamlarda \"AI info\" bilgisi normalde reklamın sağ üst köşesindeki üç nokta menüsünde görünür; ancak görselde **yapay zekâ ile üretilmiş fotogerçekçi bir insan** varsa etiket doğrudan \"Sponsorlu\" ibaresinin yanına çıkar. Meta ayrıca üçüncü taraf araçlarla üretilen reklamların bu otomatik etiketlemeye girmediğini, sosyal konu/seçim/siyaset reklamlarında ise açıklamanın zaten reklamverenin yükümlülüğü olduğunu belirtiyor.",
            },
            {
              type: "ul",
              items: [
                "YouTube: [gerçekçi biçimde değiştirilmiş veya sentetik içerik](https://support.google.com/youtube/answer/14328491) — gerçek bir kişiye yapmadığı bir şeyi yaptırmak, gerçek bir olayı değiştirmek ya da gerçekleşmemiş gerçekçi bir sahne üretmek — yükleme sırasında beyan edilmeli; güzellik filtreleri, renk düzeltmesi, senaryo yazımı gibi yardımcı kullanımlar muaf.",
                "TikTok: [platformun kendi açıklamasına göre](https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy) gerçekçi AI içeriğinin etiketlenmesi bir yılı aşkın süredir zorunlu; TikTok ayrıca C2PA Content Credentials verisini okuyarak başka platformlarda üretilen içeriği otomatik etiketlemeye ve kendi içeriğine bu veriyi iliştirmeye başladı.",
                "Meta: AI info etiketi; fotogerçekçi insan içeren reklamda görünür etiket.",
                "Bunların hiçbiri mevzuatın yerine geçmez — platform uyumu ile hukuki uyum iki ayrı yükümlülüktür.",
              ],
            },
            {
              type: "p",
              text: "Teknik altyapı da olgunlaşıyor. [C2PA (Coalition for Content Provenance and Authenticity)](https://c2pa.org/), içeriğin kökenini ve düzenleme geçmişini kaydeden açık bir teknik standart sunuyor; kendi tanımıyla Content Credentials \"dijital içerik için bir besin değeri etiketi\" gibi çalışıyor ve yönlendirme komitesinde Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI gibi kurumlar yer alıyor. Google tarafında ise [SynthID](https://deepmind.google/models/synthid/), üretim anında görüntü, ses, metin ve videoya gözle görülmeyen bir filigran gömüyor; kırpma, filtre, kare hızı değişikliği ve kayıplı sıkıştırma gibi işlemlere dayanacak şekilde tasarlandığı belirtiliyor.",
            },
          ],
        },
        {
          h2: "Kozmetikte yapay zekâ videosu hangi noktada hukuki riske dönüşür?",
          blocks: [
            {
              type: "p",
              text: "Ürünün etkisini gösterdiği anda. Kozmetik mevzuatı iddiayı metinle sınırlamıyor: kozmetik ürün iddialarının doğrulanmasına ilişkin ortak kriterleri belirleyen [(AB) 655/2013 sayılı Tüzük](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R0655), kapsamına metinlerin yanı sıra **resimleri** ve mecazi işaretleri de alıyor — kullanılan mecra fark etmeksizin. Aynı tüzüğün dürüstlük kriteri net: bir ürünün performansının sunumu, mevcut destekleyici kanıtın ötesine geçemez. Türkiye'de karşılığı, Kozmetik Ürünler Yönetmeliği'ne dayanan [TİTCK Kozmetik Ürünlerin İddialarına İlişkin Kılavuzu](https://www.titck.gov.tr/duyuru/kozmetik-firmalarinin-dikkatine-09062023113236) ve aynı ortak kriter seti.",
            },
            {
              type: "p",
              text: "Bunun yapay zekâ videosuna çevirisi keskin: model, elinde hiçbir ölçüm olmadan \"dört haftada cilt tonu eşitleniyor\" görüntüsü üretebilir. Görüntü ikna edici olduğu ölçüde iddia güçlüdür; kanıt ise yoktur. Bu, teknik bir kusur değil doğrudan bir mevzuat ihlali riskidir — ve model \"iyileştikçe\" risk azalmaz, artar, çünkü daha inandırıcı bir kanıtsız iddia üretir.",
            },
            {
              type: "p",
              text: "İkinci kırmızı çizgi sahte tanıklık. [ABD Federal Ticaret Komisyonu'nun 14 Ağustos 2024'te duyurduğu nihai kural](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials), var olmayan bir kişiye ait olduğu izlenimi veren yorum ve tanıklıkları — kurulun kendi ifadesiyle \"AI-generated fake reviews\" örneğini açıkça anarak — yasaklıyor ve bilerek ihlal edenlere idari para cezası yolunu açıyor. Türkiye tarafında da yukarıda belirtildiği gibi, gerçek bir kişinin AI ile üretilmiş dijital kopyasının ürünü deneyimlemiş gibi gösterilmesi 1 Ağustos 2026'dan itibaren yasak.",
            },
            {
              type: "p",
              text: "Yani \"yapay zekâ ile bir müşteri yorumu videosu üretelim\" fikri, iki ayrı hukuk düzeninde de doğrudan yasak bölgede. Bu, güzellik markaları için en cazip ve en tehlikeli AI kullanımı; cazip çünkü [UGC](/tr/kavramlar/ugc) üretmenin en yorucu kısmını atlıyor, tehlikeli çünkü tam olarak yasaklanmış davranışın tarifi.",
            },
          ],
        },
        {
          h2: "Peki nerede kullanmalı, nerede kullanmamalı?",
          blocks: [
            {
              type: "p",
              text: "Ayrım şurada: yapay zekâyı **hayal gücünün** olduğu yerde kullan, **kanıtın** olması gereken yerde kullanma. Görsel bir dünya, bir atmosfer, bir duygu, bir soyutlama üretiyorsan model iyi bir araç. Ürünün ne olduğunu ya da ne yaptığını gösteriyorsan, o karenin gerçek olması gerekir.",
            },
            {
              type: "h3",
              text: "Yapay zekânın gerçekten değer kattığı yerler",
            },
            {
              type: "ul",
              items: [
                "Kavram görselleştirme ve storyboard: çekimden önce fikri görmek, ekibi hizalamak, pahalı yanlış kararı erken elemek.",
                "Arka plan, atmosfer ve soyut sahneler: ürünün merkezde olmadığı, iddia taşımayan görsel dokular.",
                "Varyasyon üretimi: aynı mesajın farklı görsel dillerini test etmek — reklam sistemleri çeşitlilikle öğrenir.",
                "Formatlama ve uyarlama: mevcut çekimi farklı en-boy oranlarına ve mecralara uyarlamak (platformların kendi araçları bu işi zaten yapıyor).",
                "Yerelleştirme: altyazı, seslendirme ve metin varyasyonları — görüntüye dokunmadan.",
              ],
            },
            {
              type: "h3",
              text: "Kullanmaman gereken yerler",
            },
            {
              type: "ul",
              items: [
                "Ürünün kendisini gösteren kareler: ambalaj, doku, renk, ölçek — bunlar kontrollü çekimin işi.",
                "Etki/sonuç gösterimi: önce-sonra, cilt değişimi, hacim artışı, dökülme azalması — kanıt olmadan görsel iddia üretilemez.",
                "Müşteri tanıklığı ve kullanıcı deneyimi anlatısı — hem yasak hem de ölçülen güven avantajını yok eden kullanım.",
                "Gerçek bir kişinin yüzü, sesi ya da benzerini üreten her şey (izin ve mevzuat ayrı ayrı sorun çıkarır).",
                "Şeffaflık iddiası taşıyan markalar için görünür ana kreatif — konumlandırmanla çelişen araç seçme.",
              ],
            },
            {
              type: "p",
              text: "Son bir uyarı: yapay zekâ videosunun asıl maliyeti bütçe kalemi değil, güven kalemi. Bir tüketici senin reklamındaki bir sahnenin sahte olduğunu fark ettiğinde, o sahneyi değil markanın tamamını yeniden değerlendirir. Yukarıdaki araştırmalar da tam olarak bunu ölçüyor: kaybedilen yalnızca reklamın güvenilirliği değil, kurumun güvenilirliği.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Yapay zekâ ile üretilen reklamı etiketlemek zorunda mıyım?",
          a: "Türkiye'de 1 Ağustos 2026'dan itibaren, reklamda insandan ayırt edilemeyecek yapay zekâ karakteri kullanıyorsan bunu açık ve ayırt edilebilir şekilde belirtmen zorunlu; gerçek bir kişinin dijital kopyasını ürünü deneyimlemiş gibi göstermek ise yasak. AB'de Yapay Zekâ Tüzüğü'nün 50. maddesi 2 Ağustos 2026'da uygulanmaya başlıyor. Ayrıca Meta, YouTube ve TikTok'un kendi beyan kuralları hâlihazırda yürürlükte.",
        },
        {
          q: "Etiketlersem reklamın performansı düşer mi?",
          a: "Araştırmalar açıklamanın güven üzerinde ağırlıklı olarak olumsuz etki ürettiğini gösteriyor: Koning ve Voorveld'in 2025 tarihli deneyinde AI açıklaması, ikna bilgisini artırarak hem reklama hem kuruma duyulan güveni düşürdü (aynı çalışmada ters yönlü bir yol da bulundu). Doğru tepki etiketi gizlemek değil — bu artık yasal risk — yapay zekâyı açıklandığında değeri düşmeyecek yerlerde kullanmak.",
        },
        {
          q: "AI ile ürün fotoğrafı veya videosu üretebilir miyim?",
          a: "Ürünün kendisini gösteren kareler için önerilmez. Modeller senin ambalajını değil ambalaj fikrini üretir; oran, logo tipografisi ve kapak mekanizması kayar. Pazaryeri ana görselleri zaten gerçek ürünün doğru temsilini şart koşuyor. Ürünü gösteren kare kontrollü çekimin, atmosfer ve arka plan yapay zekânın işidir.",
        },
        {
          q: "Yapay zekâ videosu gerçekten ucuz mu?",
          a: "Üretim ücreti düşük: Google'ın Gemini API fiyat listesine göre Veo 3.1 ile sesli standart video 720p/1080p'de saniyesi 0,40 dolar, Lite sürümü 720p'de 0,05 dolar. Ama gerçek maliyet kullanılabilir kreatifin maliyetidir — kaç denemede bir kullanılabilir çıktı aldığın, eleme emeği ve hukuki inceleme eklendiğinde tablo değişir.",
        },
        {
          q: "Yapay zekâ ile müşteri yorumu videosu üretmek neden bu kadar riskli?",
          a: "Çünkü iki ayrı hukuk düzeninde açıkça yasak. ABD'de FTC'nin 2024 tarihli nihai kuralı, var olmayan bir kişiye ait izlenimi veren yorum ve tanıklıkları — AI ile üretilmiş sahte yorumları açıkça anarak — yasaklıyor. Türkiye'de ise gerçek bir kişinin AI ile üretilmiş dijital kopyasının ürünü deneyimlemiş gibi gösterilmesi 1 Ağustos 2026'dan itibaren yasak.",
        },
        {
          q: "Modeller gelişince bu sorunların hepsi çözülür mü?",
          a: "Teknik sorunların bir kısmı çözülür — fizik tutarlılığı ve el/metin hataları her sürümde azalıyor. Ama iki sorun teknolojiyle çözülmez: kanıtı olmayan bir etki iddiası, görüntü ne kadar gerçekçi olursa olsun kanıtsız kalır; ve etiketleme yükümlülüğü modelin kalitesine bağlı değildir. Model iyileştikçe bu iki risk azalmaz, büyür.",
        },
      ],
      sources: [
        {
          label:
            "Bansal, H., Lin, Z., Xie, T., Zong, Z., Yarom, M., Bitton, Y., Jiang, C., Sun, Y., Chang, K.-W., & Grover, A. (2024). VideoPhy: Evaluating Physical Commonsense for Video Generation. arXiv:2406.03520.",
          url: "https://arxiv.org/abs/2406.03520",
          publisher: "arXiv",
        },
        {
          label:
            "Bansal, H., Peng, C., Bitton, Y., Goldenberg, R., Grover, A., & Chang, K.-W. (2025). VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation. arXiv:2503.06800.",
          url: "https://arxiv.org/abs/2503.06800",
          publisher: "arXiv",
        },
        {
          label:
            "Koning, B., & Voorveld, H. A. M. (2025). Disclaimer! This Content Is AI-Generated: How AI-Disclosures Influence Trust in Advertisements and Organizations. Journal of Interactive Advertising, 25(3), 240–253.",
          url: "https://doi.org/10.1080/15252019.2025.2554149",
          publisher: "Journal of Interactive Advertising",
        },
        {
          label:
            "Baek, T. H., Kim, J., & Kim, J. H. (2026). Effect of disclosing AI-generated content on prosocial advertising evaluation. International Journal of Advertising, 45(1), 171–192.",
          url: "https://doi.org/10.1080/02650487.2024.2401319",
          publisher: "International Journal of Advertising",
        },
        {
          label:
            "Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (AI Act), Article 50.",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
          publisher: "EUR-Lex / Avrupa Birliği",
        },
        {
          label:
            "T.C. Ticaret Bakanlığı. (2026). Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliğinde yapılan değişiklikler (01.07.2026 tarihli ve 33297 sayılı Resmî Gazete; yürürlük 01.08.2026).",
          url: "https://ticaret.gov.tr/haberler/ticaret-bakanligi-tarafindan-ticari-reklam-ve-haksiz-ticari-uygulamalar-yonetmeliginde-yapilan-degisikliklerle-tuketicilerin-aldatici-reklam-ve-ticari-uygulamalara-karsi-korunmasi-guclendiriliyor",
          publisher: "T.C. Ticaret Bakanlığı",
        },
        {
          label:
            "Federal Trade Commission. (2024, 14 Ağustos). Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials.",
          url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
          publisher: "U.S. Federal Trade Commission",
        },
        {
          label:
            "Commission Regulation (EU) No 655/2013 laying down common criteria for the justification of claims used in relation to cosmetic products.",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R0655",
          publisher: "EUR-Lex / Avrupa Komisyonu",
        },
        {
          label:
            "T.C. Sağlık Bakanlığı TİTCK. Kozmetik Ürünlerin İddialarına İlişkin Kılavuz.",
          url: "https://www.titck.gov.tr/duyuru/kozmetik-firmalarinin-dikkatine-09062023113236",
          publisher: "TİTCK",
        },
        {
          label: "Google. Gemini Developer API pricing (Veo modelleri).",
          url: "https://ai.google.dev/gemini-api/docs/pricing",
          publisher: "Google",
        },
        {
          label:
            "Meta. How AI-generated images in ads are identified and labeled on Meta. Meta Help Center.",
          url: "https://www.meta.com/help/artificial-intelligence/355108217670024/",
          publisher: "Meta",
        },
        {
          label:
            "YouTube. Disclosing use of altered or synthetic content. YouTube Help.",
          url: "https://support.google.com/youtube/answer/14328491",
          publisher: "YouTube",
        },
        {
          label:
            "TikTok. (2024, 9 Mayıs). Partnering with our industry to advance AI transparency and literacy. TikTok Newsroom.",
          url: "https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy",
          publisher: "TikTok",
        },
        {
          label:
            "Coalition for Content Provenance and Authenticity (C2PA). Providing Origins of Media Content.",
          url: "https://c2pa.org/",
          publisher: "C2PA",
        },
        {
          label: "Google DeepMind. SynthID.",
          url: "https://deepmind.google/models/synthid/",
          publisher: "Google DeepMind",
        },
      ],
      tags: [
        "Yapay zekâ",
        "Video üretimi",
        "Reklam mevzuatı",
        "Kreatif strateji",
        "Güven",
      ],
    },
    en: {
      slug: "ai-generated-video-in-advertising",
      title: "Do AI-generated videos actually work in advertising?",
      metaTitle: "Does AI Video Work in Advertising? | Soleach",
      metaDescription:
        "The real cost of AI video, where the time saving is illusory, what models still hallucinate, how consumers react, and the labelling rules landing in August 2026.",
      excerpt:
        "Generation now costs cents per second; the real invoice lands in selection, verification and legal review. A sourced look at where AI video pays off and where it manufactures risk.",
      intro: [
        "A year ago \"AI video\" meant an eight-second demo with six-fingered hands that made people laugh. Today the same technology is embedded inside ad platforms and priced in cents per second. That speed of change produces two bad reflexes: \"we'll generate everything with AI now\" and \"we're an authentic brand, we'll never touch it\". Both decide on instinct rather than evidence.",
        "This piece is an attempt to put that decision on data. We work through four dimensions in turn: **price** (how cheap is it really, and what does it hide), **time** (where the saving is real and where it's an illusion), **hallucination** (what models still can't do, and why that's a specific risk in cosmetics) and **trust** (what happens when consumers learn it's AI — with peer-reviewed research). Then the least-discussed and most binding part: labelling obligations in both Türkiye and the EU take effect in **August 2026** — days from now.",
      ],
      sections: [
        {
          h2: "What can AI video actually do today?",
          blocks: [
            {
              type: "p",
              text: "Short answer: images very well, physics still only partly. Modern text-to-video models produce convincing light, texture, camera movement and now audio. Where they struggle isn't beauty — it's obeying the rules of the world: objects colliding, liquid pouring, fabric falling, a hand genuinely gripping a jar.",
            },
            {
              type: "p",
              text: "This is a measured limit. In [the VideoPhy benchmark](https://arxiv.org/abs/2406.03520), built by UCLA and Google researchers, models were prompted with solid–solid, solid–fluid and fluid–fluid interactions and the outputs were assessed by human evaluators. Even the best model of that period produced videos adhering to both the caption and physical law in only 39.6% of instances. The follow-up, [VideoPhy-2 (March 2025)](https://arxiv.org/abs/2503.06800), built a harder test across 200 distinct actions and reported the best model achieving only 22% joint performance — both semantic adherence and physical commonsense — on the hard subset.",
            },
            {
              type: "quote",
              text: "Our findings reveal major shortcomings, with even the best model achieving only 22% joint performance (i.e., high semantic and physical commonsense adherence) on the hard subset of VideoPhy-2.",
              cite: "Bansal et al., VideoPhy-2, 2025",
              citeUrl: "https://arxiv.org/abs/2503.06800",
            },
            {
              type: "p",
              text: "Transposing those numbers directly onto today's models would be wrong — both studies measure the models available at their publication date, and models have improved noticeably since. In our own search we found no equivalent, human-evaluated published result for current models. But the *class* of failure hasn't changed: models are better at producing a convincing image than a consistent world. For advertising, that distinction is the whole point.",
            },
            {
              type: "ul",
              items: [
                "Does well: atmosphere, texture, abstract visuals, backgrounds, transitions, emotional scenes without the product in them.",
                "Struggles with: hands and fingers, liquid behaviour, character consistency across a long scene, on-screen text.",
                "Riskiest at: the product itself — packaging proportions, logo typography, closure mechanisms, and what the product actually does on skin.",
              ],
            },
          ],
        },
        {
          h2: "Is it really cheaper?",
          blocks: [
            {
              type: "p",
              text: "On generation cost, yes — dramatically. [Per Google's Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) (updated 21 July 2026), standard video with audio on Veo 3.1 costs $0.40 per second at 720p and 1080p and $0.60 at 4K; the Fast tier is $0.10 per second at 720p and the Lite tier $0.05 at 720p. On those rates a single eight-second shot costs roughly $3.20 at standard quality, or about $0.40 on Lite (our arithmetic, a direct multiple of the listed per-second rate).",
            },
            {
              type: "p",
              text: "That number alone is misleading, because the cost of an ad creative isn't the cost of generation — it's the cost of a **usable** creative. Acceptance rates for AI video are low: outputs where the hand looks wrong, the packaging deforms or the light doesn't sit with the brand get discarded. If you use one attempt in ten, your true unit cost is ten times the listed rate, plus the hours of the person doing the discarding.",
            },
            {
              type: "ul",
              items: [
                "Visible cost: the per-second generation fee — low and predictable.",
                "Hidden cost 1: acceptance rate. How many generations for one usable shot?",
                "Hidden cost 2: selection and review labour — the time of whoever watches and filters the output.",
                "Hidden cost 3: legal review. As the labelling and claims sections below show, this is no longer an optional step.",
                "Hidden cost 4: brand-consistency correction — fitting the generated image to your palette, your actual packaging and your category codes.",
              ],
            },
            {
              type: "p",
              text: "The right comparison isn't \"is AI video cheaper than a studio shoot\". They do different jobs — we set that out separately in [when you genuinely need a studio photoshoot](/en/blog/do-you-need-a-studio-photoshoot). AI video's real economic effect is less about replacing production than about making variations possible that you previously couldn't produce at all.",
            },
          ],
        },
        {
          h2: "Where is the time saving real, and where is it an illusion?",
          blocks: [
            {
              type: "p",
              text: "The real gain is in iteration; the illusion is expecting finished work in one pass. Visualising an idea, seeing whether an opening lands, putting five visual treatments of the same message side by side — these used to take days and now take minutes. Because ad systems learn through creative variation, that gain touches performance directly.",
            },
            {
              type: "p",
              text: "The illusion is this: generation time shrinks while decision time doesn't. The approval loop — brand, legal, and where relevant regulatory review — moves at the same pace, and with AI output it often lengthens, because new questions get added: does this face resemble a real person, is this our packaging, is this scene making an efficacy claim? Most teams speed up generation tenfold without speeding up approval, so total time falls far less than expected.",
            },
            {
              type: "p",
              text: "We can't back that with a statistic — we found no reliable independent publication measuring this cycle, and inventing an estimate would violate this article's own rule. But the mechanism is clear and testable inside your own process: measure not generation time but total brief-to-live time. If the gain is there, it's real.",
            },
          ],
        },
        {
          h2: "What does \"hallucination\" mean in video, and why is it worse in cosmetics?",
          blocks: [
            {
              type: "p",
              text: "In text, a hallucination is a fabricated fact; in video it's a fabricated *reality*. The scene a model produces may not match the rules of the world, or the truth of your product — and the more convincing the image, the later the error gets caught. The VideoPhy findings above are that failure, measured.",
            },
            {
              type: "p",
              text: "In cosmetics there are two extra layers. First, product accuracy: a model doesn't generate your bottle, it generates the idea of a bottle. Proportions drift, logo typography degrades, a pump becomes a mechanism that doesn't exist. Even if the consumer doesn't consciously register it, the gap between the advertised product and the one that arrives comes back as returns and lost trust.",
            },
            {
              type: "p",
              text: "Second, and more serious: **showing a result**. AI can \"show\" how skin changes over eight hours — but that depiction rests on no measurement at all; it's the model's statistical guess. Under cosmetics regulation it is a visual claim, and claims must be substantiated. We treat that separately below, because it is AI video's one genuine red line in this category.",
            },
            {
              type: "ul",
              items: [
                "Check every generated frame against a real reference of the product (packaging, proportion, logo, closure).",
                "Never let a model generate a scene showing what the product does on skin or hair — only real footage plus real evidence can carry that.",
                "Scrutinise hands, nails, lashes and on-screen text specifically; these are where models are least consistent.",
                "Physics-heavy scenes — crowds, mirrors, water, hair — raise the error rate; keep those in real production.",
              ],
            },
          ],
        },
        {
          h2: "What happens when consumers learn an ad was AI-generated?",
          blocks: [
            {
              type: "p",
              text: "The research isn't one-directional, but the weight sits on the negative side. [Koning and Voorveld's 2025 experiment](https://doi.org/10.1080/15252019.2025.2554149) (Journal of Interactive Advertising, N = 304) measured the effect of an AI disclosure on an ad created with generative AI. The result cut both ways: the disclosure raised participants' conceptual AI knowledge and attitudinal persuasion knowledge, which **decreased** trust in both the advertisement and the organisation. The same study also found an opposing path, where the disclosure's effect on attitudinal persuasion knowledge increased trust.",
            },
            {
              type: "quote",
              text: "The results showed that AI disclosures increased conceptual AI knowledge and attitudinal persuasion knowledge, resulting in a decrease in trust towards the advertisement and organization. However, a positive effect of AI disclosures was also found…",
              cite: "Koning & Voorveld, Journal of Interactive Advertising, 2025",
              citeUrl: "https://doi.org/10.1080/15252019.2025.2554149",
            },
            {
              type: "p",
              text: "A second study points the same way. In [Baek, Kim and Kim's research in the International Journal of Advertising](https://doi.org/10.1080/02650487.2024.2401319), disclosing AI-generated content was associated with unfavourable attitudes toward the ad, with perceived ad credibility mediating the relationship. Their second study found the negative effect weakened among participants who perceived AI as more human-like than machine-like. The limit is worth stating: this work was conducted in a prosocial (nonprofit/donation) advertising context and doesn't transfer one-to-one to beauty e-commerce.",
            },
            {
              type: "p",
              text: "What's striking is that both studies use the same theoretical frame: the Persuasion Knowledge Model. An AI disclosure functions as a signal that triggers the consumer's \"this is trying to persuade me\" reflex — the exact inverse of the mechanism in [our piece on why UGC outsells studio content](/en/blog/why-ugc-outsells-studio-content). If user content wins because it doesn't wake that reflex, an AI label loses because it does.",
            },
            {
              type: "p",
              text: "The correct conclusion isn't \"so don't disclose\" — as the next section shows, disclosure is now a legal obligation in many cases. The correct conclusion is: don't use AI where disclosing it destroys the value. Saying you used AI for an emotional background scene costs the ad almost nothing; saying it about a \"customer experience\" narrative collapses the narrative entirely.",
            },
          ],
        },
        {
          h2: "Are you required to label an AI-generated ad?",
          blocks: [
            {
              type: "p",
              text: "In Türkiye and the EU, in many cases yes — and both regimes start within days of each other. [Per the Turkish Ministry of Trade's announcement](https://ticaret.gov.tr/haberler/ticaret-bakanligi-tarafindan-ticari-reklam-ve-haksiz-ticari-uygulamalar-yonetmeliginde-yapilan-degisikliklerle-tuketicilerin-aldatici-reklam-ve-ticari-uygulamalara-karsi-korunmasi-guclendiriliyor), amendments to the Regulation on Commercial Advertising and Unfair Commercial Practices, published in the Official Gazette of 1 July 2026 (No. 33297), take effect on **1 August 2026**. In the Ministry's own terms, where an ad features AI-generated digital characters indistinguishable from humans, this must be stated clearly, understandably and distinguishably; and using an AI-generated digital copy of a real person in a way that suggests they actually tried or recommend a product is prohibited.",
            },
            {
              type: "p",
              text: "On the EU side, [Article 50 of the AI Act, Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689), applies from **2 August 2026**. It imposes two distinct duties: providers of systems generating synthetic audio, image, video or text must ensure outputs are marked in a machine-readable format and detectable as artificially generated; deployers must disclose content constituting a deep fake.",
            },
            {
              type: "quote",
              text: "Deployers of an AI system that generates or manipulates image, audio or video content constituting a deep fake, shall disclose that the content has been artificially generated or manipulated.",
              cite: "Regulation (EU) 2024/1689, Article 50(4)",
              citeUrl: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
            },
            {
              type: "p",
              text: "On top of the law sits a platform layer that is already live. [Per Meta's own documentation](https://www.meta.com/help/artificial-intelligence/355108217670024/), \"AI info\" normally appears in the three-dot menu at the top right of an ad — but where the image includes an **AI-generated photorealistic human**, the label appears next to the \"Sponsored\" label instead. Meta also notes that ads created or modified with third-party AI tools don't receive this automatic labelling, and that for ads about social issues, elections or politics disclosure is already the advertiser's own obligation.",
            },
            {
              type: "ul",
              items: [
                "YouTube: [realistically altered or synthetic content](https://support.google.com/youtube/answer/14328491) — making a real person appear to say or do something they didn't, altering footage of a real event, or generating a realistic scene that never occurred — must be disclosed at upload; beauty filters, colour adjustment and production assistance like scripts are exempt.",
                "TikTok: [per the platform's own announcement](https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy), labelling realistic AIGC has been required for over a year; TikTok also began reading C2PA Content Credentials to auto-label content made elsewhere, and attaching those credentials to TikTok content.",
                "Meta: the AI info label, surfaced visibly on ads containing photorealistic AI humans.",
                "None of these substitute for the law — platform compliance and legal compliance are two separate obligations.",
              ],
            },
            {
              type: "p",
              text: "The technical infrastructure is maturing too. [C2PA, the Coalition for Content Provenance and Authenticity](https://c2pa.org/), offers an open technical standard recording a piece of content's origin and edit history; in its own words Content Credentials work \"like a nutrition label for digital content\", with Adobe, Amazon, BBC, Google, Meta, Microsoft and OpenAI on its steering committee. On Google's side, [SynthID](https://deepmind.google/models/synthid/) embeds an imperceptible watermark into images, audio, text and video at the moment of generation, described as designed to survive cropping, filters, frame-rate changes and lossy compression.",
            },
          ],
        },
        {
          h2: "At what point does AI video become a legal risk in cosmetics?",
          blocks: [
            {
              type: "p",
              text: "The moment it shows the product working. Cosmetics regulation doesn't limit claims to text: [Regulation (EU) No 655/2013](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R0655), which sets the common criteria for justifying cosmetic claims, covers **pictures** and figurative signs alongside text, whatever the medium. Its honesty criterion is unambiguous: presentations of a product's performance shall not go beyond the available supporting evidence. In Türkiye the counterpart is [TİTCK's Guide on Claims for Cosmetic Products](https://www.titck.gov.tr/duyuru/kozmetik-firmalarinin-dikkatine-09062023113236), applying the same set of common criteria.",
            },
            {
              type: "p",
              text: "Translated to AI video, that's sharp: a model can generate footage of \"even skin tone in four weeks\" with no measurement behind it whatsoever. The more convincing the image, the stronger the claim — and the evidence still doesn't exist. That's not a technical flaw but a direct regulatory exposure, and it doesn't shrink as models improve. It grows, because the unsubstantiated claim becomes more believable.",
            },
            {
              type: "p",
              text: "The second red line is fabricated testimony. [The US Federal Trade Commission's final rule, announced 14 August 2024](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials), prohibits reviews and testimonials that misrepresent being by someone who does not exist — explicitly naming AI-generated fake reviews — and opens the door to civil penalties against knowing violators. In Türkiye, as noted above, presenting an AI-generated digital copy of a real person as having used a product is prohibited from 1 August 2026.",
            },
            {
              type: "p",
              text: "So \"let's generate a customer testimonial video with AI\" sits squarely in prohibited territory under two separate legal regimes. It's the most tempting and most dangerous AI use for beauty brands: tempting because it skips the hardest part of producing UGC, dangerous because it is a precise description of the prohibited conduct.",
            },
          ],
        },
        {
          h2: "So where should you use it, and where shouldn't you?",
          blocks: [
            {
              type: "p",
              text: "The line runs here: use AI where **imagination** belongs, and don't use it where **evidence** belongs. If you're producing a visual world, an atmosphere, a feeling, an abstraction, the model is a good tool. If you're showing what the product is or what it does, that frame has to be real.",
            },
            {
              type: "h3",
              text: "Where AI genuinely adds value",
            },
            {
              type: "ul",
              items: [
                "Concept visualisation and storyboards: see the idea before the shoot, align the team, kill expensive wrong decisions early.",
                "Backgrounds, atmosphere and abstract scenes: visual texture where the product isn't central and no claim is carried.",
                "Variation generation: testing different visual treatments of the same message — ad systems learn through diversity.",
                "Reformatting and adaptation: fitting existing footage to other aspect ratios and placements (platform-native tools already do this).",
                "Localisation: subtitles, voice-over and text variants — without touching the footage.",
              ],
            },
            {
              type: "h3",
              text: "Where you shouldn't",
            },
            {
              type: "ul",
              items: [
                "Frames showing the product itself: packaging, texture, colour, scale — that's controlled photography's job.",
                "Efficacy or result demonstrations: before-and-after, skin change, added volume, reduced shedding — no visual claim without evidence.",
                "Customer testimonials and user-experience narratives — both prohibited and destructive of the very trust advantage you're after.",
                "Anything generating a real person's face, voice or likeness (permissions and regulation each create separate problems).",
                "The visible hero creative for a brand whose positioning rests on transparency — don't pick a tool that contradicts your own claim.",
              ],
            },
            {
              type: "p",
              text: "One closing caution: AI video's real cost isn't a budget line, it's a trust line. When a consumer notices that a scene in your ad is fake, they don't re-evaluate the scene — they re-evaluate the brand. That is precisely what the research above measures: what's lost isn't only the credibility of the advertisement, but the credibility of the organisation.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Do I have to label an AI-generated ad?",
          a: "In Türkiye, from 1 August 2026, if your ad features an AI character indistinguishable from a human you must state so clearly and distinguishably; presenting an AI-generated digital copy of a real person as having used a product is prohibited. In the EU, Article 50 of the AI Act applies from 2 August 2026. Meta, YouTube and TikTok's own disclosure rules are already in force.",
        },
        {
          q: "Will disclosing hurt the ad's performance?",
          a: "Research shows disclosure mostly reduces trust: in Koning and Voorveld's 2025 experiment, an AI disclosure raised persuasion knowledge and lowered trust in both the ad and the organisation (the same study also found an opposing path). The right response isn't to hide the label — that's now a legal risk — but to use AI where disclosure doesn't destroy the value.",
        },
        {
          q: "Can I generate product photos or video with AI?",
          a: "Not for frames showing the product itself. Models don't generate your packaging, they generate the idea of packaging; proportions, logo typography and closure mechanisms drift. Marketplace main images already require an accurate representation of the real product. The product frame is controlled photography's job; atmosphere and background are AI's.",
        },
        {
          q: "Is AI video actually cheap?",
          a: "The generation fee is low: per Google's Gemini API pricing, standard video with audio on Veo 3.1 is $0.40 per second at 720p/1080p, and the Lite tier $0.05 at 720p. But the real cost is the cost of a usable creative — once you factor in how many generations it takes to get one, the filtering labour and legal review, the picture changes.",
        },
        {
          q: "Why is generating a customer testimonial with AI so risky?",
          a: "Because it's explicitly prohibited under two separate legal regimes. In the US, the FTC's 2024 final rule bans reviews and testimonials that misrepresent being by someone who does not exist, naming AI-generated fake reviews directly. In Türkiye, presenting an AI-generated digital copy of a real person as having used a product is prohibited from 1 August 2026.",
        },
        {
          q: "Won't better models solve all of this?",
          a: "Some of it — physical consistency and hand/text errors shrink with each release. But two problems don't yield to technology: an efficacy claim without evidence stays unsubstantiated no matter how photorealistic the footage, and labelling obligations don't depend on model quality. As models improve, those two risks grow rather than shrink.",
        },
      ],
      sources: [
        {
          label:
            "Bansal, H., Lin, Z., Xie, T., Zong, Z., Yarom, M., Bitton, Y., Jiang, C., Sun, Y., Chang, K.-W., & Grover, A. (2024). VideoPhy: Evaluating Physical Commonsense for Video Generation. arXiv:2406.03520.",
          url: "https://arxiv.org/abs/2406.03520",
          publisher: "arXiv",
        },
        {
          label:
            "Bansal, H., Peng, C., Bitton, Y., Goldenberg, R., Grover, A., & Chang, K.-W. (2025). VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation. arXiv:2503.06800.",
          url: "https://arxiv.org/abs/2503.06800",
          publisher: "arXiv",
        },
        {
          label:
            "Koning, B., & Voorveld, H. A. M. (2025). Disclaimer! This Content Is AI-Generated: How AI-Disclosures Influence Trust in Advertisements and Organizations. Journal of Interactive Advertising, 25(3), 240–253.",
          url: "https://doi.org/10.1080/15252019.2025.2554149",
          publisher: "Journal of Interactive Advertising",
        },
        {
          label:
            "Baek, T. H., Kim, J., & Kim, J. H. (2026). Effect of disclosing AI-generated content on prosocial advertising evaluation. International Journal of Advertising, 45(1), 171–192.",
          url: "https://doi.org/10.1080/02650487.2024.2401319",
          publisher: "International Journal of Advertising",
        },
        {
          label:
            "Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (AI Act), Article 50.",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689",
          publisher: "EUR-Lex / European Union",
        },
        {
          label:
            "Republic of Türkiye Ministry of Trade. (2026). Amendments to the Regulation on Commercial Advertising and Unfair Commercial Practices (Official Gazette No. 33297 of 1 July 2026; in force 1 August 2026).",
          url: "https://ticaret.gov.tr/haberler/ticaret-bakanligi-tarafindan-ticari-reklam-ve-haksiz-ticari-uygulamalar-yonetmeliginde-yapilan-degisikliklerle-tuketicilerin-aldatici-reklam-ve-ticari-uygulamalara-karsi-korunmasi-guclendiriliyor",
          publisher: "Republic of Türkiye Ministry of Trade",
        },
        {
          label:
            "Federal Trade Commission. (2024, August 14). Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials.",
          url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
          publisher: "U.S. Federal Trade Commission",
        },
        {
          label:
            "Commission Regulation (EU) No 655/2013 laying down common criteria for the justification of claims used in relation to cosmetic products.",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R0655",
          publisher: "EUR-Lex / European Commission",
        },
        {
          label:
            "TİTCK (Turkish Medicines and Medical Devices Agency). Guide on Claims for Cosmetic Products.",
          url: "https://www.titck.gov.tr/duyuru/kozmetik-firmalarinin-dikkatine-09062023113236",
          publisher: "TİTCK",
        },
        {
          label: "Google. Gemini Developer API pricing (Veo models).",
          url: "https://ai.google.dev/gemini-api/docs/pricing",
          publisher: "Google",
        },
        {
          label:
            "Meta. How AI-generated images in ads are identified and labeled on Meta. Meta Help Center.",
          url: "https://www.meta.com/help/artificial-intelligence/355108217670024/",
          publisher: "Meta",
        },
        {
          label:
            "YouTube. Disclosing use of altered or synthetic content. YouTube Help.",
          url: "https://support.google.com/youtube/answer/14328491",
          publisher: "YouTube",
        },
        {
          label:
            "TikTok. (2024, May 9). Partnering with our industry to advance AI transparency and literacy. TikTok Newsroom.",
          url: "https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy",
          publisher: "TikTok",
        },
        {
          label:
            "Coalition for Content Provenance and Authenticity (C2PA). Providing Origins of Media Content.",
          url: "https://c2pa.org/",
          publisher: "C2PA",
        },
        {
          label: "Google DeepMind. SynthID.",
          url: "https://deepmind.google/models/synthid/",
          publisher: "Google DeepMind",
        },
      ],
      tags: [
        "Artificial intelligence",
        "Video production",
        "Advertising regulation",
        "Creative strategy",
        "Trust",
      ],
    },
  },
};
