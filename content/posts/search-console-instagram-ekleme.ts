import type { BlogPost } from "@/lib/blog";

// Not /blog/… — public/_redirects sends every /blog/* path to /tr/blog/:splat,
// which would swallow the images before Pages ever serves them.
const IMG = "/blog-media/search-console-instagram-ekleme";

export const searchConsoleInstagramEkleme: BlogPost = {
  id: "search-console-instagram-ekleme",
  publishedAt: "2026-08-02",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "search-console-instagram-hesabi-nasil-eklenir",
      title: "Search Console'a Instagram hesabı nasıl eklenir? 7 adımda, ekran görüntüleriyle",
      metaTitle: "Search Console'a Instagram Hesabı Ekleme (2026) | Soleach",
      metaDescription: "Google Search Console'a Instagram hesabını 7 adımda ekle. Ekran görüntülü anlatım, izin ekranlarında tam olarak neyi onayladığın ve veri gelmezse ne yapman gerektiği.",
      excerpt: "Google Search Console artık Instagram, TikTok, X ve YouTube hesaplarını mülk olarak kabul ediyor. Kurulum iki dakika sürüyor ama iki ayrı izin ekranından geçiyor ve sonunda seni 0 tıklama gösteren boş bir rapor karşılıyor. Aşağıda her adımın ekran görüntüsü, izin ekranlarında tam olarak neyi onayladığın ve ilk hafta neye bakman gerektiği var.",
      intro: [
        "Google Search Console'a Instagram hesabı eklemek yaklaşık iki dakika sürüyor: mülk seçiciyi aç, \"Mülk ekle\" de, Instagram'ı seç, iki izin ekranını onayla, bitti. Zor olan kısım kurulum değil — ekranlarda ne onayladığını bilmek ve sonrasında karşına çıkan boş raporu doğru yorumlamak.",
        "Aşağıdaki yedi adımı kendi hesabımızda ([@soleachagency](https://www.instagram.com/soleachagency/)) tamamlarken ekran görüntüsü aldık. Analitik rakamları bulanıklaştırdık; geri kalan her şey gördüğün gibi. Aynı akış TikTok, X ve YouTube için de birebir aynı çalışıyor — üçüncü adımda listeden farklı bir satır seçiyorsun, o kadar.",
        "Bu özelliğin ne olduğunu, hangi veriyi verip hangisini vermediğini merak ediyorsan önce şunu oku: [Google Search Console'a artık Instagram, TikTok ve YouTube hesabı eklenebiliyor](/tr/blog/search-console-platform-properties-instagram-tiktok-youtube). Bu yazı kurulumun kendisine odaklanıyor.",
      ],
      sections: [
        {
          h2: "Başlamadan önce neye ihtiyacın var?",
          id: "on-kosullar",
          blocks: [
            {
              type: "ul",
              items: [
                "Bir Google hesabı. Search Console'u daha önce hiç kullanmadıysan da olur — platform mülkleri için web sitesi sahibi olman gerekmiyor.",
                "Instagram hesabının yönetici erişimi. Doğrulama, hesabın kendisine giriş yaparak yapılıyor; bir doğrulama kodu ya da DNS kaydı yok.",
                "Tercihen aynı tarayıcıda hem Google hem Instagram oturumunun açık olması. Açık değilse akışın ortasında giriş yapman istenir, süreç bölünmez ama uzar.",
                "İki dakika. Kurulum kısa; asıl bekleme kurulumdan sonra başlıyor.",
              ],
            },
            {
              type: "p",
              text: "Küçük bir not: izin ekranının adresi `instagram.com/consent/?flow=ig_biz_login_oauth` — yani yetkilendirme Instagram'ın işletme girişi akışı üzerinden yürüyor. Biz adımları bir işletme hesabıyla tamamladık.",
            },
          ],
        },
        {
          h2: "Adım adım: Instagram hesabını Search Console'a ekleme",
          id: "adimlar",
          blocks: [
            {
              type: "h3",
              text: "1. Sol üstteki mülk seçicisini aç",
            },
            {
              type: "p",
              text: "[Google Search Console](https://search.google.com/search-console)'a gir. Sol panelin en üstünde, arama kutusunun hemen altında, o an açık olan mülkün adını taşıyan bir kutu var. Ona tıkla.",
            },
            {
              type: "img",
              src: `${IMG}/01-mulk-secici.webp`,
              alt: "Google Search Console arayüzü; sol paneldeki en üstte yer alan soleach.com mülk seçici kutusu bir okla işaretlenmiş.",
              caption: "Adım 1 — Sol paneldeki mülk seçici kutusu.",
            },
            {
              type: "h3",
              text: "2. Listenin altındaki \"Mülk ekle\"ye tıkla",
            },
            {
              type: "p",
              text: "Açılan listede hâlihazırda eklediğin mülkleri görürsün. En altta \"Mülk ekle\" satırı var; yanındaki \"Yeni seçenekler\" rozeti tam olarak bu güncellemeyi işaret ediyor.",
            },
            {
              type: "img",
              src: `${IMG}/02-mulk-ekle.webp`,
              alt: "Açılmış mülk listesi; soleach.com, bir TikTok ve bir YouTube hesabı görünüyor. Listenin altındaki \"Mülk ekle\" satırı ve yanındaki \"Yeni seçenekler\" rozeti okla işaretlenmiş.",
              caption: "Adım 2 — Listenin altındaki \"Mülk ekle\".",
            },
            {
              type: "h3",
              text: "3. \"Hesap türü seçin\" ekranında Instagram'ın yanındaki \"Ekle\"ye bas",
            },
            {
              type: "p",
              text: "Karşına \"Hesap türü seçin\" başlıklı bir pencere çıkıyor. Üstte klasik \"Web sitesi ekle\" seçeneği duruyor; altındaki \"Yeni\" ayracının ardından dört satır sıralanıyor: Instagram, TikTok, X ve YouTube. Her satırın sağındaki \"Ekle\" bağlantısı o platformun akışını başlatıyor — biz Instagram'ı işaretledik ama diğer üçü için de yapman gereken tek şey karşılarındaki \"Ekle\"ye basmak.",
            },
            {
              type: "img",
              src: `${IMG}/03-hesap-turu-instagram.webp`,
              alt: "\"Hesap türü seçin\" penceresi; Web sitesi ekle butonunun altında Instagram, TikTok, X ve YouTube satırları listeleniyor. Instagram satırının sağındaki \"Ekle\" bağlantısı okla işaretlenmiş.",
              caption: "Adım 3 — Dört platform aynı listede. Ok Instagram'ı gösteriyor; TikTok, X ve YouTube için akış birebir aynı.",
            },
            {
              type: "h3",
              text: "4. Google'ın izin ekranını onayla",
            },
            {
              type: "p",
              text: "İlk izin ekranı Google'a ait: \"Allow Google access to your Instagram account\". Arayüzün dili Türkçeyse aynı ekranı \"Google'ın Instagram hesabınıza erişmesine izin verin\" başlığıyla ve \"Kabul et ve devam et\" butonuyla görürsün. Okumaya değer kısım ortadaki \"Google may be able to\" bloğu: istenen kapsam yalnızca **\"See your basic profile info\"**, yani temel profil bilgisi. Ekranın kendisi, bağlantıyı sonradan nereden değiştirebileceğini de söylüyor — Google Hesabı'nın bağlantılar bölümünden.",
            },
            {
              type: "img",
              src: `${IMG}/04-google-izin-ekrani.webp`,
              alt: "Google'ın izin penceresi: \"Allow Google access to your Instagram account\" başlığı, \"See your basic profile info\" kapsamı ve altta Cancel ile Agree and continue butonları. Agree and continue okla işaretlenmiş.",
              caption: "Adım 4 — Google'ın izin ekranı. Türkçe arayüzde buton \"Kabul et ve devam et\" olarak görünür.",
            },
            {
              type: "h3",
              text: "5. Instagram'ın izin ekranında \"Allow\"a bas",
            },
            {
              type: "p",
              text: "İkinci izin ekranı Instagram'a ait ve ayrı bir pencerede açılıyor. Hesabını daha önce Google'a bağladıysan \"You previously connected Google-IG to your instagram account\" uyarısını görürsün; sorulan şey paylaşımın devam edip etmeyeceği. Mor \"Allow\" butonuna bas — Türkçe arayüzde \"İzin ver\". \"Cancel\" dersen akış yarıda kalır ve mülk oluşmaz.",
            },
            {
              type: "img",
              src: `${IMG}/05-instagram-allow.webp`,
              alt: "Instagram'ın izin penceresi; Google-IG ile bilgi paylaşımının sürüp sürmeyeceğini soruyor. Mor Allow butonu okla işaretlenmiş, altında Cancel butonu duruyor.",
              caption: "Adım 5 — Instagram'ın kendi izin ekranı. Türkçe arayüzde buton \"İzin ver\".",
            },
            {
              type: "h3",
              text: "6. \"Mülk başarıyla eklendi\" ekranında \"Mülke git\" de",
            },
            {
              type: "p",
              text: "Doğrulama tamamlandığında Search Console hesabı yeşil tikle onaylıyor ve bilmen gereken tek rakamı burada veriyor: \"Search Console, arama performansı verilerini toplamaya başladı. Verilerin raporlarda görünmesi **48 saati** bulabilir.\" Bu süre bizim tahminimiz değil, Google'ın kendi ekranında yazan rakam. \"Mülke git\" ile yeni mülke geçebilir, \"Bitti\" ile ekranı kapatabilirsin.",
            },
            {
              type: "img",
              src: `${IMG}/06-mulk-eklendi.webp`,
              alt: "\"Mülk başarıyla eklendi\" penceresi; @soleachagency Instagram hesabı yeşil onay işaretiyle listelenmiş, altında verilerin raporlarda görünmesinin 48 saati bulabileceği yazıyor. Mülke git butonu okla işaretlenmiş.",
              caption: "Adım 6 — 48 saat uyarısı Google'ın kendi ekranından geliyor.",
            },
            {
              type: "h3",
              text: "7. İlk görünüme alışma: sıfır tıklama normal",
            },
            {
              type: "p",
              text: "Yeni mülkün Analizler ekranı seni büyük ihtimalle şu cümleyle karşılar: \"Instagram içeriğiniz, veri toplama işleminden bu yana Google Arama'da hiç tıklama almadı.\" Toplam tıklama sayısı 0, grafik boş. Altındaki küçük not asıl açıklama: veriler yalnızca toplamanın başladığı tarihten itibaren kullanılabilir. Yani bu boşluk bir hata değil, mülkün yaşıyla ilgili. Mülk seçicide artık dört kayıt yan yana duruyor: web sitesi, TikTok, Instagram ve YouTube.",
            },
            {
              type: "img",
              src: `${IMG}/07-analizler-ilk-gorunum.webp`,
              alt: "Yeni eklenen Instagram mülkünün Analizler ekranı: toplam tıklama sayısı 0, grafik boş ve verilerin 31 Temmuz'dan itibaren kullanılabileceği notu görünüyor. Solda açık olan mülk listesinde site, TikTok, Instagram ve YouTube kayıtları sıralanmış.",
              caption: "Adım 7 — Kurulumdan hemen sonraki tipik görünüm.",
            },
          ],
        },
        {
          h2: "İlk hafta neye bakmalısın, neye bakmamalısın?",
          id: "ilk-hafta",
          blocks: [
            {
              type: "p",
              text: "Kurulumdan sonraki en yaygın hata, boş rapora bakıp \"çalışmıyor\" sonucuna varmak. İkinci en yaygın hata, üç günlük veriden içerik stratejisi çıkarmak. İkisinden de kaçınmanın yolu, ilk haftayı bir ölçüm dönemi değil bir kurulum kontrolü olarak görmek.",
            },
            {
              type: "ul",
              items: [
                "**İlk 48 saat:** Hiçbir şey yapma. Google'ın kendi ekranı bu süreyi zaten söylüyor.",
                "**3-7. günler:** Yalnızca tek bir soruyu sor — tabloda herhangi bir satır belirdi mi? Belirdiyse bağlantı çalışıyor demektir; rakamların küçüklüğü bu aşamada bir anlam taşımaz.",
                "**İlk ay:** Sorgu listesine bak ama karar verme. Aradığın şey hacim değil, sürpriz: markanı beklemediğin bir kelimeyle birlikte arıyorlarsa, not al.",
                "**Bakmaman gereken şey:** Ortalama pozisyon. Az sayıda gösterimden hesaplanan ortalama pozisyon oynak olur ve erken dönemde yanıltır.",
                "**Geriye dönük veri:** Gelmez. Mülkü ne zaman açtıysan tablo o günden başlar; bu yüzden kurulumu ertelemenin görünmez bir maliyeti var.",
              ],
            },
            {
              type: "p",
              text: "Veri birikmeye başladıktan sonra bu raporun hangi analizlere yarayacağını — sorgu grupları, 24 saat filtresi, Reels ile carousel karşılaştırması — [ana yazımızda](/tr/blog/search-console-platform-properties-instagram-tiktok-youtube) ayrıntılı anlattık. Platform panelleriyle nasıl birlikte okunacağını ise [sosyal medya analitik araçları karşılaştırmamızda](/tr/blog/guzellik-markalari-icin-sosyal-medya-analitik-araclari) bulabilirsin.",
            },
          ],
        },
        {
          h2: "Sık karşılaşılan takılmalar",
          id: "sorun-giderme",
          blocks: [
            {
              type: "ul",
              items: [
                "**\"Mülk ekle\"de sosyal platformlar görünmüyor:** Sayfayı yenile ve Search Console'a hangi Google hesabıyla girdiğini kontrol et. Özellik 29 Temmuz 2026 itibarıyla dünya genelinde açık ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)).",
                "**İzin penceresi hiç açılmadı:** Tarayıcının açılır pencere engelleyicisi ikinci adımdaki Instagram penceresini kesiyor olabilir. Search Console alan adı için izin ver ve akışı baştan başlat.",
                "**Yanlış Instagram hesabına bağlandın:** Tarayıcıda o an açık olan Instagram oturumu hangisiyse ona bağlanır. Doğru hesaba geçip akışı tekrarla; her hesap zaten ayrı bir mülk olarak eklenir.",
                "**Mülk bir süre sonra erişilemez oldu:** Sahiplik periyodik olarak yeniden kontrol ediliyor. Platform tarafındaki oturumun düştüyse bağlantı kopar; yeniden doğruladığında aynı rapora dönersin ve verinin baştan birikmesini beklemen gerekmez ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
                "**48 saat geçti, hâlâ boş:** Muhtemelen sorun yok. Küçük hesaplarda Google Arama kaynaklı tıklama seyrek olur; tablo haftalarca boş kalabilir. Bu, kurulumun değil hacmin göstergesi.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Instagram şifremi Google'a vermiş oluyor muyum?",
          a: "Hayır. Doğrulama şifre paylaşımıyla değil, yetkilendirme akışıyla yapılıyor: Instagram'ın kendi izin ekranında \"Allow\" diyorsun ve Google'ın izin ekranında görünen kapsam yalnızca temel profil bilgisi (\"See your basic profile info\") oluyor. Aynı ekran, bağlantıyı sonradan Google Hesabı'ndan değiştirebileceğini de yazıyor.",
        },
        {
          q: "Veriler ne zaman görünmeye başlar?",
          a: "Search Console'un kurulum sonrası ekranı \"verilerin raporlarda görünmesi 48 saati bulabilir\" diyor. Geriye dönük veri gelmez; grafikler yalnızca toplamanın başladığı tarihten itibaren dolar ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "Aynı adımlarla TikTok, X ve YouTube da eklenir mi?",
          a: "Evet. \"Hesap türü seçin\" ekranında dördü de aynı listede duruyor ve her birinin sağındaki \"Ekle\" bağlantısı aynı yetkilendirme akışını başlatıyor. Search Console şu an bu dört platformu destekliyor ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "Birden fazla Instagram hesabım var, hepsini ekleyebilir miyim?",
          a: "Evet. Her hesap ayrı bir mülk olarak eklenir ve verisi ayrı raporlanır; birden fazla profil yönetiyorsan işlemi her biri için tekrarlaman gerekir ([Google Search Console Yardım](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "Hesabı eklemek Instagram içeriğimin Google'daki sıralamasını değiştirir mi?",
          a: "Hayır. Platform mülkleri bir ölçüm aracı; mülk açmak sıralama üretmez. İçeriğin Google Arama'da zaten görünüyordu — bu özellik yalnızca o görünürlüğü ilk kez ölçülebilir hâle getiriyor.",
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
          label: "Southern, M. G. (2026, 29 Temmuz). Google Opens Search Console Social Reporting To Everyone. Search Engine Journal.",
          url: "https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/",
          publisher: "Search Engine Journal",
        },
      ],
      tags: [
        "Google Search Console",
        "Instagram",
        "Sosyal medya SEO",
        "Nasıl yapılır",
        "Ölçümleme",
      ],
    },
    en: {
      slug: "how-to-add-instagram-to-google-search-console",
      title: "How to add an Instagram account to Google Search Console, in 7 screenshots",
      metaTitle: "How to Add Instagram to Search Console (2026) | Soleach",
      metaDescription: "Add your Instagram account to Google Search Console in 7 steps. Screenshots for every screen, what each permission dialog actually grants, and what to do when no data shows up.",
      excerpt: "Google Search Console now accepts Instagram, TikTok, X and YouTube accounts as properties. Setup takes two minutes but runs through two separate consent screens and ends with an empty report showing zero clicks. Below: a screenshot of every step, what you're actually approving, and what to look at during the first week.",
      intro: [
        "Adding an Instagram account to Google Search Console takes about two minutes: open the property picker, click \"Add property\", pick Instagram, approve two consent screens, done. The hard part isn't the setup — it's knowing what you're approving and reading the empty report that greets you afterwards correctly.",
        "We captured a screenshot of each of the seven steps while running them on our own account ([@soleachagency](https://www.instagram.com/soleachagency/)). The analytics figures are blurred; everything else is exactly as it appeared. The same flow works identically for TikTok, X and YouTube — at step three you simply pick a different row from the list.",
        "If you want to know what this feature is and which data it does and doesn't give you, start here instead: [Google Search Console now accepts Instagram, TikTok and YouTube accounts](/en/blog/search-console-platform-properties-instagram-tiktok-youtube). This guide is about the setup itself.",
      ],
      sections: [
        {
          h2: "What you need before you start",
          id: "prerequisites",
          blocks: [
            {
              type: "ul",
              items: [
                "A Google account. It's fine if you've never used Search Console before — platform properties don't require you to own a website.",
                "Admin access to the Instagram account. Verification happens by signing into the account itself; there's no verification code or DNS record involved.",
                "Ideally both your Google and Instagram sessions open in the same browser. If they aren't, you'll be asked to sign in mid-flow — nothing breaks, it just takes longer.",
                "Two minutes. The setup is short; the real waiting starts after it.",
              ],
            },
            {
              type: "p",
              text: "One small note: the consent screen's address is `instagram.com/consent/?flow=ig_biz_login_oauth`, meaning authorization runs through Instagram's business login flow. We completed these steps with a business account.",
            },
          ],
        },
        {
          h2: "Step by step: adding an Instagram account to Search Console",
          id: "steps",
          blocks: [
            {
              type: "h3",
              text: "1. Open the property picker in the top left",
            },
            {
              type: "p",
              text: "Go to [Google Search Console](https://search.google.com/search-console). At the very top of the left panel, just below the search box, there's a box carrying the name of the property you currently have open. Click it.",
            },
            {
              type: "img",
              src: `${IMG}/01-mulk-secici.webp`,
              alt: "The Google Search Console interface with an arrow pointing at the property picker box at the top of the left sidebar, currently showing soleach.com.",
              caption: "Step 1 — The property picker in the left sidebar.",
            },
            {
              type: "h3",
              text: "2. Click \"Add property\" at the bottom of the list",
            },
            {
              type: "p",
              text: "The dropdown shows the properties you've already added. At the bottom sits the \"Add property\" row, and the \"New options\" badge next to it points at exactly this update.",
            },
            {
              type: "img",
              src: `${IMG}/02-mulk-ekle.webp`,
              alt: "The opened property list showing a website, a TikTok account and a YouTube account, with an arrow pointing at the \"Add property\" row and its \"New options\" badge at the bottom.",
              caption: "Step 2 — \"Add property\", at the bottom of the list.",
            },
            {
              type: "h3",
              text: "3. Click \"Add\" next to Instagram in the account type dialog",
            },
            {
              type: "p",
              text: "A dialog titled \"Select account type\" appears. The familiar \"Add website\" option sits at the top; below a \"New\" divider you get four rows: Instagram, TikTok, X and YouTube. The \"Add\" link on the right of each row starts that platform's flow — we marked Instagram, but for the other three the only thing you do differently is click their \"Add\" instead.",
            },
            {
              type: "img",
              src: `${IMG}/03-hesap-turu-instagram.webp`,
              alt: "The \"Select account type\" dialog listing Instagram, TikTok, X and YouTube below the Add website button, with an arrow pointing at the Add link on the Instagram row.",
              caption: "Step 3 — All four platforms in one list. The arrow marks Instagram; the flow is identical for TikTok, X and YouTube.",
            },
            {
              type: "h3",
              text: "4. Approve Google's consent screen",
            },
            {
              type: "p",
              text: "The first consent screen is Google's: \"Allow Google access to your Instagram account\". The part worth reading is the \"Google may be able to\" block in the middle — the only scope requested is **\"See your basic profile info\"**. The screen also tells you where to change the link later: your Google Account. Click \"Agree and continue\".",
            },
            {
              type: "img",
              src: `${IMG}/04-google-izin-ekrani.webp`,
              alt: "Google's consent dialog titled \"Allow Google access to your Instagram account\", showing the \"See your basic profile info\" scope, with an arrow pointing at the Agree and continue button.",
              caption: "Step 4 — Google's consent screen and the single scope it requests.",
            },
            {
              type: "h3",
              text: "5. Click \"Allow\" on Instagram's consent screen",
            },
            {
              type: "p",
              text: "The second consent screen belongs to Instagram and opens in its own window. If you've connected the account to Google before, you'll see \"You previously connected Google-IG to your instagram account\" — the question is whether sharing continues. Click the purple \"Allow\" button. Choosing \"Cancel\" aborts the flow and no property is created.",
            },
            {
              type: "img",
              src: `${IMG}/05-instagram-allow.webp`,
              alt: "Instagram's consent dialog asking whether to continue sharing information with Google-IG, with an arrow pointing at the purple Allow button above the Cancel button.",
              caption: "Step 5 — Instagram's own consent screen.",
            },
            {
              type: "h3",
              text: "6. Click \"Go to property\" on the success screen",
            },
            {
              type: "p",
              text: "Once verification completes, Search Console confirms the account with a green check and gives you the one number that matters here: it has started collecting search performance data, and it can take up to **48 hours** for that data to appear in reports. That figure isn't our estimate — it's what Google's own screen says. \"Go to property\" takes you to the new property; \"Done\" closes the dialog.",
            },
            {
              type: "img",
              src: `${IMG}/06-mulk-eklendi.webp`,
              alt: "The property-added success dialog showing the @soleachagency Instagram account with a green check mark, a note that data can take 48 hours to appear, and an arrow pointing at the \"Go to property\" button.",
              caption: "Step 6 — The 48-hour figure comes from Google's own screen.",
            },
            {
              type: "h3",
              text: "7. Getting used to the first view: zero clicks is normal",
            },
            {
              type: "p",
              text: "Your new property's Insights screen will most likely greet you with a line saying your Instagram content has received no clicks from Google Search since data collection began. Total clicks: 0, chart empty. The small note underneath is the real explanation: data is only available from the date collection started. So the emptiness isn't a fault, it's the property's age. In the picker you now have four entries side by side: the website, TikTok, Instagram and YouTube.",
            },
            {
              type: "img",
              src: `${IMG}/07-analizler-ilk-gorunum.webp`,
              alt: "The Insights screen of a freshly added Instagram property showing zero total clicks, an empty chart and a note that data is available from 31 July onwards, with the property list open on the left showing the website, TikTok, Instagram and YouTube entries.",
              caption: "Step 7 — The typical view right after setup.",
            },
          ],
        },
        {
          h2: "What to look at in the first week — and what to ignore",
          id: "first-week",
          blocks: [
            {
              type: "p",
              text: "The most common mistake after setup is looking at the empty report and concluding it's broken. The second most common is building a content strategy on three days of data. Avoiding both means treating the first week as a setup check rather than a measurement period.",
            },
            {
              type: "ul",
              items: [
                "**First 48 hours:** Do nothing. Google's own screen already told you this.",
                "**Days 3-7:** Ask one question only — has any row appeared in the table? If yes, the connection works; how small the numbers are means nothing at this stage.",
                "**First month:** Read the query list, but don't decide anything. What you're looking for isn't volume, it's surprise: if people search your brand alongside a term you didn't expect, write it down.",
                "**What to ignore:** Average position. Computed from a handful of impressions it swings wildly and misleads early on.",
                "**Historical data:** There is none. The table starts the day you opened the property, which is why postponing setup has an invisible cost.",
              ],
            },
            {
              type: "p",
              text: "Once data starts accumulating, our [main article](/en/blog/search-console-platform-properties-instagram-tiktok-youtube) covers what this report is actually good for — query groups, the 24-hour filter, comparing Reels against carousels. For how to read it alongside the platform dashboards, see our [social media analytics tools comparison](/en/blog/social-media-analytics-tools-for-beauty-brands).",
            },
          ],
        },
        {
          h2: "Common snags",
          id: "troubleshooting",
          blocks: [
            {
              type: "ul",
              items: [
                "**No social platforms under \"Add property\":** Reload the page and check which Google account you're signed into. The feature has been available worldwide since 29 July 2026 ([Search Engine Journal, 2026](https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/)).",
                "**The consent window never opened:** Your browser's pop-up blocker may be cutting off the Instagram window in step five. Allow pop-ups for the Search Console domain and restart the flow.",
                "**You connected the wrong Instagram account:** Whichever Instagram session is open in the browser is the one it connects. Switch to the right account and repeat the flow; each account is added as a separate property anyway.",
                "**The property became inaccessible later:** Ownership is rechecked periodically. If your session on the platform side expires the connection drops; re-verifying returns you to the same report without waiting for data to accumulate again ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
                "**48 hours passed and it's still empty:** Probably nothing is wrong. Google Search clicks are rare for smaller accounts, and the table can stay empty for weeks. That reflects volume, not a broken setup.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Am I giving Google my Instagram password?",
          a: "No. Verification happens through an authorization flow, not password sharing: you click \"Allow\" on Instagram's own consent screen, and the scope shown on Google's consent screen is limited to basic profile info (\"See your basic profile info\"). That same screen also tells you the link can be changed later from your Google Account.",
        },
        {
          q: "When does data start showing up?",
          a: "Search Console's post-setup screen says it can take up to 48 hours for data to appear in reports. No historical data arrives; charts only fill from the date collection started ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "Do the same steps work for TikTok, X and YouTube?",
          a: "Yes. All four sit in the same \"Select account type\" dialog, and the \"Add\" link beside each starts the same authorization flow. Search Console currently supports these four platforms ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "I run several Instagram accounts — can I add them all?",
          a: "Yes. Each account is added as its own property and reported separately, so if you manage more than one profile you need to repeat the process for each ([Google Search Console Help](https://support.google.com/webmasters/answer/17148418)).",
        },
        {
          q: "Does adding the account change how my Instagram content ranks on Google?",
          a: "No. Platform properties are a measurement tool; opening a property doesn't produce rankings. Your content was already appearing in Google Search — this feature simply makes that visibility measurable for the first time.",
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
          label: "Southern, M. G. (2026, July 29). Google Opens Search Console Social Reporting To Everyone. Search Engine Journal.",
          url: "https://www.searchenginejournal.com/google-opens-search-console-social-reporting-to-everyone/584144/",
          publisher: "Search Engine Journal",
        },
      ],
      tags: [
        "Google Search Console",
        "Instagram",
        "Social media SEO",
        "How-to",
        "Measurement",
      ],
    },
  },
};
