import type { Concept } from "@/lib/concepts";

export const web: Concept = {
  id: "web",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["cloudflare", "dns", "search-engine", "ai-agents"],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "web",
      name: "WEB (World Wide Web)",
      graphLabel: "WEB",
      metaTitle: "WEB (World Wide Web) Nedir? | Soleach Kavramlar",
      metaDescription:
        "World Wide Web nedir, internetten farkı nedir? Alan adı, sunucu, HTTP ve bağlantılar üzerinden markanın kendi mülkü olan zemini anlatan tanım.",
      shortDef:
        "İnternet üzerinde birbirine bağlantılarla bağlanmış, alan adları üzerinden erişilen belge ve uygulama ağı; markanın kiracı değil sahip olduğu tek dijital zemin.",
      sections: [
        {
          h2: "Web nedir?",
          blocks: [
            {
              type: "p",
              text: "World Wide Web (kısaca web), internet altyapısı üzerinde çalışan bir belge ve uygulama ağıdır. İnternet kabloların, protokollerin ve yönlendiricilerin oluşturduğu taşıma katmanıdır; web ise bu taşıma katmanının üzerinde, alan adlarıyla adreslenen ve birbirine bağlantılarla bağlanan içerik katmanıdır. E-posta da internet üzerinde çalışır ama web değildir — bu ayrım, altyapı kararlarını konuşurken işe yarar.",
            },
            {
              type: "p",
              text: "Bir web sayfasının açılması üç adımdan geçer: tarayıcı alan adını [DNS](/tr/kavramlar/dns) üzerinden bir sunucu adresine çevirir, HTTPS ile o sunucuya bağlanır, sunucu da HTML'i döner. Bu zincirin her halkası hem hıza hem güvenliğe dokunur; bu yüzden \"site yavaş\" ya da \"site açılmıyor\" şikâyetinin cevabı çoğu zaman tasarımda değil, bu üç adımda saklıdır.",
            },
          ],
        },
        {
          h2: "Markalar için web neden hâlâ önemli?",
          blocks: [
            {
              type: "p",
              text: "Instagram, TikTok ve pazaryerleri kiralık alanlardır: kuralları, erişimi ve görünürlüğü platform belirler. Web ise markanın sahip olduğu tek zemindir — alan adı senin, içerik senin, ölçüm senin. Bir platform algoritmasını değiştirdiğinde ya da hesabını kapattığında, geriye kalan şey web'deki varlığındır.",
            },
            {
              type: "ul",
              items: [
                "Arama motorları ve yapay zekâ motorları cevaplarını büyük ölçüde açık web'den tarayarak kurar; web'de olmayan marka onların dünyasında da yoktur.",
                "Reklam ölçümünün tamamı (piksel, dönüşüm, sepet olayları) web üzerinde gerçekleşir — platform içi trafik bile er ya da geç siteye düşer.",
                "Alan adı ve sunucu kararları taşınabilirdir: platform değiştirmek kolaydır, alan adı geçmişini yeniden kurmak değildir.",
              ],
            },
            {
              type: "p",
              text: "Web'in önündeki katmanı — hız, güvenlik ve erişim yönetimini — [Cloudflare](/tr/kavramlar/cloudflare) kavramında; markanın bu zeminde nasıl bulunduğunu ise [arama motoru](/tr/kavramlar/arama-motoru) kavramında anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "İnternet ile web aynı şey mi?",
          a: "Hayır. İnternet, cihazları birbirine bağlayan küresel ağ altyapısıdır; web ise bu altyapı üzerinde çalışan, alan adlarıyla adreslenen ve bağlantılarla birbirine bağlanan içerik katmanıdır. E-posta, dosya transferi ve pek çok uygulama internette çalışır ama web'in parçası değildir.",
        },
        {
          q: "Sosyal medya hesabım varken siteye ihtiyacım var mı?",
          a: "Sosyal hesap kiralık alandır: erişimi, kuralları ve devamlılığı platform belirler. Site ise markanın sahip olduğu zemindir — arama motorlarının ve yapay zekâ motorlarının markanı öğrendiği, reklam ölçümünün gerçekleştiği ve platform değiştiğinde kaybolmayan yer burasıdır.",
        },
      ],
      tags: ["Web", "World Wide Web", "İnternet", "Alan adı", "Web altyapısı"],
    },
    en: {
      slug: "web",
      name: "The Web (World Wide Web)",
      graphLabel: "WEB",
      metaTitle: "What Is the World Wide Web? | Soleach Concepts",
      metaDescription:
        "The World Wide Web explained: how it differs from the internet, how domains, servers and HTTPS fit together, and why it is the only ground a brand owns.",
      shortDef:
        "The network of documents and applications reachable through domain names and joined by links, running on top of the internet; the one digital ground a brand owns rather than rents.",
      sections: [
        {
          h2: "What is the web?",
          blocks: [
            {
              type: "p",
              text: "The World Wide Web is a network of documents and applications running on top of the internet. The internet is the transport layer — cables, protocols and routers; the web is the content layer above it, addressed by domain names and stitched together by links. Email also runs on the internet but is not the web, and that distinction matters as soon as you start making infrastructure decisions.",
            },
            {
              type: "p",
              text: "Opening a web page takes three steps: the browser resolves the domain name to a server address through [DNS](/en/concepts/dns), connects to that server over HTTPS, and the server returns HTML. Every link in that chain touches both speed and security — which is why the answer to \"the site is slow\" or \"the site is down\" usually lives in those three steps rather than in the design.",
            },
          ],
        },
        {
          h2: "Why the web still matters for brands",
          blocks: [
            {
              type: "p",
              text: "Instagram, TikTok and marketplaces are rented space: the platform sets the rules, the reach and the visibility. The web is the only ground a brand owns — the domain is yours, the content is yours, the measurement is yours. When a platform changes its algorithm or closes an account, what remains is your presence on the web.",
            },
            {
              type: "ul",
              items: [
                "Search engines and generative engines build their answers largely by crawling the open web; a brand absent from the web is absent from their world too.",
                "All ad measurement — pixels, conversions, cart events — happens on the web; even in-platform traffic eventually lands on a site.",
                "Domain and server decisions are portable: changing platforms is easy, rebuilding a domain's history is not.",
              ],
            },
            {
              type: "p",
              text: "The layer that sits in front of the web — speed, security and access management — is covered under [Cloudflare](/en/concepts/cloudflare); how a brand is found on this ground is covered under [search engine](/en/concepts/search-engine).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Are the internet and the web the same thing?",
          a: "No. The internet is the global network infrastructure connecting devices; the web is the content layer running on top of it, addressed by domain names and joined by links. Email, file transfer and many other applications run on the internet without being part of the web.",
        },
        {
          q: "Do I need a website if I already have social accounts?",
          a: "Social accounts are rented space: the platform controls reach, rules and continuity. A site is ground the brand owns — it is where search engines and generative engines learn about you, where ad measurement happens, and what survives when a platform changes.",
        },
      ],
      tags: ["Web", "World Wide Web", "Internet", "Domain name", "Web infrastructure"],
    },
  },
};
