import type { Concept } from "@/lib/concepts";

export const searchEngine: Concept = {
  id: "search-engine",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["search-console"],
  postIds: ["geo-rehberi", "search-console-platform-properties"],
  locales: {
    tr: {
      slug: "arama-motoru",
      name: "Arama Motoru",
      graphLabel: "Arama Motoru",
      metaTitle: "Arama Motoru Nedir? Nasıl Çalışır? | Soleach Kavramlar",
      metaDescription:
        "Arama motoru nedir, nasıl çalışır? Tarama, dizine ekleme ve sıralama adımlarının tanımı; markanın aramada bulunmasını belirleyen üç aşama.",
      shortDef:
        "Web'i tarayıp içeriği dizine ekleyen ve bir sorguya en uygun sonuçları sıralayan sistem; markanın niyet anında bulunmasını sağlayan zemin.",
      sections: [
        {
          h2: "Arama motoru nedir ve nasıl çalışır?",
          blocks: [
            {
              type: "p",
              text: "Arama motoru üç adımda çalışır. **Tarama:** botlar bağlantıları takip ederek sayfaları ziyaret eder. **Dizine ekleme:** görülen sayfanın içeriği anlamlandırılır ve saklanır. **Sıralama:** bir sorgu geldiğinde dizindeki sayfalar arasından en uygun olanlar sıraya konur. Bir sayfa bu üç adımdan birinde takılırsa aramada görünmez — ve en sık takıldığı yer sıralama değil, taramadır.",
            },
            {
              type: "p",
              text: "Sonuç sayfası da artık on mavi bağlantıdan ibaret değil: sık sorulan sorular, görsel ve kısa video karuselleri, yerel sonuçlar ve yapay zekâ özetleri aynı ekranda yer alıyor. Bu, tek bir \"birinci sıra\" kavramını zayıflatıyor; görünürlük artık sayfanın hangi modülde yer aldığıyla ölçülüyor.",
            },
          ],
        },
        {
          h2: "Markalar için arama motoru neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Arama, niyetin en net olduğu yerdir. Sosyal medyada ilgi yaratırsın; aramada ise zaten karar aşamasına gelmiş birini karşılarsın. \"Retinol nasıl kullanılır\" arayan kişi, kaydırırken karşısına reklam çıkan kişiden çok daha ileri bir aşamadadır.",
            },
            {
              type: "ul",
              items: [
                "Görünürlüğün ön koşulu taranabilirliktir: ham HTML'de olmayan içerik dizine de girmez.",
                "Aynı zemin artık [yapay zekâ tarayıcıları](/tr/kavramlar/yapay-zeka-tarayicilari) tarafından da kullanılıyor; iyi kurulmuş [SEO](/tr/kavramlar/seo), [GEO](/tr/kavramlar/geo) çalışmasının ön koşuludur.",
                "Performansı tahmin etmek yerine ölçmek gerekir; verinin geldiği yer [Google Search Console](/tr/kavramlar/google-search-console)'dur.",
              ],
            },
            {
              type: "p",
              text: "Cevabı sıralamak yerine üreten motorlar için [LLM](/tr/kavramlar/llm) kavramına, markanın bu cevaplarda anılması için yapılan çalışmaya ise [GEO rehberimizden](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi) bakabilirsin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Sitem Google'da neden çıkmıyor?",
          a: "Sırayla üç şeyi kontrol et: sayfa taranabiliyor mu (robots.txt ya da bir bot kuralı engelliyor olabilir), dizine eklenmiş mi (Search Console'un URL denetimi bunu gösterir) ve sorguya gerçekten cevap veriyor mu. Sıralama sorunuyla uğraşmadan önce ilk iki adımın çalıştığından emin olmak gerekir.",
        },
        {
          q: "Yapay zekâ özetleri arama motorunun yerini alıyor mu?",
          a: "Şimdilik yerine geçmiyor, sonuç sayfasının bir parçası oluyor. Ama davranışı değiştiriyor: kullanıcı cevabı ekranda bulduğunda tıklama azalıyor. Bu yüzden ölçü birimi de genişliyor — yalnızca sıralamadaki yerin değil, üretilen cevabın içinde anılıp anılmadığın da önemli hale geliyor.",
        },
      ],
      tags: [
        "Arama motoru",
        "SEO",
        "Tarama",
        "Dizine ekleme",
        "Sıralama",
      ],
    },
    en: {
      slug: "search-engine",
      name: "Search Engine",
      graphLabel: "Search Engine",
      metaTitle: "What Is a Search Engine? How It Works | Soleach",
      metaDescription:
        "Search engines explained: crawling, indexing and ranking — the three stages that decide whether your brand can be found at the moment of intent.",
      shortDef:
        "A system that crawls the web, indexes what it finds and ranks the best matches for a query; the ground on which a brand is found at the moment of intent.",
      sections: [
        {
          h2: "What is a search engine and how does it work?",
          blocks: [
            {
              type: "p",
              text: "A search engine works in three stages. **Crawling:** bots follow links and visit pages. **Indexing:** what they saw is interpreted and stored. **Ranking:** when a query arrives, the most relevant pages in the index are ordered. A page that fails at any of the three never appears in search — and the stage it most often fails at is crawling, not ranking.",
            },
            {
              type: "p",
              text: "The results page is also no longer ten blue links: people-also-ask blocks, image and short-video carousels, local results and AI summaries share the same screen. That erodes the idea of a single \"first position\"; visibility is now measured by which module you appear in.",
            },
          ],
        },
        {
          h2: "Why search engines matter for brands",
          blocks: [
            {
              type: "p",
              text: "Search is where intent is clearest. On social you create interest; in search you meet someone who has already reached a decision stage. A person searching \"how to use retinol\" is far further along than someone who was shown an ad mid-scroll.",
            },
            {
              type: "ul",
              items: [
                "Crawlability is the precondition for visibility: content missing from the raw HTML never reaches the index.",
                "The same ground is now used by [AI crawlers](/en/concepts/ai-crawlers) too; solid [SEO](/en/concepts/seo) is the precondition for [GEO](/en/concepts/generative-engine-optimization).",
                "Performance should be measured rather than guessed, and the data comes from [Google Search Console](/en/concepts/google-search-console).",
              ],
            },
            {
              type: "p",
              text: "For engines that generate an answer instead of ranking one see [LLM](/en/concepts/llm); for the work of getting mentioned inside those answers see our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Why doesn't my site appear on Google?",
          a: "Check three things in order: can the page be crawled (robots.txt or a bot rule may be blocking it), has it been indexed (Search Console's URL inspection shows this), and does it genuinely answer the query. Make sure the first two work before spending effort on ranking.",
        },
        {
          q: "Are AI summaries replacing search engines?",
          a: "Not replacing them so far — they are becoming part of the results page. But they change behaviour: when users find the answer on screen, clicks fall. So the unit of measurement widens: not only where you rank, but whether you are mentioned inside the generated answer.",
        },
      ],
      tags: [
        "Search engine",
        "SEO",
        "Crawling",
        "Indexing",
        "Ranking",
      ],
    },
  },
};
