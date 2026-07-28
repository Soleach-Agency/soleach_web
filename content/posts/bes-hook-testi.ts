import type { BlogPost } from "@/lib/blog";

export const besHookTesti: BlogPost = {
  id: "bes-hook-testi",
  publishedAt: "2026-07-26",
  category: "creative",
  locales: {
    tr: {
      slug: "ayni-urun-5-farkli-hook-hangisi-durduruyor",
      title: "Aynı ürün, 5 farklı hook: hangisi durduruyor?",
      metaTitle: "5 Farklı Hook Testi: Hangisi Gerçekten Durduruyor? | Soleach",
      metaDescription: "Aynı ürün için 5 hook test etmek doğru bir fikir. Ama kazananı yanlış seçmek çok kolay: yanlış pozitif riski, erken bakma ve güç sorunu — kaynaklı rehber.",
      excerpt: "Hook testi doğru bir refleks; sorun testi okuma biçiminde. Dikkati kazanma ile tutmanın neden farklı işler olduğunu, 5 varyantın yanlış pozitif riskini nasıl büyüttüğünü ve kazananı ne zaman ciddiye alabileceğini inceledik.",
      intro: [
        "Aynı serumu anlatan beş farklı açılış yazdın. Biri sorun tanımıyla başlıyor, biri sonuçla, biri fiyatla, biri bir itirazla, biri de doğrudan ürünle. Hepsini yayına koyup \"hangisi tutuyorsa onu ölçekleriz\" demek, güzellik markalarında en sık verilen ve aslında doğru olan karar.",
        "Doğru olmayan kısım sonrasında başlıyor: iki gün sonra panele bakıp en yüksek tıklama oranına sahip olanı \"kazanan\" ilan etmek. Bu adımda çoğu marka, kreatif hakkında değil gürültü hakkında karar veriyor.",
        "Bu yazıda hook'un neden bu kadar belirleyici olduğunu, beş varyantı aynı anda test etmenin istatistiksel bedelini ve bir kazananı ne zaman ciddiye alabileceğini kaynaklarıyla anlatıyoruz.",
      ],
      sections: [
        {
          h2: "Hook neden bu kadar belirleyici?",
          blocks: [
            {
              type: "p",
              text: "Çünkü dikkat tek bir olay değil, iki ayrı aşama: dikkati kazanmak ve dikkati tutmak. Reklam literatüründe bu ikisi ayrı ayrı ölçülüyor ve ikisi birlikte sosyal medya reklamcılığının darboğazı olarak tanımlanıyor ([Bruns ve diğerleri, 2025](https://doi.org/10.1080/00913367.2025.2524186)). Hook, birinci aşamanın tamamıdır: geri kalan kreatif ne kadar iyi olursa olsun, ilk aşama geçilmezse ikinci aşama hiç başlamaz.",
            },
            {
              type: "p",
              text: "Bu ölçeğin ne kadar küçük olduğunu görmek için sektörün kendi ölçüm standardına bakmak yeterli. Media Rating Council'ın mobil görüntülenebilirlik kılavuzuna göre bir mobil görüntülü reklamın \"görüntülenebilir gösterim\" sayılması için piksellerinin en az %50'sinin ekranda ve en az bir kesintisiz saniye boyunca durması gerekiyor; kılavuz bu şartın haber akışı (News Feed) ortamlarında da aynen geçerli olduğunu açıkça yazıyor. Video reklamlarda eşik biraz daha uzun: aynı piksel şartını sağlayan iki kesintisiz saniyelik oynatma ([Media Rating Council, 2016](https://mediaratingcouncil.org/sites/default/files/Standards/062816%20Mobile%20Viewable%20Guidelines%20Final.pdf)).",
            },
            {
              type: "p",
              text: "Yani reklamının \"görüldü\" sayılması için gereken süre iki saniye. Hook'un işi bu iki saniyeyi kazanmak değil, bu iki saniyeyi üçüncüye çevirmek. Bu yüzden hook testi bir estetik tercih meselesi değil, [hunideki](/tr/kavramlar/funnel) ilk kapının testidir.",
            },
            {
              type: "h3",
              text: "Beş hook yazarken değiştirmen gereken tek şey",
            },
            {
              type: "ul",
              items: [
                "Açılış cümlesi ve ilk karede görünen şey değişsin.",
                "Ürün, teklif, gövde metni, CTA ve son kare aynı kalsın.",
                "Kurgu temposu ve müzik aynı kalsın — bunlar da tek başına performansı değiştirir.",
                "Her varyantın aynı reklam setinde, aynı kitleye ve aynı bütçeyle yayınlandığından emin ol.",
              ],
            },
            {
              type: "p",
              text: "Bir varyantta hem açılışı hem müziği hem CTA'yı değiştirdiysen, kazananı bulsan bile neyin kazandığını bilemezsin — ve bir sonraki kreatife taşıyabileceğin hiçbir öğrenme üretmemiş olursun.",
            },
          ],
        },
        {
          h2: "5 hook'u aynı anda test etmek doğru mu?",
          blocks: [
            {
              type: "p",
              text: "Fikir olarak evet: kreatif çeşitliliği olmadan öğrenme olmaz. Bedeli ise istatistiksel. İki varyantı karşılaştırdığında tek bir karşılaştırma yaparsın; beş varyant koyduğunda karşılaştırma sayısı artar ve tesadüfen \"anlamlı\" görünen bir fark bulma ihtimalin de onunla birlikte yükselir.",
            },
            {
              type: "p",
              text: "Bu, deneysel tasarımın bilinen bir problemi. Kohavi, Deng ve Vermeer, KDD 2022'de yayımlanan çalışmalarında çoklu varyant kullanmanın, aynı fikri defalarca yinelemenin ve veri işlemede esnek davranmanın çoklu hipotez testi nedeniyle yanlış pozitif oranını yükselttiğini yazıyor ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)).",
            },
            {
              type: "p",
              text: "Pratik sonucu şu: beş hook test etmekten vazgeçmene gerek yok, ama beş varyantlı bir testten çıkan \"kazanan\", iki varyantlı bir testten çıkan kazanandan daha zayıf bir kanıttır. Aynı güvene ulaşmak için ya daha fazla veriye ya da bir tekrar turuna ihtiyacın var.",
            },
          ],
        },
        {
          h2: "Kazananı nasıl yanlış seçiyorsun?",
          blocks: [
            {
              type: "p",
              text: "Üç yaygın hata var ve üçü de aynı yerden besleniyor: sonucu erken ve seçici okumak.",
            },
            {
              type: "h3",
              text: "1. Sürekli bakıp iyi göründüğü an durdurmak",
            },
            {
              type: "p",
              text: "Aynı çalışma, ticari bir A/B test aracının erken dönemde neredeyse gerçek zamanlı sonuç göstermesi yüzünden kullanıcıların veriye sürekli bakıp istatistiksel anlamlılığa ulaştığı anda testi durdurduğunu — ve bu tür çoklu testin birinci tip hata oranını ciddi biçimde şişirdiğini aktarıyor ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Reklam panelinde günde üç kez sonuca bakıp \"tamam, bu kazandı\" demek tam olarak bu davranıştır.",
            },
            {
              type: "h3",
              text: "2. Yetersiz güçle test etmek",
            },
            {
              type: "p",
              text: "İstatistiksel güç, gerçekten bir fark varsa onu yakalayabilme olasılığıdır. Aynı makale, düşük güçle yürütülen deneylerin güvenilir olmadığını başlık düzeyinde belirtiyor ve incelediği örnekte deneyin öncesi gücünün yaklaşık %3 olduğunu — yani ciddi biçimde yetersiz güçlü olduğunu — hesaplıyor. Günlük 200 TL bütçeyle iki gün dönen beş varyantlı bir test, çoğu zaman bu tarafta yer alır.",
            },
            {
              type: "h3",
              text: "3. Çarpıcı sonuca sevinmek",
            },
            {
              type: "p",
              text: "Sonuç ne kadar çarpıcıysa, o kadar şüphelenmek gerekir. Yazarlar bunu Twyman yasasıyla özetliyor: ilginç ya da farklı görünen her rakam genellikle yanlıştır. Kendi örneklerinde %300'ün üzerinde bir dönüşüm artışı gördüklerinde, Airbnb, Booking, Amazon ve Microsoft'ta yürütülen on binlerce A/B testinde bu büyüklükte bir iyileşmeye hiç rastlamadıklarını belirtip sonucu reddediyorlar ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Bir hook'un diğerini ikiye katladığını gördüğünde ilk refleksin kutlamak değil, tekrar etmek olmalı.",
            },
          ],
        },
        {
          h2: "Beş hook'tan dördü tutmazsa ne olur?",
          blocks: [
            {
              type: "p",
              text: "Hiçbir şey. Beklenen sonuç budur. Aynı makale, farklı şirketlerin yayımlanmış deney başarı oranlarını bir arada veriyor: Microsoft için %33, Bing için %15; Booking.com, Google Ads ve Netflix için %10; Airbnb Search için %8 ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Yani dünyanın en olgun deney kültürüne sahip şirketlerinde bile fikirlerin büyük çoğunluğu mevcut durumu geçemiyor.",
            },
            {
              type: "quote",
              text: "Also, other factors like multiple variants, iterating on ideas several times, and flexibility in data processing increase the FPR due to multiple hypothesis testing.",
              cite: "Kohavi, Deng & Vermeer, KDD '22",
              citeUrl: "https://doi.org/10.1145/3534678.3539160",
            },
            {
              type: "p",
              text: "Bu tablonun ikinci bir okuması daha var ve doğrudan seni ilgilendiriyor: başarı oranı düştükçe, istatistiksel olarak anlamlı çıkan bir sonucun aslında yanlış pozitif olma riski yükseliyor. Yazarların hesabında %33 başarı oranında bu risk %5,9 iken, %8 başarı oranında %26,4'e çıkıyor. Yeni bir markanın hook havuzundaki başarı oranı bu ölçekli şirketlerinkinden yüksek olmak zorunda değil — dolayısıyla \"anlamlı\" gördüğün sonuca duyman gereken şüphe daha fazla, daha az değil.",
            },
            {
              type: "p",
              text: "Bunun moral bozucu değil, rahatlatıcı bir tarafı var: dört hook'un tutmaması senin kreatif yeteneğinle ilgili bir yargı değil. Test etmenin amacı zaten dördünü elemek. Yanlış olan tek şey, elemeden ölçeklemek.",
            },
          ],
        },
        {
          h2: "Test kazananı gerçekten daha çok mu sattırıyor?",
          blocks: [
            {
              type: "p",
              text: "Burada bir katman daha var. Panelde gördüğün rakam, reklamın yarattığı farkı değil, reklam platformunun sana atfettiği sonucu gösterir. Facebook'un kendi verisiyle yapılmış bir çalışmada Gordon, Zettelmeyer, Bhargava ve Chapsky, 15 ABD reklam deneyini — 500 milyon kullanıcı-deney gözlemi ve 1,6 milyar gösterim — kullanarak rastgele kontrollü deney sonuçlarıyla gözlemsel yöntemlerin sonuçlarını karşılaştırdı ve gözlemsel yöntemlerin, kapsamlı demografik ve davranışsal değişkenler kontrol edildikten sonra bile çoğu zaman deneylerle aynı etkileri üretemediğini buldu ([Gordon ve diğerleri, 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
            },
            {
              type: "p",
              text: "Hook testi bu tuzağa görece az düşer, çünkü platformun A/B test aracı kitleyi rastgele bölerek gerçek bir deney kurar. Ama sonucu okuduğun metrik ölçüm altyapından geliyorsa, o altyapı bozuksa testin de bozulur — eksik düşen satın alma olayları ya da çift sayılan dönüşümler, kazananı sistematik olarak yanlış gösterebilir. Ölçümün nerede sessizce kırıldığını [Meta pixel ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) ayrıntılı anlattık.",
            },
          ],
        },
        {
          h2: "Güzellik markası olarak pratikte nasıl test edersin?",
          blocks: [
            {
              type: "ul",
              items: [
                "Tek değişken: sadece ilk 2-3 saniye değişsin, gövde ve CTA sabit kalsın.",
                "Karar metriğini önceden yaz: tıklama oranı bir ara metriktir; kararı sepete ekleme ya da satın alma başı maliyet üzerinden ver.",
                "Süreyi baştan belirle ve o süre dolmadan sonuca bakıp müdahale etme. Erken durdurma, kazananı gürültüden seçmenin en hızlı yolu.",
                "Beş varyantla başlıyorsan, ilk turu bir eleme turu say: amacı kazananı bulmak değil, açıkça tutmayan üç-dördü elemek.",
                "Kazanan çıktıysa tekrar et. İkinci turda da kazanıyorsa ölçekle; sadece bir turda kazandıysa bu bir hipotezdir, bir sonuç değil.",
                "Çarpıcı sonuca şüpheyle yaklaş: bir hook diğerini katlıyorsa önce kurulum hatası ara (kitle örtüşmesi, eşit olmayan bütçe dağılımı, farklı yayın saati).",
                "Kazanan hook'u bir sonraki kreatif turuna kural olarak taşı — \"sonuçla açanlar kazanıyor\" gibi bir öğrenme, tek bir videodan daha değerlidir.",
              ],
            },
            {
              type: "p",
              text: "Son bir not: hook'un işlemesi, içeriğin geri kalanının işlediği anlamına gelmez. Dikkati kazanmak ile tutmak farklı işler; ilk üç saniyeyi kazanıp altıncı saniyede kaybeden bir video, testte iyi bir tıklama oranı üretip satışa hiç dönmeyebilir. Gövdenin inandırıcılığı üzerine [UGC'nin neden stüdyo çekiminden çok sattığını anlattığımız yazı](/tr/blog/ugc-neden-studyo-cekiminden-cok-satiyor), reklam yapısının bütününe bakmak içinse [güzellik markaları için Instagram reklam rehberimiz](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) iyi bir devam noktası.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kaç hook'la teste başlamalıyım?",
          a: "Bütçenin taşıyabileceği kadar az sayıda. Çoklu varyant, çoklu hipotez testi nedeniyle yanlış pozitif oranını yükseltiyor ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)); yani beş varyanttan çıkan kazanan, iki varyanttan çıkan kazanandan daha zayıf bir kanıttır. Küçük bütçede pratik yol: beşi bir eleme turunda yarıştır, geriye kalan ikiyi ayrı ve daha uzun bir turda karşılaştır.",
        },
        {
          q: "Testi ne zaman durdurmalıyım?",
          a: "Baştan belirlediğin sürede — sonucun iyi göründüğü anda değil. Ticari bir test aracında kullanıcıların veriye sürekli bakıp anlamlılığa ulaştığı anda durdurmasının birinci tip hata oranını ciddi biçimde şişirdiği belgelenmiş bir durum ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Panele bakmak serbest; bakışa göre karar vermek değil.",
        },
        {
          q: "Tıklama oranı hook'u değerlendirmek için yeterli mi?",
          a: "Tek başına değil. Tıklama oranı dikkati kazanma aşamasını ölçer; oysa reklam etkinliğinin darboğazı dikkati kazanmak ve tutmak olarak iki aşamalı işliyor ([Bruns ve diğerleri, 2025](https://doi.org/10.1080/00913367.2025.2524186)). Yüksek tıklama üretip satışa dönmeyen bir hook, ilk kapıyı açıp ikinciyi açamamış demektir. Karar metriğin huninin sonuna yakın bir metrik olmalı.",
        },
        {
          q: "Bir hook diğerinin iki katı sonuç verdi, hemen ölçekleyeyim mi?",
          a: "Önce tekrar et. Yazarlar çarpıcı sonuçlar için Twyman yasasını hatırlatıyor — ilginç görünen rakam genellikle yanlıştır — ve kendi örneklerinde %300'ün üzerindeki bir artışı, on binlerce testte bu ölçekte bir iyileşme görmemiş olmalarına dayanarak reddediyorlar ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). İkinci turda da kazanıyorsa ölçekle.",
        },
        {
          q: "Beş hook'un beşi de mevcut kreatifi geçemezse ne yapmalıyım?",
          a: "Bu beklenen bir sonuç, kötü bir işaret değil. Yayımlanmış deney başarı oranları Microsoft'ta %33, Bing'de %15, Booking.com/Google Ads/Netflix'te %10, Airbnb Search'te %8 seviyesinde ([Kohavi, Deng ve Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Yapılacak şey açıyı değiştirmek: beş varyasyonun beşi de aynı fikrin farklı cümleleriyse, aslında tek bir hook test etmişsindir.",
        },
      ],
      sources: [
        {
          label: "Kohavi, R., Deng, A., & Vermeer, L. (2022). A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled Experiments. Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '22).",
          url: "https://doi.org/10.1145/3534678.3539160",
          publisher: "ACM SIGKDD",
        },
        {
          label: "Bruns, D., Kopka, J. F., Borgmann, L., Prior, S., & Langner, T. (2025). Measuring Gaining and Holding Attention to Social Media Ads with Viewport Logging: A Validation Study Using Mobile Eye-Tracking. Journal of Advertising, 54(5), 655-672.",
          url: "https://doi.org/10.1080/00913367.2025.2524186",
          publisher: "Journal of Advertising",
        },
        {
          label: "Media Rating Council. (2016). MRC Mobile Viewable Ad Impression Measurement Guidelines, Final Version, June 28, 2016.",
          url: "https://mediaratingcouncil.org/sites/default/files/Standards/062816%20Mobile%20Viewable%20Guidelines%20Final.pdf",
          publisher: "Media Rating Council",
        },
        {
          label: "Gordon, B. R., Zettelmeyer, F., Bhargava, N., & Chapsky, D. (2019). A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook. Marketing Science, 38(2), 193-225.",
          url: "https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135",
          publisher: "INFORMS Marketing Science",
        },
      ],
      tags: [
        "Kreatif test",
        "Hook",
        "A/B test",
        "Kozmetik",
      ],
    },
    en: {
      slug: "same-product-five-hooks-which-one-stops-the-scroll",
      title: "Same product, five hooks: which one stops the scroll?",
      metaTitle: "Testing Five Hooks: Which One Actually Stops the Scroll? | Soleach",
      metaDescription: "Testing five hooks for one product is the right instinct. Picking the winner wrong is easy: false positive risk, peeking and underpowered tests — a sourced guide.",
      excerpt: "Testing hooks is the right reflex; the problem is how the test gets read. Why gaining and holding attention are different jobs, how five variants inflate false positive risk, and when a winner deserves to be believed.",
      intro: [
        "You've written five different openings for the same serum. One leads with the problem, one with the result, one with price, one with an objection, one straight with the product. Putting all five live and scaling whatever sticks is the most common decision beauty brands make — and it's the right one.",
        "What isn't right starts afterwards: checking the dashboard two days later and crowning whichever has the highest click-through rate. At that step, most brands aren't making a decision about creative. They're making a decision about noise.",
        "This piece covers why the hook is so decisive, the statistical cost of testing five variants at once, and when a winner is actually worth believing — with sources.",
      ],
      sections: [
        {
          h2: "Why is the hook so decisive?",
          blocks: [
            {
              type: "p",
              text: "Because attention isn't one event but two stages: gaining it and holding it. Advertising research measures these separately, and together describes them as a critical bottleneck of social media advertising effectiveness ([Bruns et al., 2025](https://doi.org/10.1080/00913367.2025.2524186)). The hook is the whole of stage one: however good the rest of the creative is, if stage one fails, stage two never starts.",
            },
            {
              type: "p",
              text: "To see how small that scale is, look at the industry's own measurement standard. Under the Media Rating Council's mobile viewability guidelines, a mobile display ad counts as a viewable impression when at least 50% of its pixels are on screen for at least one continuous second — and the guidelines state explicitly that this requirement applies equally in News Feed environments. For video the threshold is slightly longer: two continuous seconds of playback meeting the same pixel requirement ([Media Rating Council, 2016](https://mediaratingcouncil.org/sites/default/files/Standards/062816%20Mobile%20Viewable%20Guidelines%20Final.pdf)).",
            },
            {
              type: "p",
              text: "So two seconds is all it takes for your ad to be counted as seen. The hook's job isn't to win those two seconds — it's to turn them into a third. That's why hook testing isn't an aesthetic preference; it's a test of the first door in the [funnel](/en/concepts/funnel).",
            },
            {
              type: "h3",
              text: "The one thing to change when writing five hooks",
            },
            {
              type: "ul",
              items: [
                "Change the opening line and what appears in the first frame.",
                "Keep the product, the offer, the body copy, the CTA and the closing frame identical.",
                "Keep editing pace and music identical — those move performance on their own.",
                "Make sure every variant runs in the same ad set, to the same audience, on the same budget.",
              ],
            },
            {
              type: "p",
              text: "If one variant changed the opening, the music and the CTA all at once, then even when you find a winner you won't know what won — and you'll have produced no learning you can carry into the next creative.",
            },
          ],
        },
        {
          h2: "Is it right to test five hooks at once?",
          blocks: [
            {
              type: "p",
              text: "As an idea, yes: without creative variation there's no learning. The cost is statistical. Comparing two variants is one comparison; putting five in play raises the number of comparisons, and with it your chance of finding a difference that only looks meaningful.",
            },
            {
              type: "p",
              text: "This is a known problem in experimental design. In their KDD 2022 paper, Kohavi, Deng and Vermeer write that factors like multiple variants, iterating on ideas several times, and flexibility in data processing increase the false positive rate due to multiple hypothesis testing ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)).",
            },
            {
              type: "p",
              text: "The practical upshot: you don't need to abandon five-hook tests, but a winner from a five-variant test is weaker evidence than a winner from a two-variant test. To reach the same confidence you need either more data or a replication round.",
            },
          ],
        },
        {
          h2: "How do you pick the winner wrong?",
          blocks: [
            {
              type: "p",
              text: "Three common mistakes, all fed from the same source: reading the result early and selectively.",
            },
            {
              type: "h3",
              text: "1. Watching constantly and stopping the moment it looks good",
            },
            {
              type: "p",
              text: "The same paper describes how a commercial A/B testing system showing near-real-time results led users to peek at the data and stop when it was statistically significant — and notes that this type of multiple testing significantly inflates type-I error rates ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Checking your ad dashboard three times a day and declaring a winner is exactly that behaviour.",
            },
            {
              type: "h3",
              text: "2. Testing with too little power",
            },
            {
              type: "p",
              text: "Statistical power is the probability of detecting a real difference when one exists. The same paper states at section-heading level that experiments with low statistical power are not trustworthy, and calculates the pre-experiment power in its worked example at roughly 3% — severely underpowered. A five-variant test running two days on a small daily budget usually sits on that side of the line.",
            },
            {
              type: "h3",
              text: "3. Celebrating a striking result",
            },
            {
              type: "p",
              text: "The more striking the result, the more suspicion it deserves. The authors invoke Twyman's law: any figure that looks interesting or different is usually wrong. Faced with a conversion lift of over 300% in their example, they note they have been involved in tens of thousands of A/B tests at Airbnb, Booking, Amazon and Microsoft and have never seen an improvement anywhere near that size — and reject the result ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). When one hook doubles another, your first reflex should be to replicate, not to celebrate.",
            },
          ],
        },
        {
          h2: "What if four out of five hooks don't win?",
          blocks: [
            {
              type: "p",
              text: "Nothing. That's the expected outcome. The same paper collects published experiment success rates across companies: 33% at Microsoft, 15% at Bing, 10% at Booking.com, Google Ads and Netflix, and 8% at Airbnb Search ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Even at the companies with the most mature experimentation cultures in the world, the large majority of ideas fail to beat the status quo.",
            },
            {
              type: "quote",
              text: "Also, other factors like multiple variants, iterating on ideas several times, and flexibility in data processing increase the FPR due to multiple hypothesis testing.",
              cite: "Kohavi, Deng & Vermeer, KDD '22",
              citeUrl: "https://doi.org/10.1145/3534678.3539160",
            },
            {
              type: "p",
              text: "There's a second reading of that table that concerns you directly: as the success rate falls, the risk that a statistically significant result is actually a false positive rises. In the authors' calculation that risk is 5.9% at a 33% success rate, climbing to 26.4% at an 8% success rate. A new brand's hook pool has no obligation to succeed more often than these companies do — so the scepticism a \"significant\" result deserves is greater, not smaller.",
            },
            {
              type: "p",
              text: "There's something reassuring rather than discouraging in this: four hooks failing isn't a verdict on your creative ability. Eliminating four of them is the entire point of testing. The only mistake is scaling without eliminating.",
            },
          ],
        },
        {
          h2: "Does the winning test actually sell more?",
          blocks: [
            {
              type: "p",
              text: "There's one more layer here. The number on your dashboard shows what the platform attributes to your ad, not the difference the ad made. Using Facebook's own data, Gordon, Zettelmeyer, Bhargava and Chapsky contrasted results from 15 US advertising experiments — 500 million user-experiment observations and 1.6 billion impressions — with those from multiple observational models, and found the observational methods often failed to produce the same effects as the randomized experiments, even after conditioning on extensive demographic and behavioural variables ([Gordon et al., 2019](https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135)).",
            },
            {
              type: "p",
              text: "Hook testing falls into this trap less often, because a platform's A/B test tool splits the audience randomly and so builds a real experiment. But if the metric you read comes from your measurement setup and that setup is broken, the test breaks with it — missing purchase events or double-counted conversions can systematically mislabel the winner. We covered where measurement quietly breaks in our piece on [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution).",
            },
          ],
        },
        {
          h2: "How should a beauty brand run this in practice?",
          blocks: [
            {
              type: "ul",
              items: [
                "One variable: change only the first 2-3 seconds, keep body and CTA fixed.",
                "Write down your decision metric first: click-through rate is an intermediate metric; decide on add-to-cart or cost per purchase.",
                "Set the duration up front and don't intervene before it's up. Stopping early is the fastest way to pick a winner out of noise.",
                "If you start with five variants, treat round one as elimination: the goal isn't to find the winner but to remove the three or four that clearly don't work.",
                "If you have a winner, replicate it. If it wins again, scale. A single-round win is a hypothesis, not a result.",
                "Treat striking results with suspicion: if one hook doubles another, look for setup errors first (audience overlap, uneven budget distribution, different delivery times).",
                "Carry the winning hook forward as a rule for the next round — a learning like \"openings that lead with the result win\" is worth more than any single video.",
              ],
            },
            {
              type: "p",
              text: "One closing note: a hook working doesn't mean the rest of the content works. Gaining and holding attention are different jobs, and a video that wins the first three seconds but loses the sixth can produce a good click-through rate in a test and never convert. For the credibility of the body, see [why UGC outsells studio content](/en/blog/why-ugc-outsells-studio-content); for the overall ad structure, our [starter guide to Instagram advertising for beauty brands](/en/blog/instagram-ads-guide-for-beauty-brands) is a good next step.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How many hooks should I start testing with?",
          a: "As few as your budget can carry. Multiple variants increase the false positive rate through multiple hypothesis testing ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)), so a winner out of five is weaker evidence than a winner out of two. A practical route on a small budget: race five in an elimination round, then compare the surviving two in a separate, longer round.",
        },
        {
          q: "When should I stop the test?",
          a: "At the duration you set up front — not the moment results look good. It's documented that users of a commercial testing tool peeking at data and stopping at significance significantly inflates type-I error rates ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). Looking at the dashboard is fine; deciding based on the look isn't.",
        },
        {
          q: "Is click-through rate enough to judge a hook?",
          a: "Not on its own. CTR measures the gaining-attention stage, while advertising effectiveness works through two stages, gaining and holding attention ([Bruns et al., 2025](https://doi.org/10.1080/00913367.2025.2524186)). A hook that produces clicks but no sales opened the first door and failed at the second. Your decision metric should sit closer to the bottom of the funnel.",
        },
        {
          q: "One hook performed twice as well as another — should I scale it now?",
          a: "Replicate first. The authors invoke Twyman's law for striking results — any figure that looks interesting is usually wrong — and reject a lift of over 300% in their own example on the grounds that they've never seen an improvement of that size across tens of thousands of tests ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). If it wins the second round too, scale it.",
        },
        {
          q: "What if none of the five beats my current creative?",
          a: "That's an expected outcome, not a bad sign. Published experiment success rates run at 33% for Microsoft, 15% for Bing, 10% for Booking.com, Google Ads and Netflix, and 8% for Airbnb Search ([Kohavi, Deng & Vermeer, 2022](https://doi.org/10.1145/3534678.3539160)). The move is to change the angle: if all five variations are different sentences for the same idea, you've really only tested one hook.",
        },
      ],
      sources: [
        {
          label: "Kohavi, R., Deng, A., & Vermeer, L. (2022). A/B Testing Intuition Busters: Common Misunderstandings in Online Controlled Experiments. Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '22).",
          url: "https://doi.org/10.1145/3534678.3539160",
          publisher: "ACM SIGKDD",
        },
        {
          label: "Bruns, D., Kopka, J. F., Borgmann, L., Prior, S., & Langner, T. (2025). Measuring Gaining and Holding Attention to Social Media Ads with Viewport Logging: A Validation Study Using Mobile Eye-Tracking. Journal of Advertising, 54(5), 655-672.",
          url: "https://doi.org/10.1080/00913367.2025.2524186",
          publisher: "Journal of Advertising",
        },
        {
          label: "Media Rating Council. (2016). MRC Mobile Viewable Ad Impression Measurement Guidelines, Final Version, June 28, 2016.",
          url: "https://mediaratingcouncil.org/sites/default/files/Standards/062816%20Mobile%20Viewable%20Guidelines%20Final.pdf",
          publisher: "Media Rating Council",
        },
        {
          label: "Gordon, B. R., Zettelmeyer, F., Bhargava, N., & Chapsky, D. (2019). A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook. Marketing Science, 38(2), 193-225.",
          url: "https://pubsonline.informs.org/doi/10.1287/mksc.2018.1135",
          publisher: "INFORMS Marketing Science",
        },
      ],
      tags: [
        "Creative testing",
        "Hooks",
        "A/B testing",
        "Cosmetics",
      ],
    },
  },
};
