import type { BlogPost } from "@/lib/blog";

export const shopifyShopCampaignsShopifyql: BlogPost = {
  id: "shopify-shop-campaigns-shopifyql",
  publishedAt: "2026-08-15",
  category: "ads",
  locales: {
    tr: {
      slug: "shopify-shop-campaigns-performans-verisi-shopifyql",
      title: "Shopify, kampanya performans verisini ShopifyQL'e açtı: kozmetik markası için ne değişiyor?",
      metaTitle: "Shopify Shop Campaigns Verisi ShopifyQL'de (2026) | Soleach",
      metaDescription: "Shopify, 10 Ağustos'ta Shop Campaigns performans verisini ShopifyQL'e açtı: ad spend, ROAS, CAC tek sorguda. Kozmetik markası için ne anlama geliyor?",
      excerpt: "10 Ağustos 2026'da Shopify, kendi reklam programı Shop Campaigns'in performans verisini — reklam harcaması, ROAS, müşteri edinme maliyeti — ShopifyQL üzerinden sorgulanabilir hale getirdi. Analitik uygulamaları ve BI araçları bu veriyi artık diğer kanallarla yan yana raporlayabiliyor. Ama önemli bir uyarı var: Shop Campaigns'in kendisi şu an Türkiye merkezli işletmelere açık değil.",
      intro: [
        "Shopify'ın hem geliştirici hem tüketici changelog'una 10 Ağustos 2026'da aynı gün düşen madde şu: `shop_campaign_insights` şeması artık ShopifyQL'de kullanılabiliyor ve Shopify'ın kendi reklam programı Shop Campaigns'in kampanya seviyesi performans verisi — reklam harcaması, satış, sipariş, ROAS, ortalama sipariş değeri, ortalama müşteri edinme maliyeti — sorgulanabiliyor ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
        "Pratik karşılığı şu: bu veriyi zaten okuyan bir analitik uygulaman ya da Power BI, Tableau, Looker Studio gibi bir raporlama aracın varsa, Shop Campaigns performansını diğer kanallarla (Meta, Google, TikTok) yan yana görebiliyorsun — ekstra izin ya da entegrasyon işi gerekmeden ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
        "Bu yazıda üç şeyi ayırıyoruz: Shop Campaigns ve ShopifyQL'in ne olduğu, bu entegrasyonun tam olarak neyi açtığı, ve en kritik kısmı — bunun Türkiye merkezli bir kozmetik markası için ne kadar geçerli olduğu. Çünkü Shop Campaigns'in kendisinin bir uygunluk listesi var ve o liste Türkiye'yi kapsamıyor.",
      ],
      sections: [
        {
          h2: "30 saniyede: ne değişti?",
          blocks: [
            {
              type: "ul",
              items: [
                "**Ne oldu:** `shop_campaign_insights` şeması ShopifyQL'de yayına girdi; analitik ve raporlama uygulamaları mevcut `shopifyqlQuery` alanı ve `read_reports` kapsamıyla Shop Campaigns verisini sorgulayabiliyor ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**Ne zaman:** 10 Ağustos 2026.",
                "**Ne sunuluyor:** Kampanya adı, müşteri segmenti ve saatlikten yıllığa zaman boyutlarında reklam harcaması, satış, sipariş, ROAS, ortalama sipariş değeri ve ortalama müşteri edinme maliyeti ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**Kimler kullanabilir:** Triple Whale, Northbeam veya Elevar gibi analitik uygulamalarının sağlayıcıları (kendi entegrasyon takvimlerine bağlı); Power BI, Tableau veya Looker Studio ile özel rapor kuran ekipler; admin içindeki Analytics veya Advertising sekmesi ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
                "**Kritik nokta (bizim yorumumuz):** Bu veri erişimi yalnızca zaten Shop Campaigns çalıştıran mağazalar için anlamlı — ve Shop Campaigns'in kendisi işletme adresine dayalı bir uygunluk listesiyle sınırlı; Türkiye o listede yok ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)).",
              ],
            },
          ],
        },
        {
          h2: "Shop Campaigns ve ShopifyQL tam olarak ne?",
          blocks: [
            {
              type: "p",
              text: "Shop Campaigns, Shopify'ın kendi reklam programı. Shopify'ın tanımıyla \"belirlenen bir edinme maliyetiyle müşteri kazanmana ve dönüştürmene yardımcı olan bir reklam programı\"; kampanyalar Shop app, Shop web sitesi, Shopify Product Network ve isteğe bağlı üçüncü taraf yerleşimlerinde çalışıyor, yeni ya da tekrar kazanılan müşteriler gibi segmentler için ayrı maksimum maliyet belirlenebiliyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns)).",
            },
            {
              type: "p",
              text: "ShopifyQL ise ayrı bir şey: Shopify'ın mağaza verisini sorgulamak için kullandığı genel amaçlı dil. Shopify'ın kendi tarifiyle \"mağazanın ticaret verisini uygulamanın ve kullanıcılarının grafikleştirebileceği, gömebileceği ve üzerinde işlem yapabileceği yapılandırılmış sonuçlara çeviriyor\"; aynı sorgu Shopify admin'inde, GraphQL Admin API üzerinden bir uygulamada ya da Python SDK ile bir not defterinde değişmeden çalışıyor ([Shopify.dev](https://shopify.dev/docs/apps/build/shopifyql)).",
            },
            {
              type: "p",
              text: "10 Ağustos'ta değişen, bu iki şeyin kesişimi: Shop Campaigns'in performans verisi artık ShopifyQL'in okuyabildiği şemalardan biri (`shop_campaign_insights`). Daha önce bu veriye admin panelindeki Analytics veya Advertising sekmesinden bakabiliyordun; şimdi aynı veriyi kod üzerinden, diğer kaynaklarla birleştirerek çekebiliyorsun.",
            },
          ],
        },
        {
          h2: "Bu entegrasyon tam olarak neyi açıyor?",
          blocks: [
            {
              type: "p",
              text: "Teknik tarafta değişen az: `shop_campaign_insights` şeması, diğer ShopifyQL şemalarında kullandığın `shopifyqlQuery` alanıyla sorgulanıyor ve zaten ShopifyQL kullanan bir uygulama için yeni bir kapsam ya da entegrasyon işi gerekmiyor ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
            },
            {
              type: "quote",
              text: "If you use an analytics app like Triple Whale, Northbeam, or Elevar, your provider can now integrate Shop Campaigns data into their dashboards. Check with your provider on their timeline.",
              cite: "Shopify Changelog, 2026",
              citeUrl: "https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools",
            },
            {
              type: "p",
              text: "Aynı duyuru, kendi raporlama altyapısını kuran ekipler için de bir yol tarif ediyor: Power BI, Tableau ya da Looker Studio gibi araçlarla özel rapor üretiyorsan, bu veriye ShopifyQL üzerinden bağlanabiliyorsun ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
            },
            {
              type: "p",
              text: "Geliştirici changelog'unda küçük bir not daha var: Analytics Web Components, Shop Campaigns metriklerini herhangi bir veri depolama gerekmeden doğrudan bir uygulamanın arayüzüne gömmeyi sağlıyor; Analytics Annotations API ise mağaza sahibinin analitik grafiklerine \"kampanya başladı\", \"bütçe değişti\" gibi notlar eklemeyi mümkün kılıyor ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
            },
          ],
        },
        {
          h2: "Kozmetik markası için pratik faydası ne? (yorumumuz)",
          blocks: [
            {
              type: "p",
              text: "Birden fazla kanalda reklam veren bir güzellik markasının en sık yaşadığı sorun, her platformun performansını kendi panelinde tutması: Meta kendi ROAS'ını, Google kendi Yeni Müşteri Değerini, TikTok kendi sonuçlarını gösteriyor. Bu veriyi tek bir yerde birleştirmek genelde manuel bir Excel işi ya da ayrı bir BI aboneliği demek. Shop Campaigns'i kullanan bir mağaza için bu entegrasyon, en azından o programın verisini bu manuel işten çıkarıyor.",
            },
            {
              type: "p",
              text: "Burada önemli bir ayrım var: Shop Campaigns, Shopify'ın kendi birinci taraf reklam programı — veri doğrudan Shopify'ın kendi sisteminden geliyor. Bu, [Meta pixel ölçümünde yaşanan olay eşleşmesi ve deduplication sorunlarından](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) yapısal olarak farklı bir katman; üçüncü taraf bir reklam platformunun tarayıcı/sunucu tarafı izleme zincirine bağlı değil.",
            },
            {
              type: "p",
              text: "Ajans tarafında bu tür entegrasyonların değeri, [reklam ajanslarının Shopify'ı sevme sebebiyle](/tr/blog/reklam-ajanslari-neden-shopify-seviyor) aynı kökten geliyor: kurulum ve raporlama altyapısını haftalar süren bir geliştirme işinden, mevcut BI aracına birkaç sorgu eklemeye indiriyor. Ama bu faydanın gerçekleşmesi için önce bir şartın karşılanması gerekiyor — mağazanın Shop Campaigns'e erişebiliyor olması.",
            },
          ],
        },
        {
          h2: "Türkiye merkezli bir marka için doğrudan geçerli mi?",
          blocks: [
            {
              type: "p",
              text: "Kısa cevap: bugün için hayır. Shopify'ın uygunluk sayfası, Shop Campaigns kullanmak isteyen bir mağazanın işletme adresinin belirli bir ülke listesinde olmasını şart koşuyor: \"Your business address is based in Australia, Austria, Belgium, Bulgaria, Canada, Croatia, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Portugal, Slovenia, Spain, the United Kingdom, or the United States\" ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)). Türkiye bu listede yok.",
            },
            {
              type: "p",
              text: "İkinci şart da bağımsız bir engel: mağazanın Shopify Payments'ının AUD, CAD, EUR, GBP veya USD kabul etmesi gerekiyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)). Shopify Payments'ın desteklediği ülkeler listesinde de Türkiye yer almıyor ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)) — yani bu ikinci şart üzerinden de bir gedik yok.",
            },
            {
              type: "p",
              text: "Burada bir ayrım netleştirmekte fayda var, çünkü karıştırılması kolay: ShopifyQL'in kendisi bölgesel bir kısıtlama taşımıyor, dünya genelinde her mağaza satış, sipariş ve envanter verisini zaten sorgulayabiliyor. Erişilemeyen tek şey `shop_campaign_insights` şeması — çünkü altındaki program, işletme adresi listede olmayan bir mağazada hiç çalışmıyor. Yani Türkiye merkezli bir mağaza için sorun ShopifyQL değil, Shop Campaigns'in kendisinin coğrafi kapsamı.",
            },
            {
              type: "p",
              text: "Pratik istisna şu olabilir: işletme adresi listede sayılan bir ülkede kayıtlı olan (örneğin bir AB yan şirketi üzerinden satış yapan) ve o ülke için Shopify Payments hesabı bulunan bir marka ya da bu markaya hizmet veren bir ajans, bugün itibarıyla Shop Campaigns'e ve dolayısıyla bu ShopifyQL entegrasyonuna erişebilir. Ama yalnızca o pazara satış yapmak (bir Shopify Markets kaydı eklemek) yeterli değil — şart açıkça işletme adresi; kaynak bunun ötesinde bir esneklikten bahsetmiyor.",
            },
          ],
        },
        {
          h2: "Bugün ne yapmalısın?",
          blocks: [
            {
              type: "ul",
              items: [
                "**Uygun bir ülkede Shop Campaigns çalıştıran bir mağazan/müşterin varsa:** Mevcut analitik sağlayıcına (Triple Whale, Northbeam, Elevar vb.) bu entegrasyonun kendi ürününe ne zaman yansıyacağını sor; sağlayıcının kendi zaman çizelgesine bağlı olduğunu unutma ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
                "**Kendi BI kurulumun varsa (Power BI, Tableau, Looker Studio):** `shop_campaign_insights` şemasını mevcut ShopifyQL sorgularına ekleyip test et; yeni bir kapsam istemesi gerekmiyor ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**Türkiye merkezli bir markaysan:** Bu özelliği bugün kullanamıyor olman, ShopifyQL'in geri kalanını — satış, sipariş, envanter verisini — kullanmanı engellemiyor; o taraf zaten açık ve bölgesel kısıt taşımıyor.",
                "**Genel eğilimi not et:** Shopify, kendi reklam programının verisini platformun analitik altyapısına entegre ediyor. Shop Campaigns'in coğrafi kapsamı genişlerse (bugünkü listeye yeni ülkeler eklenirse), bu ShopifyQL entegrasyonu ilk günden hazır olacak; izlemeye değer bir sinyal.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Shop Campaigns şu an Türkiye'de kullanılabiliyor mu?",
          a: "Hayır. Shopify'ın uygunluk sayfası, mağazanın işletme adresinin belirli bir ülke listesinde olmasını (Avustralya, Kanada, ABD ve çoğunlukla AB/AEA ülkeleri) ve Shopify Payments'ın AUD, CAD, EUR, GBP veya USD kabul etmesini şart koşuyor; Türkiye ikisinde de yok ([Shopify Yardım Merkezi](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)).",
        },
        {
          q: "Türkiye'deki bir mağaza için ShopifyQL de mi kapalı?",
          a: "Hayır, farklı konular. ShopifyQL, Shopify'ın genel sorgu dili ve dünya genelinde her mağazada satış, sipariş ve envanter verisi için çalışıyor ([Shopify.dev](https://shopify.dev/docs/apps/build/shopifyql)). Erişilemeyen tek şey `shop_campaign_insights` şeması — çünkü altındaki Shop Campaigns programı, işletme adresi uygunluk listesinde olmayan bir mağazada zaten hiç çalışmıyor.",
        },
        {
          q: "Bu veriyi hangi araçlarla görebilirim?",
          a: "Triple Whale, Northbeam veya Elevar gibi analitik uygulamaları — sağlayıcının kendi entegrasyon takvimine bağlı olarak — ve Power BI, Tableau, Looker Studio gibi BI araçları ShopifyQL üzerinden bağlanabiliyor. Ayrıca admin içindeki Analytics veya Advertising sekmesinden doğrudan da görülebiliyor ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
        },
        {
          q: "Bu, Meta ya da Google piksel ölçümünün yerini mi alıyor?",
          a: "Hayır, farklı bir katman. Shop Campaigns, Shopify'ın kendi birinci taraf reklam programı ve verisi doğrudan Shopify'ın sisteminden geliyor; Meta ve Google'daki piksel/Conversions API ölçümü ise ayrı platformların kendi reklamlarını izliyor ve kendi eşleşme, deduplication sorunlarını taşıyor. Bu farkı [Meta pixel ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) ayrıntılı işledik.",
        },
        {
          q: "Bu entegrasyon için ekstra bir ücret ya da izin gerekiyor mu?",
          a: "Zaten ShopifyQL sorgulayan bir uygulama için Shopify yeni bir kapsam ya da entegrasyon işi gerekmediğini belirtiyor; mevcut `read_reports` scope'u yeterli ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)). Kaynaklar ayrı bir ücretten bahsetmiyor; bu konuda net bilgi için kendi analitik sağlayıcınla ya da Shopify ile teyitleşmen gerekir.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, 10 Ağustos). Shop Campaigns performance data now available via ShopifyQL. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/shop-campaigns-shopifyql",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026, 10 Ağustos). See Shop Campaigns performance in your analytics tools. Shopify Changelog.",
          url: "https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shop Campaigns. Shopify Yardım Merkezi.",
          url: "https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shop Campaigns requirements and compliance guidelines. Shopify Yardım Merkezi.",
          url: "https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility",
          publisher: "Shopify",
        },
        {
          label: "Shopify. About ShopifyQL. Shopify.dev.",
          url: "https://shopify.dev/docs/apps/build/shopifyql",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Supported countries for Shopify Payments. Shopify Yardım Merkezi.",
          url: "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "Shop Campaigns",
        "ShopifyQL",
        "Reklam ölçümleme",
        "E-ticaret",
      ],
    },
    en: {
      slug: "shopify-shop-campaigns-performance-data-shopifyql",
      title: "Shopify opens campaign performance data to ShopifyQL: what changes for beauty brands?",
      metaTitle: "Shopify Shop Campaigns Data in ShopifyQL (2026) | Soleach",
      metaDescription: "Shopify opened Shop Campaigns performance data to ShopifyQL on August 10: ad spend, ROAS, CAC in one query. What does this mean for beauty brands?",
      excerpt: "On August 10, 2026 Shopify made performance data from its own ad program, Shop Campaigns — ad spend, ROAS, customer acquisition cost — queryable through ShopifyQL. Analytics apps and BI tools can now report it alongside other channels. One important caveat: Shop Campaigns itself isn't yet open to Turkey-based businesses.",
      intro: [
        "The entry that landed in both Shopify's developer and consumer changelog on the same day, August 10, 2026: the `shop_campaign_insights` schema is now available in ShopifyQL, and campaign-level performance data from Shopify's own ad program, Shop Campaigns — ad spend, sales, orders, ROAS, average order value, average customer acquisition cost — can be queried ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
        "The practical upshot: if you already have an analytics app or a reporting tool like Power BI, Tableau or Looker Studio reading this kind of data, you can now see Shop Campaigns performance alongside your other channels (Meta, Google, TikTok) — no new scope or integration work required ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
        "This piece separates three things: what Shop Campaigns and ShopifyQL actually are, what this integration technically unlocks, and — the most critical part — how much of it applies to a Turkey-based beauty brand. Because Shop Campaigns itself has an eligibility list, and that list doesn't include Turkey.",
      ],
      sections: [
        {
          h2: "In 30 seconds: what changed?",
          blocks: [
            {
              type: "ul",
              items: [
                "**What happened:** The `shop_campaign_insights` schema went live in ShopifyQL; analytics and reporting apps can query Shop Campaigns data using the existing `shopifyqlQuery` field with the `read_reports` scope ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**When:** August 10, 2026.",
                "**What's available:** Ad spend, sales, orders, ROAS, average order value and average customer acquisition cost, by campaign name, customer segment, and time dimensions from hourly to yearly ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**Who can use it:** Providers of analytics apps like Triple Whale, Northbeam or Elevar (on their own integration timeline); teams building custom reports in Power BI, Tableau or Looker Studio; the Analytics or Advertising tab in the admin ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
                "**The critical point (our reading):** This data access only matters for stores already running Shop Campaigns — and Shop Campaigns itself is gated by a business-address eligibility list that doesn't include Turkey ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)).",
              ],
            },
          ],
        },
        {
          h2: "What exactly are Shop Campaigns and ShopifyQL?",
          blocks: [
            {
              type: "p",
              text: "Shop Campaigns is Shopify's own ad program. In Shopify's own words, it's \"an ads program that helps you acquire and convert customers at a set cost per acquisition\"; campaigns run across the Shop app, the Shop website, the Shopify Product Network and optional third-party placements, with segment overrides available for groups such as new or lapsed customers ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns)).",
            },
            {
              type: "p",
              text: "ShopifyQL is a separate thing: Shopify's general-purpose language for querying store data. Shopify describes it as turning \"a store's commerce data into structured results your app and its users can chart, embed, and act on\"; the same query runs unchanged in the Shopify admin, through the GraphQL Admin API in an app, or in a notebook via the Python SDK ([Shopify.dev](https://shopify.dev/docs/apps/build/shopifyql)).",
            },
            {
              type: "p",
              text: "What changed on August 10 is the intersection of the two: Shop Campaigns performance data is now one of the schemas ShopifyQL can read (`shop_campaign_insights`). Previously you could see that data in the Analytics or Advertising tab of the admin; now you can pull the same data through code, joined with other sources.",
            },
          ],
        },
        {
          h2: "What does this integration actually unlock?",
          blocks: [
            {
              type: "p",
              text: "On the technical side, little changes: the `shop_campaign_insights` schema is queried through the same `shopifyqlQuery` field used for other ShopifyQL schemas, and no new scope or integration work is required for an app that already queries ShopifyQL ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
            },
            {
              type: "quote",
              text: "If you use an analytics app like Triple Whale, Northbeam, or Elevar, your provider can now integrate Shop Campaigns data into their dashboards. Check with your provider on their timeline.",
              cite: "Shopify Changelog, 2026",
              citeUrl: "https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools",
            },
            {
              type: "p",
              text: "The same announcement lays out a path for teams building their own reporting too: if you build custom reports in tools like Power BI, Tableau or Looker Studio, you can connect to this data through ShopifyQL ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
            },
            {
              type: "p",
              text: "There's a smaller note in the developer changelog too: Analytics Web Components let you embed Shop Campaigns metrics directly in an app's UI with no data storage required, and the Analytics Annotations API lets a merchant add annotations — such as \"campaign started\" or \"budget changed\" — to their analytics charts ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
            },
          ],
        },
        {
          h2: "What's the practical benefit for a beauty brand? (our reading)",
          blocks: [
            {
              type: "p",
              text: "The most common problem for a beauty brand advertising across multiple channels is that each platform keeps its own performance in its own dashboard: Meta shows its own ROAS, Google its own New Customer Value, TikTok its own results. Unifying that into one view is usually a manual spreadsheet job or a separate BI subscription. For a store running Shop Campaigns, this integration at least removes that program's data from the manual work.",
            },
            {
              type: "p",
              text: "One distinction matters here: Shop Campaigns is Shopify's own first-party ad program — the data comes directly from Shopify's own system. That's structurally different from [the event-matching and deduplication problems that show up in Meta Pixel measurement](/en/blog/meta-pixel-measurement-errors-attribution); it isn't dependent on a third-party ad platform's browser/server tracking chain.",
            },
            {
              type: "p",
              text: "On the agency side, the value of this kind of integration comes from the same root as [why ad agencies love Shopify](/en/blog/why-ad-agencies-love-shopify): it turns setup and reporting infrastructure from a weeks-long build into a few added queries in an existing BI tool. But that benefit only materializes once one condition is met — the store has to be able to access Shop Campaigns in the first place.",
            },
          ],
        },
        {
          h2: "Does this apply directly to a Turkey-based brand?",
          blocks: [
            {
              type: "p",
              text: "Short answer: not today. Shopify's eligibility page requires a store's business address to be on a specific list of countries: \"Your business address is based in Australia, Austria, Belgium, Bulgaria, Canada, Croatia, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Portugal, Slovenia, Spain, the United Kingdom, or the United States\" ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)). Turkey isn't on that list.",
            },
            {
              type: "p",
              text: "A second requirement is an independent blocker: the store's Shopify Payments must accept AUD, CAD, EUR, GBP or USD ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)). Turkey doesn't appear on Shopify Payments' list of supported countries either ([Shopify Help Center](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)) — so there's no gap through that second condition either.",
            },
            {
              type: "p",
              text: "One distinction worth being precise about, because it's easy to conflate: ShopifyQL itself carries no regional restriction — every store worldwide can already query its sales, order and inventory data through it. What isn't accessible is specifically the `shop_campaign_insights` schema, because the program underneath it simply doesn't run for a store whose business address isn't on the list. For a Turkey-based store, the constraint isn't ShopifyQL — it's Shop Campaigns' own geographic scope.",
            },
            {
              type: "p",
              text: "The practical exception would be a brand — or an agency serving one — whose business address is registered in one of the listed countries (for instance, through an EU subsidiary that sells through it) and that holds a Shopify Payments account for that country; such a setup could access Shop Campaigns, and therefore this ShopifyQL integration, today. But simply selling into that market by adding a Shopify Markets entry isn't enough on its own — the requirement is explicitly the business address, and the source doesn't describe any flexibility beyond that.",
            },
          ],
        },
        {
          h2: "What should you do today?",
          blocks: [
            {
              type: "ul",
              items: [
                "**If you or a client runs Shop Campaigns in an eligible country:** Ask your analytics provider (Triple Whale, Northbeam, Elevar, etc.) when this integration lands in their product — it depends on the provider's own timeline ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
                "**If you run your own BI stack (Power BI, Tableau, Looker Studio):** Add the `shop_campaign_insights` schema to your existing ShopifyQL queries and test it — it shouldn't require a new scope ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)).",
                "**If you're a Turkey-based brand:** Not being able to use this feature today doesn't block you from the rest of ShopifyQL — sales, order and inventory data are already open and carry no regional restriction.",
                "**Note the broader trend:** Shopify is integrating its own ad program's data into the platform's analytics layer. If Shop Campaigns' geographic scope expands (new countries added to today's list), this ShopifyQL integration will already be in place — worth watching.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is Shop Campaigns available in Turkey right now?",
          a: "No. Shopify's eligibility page requires the store's business address to be on a specific list of countries (Australia, Canada, the US, and most EU/EEA countries) and Shopify Payments to accept AUD, CAD, EUR, GBP or USD; Turkey is on neither list ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility)).",
        },
        {
          q: "Is ShopifyQL also closed off for a Turkey-based store?",
          a: "No, that's a different matter. ShopifyQL is Shopify's general query language and works for every store worldwide for sales, order and inventory data ([Shopify.dev](https://shopify.dev/docs/apps/build/shopifyql)). What's inaccessible is specifically the `shop_campaign_insights` schema, because the Shop Campaigns program underneath it doesn't run for a store whose business address isn't on the eligibility list.",
        },
        {
          q: "Which tools can I use to see this data?",
          a: "Analytics apps like Triple Whale, Northbeam or Elevar — depending on the provider's own integration timeline — and BI tools like Power BI, Tableau or Looker Studio can connect through ShopifyQL. It's also visible directly in the Analytics or Advertising tab in the admin ([Shopify Changelog, 2026](https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools)).",
        },
        {
          q: "Does this replace Meta or Google pixel measurement?",
          a: "No, it's a different layer. Shop Campaigns is Shopify's own first-party ad program, and its data comes directly from Shopify's system; Meta and Google pixel/Conversions API measurement tracks each platform's own ads and carries its own matching and deduplication issues. We covered that distinction in detail in [our piece on Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution).",
        },
        {
          q: "Does this integration require an extra fee or permission?",
          a: "Shopify states that no new scope or integration work is required for an app that already queries ShopifyQL; the existing `read_reports` scope is sufficient ([Shopify, 2026](https://shopify.dev/changelog/shop-campaigns-shopifyql)). The sources don't mention a separate fee; confirm current pricing directly with your analytics provider or Shopify.",
        },
      ],
      sources: [
        {
          label: "Shopify. (2026, August 10). Shop Campaigns performance data now available via ShopifyQL. Shopify developer changelog.",
          url: "https://shopify.dev/changelog/shop-campaigns-shopifyql",
          publisher: "Shopify",
        },
        {
          label: "Shopify. (2026, August 10). See Shop Campaigns performance in your analytics tools. Shopify Changelog.",
          url: "https://changelog.shopify.com/posts/see-shop-campaigns-performance-in-your-analytics-tools",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shop Campaigns. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Shop Campaigns requirements and compliance guidelines. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/online-sales-channels/shop/shop-campaigns/eligibility",
          publisher: "Shopify",
        },
        {
          label: "Shopify. About ShopifyQL. Shopify.dev.",
          url: "https://shopify.dev/docs/apps/build/shopifyql",
          publisher: "Shopify",
        },
        {
          label: "Shopify. Supported countries for Shopify Payments. Shopify Help Center.",
          url: "https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries",
          publisher: "Shopify",
        },
      ],
      tags: [
        "Shopify",
        "Shop Campaigns",
        "ShopifyQL",
        "Ad measurement",
        "Ecommerce",
      ],
    },
  },
};
