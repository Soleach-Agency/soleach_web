import type { Locale } from "./i18n";
import { conceptsSlug } from "./section-slugs";

/**
 * All site copy lives here, keyed by locale. Both dictionaries share the same
 * shape (enforced by the `Dictionary` type) so pages stay in sync across TR/EN.
 *
 * Voice: warm, bold, human — a creative partner talking to a founder, not a
 * corporate brochure. Turkish uses an intimate "sen".
 */

export type ServiceKey = "ads" | "creative" | "seo-geo" | "web-ecommerce";

export interface ServiceContent {
  key: ServiceKey;
  icon: "ads" | "creative" | "search" | "store";
  title: string;
  tagline: string;
  summary: string;
  features: string[];
  outcome: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Dictionary {
  brandTagline: string;
  nav: {
    home: string;
    services: string;
    about: string;
    blog: string;
    concepts: string;
    contact: string;
    cta: string;
  };
  routes: {
    services: string;
    about: string;
    contact: string;
    blog: string;
    concepts: string;
  };
  meta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    blog: { title: string; description: string };
    concepts: { title: string; description: string };
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      note: string;
      scrollCue: string;
    };
    marquee: string[];
    stats: Stat[];
    manifesto: { eyebrow: string; big: string; body: string };
    servicesIntro: { eyebrow: string; title: string; subtitle: string };
    process: {
      eyebrow: string;
      title: string;
      subtitle: string;
      deliverablesLabel: string;
      steps: { title: string; desc: string; deliverables: string[] }[];
    };
    whyUs: {
      eyebrow: string;
      title: string;
      subtitle: string;
      points: { title: string; desc: string }[];
    };
    faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
    ctaBand: { title: string; subtitle: string; button: string };
  };
  services: ServiceContent[];
  servicesPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    featuresLabel: string;
    outcomeLabel: string;
  };
  aboutPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    story: { title: string; paragraphs: string[] };
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    values: { title: string; items: { title: string; desc: string }[] };
  };
  contactPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    formTitle: string;
    formSubtitle: string;
    formButton: string;
    emailTitle: string;
    emailDesc: string;
    orLabel: string;
  };
  blogPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    readingTimeSuffix: string;
    updatedLabel: string;
    faqTitle: string;
    sourcesTitle: string;
    relatedServiceLabel: string;
    backToBlog: string;
  };
  conceptsPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    graphAriaLabel: string;
    graphHint: string;
    /** Zoom controls — rendered by <GraphZoom> only once it has hydrated. */
    graphZoomIn: string;
    graphZoomOut: string;
    graphResetView: string;
    listTitle: string;
    relatedConceptsTitle: string;
    relatedPostsTitle: string;
    backToConcepts: string;
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    companyHeading: string;
    followHeading: string;
    rights: string;
  };
}

