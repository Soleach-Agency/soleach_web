import type { Concept } from "@/lib/concepts";

/**
 * Its edges are declared on the neighbours (cloudflare, cloudflare-roles) —
 * `related` stays empty here so each pair is declared exactly once.
 */
export const cloudflarePartner: Concept = {
  id: "cloudflare-partner",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: [],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "cloudflare-partnerlik",
      name: "Cloudflare Partnerlik",
      graphLabel: "CF Partner",
      metaTitle: "Cloudflare Partnerlik (Tenant) Nedir? | Soleach",
      metaDescription:
        "Cloudflare partnerlik ve Tenant yapısı nedir? Partnerin müşteri hesaplarını nasıl açıp yönettiği, kimin için uygun olduğu ve üyelik modelinden farkı.",
      shortDef:
        "Cloudflare ile partner sözleşmesi imzalamış tarafların, müşterileri adına Cloudflare hesabı açıp yönetmesini sağlayan Tenant yapısı.",
      sections: [
        {
          h2: "Cloudflare partnerlik nedir?",
          blocks: [
            {
              type: "p",
              text: "Cloudflare partnerliğinin teknik karşılığı Tenant yapısıdır. Cloudflare, Tenant API'yi kanal ve ittifak partnerlerinin müşterileri adına Cloudflare hesaplarını ve hizmetlerini kurup yönetmesine yarayan bir sağlama mekanizması olarak tanımlıyor ([Cloudflare Docs](https://developers.cloudflare.com/tenant/)). Yani bu, panelden açılıp kapatılan bir ayar değil; iki şirket arasındaki ticari ilişkinin teknik karşılığıdır.",
            },
            {
              type: "p",
              text: "İşleyiş şöyle: partner sözleşmesi imzalandıktan sonra Cloudflare özel bir Tenant hesabı oluşturur ve partnerin kullanıcısını buraya Tenant admin olarak ekler. Tenant admin'ler, Tenant içindeki bütün hesaplar ve alan adları için varsayılan Super Administrator olurlar ([Cloudflare Docs](https://developers.cloudflare.com/tenant/glossary/)). Partner, müşteri hesaplarını API ya da panel üzerinden açar ve yönetir.",
            },
          ],
        },
        {
          h2: "Kimin için uygun, kimin için değil?",
          blocks: [
            {
              type: "p",
              text: "Bu model, çok sayıda müşteri hesabını standart biçimde açıp yönetmesi gereken taraflar için tasarlanmıştır: barındırma sağlayıcıları, yönetilen hizmet sağlayıcıları ve büyük ölçekli entegratörler. Tek alan adı ve tek markayla çalışan bir yapı için kurduğu soyutlama, çözdüğü sorundan büyüktür.",
            },
            {
              type: "ul",
              items: [
                "Partnerlik bir tercih değil, bir ön koşuldur: Cloudflare ile imzalanmış sözleşme olmadan Tenant yapısı kullanılamaz.",
                "Varsayılan yetki en dar değil, en geniş olanıdır — Tenant admin içerideki tüm hesaplarda Super Administrator'dır.",
                "Hesabı partner açtıysa, ilişki bittiğinde devir teknik bir iş kalemine dönüşür; bu yüzden sahiplik ve devir koşulları sözleşmede yazılı olmalıdır.",
              ],
            },
            {
              type: "p",
              text: "Markaların büyük çoğunluğu için pratik cevap rol kapsamlı [üyelik yetkileridir](/tr/kavramlar/cloudflare-uyelik-yetkileri); iki modelin ayrıntılı karşılaştırması [erişim yönetimi yazımızda](/tr/blog/cloudflare-erisim-yonetimi-uyelik-mi-partner-mi).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Ajansım Cloudflare partneri olabilir mi?",
          a: "Kendi kararıyla değil. Tenant yapısı Cloudflare ile imzalanmış bir partner sözleşmesine dayanır; sözleşmenin ardından Cloudflare özel bir Tenant hesabı açar ve partnerin kullanıcısını Tenant admin olarak ekler. Bu yüzden çoğu marka-ajans ilişkisinde uygulanabilir yol, üye daveti ve rol vermektir.",
        },
        {
          q: "Partner modelinde hesabın sahibi kim olur?",
          a: "Hesap Tenant yapısının içinde açıldığı için Tenant admin varsayılan olarak o hesabın Super Administrator'ıdır. Markanın panele ne kadar erişeceği ve ilişki bittiğinde hesabın nasıl devredileceği teknik bir varsayılan değil, sözleşmenin konusudur — bu yüzden baştan yazılı olması önemlidir.",
        },
      ],
      tags: [
        "Cloudflare partnerlik",
        "Tenant API",
        "Hesap sahipliği",
        "Erişim yönetimi",
      ],
    },
    en: {
      slug: "cloudflare-partnership",
      name: "Cloudflare Partnership",
      graphLabel: "CF Partner",
      metaTitle: "What Is Cloudflare Partnership (Tenant)? | Soleach",
      metaDescription:
        "Cloudflare partnership and the Tenant structure explained: how partners provision and manage customer accounts, who it fits, and how it differs from membership.",
      shortDef:
        "The Tenant structure that lets parties holding a Cloudflare partner agreement provision and manage Cloudflare accounts on behalf of their customers.",
      sections: [
        {
          h2: "What is Cloudflare partnership?",
          blocks: [
            {
              type: "p",
              text: "The technical expression of a Cloudflare partnership is the Tenant structure. Cloudflare describes the Tenant API as a provisioning mechanism helping Channel and Alliance partners set up and manage Cloudflare accounts and services for their customers ([Cloudflare Docs](https://developers.cloudflare.com/tenant/)). It is not a dashboard toggle; it is the technical side of a commercial relationship between two companies.",
            },
            {
              type: "p",
              text: "The mechanics: once a partner agreement is signed, Cloudflare creates a dedicated Tenant account and adds the partner's user to it as a Tenant admin. Tenant admins become the default Super Administrator for every account and zone inside the Tenant ([Cloudflare Docs](https://developers.cloudflare.com/tenant/glossary/)). The partner then provisions and manages customer accounts through the API or the dashboard.",
            },
          ],
        },
        {
          h2: "Who it fits — and who it doesn't",
          blocks: [
            {
              type: "p",
              text: "The model is designed for parties that must provision and operate many customer accounts consistently: hosting providers, managed service providers and large integrators. For a single brand with a single domain, the abstraction it introduces is larger than the problem it solves.",
            },
            {
              type: "ul",
              items: [
                "Partnership is a precondition, not a preference: without a signed agreement with Cloudflare, the Tenant structure is not available.",
                "The default permission is the widest, not the narrowest — a Tenant admin is Super Administrator on every account inside.",
                "If the partner created the account, ending the relationship makes handover a technical work item, so ownership and handover terms belong in the contract.",
              ],
            },
            {
              type: "p",
              text: "For the vast majority of brands the practical answer is scoped [member roles](/en/concepts/cloudflare-member-roles); the full comparison is in our [access management article](/en/blog/cloudflare-account-access-members-vs-partner).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Can my agency become a Cloudflare partner?",
          a: "Not by deciding to. The Tenant structure rests on a signed partner agreement with Cloudflare; after that agreement, Cloudflare creates a dedicated Tenant account and adds the partner's user as a Tenant admin. That is why, in most brand–agency relationships, the workable route is a member invite with a scoped role.",
        },
        {
          q: "Who owns the account under the partner model?",
          a: "Because the account is created inside the Tenant structure, the Tenant admin is its Super Administrator by default. How much of the dashboard the brand can reach, and how the account is handed over when the relationship ends, are contractual questions rather than technical defaults — which is why they belong in writing from the start.",
        },
      ],
      tags: [
        "Cloudflare partnership",
        "Tenant API",
        "Account ownership",
        "Access management",
      ],
    },
  },
};
