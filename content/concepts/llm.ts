import type { Concept } from "@/lib/concepts";

export const llm: Concept = {
  id: "llm",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["slm", "ai-agents", "ai-crawler", "search-engine"],
  postIds: ["geo-rehberi"],
  locales: {
    tr: {
      slug: "llm",
      name: "LLM (Büyük Dil Modeli)",
      graphLabel: "LLM",
      metaTitle: "LLM Nedir? Büyük Dil Modeli | Soleach Kavramlar",
      metaDescription:
        "LLM (büyük dil modeli) nedir, nasıl çalışır? ChatGPT ve Claude gibi modellerin arkasındaki teknolojinin tanımı ve markanın görünürlüğüne etkisi.",
      shortDef:
        "Çok büyük metin yığınları üzerinde eğitilmiş, bir sonraki kelimeyi tahmin ederek metin üreten yapay zekâ modeli; ChatGPT, Claude ve Gemini gibi ürünlerin arkasındaki teknoloji.",
      sections: [
        {
          h2: "LLM nedir?",
          blocks: [
            {
              type: "p",
              text: "LLM, \"Large Language Model\" yani büyük dil modeli ifadesinin kısaltmasıdır. Çok geniş metin yığınları üzerinde eğitilir ve temelde tek bir şey yapar: verilen bağlamın ardından gelmesi en olası metni üretir. Bu basit görünen mekanizma, yeterince büyük ölçekte özetleme, çeviri, soru cevaplama ve kod yazma gibi yetenekleri ortaya çıkarır.",
            },
            {
              type: "p",
              text: "Pazarlama açısından kritik ayrım şu: bir LLM veritabanı değil, olasılık modelidir. Bir bilgiyi \"kayıtlardan çekmez\", eğitim verisinden ve kendisine verilen bağlamdan üretir. Bu yüzden markan hakkında web'de ne kadar net, tutarlı ve tekrar eden bilgi varsa, modelin senden doğru bahsetme ihtimali o kadar yükselir — ve tersi de doğrudur.",
            },
          ],
        },
        {
          h2: "Markalar için LLM neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kullanıcı artık \"hassas cilde uygun güneş kremi\" sorusunu yalnızca arama motoruna değil, doğrudan bir dil modeline de soruyor. Cevabın içinde anılmayan marka, o karar anında hiç var olmamış demektir. [GEO](/tr/kavramlar/geo) tam olarak bu görünürlük alanını hedefleyen çalışmadır.",
            },
            {
              type: "ul",
              items: [
                "Modeller güncel bilgiye çoğunlukla arama ve tarama üzerinden ulaşır; yani [yapay zekâ tarayıcılarına](/tr/kavramlar/yapay-zeka-tarayicilari) açık olmayan site, cevaplarda da yoktur.",
                "Modeller hata yapabilir ve marka hakkında yanlış bilgi üretebilir; düzeltmenin yolu modele değil, web'deki kaynağa müdahale etmektir.",
                "Net tanımlar, SSS blokları ve tutarlı marka bilgisi, modellerin en kolay alıntıladığı formatlardır.",
              ],
            },
            {
              type: "p",
              text: "Daha küçük ve dar amaçlı kardeşi için [SLM](/tr/kavramlar/slm), model üzerine araç kullanma yeteneği eklenmiş hali için [yapay zekâ ajanları](/tr/kavramlar/yapay-zeka-ajanlari) kavramına bakabilirsin. Pratik uygulaması [GEO rehberimizde](/tr/blog/geo-nedir-yapay-zeka-gorunurlugu-rehberi).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "LLM ile arama motoru arasındaki fark nedir?",
          a: "Arama motoru, taradığı sayfaları sıralayıp sana bir bağlantı listesi verir; kaynağa sen gidersin. LLM ise bir cevap metni üretir ve çoğu zaman kullanıcı hiçbir bağlantıya tıklamaz. Bu yüzden ölçü birimi de değişir: sıralamadaki yerin değil, cevabın içinde ve doğru bilgiyle anılıp anılmadığın önemlidir.",
        },
        {
          q: "LLM'ler markam hakkında yanlış bilgi veriyorsa ne yapmalıyım?",
          a: "Modele doğrudan müdahale edemezsin; kaynağa müdahale edebilirsin. Marka bilgisinin kendi sitende net, güncel ve makine tarafından okunabilir biçimde bulunması, aynı bilginin üçüncü taraf kaynaklarda tutarlı geçmesi ve sitenin yapay zekâ tarayıcılarına açık olması, zamanla üretilen cevapların düzelmesini sağlayan yoldur.",
        },
      ],
      tags: [
        "LLM",
        "Büyük dil modeli",
        "Yapay zekâ",
        "GEO",
        "Yapay zekâ görünürlüğü",
      ],
    },
    en: {
      slug: "llm",
      name: "LLM (Large Language Model)",
      graphLabel: "LLM",
      metaTitle: "What Is an LLM? Large Language Models | Soleach",
      metaDescription:
        "Large language models explained: how they generate text, why they are not databases, and what that means for how your brand appears in AI answers.",
      shortDef:
        "An AI model trained on very large volumes of text that generates language by predicting what comes next; the technology behind products like ChatGPT, Claude and Gemini.",
      sections: [
        {
          h2: "What is an LLM?",
          blocks: [
            {
              type: "p",
              text: "LLM stands for Large Language Model. It is trained on very large volumes of text and fundamentally does one thing: produce the text most likely to follow the context it is given. At sufficient scale, that deceptively simple mechanism produces capabilities like summarising, translating, answering questions and writing code.",
            },
            {
              type: "p",
              text: "The distinction that matters for marketing: an LLM is a probability model, not a database. It does not look a fact up in records — it generates from training data and from the context it is handed. So the clearer, more consistent and more repeated the information about your brand is on the web, the more likely the model is to describe you accurately. The reverse holds too.",
            },
          ],
        },
        {
          h2: "Why LLMs matter for brands",
          blocks: [
            {
              type: "p",
              text: "Customers now ask \"which sunscreen suits sensitive skin\" of a language model as readily as of a search engine. A brand absent from the answer simply did not exist at that decision moment. [GEO](/en/concepts/generative-engine-optimization) is the discipline aimed squarely at this visibility surface.",
            },
            {
              type: "ul",
              items: [
                "Models mostly reach current information through search and crawling, so a site closed to [AI crawlers](/en/concepts/ai-crawlers) is absent from the answers too.",
                "Models can be wrong about your brand; the fix is not applied to the model but to the sources on the web.",
                "Clear definitions, FAQ blocks and consistent brand facts are the formats models quote most easily.",
              ],
            },
            {
              type: "p",
              text: "For the smaller, narrower sibling see [SLM](/en/concepts/slm); for models given the ability to use tools see [AI agents](/en/concepts/ai-agents). The practical application is in our [GEO guide](/en/blog/what-is-geo-generative-engine-optimization-guide).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between an LLM and a search engine?",
          a: "A search engine ranks the pages it has crawled and hands you a list of links; you go to the source. An LLM produces an answer, and often the user never clicks anything. That changes the unit of measurement: what matters is not your position in a ranking but whether you appear — accurately — inside the answer.",
        },
        {
          q: "What do I do if LLMs say something wrong about my brand?",
          a: "You cannot edit the model, but you can edit the sources. Keeping brand facts clear, current and machine-readable on your own site, consistent across third-party sources, and keeping the site open to AI crawlers is what gradually corrects the answers being generated.",
        },
      ],
      tags: [
        "LLM",
        "Large language model",
        "Artificial intelligence",
        "GEO",
        "AI visibility",
      ],
    },
  },
};