const tr: Dictionary = {
  brandTagline: "Kozmetik ve güzellik markaları için dijital reklam ajansı",
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    about: "Hakkımızda",
    blog: "Blog",
    concepts: "Kavramlar",
    contact: "İletişim",
    cta: "Hadi tanışalım",
  },
  routes: {
    services: "services",
    about: "about",
    contact: "contact",
    blog: "blog",
    concepts: conceptsSlug.tr,
  },
  meta: {
    home: {
      title: "Kozmetik & Güzellik Markaları için Dijital Reklam Ajansı | Soleach",
      description:
        "Kozmetik, makyaj ve cilt bakımı markalarına özel dijital reklam ajansı. Meta & TikTok performans reklamları, kreatif üretim, Shopify e-ticaret kurulumu ve SEO & GEO ile ROAS odaklı büyüme.",
    },
    services: {
      title: "Kozmetik Markaları için Dijital Ajans Hizmetleri | Soleach",
      description:
        "Performans reklamları, içerik & kreatif üretim, web sitesi & Shopify e-ticaret kurulumu ve SEO & GEO. Kozmetik markanı büyütmek için gereken her şey, tek ekipte.",
    },
    about: {
      title: "Hakkımızda | Kozmetik Odaklı Dijital Reklam Ajansı | Soleach",
      description:
        "Biz her işi yapmayız — bir işi çok iyi yaparız. Soleach; kozmetik, makyaj, cilt bakımı ve kadın ürünleri markalarına adanmış bir dijital reklam ajansı.",
    },
    contact: {
      title: "İletişim | Soleach",
      description:
        "Markanı konuşalım. Formu doldur, 24 saat içinde sana özel bir büyüme planıyla dönelim. Taahhüt yok.",
    },
    blog: {
      title: "Blog | Kozmetik Markaları için Dijital Büyüme Rehberleri | Soleach",
      description:
        "Kozmetik ve güzellik markaları için reklam, içerik, e-ticaret, SEO ve GEO rehberleri. Uydurma formül yok; test edilebilir, dürüst ve uygulanabilir bilgi.",
    },
    concepts: {
      title: "Kavram Haritası | Kozmetik Pazarlama Sözlüğü | Soleach",
      description:
        "Kozmetik pazarlamasının kavramları tek haritada: ROAS, GEO, UGC, hook, Meta Pixel ve daha fazlası. Her kavramın net tanımı, ilişkili kavramlar ve derinleşmek için rehber yazılar.",
    },
  },
  home: {
    hero: {
      eyebrow: "Kozmetik ve güzellik markaları için dijital reklam ajansı",
      title: "Kozmetik markanı büyütmek",
      titleAccent: "de bir sanat.",
      subtitle:
        "Makyajdan cilt bakımına — markanı sadece güzel göstermiyoruz. İnsanların aklına kazıyor, sepetine koyuyoruz. Reklam, içerik, e-ticaret ve yapay zekâ görünürlüğü; hepsi tek ekipte.",
      ctaPrimary: "Markanı konuşalım",
      ctaSecondary: "Neler yapıyoruz?",
      note: "24 saat içinde dönüyoruz · Taahhüt yok, sürpriz fatura yok",
      scrollCue: "Keşfet",
    },
    marquee: [
      "Makyaj",
      "Cilt Bakımı",
      "Parfüm",
      "Saç Bakımı",
      "Kozmetik",
      "Dermokozmetik",
      "Ten Bakımı",
      "Doğal Güzellik",
      "Vegan Kozmetik",
      "Güneş Bakımı",
    ],
    stats: [
      { value: 100, prefix: "%", label: "Sadece kozmetik ve güzellik markaları. Başka hiçbir şey." },
      { value: 3, suffix: "×", label: "Hedeflediğimiz ortalama reklam getirisi (ROAS)" },
      { value: 24, suffix: " saat", label: "İçinde ilk yanıtımız sende olur" },
    ],
    manifesto: {
      eyebrow: "Kısaca",
      big: "Her kozmetik markasının bir hikâyesi var. Biz onu satışa çeviriyoruz.",
      body: "En güzel ürün bile, doğru insanlara ulaşmazsa rafta bekler. Biz markanın hikâyesini alır; kaydırılan bir ekranı durduran, tıklatan ve “bunu almam lazım” dedirten bir şeye dönüştürürüz. Sonra da o tıklamayı satışa çeviren bir mağazayla tamamlarız. Estetik ve performans, aynı masada.",
    },
    servicesIntro: {
      eyebrow: "Ne yapıyoruz",
      title: "Kozmetik markanı büyüten dört güç",
      subtitle:
        "Reklamı sanata, sanatı da satışa çeviriyoruz. Reklamdan mağazaya kadar dördü bir arada; tek ekip, tek hedef: büyümen.",
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "Tahmin yok. Sadece net bir yol.",
      subtitle:
        "Her adımda ne yaptığımızı, neden yaptığımızı ve ne getirdiğini görürsün. Sürpriz sevmeyiz — iyi olanları hariç.",
      deliverablesLabel: "Bu adımda eline geçenler",
      steps: [
        {
          title: "Tanışma",
          desc: "Markanı, ürünlerini ve kime seslendiğini dinliyoruz. Rakipleri ve pazarı okuyup fırsatları masaya koyuyoruz.",
          deliverables: [
            "Ücretsiz tanışma görüşmesi (video ya da yüz yüze)",
            "Mevcut hesapların ve sitenin ilk değerlendirmesi",
            "Rakip ve pazar gözlemlerinin özeti",
          ],
        },
        {
          title: "Strateji",
          desc: "Bütçe, kanal ve mesaj planını birlikte kuruyoruz. Net hedefler, net bir yol haritası — havada laf yok.",
          deliverables: [
            "Yazılı büyüme yol haritası ve kanal planı",
            "Bütçe dağılımı ve hedef metrikler (ROAS, CPA)",
            "İçerik ve kampanya takvimi taslağı",
          ],
        },
        {
          title: "Üretim & Yayın",
          desc: "Durduran kreatifleri üretip kampanyaları yayına alıyoruz. Doğru kitleye, doğru anda, doğru sözle.",
          deliverables: [
            "Onayına sunulan kreatifler ve reklam metinleri",
            "Piksel / ölçüm kurulumunun doğrulanması",
            "Yayına alınan kampanyaların kurulum özeti",
          ],
        },
        {
          title: "Optimizasyon",
          desc: "Veriyi sürekli izliyor, test ediyoruz. Bütçeyi en çok kazandıran yere yönlendirip büyümeyi ölçeğe taşıyoruz.",
          deliverables: [
            "Düzenli, sade performans raporu",
            "Yapılan testler ve sonuçlarının kaydı",
            "Bir sonraki dönem için net öneri listesi",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "Neden Soleach",
      title: "Biz her işi yapmayız. Bir işi çok iyi yaparız.",
      subtitle:
        "Kozmetik, güzellik ve kadın ürünleri. Bu kategorinin dilini, estetiğini ve alıcısını ezbere biliyoruz — çünkü başka bir şeye bakmıyoruz.",
      points: [
        {
          title: "Kategoriye adanmışlık",
          desc: "Cilt bakımından makyaja, dermokozmetikten parfüme; bu ürünlerin nasıl arzu edildiğini ve satın alındığını biliyoruz. Kreatifi de ona göre kuruyoruz.",
        },
        {
          title: "Estetik + performans",
          desc: "Sadece güzel görünen değil; güzel görünüp aynı anda satan işler. Marka imajın da büyür, cironun da.",
        },
        {
          title: "Reklamdan mağazaya tek zincir",
          desc: "Reklamı biz kuruyoruz, tıklamanın indiği Shopify mağazasını da biz. Kimse “sorun diğer tarafta” diyemiyor; huninin tamamı tek ekipte.",
        },
        {
          title: "Sürpriz fatura yok",
          desc: "Her kuruşun nereye gittiğini ve ne getirdiğini (ROAS, CPA, dönüşüm oranı) açık açık gösteririz. Şeffaflık lüks değil, standart.",
        },
        {
          title: "Yarının aramasına hazır",
          desc: "Markanı yalnızca Google’da değil; ChatGPT ve Perplexity gibi yapay zekâ motorlarında da görünür kılıyoruz.",
        },
      ],
    },
    faq: {
      eyebrow: "Aklındakiler",
      title: "Merak ettiklerin",
      items: [
        {
          q: "Soleach tam olarak ne yapıyor?",
          a: "Soleach, kozmetik ve güzellik markalarına adanmış bir dijital reklam ajansıdır. Sosyal medya ve performans reklamlarını yönetiriz, içerik & kreatif üretiriz, web sitesi ve Shopify e-ticaret altyapısını kurarız ve markaları hem arama motorlarında hem de yapay zekâ motorlarında (SEO & GEO) görünür kılarız.",
        },
        {
          q: "Kozmetik markaları için dijital reklam ajansı ne yapar?",
          a: "Kozmetik ajansının işi, ürünü doğru alıcıyla buluşturup bunu ölçülebilir satışa çevirmektir. Pratikte bu dört parçadan oluşur: Meta ve TikTok'ta performans reklamı kurmak ve optimize etmek; kategorinin estetiğine uygun reklam kreatifi ve video üretmek; tıklamanın indiği e-ticaret mağazasını dönüşüm odaklı kurmak; ve markayı Google ile yapay zekâ motorlarında görünür kılmak. Genel bir ajanstan farkı, kozmetik alıcısının satın alma davranışını ve kategorinin reklam mevzuatını bilerek çalışmasıdır.",
        },
        {
          q: "Ürün mü satıyorsunuz?",
          a: "Hayır. Biz ürün satmıyoruz; ürün satan kozmetik markalarının büyümesini yönetiyoruz. Reklam, içerik, e-ticaret ve görünürlük tarafında markanın büyüme ortağıyız.",
        },
        {
          q: "Ne tür markalarla çalışıyorsunuz?",
          a: "Makyaj, cilt bakımı, dermokozmetik, parfüm, saç bakımı ve kadın ürünleri kategorisindeki markalarla. Yeni doğmuş bir markadan büyümek isteyen yerleşik markalara kadar geniş bir yelpazeye hizmet veriyoruz.",
        },
        {
          q: "Web sitemi ve Shopify mağazamı da siz mi kuruyorsunuz?",
          a: "Evet. Kozmetik markaları için Shopify e-ticaret mağazası kuruyor, temayı markanın kimliğine göre özelleştiriyor ve ürün-kategori sayfalarını dönüşüm odaklı tasarlıyoruz. Kurumsal web sitesi ihtiyacını da karşılıyoruz. Reklamı kuran ekiple mağazayı kuran ekip aynı olduğu için, trafiğin geldiği yer ile indiği yer birbiriyle uyumlu oluyor.",
        },
        {
          q: "ROAS ve ROI arasındaki fark ne, hangisine bakmalıyım?",
          a: "ROAS (Return on Ad Spend), reklama harcadığın 1 TL'nin kaç TL ciro getirdiğini gösterir — sadece reklam harcamasını hesaba katar. ROI (Return on Investment) ise ürün maliyeti, kargo, komisyon ve ajans dahil tüm giderleri düşerek gerçek kârı ölçer. Kampanya optimizasyonu için günlük ROAS'a bakarız; işin gerçekten kazanıp kazanmadığına karar verirken ROI'ye. Yüksek ROAS'ın zarar ettirdiği durumlar vardır, o yüzden ikisini birlikte raporlarız.",
        },
        {
          q: "GEO nedir, neden önemli?",
          a: "GEO (Generative Engine Optimization), markanın ChatGPT, Perplexity ve Google AI Overviews gibi üretken yapay zekâ motorlarında doğru şekilde görünmesini sağlar. İnsanlar artık ürün araştırmasını bu araçlarla yapıyor; GEO ile markan bu yanıtların içinde yer alıyor.",
        },
        {
          q: "Başarıyı nasıl ölçüyorsunuz?",
          a: "Reklam getirisi (ROAS), edinme maliyeti, dönüşüm oranı ve marka görünürlüğü gibi net metriklerle. Her kampanyanın performansını düzenli, anlaşılır raporlarla paylaşıyoruz — grafik güzel olsun diye değil, karar verebilesin diye.",
        },
        {
          q: "Nasıl başlıyoruz?",
          a: "Formu doldurman yeterli. Ücretsiz bir tanışma görüşmesi ayarlıyor, markanı dinliyor ve sana özel bir büyüme yol haritası sunuyoruz. Beğenirsen devam ederiz.",
        },
      ],
    },
    ctaBand: {
      title: "Markanı büyütmeye hazır mısın?",
      subtitle:
        "Bir kahve kadar sürüyor. Formu doldur, markanı dinleyelim ve sana özel bir plan çıkaralım.",
      button: "Hadi başlayalım",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Sosyal Medya & Performans Reklamları",
      tagline: "Doğru insan, doğru an, doğru mesaj.",
      summary:
        "Meta (Instagram & Facebook) ve TikTok’ta satış odaklı kampanyalar kuruyor, yönetiyor ve durmadan optimize ediyoruz. Bütçeni tahmine değil, veriye göre en çok kazandıran yere yönlendiriyoruz.",
      features: [
        "Instagram, Facebook ve TikTok reklam yönetimi",
        "Satış ve dönüşüm odaklı kampanya kurgusu",
        "Kitle hedefleme, yeniden pazarlama ve huni tasarımı",
        "A/B testleri ve kesintisiz optimizasyon",
        "Şeffaf performans raporları (ROAS, CPA)",
      ],
      outcome: "Reklam bütçenden ölçülebilir, kârlı bir büyüme.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "İçerik & Kreatif Üretim",
      tagline: "Kaydırırken parmağı durduran görseller.",
      summary:
        "Ürününü en iyi anlatan reklam kreatifleri, Reels ve kısa videolar üretiyoruz. Güzelliğin estetiğini performansla buluşturuyor; hem markanı yakışıklı gösteriyor hem satıyoruz.",
      features: [
        "Ürün fotoğrafı ve reklam görseli konsepti",
        "Reels, TikTok ve kısa video üretimi",
        "Güven veren, UGC tarzı içerikler",
        "Marka kimliğine sadık bir görsel dil",
        "Platforma özel formatlar ve varyasyonlar",
      ],
      outcome: "İzleyeni durduran, tıklatan ve satın aldıran içerikler.",
    },
    {
      key: "web-ecommerce",
      icon: "store",
      title: "Web Sitesi & Shopify E-Ticaret Kurulumu",
      tagline: "Güzel görünen değil, satan bir mağaza.",
      summary:
        "Kozmetik markan için Shopify e-ticaret mağazasını ve kurumsal web siteni kuruyoruz. Reklamdan gelen tıklamanın boşa gitmediği, dönüşüm için tasarlanmış bir mağaza — markanın estetiğiyle, satışın matematiğiyle birlikte.",
      features: [
        "Shopify mağaza kurulumu ve tema özelleştirme",
        "Dönüşüm odaklı ürün ve kategori sayfası tasarımı",
        "Marka kimliğine sadık kurumsal web sitesi",
        "Ödeme, kargo ve entegrasyon kurulumu",
        "Piksel, ölçüm ve e-ticaret takibi kurulumu",
        "Mobil hız ve teknik SEO temeli",
      ],
      outcome: "Reklamdan gelen trafiği satışa çeviren bir mağaza.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO — Yapay Zekâ Görünürlüğü",
      tagline: "Google’da da, yapay zekâda da seni bulsunlar.",
      summary:
        "Markanı hem klasik arama motorlarında (SEO) hem de ChatGPT, Perplexity gibi üretken yapay zekâ motorlarında (GEO) görünür kılıyoruz. Aramanın geleceğine bugünden hazır ol.",
      features: [
        "Teknik ve içerik odaklı SEO",
        "GEO: yapay zekâ motorlarında marka görünürlüğü",
        "Yapılandırılmış veri ve zengin sonuç kurgusu",
        "Anahtar kelime ve içerik stratejisi",
        "Ürün ve kategori sayfası optimizasyonu",
      ],
      outcome: "Müşterin ararken de, yapay zekâya sorarken de seni bulur.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Hizmetler",
      title: "Kozmetik markanı büyüten her şey, tek ekipte.",
      subtitle:
        "Reklamdan içeriğe, Shopify e-ticaret kurulumundan yapay zekâ görünürlüğüne. Parçalı ajanslarla uğraşma — hepsi burada.",
    },
    featuresLabel: "Neler dahil",
    outcomeLabel: "Sonuç",
  },
  aboutPage: {
    hero: {
      eyebrow: "Hakkımızda",
      title: "Kozmetik markalarının büyüme ortağı.",
      subtitle:
        "Estetiği ve performansı aynı masaya oturtuyoruz. Çünkü kozmetik markası büyütmek, ikisini birden ister.",
    },
    story: {
      title: "Hikâyemiz",
      paragraphs: [
        "Soleach, kozmetik ve güzellik markalarının dijitalde hak ettiği yeri alması için doğdu. Bu kategorinin başka hiçbir şeye benzemediğini biliyoruz: burada estetik kadar güven, görsel kadar sonuç önemli.",
        "Biz her sektöre koşan genel bir ajans değiliz. Yalnızca makyaj, cilt bakımı, dermokozmetik, parfüm ve kadın ürünleri markalarıyla çalışıyoruz. Bu odak, kategorinin dilini, alıcısını ve satın alma yolculuğunu ezbere bilmemizi sağlıyor.",
        "Reklamı sanata, sanatı da satışa çeviriyoruz. Reklamı kurarız, kreatifi üretiriz, tıklamanın indiği e-ticaret mağazasını kurarız ve markanı arama motorlarında görünür kılarız. Amacımız markanı sadece güzel göstermek değil; sürdürülebilir, ölçülebilir bir büyüme yaratmak. Kısacası: senin kazanman, bizim işimiz.",
      ],
    },
    mission: {
      title: "Misyonumuz",
      body: "Kozmetik markalarını, doğru kitleyle buluşturan ve gerçekten satışa dönüşen dijital kampanyalarla büyütmek.",
    },
    vision: {
      title: "Vizyonumuz",
      body: "Kozmetik ve güzellik kategorisinde akla ilk gelen büyüme ortağı olmak; markaları hem klasik aramada hem de yapay zekâ çağında bir adım öne taşımak.",
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "Odak",
          desc: "Tek bir kategoriye adanıyoruz ve orada en iyisi olmak için çalışıyoruz.",
        },
        {
          title: "Şeffaflık",
          desc: "Her bütçenin nereye gittiğini ve ne getirdiğini saklamadan gösteririz.",
        },
        {
          title: "Estetik + veri",
          desc: "Güzel görüneni değil; güzel görünüp aynı zamanda satanı üretiriz.",
        },
        {
          title: "Meraklıyız",
          desc: "Aramanın ve tüketici davranışının nasıl değiştiğini takip eder, markanı öne taşırız.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "İletişim",
      title: "Markanı birlikte büyütelim.",
      subtitle:
        "Aşağıdaki formu doldur, markanı dinleyelim ve sana özel bir büyüme yol haritası çıkaralım. 24 saat içinde dönüyoruz.",
    },
    formTitle: "Ücretsiz tanışma görüşmesi",
    formSubtitle:
      "Markan hakkında birkaç soruya yanıt ver; sana en uygun planla geri dönelim.",
    formButton: "Formu yeni sekmede aç",
    emailTitle: "E-posta",
    emailDesc: "Form yerine doğrudan yazmak istersen, kapımız açık.",
    orLabel: "veya",
  },
  blogPage: {
    hero: {
      eyebrow: "Blog",
      title: "Kozmetik markaları için büyüme rehberleri",
      subtitle:
        "Reklam, içerik, e-ticaret, SEO ve GEO üzerine dürüst, uygulanabilir yazılar. Sihirli formül satmıyoruz; ne işe yarıyorsa onu, neden yaradığıyla birlikte anlatıyoruz.",
    },
    readingTimeSuffix: "dk okuma",
    updatedLabel: "Güncellendi",
    faqTitle: "Sık sorulan sorular",
    sourcesTitle: "Kaynaklar",
    relatedServiceLabel: "İlgili hizmetimiz",
    backToBlog: "Tüm yazılar",
  },
  conceptsPage: {
    hero: {
      eyebrow: "Kavram Haritası",
      title: "Kozmetik pazarlamanın kavram haritası",
      subtitle:
        "Reklam, kreatif, e-ticaret ve SEO & GEO dünyasının kavramları — birbirleriyle ve blog yazılarımızla bağlantılı, tek haritada. Bir kavrama tıkla; net tanımını, ilişkili kavramları ve derinleşmek için okuman gereken yazıları gör.",
    },
    graphAriaLabel:
      "Kavram haritası: kavramlar arasındaki ilişkileri gösteren ağ grafiği",
    graphHint:
      "Haritadaki bir kavrama tıklayarak tanımına gidebilirsin. Çizgiler kavramlar arasındaki ilişkileri gösterir. Yakınlaşmak için sağ üstteki düğmeleri ya da Ctrl + fare tekerleğini kullan; haritayı sürükleyerek gezebilirsin.",
    graphZoomIn: "Yakınlaştır",
    graphZoomOut: "Uzaklaştır",
    graphResetView: "Görünümü sıfırla",
    listTitle: "Tüm kavramlar",
    relatedConceptsTitle: "İlişkili kavramlar",
    relatedPostsTitle: "Bu kavramı işleyen yazılar",
    backToConcepts: "Tüm kavramlar",
  },
  footer: {
    tagline:
      "Kozmetik, güzellik ve kadın ürünleri markaları için dijital reklam ajansı. Estetiği satışa çeviriyoruz.",
    servicesHeading: "Hizmetler",
    companyHeading: "Kurumsal",
    followHeading: "Takip et",
    rights: "Tüm hakları saklıdır.",
  },
};

const en: Dictionary = {
  brandTagline: "Digital advertising agency for cosmetics and beauty brands",
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    blog: "Blog",
    concepts: "Concepts",
    contact: "Contact",
    cta: "Let's talk",
  },
  routes: {
    services: "services",
    about: "about",
    contact: "contact",
    blog: "blog",
    concepts: conceptsSlug.en,
  },
  meta: {
    home: {
      title: "Digital Advertising Agency for Cosmetics & Beauty Brands | Soleach",
      description:
        "A digital advertising agency built for cosmetics, makeup and skincare brands. Meta & TikTok performance ads, creative production, Shopify e-commerce setup and SEO & GEO — all measured on ROAS.",
    },
    services: {
      title: "Digital Agency Services for Cosmetics Brands | Soleach",
      description:
        "Performance advertising, content & creative production, website & Shopify e-commerce setup, and SEO & GEO. Everything it takes to grow your cosmetics brand, in one team.",
    },
    about: {
      title: "About | Cosmetics-Focused Digital Advertising Agency | Soleach",
      description:
        "We don't do everything — we do one thing exceptionally well. Soleach is a digital advertising agency devoted to cosmetics, makeup, skincare and women's product brands.",
    },
    contact: {
      title: "Contact | Soleach",
      description:
        "Let's talk about your brand. Fill out the form and we'll come back within 24 hours with a plan made for you. No commitment.",
    },
    blog: {
      title: "Blog | Digital Growth Guides for Cosmetics Brands | Soleach",
      description:
        "Guides on advertising, content, e-commerce, SEO and GEO for cosmetics and beauty brands. No made-up formulas — honest, testable, actionable knowledge.",
    },
    concepts: {
      title: "Concept Map | Beauty Marketing Glossary | Soleach",
      description:
        "The concepts of beauty marketing on a single map: ROAS, GEO, UGC, hooks, Meta Pixel and more. Clear definitions, related concepts and guides to go deeper.",
    },
  },
  home: {
    hero: {
      eyebrow: "Digital advertising agency for cosmetics and beauty brands",
      title: "Growing your cosmetics brand",
      titleAccent: "is an art.",
      subtitle:
        "From makeup to skincare — we don't just make your brand look good. We make it unforgettable, and we put it in the cart. Advertising, content, e-commerce and AI visibility, all in one team.",
      ctaPrimary: "Let's talk about your brand",
      ctaSecondary: "What we do",
      note: "We reply within 24 hours · No commitment, no surprise invoices",
      scrollCue: "Explore",
    },
    marquee: [
      "Makeup",
      "Skincare",
      "Fragrance",
      "Haircare",
      "Cosmetics",
      "Dermocosmetics",
      "Complexion",
      "Clean Beauty",
      "Vegan Cosmetics",
      "Sun Care",
    ],
    stats: [
      { value: 100, prefix: "", suffix: "%", label: "Cosmetics and beauty brands only. Nothing else." },
      { value: 3, suffix: "×", label: "Average return on ad spend (ROAS) we aim for" },
      { value: 24, suffix: "h", label: "Until our first reply lands in your inbox" },
    ],
    manifesto: {
      eyebrow: "In short",
      big: "Every cosmetics brand has a story. We turn yours into sales.",
      body: "Even the most beautiful product waits on the shelf if it never reaches the right people. We take your story and turn it into something that stops a scrolling thumb, earns the click and says \"I need this.\" Then we finish the job with a store that turns that click into a sale. Aesthetics and performance, at the same table.",
    },
    servicesIntro: {
      eyebrow: "What we do",
      title: "Four forces that grow your cosmetics brand",
      subtitle:
        "We turn advertising into art, and art into sales. From the ad to the store, four in one — one team, one goal: your growth.",
    },
    process: {
      eyebrow: "How we work",
      title: "No guesswork. Just a clear path.",
      subtitle:
        "At every step you see what we do, why we do it and what it returns. We don't like surprises — except the good ones.",
      deliverablesLabel: "What you get at this step",
      steps: [
        {
          title: "Get to know you",
          desc: "We listen to your brand, your products and who you speak to, then read the market and competitors to put opportunities on the table.",
          deliverables: [
            "A free intro call (video or in person)",
            "A first review of your accounts and website",
            "A summary of competitor and market observations",
          ],
        },
        {
          title: "Strategy",
          desc: "We build the budget, channel and messaging plan together. Clear goals, a clear roadmap — no fluff.",
          deliverables: [
            "A written growth roadmap and channel plan",
            "Budget allocation and target metrics (ROAS, CPA)",
            "A draft content and campaign calendar",
          ],
        },
        {
          title: "Production & Launch",
          desc: "We produce scroll-stopping creative and launch the campaigns — right audience, right moment, right words.",
          deliverables: [
            "Creatives and ad copy submitted for your approval",
            "Verified pixel / measurement setup",
            "A setup summary of every campaign that goes live",
          ],
        },
        {
          title: "Optimization",
          desc: "We track and test relentlessly, steering budget to what earns most and taking your growth to scale.",
          deliverables: [
            "A regular, readable performance report",
            "A log of the tests we ran and what they showed",
            "A clear list of recommendations for the next period",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Soleach",
      title: "We don't do everything. We do one thing brilliantly.",
      subtitle:
        "Cosmetics, beauty and women's products. We know this category's language, aesthetics and buyer by heart — because we look at nothing else.",
      points: [
        {
          title: "Devoted to the category",
          desc: "From skincare to makeup, dermocosmetics to fragrance, we understand how these products are desired and bought — and we build the creative around it.",
        },
        {
          title: "Aesthetics + performance",
          desc: "Not just work that looks good, but work that looks good and sells. Your brand image grows, and so does revenue.",
        },
        {
          title: "One chain from ad to store",
          desc: "We build the ad and the Shopify store the click lands on. Nobody gets to say \"that's the other team's problem\" — the whole funnel sits with one team.",
        },
        {
          title: "No surprise invoices",
          desc: "We show exactly where every cent goes and what it returns — ROAS, CPA, conversion rate. Transparency isn't a luxury; it's the standard.",
        },
        {
          title: "Ready for tomorrow's search",
          desc: "We make your brand visible not only on Google, but on AI engines like ChatGPT and Perplexity too.",
        },
      ],
    },
    faq: {
      eyebrow: "On your mind",
      title: "Good to know",
      items: [
        {
          q: "What exactly does Soleach do?",
          a: "Soleach is a digital advertising agency devoted to cosmetics and beauty brands. We manage social and performance advertising, produce content & creative, build websites and Shopify e-commerce stores, and make brands visible on both search engines and AI engines (SEO & GEO).",
        },
        {
          q: "What does a digital advertising agency for cosmetics brands actually do?",
          a: "A cosmetics agency's job is to put the product in front of the right buyer and turn that into measurable sales. In practice that's four parts: building and optimizing performance campaigns on Meta and TikTok; producing ad creative and video that match the category's aesthetics; building the e-commerce store the click lands on, designed for conversion; and making the brand visible on Google and AI engines. What separates it from a generalist agency is knowing how the cosmetics buyer decides and what the category's ad regulations allow.",
        },
        {
          q: "Do you sell products?",
          a: "No. We don't sell products; we grow the cosmetics brands that do. Across advertising, content, e-commerce and visibility, we're your growth partner.",
        },
        {
          q: "What kind of brands do you work with?",
          a: "Brands in makeup, skincare, dermocosmetics, fragrance, haircare and women's products — from newly launched brands to established ones ready to scale.",
        },
        {
          q: "Do you build my website and Shopify store too?",
          a: "Yes. We set up Shopify e-commerce stores for cosmetics brands, customize the theme to the brand's identity, and design product and collection pages for conversion. We also build corporate websites. Because the same team builds the ads and the store, where the traffic comes from and where it lands actually match.",
        },
        {
          q: "What's the difference between ROAS and ROI, and which should I watch?",
          a: "ROAS (Return on Ad Spend) shows how much revenue each unit of ad spend brings back — it only accounts for the ad budget. ROI (Return on Investment) subtracts everything: product cost, shipping, platform fees and agency fees, to measure actual profit. We optimize campaigns on daily ROAS, but we judge whether the business is truly winning on ROI. A high ROAS can still lose money, which is why we report both.",
        },
        {
          q: "What is GEO, and why does it matter?",
          a: "GEO (Generative Engine Optimization) makes sure your brand shows up correctly in generative AI engines like ChatGPT, Perplexity and Google AI Overviews. People now research products with these tools; GEO puts your brand inside those answers.",
        },
        {
          q: "How do you measure success?",
          a: "With clear metrics: return on ad spend (ROAS), cost per acquisition, conversion rate and brand visibility. We share every campaign's performance in regular, readable reports — not to look pretty, but so you can decide.",
        },
        {
          q: "How do we start?",
          a: "Just fill out the form. We'll set up a free intro call, listen to your brand, and present a growth roadmap made for you. If you like it, we keep going.",
        },
      ],
    },
    ctaBand: {
      title: "Ready to grow your brand?",
      subtitle:
        "It takes about as long as a coffee. Fill out the form, let us listen to your brand and build a plan made just for you.",
      button: "Let's get started",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Social & Performance Advertising",
      tagline: "Right person, right moment, right message.",
      summary:
        "We build, manage and relentlessly optimize sales-focused campaigns on Meta (Instagram & Facebook) and TikTok — steering your budget by data, not guesswork, to whatever earns most.",
      features: [
        "Instagram, Facebook and TikTok ad management",
        "Sales- and conversion-focused campaign design",
        "Audience targeting, retargeting and funnel design",
        "A/B testing and non-stop optimization",
        "Transparent performance reports (ROAS, CPA)",
      ],
      outcome: "Measurable, profitable growth from your ad budget.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "Content & Creative Production",
      tagline: "Visuals that stop the thumb.",
      summary:
        "We produce ad creative, Reels and short-form video that show your product at its best — pairing the aesthetics of beauty with performance. We make your brand look gorgeous and sell.",
      features: [
        "Product photography and ad creative concepts",
        "Reels, TikTok and short-form video production",
        "Trust-building, UGC-style content",
        "A visual language true to your brand identity",
        "Platform-specific formats and variations",
      ],
      outcome: "Content that stops, clicks and converts.",
    },
    {
      key: "web-ecommerce",
      icon: "store",
      title: "Website & Shopify Store Setup",
      tagline: "A store that sells — not just one that looks good.",
      summary:
        "We build the Shopify store and the website your cosmetics brand runs on. A store designed for conversion, where the click you paid for doesn't go to waste — your brand's aesthetics and the math of selling, in the same build.",
      features: [
        "Shopify store setup and theme customization",
        "Conversion-focused product and collection pages",
        "A corporate website true to your brand identity",
        "Payment, shipping and integration setup",
        "Pixel, measurement and e-commerce tracking setup",
        "Mobile speed and a technical SEO foundation",
      ],
      outcome: "A store that turns the traffic you pay for into sales.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO — AI Visibility",
      tagline: "Be found on Google and in AI.",
      summary:
        "We make your brand visible both on classic search engines (SEO) and on generative AI engines like ChatGPT and Perplexity (GEO). Get ready today for the search of tomorrow.",
      features: [
        "Technical and content-driven SEO",
        "GEO: brand visibility on AI engines",
        "Structured data and rich-result setup",
        "Keyword and content strategy",
        "Product and category page optimization",
      ],
      outcome: "Customers find you when they search and when they ask AI.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Services",
      title: "Everything that grows your cosmetics brand, in one team.",
      subtitle:
        "From advertising to content, from Shopify e-commerce setup to AI visibility. Stop juggling scattered agencies — it's all here.",
    },
    featuresLabel: "What's included",
    outcomeLabel: "Outcome",
  },
  aboutPage: {
    hero: {
      eyebrow: "About",
      title: "The growth partner for cosmetics brands.",
      subtitle:
        "We sit aesthetics and performance at the same table — because growing a cosmetics brand takes both.",
    },
    story: {
      title: "Our story",
      paragraphs: [
        "Soleach was born to help cosmetics and beauty brands claim the place they deserve online. We know this category is like no other: here, trust matters as much as aesthetics, and results matter as much as visuals.",
        "We're not a generic agency chasing every industry. We work only with makeup, skincare, dermocosmetics, fragrance and women's product brands. That focus lets us know the category's language, its buyer and its purchase journey by heart.",
        "We turn advertising into art, and art into sales. We build the campaigns, produce the creative, build the e-commerce store the click lands on, and make your brand visible in search. Our goal isn't just to make your brand look beautiful — it's to create sustainable, measurable growth. Put simply: your winning is our job.",
      ],
    },
    mission: {
      title: "Our mission",
      body: "To grow cosmetics brands with digital campaigns that connect them to the right audience and truly convert into sales.",
    },
    vision: {
      title: "Our vision",
      body: "To be the first name that comes to mind for growth in cosmetics and beauty — moving brands a step ahead in both classic search and the AI era.",
    },
    values: {
      title: "Our values",
      items: [
        {
          title: "Focus",
          desc: "We devote ourselves to a single category and work to be the best at it.",
        },
        {
          title: "Transparency",
          desc: "We show, without hiding, where every budget goes and what it returns.",
        },
        {
          title: "Aesthetics + data",
          desc: "We don't produce what merely looks good, but what looks good and sells.",
        },
        {
          title: "Curious",
          desc: "We track how search and consumer behavior change, and push your brand ahead.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's grow your brand together.",
      subtitle:
        "Fill out the form below, let us listen to your brand, and we'll build a growth roadmap made for you. We reply within 24 hours.",
    },
    formTitle: "Free intro call",
    formSubtitle:
      "Answer a few questions about your brand and we'll come back with the plan that fits you best.",
    formButton: "Open form in a new tab",
    emailTitle: "Email",
    emailDesc: "Prefer writing directly instead of the form? Our door is open.",
    orLabel: "or",
  },
  blogPage: {
    hero: {
      eyebrow: "Blog",
      title: "Growth guides for cosmetics brands",
      subtitle:
        "Honest, actionable writing on advertising, content, e-commerce, SEO and GEO. We don't sell magic formulas — we explain what works, and why it works.",
    },
    readingTimeSuffix: "min read",
    updatedLabel: "Updated",
    faqTitle: "Frequently asked questions",
    sourcesTitle: "Sources",
    relatedServiceLabel: "Related service",
    backToBlog: "All posts",
  },
  conceptsPage: {
    hero: {
      eyebrow: "Concept Map",
      title: "The concept map of beauty marketing",
      subtitle:
        "The concepts of advertising, creative, e-commerce and SEO & GEO — connected to each other and to our blog, on a single map. Click a concept to see its definition, its neighbors and the guides worth reading next.",
    },
    graphAriaLabel:
      "Concept map: a network graph showing how concepts relate to each other",
    graphHint:
      "Click any concept on the map to open its definition. Lines show how concepts relate. Zoom with the buttons top right or Ctrl + scroll wheel, and drag to move around the map.",
    graphZoomIn: "Zoom in",
    graphZoomOut: "Zoom out",
    graphResetView: "Reset view",
    listTitle: "All concepts",
    relatedConceptsTitle: "Related concepts",
    relatedPostsTitle: "Articles covering this concept",
    backToConcepts: "All concepts",
  },
  footer: {
    tagline:
      "A digital advertising agency for cosmetics, beauty and women's product brands. We turn aesthetics into sales.",
    servicesHeading: "Services",
    companyHeading: "Company",
    followHeading: "Follow",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
