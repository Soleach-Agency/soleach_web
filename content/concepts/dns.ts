import type { Concept } from "@/lib/concepts";

export const dns: Concept = {
  id: "dns",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["search-console", "shopify"],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "dns",
      name: "DNS (Alan Adı Sistemi)",
      graphLabel: "DNS",
      metaTitle: "DNS Nedir? Alan Adı Sistemi | Soleach Kavramlar",
      metaDescription:
        "DNS nedir, nasıl çalışır? Alan adını sunucuya bağlayan sistemin tanımı; A, CNAME, MX ve TXT kayıtları ile site ve e-posta üzerindeki etkisi.",
      shortDef:
        "Alan adlarını sunucu adreslerine çeviren sistem; sitenin, e-postanın ve doğrulama kayıtlarının hangi hizmete gideceğini belirleyen yönlendirme katmanı.",
      sections: [
        {
          h2: "DNS nedir?",
          blocks: [
            {
              type: "p",
              text: "DNS (Domain Name System), insanların okuyabildiği alan adlarını sunucuların anladığı adreslere çeviren sistemdir. Tarayıcıya bir alan adı yazdığında ilk iş DNS sorgusudur: \"bu alan adı hangi sunucuda?\" Cevap gelmeden sayfa açılmaz. Bu yüzden DNS, bir web sitesinin en görünmez ama en kritik halkasıdır.",
            },
            {
              type: "p",
              text: "Alan adının DNS kayıtları farklı işleri farklı hizmetlere yönlendirir: **A** ve **CNAME** kayıtları web trafiğini, **MX** kayıtları e-postayı, **TXT** kayıtları ise doğrulama ve e-posta güvenliği bilgisini taşır. Bu ayrım pratik bir sonuç doğurur — site bir yerde, e-posta bambaşka bir yerde barınabilir; ikisi aynı alan adına ait olsa bile.",
            },
          ],
        },
        {
          h2: "Markalar için DNS neden önemli?",
          blocks: [
            {
              type: "p",
              text: "DNS, altyapı taşımalarının hem anahtarı hem de en sık kırıldığı yerdir. Mağazayı [Shopify'a](/tr/kavramlar/shopify) taşımak, siteyi [Cloudflare'in](/tr/kavramlar/cloudflare) arkasına almak ya da [Search Console](/tr/kavramlar/google-search-console) doğrulaması yapmak — üçü de DNS kaydı düzenlemekle olur. Yanlış giren tek bir kayıt siteyi ya da e-postayı sessizce durdurabilir.",
            },
            {
              type: "ul",
              items: [
                "Alan adının DNS yönetimini taşırken mevcut tüm kayıtları önce yaz, sonra taşı: en sık unutulanlar MX ve SPF kayıtlarıdır ve kayıp fark edilene kadar e-postalar düşer.",
                "Değişiklikler anında yayılmaz; TTL süresi kadar eski cevap dolaşımda kalabilir. Kampanya günü DNS değişikliği yapmamak iyi bir alışkanlıktır.",
                "Search Console'un alan adı (domain) mülkü, sahiplik doğrulamasını bir TXT kaydıyla yapar — yani doğrulama da DNS işidir.",
              ],
            },
            {
              type: "p",
              text: "DNS'in üstünde çalışan katmanı [Cloudflare](/tr/kavramlar/cloudflare), altındaki genel zemini ise [web](/tr/kavramlar/web) kavramında anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "DNS değişikliği ne kadar sürede etkili olur?",
          a: "Değişir. Her kaydın bir TTL (yaşam süresi) değeri vardır ve eski cevap, o süre boyunca ara sunucuların önbelleğinde kalabilir. Bu yüzden bazı ziyaretçiler yeni adrese hemen giderken bazıları bir süre eskisini görmeye devam eder. Planlı taşımalarda TTL'i önceden düşürmek geçişi kısaltır.",
        },
        {
          q: "Sitem çalışıyor ama e-postalarım gelmiyor, sebebi DNS olabilir mi?",
          a: "Sık görülen bir senaryo. Web trafiği A/CNAME kayıtlarıyla, e-posta ise MX kayıtlarıyla yönlendirilir. Alan adının DNS yönetimi yeni bir sağlayıcıya taşınırken A kaydı taşınıp MX kaydı unutulursa site açılmaya devam eder ama e-posta durur. Kontrol edilecek ilk yer MX ve SPF kayıtlarıdır.",
        },
      ],
      tags: ["DNS", "Alan adı", "MX kaydı", "Web altyapısı"],
    },
    en: {
      slug: "dns",
      name: "DNS (Domain Name System)",
      graphLabel: "DNS",
      metaTitle: "What Is DNS? Domain Name System | Soleach Concepts",
      metaDescription:
        "DNS explained: how domain names resolve to servers, what A, CNAME, MX and TXT records do, and why DNS decides whether your site and email work.",
      shortDef:
        "The system that translates domain names into server addresses; the routing layer deciding which service receives your website traffic, your email and your verification records.",
      sections: [
        {
          h2: "What is DNS?",
          blocks: [
            {
              type: "p",
              text: "DNS (Domain Name System) translates human-readable domain names into the addresses servers understand. Type a domain into a browser and the first thing that happens is a DNS lookup: which server is this domain on? Until that answer arrives, no page loads. DNS is a website's most invisible and most critical link.",
            },
            {
              type: "p",
              text: "A domain's DNS records route different jobs to different services: **A** and **CNAME** records handle web traffic, **MX** records handle email, and **TXT** records carry verification and email-security information. That separation has a practical consequence — your site can live in one place and your email in a completely different one, even though both belong to the same domain.",
            },
          ],
        },
        {
          h2: "Why DNS matters for brands",
          blocks: [
            {
              type: "p",
              text: "DNS is both the key to infrastructure migrations and the place they most often break. Moving a store to [Shopify](/en/concepts/shopify), putting a site behind [Cloudflare](/en/concepts/cloudflare) or verifying a [Search Console](/en/concepts/google-search-console) property all come down to editing DNS records. A single wrong entry can silently stop your site or your email.",
            },
            {
              type: "ul",
              items: [
                "Before moving DNS management, write down every existing record: MX and SPF are the most commonly forgotten, and email quietly bounces until someone notices.",
                "Changes do not propagate instantly; the old answer can stay cached for as long as the record's TTL. Not changing DNS on campaign day is a good habit.",
                "Search Console's domain property verifies ownership through a TXT record — verification is a DNS job too.",
              ],
            },
            {
              type: "p",
              text: "The layer running on top of DNS is covered under [Cloudflare](/en/concepts/cloudflare); the broader ground beneath it under [the web](/en/concepts/web).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How long does a DNS change take to apply?",
          a: "It depends. Every record has a TTL (time to live), and the old answer can stay in intermediate caches for that long. Some visitors reach the new address immediately while others keep seeing the old one for a while. Lowering the TTL ahead of a planned migration shortens the transition.",
        },
        {
          q: "My site works but my email stopped — could DNS be the cause?",
          a: "It is a common scenario. Web traffic is routed by A/CNAME records and email by MX records. If DNS management moves to a new provider and the A record is carried over while the MX record is forgotten, the site keeps loading but email stops. MX and SPF records are the first place to check.",
        },
      ],
      tags: ["DNS", "Domain name", "MX record", "Web infrastructure"],
    },
  },
};
