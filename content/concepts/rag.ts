import type { Concept } from "@/lib/concepts";

export const rag: Concept = {
  id: "rag",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["llm", "ai-agents", "geo"],
  postIds: [],
  locales: {
    tr: {
      slug: "rag",
      name: "RAG (Erişim Destekli Üretim)",
      graphLabel: "RAG",
      metaTitle: "RAG Nedir? Erişim Destekli Üretim | Soleach Kavramlar",
      metaDescription:
        "RAG (retrieval-augmented generation) nedir? Dil modelinin cevap üretmeden önce kaynak getirmesi neden önemli ve markanın görünürlüğüne nasıl dokunuyor?",
      shortDef:
        "Bir dil modelinin cevabı yalnızca hafızasından değil, o an getirdiği kaynak belgelerden üreterek yazması; yapay zekâ yanıtlarında kaynak gösterilmesinin arkasındaki yöntem.",
      sections: [
        {
          h2: "RAG nedir?",
          blocks: [
            {
              type: "p",
              text: "RAG, \"retrieval-augmented generation\" yani erişim destekli üretim demektir. Sade bir [dil modeli](/tr/kavramlar/llm) cevabı eğitim verisinden üretir; bu veri bir tarihte donmuştur ve model ne bildiğini tam olarak bilmez. RAG bu akışa bir adım ekler: soru geldiğinde önce ilgili belgeler aranıp getirilir, sonra model cevabı o belgelere bakarak yazar.",
            },
            {
              type: "p",
              text: "Etkisi iki yönlüdür. Cevap güncelleşir — model eğitildikten sonra yayınlanmış bir bilgi de yanıta girebilir. Ve cevap izlenebilir hale gelir: yanıtın altındaki kaynak bağlantıları çoğunlukla bu getirme adımından çıkar. Yapay zekâ arayüzlerinde gördüğün atıflar, modelin \"hatırladığı\" değil, o an okuduğu şeydir.",
            },
          ],
        },
        {
          h2: "Markanın görünürlüğü açısından ne anlama geliyor?",
          blocks: [
            {
              type: "p",
              text: "RAG, [GEO](/tr/kavramlar/geo) çalışmasının neden içerik işi olduğunu açıklar. Model senin hakkında bir şey \"öğrenmek\" zorunda değil; soru sorulduğu anda seni bulabilmesi yeterli. Yani mesele model eğitimine girmek değil, getirme adımında seçilecek kadar net ve erişilebilir olmaktır.",
            },
            {
              type: "ul",
              items: [
                "Getirme adımı çoğunlukla arama ve tarama üzerinden çalışır; [yapay zekâ tarayıcılarına](/tr/kavramlar/yapay-zeka-tarayicilari) kapalı bir site bu adımda hiç yarışmaz.",
                "Alıntılanan şey sayfanın tamamı değil, sorunun cevabını içeren kısımdır — net tanımlar ve SSS blokları bu yüzden avantajlıdır.",
                "Bilgi güncel değilse model onu güncel diye aktarabilir; eski fiyat ya da kaldırılmış ürün sayfaları kendi başına bir risktir.",
                "Aynı yöntem, araç kullanan [yapay zekâ ajanlarının](/tr/kavramlar/yapay-zeka-ajanlari) sitene bakma biçiminin de temelidir.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "RAG, modelin yanlış bilgi üretmesini tamamen önler mi?",
          a: "Hayır, azaltır. Cevap gerçek belgelere dayandığı için uydurma ihtimali düşer, ama getirilen kaynak yanlış, eski ya da konuyla ilgisizse model onu güvenle aktarabilir. Yani kalite, getirilen kaynağın kalitesi kadardır — bu da markanın kendi sayfalarının güncelliğini doğrudan önemli hale getirir.",
        },
        {
          q: "Markam için pratikte ne değişiyor?",
          a: "Hedef, model eğitimine girmek değil; soru sorulduğu anda getirilebilir ve alıntılanabilir olmak. Bunun için sitenin taranabilir olması, marka bilgisinin net ve tutarlı yazılması, cevabın sayfa içinde doğrudan verilmesi ve eski bilginin temizlenmesi gerekir. Bunların hepsi zaten iyi içerik ve iyi teknik hijyendir.",
        },
      ],
      tags: [
        "RAG",
        "Erişim destekli üretim",
        "LLM",
        "GEO",
        "Yapay zekâ görünürlüğü",
      ],
    },
    en: {
      slug: "rag",
      name: "RAG (Retrieval-Augmented Generation)",
      graphLabel: "RAG",
      metaTitle: "What Is RAG? Retrieval-Augmented Generation | Soleach",
      metaDescription:
        "RAG explained: how a language model fetches source documents before answering, why citations appear in AI answers, and what it means for brand visibility.",
      shortDef:
        "Having a language model write its answer from documents retrieved at question time rather than from memory alone; the method behind the citations you see in AI answers.",
      sections: [
        {
          h2: "What is RAG?",
          blocks: [
            {
              type: "p",
              text: "RAG stands for retrieval-augmented generation. A plain [language model](/en/concepts/llm) answers from its training data, which is frozen at some date and whose contents the model cannot precisely account for. RAG inserts a step: when a question arrives, relevant documents are searched for and fetched first, and the model then writes its answer against them.",
            },
            {
              type: "p",
              text: "The effect runs two ways. Answers become current — information published after training can still appear. And answers become traceable: the source links under a generated answer usually come out of that retrieval step. The citations you see in AI interfaces are not what the model remembered, but what it just read.",
            },
          ],
        },
        {
          h2: "What it means for brand visibility",
          blocks: [
            {
              type: "p",
              text: "RAG explains why [GEO](/en/concepts/generative-engine-optimization) is content work rather than a technical trick. The model does not need to have \"learned\" anything about you; it only needs to find you at the moment the question is asked. The goal is not getting into training data — it is being clear and reachable enough to be picked in the retrieval step.",
            },
            {
              type: "ul",
              items: [
                "Retrieval usually runs through search and crawling; a site closed to [AI crawlers](/en/concepts/ai-crawlers) is not in that race at all.",
                "What gets quoted is not the whole page but the passage answering the question — which is exactly why clear definitions and FAQ blocks do well.",
                "If your information is stale, the model may relay it as current; outdated prices and discontinued product pages are a risk in themselves.",
                "The same method underpins how tool-using [AI agents](/en/concepts/ai-agents) look at your site.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does RAG stop models from getting things wrong?",
          a: "It reduces the risk rather than removing it. Grounding an answer in real documents makes invention less likely, but if the retrieved source is wrong, stale or off-topic, the model will relay it confidently. Quality is capped by the quality of what was retrieved — which makes the freshness of your own pages directly consequential.",
        },
        {
          q: "What changes for my brand in practice?",
          a: "The target is not getting into training data but being retrievable and quotable at question time. That means a crawlable site, brand facts written clearly and consistently, answers given directly on the page, and stale information cleaned up. All of it is ordinary good content and good technical hygiene.",
        },
      ],
      tags: [
        "RAG",
        "Retrieval-augmented generation",
        "LLM",
        "GEO",
        "AI visibility",
      ],
    },
  },
};
