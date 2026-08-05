import type { Concept } from "@/lib/concepts";

export const apiToken: Concept = {
  id: "api-token",
  category: "web-ecommerce",
  publishedAt: "2026-08-04",
  related: ["cloudflare", "cloudflare-roles"],
  postIds: ["cloudflare-erisim-yonetimi"],
  locales: {
    tr: {
      slug: "api-token",
      name: "API Token",
      graphLabel: "API Token",
      metaTitle: "API Token Nedir? Ne İşe Yarar? | Soleach Kavramlar",
      metaDescription:
        "API token nedir, şifreden farkı nedir? Bir araca insan hesabı vermeden, kapsamı daraltılmış ve iptal edilebilir erişim tanımlamanın tanımı.",
      shortDef:
        "Bir insana değil bir araca verilen, yapabileceği işler ve erişebileceği kaynaklar önceden daraltılmış, tek tek iptal edilebilen erişim anahtarı.",
      sections: [
        {
          h2: "API token nedir?",
          blocks: [
            {
              type: "p",
              text: "API token, bir yazılımın senin adına iş yapabilmesi için ürettiğin uzun bir anahtardır. Şifreden üç yönüyle ayrılır: neyi yapabileceği baştan sınırlandırılır, hangi kaynağa dokunabileceği seçilir, ve gerektiğinde diğer erişimleri etkilemeden tek başına iptal edilir. Şifre \"her şey\" demektir; token \"sadece şu, sadece burada\" demektir.",
            },
            {
              type: "p",
              text: "Pratikte token'ın devreye girdiği yer bellidir: bir deploy hattı yeni sürümü yayınlayacak, bir script önbellek temizleyecek, bir entegrasyon sipariş verisi çekecek. Bu işlerin hiçbiri için o script'i çalıştıran kişiye hesap yetkisi vermek gerekmez — [Cloudflare](/tr/kavramlar/cloudflare) tarafında da durum aynıdır.",
            },
          ],
        },
        {
          h2: "Doğru kullanım: kapsam, saklama, iptal",
          blocks: [
            {
              type: "ul",
              items: [
                "**Tek iş, tek token.** Her otomasyona kendi token'ını üret; ortak kullanılan bir token, sızdığında hangi işi durduracağını bilemediğin için iptal edilemez hale gelir.",
                "**En dar kapsam.** Önbellek temizleyecek bir token'ın DNS yazma yetkisi olmasın; bu ayar sonradan değil, üretirken yapılır.",
                "**Depoya girmez.** Token kod içine ya da git geçmişine yazılmaz; ortam değişkeni ya da sağlayıcının secret deposu kullanılır.",
                "**Süre ve rotasyon.** Mümkünse son kullanma tarihi tanımla ve düzenli aralıklarla yenile; kalıcı anahtarlar unutulur.",
                "**Ayrılışta ilk iş.** Bir ajansla ya da geliştiriciyle yollar ayrıldığında üyeliği kaldırmak yetmez — onlar için üretilmiş token'lar da aynı gün iptal edilmelidir.",
              ],
            },
            {
              type: "p",
              text: "Token, insanlara verilen [üyelik yetkilerinin](/tr/kavramlar/cloudflare-uyelik-yetkileri) alternatifi değil tamamlayıcısıdır: kişiye rol, araca token. İkisinin birlikte nasıl kurgulanacağını [Cloudflare erişim yönetimi yazımızda](/tr/blog/cloudflare-erisim-yonetimi-uyelik-mi-partner-mi) anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "API token ile şifre arasındaki fark nedir?",
          a: "Şifre bir kimliğin tamamına açılır; token yalnızca tanımladığın işe. Token'ın kapsamı üretirken daraltılır, kimin hangi iş için kullandığı ayrışır ve tek başına iptal edilebilir. Bu yüzden otomasyona şifre vermek yerine token üretmek hem daha güvenli hem de geri alması daha kolaydır.",
        },
        {
          q: "Token sızdıysa ne yapmalıyım?",
          a: "Önce o token'ı iptal et — yenisini üretmeden önce, çünkü iptal riski anında durdurur. Ardından hangi kaynaklara erişebildiğine bakıp o alandaki değişiklikleri denetim kayıtlarından kontrol et. Sonra yeni token'ı daha dar kapsamla üret ve nereye yazıldığını gözden geçir: sızıntıların çoğu koda ya da git geçmişine gömülmüş anahtarlardan gelir.",
        },
      ],
      tags: [
        "API token",
        "Erişim yönetimi",
        "Otomasyon",
        "Hesap güvenliği",
      ],
    },
    en: {
      slug: "api-token",
      name: "API Token",
      graphLabel: "API Token",
      metaTitle: "What Is an API Token? | Soleach Concepts",
      metaDescription:
        "API tokens explained: how giving a tool scoped, revocable access differs from sharing a password, and the rules that keep tokens from becoming a liability.",
      shortDef:
        "An access key issued to a tool rather than a person, scoped in advance to specific actions and resources, and revocable on its own.",
      sections: [
        {
          h2: "What is an API token?",
          blocks: [
            {
              type: "p",
              text: "An API token is a long key you generate so a piece of software can act on your behalf. It differs from a password in three ways: what it can do is limited up front, which resources it can touch is chosen, and it can be revoked on its own without disturbing any other access. A password means \"everything\"; a token means \"only this, only here\".",
            },
            {
              type: "p",
              text: "Where tokens belong is clear enough: a deploy pipeline publishing a release, a script purging cache, an integration pulling order data. None of that requires giving account permissions to whoever runs the script — and the same holds on the [Cloudflare](/en/concepts/cloudflare) side.",
            },
          ],
        },
        {
          h2: "Using them well: scope, storage, revocation",
          blocks: [
            {
              type: "ul",
              items: [
                "**One job, one token.** Generate a separate token per automation; a shared token becomes un-revocable in practice, because nobody knows what revoking it will break.",
                "**Narrowest scope.** A token that purges cache should not be able to write DNS — and that is decided when you create it, not later.",
                "**Never in the repo.** Tokens don't belong in code or in git history; use environment variables or the provider's secret store.",
                "**Expiry and rotation.** Set an expiry where you can and rotate on a schedule; permanent keys get forgotten.",
                "**First task at offboarding.** When you part ways with an agency or a developer, revoking their membership is not enough — tokens created for them must be revoked the same day.",
              ],
            },
            {
              type: "p",
              text: "Tokens complement rather than replace human [member roles](/en/concepts/cloudflare-member-roles): roles for people, tokens for tools. How the two fit together is covered in our [Cloudflare access management article](/en/blog/cloudflare-account-access-members-vs-partner).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between an API token and a password?",
          a: "A password unlocks an entire identity; a token unlocks only what you defined. A token's scope is narrowed at creation, its use is attributable to a specific job, and it can be revoked alone. That makes issuing a token to an automation both safer and far easier to undo than handing over a password.",
        },
        {
          q: "What should I do if a token leaks?",
          a: "Revoke it first — before generating a replacement, because revocation stops the risk immediately. Then check what resources it could reach and review changes in that area through the audit log. Finally create the new token with a narrower scope and review where it gets stored: most leaks come from keys committed into code or git history.",
        },
      ],
      tags: [
        "API token",
        "Access management",
        "Automation",
        "Account security",
      ],
    },
  },
};
