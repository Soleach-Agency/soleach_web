import type { BlogPost } from "@/lib/blog";

export const googleAdsAiMaxOtomatikGecis: BlogPost = {
  id: "google-ads-ai-max-otomatik-gecis",
  publishedAt: "2026-08-11",
  category: "ads",
  locales: {
    tr: {
      slug: "google-ads-ai-max-otomatik-gecis-eylul-2026",
      title: "Google Ads 1 Eylül'de kampanyanı AI Max'e taşıyor: kozmetik markası için ne değişiyor?",
      metaTitle: "Google Ads AI Max Otomatik Geçişi (1 Eylül 2026) | Kozmetik Markaları",
      metaDescription: "Google Ads, 1 Eylül 2026'da ACA ve kampanya seviyesi geniş eşlemeyi AI Max'e taşıyor. Kozmetik markaları için iddia riski ve geçiş öncesi kontrol listesi.",
      excerpt: "1 Eylül 2026'da Google Ads, otomatik oluşturulan öğeler ve kampanya seviyesi geniş eşleme kullanan kampanyaları AI Max'e yükseltiyor. Kozmetikte bu, reklam metninin bir kısmının modele devredilmesi anlamına geliyor — ama iddia sorumluluğu sende kalıyor.",
      intro: [
        "Google Ads'in iki eski ayarı 1 Eylül 2026'da kapanıyor: **otomatik oluşturulan öğeler (ACA)** ve **kampanya seviyesi geniş eşleme**. Bu ayarları kullanan Arama Ağı kampanyaları otomatik olarak AI Max'e yükseltilecek ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
        "Değişiklik teknik görünüyor, ama kozmetik markaları için pratik sonucu somut: reklam başlıklarının bir kısmı bundan sonra sitendeki metinden türetilerek model tarafından yazılabilir. Mevzuat açısından o başlık hâlâ senin iddian, kanıt yükü hâlâ sende.",
        "Aşağıda üç şeyi ayırıyoruz: 1 Eylül'de tam olarak neyin değiştiği, hangi kohortun neyi devraldığı ve o tarihten önce yapılması gereken kontroller — hepsi kaynağıyla birlikte.",
      ],
      sections: [
        {
          h2: "1 Eylül'de tam olarak ne oluyor?",
          blocks: [
            {
              type: "p",
              text: "Google, 15 Nisan 2026'da AI Max'in beta'dan çıktığını duyurdu ve üç eski ayarın — Dinamik Arama Ağı Reklamları (DSA), otomatik oluşturulan öğeler (ACA) ve kampanya seviyesi geniş eşleme ayarı — Eylül'de otomatik olarak AI Max'e yükseltileceğini yazdı ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)). Aynı yazı 11 Haziran 2026'da güncellendi ve takvim ikiye ayrıldı.",
            },
            {
              type: "quote",
              text: "Please note that campaigns using Automatically Created Assets (ACA) and campaign-level broad match setting will continue to be auto-upgraded starting in September 2026.",
              cite: "Google Ads & Commerce Blog, 11 Haziran 2026 güncellemesi",
              citeUrl: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
            },
            {
              type: "p",
              text: "Yani DSA'nın kapanışı ve otomatik geçişi Şubat 2027'ye ertelendi; ACA ile kampanya seviyesi geniş eşleme Eylül 2026'da kaldı. 5 Ağustos 2026'da Google etkilenen hesaplara doğrudan e-posta göndererek tarihi netleştirdi: 1 Eylül ([Search Engine Roundtable, 2026](https://www.seroundtable.com/google-ads-migrate-ai-max-sep1-41829.html); [PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)).",
            },
            {
              type: "h3",
              text: "İki kohort, iki farklı varsayılan",
            },
            {
              type: "ul",
              items: [
                "**ACA kullanan kampanyalar:** AI Max'e geçerken arama terimi eşleştirme *ve* metin özelleştirme varsayılan olarak açık gelecek.",
                "**Kampanya seviyesi geniş eşleme kullanan kampanyalar:** yalnızca arama terimi eşleştirme açık gelecek, başka bir şey değil.",
              ],
            },
            {
              type: "p",
              text: "Bu ayrım göründüğünden önemli. ACA yalnızca kreatif üretimini yönetiyordu; arama terimi eşleştirme ise reklamın hangi sorgularda görünmeye uygun olduğunu yönetir. ACA kohortu, reklam grubu düzeyinde kapatılmadığı sürece 1 Eylül'den itibaren otomatik metin üretiminin yanına otomatik sorgu genişletmesini de devralıyor.",
            },
            {
              type: "p",
              text: "Geniş eşleme kohortunda ise metin özelleştirme ve nihai URL genişletmesi varsayılan olarak açılmıyor. Bunun kozmetik tarafında doğrudan bir sonucu var: duyarlı arama reklamlarındaki sabitlemeler geçerliliğini koruyor. Uyum metnini sabit bir pozisyonda tutmaya dayanan reklamverenler için bu kayda değer bir fark ([PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)).",
            },
          ],
        },
        {
          h2: "Neden bu, kozmetik markası için sıradan bir ayar değişikliği değil?",
          blocks: [
            {
              type: "p",
              text: "Metin özelleştirme — eski adıyla otomatik oluşturulan öğeler — senin yazdığın başlık ve açıklamaların yanına Google'ın ürettiklerini ekleyen, kampanya düzeyinde bir ayar. Google'ın dokümantasyonuna göre üretim iki yöntemin birleşimiyle çalışıyor: açılış sayfası başlıkları, açıklamaları ve meta etiketlerinden parça alan \"extractive\" teknikler ve açılış sayfası içeriğine dayandırılmış üretken yapay zekâ. Öğeler en az 48 saatte bir gözden geçirilip yenileniyor ve yalnızca senin yüklediğin başlık ve açıklamalardan daha iyi performans göstereceği tahmin edilirse yayınlanıyor ([Google Ads Yardım, 2026](https://support.google.com/google-ads/answer/11259373)).",
            },
            {
              type: "p",
              text: "Mekanizmanın özeti şu: reklam metnin, site metninin bir türevine dönüşüyor. Kozmetikte bu devir mevzuat açısından hassas, çünkü ürün sayfası metinlerinin ne kadarının gerçekten markanın kendi kararı olduğu tartışmalı bir soru — [216 güzellik markasının sitesini taradığımız çalışmada](/tr/blog/turkiye-guzellik-markalari-web-sitesi-arastirmasi-2026) çıkan tablo bunu hatırlatıyor.",
            },
            {
              type: "p",
              text: "TİTCK'nın Kozmetik Ürünlerin İddialarına İlişkin Kılavuzu iddiayı, ürünün \"etiketi, ambalajı ve/veya tanıtımlarında kullanılan bilgiler, beyanlar veya görseller\" olarak tanımlıyor ([TİTCK, 2024](https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf)). Bir arama reklamı başlığı bu tanımın içinde. Kılavuz altı ortak kriter sayıyor: yasal uyumluluk, doğruluk, destekleyici kanıtlar, dürüstlük, adalet-rekabet ve bilgiye dayalı karar verme.",
            },
            {
              type: "h3",
              text: "Üretken metnin yapısı gereği zorladığı kriterler",
            },
            {
              type: "ul",
              items: [
                "**Dürüstlük.** Kılavuz, aynı özelliklere sahip kozmetik ürünlerde \"benzersiz, eşsiz, en iyi, en etkili\" gibi üstünlük ima eden iddiaları kabul etmiyor. Tıklama performansı için başlık üreten bir model tam da bu kalıplara meyleder.",
                "**Doğruluk.** Kılavuzun kendi örneği net: kısa süreli nemlenme etkisi kanıtlanmış bir ürün için \"48 saatlik nemlendirme sağlar\" iddiası kullanılamaz. Açılış sayfanda geçen bir süre ya da oran ifadesi başlığa taşınırsa kanıt yükü sende kalır.",
                "**Adalet-Rekabet.** Kılavuz \"paraben içermez\" iddiasına izin vermiyor; gerekçesi, bu ifadenin yönetmeliğe uygun kullanıldığında güvenli olan tüm paraben grubunu karalaması. Sitende bu ifade duruyorsa üretilen metne sızması mümkün.",
              ],
            },
            {
              type: "p",
              text: "Sınır teşkil eden ürünler kılavuzu daha da keskin bir çizgi çekiyor: kozmetik ürünlerin tanıtımlarında kullanılan ifadeler herhangi bir hastalığı tedavi veya önlemeye yönelik olamaz, farmakolojik-immünolojik-metabolik etki iddia ya da ima edemez ve sağlık beyanı içeremez. Aynı kılavuz melazma, kloazma ve lentigo gibi melanin kaynaklı cilt değişimlerini hastalık sayıyor — dolayısıyla \"leke tedavisi\" çerçevesi kozmetik mevzuatının dışına çıkıyor ([TİTCK, Sürüm 2.0](https://titck.gov.tr/storage/announcement/pAoYZcsl.pdf)).",
            },
          ],
        },
        {
          h2: "Google'ın yazdığı reklam metninin sorumluluğu kimde?",
          blocks: [
            {
              type: "p",
              text: "Google'ın kendi dokümantasyonu bu soruyu dolaylı ama net cevaplıyor. Metin özelleştirme sayfası reklamvereni doğrudan uyarıyor:",
            },
            {
              type: "quote",
              text: "Ensure your website content is accurate, not misleading, and not in violation of Google Ads policies or applicable laws.",
              cite: "Google Ads Help, About text customization in Search campaigns",
              citeUrl: "https://support.google.com/google-ads/answer/11259373",
            },
            {
              type: "p",
              text: "Mevzuat tarafında da sorumluluk platformda değil. TİTCK kılavuzu, ürünün ortak kriterlere uygunluğunu sağlamayı \"sorumlu kişi\"ye yüklüyor ve iddianın sorumlu kişinin elindeki belgelerle uyumlu olmasını şart koşuyor ([TİTCK, 2024](https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf)). İki doküman birlikte okunduğunda tablo net: metni model üretse bile iddia senin, kanıt yükü senin.",
            },
            {
              type: "p",
              text: "Bu, yapay zekânın reklam üretimine girdiği her yerde tekrar eden bir örüntü. [Yapay zekâ ile üretilen videoların reklamda işe yarayıp yaramadığını](/tr/blog/yapay-zeka-ile-uretilen-videolar-reklamcilik) tartışırken de aynı ayrım karşımıza çıkıyor: üretimi devretmek, sorumluluğu devretmek değil.",
            },
          ],
        },
        {
          h2: "1 Eylül'den önce hangi kontrolleri yapmalısın?",
          blocks: [
            {
              type: "p",
              text: "Aşağıdaki adımların hepsi Google'ın kendi dokümantasyonundaki kontrollere dayanıyor; hiçbiri hesabına özel bir tahmin değil.",
            },
            {
              type: "ul",
              items: [
                "**Etkilenen kampanyaları tespit et.** Yalnızca ACA veya kampanya seviyesi geniş eşleme ayarı açık olan kampanyalar kapsamda. İkisi de kapalıysa 1 Eylül'de kampanya yapında bir şey değişmiyor.",
                "**Metin kılavuzlarını (text guidelines) kur.** Kampanya düzeyinde, beta aşamasında bir özellik. Kampanya başına en fazla 25 terim hariç tutması ve en fazla 40 mesaj kısıtı tanımlayabiliyorsun. Kılavuzlar mevcut üretilmiş öğelere de geriye dönük uygulanıyor: uymayan öğeler yayından kalkıp kaldırıldı olarak işaretleniyor ([Google Ads Yardım, 2026](https://support.google.com/google-ads/answer/16489313)).",
                "**Terim hariç tutmalarının dile özgü olduğunu unutma.** Google'ın notuna göre bir terimi bir dilde hariç tutmak, o terimin başka dildeki karşılığının çıkmasını engellemiyor. Türkçe yayın yapıyorsan listeyi Türkçe kurman gerekir.",
                "**Açılış sayfası metnini temizle.** Üretimin kaynağı orası. Google'a göre açılış sayfası değişirse öğeler 48 saat içinde yenileniyor — yani düzeltme de aynı hızla yansıyor.",
                "**Marka ayarlarını gözden geçir.** Dahil etme ve hariç tutma listeleri AI Max paketine yükseltiliyor; bir kampanyada ikisi birden varsa hariç tutmalar öncelikli ([Google Ads Yardım](https://support.google.com/google-ads/answer/13721847)).",
                "**Bütçeyi kontrol et.** Google, bütçeyle sınırlı kampanyalarda AI Max'in etkili olmayacağını açıkça yazıyor. Arama terimi eşleştirme uygun sorgu havuzunu genişletiyor, onu finanse eden bütçeyi değil.",
                "**İzleme şablonlarını doğrula.** Nihai URL genişletmesini açacaksan gerekli: statik izleme URL'leri ve standart dışı lpurl kullanımı 404'e ya da kullanıcının izleme adresine yönlenmesine yol açabiliyor ([Google Ads Yardım, 2026](https://support.google.com/google-ads/answer/15910187?hl=tr)).",
                "**Öğe raporunu takvime bağla.** Üretilen başlıkları düzenli okumak kur-unut edilebilecek bir iş değil; mevzuat kontrolü ancak gözle yapılıyor.",
              ],
            },
          ],
        },
        {
          h2: "Yükseltmeyi tamamen reddedebilir misin?",
          blocks: [
            {
              type: "p",
              text: "Üç yol var: kendi takviminde AI Max'e geçmek, eski ayarları tamamen kapatmak, ya da 1 Eylül'de gelen varsayılan konfigürasyonu kabul etmek. ACA'yı veya kampanya seviyesi geniş eşlemeyi mevcut hâliyle koruyan dördüncü bir yol yok. Google'ın önerisi, kurulum kontrolünü elde tutmak için şimdiden geçmek yönünde.",
            },
            {
              type: "p",
              text: "Performans beklentisini ölçülü tutmakta fayda var. Google, tam özellik paketini — arama terimi eşleştirme, metin özelleştirme ve nihai URL genişletmesi — kullanan AI Max kampanyalarının, yalnızca arama terimi eşleştirme kullananlara kıyasla benzer EBM/ROAS'ta ortalama %7 daha fazla dönüşüm veya dönüşüm değeri gördüğünü bildiriyor. Yazının kendi dipnotu bu rakamın 2026 tarihli Google iç verisi olduğunu ve perakende dışı reklamverenleri kapsadığını belirtiyor ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
            },
            {
              type: "p",
              text: "Bağımsız uygulayıcı testleri ise daha zayıf sonuçlar raporladı ([PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)). Bu testlerin hakemli çalışma olmadığını, ajans ve danışman hesaplarından gelen ölçümler olduğunu belirtmek gerekiyor. Yani ne Google'ın rakamı ne de karşı ölçümler senin hesabın için bir tahmin.",
            },
            {
              type: "p",
              text: "Geçişi bir deney gibi kurmak — önce sınırlı bir kampanyada, kendi ölçümünle — mevzuat riskini ve performans riskini aynı anda küçültüyor. Bu geçişi yönetecek vaktin yoksa [performans reklamları hizmetimiz](/tr/services#ads) tam olarak bu tür kurulum kararları için var.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Hesabımda ACA veya kampanya seviyesi geniş eşleme yoksa etkilenir miyim?",
          a: "Hayır. Google'ın duyurusu yalnızca bu iki ayarın açık olduğu Arama Ağı kampanyalarını kapsıyor. İkisi de kullanılmıyorsa 1 Eylül'de kampanya yapında bir değişiklik olmuyor.",
        },
        {
          q: "Dinamik Arama Ağı Reklamları (DSA) kampanyalarım da 1 Eylül'de mi geçiyor?",
          a: "Hayır. Google, 11 Haziran 2026'da DSA'nın kapanış ve otomatik geçiş takvimini Şubat 2027'ye erteledi. ACA ve kampanya seviyesi geniş eşleme için Eylül 2026 tarihi değişmedi ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
        },
        {
          q: "Metin özelleştirmeyi kapatıp AI Max'in geri kalanını kullanabilir miyim?",
          a: "Evet, metin özelleştirme kampanya düzeyinde bir ayar ve tek tek kapatılabiliyor. Ancak nihai URL genişletmesi metin özelleştirmenin açık olmasını gerektiriyor; birini kapatınca diğeri de kullanılamıyor ([Google Ads Yardım, 2026](https://support.google.com/google-ads/answer/11259373)).",
        },
        {
          q: "Metin kılavuzlarıyla mevzuata aykırı ifadeleri tamamen engelleyebilir miyim?",
          a: "Hayır, garanti değil. Özellik beta aşamasında, terim hariç tutmaları kampanya başına 25 ile sınırlı ve dile özgü çalışıyor; mesaj kısıtları ise yalnızca kesin, katı talimatları kabul ediyor. Kılavuzlar riski daraltır ama üretilen öğelerin raporlardan düzenli kontrolünün yerini tutmaz ([Google Ads Yardım, 2026](https://support.google.com/google-ads/answer/16489313)).",
        },
        {
          q: "Reklam metnini Google ürettiyse mevzuat karşısında sorumluluk kimde?",
          a: "TİTCK kılavuzuna göre iddianın ortak kriterlere uygunluğunu sağlamak sorumlu kişinin yükümlülüğü ve iddianın elindeki belgelerle uyumlu olması gerekiyor. Google'ın kendi dokümantasyonu da içeriğin doğruluğunu ve yürürlükteki yasalara uygunluğunu reklamverene bırakıyor.",
        },
      ],
      sources: [
        {
          label: "Ervin, B. (2026, 15 Nisan; 11 Haziran 2026 güncellemesi). We're upgrading Dynamic Search Ads to AI Max. Google Ads & Commerce Blog.",
          url: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
          publisher: "Google",
        },
        {
          label: "Google. About text customization in Search campaigns. Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/11259373",
          publisher: "Google Ads Yardım",
        },
        {
          label: "Google. Arama Ağı Kampanyaları İçin AI Max'in işleyiş şekli. Google Ads Yardım.",
          url: "https://support.google.com/google-ads/answer/15910187?hl=tr",
          publisher: "Google Ads Yardım",
        },
        {
          label: "Google. Use text guidelines with Performance Max and Search campaigns (beta). Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/16489313",
          publisher: "Google Ads Yardım",
        },
        {
          label: "Google. About brand settings for Search and Performance Max. Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/13721847",
          publisher: "Google Ads Yardım",
        },
        {
          label: "Türkiye İlaç ve Tıbbi Cihaz Kurumu. (2024). Kozmetik Ürünlerin İddialarına İlişkin Kılavuz (KÜD-KLVZ-11, Rev. 6, 08.10.2024).",
          url: "https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf",
          publisher: "TİTCK (rok.org.tr kopyası üzerinden erişildi)",
        },
        {
          label: "Türkiye İlaç ve Tıbbi Cihaz Kurumu. Kozmetik Ürünler ile Sınır Teşkil Eden Ürünlere İlişkin Kılavuz, Sürüm 2.0.",
          url: "https://titck.gov.tr/storage/announcement/pAoYZcsl.pdf",
          publisher: "TİTCK",
        },
        {
          label: "Rijo, L. (2026, 6 Ağustos). Google Ads broad match campaigns face AI Max auto-upgrade on September 1. PPC Land.",
          url: "https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/",
          publisher: "PPC Land",
        },
        {
          label: "Schwartz, B. (2026, 7 Ağustos). On Sep 1 Google Ads To Migrate ACA & Campaign-Level Broad Match To AI Max. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ads-migrate-ai-max-sep1-41829.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Ads",
        "AI Max",
        "Kozmetik mevzuatı",
        "Arama reklamları",
        "Yapay zekâ",
      ],
    },
    en: {
      slug: "google-ads-ai-max-auto-upgrade-september-2026",
      title: "Google Ads moves your campaign to AI Max on September 1: what changes for beauty brands?",
      metaTitle: "Google Ads AI Max Auto-Upgrade (Sept 1, 2026) | Beauty Brands",
      metaDescription: "Google Ads upgrades ACA and campaign-level broad match to AI Max on September 1, 2026. What it means for cosmetics claim liability, plus a pre-migration checklist.",
      excerpt: "On September 1, 2026, Google Ads upgrades campaigns using automatically created assets and the campaign-level broad match setting to AI Max. For beauty brands, part of the ad copy moves to a model — while claim liability stays with you.",
      intro: [
        "Two legacy Google Ads settings close on 1 September 2026: **automatically created assets (ACA)** and the **campaign-level broad match setting**. Search campaigns using either will be upgraded to AI Max automatically ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
        "The change reads as technical, but for cosmetics brands the practical consequence is specific: from that date, part of your ad headlines can be written by a model, derived from the copy already on your site. Under cosmetics regulation that headline is still your claim, and the burden of proof is still yours.",
        "Below we separate three things: what exactly changes on 1 September, which cohort inherits what, and what to check before that date — each with its source.",
      ],
      sections: [
        {
          h2: "What exactly happens on September 1?",
          blocks: [
            {
              type: "p",
              text: "On 15 April 2026, Google announced AI Max was leaving beta and that three legacy settings — Dynamic Search Ads (DSA), automatically created assets (ACA) and the campaign-level broad match setting — would upgrade to AI Max automatically in September ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)). That post was updated on 11 June 2026, splitting the timeline in two.",
            },
            {
              type: "quote",
              text: "Please note that campaigns using Automatically Created Assets (ACA) and campaign-level broad match setting will continue to be auto-upgraded starting in September 2026.",
              cite: "Google Ads & Commerce Blog, 11 June 2026 update",
              citeUrl: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
            },
            {
              type: "p",
              text: "The DSA sunset and auto-upgrade moved to February 2027; ACA and campaign-level broad match stayed in September 2026. On 5 August 2026, Google emailed affected accounts directly and fixed the date at 1 September ([Search Engine Roundtable, 2026](https://www.seroundtable.com/google-ads-migrate-ai-max-sep1-41829.html); [PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)).",
            },
            {
              type: "h3",
              text: "Two cohorts, two different defaults",
            },
            {
              type: "ul",
              items: [
                "**Campaigns using ACA:** upgraded to AI Max with search term matching *and* text customization enabled by default.",
                "**Campaigns using the campaign-level broad match setting:** upgraded with search term matching enabled by default, and nothing else.",
              ],
            },
            {
              type: "p",
              text: "The distinction matters more than it looks. ACA governed creative generation only; search term matching governs which queries an ad is eligible for. Unless it is switched off at ad group level, the ACA cohort inherits automated query expansion alongside automated copy from 1 September.",
            },
            {
              type: "p",
              text: "In the broad match cohort, text customization and final URL expansion are not enabled by default. That has a direct consequence on the cosmetics side: pinning in responsive search ads continues to be respected — a meaningful difference for advertisers who rely on pinning to hold compliance language in a fixed position ([PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)).",
            },
          ],
        },
        {
          h2: "Why is this not an ordinary setting change for a beauty brand?",
          blocks: [
            {
              type: "p",
              text: "Text customization — formerly automatically created assets — is a campaign-level setting that adds Google-generated headlines and descriptions alongside the ones you wrote. According to Google's documentation, generation combines two methods: \"extractive\" techniques that take snippets from landing page titles, descriptions and meta tags, and generative AI grounded in landing page content. Assets are reviewed and refreshed at least every 48 hours, and Google-generated assets serve only when predicted to outperform the headlines and descriptions you uploaded ([Google Ads Help, 2026](https://support.google.com/google-ads/answer/11259373)).",
            },
            {
              type: "p",
              text: "The mechanism in one line: your ad copy becomes a derivative of your site copy. In cosmetics that handover is regulatory-sensitive, because how much of a product page's wording is genuinely the brand's own decision is an open question — the picture we found when we [audited 216 beauty brand websites](/en/blog/turkish-beauty-brands-website-audit-2026) is a reminder of that.",
            },
            {
              type: "p",
              text: "Türkiye's medicines and medical devices agency (TİTCK) defines a cosmetic claim as the information, statements or visuals used on the product's \"label, packaging and/or promotional materials\" ([TİTCK, 2024](https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf)). A search ad headline falls inside that definition. The guideline sets out six common criteria: legal compliance, truthfulness, evidential support, honesty, fairness, and informed decision-making.",
            },
            {
              type: "h3",
              text: "The criteria generative copy pushes against by design",
            },
            {
              type: "ul",
              items: [
                "**Honesty.** The guideline rejects superlative claims such as \"unique, unmatched, best, most effective\" for cosmetic products sharing the same properties. A model writing headlines for click performance gravitates toward exactly those patterns.",
                "**Truthfulness.** The guideline's own example is explicit: a product with only short-term moisturising proven cannot claim \"provides 48-hour moisturisation.\" If a duration or percentage on your landing page migrates into a headline, the evidential burden is yours.",
                "**Fairness.** The guideline disallows \"paraben-free\" on the grounds that it disparages the whole paraben group, which is safe when used in line with the regulation. If that phrasing sits on your site, it can surface in generated copy.",
              ],
            },
            {
              type: "p",
              text: "The borderline-products guideline draws an even harder line: expressions used in promoting a cosmetic product must not aim to treat or prevent any disease, must not claim or imply pharmacological, immunological or metabolic effect, and must not contain a health claim. The same guideline treats melanin-related skin changes such as melasma, chloasma and lentigo as diseases — which places a \"treats dark spots\" framing outside cosmetics regulation altogether ([TİTCK, Version 2.0](https://titck.gov.tr/storage/announcement/pAoYZcsl.pdf)).",
            },
          ],
        },
        {
          h2: "Who is responsible for ad copy that Google wrote?",
          blocks: [
            {
              type: "p",
              text: "Google's own documentation answers this indirectly but clearly. The text customization page warns the advertiser directly:",
            },
            {
              type: "quote",
              text: "Ensure your website content is accurate, not misleading, and not in violation of Google Ads policies or applicable laws.",
              cite: "Google Ads Help, About text customization in Search campaigns",
              citeUrl: "https://support.google.com/google-ads/answer/11259373",
            },
            {
              type: "p",
              text: "On the regulatory side, responsibility does not sit with the platform either. The TİTCK guideline places compliance with the common criteria on the \"responsible person\" and requires the claim to be consistent with the documentation that person holds ([TİTCK, 2024](https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf)). Read together, the two documents point the same way: even when a model writes the line, the claim is yours and so is the burden of proof.",
            },
            {
              type: "p",
              text: "This pattern repeats wherever AI enters ad production. The same distinction comes up when weighing [whether AI-generated videos actually work in advertising](/en/blog/ai-generated-video-in-advertising): delegating production is not delegating responsibility.",
            },
          ],
        },
        {
          h2: "What should you check before September 1?",
          blocks: [
            {
              type: "p",
              text: "Every step below maps to a control documented by Google. None of it is guesswork about your account.",
            },
            {
              type: "ul",
              items: [
                "**Identify the affected campaigns.** Only Search campaigns with ACA or the campaign-level broad match setting enabled are in scope. If neither is on, nothing changes for you on 1 September.",
                "**Set up text guidelines.** A campaign-level feature, currently in beta. You can define up to 25 term exclusions and up to 40 messaging restrictions per campaign. Guidelines apply retroactively to existing Google-generated assets: non-compliant ones stop serving and are marked as removed ([Google Ads Help, 2026](https://support.google.com/google-ads/answer/16489313)).",
                "**Remember term exclusions are language-specific.** Per Google's note, excluding a term in one language will not prevent its equivalent in another from appearing. If you advertise in Turkish, the list has to be built in Turkish.",
                "**Clean up your landing page copy.** That is the source material. Google states that when a landing page changes, assets are refreshed within 48 hours — so corrections propagate at the same speed.",
                "**Review brand settings.** Inclusion and exclusion lists are upgraded into the AI Max suite; where a campaign carries both, exclusions take priority ([Google Ads Help](https://support.google.com/google-ads/answer/13721847)).",
                "**Check the budget.** Google states plainly that AI Max will not be effective on a budget-limited campaign. Search term matching widens the eligible query pool, not the budget funding it.",
                "**Validate tracking templates.** Required if you enable final URL expansion: static tracking URLs and non-standard lpurl usage can produce 404s or route users to the tracking destination itself ([Google Ads Help, 2026](https://support.google.com/google-ads/answer/15910187?hl=tr)).",
                "**Put asset reporting on a schedule.** Reading generated headlines regularly is not a set-and-forget task; compliance review only happens by eye.",
              ],
            },
          ],
        },
        {
          h2: "Can you refuse the upgrade entirely?",
          blocks: [
            {
              type: "p",
              text: "There are three paths: move to AI Max on your own schedule, switch the legacy settings off entirely, or accept the default configuration that arrives on 1 September. There is no fourth path that preserves ACA or the campaign-level broad match setting in its current form. Google's recommendation is to migrate now in order to keep control of the setup.",
            },
            {
              type: "p",
              text: "Keep performance expectations measured. Google reports that AI Max campaigns using the full feature suite — search term matching, text customization and final URL expansion — see an average of 7% more conversions or conversion value at a similar CPA/ROAS compared with using search term matching alone. The post's own footnote identifies this as Google internal data from 2026, covering non-Retail advertisers ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
            },
            {
              type: "p",
              text: "Independent practitioner testing has reported weaker outcomes ([PPC Land, 2026](https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/)). It is worth noting those tests are agency and consultant account measurements, not peer-reviewed studies. Neither Google's figure nor the counter-measurements is a forecast for your account.",
            },
            {
              type: "p",
              text: "Structuring the migration as an experiment — a limited campaign first, measured on your own numbers — shrinks the regulatory risk and the performance risk at the same time. If you do not have the time to run that migration, our [performance advertising service](/en/services#ads) exists for exactly this kind of setup decision.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "If my account has neither ACA nor campaign-level broad match, am I affected?",
          a: "No. Google's notice covers only Search campaigns with one of those two settings enabled. If neither is in use, your campaign structure does not change on 1 September.",
        },
        {
          q: "Do my Dynamic Search Ads campaigns also migrate on September 1?",
          a: "No. On 11 June 2026, Google moved the DSA sunset and auto-upgrade timeline to February 2027. The September 2026 date for ACA and campaign-level broad match was left unchanged ([Google, 2026](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)).",
        },
        {
          q: "Can I turn text customization off and still use the rest of AI Max?",
          a: "Yes — text customization is a campaign-level setting and can be switched off individually. However, final URL expansion requires text customization to be on, so disabling one makes the other unavailable ([Google Ads Help, 2026](https://support.google.com/google-ads/answer/11259373)).",
        },
        {
          q: "Can text guidelines fully block non-compliant wording?",
          a: "No, there is no guarantee. The feature is in beta, term exclusions are capped at 25 per campaign and work per language, and messaging restrictions only accept hard, concrete requirements. Guidelines narrow the risk but do not replace regular review of generated assets in reporting ([Google Ads Help, 2026](https://support.google.com/google-ads/answer/16489313)).",
        },
        {
          q: "If Google wrote the ad copy, who is liable under cosmetics regulation?",
          a: "Under the TİTCK guideline, ensuring a claim meets the common criteria is the responsible person's obligation, and the claim must be consistent with the documentation they hold. Google's own documentation likewise leaves accuracy and compliance with applicable laws to the advertiser.",
        },
      ],
      sources: [
        {
          label: "Ervin, B. (2026, April 15; updated 11 June 2026). We're upgrading Dynamic Search Ads to AI Max. Google Ads & Commerce Blog.",
          url: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
          publisher: "Google",
        },
        {
          label: "Google. About text customization in Search campaigns. Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/11259373",
          publisher: "Google Ads Help",
        },
        {
          label: "Google. How AI Max for Search campaigns works. Google Ads Help (Turkish edition).",
          url: "https://support.google.com/google-ads/answer/15910187?hl=tr",
          publisher: "Google Ads Help",
        },
        {
          label: "Google. Use text guidelines with Performance Max and Search campaigns (beta). Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/16489313",
          publisher: "Google Ads Help",
        },
        {
          label: "Google. About brand settings for Search and Performance Max. Google Ads Help.",
          url: "https://support.google.com/google-ads/answer/13721847",
          publisher: "Google Ads Help",
        },
        {
          label: "Turkish Medicines and Medical Devices Agency. (2024). Guideline on the Claims of Cosmetic Products (KÜD-KLVZ-11, Rev. 6, 08.10.2024).",
          url: "https://www.rok.org.tr/wp-content/uploads/2024/12/Kozmetik-Urunlerin-Iddialarina-Iliskin-Kilavuz-Surum-7_14.10.24.pdf",
          publisher: "TİTCK (accessed via rok.org.tr copy)",
        },
        {
          label: "Turkish Medicines and Medical Devices Agency. Guideline on Products Bordering on Cosmetic Products, Version 2.0.",
          url: "https://titck.gov.tr/storage/announcement/pAoYZcsl.pdf",
          publisher: "TİTCK",
        },
        {
          label: "Rijo, L. (2026, August 6). Google Ads broad match campaigns face AI Max auto-upgrade on September 1. PPC Land.",
          url: "https://ppc.land/google-ads-broad-match-campaigns-face-ai-max-auto-upgrade-on-september-1/",
          publisher: "PPC Land",
        },
        {
          label: "Schwartz, B. (2026, August 7). On Sep 1 Google Ads To Migrate ACA & Campaign-Level Broad Match To AI Max. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/google-ads-migrate-ai-max-sep1-41829.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Ads",
        "AI Max",
        "Cosmetics regulation",
        "Search ads",
        "AI",
      ],
    },
  },
};
