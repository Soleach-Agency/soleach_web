import type { Locale } from "./i18n";
import { conceptsSlug } from "./section-slugs";

/**
 * All site copy lives here, keyed by locale. Both dictionaries share the same
 * shape (enforced by the `Dictionary` type) so pages stay in sync across TR/EN.
 *
 * Voice: warm, bold, human — a creative partner talking to a founder, not a
 * corporate brochure. Turkish uses an intimate "sen".
 */

export type ServiceKey =
  | "ads"
  | "creative"
  | "seo-geo"
  | "web-ecommerce"
  | "custom-software"
  | "mcp-ai";

export type ServiceGroupKey = "beauty-growth" | "software-ai";

export interface ServiceGroupContent {
  key: ServiceGroupKey;
  eyebrow: string;
  title: string;
  summary: string;
  audience: string;
}

export interface ServiceContent {
  key: ServiceKey;
  group: ServiceGroupKey;
  icon: "ads" | "creative" | "search" | "store" | "code" | "network";
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
  serviceGroups: ServiceGroupContent[];
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
  brandTagline:
    "Güzellik markaları için dijital büyüme; her sektörden şirket için yazılım ve yapay zekâ çözümleri",
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
      title: "Güzellik Markalarına Reklam & Firmalara Özel Yazılım | Soleach",
      description:
        "Güzellik markalarına performans reklamı, kreatif ve SEO & GEO; her sektörden şirkete özel yazılım, MCP sunucuları, yapay zekâ entegrasyonları ve web sistemleri.",
    },
    services: {
      title: "Dijital Reklam, Yazılım & Yapay Zekâ Hizmetleri | Soleach",
      description:
        "Güzellik markalarına performans reklamı, kreatif ve SEO & GEO; her sektörden şirkete özel yazılım, MCP sunucuları, yapay zekâ entegrasyonları ve web/e-ticaret geliştirme.",
    },
    about: {
      title: "Hakkımızda | Dijital Büyüme ve Yazılım Ekibi | Soleach",
      description:
        "Soleach, güzellik markaları için reklam ve kreatif; her sektörden şirket için özel yazılım, MCP ve yapay zekâ entegrasyonları geliştiren dijital ekip.",
    },
    contact: {
      title: "İletişim | Soleach",
      description:
        "Marka büyümesi ya da yazılım ihtiyacını konuşalım. Formu doldur; projen için doğru başlangıç noktasını birlikte netleştirelim.",
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
      eyebrow: "Güzellikte büyüme · Her sektöre yazılım",
      title: "Markanı büyütmek,",
      titleAccent: "işini hızlandırmak.",
      subtitle:
        "Güzellik markaları için reklam, kreatif ve görünürlük; her sektörden şirket için özel yazılım, MCP ve yapay zekâ entegrasyonları. İki ayrı uzmanlık, işi sahiplenen tek ekip.",
      ctaPrimary: "İhtiyacını konuşalım",
      ctaSecondary: "Neler yapıyoruz?",
      note: "24 saat içinde dönüyoruz · Taahhüt yok, sürpriz fatura yok",
      scrollCue: "Keşfet",
    },
    marquee: [
      "Performans Reklamları",
      "Kreatif Üretim",
      "SEO & GEO",
      "Web Sistemleri",
      "Özel Yazılım",
      "MCP Sunucuları",
      "Yapay Zekâ Ajanları",
      "API Entegrasyonları",
      "Shopify",
      "Otomasyon",
    ],
    stats: [
      { value: 2, label: "Net uzmanlık alanı: güzellik büyümesi ve yazılım" },
      { value: 1, label: "İhtiyacın boyunca sorumluluğu üstlenen ekip" },
      { value: 24, suffix: " saat", label: "İçinde ilk yanıtımız sende olur" },
    ],
    manifesto: {
      eyebrow: "Kısaca",
      big: "Kategoriye gerektiği yerde odaklanır, teknolojide sektör sınırı koymayız.",
      body: "Reklam, kreatif ve SEO & GEO işlerimizde güzellik kategorisinin diline, estetiğine ve alıcısına odaklanıyoruz. Yazılım tarafında ise sektör değil, çözülmesi gereken iş problemi belirleyici. İki alanı birbirine karıştırmadan aynı ilkeyle çalışıyoruz: işe yarayan, ölçülebilen ve geliştirilebilen işler.",
    },
    servicesIntro: {
      eyebrow: "Ne yapıyoruz",
      title: "İki uzmanlık. Her biri kendi sınırları içinde.",
      subtitle:
        "Güzellik markalarının büyüme ihtiyaçlarını kategori odağıyla; şirketlerin yazılım ihtiyaçlarını sektör sınırı koymadan çözüyoruz.",
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "Fikirden çalışan sonuca, net bir yol.",
      subtitle:
        "Reklam kampanyası da yazılım ürünü de önce doğru problemi anlamakla başlar. Her adımın kapsamını, kararını ve çıktısını görünür tutarız.",
      deliverablesLabel: "Bu adımda eline geçenler",
      steps: [
        {
          title: "Tanışma",
          desc: "Markanı ya da işini, kullanıcılarını ve bugün nerede zorlandığını dinliyoruz. Doğru problemi birlikte tarif ediyoruz.",
          deliverables: [
            "Ücretsiz tanışma görüşmesi (video ya da yüz yüze)",
            "Mevcut hesap, site veya sistemlerin ilk değerlendirmesi",
            "Fırsatların, kısıtların ve önceliklerin özeti",
          ],
        },
        {
          title: "Kapsam & Yol Haritası",
          desc: "Kanal ve mesaj planını ya da ürün kapsamını netleştiriyoruz. Öncelikleri, başarı ölçüsünü ve çalışma sırasını baştan görünür kılıyoruz.",
          deliverables: [
            "Yazılı yol haritası ve net iş kapsamı",
            "Hedefler, başarı ölçüleri ve kabul kriterleri",
            "Takvim, bağımlılıklar ve öncelik sırası",
          ],
        },
        {
          title: "Üretim & Geliştirme",
          desc: "Kreatifi, kampanyayı ya da yazılımı çalışır parçalar halinde üretiyoruz. Kritik kararları gösteriyor, geri bildirimi sürece katıyoruz.",
          deliverables: [
            "İncelenebilir tasarım, içerik veya çalışan sürümler",
            "Gerekli ölçüm, entegrasyon ve kalite kontrolleri",
            "Onaylanan işin canlıya alınması ve teslim özeti",
          ],
        },
        {
          title: "Ölçüm & İyileştirme",
          desc: "Canlıdaki sonucu izliyor, öğreniyor ve geliştiriyoruz. Kampanyada veriyi, yazılımda kullanım ve sistem sağlığını kararın merkezinde tutuyoruz.",
          deliverables: [
            "Anlaşılır performans veya sistem görünürlüğü",
            "Yapılan testlerin ve değişikliklerin kaydı",
            "Bir sonraki dönem için öncelikli geliştirme listesi",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "Neden Soleach",
      title: "Doğru işe, doğru uzmanlıkla yaklaşırız.",
      subtitle:
        "Güzellik pazarlamasında kategori odağı; yazılımda iş problemi. İki çalışma alanını bilinçli biçimde ayrı tutuyoruz.",
      points: [
        {
          title: "Kategori odağı, yerinde",
          desc: "Reklam, kreatif ve SEO & GEO’da cilt bakımından makyaja, dermokozmetikten parfüme güzellik alıcısını ve kategorinin dilini merkeze alıyoruz.",
        },
        {
          title: "İşine göre yazılım",
          desc: "Hazır bir paketi zorla uydurmak yerine süreci, kullanıcıyı ve entegrasyon ihtiyacını anlayıp doğru kapsamı kuruyoruz.",
        },
        {
          title: "Estetik + performans",
          desc: "Görsel kaliteyi sonuçtan ayırmıyoruz. Kreatifte dönüşümü, dijital üründe kullanılabilirliği aynı özenle ele alıyoruz.",
        },
        {
          title: "Güvenli, sürdürülebilir sistemler",
          desc: "Yetki sınırlarını, dokümantasyonu, test ve bakımı sonradan eklenecek işler değil; teslimin parçası kabul ediyoruz.",
        },
        {
          title: "Şeffaf çalışma",
          desc: "Ne yaptığımızı, neden yaptığımızı ve sırada ne olduğunu açık tutuyoruz. Bütçe de kapsam da sürprize dönüşmüyor.",
        },
      ],
    },
    faq: {
      eyebrow: "Aklındakiler",
      title: "Merak ettiklerin",
      items: [
        {
          q: "Soleach tam olarak ne yapıyor?",
          a: "Soleach’in iki ayrı çalışma alanı var. Kozmetik ve güzellik markaları için performans reklamları, kreatif üretim ve SEO & GEO yürütüyoruz. Özel iş yazılımları, MCP sunucuları, yapay zekâ entegrasyonları ile web ve e-ticaret sistemlerinde ise her sektörden şirketle çalışıyoruz.",
        },
        {
          q: "Kozmetik markaları için dijital reklam ajansı ne yapar?",
          a: "Kozmetik ajansının işi, ürünü doğru alıcıyla buluşturup bunu ölçülebilir satışa çevirmektir. Pratikte bu üç parçadan oluşur: Meta ve TikTok'ta performans reklamı kurmak ve optimize etmek; kategorinin estetiğine uygun reklam kreatifi ve video üretmek; markayı Google ile yapay zekâ motorlarında görünür kılmak. Genel bir ajanstan farkı, kozmetik alıcısının satın alma davranışını ve kategorinin reklam mevzuatını bilerek çalışmasıdır. Web ve e-ticaret geliştirme ise sektör bağımsız yazılım hizmetlerimiz arasındadır.",
        },
        {
          q: "Ürün mü satıyorsunuz?",
          a: "Hayır. Biz ürün satmıyoruz. Kozmetik markalarının reklam, içerik ve görünürlük çalışmalarını yürütüyor; ayrıca şirketler için yazılım ve yapay zekâ sistemleri geliştiriyoruz.",
        },
        {
          q: "Kimlerle çalışıyorsunuz?",
          a: "Reklam, kreatif ve SEO & GEO çalışmalarında makyaj, cilt bakımı, dermokozmetik, parfüm, saç bakımı ve kadın ürünleri markalarına odaklanıyoruz. Özel yazılım, MCP, entegrasyon ve web geliştirme hizmetlerimizde ise sektör sınırı koymuyoruz.",
        },
        {
          q: "Web sitemi ve Shopify mağazamı da siz mi kuruyorsunuz?",
          a: "Evet. Her sektörden işletme için kurumsal web sitesi ve e-ticaret deneyimi geliştiriyor; Shopify kurulumu, tema özelleştirme, ödeme-kargo entegrasyonları, ölçüm ve yayın sonrası bakım sunuyoruz. Güzellik müşterilerinde reklam ve mağaza ekiplerinin aynı masada olması ayrıca uçtan uca tutarlılık sağlıyor.",
        },
        {
          q: "Firmaya özel yazılım hizmeti neleri kapsıyor?",
          a: "Hazır araçların karşılamadığı ihtiyaçlar için yönetim panelleri, müşteri portalları, iç araçlar, operasyon ve raporlama sistemleri geliştiriyoruz. İhtiyaç analizi, veri ve yetki modeli, mevcut sistem entegrasyonları, test, canlıya alma, dokümantasyon ve bakım kapsamın parçası olabilir.",
        },
        {
          q: "MCP sunucusu nedir, sizin hizmetiniz neyi kapsıyor?",
          a: "MCP sunucusu, yapay zekâ istemcilerinin onaylanan veri kaynaklarına ve işlemlere standart bir arayüzle erişmesini sağlar. Kullanım senaryosunu ve araçları tasarlıyor; özel MCP sunucusunu geliştirip kuruyor, API-veritabanı-doküman bağlantılarını, kimlik doğrulama ve yetki sınırlarını, test, loglama ve dokümantasyonu hazırlıyoruz.",
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
          a: "Ölçütü işe göre baştan belirliyoruz. Pazarlamada ROAS, edinme maliyeti, dönüşüm ve görünürlüğü; yazılımda kabul kriterleri, kullanım, performans, hata oranı ve sağlanan zaman tasarrufu gibi göstergeleri izliyoruz. Sonuçları düzenli ve anlaşılır biçimde paylaşıyoruz.",
        },
        {
          q: "Nasıl başlıyoruz?",
          a: "Formda reklam-büyüme ya da yazılım ihtiyacını kısaca anlatman yeterli. Ücretsiz tanışma görüşmesinde hedefi ve mevcut durumu dinliyor; uygun hizmeti, ilk kapsamı ve sonraki adımları birlikte netleştiriyoruz.",
        },
      ],
    },
    ctaBand: {
      title: "Aklındaki işi konuşalım.",
      subtitle:
        "Marka büyümesi mi, yazılım mı? İhtiyacını kısaca anlat; doğru başlangıç noktasını birlikte netleştirelim.",
      button: "Hadi konuşalım",
    },
  },
  serviceGroups: [
    {
      key: "beauty-growth",
      eyebrow: "Güzellik markalarına özel",
      title: "Reklam, kreatif ve dijital büyüme",
      summary:
        "Kategori bilgisi ve güçlü bir estetik bakış isteyen büyüme işleri. Bu hattı kozmetik, güzellik ve kadın ürünleri markaları için yürütüyoruz.",
      audience: "Kozmetik & güzellik markaları",
    },
    {
      key: "software-ai",
      eyebrow: "Sektörden bağımsız",
      title: "Yazılım, yapay zekâ ve entegrasyon",
      summary:
        "İşletmenin gerçek akışına göre tasarlanan teknik çözümler. Bu hizmetler güzellik sektörüyle sınırlı değil; farklı sektörlerden şirketlerle çalışıyoruz.",
      audience: "Her sektörden işletme",
    },
  ],
  services: [
    {
      key: "ads",
      group: "beauty-growth",
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
      group: "beauty-growth",
      icon: "creative",
      title: "İçerik & Kreatif Üretim",
      tagline: "Kaydırırken parmağı durduran görseller.",
      summary:
        "Ürününü en iyi anlatan reklam kreatifleri, Reels ve kısa videolar üretiyoruz. Güzellik kategorisinin estetiğini performansla buluşturuyor; markanı hem güçlü gösteriyor hem de satışını destekliyoruz.",
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
      key: "seo-geo",
      group: "beauty-growth",
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
    {
      key: "web-ecommerce",
      group: "software-ai",
      icon: "store",
      title: "Web Sitesi & E-Ticaret Sistemleri",
      tagline: "Markanı anlatan, işini taşıyan dijital temel.",
      summary:
        "Kurumsal web siteleri ve e-ticaret deneyimleri tasarlayıp geliştiriyoruz. Shopify kurulumundan özel arayüzlere, ödeme ve operasyon entegrasyonlarından bakım sürecine kadar sistemin tamamını işine göre kuruyoruz.",
      features: [
        "Kurumsal, ürün ve hizmet odaklı web siteleri",
        "Shopify mağaza kurulumu ve tema özelleştirme",
        "Dönüşüm odaklı ürün ve kategori sayfaları",
        "Ödeme, kargo, CRM ve üçüncü taraf entegrasyonları",
        "Analitik, ölçüm ve e-ticaret takibi kurulumu",
        "Mobil performans, erişilebilirlik, bakım ve iyileştirme",
      ],
      outcome: "Hızlı, ölçülebilir ve işin büyüdükçe geliştirilebilen bir dijital altyapı.",
    },
    {
      key: "custom-software",
      group: "software-ai",
      icon: "code",
      title: "Firmaya Özel Yazılım Geliştirme",
      tagline: "Hazır kalıba değil, iş akışına uyan sistemler.",
      summary:
        "Excel, e-posta ve birbirinden kopuk araçlar arasında kalan süreçleri tek bir sisteme dönüştürüyoruz. Şirketine özel paneller, portallar, iç araçlar ve iş akışları geliştiriyor; keşiften yayına ve bakıma kadar aynı ekipte ilerliyoruz.",
      features: [
        "İhtiyaç analizi ve teknik yol haritası",
        "Yönetim paneli, müşteri portalı ve iç araç geliştirme",
        "Rol, yetki, veri modeli ve iş akışı tasarımı",
        "Mevcut sistem ve API entegrasyonları",
        "Test, dokümantasyon ve canlıya alma",
        "Bakım, izleme ve yeni özellik geliştirme",
      ],
      outcome: "Daha az manuel iş, daha az hata ve görünür bir operasyon.",
    },
    {
      key: "mcp-ai",
      group: "software-ai",
      icon: "network",
      title: "MCP Sunucusu & Yapay Zekâ Entegrasyonları",
      tagline: "Araçların, verilerin ve yapay zekâ ajanların aynı dili konuşsun.",
      summary:
        "Model Context Protocol (MCP) sunucuları tasarlıyor, geliştiriyor ve kuruyoruz. Şirket içi sistemlerini, API’lerini, dokümanlarını ve veritabanlarını kontrollü araçlar olarak yapay zekâ ajanlarına bağlıyoruz.",
      features: [
        "MCP kullanım senaryosu ve araç tasarımı",
        "Özel MCP sunucusu geliştirme ve kurulum",
        "API, veritabanı ve doküman kaynağı bağlantıları",
        "Kimlik doğrulama, yetki ve güvenlik sınırları",
        "Yapay zekâ ajanları ve iş akışı otomasyonları",
        "Test, loglama, dokümantasyon ve bakım",
      ],
      outcome: "Şirket verisi ve araçlarıyla kontrollü, tekrarlanabilir yapay zekâ kullanımı için tasarlanan altyapı.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Hizmetler",
      title: "İki uzmanlık alanı. Sınırları net, sorumluluğu tek ekipte.",
      subtitle:
        "Güzellik markaları için reklam, kreatif ve görünürlük; her sektörden şirket için özel yazılım, web sistemleri ve MCP entegrasyonları.",
    },
    featuresLabel: "Neler dahil",
    outcomeLabel: "Sonuç",
  },
  aboutPage: {
    hero: {
      eyebrow: "Hakkımızda",
      title: "İki uzmanlığı bilinçli biçimde ayıran dijital ekip.",
      subtitle:
        "Güzellik markalarında kategori odağını; yazılım projelerinde sektör bağımsız problem çözmeyi aynı çalışma disipliniyle buluşturuyoruz.",
    },
    story: {
      title: "Hikâyemiz",
      paragraphs: [
        "Soleach, kozmetik ve güzellik markalarının dijitalde hak ettiği yeri alması için doğdu. Bu kategorinin başka hiçbir şeye benzemediğini biliyoruz: burada estetik kadar güven, görsel kadar sonuç önemli.",
        "Çalışma alanlarımızı bilinçli biçimde ayırıyoruz. Reklam, kreatif ve SEO & GEO’da odağımız kozmetik ve güzellik. Özel yazılım, MCP, yapay zekâ entegrasyonları ve web sistemlerinde ise sektör sınırı koymuyor; çözülmesi gereken iş problemine bakıyoruz.",
        "Bir kampanyada da bir yazılım ürününde de amacımız aynı: iyi görünen bir fikirden fazlasını, çalışan ve geliştirilebilen bir sonuç üretmek. Kapsamı netleştiriyor, işi görünür adımlarla ilerletiyor ve yayından sonra da ölçüp iyileştiriyoruz.",
      ],
    },
    mission: {
      title: "Misyonumuz",
      body: "Güzellik markalarını doğru kitleyle buluşturan dijital çalışmalar ve şirketlerin gerçek iş problemlerini çözen sürdürülebilir yazılımlar üretmek.",
    },
    vision: {
      title: "Vizyonumuz",
      body: "Güzellik kategorisinde güvenilen büyüme ortağı, özel yazılım ve yapay zekâ entegrasyonlarında ise sektörler arası güvenilen teknik ekip olmak.",
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "Odak",
          desc: "Pazarlamada kategoriye, yazılımda çözülmesi gereken probleme odaklanıyoruz.",
        },
        {
          title: "Şeffaflık",
          desc: "Kapsamı, bütçeyi, kararları ve ilerlemeyi görünür tutar; sürprizleri azaltırız.",
        },
        {
          title: "Estetik + işlev",
          desc: "Kreatifte dönüşümü, dijital ürünlerde kullanılabilirliği gözetir; görsel kaliteyi sonuçtan ayırmayız.",
        },
        {
          title: "Meraklıyız",
          desc: "İnsan davranışının ve teknolojinin nasıl değiştiğini takip eder, öğrendiklerimizi işe uygularız.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "İletişim",
      title: "Markanı ya da yazılım ihtiyacını konuşalım.",
      subtitle:
        "Aşağıdaki formda ihtiyacını kısaca anlat. Doğru başlangıç noktasını birlikte netleştirmek için 24 saat içinde dönüyoruz.",
    },
    formTitle: "Ücretsiz tanışma görüşmesi",
    formSubtitle:
      "Markan, iş akışın ya da geliştirmek istediğin sistem hakkında birkaç bilgi ver; sana uygun sonraki adımla geri dönelim.",
    formButton: "Formu yeni sekmede aç",
    emailTitle: "E-posta",
    emailDesc: "Form yerine doğrudan yazmayı tercih edersen, kapımız açık.",
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
      "Reklam, kreatif ve SEO & GEO’da güzellik odaklı; web, yazılım, MCP ve yapay zekâda sektör bağımsız.",
    servicesHeading: "Hizmetler",
    companyHeading: "Kurumsal",
    followHeading: "Takip et",
    rights: "Tüm hakları saklıdır.",
  },
};

const en: Dictionary = {
  brandTagline:
    "Digital growth for beauty brands; software and AI solutions for companies in any industry",
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
      title: "Beauty Brand Advertising & Custom Software | Soleach",
      description:
        "Performance advertising, creative and SEO & GEO for beauty brands; custom software, MCP servers, AI integrations and web systems for companies in any industry.",
    },
    services: {
      title: "Digital Advertising, Software & AI Services | Soleach",
      description:
        "Performance advertising, creative and SEO & GEO for beauty brands; custom software, MCP servers, AI integrations, and web and e-commerce development for any industry.",
    },
    about: {
      title: "About | Digital Growth & Software Team | Soleach",
      description:
        "Soleach provides advertising and creative for beauty brands, and builds custom software, MCP servers and AI integrations for companies in any industry.",
    },
    contact: {
      title: "Contact | Soleach",
      description:
        "Let's talk about brand growth or the software you need. Share the project and we'll clarify the right place to start together.",
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
      eyebrow: "Beauty growth · Software for any industry",
      title: "Grow your brand,",
      titleAccent: "move your business faster.",
      subtitle:
        "Advertising, creative and visibility for beauty brands; custom software, MCP and AI integrations for companies in any industry. Two distinct practices, one accountable team.",
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: "What we do",
      note: "We reply within 24 hours · No commitment, no surprise invoices",
      scrollCue: "Explore",
    },
    marquee: [
      "Performance Ads",
      "Creative Production",
      "SEO & GEO",
      "Web Systems",
      "Custom Software",
      "MCP Servers",
      "AI Agents",
      "API Integrations",
      "Shopify",
      "Automation",
    ],
    stats: [
      { value: 2, label: "Clear practices: beauty growth and software" },
      { value: 1, label: "Accountable team from first question to delivery" },
      { value: 24, suffix: "h", label: "Until our first reply lands in your inbox" },
    ],
    manifesto: {
      eyebrow: "In short",
      big: "We focus by category where it matters and keep technology industry-agnostic.",
      body: "In advertising, creative and SEO & GEO, we focus on the language, aesthetics and buyer of the beauty category. In software, the business problem — not the industry — defines the work. We keep those practices distinct and hold both to the same standard: useful, measurable work that can keep evolving.",
    },
    servicesIntro: {
      eyebrow: "What we do",
      title: "Two areas of expertise, each with clear boundaries.",
      subtitle:
        "We solve beauty brands' growth needs with category focus, and companies' software needs without an industry boundary.",
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path from idea to working result.",
      subtitle:
        "An advertising campaign and a software product both begin with understanding the right problem. We keep the scope, decisions and output visible at every step.",
      deliverablesLabel: "What you get at this step",
      steps: [
        {
          title: "Discovery",
          desc: "We listen to your brand or business, its users and where the work gets stuck today. Together, we define the right problem.",
          deliverables: [
            "A free intro call (video or in person)",
            "A first review of current accounts, website or systems",
            "A summary of opportunities, constraints and priorities",
          ],
        },
        {
          title: "Scope & Roadmap",
          desc: "We define the channel and message plan or the product scope. Priorities, success measures and the order of work are clear before production begins.",
          deliverables: [
            "A written roadmap and clear scope of work",
            "Goals, success measures and acceptance criteria",
            "Timeline, dependencies and priority order",
          ],
        },
        {
          title: "Production & Development",
          desc: "We produce the creative, campaign or software in working pieces. Critical decisions stay visible and feedback enters the work early.",
          deliverables: [
            "Reviewable design, content or working releases",
            "Required measurement, integration and quality checks",
            "Production launch and a clear delivery summary",
          ],
        },
        {
          title: "Measure & Improve",
          desc: "We watch what happens in production, learn and improve. Campaign data, product usage and system health stay at the center of decisions.",
          deliverables: [
            "Readable performance or system visibility",
            "A log of tests and changes",
            "A prioritized improvement list for the next period",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Soleach",
      title: "The right expertise for the right kind of work.",
      subtitle:
        "Category focus in beauty marketing; business-problem focus in software. We deliberately keep the two practices distinct.",
      points: [
        {
          title: "Category focus, where it belongs",
          desc: "In advertising, creative and SEO & GEO, we center the beauty buyer and the category's language — from skincare and makeup to dermocosmetics and fragrance.",
        },
        {
          title: "Software shaped around the work",
          desc: "We understand the process, users and integrations before defining the scope, instead of forcing the business into a ready-made package.",
        },
        {
          title: "Aesthetics + performance",
          desc: "We do not separate visual quality from outcomes: conversion in creative work, usability in digital products.",
        },
        {
          title: "Secure, maintainable systems",
          desc: "Permission boundaries, documentation, testing and maintenance are part of the delivery, not problems left for later.",
        },
        {
          title: "Transparent work",
          desc: "What we are doing, why it matters and what comes next stay clear. Neither budget nor scope turns into a surprise.",
        },
      ],
    },
    faq: {
      eyebrow: "On your mind",
      title: "Good to know",
      items: [
        {
          q: "What exactly does Soleach do?",
          a: "Soleach has two distinct practices. We provide performance advertising, creative production and SEO & GEO for cosmetics and beauty brands. For custom business software, MCP servers, AI integrations, and web and e-commerce systems, we work with companies in any industry.",
        },
        {
          q: "What does a digital advertising agency for cosmetics brands actually do?",
          a: "A cosmetics agency's job is to put the product in front of the right buyer and turn that into measurable sales. In practice that's three parts: building and optimizing performance campaigns on Meta and TikTok; producing ad creative and video that match the category's aesthetics; and making the brand visible on Google and AI engines. What separates it from a generalist agency is knowing how the cosmetics buyer decides and what the category's ad regulations allow. Web and e-commerce development sit within our industry-agnostic software practice.",
        },
        {
          q: "Do you sell products?",
          a: "No. We do not sell products. We run advertising, content and visibility work for cosmetics brands, and we also build software and AI systems for companies.",
        },
        {
          q: "Who do you work with?",
          a: "For advertising, creative and SEO & GEO, we focus on makeup, skincare, dermocosmetics, fragrance, haircare and women's product brands. Our custom software, MCP, integration and web development services are open to companies in any industry.",
        },
        {
          q: "Do you build my website and Shopify store too?",
          a: "Yes. We build corporate websites and e-commerce experiences for businesses in any industry, including Shopify setup, theme customization, payment and shipping integrations, measurement and post-launch maintenance. For beauty clients, having advertising and the store at the same table also creates end-to-end consistency.",
        },
        {
          q: "What does custom software development cover?",
          a: "When off-the-shelf tools fall short, we build admin dashboards, customer portals, internal tools, operations and reporting systems. Requirements discovery, data and permission models, existing-system integrations, testing, production launch, documentation and maintenance can all be part of the scope.",
        },
        {
          q: "What is an MCP server, and what does your service cover?",
          a: "An MCP server gives AI clients a standard way to access approved data sources and actions. We design the use case and tools, build and set up the custom MCP server, connect APIs, databases and documents, and handle authentication, permission boundaries, testing, logging and documentation.",
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
          a: "We agree on the measures before the work begins. In marketing, we track ROAS, acquisition cost, conversion and visibility; in software, we use acceptance criteria, adoption, performance, error rates and time saved. We report the results regularly and clearly.",
        },
        {
          q: "How do we start?",
          a: "Use the form to briefly describe your advertising-growth or software need. On a free intro call, we learn the goal and current state, then clarify the right service, an initial scope and the next steps together.",
        },
      ],
    },
    ctaBand: {
      title: "Let's talk about the work you have in mind.",
      subtitle:
        "Brand growth or software? Tell us what you need, and we'll clarify the right place to start together.",
      button: "Let's talk",
    },
  },
  serviceGroups: [
    {
      key: "beauty-growth",
      eyebrow: "Built for beauty brands",
      title: "Advertising, creative and digital growth",
      summary:
        "Growth work that calls for category knowledge and a strong aesthetic eye. We run this practice for cosmetics, beauty and women's product brands.",
      audience: "Cosmetics & beauty brands",
    },
    {
      key: "software-ai",
      eyebrow: "Industry-agnostic",
      title: "Software, AI and integrations",
      summary:
        "Technical systems designed around how the business actually works. This practice is not limited to beauty; we work with companies across industries.",
      audience: "Businesses in any industry",
    },
  ],
  services: [
    {
      key: "ads",
      group: "beauty-growth",
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
      group: "beauty-growth",
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
      key: "seo-geo",
      group: "beauty-growth",
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
    {
      key: "web-ecommerce",
      group: "software-ai",
      icon: "store",
      title: "Websites & E-Commerce Systems",
      tagline: "A digital foundation that presents your brand and carries the work.",
      summary:
        "We design and build corporate websites and e-commerce experiences. From Shopify setup and custom interfaces to payment and operational integrations, maintenance and iteration, we shape the whole system around the business.",
      features: [
        "Corporate, product and service websites",
        "Shopify store setup and theme customization",
        "Conversion-focused product and collection pages",
        "Payment, shipping, CRM and third-party integrations",
        "Analytics, measurement and e-commerce tracking",
        "Mobile performance, accessibility, maintenance and iteration",
      ],
      outcome: "A fast, measurable digital platform that can evolve with the business.",
    },
    {
      key: "custom-software",
      group: "software-ai",
      icon: "code",
      title: "Custom Software Development",
      tagline: "Systems shaped around the workflow, not a ready-made template.",
      summary:
        "We turn processes scattered across spreadsheets, email and disconnected tools into one coherent system. We build custom dashboards, portals, internal tools and workflows, carrying the work from discovery through launch and maintenance.",
      features: [
        "Requirements discovery and a technical roadmap",
        "Admin dashboards, customer portals and internal tools",
        "Roles, permissions, data models and workflow design",
        "Existing system and API integrations",
        "Testing, documentation and production launch",
        "Maintenance, monitoring and feature development",
      ],
      outcome: "Less manual work, fewer errors and a clearer operation.",
    },
    {
      key: "mcp-ai",
      group: "software-ai",
      icon: "network",
      title: "MCP Servers & AI Integrations",
      tagline: "Let your tools, data and AI agents speak the same language.",
      summary:
        "We design, build and set up Model Context Protocol (MCP) servers. We connect internal systems, APIs, documents and databases to AI agents as controlled, purpose-built tools.",
      features: [
        "MCP use-case and tool design",
        "Custom MCP server development and setup",
        "API, database and document-source connections",
        "Authentication, permissions and security boundaries",
        "AI agents and workflow automation",
        "Testing, logging, documentation and maintenance",
      ],
      outcome: "Infrastructure designed for controlled, repeatable AI use of company data and tools.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Services",
      title: "Two areas of expertise. Clear boundaries, one accountable team.",
      subtitle:
        "Advertising, creative and visibility for beauty brands; custom software, web systems and MCP integrations for companies in any industry.",
    },
    featuresLabel: "What's included",
    outcomeLabel: "Outcome",
  },
  aboutPage: {
    hero: {
      eyebrow: "About",
      title: "A digital team that keeps two disciplines deliberately distinct.",
      subtitle:
        "Category focus for beauty brands, industry-agnostic problem-solving for software projects — held to the same working discipline.",
    },
    story: {
      title: "Our story",
      paragraphs: [
        "Soleach was born to help cosmetics and beauty brands claim the place they deserve online. We know this category is like no other: here, trust matters as much as aesthetics, and results matter as much as visuals.",
        "We keep our practices deliberately distinct. In advertising, creative and SEO & GEO, our focus is cosmetics and beauty. In custom software, MCP, AI integrations and web systems, the industry is not the constraint — the business problem is what matters.",
        "Whether it is a campaign or a software product, our goal is the same: more than a good-looking idea, a working result that can keep improving. We clarify the scope, move in visible steps, then measure and iterate after launch.",
      ],
    },
    mission: {
      title: "Our mission",
      body: "To produce digital work that connects beauty brands with the right audience, and sustainable software that solves real business problems.",
    },
    vision: {
      title: "Our vision",
      body: "To be a trusted growth partner in beauty and a trusted cross-industry technical team for custom software and AI integrations.",
    },
    values: {
      title: "Our values",
      items: [
        {
          title: "Focus",
          desc: "In marketing we focus on the category; in software, on the problem that needs solving.",
        },
        {
          title: "Transparency",
          desc: "We keep scope, budget, decisions and progress visible, reducing surprises along the way.",
        },
        {
          title: "Aesthetics + function",
          desc: "We care about conversion in creative work and usability in digital products, without separating visual quality from outcomes.",
        },
        {
          title: "Curious",
          desc: "We track how human behavior and technology change, then put what we learn to work.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about your brand or software need.",
      subtitle:
        "Tell us briefly what you need in the form below. We'll reply within 24 hours to clarify the right place to start together.",
    },
    formTitle: "Free intro call",
    formSubtitle:
      "Share a few details about your brand, workflow or the system you want to build, and we'll come back with the right next step.",
    formButton: "Open form in a new tab",
    emailTitle: "Email",
    emailDesc: "Prefer writing directly instead of using the form? Our inbox is open.",
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
      "Beauty-focused in advertising, creative and SEO & GEO; industry-agnostic in web, software, MCP and AI.",
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
