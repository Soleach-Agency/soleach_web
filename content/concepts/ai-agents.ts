import type { Concept } from "@/lib/concepts";

/**
 * Edges are declared on the neighbours (llm, slm, web) — `related` stays
 * empty here so each pair is declared exactly once.
 */
export const aiAgents: Concept = {
  id: "ai-agents",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: [],
  postIds: [],
  locales: {
    tr: {
      slug: "yapay-zeka-ajanlari",
      name: "Yapay Zekâ Ajanları",
      graphLabel: "Ajanlar",
      metaTitle: "Yapay Zekâ Ajanı Nedir? (AI Agent) | Soleach Kavramlar",
      metaDescription:
        "Yapay zekâ ajanı nedir? Dil modelinin araç kullanarak çok adımlı iş yapabildiği sistemlerin tanımı ve markaların sitesi için ne anlama geldiği.",
      shortDef:
        "Bir dil modelinin araç kullanarak, çok adımlı bir hedefi kendi başına planlayıp yürütebildiği sistem; sadece metin üretmez, arama yapar, sayfa okur ve işlem başlatır.",
      sections: [
        {
          h2: "Yapay zekâ ajanı nedir?",
          blocks: [
            {
              type: "p",
              text: "Ajan, bir [dil modelinin](/tr/kavramlar/llm) etrafına araç kullanma ve döngü halinde çalışma yeteneği eklenmiş halidir. Sıradan bir model soruya cevap verip durur; ajan ise hedefi adımlara böler, gerektiğinde web'de arama yapar, bir sayfayı okur, bir API çağırır, sonucu değerlendirir ve bir sonraki adıma geçer. Fark tek cümleyle şudur: model konuşur, ajan iş yapar.",
            },
            {
              type: "p",
              text: "Bu döngü, yapay zekânın pasif bir cevap kutusundan aktif bir ziyaretçiye dönüşmesi anlamına gelir. Bir ajan senin ürün sayfanı açıp fiyatı, içeriği ve kargo bilgisini okuyabilir; bunları başka markalarınkiyle karşılaştırıp kullanıcıya bir öneri getirebilir. Yani sitenin okuyucusu artık yalnızca insan değil.",
            },
          ],
        },
        {
          h2: "Markalar için ne anlama geliyor?",
          blocks: [
            {
              type: "p",
              text: "Bir ajan senin sitene geldiğinde ne göreceği, sitenin makine tarafından ne kadar okunabilir olduğuna bağlıdır. Görselin içine yazılmış fiyat, yalnızca tıklamayla açılan içerik ya da JavaScript olmadan boş kalan bir sayfa, ajan için yok hükmündedir.",
            },
            {
              type: "ul",
              items: [
                "Ürün bilgisi (fiyat, stok, içerik, kargo) metin olarak ve tutarlı biçimde sayfada bulunmalı; yalnızca görselde kalan bilgi kaybolur.",
                "[Yapay zekâ tarayıcılarına](/tr/kavramlar/yapay-zeka-tarayicilari) erişim politikan, ajanların seni görüp göremeyeceğini belirler.",
                "Ajanların artması, ölçümü de zorlaştırır: insan olmayan trafiği ayırt edemeyen bir analitik kurulumu yanıltıcı sonuç üretir.",
              ],
            },
            {
              type: "p",
              text: "Ajanların üzerinde çalıştığı zemin için [web](/tr/kavramlar/web), arkalarındaki model tarafı için [LLM](/tr/kavramlar/llm) ve [SLM](/tr/kavramlar/slm) kavramlarına bakabilirsin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Yapay zekâ ajanı ile sohbet botu aynı şey mi?",
          a: "Hayır. Sohbet botu soru-cevap döngüsünde kalır ve konuşmanın dışına çıkmaz. Ajan ise bir hedefi adımlara böler, araç kullanır — arama yapar, sayfa okur, API çağırır — ve sonuca göre yol değiştirir. Kabaca fark, tavsiye veren ile işi yapan arasındaki farktır.",
        },
        {
          q: "Ajanlar sitemi ziyaret ediyorsa bunu nasıl anlarım?",
          a: "Sunucu ve CDN kayıtlarındaki user-agent bilgisi ile trafiğin geldiği ağ bilgisi ilk ipuçlarıdır; birçok yapay zekâ tarayıcısı kendini açıkça tanıtır. Cloudflare gibi bir katman kullanıyorsan bu trafiği ayrı ayrı görebilir ve hangi botlara izin vereceğine karar verebilirsin.",
        },
      ],
      tags: [
        "Yapay zekâ ajanı",
        "AI agent",
        "LLM",
        "Otomasyon",
      ],
    },
    en: {
      slug: "ai-agents",
      name: "AI Agents",
      graphLabel: "Agents",
      metaTitle: "What Is an AI Agent? | Soleach Concepts",
      metaDescription:
        "AI agents explained: language models that use tools to plan and carry out multi-step work, and what that means for how machine-readable your site needs to be.",
      shortDef:
        "A system where a language model plans and carries out a multi-step goal by using tools; it does not just produce text — it searches, reads pages and takes actions.",
      sections: [
        {
          h2: "What is an AI agent?",
          blocks: [
            {
              type: "p",
              text: "An agent is a [language model](/en/concepts/llm) wrapped in the ability to use tools and to work in a loop. An ordinary model answers a question and stops; an agent breaks a goal into steps, searches the web when it needs to, reads a page, calls an API, evaluates the result and moves on. In one sentence: the model talks, the agent does.",
            },
            {
              type: "p",
              text: "That loop turns AI from a passive answer box into an active visitor. An agent can open your product page, read the price, the ingredients and the shipping terms, compare them with other brands and bring the user a recommendation. Your site's readers are no longer only human.",
            },
          ],
        },
        {
          h2: "What it means for brands",
          blocks: [
            {
              type: "p",
              text: "What an agent sees when it arrives depends on how machine-readable your site is. A price baked into an image, content that only appears after a click, or a page that renders empty without JavaScript effectively does not exist for an agent.",
            },
            {
              type: "ul",
              items: [
                "Product facts — price, stock, ingredients, shipping — should be present as consistent text on the page; information that lives only in an image is lost.",
                "Your access policy for [AI crawlers](/en/concepts/ai-crawlers) determines whether agents can see you at all.",
                "More agents also complicates measurement: an analytics setup that cannot separate non-human traffic produces misleading numbers.",
              ],
            },
            {
              type: "p",
              text: "For the ground agents operate on see [the web](/en/concepts/web); for the models behind them see [LLM](/en/concepts/llm) and [SLM](/en/concepts/slm).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is an AI agent the same as a chatbot?",
          a: "No. A chatbot stays inside a question-and-answer loop and never leaves the conversation. An agent breaks a goal into steps and uses tools — searching, reading pages, calling APIs — changing course based on what it finds. Roughly, the difference is between something that advises and something that acts.",
        },
        {
          q: "How do I know if agents are visiting my site?",
          a: "User-agent strings in your server and CDN logs, plus the networks the traffic arrives from, are the first clues; many AI crawlers identify themselves openly. If you run a layer such as Cloudflare, you can see this traffic separately and decide which bots to allow.",
        },
      ],
      tags: [
        "AI agent",
        "Agentic AI",
        "LLM",
        "Automation",
      ],
    },
  },
};
