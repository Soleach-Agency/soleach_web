import type { Concept } from "@/lib/concepts";

export const cloudflare: Concept = {
  id: "cloudflare",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["dns", "cloudflare-roles", "cloudflare-partner", "ai-crawler"],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "cloudflare",
      name: "Cloudflare",
      metaTitle: "Cloudflare Nedir? Ne İşe Yarar? | Soleach Kavramlar",
      metaDescription:
        "Cloudflare nedir, ne işe yarar? Alan adının önünde duran CDN, DNS, güvenlik ve önbellek katmanının tanımı; markanın sitesine etkisi ve erişim yönetimi.",
      shortDef:
        "Alan adı ile ziyaretçi arasında duran; DNS, CDN, önbellek, SSL ve bot koruması hizmetlerini tek panelden veren altyapı sağlayıcısı.",
      sections: [
        {
          h2: "Cloudflare nedir?",
          blocks: [
            {
              type: "p",
              text: "Cloudflare, siteni ziyaretçiyle sunucu arasına yerleşerek hızlandıran ve koruyan bir altyapı sağlayıcısıdır. Alan adının [DNS](/tr/kavramlar/dns) yönetimi Cloudflare'e devredildiğinde, trafik önce Cloudflare'in dünya çapına yayılmış ağına uğrar: statik içerik oradan önbellekten servis edilir, SSL sertifikası orada sonlanır, kötü niyetli istekler siteye hiç ulaşmadan filtrelenir.",
            },
            {
              type: "p",
              text: "Panelin kapsamı geniştir: DNS kayıtları, önbellek kuralları, yönlendirmeler, sayfa kuralları, bot politikaları, güvenlik duvarı ve — Pages ile Workers üzerinden — sitenin kendisinin yayınlanması. Bu genişlik pratik bir sonuç doğurur: Cloudflare hesabına erişimi olan kişi, siteyi tek ayarla hızlandırabileceği gibi tek ayarla erişilemez de kılabilir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için Cloudflare neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Kozmetikte trafik dalgalıdır: bir Reels tutar, bir lansman yapılır, kampanya günü gelir. Cloudflare bu dalgayı sunucuya taşıtmadan önbellekten karşılar. Sayfa hızı da doğrudan reklam maliyetine yansır — yavaş açılan bir ürün sayfası, aynı bütçeden daha az satış çıkarır.",
            },
            {
              type: "ul",
              items: [
                "Alan adının DNS'i Cloudflare'e taşındığında e-posta kayıtları (MX, SPF) da doğru taşınmalıdır; atlanan bir kayıt e-postayı sessizce durdurur.",
                "Agresif önbellek ayarları, güncellenen bir ürün sayfasının ziyaretçide eski görünmesine yol açabilir; kampanya öncesi önbellek davranışını doğrula.",
                "Yapay zekâ tarayıcılarının ([AI crawler](/tr/kavramlar/yapay-zeka-tarayicilari)) siteye erişimi de bu katmanda yönetilir — engellemek istemediğin botu yanlışlıkla engellemek mümkündür.",
              ],
            },
            {
              type: "p",
              text: "Hesabı ajansınla ya da ekibinle paylaşacaksan iki model var: rol kapsamlı [üyelik yetkileri](/tr/kavramlar/cloudflare-uyelik-yetkileri) ve [partnerlik](/tr/kavramlar/cloudflare-partnerlik). İkisinin artılarını ve eksilerini [erişim yönetimi yazımızda](/tr/blog/cloudflare-erisim-yonetimi-uyelik-mi-partner-mi) karşılaştırdık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Cloudflare kullanmak siteyi gerçekten hızlandırır mı?",
          a: "Değişir. Statik içeriği (görsel, CSS, JS) ziyaretçiye yakın bir noktadan önbellekten servis ettiği için ilk açılış çoğu sitede ölçülebilir biçimde hızlanır. Ama sayfanın kendisi ağır kurgulanmışsa — büyük görseller, çok sayıda script — Cloudflare bunu düzeltmez; sadece taşımayı iyileştirir.",
        },
        {
          q: "Cloudflare ücretsiz mi?",
          a: "Cloudflare'in ücretsiz bir planı vardır ve DNS, temel önbellek ile SSL gibi çoğu markanın ihtiyacını karşılar. Gelişmiş güvenlik, bot yönetimi ve kurumsal özellikler ücretli planlarda yer alır. Karar verirken plan farkından çok, hesabın kimin adına açıldığı ve erişimin nasıl paylaşıldığı önemlidir.",
        },
      ],
      tags: ["Cloudflare", "CDN", "DNS", "Site hızı", "Web altyapısı"],
    },
    en: {
      slug: "cloudflare",
      name: "Cloudflare",
      metaTitle: "What Is Cloudflare and What Does It Do? | Soleach",
      metaDescription:
        "Cloudflare explained: the DNS, CDN, cache, SSL and bot-protection layer that sits in front of your domain, what it changes for your site, and how access works.",
      shortDef:
        "The infrastructure provider that sits between your domain and your visitors, bundling DNS, CDN, caching, SSL and bot protection into a single dashboard.",
      sections: [
        {
          h2: "What is Cloudflare?",
          blocks: [
            {
              type: "p",
              text: "Cloudflare is an infrastructure provider that speeds up and protects your site by sitting between the visitor and your server. Once a domain's [DNS](/en/concepts/dns) is delegated to Cloudflare, traffic reaches its global network first: static content is served from cache there, the SSL certificate terminates there, and malicious requests are filtered before they ever touch your origin.",
            },
            {
              type: "p",
              text: "The dashboard covers a lot of ground: DNS records, cache rules, redirects, page rules, bot policies, the firewall and — through Pages and Workers — publishing the site itself. That breadth has a practical consequence: whoever holds access to a Cloudflare account can make a site faster with one setting and unreachable with another.",
            },
          ],
        },
        {
          h2: "Why Cloudflare matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Beauty traffic arrives in waves: a Reel takes off, a launch happens, a campaign day lands. Cloudflare absorbs those waves from cache instead of passing them to your server. Page speed also feeds straight into ad cost — a slow product page extracts fewer sales from the same budget.",
            },
            {
              type: "ul",
              items: [
                "When a domain's DNS moves to Cloudflare, email records (MX, SPF) must move correctly too; one missed record silently stops your email.",
                "Aggressive cache settings can leave an updated product page looking stale to visitors; verify cache behaviour before a campaign.",
                "Access for [AI crawlers](/en/concepts/ai-crawlers) is governed at this layer too — it is entirely possible to block a bot you meant to welcome.",
              ],
            },
            {
              type: "p",
              text: "If you plan to share the account with an agency or a team, there are two models: scoped [member roles](/en/concepts/cloudflare-member-roles) and [partnership](/en/concepts/cloudflare-partnership). We compare their trade-offs in our [access management article](/en/blog/cloudflare-account-access-members-vs-partner).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does Cloudflare actually make a site faster?",
          a: "It depends. Because static assets — images, CSS, JS — are served from cache close to the visitor, first load usually improves measurably. But if the page itself is heavy, with oversized images and many scripts, Cloudflare will not fix that; it only improves the delivery.",
        },
        {
          q: "Is Cloudflare free?",
          a: "Cloudflare has a free plan that covers what most brands need: DNS, basic caching and SSL. Advanced security, bot management and enterprise features sit on paid plans. When deciding, the plan difference matters less than whose name the account is in and how access to it is shared.",
        },
      ],
      tags: ["Cloudflare", "CDN", "DNS", "Site speed", "Web infrastructure"],
    },
  },
};
