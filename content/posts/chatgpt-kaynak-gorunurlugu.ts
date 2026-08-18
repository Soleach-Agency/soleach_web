import type { BlogPost } from "@/lib/blog";

export const chatgptKaynakGorunurlugu: BlogPost = {
  id: "chatgpt-kaynak-gorunurlugu",
  publishedAt: "2026-08-17",
  category: "seo-geo",
  locales: {
    tr: {
      slug: "chatgpt-kaynak-linkleri-daha-az-gorunur",
      title: "ChatGPT kaynak linklerini gizliyor: kozmetik markası için GEO'da ne değişiyor?",
      metaTitle: "ChatGPT Kaynak Linklerini Gizliyor mu? GEO Etkisi | Soleach",
      metaDescription: "OpenAI, ChatGPT yanıtlarındaki Sources butonunu üç nokta menüsüne taşıyor gibi görünüyor. Kaynak tıklamaları zaten azken bu GEO'da neyi değiştiriyor?",
      excerpt: "OpenAI, ChatGPT'de yanıtların altındaki 'Sources' butonunu üç nokta menüsünün içine taşıyor gibi görünüyor. Kaynak linklerine tıklama zaten nadirken, bu değişiklik GEO'da 'anılmak' ile 'trafik almak' arasındaki farkı büyütüyor.",
      intro: [
        "ChatGPT haftalık aktif kullanıcı sayısında 1 milyara yaklaşıyor — The Information'ın bildirdiğine göre bu eşiğe OpenAI'ın öngördüğünden yedi ay geç ulaşıldı, ama yine de internet tarihinin en hızlı büyüyen uygulamalarından biri olma unvanını koruyor ([PYMNTS (2026)](https://www.pymnts.com/news/artificial-intelligence/2026/chatgpt-approaches-1-billion-weekly-active-user-milestone/)). Bu ölçekte, arayüzde yapılan küçük bir değişiklik bile milyonlarca kullanıcının davranışını etkiliyor.",
        "Ağustos 2026'da SEO danışmanı Glenn Gabe, ChatGPT'de yanıtların altında duran 'Sources' (Kaynaklar) butonunun bazı kullanıcılarda kaybolduğunu, bunun yerine üç nokta simgesiyle açılan 'More actions' (Diğer işlemler) menüsünün içine taşındığını fark etti. Search Engine Roundtable'dan Barry Schwartz, farklı hesaplarda deneyerek bu davranışı doğruladığını yazdı ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)).",
        "OpenAI bu değişikliği resmen açıklamadı; bir A/B testi mi, kalıcı bir arayüz kararı mı, kaç kullanıcıyı kapsıyor — hiçbiri netleşmedi. Yine de yönü GEO'da zaten bildiğimiz bir örüntüyle örtüşüyor: [GEO nedir rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) anlattığımız gibi, yapay zekâ yanıtlarında anılmak ile o yanıttan trafik almak aynı şey değil — ve bu fark her geçen ay biraz daha açılıyor.",
      ],
      sections: [
        {
          h2: "ChatGPT'de tam olarak ne değişti?",
          blocks: [
            {
              type: "p",
              text: "Değişiklikten önce ChatGPT, kaynak kullanılan bir yanıtın altına doğrudan tıklanabilir bir 'Sources' butonu koyuyordu; tıklandığında yanıtı besleyen bağlantıların listelendiği bir panel açılıyordu. Gabe'in paylaştığı ekran görüntülerinde bu buton bazı hesaplarda artık görünmüyor — kaynaklara ulaşmak için önce sağ üstteki üç nokta simgesine, sonra açılan menüden 'View sources'a tıklamak gerekiyor ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)).",
            },
            {
              type: "quote",
              text: "I've noticed ChatGPT not providing a visible link to view sources. You have to click the overflow menu and then click view sources. That can definitely decrease visibility and clicks for citations that show up in the right-side panel.",
              cite: "Glenn Gabe, aktaran Barry Schwartz / Search Engine Roundtable (2026)",
              citeUrl: "https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html",
            },
            {
              type: "p",
              text: "Gabe, değişikliğin nedenini bilmediğini ama kullanıcı dikkatinin başka bir arayüz öğesine — örneğin reklamlara — kaydırılmak istenmiş olabileceğini düşündüğünü yazdı. Bu doğrulanmış bir neden değil, bir yorum; OpenAI konuyla ilgili herhangi bir açıklama yapmadı.",
            },
          ],
        },
        {
          h2: "Kaynak linklerine zaten kim tıklıyordu ki?",
          blocks: [
            {
              type: "p",
              text: "Bu sorunun ChatGPT'ye özel, halka açık bir ölçümü yok — OpenAI kaynak tıklama oranlarını yayınlamıyor. Ama Google'ın kendi yapay zekâ özetlerinde ölçülen davranış, aynı örüntünün ne kadar güçlü olabileceğine dair bir fikir veriyor: [Pew Research Center (2025)](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/), 900 ABD'li yetişkinin Mart 2025'teki gerçek tarayıcı verisini inceledi. Yapay zekâ özeti çıkan aramalarda kullanıcılar geleneksel bir sonuca ziyaretlerin yalnızca %8'inde tıkladı; özetin içindeki kaynak bağlantılarına tıklama ise ziyaretlerin sadece %1'inde kaldı.",
            },
            {
              type: "p",
              text: "Bu, Google AI Overviews için ölçülmüş bir veri — ChatGPT'nin kendi kaynak tıklama oranı farklı olabilir ve muhtemelen çıkış noktası zaten yüksek bir arayüz sürtünmesiyle başlıyordu (buton kendisi zaten bir tıklama gerektiriyordu). Sources butonunu bir tıklama daha geriye, üç nokta menüsünün arkasına taşımak, bu zaten düşük olan oranı daha da aşağı çekmesi beklenen bir arayüz kararı.",
            },
          ],
        },
        {
          h2: "Kozmetik markası için bu neden önemli?",
          blocks: [
            {
              type: "p",
              text: "[AI cevabındaki kaynak senin siten değil, o listicle](/tr/blog/ai-overview-kaynagi-senin-siten-degil-listicle) yazımızda, Google'ın yapay zekâ özetlerinde kaynak gösterilmenin markanın önerilmesi anlamına gelmediğini, üçüncü taraf listelerin araya girebildiğini ele almıştık. Bu ChatGPT değişikliği aynı gerçeğin bir başka yüzü: kaynak gösterilseniz bile — hatta doğru şekilde gösterilseniz bile — kullanıcının o kaynağa tıklaması artık bir tıklama daha uzakta.",
            },
            {
              type: "p",
              text: "Pratik sonuç şu: bir kozmetik markası için sitenin kendisi giderek daha az 'trafik alan sayfa', daha çok 'yapay zekânın okuyup özetlediği bilgi kaynağı' rolüne dönüşüyor. Ürün sayfanda INCI listesi, cilt tipi uyumu, kullanım sıklığı gibi bilgiler eksikse ya da belirsizse, kullanıcı bunu tıklayıp senin sitende düzeltmeyecek — yapay zekânın o eksik ya da yanlış özetiyle yetinecek.",
            },
          ],
        },
        {
          h2: "Ne yapmalısın?",
          blocks: [
            {
              type: "ul",
              items: [
                "İçeriğini tıklanmadan da doğru anlaşılacak şekilde kur: ürün sayfalarında INCI listesi, cilt tipi uyumu ve kullanım bilgisini net cümlelerle yaz — yapay zekânın özetleyeceği metin bu.",
                "Marka bilgini her kanalda tutarlı tut; [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) bunun neden önemli olduğunu ayrıntılandırdık.",
                "Bağımsız üçüncü taraf anılmalara (basın, gerçek yorumlar, editoryal listeler) yatırım yap — kaynak gösterilmekle önerilmek arasındaki farkı kapatan bu.",
                "ChatGPT kaynaklı trafiğini analitik araçlarında ayrı izle; düşüş varsa bunun genel bir eğilim mi yoksa bu arayüz değişikliğiyle mi çakıştığını karşılaştır.",
                "Sources butonunun kendi hesabında nerede göründüğünü ara sıra kontrol et — değişiklik kademeli ve hesaba göre farklı uygulanıyor olabilir.",
              ],
            },
            {
              type: "p",
              text: "Kısacası: ChatGPT'de görünmek yetmiyor, ChatGPT'nin sana ihtiyaç duymadan doğru cevap verebilmesi gerekiyor — çünkü kullanıcı büyük ihtimalle hiç tıklamayacak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bu değişiklik tüm ChatGPT kullanıcılarında mı geçerli?",
          a: "Belirsiz. Glenn Gabe ve Barry Schwartz'ın gözlemleri sınırlı sayıda hesap üzerinden; OpenAI değişikliği resmen doğrulamadı ya da kapsamını açıklamadı ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)). Kademeli bir test olması, bazı kullanıcılarda eski görünümün hâlâ çalışıyor olması mümkün.",
        },
        {
          q: "Bu bir A/B testi mi, kalıcı bir değişiklik mi?",
          a: "Bilinmiyor. OpenAI konuyla ilgili açıklama yapmadı; Gabe'in yorumu ('reklamlara odaklanmak için olabilir') doğrulanmış bir neden değil, bir spekülasyon.",
        },
        {
          q: "ChatGPT'de kaynak linklerine tıklama oranı ne kadar?",
          a: "OpenAI bu veriyi yayınlamıyor. En yakın ölçülebilir gösterge Google'ın kendi AI Overviews'unda: Pew Research Center, yapay zekâ özeti çıkan aramalarda kaynak linkine tıklamanın ziyaretlerin sadece %1'inde kaldığını ölçtü ([Pew Research Center (2025)](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)). Bu Google'a ait bir veri, ChatGPT'ye birebir uygulanamaz ama yönü gösteriyor.",
        },
        {
          q: "GEO stratejimi bu değişikliğe göre nasıl güncellemeliyim?",
          a: "Tıklamayı varsayım olarak almaktan vazgeç. İçeriğini, kullanıcı hiç sitene gelmese bile doğru bilgiyi taşıyacak şekilde kur: net INCI listeleri, açık SSS cevapları, tutarlı marka bilgisi. Detaylar için [GEO rehberimize](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) bakabilirsin.",
        },
      ],
      sources: [
        {
          label: "Schwartz, B. (2026, 13 Ağustos). OpenAI Makes The ChatGPT Sources Less Visible. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Pew Research Center. (2025, 22 Temmuz). Google users are less likely to click on links when an AI summary appears in the results.",
          url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
          publisher: "Pew Research Center",
        },
        {
          label: "PYMNTS. (2026, 29 Temmuz). ChatGPT Approaches 1 Billion Weekly Active User Milestone.",
          url: "https://www.pymnts.com/news/artificial-intelligence/2026/chatgpt-approaches-1-billion-weekly-active-user-milestone/",
          publisher: "PYMNTS",
        },
      ],
      tags: [
        "GEO",
        "ChatGPT",
        "Yapay zekâ görünürlüğü",
        "İçerik stratejisi",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "chatgpt-hides-source-links-geo-impact",
      title: "ChatGPT is hiding source links: what changes in GEO for beauty brands?",
      metaTitle: "Is ChatGPT Hiding Source Links? GEO Impact | Soleach",
      metaDescription: "OpenAI appears to be moving ChatGPT's Sources button into a three-dot menu. Citation clicks were already rare — what does this change for GEO?",
      excerpt: "OpenAI appears to have moved ChatGPT's 'Sources' button behind a three-dot menu. Clicks on cited links were already rare — this update widens the gap between being cited and getting traffic.",
      intro: [
        "ChatGPT is nearing 1 billion weekly active users — a milestone OpenAI reportedly hit seven months later than it had projected, per a report cited by PYMNTS, though it remains among the fastest-growing apps in internet history ([PYMNTS (2026)](https://www.pymnts.com/news/artificial-intelligence/2026/chatgpt-approaches-1-billion-weekly-active-user-milestone/)). At that scale, even a small interface change touches millions of users.",
        "In August 2026, SEO consultant Glenn Gabe noticed that the 'Sources' button under ChatGPT responses had disappeared for some users, replaced by a 'View sources' option tucked inside the three-dot 'More actions' menu. Search Engine Roundtable's Barry Schwartz wrote that he reproduced the behavior himself across different accounts ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)).",
        "OpenAI hasn't officially commented — whether this is an A/B test, a permanent decision, or how many users it covers all remain unclear. Still, the direction fits a pattern we've already covered in GEO: as our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide) explains, being mentioned in an AI answer and getting traffic from that answer aren't the same thing — and that gap keeps widening.",
      ],
      sections: [
        {
          h2: "What exactly changed in ChatGPT?",
          blocks: [
            {
              type: "p",
              text: "Before the change, ChatGPT placed a clickable 'Sources' button directly under a sourced answer; clicking it opened a panel listing the links behind the response. In the screenshots Gabe shared, that button no longer appears for some accounts — reaching the sources now requires clicking the three-dot icon first, then 'View sources' from the menu that opens ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)).",
            },
            {
              type: "quote",
              text: "I've noticed ChatGPT not providing a visible link to view sources. You have to click the overflow menu and then click view sources. That can definitely decrease visibility and clicks for citations that show up in the right-side panel.",
              cite: "Glenn Gabe, quoted by Barry Schwartz / Search Engine Roundtable (2026)",
              citeUrl: "https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html",
            },
            {
              type: "p",
              text: "Gabe wrote that he doesn't know the reason for the change but wondered whether it's meant to shift user attention toward another interface element — such as ads. That's speculation, not a confirmed cause; OpenAI hasn't issued any statement on it.",
            },
          ],
        },
        {
          h2: "Who was clicking on source links anyway?",
          blocks: [
            {
              type: "p",
              text: "There's no public, ChatGPT-specific measurement of this — OpenAI doesn't publish citation click-through rates. But the behavior measured on Google's own AI summaries gives a sense of how strong this pattern can get: [Pew Research Center (2025)](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) analyzed the real browsing data of 900 U.S. adults during March 2025. On searches that produced an AI summary, users clicked a traditional result on just 8% of visits; clicking a source link inside the summary itself happened on only 1% of visits.",
            },
            {
              type: "p",
              text: "That's data measured for Google AI Overviews — ChatGPT's own citation click rate could differ, and arguably started from a higher friction baseline already, since the button itself required a click. Pushing the Sources button one more click deeper, behind the three-dot menu, is an interface decision that would be expected to push an already-low rate lower still.",
            },
          ],
        },
        {
          h2: "Why does this matter for a beauty brand?",
          blocks: [
            {
              type: "p",
              text: "In [The AI answer isn't citing your site — it's citing that listicle](/en/blog/ai-overviews-cite-listicles-not-your-site), we covered how being cited in Google's AI summaries doesn't mean your brand gets recommended, and how third-party lists can get inserted instead. This ChatGPT change is another face of the same reality: even when you are cited — even cited correctly — the user's click to reach that citation is now one step further away.",
            },
            {
              type: "p",
              text: "The practical effect: for a beauty brand, your own site increasingly plays the role of 'the information source the AI reads and summarizes' rather than 'the page that gets the click'. If your product page's INCI list, skin-type compatibility or usage information is missing or unclear, the user won't click through to fix that gap on your site — they'll settle for whatever incomplete or wrong summary the AI gives instead.",
            },
          ],
        },
        {
          h2: "What should you do?",
          blocks: [
            {
              type: "ul",
              items: [
                "Structure your content so it's understood correctly without a click: write INCI lists, skin-type compatibility and usage information in clear sentences on product pages — that's the text the AI will summarize.",
                "Keep your brand information consistent across every channel; our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide) covers why this matters.",
                "Invest in independent third-party mentions (press, genuine reviews, editorial lists) — that's what closes the gap between being cited and being recommended.",
                "Track ChatGPT-referred traffic separately in your analytics; if it drops, check whether that lines up with this interface change or a broader trend.",
                "Check where the Sources button appears on your own account from time to time — the rollout looks gradual and may differ by account.",
              ],
            },
            {
              type: "p",
              text: "In short: appearing in ChatGPT isn't enough anymore. ChatGPT needs to be able to answer correctly without you, because the user probably won't click through to check.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does this change apply to all ChatGPT users?",
          a: "Unclear. Glenn Gabe's and Barry Schwartz's observations cover a limited number of accounts; OpenAI hasn't officially confirmed the change or its scope ([Schwartz, Search Engine Roundtable (2026)](https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html)). It's plausible this is a gradual test and the old layout still works for some users.",
        },
        {
          q: "Is this an A/B test or a permanent change?",
          a: "Unknown. OpenAI hasn't commented. Gabe's theory — that it might be meant to focus attention on ads — is speculation, not a confirmed reason.",
        },
        {
          q: "What's the click-through rate on source links in ChatGPT?",
          a: "OpenAI doesn't publish this figure. The closest measurable proxy is Google's own AI Overviews: Pew Research Center found that clicking a source link inside an AI summary happened in just 1% of visits ([Pew Research Center (2025)](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)). That's Google's data, not a one-to-one figure for ChatGPT, but it shows the direction.",
        },
        {
          q: "How should I update my GEO strategy given this?",
          a: "Stop assuming the click will happen. Structure your content to carry the correct information even if the user never visits your site: clear INCI lists, direct FAQ answers, consistent brand information. Our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide) covers the details.",
        },
      ],
      sources: [
        {
          label: "Schwartz, B. (2026, August 13). OpenAI Makes The ChatGPT Sources Less Visible. Search Engine Roundtable.",
          url: "https://www.seroundtable.com/openai-chatgpt-sources-less-visible-41864.html",
          publisher: "Search Engine Roundtable",
        },
        {
          label: "Pew Research Center. (2025, July 22). Google users are less likely to click on links when an AI summary appears in the results.",
          url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
          publisher: "Pew Research Center",
        },
        {
          label: "PYMNTS. (2026, July 29). ChatGPT Approaches 1 Billion Weekly Active User Milestone.",
          url: "https://www.pymnts.com/news/artificial-intelligence/2026/chatgpt-approaches-1-billion-weekly-active-user-milestone/",
          publisher: "PYMNTS",
        },
      ],
      tags: [
        "GEO",
        "ChatGPT",
        "AI visibility",
        "Content strategy",
        "Cosmetics marketing",
      ],
    },
  },
};
