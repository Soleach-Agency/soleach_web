import type { Concept } from "@/lib/concepts";

export const aiCrawler: Concept = {
  id: "ai-crawler",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["search-engine"],
  postIds: ["geo-rehberi"],
  locales: {
    tr: {
      slug: "yapay-zeka-tarayicilari",
      name: "Yapay Zekâ Tarayıcıları (AI Crawler)",
      graphLabel: "AI Crawler",
      metaTitle: "AI Crawler Nedir? GPTBot, ClaudeBot | Soleach Kavramlar",
      metaDescription:
        "Yapay zekâ tarayıcıları nedir? GPTBot, ClaudeBot ve PerplexityBot gibi botların siteni nasıl okuduğu, neyi göremediği ve erişimin nasıl yönetildiği.",
      shortDef:
        "Yapay zekâ şirketlerinin içerik toplamak ve cevap üretmek için web'i gezen botları; GPTBot, ClaudeBot ve PerplexityBot en bilinen örnekleridir.",
      sections: [
        {
          h2: "Yapay zekâ tarayıcısı nedir?",
          blocks: [
            {
              type: "p",
              text: "Yapay zekâ tarayıcıları, arama motoru botlarına benzer şekilde web sayfalarını gezip içeriği okuyan otomatik programlardır. Farkları amaçlarında: topladıkları içerik bir sonuç listesini sıralamak için değil, model eğitimi ya da bir soruya anlık cevap üretmek için kullanılır. GPTBot, ClaudeBot ve PerplexityBot bu grubun en bilinen örnekleridir.",
            },
            {
              type: "p",
              text: "Kritik teknik ayrıntı: bu botların çoğu JavaScript çalıştırmaz. Yani sayfan tarayıcıda ne kadar zengin görünürse görünsün, sunucudan gelen ham HTML'de olmayan içerik bu botlar için yoktur. Yalnızca tıklamayla açılan bir SSS, sadece scriptle çizilen bir grafik ya da görselin içine yazılmış bir fiyat, onların gözünde boş sayfadır.",
            },
          ],
        },
        {
          h2: "Erişimi yönetmek: engellemek mi, açmak mı?",
          blocks: [
            {
              type: "p",
              text: "Bu botların siteye erişimi robots.txt ve — [Cloudflare](/tr/kavramlar/cloudflare) gibi bir katman kullanıyorsan — bot kurallarıyla yönetilir. Karar ikili değildir: içeriğin izinsiz kullanılmasından endişe edip kapatmak da, yapay zekâ cevaplarında görünmek isteyip açmak da meşru tercihlerdir. Kapatmanın bedeli görünmezliktir; açmanın bedeli, içeriğin kaynak gösterilmeden kullanılabilmesidir.",
            },
            {
              type: "ul",
              items: [
                "Kapatma kararı seçici olabilir: eğitim amaçlı tarayıcıyı engelleyip, cevap anında kaynak getiren tarayıcıya izin vermek mümkündür.",
                "Yanlışlıkla engelleme sık görülür; agresif bir bot kuralı, görünmek istediğin motoru da dışarıda bırakabilir.",
                "Botların gördüğü şey ham HTML olduğu için, önemli içeriği sunucudan gelen işaretlemede bulundurmak [GEO](/tr/kavramlar/geo) çalışmasının temelidir.",
              ],
            },
            {
              type: "p",
              text: "Cevabı üreten model tarafı için [LLM](/tr/kavramlar/llm), klasik tarama tarafı için [arama motoru](/tr/kavramlar/arama-motoru) kavramına bakabilirsin. Pratik uygulaması [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Yapay zekâ tarayıcılarını engellemeli miyim?",
          a: "Değişir. İçeriğinin model eğitiminde kullanılmasını istemiyorsan engelleyebilirsin; bunun bedeli, o motorun cevaplarında markanın anılma ihtimalinin düşmesidir. Görünürlük öncelikliyse açık tutmak mantıklıdır. Karar ikili de değildir: farklı botlara farklı politika uygulanabilir.",
        },
        {
          q: "Sitem yapay zekâ tarayıcılarına açık ama cevaplarda görünmüyorum, neden?",
          a: "En sık sebep, içeriğin ham HTML'de bulunmamasıdır. Bu botların çoğu JavaScript çalıştırmadığı için yalnızca etkileşimle açılan bölümleri göremez. İkinci sık sebep, bilginin dağınık ve tutarsız olmasıdır: net tanımlar, SSS blokları ve tekrar eden tutarlı marka bilgisi alıntılanmayı kolaylaştırır.",
        },
      ],
      tags: [
        "AI crawler",
        "GPTBot",
        "ClaudeBot",
        "Taranabilirlik",
        "GEO",
      ],
    },
    en: {
      slug: "ai-crawlers",
      name: "AI Crawlers",
      graphLabel: "AI Crawler",
      metaTitle: "What Are AI Crawlers? GPTBot, ClaudeBot | Soleach",
      metaDescription:
        "AI crawlers explained: how GPTBot, ClaudeBot and PerplexityBot read your site, what they cannot see, and how to decide whether to allow them.",
      shortDef:
        "The bots AI companies run to read the web for training data and live answers; GPTBot, ClaudeBot and PerplexityBot are the best-known examples.",
      sections: [
        {
          h2: "What is an AI crawler?",
          blocks: [
            {
              type: "p",
              text: "AI crawlers are automated programs that visit and read web pages much like search engine bots do. The difference is purpose: what they collect is used to train models or to answer a question on the spot, not to rank a list of results. GPTBot, ClaudeBot and PerplexityBot are the best-known examples.",
            },
            {
              type: "p",
              text: "One technical detail matters most: most of these bots do not execute JavaScript. However rich your page looks in a browser, anything absent from the raw HTML the server returns does not exist for them. An FAQ that only opens on click, a chart drawn purely in script, a price baked into an image — all of it reads as an empty page.",
            },
          ],
        },
        {
          h2: "Managing access: block or allow?",
          blocks: [
            {
              type: "p",
              text: "Access is governed through robots.txt and, if you run a layer like [Cloudflare](/en/concepts/cloudflare), through bot rules. The decision is not binary: blocking out of concern for how your content is used and allowing in order to appear in AI answers are both legitimate positions. Blocking costs you visibility; allowing means your content can be used without attribution.",
            },
            {
              type: "ul",
              items: [
                "Blocking can be selective: you can refuse a training crawler while allowing one that fetches sources at answer time.",
                "Accidental blocking is common; an aggressive bot rule can shut out the engine you actually wanted to reach.",
                "Because what these bots see is raw HTML, keeping important content in the server-rendered markup is the foundation of [GEO](/en/concepts/generative-engine-optimization) work.",
              ],
            },
            {
              type: "p",
              text: "For the model producing the answer see [LLM](/en/concepts/llm); for classic crawling see [search engine](/en/concepts/search-engine). The practical application is in our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Should I block AI crawlers?",
          a: "It depends. If you do not want your content used for model training you can block them, at the cost of reducing the chance your brand is mentioned in that engine's answers. If visibility is the priority, keeping them open makes sense. The choice is not binary either — different bots can be given different policies.",
        },
        {
          q: "My site allows AI crawlers but I still don't appear in answers. Why?",
          a: "The most common reason is that the content is not in the raw HTML. Since most of these bots do not run JavaScript, anything that appears only after interaction is invisible to them. The second most common reason is scattered, inconsistent information: clear definitions, FAQ blocks and repeated consistent brand facts are far easier to quote.",
        },
      ],
      tags: [
        "AI crawler",
        "GPTBot",
        "ClaudeBot",
        "Crawlability",
        "GEO",
      ],
    },
  },
};
