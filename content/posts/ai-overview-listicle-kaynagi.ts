import type { BlogPost } from "@/lib/blog";

export const aiOverviewListicleKaynagi: BlogPost = {
  id: "ai-overview-listicle-kaynagi",
  publishedAt: "2026-08-29",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "ai-overview-kaynagi-senin-siten-degil-listicle",
      title: "AI Overview, AI Mode'a açılırken markan görünür mü?",
      metaTitle: "AI Overview ve AI Mode Görünürlüğü | Soleach",
      metaDescription: "Google AI Overview bazı sorgularda AI Mode akışına genişliyor. Kozmetik markaları kaynak görünürlüğünü ve Search Console verisini nasıl okumalı?",
      excerpt: "Google bazı sorgularda AI Overview'ı daha dolu bir yanıta ve AI Mode takip kutusuna genişletiyor. Kozmetik markaları için mesele artık yalnızca sıralama değil; hangi kaynakla, hangi yüzeyde ve hangi dilde göründüğünü ölçmek.",
      intro: [
        "Google'ın AI Overview yüzeyi, bazı sorgularda kısa bir özet olmaktan çıkıp AI Mode'a açılan daha uzun bir cevap hâline geliyor. 28 Ağustos 2026 tarihli bir gözlemde tam yanıtın ve “Ask anything” takip kutusunun varsayılan olarak açıldığı, klasik organik sonuçların sayfada aşağı itildiği görüldü; Google bunun bazı sorgularda dinamik olarak genişleyen bir test olduğunu söyledi ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)).",
        "Bu gelişme, bu yazının ilk sorusunu ortadan kaldırmıyor; büyütüyor. AI cevabında kaynak senin siten yerine üçüncü taraf bir listicle olabilir, kaynak gösterildiğin hâlde önerilmeyebilirsin ve kullanıcı takip sorusuna geçtiğinde yeni bir kaynak kümesiyle karşılaşabilir.",
        "Bu güncellemede yerel AI Overview ve listicle bulgularını koruyor; yeni AI Overview–AI Mode geçişini, Search Console'daki üretken yapay zekâ raporunu ve kozmetik markalarının hangi görünürlük sinyallerini birlikte izlemesi gerektiğini ekliyoruz.",
      ],
      sections: [
        {
          h2: "Google AI Overview neden AI Mode'a doğru genişliyor?",
          blocks: [
            {
              type: "p",
              text: "Google AI Overview, bazı sorgularda kullanıcı “Daha fazla göster” düğmesine basmadan daha uzun bir yanıt ve açık bir takip kutusu gösterecek şekilde dinamik olarak genişleyebiliyor. Search Engine Roundtable'ın 28 Ağustos 2026 tarihli testinde bu düzen organik bağlantıları sayfada daha aşağı taşıdı; Google sözcüsü genişlemenin yalnızca sistemlerin yararlı bulduğu konularda gerçekleştiğini belirtti ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)).",
            },
            {
              type: "p",
              text: "Takip sorusunun AI Overview'dan AI Mode'a akması yeni değil: Google, 27 Ocak 2026'da kullanıcıların AI Overview içinden bağlamı koruyarak AI Mode sohbetine geçebildiğini küresel mobil deneyim için duyurdu ([Google (2026)](https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/)). Ağustos testi, bu geçişi bazı sorgularda daha görünür ve varsayılan hâle getiriyor; bunun kalıcı ve tüm sorgulara açık bir dağıtım olduğu ise açıklanmış değil.",
            },
            {
              type: "p",
              text: "Kozmetik markası için etkisi özellikle karşılaştırma sorgularında belirgin olabilir: “hassas cilt için güneş kremi” gibi bir arama, tek bir sonuç listesinden takip sorularıyla ilerleyen bir araştırma oturumuna dönüşebilir. Google, AI Overview ve AI Mode'un birden fazla alt sorgu çalıştıran “query fan-out” tekniğini kullanabildiğini ve iki yüzeyin farklı yanıtlar ile bağlantılar gösterebildiğini açıklıyor ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/ai-features)).",
            },
          ],
        },
        {
          h2: "Google'ın yerel AI Overview'ları tam olarak ne yapıyor?",
          blocks: [
            {
              type: "p",
              text: "Google, yerel aramalarda zaman zaman AI Overview gösteriyor ve gösterdiğinde işletmeler için yapay zekâ üretimi özetler ekleyebiliyor. Gözlemlenen sorun, bu özetlerin işletmenin kendi sitesi yerine düşük kaliteli ve kendini öven listicle içeriklerini kaynak gösterebilmesi ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html)).",
            },
            {
              type: "quote",
              text: "Google is quoting a single lawyer's self-promoting listicle for every law firm listed here and is using it as the primary source for this entire list, linking to it instead of the law firms' websites.",
              cite: "Joy Hawkins, aktaran Barry Schwartz / Search Engine Roundtable (2026)",
              citeUrl: "https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html",
            },
            {
              type: "p",
              text: "Pratik sonuç şu: kullanıcı markan hakkında bir özet okuyabilir ama tıkladığında senin sitene değil, üçüncü taraf bir değerlendirme sayfasına gidebilir. AI Overview varsayılan olarak uzadığında bu kaynak seçimi daha geniş bir ekran alanını etkiler; kullanıcı AI Mode'a geçtiğinde ise bağlantı kümesi yeniden değişebilir.",
            },
          ],
        },
        {
          h2: "Bu yalnızca yerel aramalarda mı oluyor?",
          blocks: [
            {
              type: "p",
              text: "Hayır. Lily Ray, Nisan-Haziran 2026 arasında üç tarihte 100 adet B2B “en iyi [kategori] yazılımı” sorgusunu inceledi. AI Overview oluşturan 80 sorguda markaların kendi kendini öven listicle'ları 323 kez kaynak gösterildi ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)).",
            },
            {
              type: "p",
              text: "Bu 323 vakanın 224'ünde — %69'unda — Google markanın sayfasını kaynak gösterdi ama markayı önermedi. “Kurs satmak için en iyi LMS” sorgusunda Oasis LMS'in yazısı kaynak olurken öneriler Kajabi, Thinkific, LearnWorlds ve Teachable oldu; bunların tümü Oasis'in yazısında anılıyordu ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)).",
            },
            {
              type: "p",
              text: "Bu çalışma B2B yazılım sorgularıyla sınırlı; kozmetik kategorisindeki oranı göstermez. Yine de ölçüm açısından önemli ayrımı kurar: markanın sayfasının kaynak olarak görünmesi, markanın cevapta önerildiği anlamına gelmez. Kozmetik sorgularında bu iki sonucu ayrı kaydetmek gerekir.",
            },
          ],
        },
        {
          h2: "Kendi 'en iyiyiz' listeni yazmak neden riskli hale geldi?",
          blocks: [
            {
              type: "p",
              text: "Kendi blogunda “en iyi X” yazısı yayınlayıp kendini ilk sıraya koymak, kısa vadede AI görünürlüğü üretebilse de uzun vadeli bir temel değil. Lily Ray'in Şubat 2026 tarihli gözlemsel incelemesinde bu taktiği yoğun kullanan örnek sitelerde organik görünürlük kaybı %29 ile %49 arasında değişti ve kaybın büyük bölümü listicle'ların bulunduğu blog ya da kaynak bölümlerinde görüldü ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)).",
            },
            {
              type: "p",
              text: "Bu düşüşler Aralık 2025 çekirdek güncellemesi sonrasındaki oynaklıkla aynı döneme denk geldi. Ray ayrıca etkilenen sitelerde yapay zekâyla ölçeklenmiş düşük kaliteli içerik, şablon sayfalar ve yapay tarih yenilemeleri gibi başka taktiklerin de bulunduğunu açıkça belirtiyor ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)).",
            },
            {
              type: "p",
              text: "Dolayısıyla bu veri “listicle doğrudan ceza getirir” sonucunu kanıtlamaz. Güvenli çıkarım daha dardır: gerçek kullanım kanıtı, şeffaf yöntem ve bağımsız değerlendirme sunmayan seri üretim öz-övgü sayfaları; kullanıcıya özgün değer sağlayan içerikten daha kırılgan bir stratejidir.",
            },
          ],
        },
        {
          h2: "Türkçe pazarda AI Overview tablosu nasıl farklı?",
          blocks: [
            {
              type: "p",
              text: "İngilizce görünürlük, Türkçe AI Overview görünürlüğünün vekili değil. GEO araç sağlayıcısı CiteLens, aynı 444 ticari soruyu İngilizce ve Türkçe çalıştırdığında iki dilde kaynak gösterilen domainlerin ortalama örtüşmesini %22 ölçtü; AI Overview görülme oranı İngilizcede %96, Türkçede %94 oldu ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)).",
            },
            {
              type: "p",
              text: "Bu bağımsız akademik bir çalışma değil; kendi ürününü sunan bir sağlayıcının araştırması. Buna karşılık kapsamı ve yöntemi açıklanıyor: 444 ticari soru, İngilizce için gl=us/hl=en, Türkçe için gl=tr/hl=tr ve domain kümeleri arasında Jaccard benzerliği ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)).",
            },
            {
              type: "p",
              text: "Kozmetik markası için operasyonel sonuç net: Türkçe ve İngilizce sorguları aynı raporda eritme. Her dilde hangi sayfanın kaynak gösterildiğini, markanın önerilip önerilmediğini ve takip sorusunun AI Mode'da hangi yeni kaynaklara açıldığını ayrı örnekle.",
            },
          ],
        },
        {
          h2: "AI Overview ve AI Mode görünürlüğü nasıl ölçülür?",
          blocks: [
            {
              type: "p",
              text: "AI Overview ve AI Mode görünürlüğünü, Search Console verisiyle düzenli ve aynı sorgu setiyle yapılan manuel gözlemi birlikte kullanarak ölç. Google'ın Haziran 2026'da duyurduğu Üretken Yapay Zekâ Performans raporu; AI Overview ve AI Mode içindeki organik gösterimleri, görünen sayfaları, ülkeleri, cihazları ve tarih eğilimini sunuyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).",
            },
            {
              type: "p",
              text: "Rapor hâlâ yalnızca belirli site sahiplerine kademeli olarak açılıyor. Yardım dokümanına göre erişim yoksa neden, mülkün henüz dağıtıma alınmaması veya yeterli üretken yapay zekâ gösterimi almaması olabilir; desteklenen yüzeyler AI Overview ve AI Mode'dur ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Search Console'da rapora erişimin varsa AI gösterimlerini sayfa, ülke, cihaz ve tarih kırılımında izle; lansman, PR ve içerik güncelleme tarihlerini ayrı not et.",
                "Aylık sabit bir Türkçe ve İngilizce sorgu örneklemi oluştur. Her sorguda AI Overview'ın açılıp açılmadığını, hangi kaynakların göründüğünü, markanın kaynak mı öneri mi olduğunu ve AI Mode takip sorusunun sonucu nasıl değiştirdiğini kaydet.",
                "AI yüzeyindeki gösterimi iş sonucuyla karıştırma. Search Console'daki görünürlük eğilimini, Analytics'teki oturum kalitesi ve dönüşüm verisiyle birlikte değerlendir.",
                "Rapor erişimin yoksa bunu sıfır görünürlük diye yorumlama; aynı sorgu seti ve ekran kayıtlarıyla geçici bir gözlem serisi kur.",
              ],
            },
          ],
        },
        {
          h2: "Kozmetik markası AI Overview ve AI Mode için ne yapmalı?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik markası için öncelik, AI'ya özel bir hile aramak değil; indekslenebilir ürün ve kategori sayfaları, özgün uzmanlık, güncel işletme/ürün verisi ve bağımsız olarak doğrulanabilen içerik üretmektir. Google'ın Temmuz 2026 rehberi, üretken AI yüzeyleri için temel SEO'nun geçerli olduğunu; ayrı “AI metin dosyaları”, yapay mention ağları veya her fan-out sorgusu için seri sayfa üretmenin gerekmediğini söylüyor ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Ürün karşılaştırmalarında seçim ölçütünü açıkla; içerik gerçekten deneyime dayanıyorsa yöntemi, test koşulunu ve sınırlamayı göster. Kendini otomatik olarak birinci sıraya koyan şablon listeler üretme.",
                "Google Business Profile ve Merchant Center verilerini güncel tut. Google, yerel işletme ve ürün bilgilerinin üretken AI yanıtlarında kullanılabildiğini belirtiyor ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
                "Bağımsız editoryal görünürlük için gerçek ürün gönderimleri, uzman görüşleri ve doğrulanabilir kullanıcı deneyimleri geliştir; ücretli veya yönlendirilmiş ilişkileri gizleme.",
                "Türkçe ve İngilizce görünürlüğü ayrı izle. [GEO rehberimiz](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) marka bilgisinin üretken motorlar için nasıl düzenleneceğini adım adım anlatıyor.",
                "Aylık raporda dört ayrı sütun tut: klasik organik sonuç, AI Overview kaynağı, AI Overview önerisi ve AI Mode takip yanıtı. Böylece tek bir 'AI görünürlüğü' puanı altında farklı davranışları gizlemezsin.",
              ],
            },
            {
              type: "p",
              text: "Özetle: daha uzun AI Overview, kullanıcıya daha çok cevap verirken klasik bağlantıları aşağı taşıyabilir; aynı zamanda daha fazla kaynak yüzeyi açabilir. Kazanılacak şey yalnızca bir citation değil, doğru bağlamda kaynak olma, önerilme ve bu görünürlüğün iş sonucuna bağlanmasıdır.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Google tüm AI Overview'ları otomatik olarak AI Mode'a mı çeviriyor?",
          a: "Hayır. Google, bazı sorgularda AI Overview'ın sistemlerce yararlı görüldüğünde dinamik genişleyebildiğini söylüyor; Search Engine Roundtable'ın 28 Ağustos 2026 gözlemi de bu sınırlı davranışı gösteriyor ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)). Kalıcı ve tüm sorguları kapsayan bir dağıtım açıklanmadı.",
        },
        {
          q: "AI Overview ve AI Mode verisini Search Console'da görebilir miyim?",
          a: "Kademeli olarak. Google'ın Üretken Yapay Zekâ Performans raporu AI Overview ve AI Mode gösterimlerini; sayfa, ülke, cihaz ve tarih kırılımlarını sunuyor, ancak yalnızca belirli site sahiplerine açılmış durumda ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Rapor yokluğu tek başına sıfır görünürlük anlamına gelmez.",
        },
        {
          q: "Kendi blogumda 'en iyi biz' listesi yazmayı tamamen bırakmalı mıyım?",
          a: "Yasak değil; fakat tek strateji hâline getirmek riskli. Ray'in gözlemsel örneklerinde bu taktiği yoğun kullanan siteler başka kalite sorunlarıyla birlikte %29-%49 görünürlük kaybı yaşadı ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)). Gerçek karşılaştırma verisi ve şeffaf yöntem içeren az sayıda sayfa, yüzlerce şablon öz-övgü listesiyle aynı değildir.",
        },
        {
          q: "Kaynak gösterilmek ile önerilmek aynı şey mi?",
          a: "Hayır. Lily Ray'in 100 B2B yazılım sorgusunu kapsayan çalışmasında marka sayfaları 323 kez kaynak gösterildi; 224 vakada marka önerilmedi ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)). Bu oran kozmetiğe genellenemez, fakat raporlamada citation ve recommendation'ı ayrı tutma gereğini gösterir.",
        },
        {
          q: "İngilizce içerikte görünüyorsam Türkçe için ayrıca çalışmalı mıyım?",
          a: "Evet. CiteLens'in 444 ticari sorguluk araştırmasında Türkçe ve İngilizce AI Overview'ların kaynak domain örtüşmesi %22 oldu ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)). Araştırma bir araç sağlayıcısına ait olduğu için sınırlamasını not et; yine de iki dili ayrı ölçmek için güçlü bir operasyonel gerekçe sunuyor.",
        },
        {
          q: "Yerel AI Overview'da işletme bilgilerimi nasıl korurum?",
          a: "Google Business Profile ve ilgili dizinlerde kategori, adres, çalışma saatleri ve hizmet bilgilerini tutarlı tut. Google'ın güncel rehberi, Business Profile ve Merchant Center verilerinin hem üretken AI yanıtlarında hem diğer Search sonuçlarında görünürlüğe yardımcı olabileceğini belirtiyor ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
        },
        {
          q: "AI görünürlüğünde ne kadar sürede sonuç alırım?",
          a: "Garanti yok. İndeksleme, içerik kalitesi, üçüncü taraf yayınlar ve sorgunun AI Overview üretip üretmemesi birlikte etkili olur. Başarıyı tek bir anlık sorguyla değil; sabit bir Türkçe/İngilizce örneklemde kaynak, öneri, gösterim ve site içi dönüşüm eğilimleriyle değerlendirmek gerekir.",
        },
      ],
      sources: [
        {
          label: "Schwartz, B. (2026, 28 Ağustos). Google AI Overviews Pushing Searchers Into AI Mode, Drops Show More Button. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Google. (2026, 27 Ocak). Just ask anything: a seamless new Search experience. The Keyword.",
          url: "https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025, 10 Aralık). AI features and your website.",
          url: "https://developers.google.com/search/docs/appearance/ai-features",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, 12 Ağustos). Google AI Overview Local Results Pulling From Low-Quality Listicles. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Goodwin, D. (2026, 18 Haziran). Google AI Overviews cite self-serving listicles, but recommend competitors 69% of the time. Search Engine Land.",
          url: "https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573",
          publisher: "Search Engine Land",
        },
        {
          label: "Ray, L. (2026, 3 Şubat). Is Google Finally Cracking Down on Self-Promotional Listicles?",
          url: "https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on",
          publisher: "Lily Ray (Substack)",
        },
        {
          label: "Tekin, A. (2026, 21 Haziran). Türkçe vs İngilizce: AI Neredeyse Tamamen Farklı Kaynakları Cite Ediyor. CiteLens Research Lab.",
          url: "https://citelens.ai/tr/research/turkish-vs-english-ai-answers",
          publisher: "CiteLens (Solustiq)",
        },
        {
          label: "Maoz, H., & Samet, M. (2026, 3 Haziran). Introducing Search Generative AI performance reports in Search Console. Google Search Central Blog.",
          url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Generative AI performance report (Search).",
          url: "https://support.google.com/webmasters/answer/16984139?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026, 10 Temmuz). Optimizing your website for generative AI features on Google Search.",
          url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en",
          publisher: "Google",
        },
      ],
      tags: [
        "GEO",
        "AI Overviews",
        "AI Mode",
        "Search Console",
        "Yerel SEO",
        "İçerik stratejisi",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "ai-overviews-cite-listicles-not-your-site",
      title: "Will your brand stay visible as AI Overviews expand?",
      metaTitle: "AI Overview and AI Mode Visibility | Soleach",
      metaDescription: "Google AI Overviews can expand into AI Mode for some queries. Learn how beauty brands should track sources, impressions and organic search visibility.",
      excerpt: "Google is expanding some AI Overviews into fuller answers with an open AI Mode follow-up box. For beauty brands, the question is no longer just rank: it is which source appears, on which surface, and in which language.",
      intro: [
        "Google's AI Overview surface is shifting from a short summary toward a fuller answer that can flow into AI Mode for some queries. In an observation published on August 28, 2026, the full response and “Ask anything” box appeared by default and pushed classic organic results further down the page; Google said this was a dynamic test for some queries ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)).",
        "That change does not replace this article's original question; it makes it larger. The source in an AI answer can be a third-party listicle instead of your site, your page can be cited without your brand being recommended, and a follow-up in AI Mode can introduce a new source set.",
        "This update preserves the local AI Overview and listicle findings, then adds the AI Overview-to-AI Mode transition, Search Console's generative AI report, and a practical measurement model for beauty brands.",
      ],
      sections: [
        {
          h2: "Why is Google AI Overview expanding toward AI Mode?",
          blocks: [
            {
              type: "p",
              text: "For some queries, Google AI Overview can dynamically expand into a longer response with an open follow-up box before a user clicks “Show more.” In Search Engine Roundtable's August 28, 2026 test, the layout pushed organic links further down the page; a Google spokesperson said expansion occurs only for topics where its systems deem it useful ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)).",
            },
            {
              type: "p",
              text: "The handoff from AI Overview to AI Mode is not itself new. On January 27, 2026, Google announced that mobile users globally could ask a follow-up from an AI Overview and carry its context into an AI Mode conversation ([Google (2026)](https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/)). The August test makes that path more prominent and default-like for some queries; Google has not announced a permanent rollout across all queries.",
            },
            {
              type: "p",
              text: "For a beauty brand, the effect may be clearest on comparison queries such as “sunscreen for sensitive skin”: one result page can become a research session that branches through follow-up questions. Google says AI Overviews and AI Mode can use query fan-out across multiple subtopics and that the two surfaces may show different responses and links ([Google Search Central (2025)](https://developers.google.com/search/docs/appearance/ai-features)).",
            },
          ],
        },
        {
          h2: "What exactly are Google's local AI Overviews doing?",
          blocks: [
            {
              type: "p",
              text: "Google sometimes shows AI Overviews in local results and can add AI-generated summaries for listed businesses. The observed problem is that those summaries can cite low-quality, self-promotional listicles instead of the businesses' own sites ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html)).",
            },
            {
              type: "quote",
              text: "Google is quoting a single lawyer's self-promoting listicle for every law firm listed here and is using it as the primary source for this entire list, linking to it instead of the law firms' websites.",
              cite: "Joy Hawkins, quoted by Barry Schwartz / Search Engine Roundtable (2026)",
              citeUrl: "https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html",
            },
            {
              type: "p",
              text: "The practical effect is that a user can read a summary about your brand but click through to a third-party evaluation page instead of your site. When an AI Overview expands by default, that sourcing decision occupies more of the result page; when the user moves into AI Mode, the link set can change again.",
            },
          ],
        },
        {
          h2: "Is this only happening in local search?",
          blocks: [
            {
              type: "p",
              text: "No. Lily Ray examined 100 B2B “best [category] software” queries on three dates between April and June 2026. Across the 80 queries that triggered an AI Overview, brands' self-promotional listicles were cited 323 times ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)).",
            },
            {
              type: "p",
              text: "In 224 of those 323 cases — 69% — Google cited the brand's page but did not recommend the brand. For “best LMS for selling courses,” Oasis LMS was cited while Kajabi, Thinkific, LearnWorlds, and Teachable were recommended; all were named in Oasis's article ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)).",
            },
            {
              type: "p",
              text: "The study is limited to B2B software queries and does not establish a cosmetics-category rate. It does establish a useful measurement distinction: a brand page appearing as a source is not the same outcome as the brand being recommended. Beauty-query monitoring should record those separately.",
            },
          ],
        },
        {
          h2: "Why has writing your own 'we're the best' list become risky?",
          blocks: [
            {
              type: "p",
              text: "Publishing a “best X” article on your own blog and ranking yourself first may create short-term AI visibility, but it is not a durable foundation. In Lily Ray's February 2026 observational review, example sites that used the tactic heavily lost between 29% and 49% of organic visibility, with much of the loss concentrated in the blog or resource sections containing those listicles ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)).",
            },
            {
              type: "p",
              text: "Those declines coincided with volatility after the December 2025 core update. Ray also explicitly notes that affected sites used other tactics at the same time, including scaled low-quality AI content, templated pages, and artificial date refreshing ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)).",
            },
            {
              type: "p",
              text: "The data therefore does not prove that a listicle directly caused a penalty. The narrower, defensible conclusion is that scaled self-praise pages without real-use evidence, transparent methodology, or independent evaluation are a more fragile strategy than content that gives users original value.",
            },
          ],
        },
        {
          h2: "How does the AI Overview picture differ in Turkish?",
          blocks: [
            {
              type: "p",
              text: "English visibility is not a proxy for Turkish AI Overview visibility. GEO tool provider CiteLens ran the same 444 commercial questions in English and Turkish and measured only 22% average overlap between cited domains; AI Overviews appeared on 96% of English runs and 94% of Turkish runs ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)).",
            },
            {
              type: "p",
              text: "This is vendor research, not an independent academic study. Its scope and method are disclosed: 444 commercial questions, gl=us/hl=en for English, gl=tr/hl=tr for Turkish, and Jaccard similarity across the domain sets ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)).",
            },
            {
              type: "p",
              text: "The operational conclusion for a beauty brand is straightforward: do not merge Turkish and English observations into one report. Sample which page is cited, whether the brand is recommended, and which additional sources emerge after an AI Mode follow-up in each language.",
            },
          ],
        },
        {
          h2: "How should you measure AI Overview and AI Mode visibility?",
          blocks: [
            {
              type: "p",
              text: "Measure AI Overview and AI Mode visibility by combining Search Console data with repeated observation of a fixed query set. Google's Generative AI performance report, announced in June 2026, provides organic impressions in AI Overviews and AI Mode plus the pages, countries, devices, and date trends involved ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).",
            },
            {
              type: "p",
              text: "The report is still rolling out to a subset of site owners. Google's help documentation says absence can mean that a property does not yet have access or has not received enough generative AI impressions; the supported Search surfaces are AI Overviews and AI Mode ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "If the report is available, track AI impressions by page, country, device, and date; annotate launches, PR placements, and meaningful content updates.",
                "Build a fixed monthly sample of Turkish and English queries. Record whether AI Overview appears, which sources it shows, whether the brand is cited or recommended, and how an AI Mode follow-up changes the answer.",
                "Do not treat an AI impression as a business result. Read the Search Console visibility trend alongside session quality and conversions in Analytics.",
                "If the report is unavailable, do not interpret that as zero visibility; use the fixed query set and timestamped captures as a temporary observation series.",
              ],
            },
          ],
        },
        {
          h2: "What should a beauty brand do for AI Overview and AI Mode?",
          blocks: [
            {
              type: "p",
              text: "A beauty brand should prioritize indexable product and category pages, original expertise, current business and product data, and independently verifiable content instead of looking for an AI-only hack. Google's July 2026 guidance says foundational SEO still applies and rejects the need for special AI text files, inauthentic mention networks, or a separate scaled page for every fan-out query ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Explain selection criteria in product comparisons; when content rests on real experience, show the method, test conditions, and limitations. Do not mass-produce templates that automatically rank your own product first.",
                "Keep Google Business Profile and Merchant Center data current. Google says local business and product information can appear in generative AI responses and other Search results ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
                "Build independent editorial visibility through genuine product seeding, expert input, and verifiable user experience; disclose paid or directed relationships.",
                "Track Turkish and English separately. Our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide) explains how to structure brand information for generative engines.",
                "Keep four distinct columns in the monthly report: classic organic result, AI Overview citation, AI Overview recommendation, and AI Mode follow-up answer. This prevents different behaviors from disappearing into one 'AI visibility' score.",
              ],
            },
            {
              type: "p",
              text: "In short, a longer AI Overview can answer more of the query while pushing classic links lower, but it can also open more source surfaces. The goal is not merely to earn a citation: it is to be sourced in the right context, be recommended, and connect that visibility to a business outcome.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is Google automatically turning every AI Overview into AI Mode?",
          a: "No. Google says an AI Overview may dynamically expand when its systems judge that useful for a topic; Search Engine Roundtable's August 28, 2026 observation documents that bounded behavior ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)). Google has not announced a permanent rollout across all queries.",
        },
        {
          q: "Can I see AI Overview and AI Mode data in Search Console?",
          a: "Gradually. Google's Generative AI performance report covers AI Overview and AI Mode impressions with page, country, device, and date dimensions, but it is available only to a subset of site owners during rollout ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Absence of the report does not by itself mean zero visibility.",
        },
        {
          q: "Should I stop publishing 'we're the best' lists entirely?",
          a: "They are not prohibited, but relying on them as the only tactic is risky. In Ray's observational examples, sites that used the pattern heavily lost 29%-49% visibility alongside other quality problems ([Lily Ray (2026)](https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on)). A small number of pages with real comparative evidence and transparent methods is not the same as hundreds of self-praise templates.",
        },
        {
          q: "Are being cited and being recommended the same outcome?",
          a: "No. In Lily Ray's study of 100 B2B software queries, brand pages were cited 323 times and the brand was not recommended in 224 cases ([Lily Ray, Search Engine Land (2026)](https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573)). That rate cannot be generalized to cosmetics, but it shows why citation and recommendation belong in separate report fields.",
        },
        {
          q: "If I am visible in English, should I still work on Turkish?",
          a: "Yes. CiteLens's vendor study of 444 commercial questions measured only 22% overlap between domains cited in Turkish and English AI Overviews ([CiteLens (2026)](https://citelens.ai/tr/research/turkish-vs-english-ai-answers)). Note the vendor-study limitation, but use the finding as a strong operational reason to measure the two languages separately.",
        },
        {
          q: "How do I protect my business information in local AI Overviews?",
          a: "Keep category, address, hours, and service details consistent in Google Business Profile and relevant directories. Google's current guidance says Business Profile and Merchant Center information can help products and services appear in generative AI responses and other Search results ([Google Search Central (2026)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en)).",
        },
        {
          q: "How quickly will AI visibility work produce results?",
          a: "There is no guarantee. Indexing, content quality, third-party publication, and whether a query triggers an AI Overview all interact. Judge progress across a fixed Turkish and English sample using citation, recommendation, impression, and on-site conversion trends rather than one spot check.",
        },
      ],
      sources: [
        {
          label: "Schwartz, B. (2026, August 28). Google AI Overviews Pushing Searchers Into AI Mode, Drops Show More Button. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Google. (2026, January 27). Just ask anything: a seamless new Search experience. The Keyword.",
          url: "https://blog.google/products-and-platforms/products/search/ai-mode-ai-overviews-updates/",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2025, December 10). AI features and your website.",
          url: "https://developers.google.com/search/docs/appearance/ai-features",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, August 12). Google AI Overview Local Results Pulling From Low-Quality Listicles. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ai-overview-local-results-listicles-41854.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Goodwin, D. (2026, June 18). Google AI Overviews cite self-serving listicles, but recommend competitors 69% of the time. Search Engine Land.",
          url: "https://searchengineland.com/google-ai-overviews-cite-self-serving-listicles-recommend-competitors-480573",
          publisher: "Search Engine Land",
        },
        {
          label: "Ray, L. (2026, February 3). Is Google Finally Cracking Down on Self-Promotional Listicles?",
          url: "https://lilyraynyc.substack.com/p/is-google-finally-cracking-down-on",
          publisher: "Lily Ray (Substack)",
        },
        {
          label: "Tekin, A. (2026, June 21). Turkish vs. English: AI Cites Almost Entirely Different Sources. CiteLens Research Lab.",
          url: "https://citelens.ai/tr/research/turkish-vs-english-ai-answers",
          publisher: "CiteLens (Solustiq)",
        },
        {
          label: "Maoz, H., & Samet, M. (2026, June 3). Introducing Search Generative AI performance reports in Search Console. Google Search Central Blog.",
          url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Generative AI performance report (Search).",
          url: "https://support.google.com/webmasters/answer/16984139?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026, July 10). Optimizing your website for generative AI features on Google Search.",
          url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=en",
          publisher: "Google",
        },
      ],
      tags: [
        "GEO",
        "AI Overviews",
        "AI Mode",
        "Search Console",
        "Local SEO",
        "Content strategy",
        "Cosmetics marketing",
      ],
    },
  },
};
