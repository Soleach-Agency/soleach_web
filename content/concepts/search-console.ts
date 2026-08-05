import type { Concept } from "@/lib/concepts";

/**
 * Its edges are declared on the neighbours (seo, dns, search-engine) —
 * `related` stays empty here so each pair is declared exactly once.
 */
export const searchConsole: Concept = {
  id: "search-console",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: [],
  postIds: [
    "search-console-platform-properties",
    "search-console-instagram-ekleme",
  ],
  locales: {
    tr: {
      slug: "google-search-console",
      name: "Google Search Console",
      graphLabel: "Search Console",
      metaTitle: "Google Search Console Nedir? | Soleach Kavramlar",
      metaDescription:
        "Google Search Console nedir, ne işe yarar? Sitenin ve sosyal hesapların Google Arama performansını sorgu bazında gösteren ücretsiz aracın tanımı.",
      shortDef:
        "Google'ın, bir mülkün arama performansını ve teknik durumunu sahibine ücretsiz gösterdiği araç; sorgu, tıklama, gösterim ve dizine ekleme verisinin birincil kaynağı.",
      sections: [
        {
          h2: "Google Search Console nedir?",
          blocks: [
            {
              type: "p",
              text: "Search Console, Google'ın site sahiplerine sunduğu ücretsiz araçtır ve iki soruyu cevaplar: Google siteni nasıl görüyor, ve insanlar seni hangi kelimelerle buluyor? Performans raporunda tıklama, gösterim, tıklama oranı ve ortalama pozisyon; sorgu, sayfa, ülke ve cihaz kırılımında görünür. Bu veri hiçbir analitik aracında birebir yoktur — çünkü kaynağı doğrudan [arama motorunun](/tr/kavramlar/arama-motoru) kendisidir.",
            },
            {
              type: "p",
              text: "Kullanmak için mülk sahipliğini doğrulaman gerekir. Alan adı (domain) mülkü sahipliği bir [DNS](/tr/kavramlar/dns) TXT kaydıyla doğrular ve alt alan adları ile protokoller dahil her şeyi tek çatıda toplar; URL öneki mülkü ise yalnızca belirtilen adresi kapsar ama HTML dosyası ya da etiket gibi daha kolay doğrulama yolları sunar.",
            },
          ],
        },
        {
          h2: "Neyi gösterir, neyi göstermez?",
          blocks: [
            {
              type: "p",
              text: "Search Console'un gücü teşhiste: bir sayfanın dizine girip girmediğini, hangi sorguda göründüğünü ve neden düştüğünü orada görürsün. Sınırı ise site içi davranış: ziyaretçinin sayfada ne yaptığı, sepete ne eklediği ya da nereden dönüş yaptığı bu araçta yoktur.",
            },
            {
              type: "ul",
              items: [
                "Performans verisi örneklemeli ve gecikmelidir; son iki günün rakamlarına kesin gözüyle bakma.",
                "Sıralama verisi ortalamadır — aynı sorguda cihaza ve ülkeye göre farklı sıralarda görünüyor olabilirsin.",
                "Sosyal ve video hesaplarını da mülk olarak eklemek artık mümkün; bu, Instagram ya da TikTok içeriğinin Google Arama'daki performansını gösterir, platform içi izlenmeleri değil.",
              ],
            },
            {
              type: "p",
              text: "Platform mülklerinin ne verip ne vermediğini [bu yazıda](/tr/blog/search-console-platform-properties-instagram-tiktok-youtube), Instagram hesabının kurulumunu ise [adım adım burada](/tr/blog/search-console-instagram-hesabi-nasil-eklenir) anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Search Console ile Google Analytics arasındaki fark nedir?",
          a: "Search Console siteye gelmeden önceki tarafı gösterir: hangi sorguda göründün, kaç gösterim ve tıklama aldın, sayfaların dizine girdi mi. Analytics ise siteye geldikten sonrasını ölçer: hangi sayfaları gezdi, ne kadar kaldı, dönüşüm oldu mu. İkisi rakip değil, aynı yolculuğun iki yarısıdır.",
        },
        {
          q: "Search Console verisi neden Analytics'ten farklı çıkıyor?",
          a: "Farklı şeyleri sayıyorlar. Search Console tıklamayı arama sonucunda ölçer; Analytics ise sayfanın açılıp ölçüm kodunun çalışmasını bekler. Arada kaybolan tıklamalar (hemen kapatılan sekmeler, engellenen scriptler, yönlendirmeler) iki rakamın hiçbir zaman birebir tutmamasına yol açar. Trendi karşılaştır, mutlak sayıyı değil.",
        },
      ],
      tags: [
        "Google Search Console",
        "SEO",
        "Arama performansı",
        "Dizine ekleme",
      ],
    },
    en: {
      slug: "google-search-console",
      name: "Google Search Console",
      graphLabel: "Search Console",
      metaTitle: "What Is Google Search Console? | Soleach Concepts",
      metaDescription:
        "Google Search Console explained: the free tool showing how Google sees your property and which queries bring you clicks, impressions and position data.",
      shortDef:
        "Google's free tool showing a property owner how their content performs in search; the primary source for query, click, impression and indexing data.",
      sections: [
        {
          h2: "What is Google Search Console?",
          blocks: [
            {
              type: "p",
              text: "Search Console is Google's free tool for property owners, and it answers two questions: how does Google see your site, and what are people searching to find you? The performance report shows clicks, impressions, click-through rate and average position, broken down by query, page, country and device. No analytics tool has this data — it comes straight from [the search engine](/en/concepts/search-engine) itself.",
            },
            {
              type: "p",
              text: "Using it requires verifying ownership. A domain property verifies through a [DNS](/en/concepts/dns) TXT record and covers every subdomain and protocol under one roof; a URL-prefix property covers only the address you specify but offers easier verification paths such as an HTML file or a meta tag.",
            },
          ],
        },
        {
          h2: "What it shows — and what it doesn't",
          blocks: [
            {
              type: "p",
              text: "Search Console's strength is diagnosis: whether a page made it into the index, which queries it appears for, and why it dropped. Its limit is on-site behaviour — what a visitor did on the page, what they added to the cart, where they abandoned, none of that is here.",
            },
            {
              type: "ul",
              items: [
                "Performance data is sampled and delayed; do not treat the last two days as final.",
                "Position data is an average — you may rank very differently for the same query across devices and countries.",
                "Social and video accounts can now be added as properties too; that shows how your Instagram or TikTok content performs in Google Search, not in-platform views.",
              ],
            },
            {
              type: "p",
              text: "We covered what platform properties do and don't give you [here](/en/blog/search-console-platform-properties-instagram-tiktok-youtube), and the Instagram setup [step by step here](/en/blog/how-to-add-instagram-to-google-search-console).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between Search Console and Google Analytics?",
          a: "Search Console covers everything before the visit: which queries you appeared for, how many impressions and clicks you got, whether your pages are indexed. Analytics measures what happens after arrival: which pages they viewed, how long they stayed, whether they converted. They are two halves of the same journey, not competitors.",
        },
        {
          q: "Why does Search Console data differ from Analytics?",
          a: "They count different things. Search Console measures the click in the search result; Analytics waits for the page to load and its measurement code to run. Clicks lost in between — instantly closed tabs, blocked scripts, redirects — mean the two numbers never match exactly. Compare trends, not absolute figures.",
        },
      ],
      tags: [
        "Google Search Console",
        "SEO",
        "Search performance",
        "Indexing",
      ],
    },
  },
};
