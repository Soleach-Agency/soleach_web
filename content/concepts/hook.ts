import type { Concept } from "@/lib/concepts";

export const hook: Concept = {
  id: "hook",
  category: "creative",
  publishedAt: "2026-07-28",
  related: ["creative-testing", "ugc", "ai-video"],
  postIds: ["bes-hook-testi", "ekranda-parfum-satmak"],
  locales: {
    tr: {
      slug: "hook",
      name: "Hook (Video Açılışı)",
      graphLabel: "Hook",
      metaTitle: "Hook Nedir? Video Reklamda İlk Saniyeler | Soleach Kavramlar",
      metaDescription:
        "Hook nedir? Video reklamın ilk saniyelerinde izleyiciyi durduran açılışın tanımı, neden reklam performansının en büyük kaldıracı olduğu.",
      shortDef:
        "Video reklamın ilk birkaç saniyesinde izleyiciyi kaydırmaktan vazgeçiren açılış; aynı videonun performansını tek başına katlayabilen ya da sıfırlayabilen en kritik kreatif öğe.",
      sections: [
        {
          h2: "Hook nedir?",
          blocks: [
            {
              type: "p",
              text: "Hook, videonun izleyiciyi 'durduran' açılış anıdır: bir soru, beklenmedik bir görüntü, cesur bir iddia ya da tanıdık bir problem. Sosyal medyada izleyicinin varsayılan davranışı kaydırıp geçmektir; hook, bu varsayılanı kıran tek şeydir. İlk saniyelerde durduramadığın izleyiciye videonun geri kalanı hiç var olmamıştır.",
            },
            {
              type: "p",
              text: "Bu yüzden hook, videonun süsü değil stratejisidir. Aynı ürün, aynı çekim ve aynı teklifle üretilmiş iki videonun performansı, sırf açılış farklı diye katbekat ayrışabilir. Kreatif test pratiğinde en verimli deney çoğu zaman videonun tamamını değiştirmek değil, aynı gövdeye farklı hook'lar denemektir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik, görsel dönüşümün en güçlü olduğu kategorilerden: uygulama anı, doku, önce-sonra hissi. Bu malzeme doğru açılışla birleştiğinde izleyiciyi ilk saniyede yakalar. Yanlış kullanıldığında ise — logoyla açılan, ürünü tanıtmaya girişle başlayan videolar — izleyici daha ilk kelimede gitmiştir.",
            },
            {
              type: "ul",
              items: [
                "Hook görsel, sözlü ve metinsel katmanların toplamıdır: ilk kare + ilk cümle + ekrandaki yazı birlikte çalışır.",
                "İzleyicinin problemiyle açılan hook'lar, ürünle açılanlardan genelde daha güçlüdür.",
                "Hook'un başarısı histen değil metrikten okunur: 3 saniye izlenme oranı ve devam oranı.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "İyi bir hook kaç saniye olmalı?",
          a: "Katı bir kural yok; kritik olan izleyicinin kaydırma kararını verdiği ilk birkaç saniyede net bir 'durma sebebi' sunmak. Uzunluktan çok yoğunluk önemli: ilk karede ve ilk cümlede ne olduğu.",
        },
        {
          q: "Hook'u nasıl test ederim?",
          a: "Aynı video gövdesine farklı açılışlar ekleyip aynı kitle ve bütçeyle yarıştırarak. Karşılaştırma metriği izlenme başlangıcı değil; 3 saniye izlenme oranı, devam oranı ve nihayetinde dönüşüm maliyetidir.",
        },
      ],
      tags: ["Hook", "Video reklam", "Kreatif"],
    },
    en: {
      slug: "hook",
      name: "Hook (Video Opening)",
      graphLabel: "Hook",
      metaTitle: "What Is a Hook? The First Seconds of Video Ads | Soleach Concepts",
      metaDescription:
        "The hook explained: the opening seconds that stop a viewer from scrolling, and why it is the single biggest lever in video ad performance.",
      shortDef:
        "The opening seconds of a video ad that stop the viewer from scrolling past; the single creative element that can multiply — or zero out — the performance of the same video.",
      sections: [
        {
          h2: "What is a hook?",
          blocks: [
            {
              type: "p",
              text: "The hook is the moment a video stops the viewer: a question, an unexpected visual, a bold claim, a familiar problem. On social feeds the default behavior is to scroll past; the hook is the only thing that breaks that default. For the viewer you failed to stop in the first seconds, the rest of the video never existed.",
            },
            {
              type: "p",
              text: "That makes the hook strategy, not decoration. Two videos with the same product, footage and offer can perform many times apart purely because the openings differ. In creative testing practice, the highest-leverage experiment is usually not a new video but new hooks on the same body.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty is one of the most visually transformative categories: application moments, texture, the before-and-after feeling. Combined with the right opening, that material grabs the viewer in the first second. Used wrong — videos opening on a logo or a product introduction — the viewer is gone before the first sentence ends.",
            },
            {
              type: "ul",
              items: [
                "A hook is the sum of visual, spoken and on-screen text layers: first frame + first sentence + overlay working together.",
                "Hooks that open on the viewer's problem usually beat hooks that open on the product.",
                "Hook success is read from metrics, not gut feel: 3-second view rate and hold rate.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "How long should a good hook be?",
          a: "There is no hard rule; what matters is giving a clear 'reason to stop' within the first few seconds where the scroll decision happens. Density beats duration: what happens in the first frame and the first sentence.",
        },
        {
          q: "How do I test hooks?",
          a: "Attach different openings to the same video body and race them on the same audience and budget. Compare on 3-second view rate, hold rate and ultimately cost per conversion — not on impressions.",
        },
      ],
      tags: ["Hook", "Video ads", "Creative"],
    },
  },
};
