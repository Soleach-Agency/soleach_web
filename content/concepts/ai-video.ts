import type { Concept } from "@/lib/concepts";

export const aiVideo: Concept = {
  id: "ai-video",
  category: "creative",
  publishedAt: "2026-07-28",
  related: [],
  postIds: ["yapay-zeka-video-reklamcilik", "ekranda-parfum-satmak"],
  locales: {
    tr: {
      slug: "yapay-zeka-video",
      name: "Yapay Zekâ Video Üretimi",
      graphLabel: "AI Video",
      metaTitle: "Yapay Zekâ ile Video Üretimi Nedir? | Soleach Kavramlar",
      metaDescription:
        "Yapay zekâ video üretimi nedir? Reklam kreatifinde üretken video araçlarının rolü, güçlü olduğu yerler ve sınırları.",
      shortDef:
        "Üretken yapay zekâ araçlarıyla reklam videosu ve video varyasyonu üretme pratiği; kreatif test hacmini büyüten, ama marka gerçekliğinin yerine geçmeyen bir üretim katmanı.",
      sections: [
        {
          h2: "Yapay zekâ video üretimi nedir?",
          blocks: [
            {
              type: "p",
              text: "Üretken video araçları, metinden ya da görselden hareketle video üretebiliyor: ürün çekimini farklı sahnelere taşımak, bir konsepti çekim yapmadan denemek, mevcut videodan onlarca varyasyon türetmek. Reklam tarafındaki asıl değeri hız ve hacimde: kreatif testi sürekli yeni varyasyon ister ve yapay zekâ bu üretim bandını ucuzlatıyor.",
            },
            {
              type: "p",
              text: "Sınırları da net: yapay zekâ, markanın gerçek ürününü, gerçek dokusunu ve gerçek müşteri deneyimini icat edemez — ettiğinde bu, izleyicinin er geç fark ettiği bir yapaylık üretir. Güçlü kullanım, gerçek malzemeyi çoğaltmak ve konsept aşamasını hızlandırmaktır; gerçekliğin yerine sahte kanıt koymak değil.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetik reklamı görsel yoğun ve varyasyon aç bir alan: aynı ürün farklı ciltlerde, farklı ritüellerde, farklı estetiklerde anlatılır. Yapay zekâ bu çeşitlemeyi çekim maliyetine katlanmadan denemeyi mümkün kılıyor — kazanan konsepti bulduktan sonra gerçek çekime yatırım yapmak çok daha isabetli hale geliyor.",
            },
            {
              type: "ul",
              items: [
                "Cilt sonucu iddiası taşıyan görüntülerde yapay zekâ kullanımı güven ve mevzuat riski taşır; gerçek sonuç gerektiren yerde gerçek görüntü kullanılmalıdır.",
                "En verimli akış hibrittir: konsept ve varyasyon yapay zekâdan, kanıt ve doku gerçek çekimden.",
                "Platformların yapay zekâ içerik etiketleme kuralları takip edilmelidir; şeffaflık güveni korur.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Yapay zekâ videoları gerçek çekimin yerini tutar mı?",
          a: "Bugün için hayır — tamamlar. Konsept denemesi, varyasyon üretimi ve arka plan/sahne çeşitlemesinde çok güçlü; ürün dokusu, gerçek cilt sonucu ve marka güveni gerektiren anlarda gerçek çekim hâlâ vazgeçilmez.",
        },
        {
          q: "Nereden başlamalıyız?",
          a: "En çok tekrar eden ihtiyaçtan: mevcut kazanan videolarının hook ve sahne varyasyonlarını yapay zekâyla çoğaltmak, sıfırdan yapay zekâ videosu üretmekten daha hızlı sonuç verir.",
        },
      ],
      tags: ["Yapay zekâ", "Video üretimi", "Kreatif"],
    },
    en: {
      slug: "ai-video",
      name: "AI Video Production",
      graphLabel: "AI Video",
      metaTitle: "What Is AI Video Production? | Soleach Concepts",
      metaDescription:
        "AI video production explained: the role of generative video tools in ad creative, where they shine and where their limits are.",
      shortDef:
        "The practice of producing ad videos and variations with generative AI tools; a production layer that multiplies creative testing volume without replacing brand authenticity.",
      sections: [
        {
          h2: "What is AI video production?",
          blocks: [
            {
              type: "p",
              text: "Generative video tools can produce footage from text or images: placing a product shot into new scenes, trying a concept without a shoot, deriving dozens of variations from existing video. Their real value in advertising is speed and volume: creative testing constantly demands fresh variations, and AI makes that production line dramatically cheaper.",
            },
            {
              type: "p",
              text: "The limits are just as clear: AI cannot invent your real product, its real texture or a real customer experience — when it does, it produces an artificiality viewers eventually notice. The strong use is multiplying real material and accelerating the concept stage, not replacing reality with fabricated proof.",
            },
          ],
        },
        {
          h2: "Why it matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty advertising is visually dense and variation-hungry: the same product is told across skin tones, rituals and aesthetics. AI makes exploring that variety possible without shoot costs — and once a winning concept emerges, investing in a real shoot becomes far better targeted.",
            },
            {
              type: "ul",
              items: [
                "Using AI for imagery that implies skin results carries trust and regulatory risk; where real results are claimed, real footage must be used.",
                "The most productive workflow is hybrid: concepts and variations from AI, proof and texture from real shoots.",
                "Platform rules on labeling AI content should be followed; transparency protects trust.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Can AI video replace real shoots?",
          a: "Not today — it complements them. It is very strong for concept exploration, variation production and scene changes; real shoots remain essential where product texture, genuine skin results and brand trust are at stake.",
        },
        {
          q: "Where should we start?",
          a: "With your most repetitive need: using AI to multiply hook and scene variations of your existing winning videos pays off faster than generating videos from scratch.",
        },
      ],
      tags: ["AI", "Video production", "Creative"],
    },
  },
};
