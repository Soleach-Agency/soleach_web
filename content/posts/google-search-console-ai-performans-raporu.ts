import type { BlogPost } from "@/lib/blog";

export const googleSearchConsoleAiPerformansRaporu: BlogPost = {
  id: "google-search-console-ai-performans-raporu",
  publishedAt: "2026-09-02",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "google-search-console-ai-performans-raporu",
      title: "Google Search Console AI performans raporu nasıl okunur?",
      metaTitle: "Search Console AI Performans Raporu | Soleach",
      metaDescription: "Google Search Console AI performans raporu ve AI kontrolü artık küresel. Kozmetik markan görünürlüğü nasıl ölçmeli, veriyi nasıl yorumlamalı?",
      excerpt: "Search Console artık AI Overviews, AI Mode ve Discover'daki üretken yapay zekâ görünürlüğünü ayrı raporluyor; aynı panel, markana bu görünürlüğü açıp kapatma kontrolü de veriyor. Kozmetik markası için asıl iş, gösterimi satış sanmadan sayfa bazlı bir karar düzeni kurmak.",
      intro: [
        "Google, Search Console'daki üretken yapay zekâ performans içgörülerini 31 Ağustos 2026 itibarıyla dünya çapındaki tüm sitelere açtığını belirtiyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Aynı tarihli güncelleme, sitenin AI Overviews, AI Mode ve Discover'ın üretken yapay zekâ özelliklerine dahil edilmesini yöneten kontrolün de küresel olduğunu söylüyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
        "Bu iki araç aynı sorunun iki yarısı: rapor nerede göründüğünü, kontrol ise görünmeye uygun olup olmadığını yönetiyor. Fakat rapor bir satış veya talep raporu değil; mevcut sürümün odağı gösterim, sayfa, ülke, cihaz ve tarihtir.",
      ],
      sections: [
        {
          h2: "Google Search Console AI performans raporunda ne değişti?",
          blocks: [
            {
              type: "p",
              text: "Google Search Console AI performans raporu, 31 Ağustos 2026 itibarıyla küresel kullanıma açıldı; Search ve Discover için üretken yapay zekâ görünürlüğünü ayrı görünümlerde sunuyor. Google'ın Haziran duyurusu bu raporları AI Overviews, AI Mode ve Discover'daki üretken özellikler için ayrı gösterim görünümleri olarak tanımlıyor ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).",
            },
            {
              type: "p",
              text: "Raporu görmüyorsan ilk kontrolün hata aramak değil, veri eşiği olmalı. Google'ın yardım sayfası, sitenin Google Search'teki üretken yapay zekâ özelliklerinde yeterli gösterim almamasını olası nedenlerden biri olarak sayıyor; site bu özelliklerden hariç tutulduysa rapor da görünmeyebilir ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "Bu yazı, geniş bir [GEO rehberinin](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) yerine geçmiyor. Buradaki daha dar soru şu: Search Console'ın yeni raporu ve kontrolü, kozmetik markasının Google içindeki AI görünürlüğü hakkında hangi kararı destekleyebilir?",
            },
          ],
        },
        {
          h2: "Google Search Console AI performans raporu neyi ölçüyor?",
          blocks: [
            {
              type: "p",
              text: "Google Search Console AI performans raporu, Search tarafında AI Overviews ve AI Mode'daki organik gösterimleri; sayfa, ülke, tarih ve cihaz boyutlarıyla ölçüyor. Discover için ayrı bir üretken yapay zekâ performans raporu bulunuyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "Mevcut raporda tıklama ve sorgu verisi yok; dolayısıyla hangi arama ifadesinin gösterimi ürettiğini veya gösterimin site ziyaretine dönüp dönmediğini bu ekrandan göremezsin ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html)). Search Labs deneyleri de rapora dahil edilmiyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "Bunun pratik anlamı net: gösterim, görünürlük sinyalidir; satış, tıklama veya marka tercihi değildir. Bir serum rehberinin gösterimi artıyorsa o sayfanın üretken arama yüzeylerinde daha sık göründüğünü söyleyebilirsin. Neden arttığını veya ticari sonuç üretip üretmediğini tek başına bu rapordan çıkaramazsın.",
            },
          ],
        },
        {
          h2: "Kozmetik markası Search Console AI raporunu nasıl analiz etmeli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik markası Search Console AI raporunu önce sayfa gruplarına, sonra ülke, cihaz ve tarih kırılımlarına ayırmalı. Google, sayfa boyutunun üretken özellikte bağlanan nihai URL'ye göre; ülke boyutunun aramanın başladığı ülkeye göre gruplandığını açıklıyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "URL'leri ürün sayfası, kategori sayfası ve editoryal rehber olarak üç gruba ayır; toplam gösterim tek başına hangi içerik tipinin çalıştığını söylemez.",
                "Cilt bakımı, makyaj, saç bakımı, parfüm ve güneş bakımı sayfalarını ayrı izle; bir kategorideki artışı bütün markaya genelleme.",
                "Ülke ve cihaz kırılımını, gerçekten satış yaptığın pazarlar ve mobil deneyimle birlikte oku.",
                "İçerik güncellemesi yaptığın tarihi not et; önceki ve sonraki dönemi karşılaştır, fakat zaman birlikteliğini neden-sonuç kanıtı gibi sunma.",
              ],
            },
            {
              type: "p",
              text: "Grafik toplamı ile tablo toplamı farklı görünebilir. Google bunu, mülk ve sayfa düzeyindeki toplama biçimlerinin değişebilmesiyle açıklıyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Bu yüzden ekip içi raporda hangi boyutu ve filtreyi kullandığını mutlaka kaydet.",
            },
          ],
        },
        {
          h2: "Search Console AI kontrolü kozmetik markası için ne yapıyor?",
          blocks: [
            {
              type: "p",
              text: "Search Console AI kontrolü, sitenin bağlantı ve içeriğinin AI Overviews, AI Mode ve Discover'ın üretken özelliklerinde görünmeye ve yanıtları temellendirmeye uygun olup olmadığını yönetiyor. Varsayılan seçenek dahil edilmek; hariç tutma seçeneği ise bu yüzeylerde görünürlüğü, trafiği ve gösterimi kaldırıyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "p",
              text: "Bu, bir ürün sayfasını tek tek açıp kapatan editoryal bir düğme gibi düşünülmemeli. Karar mülk düzeyinde çalıştığı için; içerik lisansı, marka güvenliği veya yasal gerekçe ile alınacak bir hariç tutma kararı, yararlı içeriklerin AI görünürlüğünü de kaybettirebilir. Google, bir mülkün en yakın ana mülkündeki ayarı devralabileceğini belirtiyor; değişiklikten önce devralma durumunu kontrol et ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "p",
              text: "Google, bu kontrolün üretken yapay zekâ özellikleri dışındaki Search sıralama veya dahil edilme sinyali olarak kullanılmadığını ve AI eğitimi üzerinde etkisi bulunmadığını açıkça belirtiyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). Yani AI görünürlüğü, model eğitimi ve genel arama indekslemesi üç ayrı karar alanı.",
            },
          ],
        },
        {
          h2: "Kozmetik markası Search Console AI görünürlüğünü kapatmalı mı?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik markası, açık bir hukukî veya lisans gerekçesi yoksa Search Console AI görünürlüğünü veri toplamadan kapatmamalı. Hariç tutma, üretken yapay zekâ yüzeylerinden trafik ve gösterim alınmaması anlamına geldiği için önce mevcut görünürlüğe ait bir başlangıç çizgisi kaydetmek daha ölçülebilir bir karardır ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Karşılaştırılabilir yakın dönemin toplam gösterimini ve en görünür sayfalarını dışa aktar.",
                "Ürün, kategori ve rehber sayfalarının payını ayrı kaydet.",
                "Hariç tutma gerekçesini yazılı hale getir: telif, lisans, mevzuat veya marka güvenliği.",
                "Karar değişirse etkinin görünmesi için aynı tarih aralığı ve boyutlarla yeniden ölç.",
              ],
            },
            {
              type: "p",
              text: "Tek bir doğru cevap yok. Ürün bilgisinin keşfedilmesini isteyen bir marka ile lisanslı araştırma içeriğini koruyan bir yayıncının riskleri aynı değildir. Burada önemli olan, düğmeyi bir SEO hilesi gibi değil; ölçülmüş görünürlük ile içerik yönetişimi arasında alınan bir yayın kararı olarak ele almaktır.",
            },
          ],
        },
        {
          h2: "Search Console AI raporu içerik kararına nasıl çevrilir?",
          blocks: [
            {
              type: "p",
              text: "Search Console AI raporu, hangi sayfa kümelerinin görünürlük kazandığını gösterip sonraki içerik deneyi için öncelik belirlemeli; tek başına başarı puanı olmamalı. Sayfa ve tarih kırılımlarını kullanarak bir değişikliği önce küçük bir içerik grubunda dene, sonra aynı raporda yön ve süreklilik ara.",
            },
            {
              type: "p",
              text: "Google, AI Overviews ve AI Mode için temel SEO iyi uygulamalarının geçerli olduğunu; destekleyici bağlantı olarak görünmek için sayfanın indekslenmiş, snippet göstermeye uygun ve Search teknik gerekliliklerini karşılıyor olması dışında ek bir teknik şart bulunmadığını söylüyor ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/ai-features)).",
            },
            {
              type: "ul",
              items: [
                "Ürün iddiasını kaynak, içerik tarihi ve açık ürün ayrıntısıyla destekle; belirsiz pazarlama cümlesini çoğaltma.",
                "En çok gösterim alan rehberdeki soruları ürün ve kategori sayfalarının bilgi mimarisiyle karşılaştır.",
                "Görünmeyen sayfayı hemen yeniden yazma; indekslenebilirlik, canonical, snippet uygunluğu ve içerik özgüllüğünü sırayla kontrol et.",
                "Geniş AI Overview davranışını değerlendirirken [kaynak görünürlüğü analizimizi](/tr/blog/ai-overview-kaynagi-senin-siten-degil-listicle) bu rapordaki sayfa verisiyle birlikte kullan.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Google Search Console AI performans raporu herkese açıldı mı?",
          a: "Google'ın yardım belgesi, üretken yapay zekâ performans içgörülerinin 31 Ağustos 2026 itibarıyla dünya çapındaki tüm sitelere açıldığını söylüyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Yine de bir mülk yeterli üretken AI gösterimi almadıysa rapor görünmeyebilir; hariç tutma ayarı da görünürlüğü etkiler.",
        },
        {
          q: "Search Console AI raporunda tıklama ve sorgu var mı?",
          a: "Hayır. Mevcut rapor gösterim verisini sayfa, ülke, tarih ve cihaz boyutlarıyla sunuyor; tıklama ve sorgu verisi sağlamıyor ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html)). Bu nedenle rapor görünürlüğü ölçer, hangi sorgunun satış veya ziyaret ürettiğini tek başına açıklamaz; tıklama oranı ya da dönüşüm sonucu da çıkaramazsın.",
        },
        {
          q: "Search generative AI kontrolünü kapatmak normal SEO'yu etkiler mi?",
          a: "Google'a göre bu kontrol, üretken yapay zekâ özellikleri dışındaki Search bölümleri için sıralama veya dahil edilme sinyali değildir ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). Ancak hariç tutulan site AI Overviews, AI Mode ve Discover'ın üretken yüzeylerinden trafik veya gösterim alamaz; kararın kapsamı budur.",
        },
        {
          q: "Search Console AI kontrolü Google'ın model eğitimini durdurur mu?",
          a: "Hayır. Google'ın yardım belgesi, Search generative AI kontrolünün AI eğitimini etkilemediğini açıkça söylüyor ve eğitim kullanımını sınırlamak için Google-Extended'ı ayrı seçenek olarak gösteriyor ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). AI yüzeylerinde görünmek, genel indekslenme ve model eğitimi aynı kontrol değildir; bu ayrımı karar kaydında açık tut.",
        },
      ],
      sources: [
        {
          label: "Google Search Console Help. (2026). Generative AI performance report (Search).",
          url: "https://support.google.com/webmasters/answer/16984139?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Search generative AI control.",
          url: "https://support.google.com/webmasters/answer/16908024?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026, 3 Haziran). Introducing Search Generative AI performance reports in Search Console.",
          url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026). AI features and your website.",
          url: "https://developers.google.com/search/docs/appearance/ai-features",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, 1 Eylül). Global: Google Search Console AI Performance Report & AI Control.",
          url: "https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Search Console",
        "AI Overviews",
        "AI Mode",
        "GEO",
        "Ölçümleme",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "google-search-console-ai-performance-report",
      title: "How should beauty brands read the Search Console AI report?",
      metaTitle: "Search Console AI Performance Report | Soleach",
      metaDescription: "Google Search Console's AI performance report and control are now global. Learn how beauty brands should measure visibility and interpret the data.",
      excerpt: "Search Console now separates generative AI visibility across AI Overviews, AI Mode and Discover, while a control in the same product lets site owners include or exclude their content. For beauty brands, the job is to build a page-level decision process without mistaking impressions for sales.",
      intro: [
        "Google says Search Console's generative AI performance insights were rolled out to all websites worldwide as of August 31, 2026 ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). An update dated the same day says the control governing inclusion in AI Overviews, AI Mode and generative AI features in Discover is also global ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
        "These tools cover two halves of one question: the report shows where a site appears, while the control governs whether it is eligible to appear. But this is not a sales or demand report; the current view focuses on impressions, pages, countries, devices and dates.",
      ],
      sections: [
        {
          h2: "What changed in the Google Search Console AI performance report?",
          blocks: [
            {
              type: "p",
              text: "The Google Search Console AI performance report became globally available as of August 31, 2026, with separate views for generative AI visibility in Search and Discover. Google's June announcement describes dedicated impression views for AI Overviews, AI Mode and generative AI features in Discover ([Google Search Central (2026)](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).",
            },
            {
              type: "p",
              text: "If you do not see the report, check the data threshold before assuming something is broken. Google's help page lists insufficient impressions in generative AI features as one possible reason; a site excluded from those features may also lack report visibility ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "This article does not replace a broad [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide). It answers a narrower question: what decision can the new Search Console report and control support for a beauty brand's AI visibility inside Google?",
            },
          ],
        },
        {
          h2: "What does the Google Search Console AI performance report measure?",
          blocks: [
            {
              type: "p",
              text: "The Google Search Console AI performance report measures organic impressions in AI Overviews and AI Mode, broken down by page, country, date and device. Generative AI visibility in Discover has a separate report ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "The current report has no click or query data, so it cannot tell you which phrase produced an impression or whether that impression became a site visit ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html)). Search Labs experiments are also excluded ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "p",
              text: "The practical distinction is simple: an impression is a visibility signal, not a sale, click or preference measure. If impressions rise for a serum guide, you can say that page appeared more often in generative Search surfaces. This report alone cannot establish why it rose or whether it produced commercial value.",
            },
          ],
        },
        {
          h2: "How should a beauty brand analyze the Search Console AI report?",
          blocks: [
            {
              type: "p",
              text: "A beauty brand should analyze the Search Console AI report by grouping URLs first, then comparing country, device and date dimensions. Google says the page dimension uses the final linked URL, while the country dimension uses the country where the search originated ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Group URLs into product, category and editorial-guide pages; a property total does not reveal which content type is gaining visibility.",
                "Track skincare, makeup, haircare, fragrance and suncare separately; do not generalize a gain in one category to the whole brand.",
                "Read country and device splits alongside the markets you actually sell in and the quality of your mobile experience.",
                "Log each content-change date and compare before and after, but do not present timing alone as proof of causation.",
              ],
            },
            {
              type: "p",
              text: "Chart and table totals can differ. Google attributes this to changes in aggregation at property and page level ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). Record the dimension and filters behind every internal report so that two teams do not compare different totals as if they were the same measure.",
            },
          ],
        },
        {
          h2: "What does the Search Console AI control do for a beauty brand?",
          blocks: [
            {
              type: "p",
              text: "The Search Console AI control governs whether a site's links and content are eligible to appear in and ground responses across AI Overviews, AI Mode and generative AI features in Discover. Inclusion is the default; exclusion removes visibility, traffic and impressions from those surfaces ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "p",
              text: "Do not treat this as an editorial switch for a single product page. Because the decision operates at property level, an exclusion made for licensing, brand-safety or legal reasons can also remove useful content from AI visibility. Google says a property may inherit the setting of its closest parent property; check that inheritance before making a change ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "p",
              text: "Google says the control is not used as a ranking or inclusion signal outside the listed generative Search features, and it does not affect AI training ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). AI visibility, model training and general Search indexing are three separate decisions.",
            },
          ],
        },
        {
          h2: "Should a beauty brand turn off Search Console AI visibility?",
          blocks: [
            {
              type: "p",
              text: "A beauty brand should not turn off Search Console AI visibility before collecting a baseline unless it has a clear legal or licensing reason. Because exclusion means receiving no traffic or impressions from generative AI surfaces, recording the starting level first creates a more measurable decision ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)).",
            },
            {
              type: "ul",
              items: [
                "Export total impressions and the most visible pages for a recent, comparable period.",
                "Record the shares of product, category and editorial-guide pages separately.",
                "Write down the reason for exclusion: copyright, licensing, regulation or brand safety.",
                "If the decision changes, measure again with the same date range and dimensions.",
              ],
            },
            {
              type: "p",
              text: "There is no universal answer. A brand that wants product information discovered does not have the same risk profile as a publisher protecting licensed research. Treat the toggle as a publishing decision between measured visibility and content governance, not as an SEO trick.",
            },
          ],
        },
        {
          h2: "How should the Search Console AI report guide content decisions?",
          blocks: [
            {
              type: "p",
              text: "The Search Console AI report should show which page clusters are gaining visibility and help prioritize the next content experiment; it should not become a standalone success score. Use page and date dimensions to test a change on a small content set, then look for direction and persistence in the same report.",
            },
            {
              type: "p",
              text: "Google says foundational SEO best practices still apply to AI Overviews and AI Mode. To appear as a supporting link, a page needs to be indexed, eligible for a snippet and compliant with Search technical requirements; there are no additional technical requirements ([Google Search Central (2026)](https://developers.google.com/search/docs/appearance/ai-features)).",
            },
            {
              type: "ul",
              items: [
                "Support product claims with sources, content dates and specific product details instead of multiplying vague marketing copy.",
                "Compare the questions answered by a high-impression guide with the information architecture of product and category pages.",
                "Do not rewrite an invisible page immediately; check indexability, canonical selection, snippet eligibility and content specificity in order.",
                "When evaluating broader AI Overview behavior, combine the report's page data with our [source-visibility analysis](/en/blog/ai-overviews-cite-listicles-not-your-site).",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is the Google Search Console AI performance report available to everyone?",
          a: "Google's help documentation says generative AI performance insights were rolled out to all websites worldwide as of August 31, 2026 ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16984139?hl=en)). A property may still lack the report if it has not received enough generative AI impressions; an exclusion setting can also affect visibility.",
        },
        {
          q: "Does the Search Console AI report include clicks and queries?",
          a: "No. The current report provides impression data across page, country, date and device dimensions, but not click or query data ([Search Engine Roundtable (2026)](https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html)). It therefore measures visibility; it does not identify which query produced a sale or even a visit.",
        },
        {
          q: "Does turning off Search generative AI affect normal SEO?",
          a: "Google says this control is not a ranking or inclusion signal for parts of Search outside the named generative AI features ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). However, an excluded site receives no traffic or impressions from AI Overviews, AI Mode or generative AI features in Discover; that is the scope of the trade-off.",
        },
        {
          q: "Does the Search Console AI control stop Google model training?",
          a: "No. Google's help document explicitly says the Search generative AI control does not affect AI training and points to Google-Extended as the separate option for limiting training use ([Google Search Console Help (2026)](https://support.google.com/webmasters/answer/16908024?hl=en)). Appearing in AI Search surfaces, general indexing and model training are not the same control.",
        },
      ],
      sources: [
        {
          label: "Google Search Console Help. (2026). Generative AI performance report (Search).",
          url: "https://support.google.com/webmasters/answer/16984139?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Console Help. (2026). Search generative AI control.",
          url: "https://support.google.com/webmasters/answer/16908024?hl=en",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026, June 3). Introducing Search Generative AI performance reports in Search Console.",
          url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
          publisher: "Google",
        },
        {
          label: "Google Search Central. (2026). AI features and your website.",
          url: "https://developers.google.com/search/docs/appearance/ai-features",
          publisher: "Google",
        },
        {
          label: "Schwartz, B. (2026, September 1). Global: Google Search Console AI Performance Report & AI Control.",
          url: "https://www.seroundtable.com/google-search-console-generative-ai-tools-live-41984.html",
          publisher: "Search Engine Roundtable",
        },
      ],
      tags: [
        "Google Search Console",
        "AI Overviews",
        "AI Mode",
        "GEO",
        "Measurement",
        "Cosmetics marketing",
      ],
    },
  },
};
