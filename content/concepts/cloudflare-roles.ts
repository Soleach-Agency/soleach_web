import type { Concept } from "@/lib/concepts";

export const cloudflareRoles: Concept = {
  id: "cloudflare-roles",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["cloudflare-partner"],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "cloudflare-uyelik-yetkileri",
      name: "Cloudflare Üyelik Yetkileri",
      graphLabel: "CF Üyelik",
      metaTitle: "Cloudflare Üyelik Yetkileri ve Rolleri | Soleach",
      metaDescription:
        "Cloudflare'de üye daveti nasıl çalışır? Hesap, alan adı ve kaynak kapsamlı roller, politika mantığı ve ajansa hangi yetkiyi vermen gerektiğinin tanımı.",
      shortDef:
        "Bir Cloudflare hesabına davet edilen kişilere, yapacakları işe göre sınırlanmış yetki verme sistemi; roller hesap, alan adı ve kaynak olmak üzere üç kapsamda tanımlanır.",
      sections: [
        {
          h2: "Cloudflare üyelik yetkileri nedir?",
          blocks: [
            {
              type: "p",
              text: "Cloudflare, hesabına başka kişileri şifre paylaşmadan davet etmene izin verir. Davet edilen kişi kendi kullanıcısıyla giriş yapar ve yalnızca kendisine verilen rolün izin verdiği işleri yapabilir. Davet gönderebilmek için davet edenin Super Administrator rolüne ve doğrulanmış bir e-posta adresine sahip olması gerekir ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)).",
            },
            {
              type: "p",
              text: "Yetki tek bir kutucuk değil, bir politikadır: kime verildiği (actor), hangi kapsamda geçerli olduğu (resource group) ve o kapsamda neler yapılabileceği (permission group, yani roller) birlikte tanımlanır ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)). Önemli ayrıntı: bir üyenin efektif yetkisi, doğrudan verilen ve gruplardan miras alınan izinlerin birleşimidir — izinler birbirini kısıtlamaz, üst üste eklenir.",
            },
          ],
        },
        {
          h2: "Üç kapsam ve doğru rolü seçmek",
          blocks: [
            {
              type: "ul",
              items: [
                "**Hesap kapsamlı roller:** Hesabın tamamında geçerlidir. Super Administrator, Administrator, Administrator Read Only, Billing, Analytics, Audit Logs Viewer, Cache Purge, DNS ve Minimal Account Access bu kapsamdadır.",
                "**Alan adı kapsamlı roller:** Hesaptaki tek bir alan adı için geçerlidir; birden fazla marka ya da üretim/test ayrımı olan hesaplarda erişimi daraltmanın yoludur.",
                "**Kaynak kapsamlı roller:** Tek bir uygulama ya da tunnel gibi belirli bir kaynağa yetki verir; Cloudflare bu kapsamı beta olarak işaretliyor ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/roles/)).",
              ],
            },
            {
              type: "p",
              text: "Pratik kural: rol, yapılan işe eşit olmalı. Sadece rapor okuyacak taraf için Analytics, sürüm sonrası önbellek temizleyecek taraf için Cache Purge, alan adı kayıtlarıyla ilgilenecek taraf için DNS yeterlidir. Super Administrator, üyeleri ve faturayı da yönetir; dışarıdan bir tarafa vermek için güçlü bir gerekçe gerekir.",
            },
            {
              type: "p",
              text: "Bu modelin alternatifi olan [Cloudflare partnerlik](/tr/kavramlar/cloudflare-partnerlik) yapısıyla karşılaştırmasını [erişim yönetimi yazımızda](/tr/blog/cloudflare-erisim-yonetimi-uyelik-mi-partner-mi) bulabilirsin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Ajansıma hangi Cloudflare rolünü vermeliyim?",
          a: "Yapacağı işe en yakın olanı. Rapor okuyorsa Analytics, önbellek temizliyorsa Cache Purge, DNS kayıtlarını düzenliyorsa DNS, siteyi Cloudflare üzerinde yayınlıyorsa Workers Platform Admin, yalnızca kurulumu denetliyorsa Administrator Read Only. Super Administrator'ı, üye ve fatura yönetimini de kapsadığı için dışarıya vermemek en güvenlisidir.",
        },
        {
          q: "Dar bir rol verdim, yine de fazla yetkisi olabilir mi?",
          a: "Olabilir. Cloudflare'de izinler birleşim mantığıyla çalışır: kişiye doğrudan verdiğin rol ile üyesi olduğu gruplardan gelen roller toplanır. Members ekranı yalnızca doğrudan atanan politikaları gösterdiği için, efektif yetkiyi görmek istiyorsan grup üyeliklerini de kontrol etmen gerekir.",
        },
      ],
      tags: [
        "Cloudflare rolleri",
        "Erişim yönetimi",
        "Hesap güvenliği",
        "Yetkilendirme",
      ],
    },
    en: {
      slug: "cloudflare-member-roles",
      name: "Cloudflare Member Roles",
      graphLabel: "CF Members",
      metaTitle: "Cloudflare Member Roles and Permissions | Soleach",
      metaDescription:
        "How Cloudflare member invites work: account-, domain- and resource-scoped roles, the policy model, and which permission to grant your agency.",
      shortDef:
        "The system for inviting people into a Cloudflare account with permissions limited to the job they do; roles are defined across three scopes — account, domain and resource.",
      sections: [
        {
          h2: "What are Cloudflare member roles?",
          blocks: [
            {
              type: "p",
              text: "Cloudflare lets you invite other people into your account without sharing a password. The invited person signs in as themselves and can only do what their role permits. To send an invite, the inviter must hold the Super Administrator role and have a verified email address ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)).",
            },
            {
              type: "p",
              text: "A permission is not a single checkbox but a policy: who receives it (actor), the scope it applies to (resource group) and what may be done within that scope (permission group, i.e. roles) ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)). One detail matters: a member's effective permissions are the union of what is granted directly and what is inherited through groups — permissions stack rather than constrain.",
            },
          ],
        },
        {
          h2: "Three scopes, and picking the right role",
          blocks: [
            {
              type: "ul",
              items: [
                "**Account-scoped roles** apply across the whole account: Super Administrator, Administrator, Administrator Read Only, Billing, Analytics, Audit Logs Viewer, Cache Purge, DNS and Minimal Account Access.",
                "**Domain-scoped roles** apply to a single domain in the account — the way to narrow access when you run several brands or separate production from staging.",
                "**Resource-scoped roles** limit permissions to one specific resource such as an application or a tunnel; Cloudflare marks this scope as beta ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/roles/)).",
              ],
            },
            {
              type: "p",
              text: "The practical rule: the role should equal the job. Analytics for someone who only reads reports, Cache Purge for someone who clears cache after releases, DNS for someone handling domain records. Super Administrator also manages members and billing, so granting it externally needs a strong reason.",
            },
            {
              type: "p",
              text: "For how this compares with the [Cloudflare partnership](/en/concepts/cloudflare-partnership) model, see our [access management article](/en/blog/cloudflare-account-access-members-vs-partner).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Which Cloudflare role should I give my agency?",
          a: "The one closest to the work. Analytics if they read reports, Cache Purge if they clear cache, DNS if they manage domain records, Workers Platform Admin if they publish the site on Cloudflare, Administrator Read Only if they only audit the setup. Super Administrator also covers members and billing, so keeping it in-house is the safer default.",
        },
        {
          q: "I granted a narrow role — can they still have more access than I think?",
          a: "Yes. Cloudflare permissions work as a union: the role you assign directly is added to any roles inherited from groups the person belongs to. The Members view shows only directly assigned policies, so to see effective permissions you also need to check group memberships.",
        },
      ],
      tags: [
        "Cloudflare roles",
        "Access management",
        "Account security",
        "Permissions",
      ],
    },
  },
};
