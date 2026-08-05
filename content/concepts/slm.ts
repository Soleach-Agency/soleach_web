import type { Concept } from "@/lib/concepts";

export const slm: Concept = {
  id: "slm",
  category: "seo-geo",
  publishedAt: "2026-08-04",
  related: ["ai-agents"],
  postIds: [],
  locales: {
    tr: {
      slug: "slm",
      name: "SLM (Küçük Dil Modeli)",
      graphLabel: "SLM",
      metaTitle: "SLM Nedir? Küçük Dil Modeli | Soleach Kavramlar",
      metaDescription:
        "SLM (küçük dil modeli) nedir, LLM'den farkı nedir? Daha az kaynakla çalışan, dar amaçlı yapay zekâ modellerinin tanımı ve pratik kullanım alanları.",
      shortDef:
        "Büyük dil modellerine göre çok daha az parametreyle çalışan, dar bir görev kümesine odaklanan ve cihaz üzerinde ya da düşük maliyetle çalıştırılabilen dil modeli.",
      sections: [
        {
          h2: "SLM nedir?",
          blocks: [
            {
              type: "p",
              text: "SLM, \"Small Language Model\" yani küçük dil modeli demektir. [LLM](/tr/kavramlar/llm) ile aynı temel mimariyi paylaşır ama çok daha az parametreyle çalışır. Bunun sonucu doğrudan pratiktir: daha hızlı cevap verir, daha ucuza çalışır ve çoğu zaman bir sunucu çiftliğine değil tek bir cihaza sığar.",
            },
            {
              type: "p",
              text: "Karşılığında genellik kaybeder. Bir SLM'den her konuda derinlik beklenmez; iyi olduğu yer, sınırları belli tekrarlayan işlerdir — sınıflandırma, etiketleme, kısa özet, biçim dönüştürme, niyet ayırma. \"Küçük\" burada yetersiz demek değil, dar demektir.",
            },
          ],
        },
        {
          h2: "SLM nerede işe yarar?",
          blocks: [
            {
              type: "p",
              text: "Doğru soru \"hangisi daha iyi\" değil, \"bu iş için hangisi gerekli\". Her görevi en büyük modele yaptırmak, bir zarfı taşımak için tır kiralamaya benzer: çalışır ama gereksiz maliyetlidir ve yavaştır.",
            },
            {
              type: "ul",
              items: [
                "Yüksek hacimli ve tekrarlayan işler (yorum sınıflandırma, ürün etiketleme, form ayrıştırma) küçük modellerle çok daha ucuza çözülür.",
                "Gecikmenin kritik olduğu yerlerde — cihaz üzerinde çalışan özellikler, anlık öneriler — küçük model bir zorunluluk haline gelir.",
                "Verinin cihazdan çıkmaması gereken durumlarda yerel çalışabilmesi başlı başına bir avantajdır.",
              ],
            },
            {
              type: "p",
              text: "Pratikte iki model tipi rakip değil, birlikte kurgulanır: rutin adımları küçük model, muhakeme gerektiren adımı büyük model üstlenir. Bu iş bölümünün en görünür hali [yapay zekâ ajanlarıdır](/tr/kavramlar/yapay-zeka-ajanlari).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "SLM ile LLM arasındaki fark nedir?",
          a: "Ölçek ve amaç. LLM çok geniş bir bilgi ve yetenek yelpazesini kapsar, buna karşılık daha pahalı ve yavaştır. SLM çok daha az parametreyle çalışır; genellikten ödün verip hız, maliyet ve cihaz üzerinde çalışabilme kazanır. Dar ve tekrarlayan işlerde SLM, açık uçlu muhakemede LLM daha uygundur.",
        },
        {
          q: "Küçük model kullanmak kaliteden ödün vermek mi demek?",
          a: "Görev doğru seçilirse hayır. Sınıflandırma, etiketleme ya da biçim dönüştürme gibi sınırları belli işlerde küçük bir model, büyük modele yakın sonucu çok daha düşük maliyetle verebilir. Ödün, açık uçlu ve derin muhakeme gerektiren işlerde başlar — orada büyük model hâlâ gereklidir.",
        },
      ],
      tags: [
        "SLM",
        "Küçük dil modeli",
        "Yapay zekâ",
        "Model seçimi",
      ],
    },
    en: {
      slug: "slm",
      name: "SLM (Small Language Model)",
      graphLabel: "SLM",
      metaTitle: "What Is an SLM? Small Language Models | Soleach",
      metaDescription:
        "Small language models explained: how they differ from LLMs, why fewer parameters mean lower cost and latency, and which jobs they are actually right for.",
      shortDef:
        "A language model running on far fewer parameters than an LLM, focused on a narrow set of tasks and cheap enough to run on a single device.",
      sections: [
        {
          h2: "What is an SLM?",
          blocks: [
            {
              type: "p",
              text: "SLM stands for Small Language Model. It shares the basic architecture of an [LLM](/en/concepts/llm) but runs on far fewer parameters. The consequences are practical: it answers faster, costs less to run, and often fits on a single device rather than a server fleet.",
            },
            {
              type: "p",
              text: "What it gives up is generality. You do not ask an SLM for depth on any subject; it is good at bounded, repetitive work — classification, tagging, short summaries, format conversion, intent routing. \"Small\" here means narrow, not inadequate.",
            },
          ],
        },
        {
          h2: "Where SLMs are useful",
          blocks: [
            {
              type: "p",
              text: "The right question is not which is better but which the job requires. Sending every task to the largest available model is like renting a truck to deliver an envelope: it works, but it is needlessly expensive and slow.",
            },
            {
              type: "ul",
              items: [
                "High-volume repetitive work — classifying reviews, tagging products, parsing forms — is solved far more cheaply by small models.",
                "Where latency is critical, such as on-device features or instant suggestions, a small model becomes a requirement rather than a preference.",
                "When data must not leave the device, running locally is an advantage in itself.",
              ],
            },
            {
              type: "p",
              text: "In practice the two model sizes are not rivals but a division of labour: the small model handles routine steps, the large one handles the step that needs reasoning. The most visible form of that arrangement is [AI agents](/en/concepts/ai-agents).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between an SLM and an LLM?",
          a: "Scale and purpose. An LLM covers a very wide range of knowledge and capability, at higher cost and latency. An SLM runs on far fewer parameters, trading generality for speed, cost and the ability to run on-device. For narrow, repetitive work an SLM fits; for open-ended reasoning an LLM does.",
        },
        {
          q: "Does using a small model mean sacrificing quality?",
          a: "Not if the task is chosen well. On bounded work like classification, tagging or format conversion, a small model can come close to a large one at a fraction of the cost. The trade-off starts with open-ended, deep reasoning — where a large model is still required.",
        },
      ],
      tags: [
        "SLM",
        "Small language model",
        "Artificial intelligence",
        "Model selection",
      ],
    },
  },
};
