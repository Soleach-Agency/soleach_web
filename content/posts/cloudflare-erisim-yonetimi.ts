import type { BlogPost } from "@/lib/blog";

export const cloudflareErisimYonetimi: BlogPost = {
  id: "cloudflare-erisim-yonetimi",
  publishedAt: "2026-08-04",
  category: "web-ecommerce",
  locales: {
    tr: {
      slug: "cloudflare-erisim-yonetimi-uyelik-mi-partner-mi",
      title: "Cloudflare erişimi: üyelikle mi yönetmeli, partnerlikle mi?",
      metaTitle: "Cloudflare Üyelik mi Partner mi? Erişim Rehberi | Soleach",
      metaDescription:
        "Cloudflare hesabını ajansına açmanın iki yolu var: rol verilmiş üye daveti ve partner (Tenant) modeli. İkisinin nasıl çalıştığı, artıları, eksileri ve karar rehberi.",
      excerpt:
        "Alan adının önündeki Cloudflare hesabı, siteyi tek tıkla kapatabilecek yetkileri barındırır. Ajansına ya da ekip arkadaşına erişim verirken iki model var: rol kapsamlı üyelik ve partner (Tenant) yapısı. Hangisi ne zaman doğru, ikisinin de neyi çözüp neyi çözmediği burada.",
      intro: [
        "Bir ajansla ya da yeni bir ekip arkadaşıyla çalışmaya başlarken erişim listesi hep aynı yerden başlar: reklam hesabı, Shopify, Search Console. Listede çoğu markanın en son aklına gelen ama en kritik olan bir kalem daha var — alan adının önünde duran **Cloudflare hesabı**. DNS kayıtları, SSL sertifikası, cache kuralları, yönlendirmeler ve bot politikaları orada tutulur. Yanlış paylaşılan bir erişim, iyi niyetli bir yanlış tıklamayla siteyi ve e-postayı aynı anda kapatabilir.",
        "Cloudflare'de bu erişimi vermenin iki ana yolu var: hesabına rol vererek **üye** davet etmek, ya da hesabın bir Cloudflare partneri tarafından açılıp yönetildiği **partner (Tenant)** yapısı. Bu yazıda ikisinin nasıl çalıştığını, artılarını ve eksilerini yan yana koyuyoruz. Kısa cevabı baştan söyleyelim: markaların büyük çoğunluğu için doğru yol rol kapsamlı üyeliktir; partner modeli bir ajansın kendi başına seçebileceği bir seçenek değil, Cloudflare ile imzalanmış bir partner sözleşmesi gerektirir.",
      ],
      sections: [
        {
          h2: "Cloudflare'de erişim vermenin kaç yolu var?",
          id: "yollar",
          blocks: [
            {
              type: "p",
              text: "Pratikte beş yol var ve bunlardan biri daha baştan elenmeli. Hangisini seçtiğin, sadece rahatlığı değil; sorumluluğun, faturanın ve iş bittiğinde erişimi geri almanın kimde olduğunu belirliyor.",
            },
            {
              type: "ul",
              items: [
                "**Şifre paylaşmak:** En yaygın, en kötü yol. Kimin neyi değiştirdiği belli olmaz, iki adımlı doğrulama işlevsizleşir, çalışma bittiğinde şifre değiştirilmediyse erişim sessizce devam eder. Cloudflare'in üyelik sistemi tam da bunu gereksiz kılmak için var.",
                "**Üye daveti (member + rol):** Hesap senin kalır, ajansı ya da ekip arkadaşını kendi Cloudflare kullanıcısıyla, sınırlı yetkiyle davet edersin. Varsayılan ve çoğu durumda doğru yol.",
                "**Partner (Tenant) modeli:** Hesabı, Cloudflare ile partner sözleşmesi olan taraf açar ve yönetir; sen o yapının içindeki bir hesapsın.",
                "**Organizations:** Birden fazla Cloudflare hesabını tek çatı altında toplamak için; Enterprise hesap gerektiriyor ve public beta aşamasında.",
                "**API token:** İnsana değil, araca verilen erişim. Bir deploy hattı ya da otomasyon için doğru cevap genellikle budur — kullanıcı davet etmek değil.",
              ],
            },
            {
              type: "p",
              text: "API token'ları diğerlerinin alternatifi değil, tamamlayıcısı: bir script'in cache temizlemesi ya da DNS kaydı yazması gerekiyorsa, o iş için [kapsamı daraltılmış bir token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) üretmek, o script'i çalıştıran kişiye hesap yetkisi vermekten çok daha güvenli. Token'ı iptal etmek de bir kişiyi hesaptan çıkarmaktan kolaydır.",
            },
          ],
        },
        {
          h2: "Üye daveti nasıl çalışır? Roller, kapsamlar ve politikalar",
          id: "uyelik",
          blocks: [
            {
              type: "p",
              text: "Üye daveti, Cloudflare panelinde **Manage Account → Members** ekranından yürür. Davet gönderebilmek için iki şart var: davet eden kişinin **Super Administrator** rolüne ve **doğrulanmış bir e-posta adresine** sahip olması ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)). Davet edilen kişi kendi Cloudflare kullanıcısıyla giriş yapar; yani şifre paylaşılmaz, kimin ne yaptığı denetim kayıtlarında ayrışır.",
            },
            {
              type: "p",
              text: "Cloudflare'de yetki, tek bir kutucuk değil bir **politika** (policy) olarak kurgulanıyor. Her politika üç parçadan oluşur: yetkiyi alan kişi (actor), yetkinin geçerli olduğu kapsam (resource group) ve o kapsamda yapabileceği işler (permission group, yani roller) ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)).",
            },
            {
              type: "h3",
              text: "Üç kapsam: hesap, alan adı, kaynak",
            },
            {
              type: "ul",
              items: [
                "**Hesap kapsamlı roller:** Hesabın tamamında ve içindeki bütün alan adlarında geçerlidir. Super Administrator, Administrator, Administrator Read Only, Billing, Analytics, Audit Logs Viewer, Cache Purge, DNS ve Minimal Account Access gibi roller bu kapsamdadır.",
                "**Alan adı kapsamlı roller:** Hesaptaki belirli bir alan adı için geçerlidir. Birden fazla markası ya da hem üretim hem test alan adı olan bir hesapta, ajansı yalnızca ilgili alan adına bağlamanın yolu budur.",
                "**Kaynak kapsamlı roller:** En ince ayar — tek bir Access uygulaması ya da tek bir Tunnel gibi belirli bir kaynağa yetki verir. Cloudflare bu kapsamı beta olarak işaretliyor ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/roles/)).",
              ],
            },
            {
              type: "p",
              text: "Rol adları kulağa teknik gelse de seçim aslında basit: ajansın işi neyse rol o olmalı. Sadece performans raporu bakacaksa **Analytics**, sadece sürüm sonrası cache temizleyecekse **Cache Purge**, alan adı devri ve kayıt düzenlemesi yapacaksa **DNS**, siteyi Cloudflare Pages/Workers üzerinde yayınlıyorsa **Workers Platform Admin**, sadece kurulumu denetleyecekse **Administrator Read Only** yeterlidir. Super Administrator, üyeleri ve faturayı yönetme yetkisini de kapsar — dışarıdan bir tarafa vermek için gerçekten güçlü bir gerekçe olmalı.",
            },
            {
              type: "p",
              text: "Bir uyarı: bir üyenin **efektif yetkisi**, kendisine doğrudan verilen izinlerle üyesi olduğu gruplardan miras aldığı izinlerin **birleşimidir**. İzinler birbirini kısıtlamaz, üst üste eklenir; üstelik Members ekranı yalnızca doğrudan atanan politikaları gösterir, gruptan gelenleri görmek için Groups sekmesine bakmak gerekir ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)). \"Dar rol verdim\" diye rahatlamadan önce grup üyeliklerini de kontrol et.",
            },
          ],
        },
        {
          h2: "Üyelik modelinin artıları ve eksileri",
          id: "uyelik-arti-eksi",
          blocks: [
            {
              type: "h3",
              text: "Artıları",
            },
            {
              type: "ul",
              items: [
                "**Sahiplik sende kalır.** Hesap, alan adı ve fatura ilişkisi markanın adına durur; ajans değiştiğinde taşınacak bir şey yoktur, yalnızca bir üyelik iptal edilir.",
                "**Yetki gerçekten daraltılabilir.** Alan adı ve kaynak kapsamlı roller sayesinde \"her şeyi görebilir\" ile \"hiçbir şey yapamaz\" arasındaki gri alanı ayarlayabilirsin.",
                "**İz bırakır.** Herkes kendi kullanıcısıyla girdiği için [denetim kayıtları](https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/) kimin neyi ne zaman değiştirdiğini gösterir. Şifre paylaşımında bu bilgi tamamen kaybolur.",
                "**Geri alması anlık.** İş biterse üyeliği iptal edersin; şifre değiştirmek, ekip bilgilendirmek, unutulan bir oturumu kovalamak gerekmez.",
                "**Ek maliyeti yok.** Cloudflare'in belgeleri üye davet etmeyi plana bağlı bir özellik olarak ayırmıyor; yalnızca mevcut bir kullanıcıyı e-posta onayı olmadan doğrudan ekleme Enterprise hesaplara özel ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)).",
              ],
            },
            {
              type: "h3",
              text: "Eksileri",
            },
            {
              type: "ul",
              items: [
                "**Yönetim yükü sende.** Davet etmek, rolü doğru seçmek, ayrılanları temizlemek markanın işi. Kimse hatırlatmaz; altı ay önce ayrılan freelancer hâlâ üye olabilir.",
                "**Rol listesi kalabalık.** Onlarca rol arasından doğru olanı seçmek ilk seferde zaman alır ve yanlış seçim ya iş görmez ya da fazla yetki verir.",
                "**Grup mirası şaşırtır.** İzinlerin birleşim mantığı yüzünden, dar sandığın bir yetki gruptan gelen bir politikayla genişlemiş olabilir.",
                "**Tek Super Administrator riski.** Hesabın tek süper yöneticisi tek bir kişiyse ve o kişiye ulaşılamıyorsa, üyeleri ve faturayı yönetecek kimse kalmaz. En az iki süper yönetici tutmak iyi bir alışkanlık.",
                "**Çok müşterili tarafta ölçeklenmez.** Ajans açısından her müşteri ayrı bir davet, ayrı bir hesap, ayrı bir panel demektir; onlarca müşteride bu tablo dağınıklaşır.",
              ],
            },
          ],
        },
        {
          h2: "Partner (Tenant) modeli nasıl çalışır?",
          id: "partner",
          blocks: [
            {
              type: "p",
              text: "Partner modeli, Cloudflare'in **Tenant** yapısı üzerine kurulu. Cloudflare bunu şöyle tanımlıyor: Tenant API, kanal ve ittifak partnerlerinin müşterileri adına Cloudflare hesaplarını ve hizmetlerini kurup yönetmesine yarayan bir sağlama (provisioning) mekanizmasıdır ([Cloudflare Docs](https://developers.cloudflare.com/tenant/)). Yani bu, bir markanın panelden açıp kapatabileceği bir ayar değil; iki şirket arasındaki ticari ilişkinin teknik karşılığı.",
            },
            {
              type: "p",
              text: "İşleyişi net: Cloudflare ile partner sözleşmesi imzalandıktan sonra Cloudflare özel bir **Tenant hesabı** oluşturur ve partnerin kullanıcısını bu hesaba **Tenant admin** olarak ekler. Tenant admin'ler, Tenant'ın içindeki bütün hesaplar ve alan adları için varsayılan **Super Administrator** olurlar ([Cloudflare Docs](https://developers.cloudflare.com/tenant/glossary/)). Partner, müşteri hesaplarını API ya da panel üzerinden açar, aboneliklerini tanımlar ve yönetir.",
            },
            {
              type: "p",
              text: "Bunun yanında bir de **Organizations** var: birden fazla Cloudflare hesabını tek bir üst kapsayıcıda toplayan, hesap başına ayrı üyelik gerektirmeden yönetim sağlayan yapı. Organizations üyeleri alt hesaplarda otomatik olarak Super Administrator yetkisine sahip olur; oluşturmak için Enterprise hesap gerekiyor ve özellik public beta aşamasında ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/organizations/)). Kurumsal ölçekte birden çok markayı yöneten yapılar için partner modeline alternatif bir yol.",
            },
          ],
        },
        {
          h2: "Partner modelinin artıları ve eksileri",
          id: "partner-arti-eksi",
          blocks: [
            {
              type: "h3",
              text: "Artıları",
            },
            {
              type: "ul",
              items: [
                "**Kurulum yükü markadan çıkar.** Hesap açma, alan adı ekleme, abonelik tanımlama gibi adımlar partner tarafında ve programatik olarak yürür.",
                "**Çok müşterili yönetim için tasarlanmış.** Onlarca hesabı tek yapıdan yönetmek, davetlerle uğraşmaktan hem hızlı hem tutarlıdır.",
                "**Tek muhatap.** Fatura, destek ve teknik sorumluluk tek elde toplanır; markanın ayrı bir Cloudflare ilişkisi kurması gerekmez.",
                "**Standart kurulum.** Aynı güvenlik ve performans ayarlarını her müşteri hesabında tekrarlanabilir biçimde uygulamak mümkün olur.",
              ],
            },
            {
              type: "h3",
              text: "Eksileri",
            },
            {
              type: "ul",
              items: [
                "**Herkes için değil.** Tenant yapısı Cloudflare ile imzalanmış bir partner sözleşmesi gerektirir; \"biz de partner olalım\" diyerek bir öğleden sonrada geçilebilecek bir model değil.",
                "**Varsayılan yetki dar değil, en geniş olanı.** Tenant admin, içerideki tüm hesaplarda varsayılan olarak Super Administrator'dır. Üyelik modelindeki \"sadece DNS\" inceliği burada baştan yoktur.",
                "**Bağımlılık yaratır.** Hesabı partner açtıysa, ilişki bittiğinde devir bir teknik iş kalemine dönüşür; üyelik iptal etmek kadar basit değildir.",
                "**Şeffaflık sözleşmeye bağlıdır.** Markanın kendi paneline ne kadar erişeceği, ne göreceği ve neyi değiştirebileceği teknik bir varsayılan değil, taraflar arasındaki anlaşmanın konusudur.",
                "**Küçük ölçekte fazla ağır.** Tek alan adı ve tek markayla çalışan bir yapı için kurduğu soyutlama, çözdüğü sorundan büyüktür.",
              ],
            },
          ],
        },
        {
          h2: "Peki hangisi? Kozmetik markası ve ajansı için pratik karar",
          id: "karar",
          blocks: [
            {
              type: "p",
              text: "Tek alan adı, tek marka ve dışarıdan destek alan bir yapı — yani kozmetik markalarının neredeyse tamamı — için doğru cevap **rol kapsamlı üyeliktir**. Hesap markanın adına açılır, ajans kendi kullanıcısıyla ve yaptığı işe karşılık gelen rolle davet edilir. Partner modeli, çok sayıda müşteri hesabını sağlayan ve yöneten taraflar için tasarlanmış; bir markanın \"daha kolay olsun\" diye tercih edebileceği bir menü seçeneği değil.",
            },
            {
              type: "p",
              text: "Erişim verirken işini kolaylaştıracak kısa bir kontrol listesi:",
            },
            {
              type: "ul",
              items: [
                "Hesabı **kendi adına** aç; alan adı ve fatura ilişkisi markada kalsın.",
                "Ajansa **Super Administrator verme**; işine karşılık gelen en dar rolü seç ve mümkünse alan adı kapsamına bağla.",
                "Hesapta **en az iki Super Administrator** bulunsun; tek kişiye bağlı hesap tek arıza noktasıdır.",
                "Herkese **iki adımlı doğrulama** ([2FA](https://developers.cloudflare.com/fundamentals/user-profiles/2fa/)) zorunlu olsun.",
                "Otomasyon ve deploy için kullanıcı değil, **kapsamı dar API token** üret.",
                "Üç ayda bir **üye listesini ve denetim kayıtlarını** gözden geçir; ayrılanları temizle.",
                "Çalışma bittiğinde üyeliği **aynı gün** iptal et — \"belki lazım olur\" diye bırakılan erişimler unutuluyor.",
              ],
            },
            {
              type: "p",
              text: "Bu kavramların haritadaki yerini görmek istersen: [Cloudflare](/tr/kavramlar/cloudflare), [Cloudflare üyelik yetkileri](/tr/kavramlar/cloudflare-uyelik-yetkileri), [Cloudflare partnerlik](/tr/kavramlar/cloudflare-partnerlik) ve altyapı tarafında [DNS](/tr/kavramlar/dns) kavramlarına bakabilirsin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Ajansıma Cloudflare şifremi vermek yerine ne yapmalıyım?",
          a: "Cloudflare panelinde Manage Account → Members ekranından, ajansın kendi e-posta adresine davet gönder ve yapacağı işe karşılık gelen rolü seç. Davet gönderebilmek için Super Administrator rolüne ve doğrulanmış bir e-posta adresine sahip olman gerekir. Böylece ajans kendi kullanıcısıyla girer, yaptığı değişiklikler denetim kayıtlarında ayrışır ve iş bittiğinde tek tıkla erişimi kaldırabilirsin.",
        },
        {
          q: "Ajansa hangi Cloudflare rolünü vermeliyim?",
          a: "Yaptığı işe en yakın olanı. Sadece rapor bakıyorsa Analytics, sürüm sonrası cache temizliyorsa Cache Purge, alan adı kayıtlarını düzenliyorsa DNS, siteyi Cloudflare üzerinde yayınlıyorsa Workers Platform Admin, yalnızca kurulumu denetliyorsa Administrator Read Only yeterlidir. Super Administrator üyeleri ve faturayı da yönetir; dışarıdan bir tarafa vermek için gerçekten güçlü bir gerekçe olmalı.",
        },
        {
          q: "Cloudflare partnerliği bir ajansın kendi kararıyla alabileceği bir şey mi?",
          a: "Hayır. Tenant yapısı, Cloudflare ile imzalanmış bir partner sözleşmesine dayanır; sözleşme sonrası Cloudflare özel bir Tenant hesabı açar ve partnerin kullanıcısını Tenant admin olarak ekler. Panelden açılıp kapatılan bir ayar değildir. Bu yüzden çoğu marka-ajans ilişkisinde pratik seçenek üyelik modelidir.",
        },
        {
          q: "Ajansla yollarımızı ayırırsak erişimi nasıl keserim?",
          a: "Üyelik modelinde Members ekranından ilgili üyeyi bulup erişimini iptal etmen yeterli; hesabın ve ayarların olduğu gibi kalır. Aynı gün ajansa üretilmiş API token'larını da iptal et. Partner modelinde ise hesabı partner açmışsa devir teknik bir iş kalemi olur — bu yüzden sözleşme aşamasında hesap sahipliğinin ve devir koşullarının yazılı olması önemlidir.",
        },
      ],
      sources: [
        {
          label: "Cloudflare. Manage account members. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/manage/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Roles: account-scoped, domain-scoped and resource-scoped roles. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/roles/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Permission policies. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/policies/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Tenant platform overview. Cloudflare Tenant Docs.",
          url: "https://developers.cloudflare.com/tenant/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Tenant glossary. Cloudflare Tenant Docs.",
          url: "https://developers.cloudflare.com/tenant/glossary/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Organizations. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/organizations/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Review audit logs. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/",
          publisher: "Cloudflare Docs",
        },
      ],
      tags: [
        "Cloudflare",
        "Erişim yönetimi",
        "Cloudflare rolleri",
        "Ajans yönetimi",
        "Web altyapısı",
      ],
    },
    en: {
      slug: "cloudflare-account-access-members-vs-partner",
      title: "Cloudflare access: manage it with members, or with a partner?",
      metaTitle: "Cloudflare Members vs Partner Access | Soleach",
      metaDescription:
        "Two ways to give your agency Cloudflare access: a scoped member invite or the partner (Tenant) model. How each works, the pros and cons, and how to choose.",
      excerpt:
        "The Cloudflare account sitting in front of your domain holds the permissions that can take your site offline in one click. There are two models for granting access to an agency or a teammate: scoped membership and the partner (Tenant) structure. Here is what each solves — and what it doesn't.",
      intro: [
        "When you start working with an agency or onboard a new teammate, the access list always begins in the same place: the ad account, Shopify, Search Console. There is one more item on that list that most brands think of last and should think of first — the **Cloudflare account** in front of the domain. DNS records, the SSL certificate, cache rules, redirects and bot policies all live there. Access handed out carelessly can take down the site and the email in a single well-meaning click.",
        "Cloudflare offers two main ways to grant that access: inviting a **member** with a role, or the **partner (Tenant)** structure, where the account is provisioned and managed by a Cloudflare partner. This article puts the two side by side — how they work, what they cost you, what they buy you. The short answer up front: for the vast majority of brands the right route is scoped membership; the partner model is not something an agency can simply opt into, it requires a signed partner agreement with Cloudflare.",
      ],
      sections: [
        {
          h2: "How many ways are there to grant Cloudflare access?",
          id: "options",
          blocks: [
            {
              type: "p",
              text: "In practice there are five, and one of them should be ruled out immediately. Which one you pick decides more than convenience: it decides who holds responsibility, who holds the invoice, and how easily access comes back when the work ends.",
            },
            {
              type: "ul",
              items: [
                "**Sharing the password:** The most common and the worst option. Nobody can tell who changed what, two-factor authentication becomes decorative, and if the password isn't rotated when the work ends, access quietly continues. Cloudflare's member system exists precisely to make this unnecessary.",
                "**Member invite (member + role):** The account stays yours; the agency or teammate signs in with their own Cloudflare user under a limited role. The default — and in most cases the correct — route.",
                "**Partner (Tenant) model:** The account is created and managed by a party holding a Cloudflare partner agreement; you are an account inside that structure.",
                "**Organizations:** A top-level container for managing several Cloudflare accounts at once. It requires an Enterprise account and is in public beta.",
                "**API token:** Access granted to a tool, not a person. For a deploy pipeline or an automation, this — rather than a user invite — is usually the right answer.",
              ],
            },
            {
              type: "p",
              text: "API tokens are not an alternative to the others but a complement: if a script needs to purge cache or write a DNS record, minting a [narrowly scoped token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) for that job is far safer than granting account permissions to whoever runs the script. Revoking a token is also easier than removing a person from an account.",
            },
          ],
        },
        {
          h2: "How member invites work: roles, scopes and policies",
          id: "membership",
          blocks: [
            {
              type: "p",
              text: "Member invites run through **Manage Account → Members** in the Cloudflare dashboard. Two conditions apply to whoever sends the invite: they must hold the **Super Administrator** role and have a **verified email address** ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)). The invited person signs in with their own Cloudflare user — no password is shared, and every change is attributable in the audit log.",
            },
            {
              type: "p",
              text: "Permissions in Cloudflare are not a single checkbox but a **policy**. Each policy combines three parts: the person receiving the permission (actor), the scope it applies to (resource group) and what they may do within it (permission group, i.e. roles) ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)).",
            },
            {
              type: "h3",
              text: "Three scopes: account, domain, resource",
            },
            {
              type: "ul",
              items: [
                "**Account-scoped roles** apply across the whole account and every domain in it. Super Administrator, Administrator, Administrator Read Only, Billing, Analytics, Audit Logs Viewer, Cache Purge, DNS and Minimal Account Access all sit here.",
                "**Domain-scoped roles** apply to one domain inside the account. If you run several brands, or a production and a staging domain, this is how you bind an agency to only the domain they work on.",
                "**Resource-scoped roles** are the finest grain — permissions limited to a single resource such as one Access application or one Tunnel. Cloudflare marks this scope as beta ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/roles/)).",
              ],
            },
            {
              type: "p",
              text: "The role names sound technical, but the choice is simple: the role should match the job. Reading performance reports only? **Analytics**. Purging cache after releases? **Cache Purge**. Handling domain migration and DNS records? **DNS**. Publishing the site on Cloudflare Pages/Workers? **Workers Platform Admin**. Auditing the setup without touching it? **Administrator Read Only**. Super Administrator also covers managing members and billing — handing that to an outside party needs a genuinely strong reason.",
            },
            {
              type: "p",
              text: "One caveat: a member's **effective permissions** are the **union** of what is granted to them directly and what they inherit through group membership. Permissions stack rather than constrain each other, and the Members view shows only directly assigned policies — inherited ones live in the Groups tab ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/policies/)). Before you relax about having granted a narrow role, check the group memberships too.",
            },
          ],
        },
        {
          h2: "The membership model: pros and cons",
          id: "membership-pros-cons",
          blocks: [
            {
              type: "h3",
              text: "Pros",
            },
            {
              type: "ul",
              items: [
                "**Ownership stays with you.** The account, the domain and the billing relationship remain in the brand's name; when the agency changes, nothing has to be migrated — a membership is simply revoked.",
                "**Permissions can genuinely be narrowed.** Domain- and resource-scoped roles let you tune the grey area between \"can see everything\" and \"can do nothing\".",
                "**It leaves a trail.** Because everyone signs in as themselves, the [audit log](https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/) shows who changed what and when. Shared passwords destroy that information entirely.",
                "**Revocation is instant.** When the work ends you revoke the membership — no password rotation, no team-wide announcement, no hunting for a forgotten session.",
                "**No extra cost.** Cloudflare's documentation does not gate member invites behind a plan; only adding an existing user without an email confirmation is Enterprise-only ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/manage-members/manage/)).",
              ],
            },
            {
              type: "h3",
              text: "Cons",
            },
            {
              type: "ul",
              items: [
                "**The admin work is yours.** Inviting, picking the right role and cleaning up leavers is the brand's job. Nobody sends a reminder; the freelancer who left six months ago may still be a member.",
                "**The role list is crowded.** Finding the right one among dozens takes time the first time, and a wrong pick either blocks the work or over-grants.",
                "**Group inheritance surprises people.** Because permissions are a union, a role you believed was narrow may have been widened by a policy inherited from a group.",
                "**Single-Super-Administrator risk.** If one person is the account's only super admin and they are unreachable, nobody can manage members or billing. Keeping at least two is a good habit.",
                "**It doesn't scale on the agency side.** For an agency, every client means another invite, another account, another dashboard; across dozens of clients that gets messy.",
              ],
            },
          ],
        },
        {
          h2: "How does the partner (Tenant) model work?",
          id: "partner",
          blocks: [
            {
              type: "p",
              text: "The partner model is built on Cloudflare's **Tenant** structure. Cloudflare describes the Tenant API as a provisioning mechanism that helps Channel and Alliance partners set up and manage Cloudflare accounts and services for their customers ([Cloudflare Docs](https://developers.cloudflare.com/tenant/)). It is not a setting a brand can switch on in the dashboard; it is the technical expression of a commercial relationship between two companies.",
            },
            {
              type: "p",
              text: "The mechanics are clear: once a partner agreement is signed, Cloudflare creates a dedicated **Tenant account** and adds the partner's user to it as a **Tenant admin**. Tenant admins become the default **Super Administrator** for every account and zone contained in the Tenant ([Cloudflare Docs](https://developers.cloudflare.com/tenant/glossary/)). The partner then provisions customer accounts, subscriptions and zones through the API or the dashboard.",
            },
            {
              type: "p",
              text: "There is also **Organizations**: a top-level container that gathers several Cloudflare accounts so they can be managed without a separate membership on each one. Organization members automatically receive Super Administrator permissions on child accounts; creating one requires an Enterprise account, and the feature is in public beta ([Cloudflare Docs](https://developers.cloudflare.com/fundamentals/organizations/)). For groups running multiple brands at enterprise scale, it is an alternative path to the partner model.",
            },
          ],
        },
        {
          h2: "The partner model: pros and cons",
          id: "partner-pros-cons",
          blocks: [
            {
              type: "h3",
              text: "Pros",
            },
            {
              type: "ul",
              items: [
                "**Setup work leaves the brand.** Creating accounts, adding domains and assigning subscriptions happen on the partner side, programmatically.",
                "**Built for many customers.** Managing dozens of accounts from one structure is faster and more consistent than chasing invitations.",
                "**One point of contact.** Billing, support and technical responsibility sit in one place; the brand doesn't need its own Cloudflare relationship.",
                "**Standardised configuration.** The same security and performance settings can be applied to every customer account repeatably.",
              ],
            },
            {
              type: "h3",
              text: "Cons",
            },
            {
              type: "ul",
              items: [
                "**Not open to everyone.** The Tenant structure requires a signed partner agreement with Cloudflare — not a model you can adopt over an afternoon by deciding to.",
                "**The default permission is the widest one.** A Tenant admin is Super Administrator by default on every account inside. The \"DNS only\" precision of the membership model simply isn't there to begin with.",
                "**It creates lock-in.** If the partner created the account, ending the relationship turns handover into a technical work item rather than a revoked invitation.",
                "**Transparency is contractual.** How much of the dashboard the brand can reach, see and change is not a technical default — it is whatever the agreement says.",
                "**Too heavy at small scale.** For a single brand with a single domain, the abstraction it introduces is larger than the problem it solves.",
              ],
            },
          ],
        },
        {
          h2: "So which one? A practical decision for beauty brands and their agency",
          id: "decision",
          blocks: [
            {
              type: "p",
              text: "For one domain, one brand and outside support — which describes very nearly every cosmetics brand — the right answer is **scoped membership**. The account is opened in the brand's name, and the agency is invited with their own user under a role that matches the work they do. The partner model was designed for parties that provision and operate many customer accounts; it is not a menu option a brand picks to make life easier.",
            },
            {
              type: "p",
              text: "A short checklist for granting access:",
            },
            {
              type: "ul",
              items: [
                "Open the account **in your own name**; keep the domain and billing relationship with the brand.",
                "**Don't hand out Super Administrator**; pick the narrowest role that matches the job and bind it to a domain scope where possible.",
                "Keep **at least two Super Administrators**; an account depending on one person is a single point of failure.",
                "Require **two-factor authentication** ([2FA](https://developers.cloudflare.com/fundamentals/user-profiles/2fa/)) from everyone.",
                "For automation and deploys, mint a **narrowly scoped API token** instead of inviting a user.",
                "Review the **member list and audit logs quarterly**; clean out whoever has left.",
                "Revoke membership **the same day** the work ends — access left in place \"just in case\" is access nobody remembers.",
              ],
            },
            {
              type: "p",
              text: "To see where these sit on the map: [Cloudflare](/en/concepts/cloudflare), [Cloudflare member roles](/en/concepts/cloudflare-member-roles), [Cloudflare partnership](/en/concepts/cloudflare-partnership) and, on the infrastructure side, [DNS](/en/concepts/dns).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What should I do instead of giving my agency my Cloudflare password?",
          a: "Invite them from Manage Account → Members using their own email address, and pick the role that matches the work they will do. To send the invite you need the Super Administrator role and a verified email address. The agency then signs in as themselves, their changes are attributable in the audit log, and you can revoke access in one click when the work ends.",
        },
        {
          q: "Which Cloudflare role should I give an agency?",
          a: "The one closest to the actual job. Analytics if they only read reports, Cache Purge if they clear cache after releases, DNS if they manage domain records, Workers Platform Admin if they publish the site on Cloudflare, Administrator Read Only if they only audit the setup. Super Administrator also manages members and billing, so granting it to an outside party needs a genuinely strong reason.",
        },
        {
          q: "Can an agency simply decide to become a Cloudflare partner?",
          a: "No. The Tenant structure rests on a signed partner agreement with Cloudflare; after the agreement, Cloudflare creates a dedicated Tenant account and adds the partner's user as a Tenant admin. It is not a dashboard toggle. That is why, in most brand–agency relationships, membership is the practical option.",
        },
        {
          q: "How do I cut off access if we part ways with the agency?",
          a: "Under the membership model you find the member in the Members view and revoke their access; the account and its settings stay exactly as they are. Revoke any API tokens created for them the same day. Under the partner model, if the partner created the account, handover becomes a technical work item — which is why account ownership and handover terms belong in the contract from the start.",
        },
      ],
      sources: [
        {
          label: "Cloudflare. Manage account members. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/manage/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Roles: account-scoped, domain-scoped and resource-scoped roles. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/roles/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Permission policies. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/manage-members/policies/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Tenant platform overview. Cloudflare Tenant Docs.",
          url: "https://developers.cloudflare.com/tenant/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Tenant glossary. Cloudflare Tenant Docs.",
          url: "https://developers.cloudflare.com/tenant/glossary/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Organizations. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/organizations/",
          publisher: "Cloudflare Docs",
        },
        {
          label: "Cloudflare. Review audit logs. Cloudflare Fundamentals Docs.",
          url: "https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/",
          publisher: "Cloudflare Docs",
        },
      ],
      tags: [
        "Cloudflare",
        "Access management",
        "Cloudflare roles",
        "Agency operations",
        "Web infrastructure",
      ],
    },
  },
};
