import type { BlogPost } from "@/lib/blog";

export const kreatifYorgunluguFrekans: BlogPost = {
  id: "kreatif-yorgunlugu-frekans",
  publishedAt: "2026-07-30",
  category: "ads",
  locales: {
    tr: {
      slug: "kreatif-yorgunlugu-reklam-frekansi",
      title: "Müşterin aynı reklamı 15. kez görüyor: ne zaman yenilemeli?",
      metaTitle: "Kreatif Yorgunluğu: Frekans Kaçta Sorun Olur? | Soleach",
      metaDescription: "Frekans yükselirken performans neden sessizce düşüyor? Kreatif yorgunluğunun araştırmalardaki karşılığı, Meta panelindeki sinyalleri ve yenileme kararı.",
      excerpt: "Reklamın ilk hafta iyi çalıştı, üçüncü hafta aynı bütçeyle yarısı kadar satıyor. Kreatif yorgunluğunun akademik literatürdeki karşılığını, Meta'nın panelde hangi eşikte uyarı verdiğini ve kreatifi ne zaman yenilemen gerektiğini kaynaklarıyla inceledik.",
      intro: [
        "Reklamın ilk hafta iyi çalıştı. İkinci hafta biraz yavaşladı. Üçüncü hafta aynı bütçe aynı kitleye giderken satın alma başı maliyet iki katına çıktı. Kreatifte değişen bir şey yok, teklifte de yok — değişen tek şey, aynı kişilerin aynı videoyu kaçıncı kez görüyor olduğu.",
        "Bu tabloya sektörde \"kreatif yorgunluğu\" deniyor ve çoğu marka onu ya çok geç fark ediyor ya da olmadığı yerde görüp iyi çalışan bir reklamı erken kapatıyor. İkisi de pahalı.",
        "Bu yazıda tekrarın etkisinin araştırmalarda nasıl ölçüldüğünü, frekansın hangi noktada anlamlı bir uyarıya dönüştüğünü, Meta'nın kendi panelinde bunu hangi eşiklerle işaretlediğini ve yenileme kararını neye göre vermen gerektiğini kaynaklarıyla anlatıyoruz.",
      ],
      sections: [
        {
          h2: "Kreatif yorgunluğu gerçek bir şey mi?",
          blocks: [
            {
              type: "p",
              text: "Evet — hem akademik literatürde hem de platformun kendi dokümantasyonunda tanımlı bir olgu. Tekrarın etkisi doğrusal değil: bir noktaya kadar yükseliyor, sonra düşüyor. Schmidt ve Eisend, deneysel çalışmalardan derledikleri 312 etki büyüklüğünü meta-analiz ederek markaya yönelik tutumun yaklaşık on gösterimde en yüksek noktasına ulaştığını, hatırlamanın ise sekizinci gösterimden önce yataya geçmediğini ölçtü ([Schmidt ve Eisend, 2015](https://doi.org/10.1080/00913367.2015.1018460)).",
            },
            {
              type: "p",
              text: "Bu rakamı doğrudan reklam paneline taşımamak gerekiyor: çalışma laboratuvar koşullarındaki deneyleri birleştiriyor ve ölçtüğü şey satın alma değil, tutum ve hatırlama. Devredilebilir bulgu sayı değil, eğrinin biçimi — aynı makalenin aktardığı üzere literatürde tutum için ters U biçimli, hatırlama için logaritmik bir seyir konusunda uzlaşı var. Yani \"tekrar kötüdür\" de doğru değil: tekrarın bir kazanç bölgesi var, sorun o bölgenin ötesine geçmekte.",
            },
            {
              type: "p",
              text: "Saha verisinde de aynı yön görünüyor. Braun ve Moe, bir otomobil markasının 2009'da on hafta süren display kampanyasında 5.803 kişinin bireysel gösterim geçmişini modelledi ve her tekrar gösterimin kreatifin etkisini aşındırdığını, aradan zaman geçtikçe bu aşınmanın kısmen geri geldiğini gösterdi ([Braun ve Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)). Veri ne kozmetik ne de sosyal medya — ama mekanizma (aşınma ve dinlenmeyle onarım) reklam mecrasından bağımsız olarak modellenmiş bir davranış.",
            },
            {
              type: "p",
              text: "Meta ise olguyu kendi yardım merkezinde şöyle tanımlıyor: kreatif yorgunluğu, bir kitlenin aynı kreatifi çok fazla kez görmesi durumunda ortaya çıkar; insanların reklamla etkileşime girme olasılığı düşebilir ve bu da sonuç başına maliyeti yükseltebilir ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)).",
            },
          ],
        },
        {
          h2: "Frekans kaça çıkınca sorun başlar?",
          blocks: [
            {
              type: "p",
              text: "Evrensel bir eşik yok — ve bunu net söylemek gerekiyor, çünkü internette dolaşan \"frekans 3'ü geçmesin\" tipi kurallar hiçbir kaynağa dayanmıyor. Meta'nın kendi tanımına göre frekans, her Meta hesabının reklamını ortalama kaç kez gördüğü; gösterim sayısının erişime bölünmesiyle hesaplanıyor ve tahmini bir metrik ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1546570362238584)).",
            },
            {
              type: "p",
              text: "\"Ortalama\" kelimesi burada kritik. Frekans 3 gördüğünde kitlenin herkesin reklamı üç kez gördüğü anlamına gelmiyor; büyük bir kısım bir kez görmüşken küçük bir çekirdek onu on beş kez görmüş olabilir. Yazının başlığındaki senaryo, ortalamanın altında saklanan tam olarak bu kuyruk.",
            },
            {
              type: "p",
              text: "Aynı sayfa frekansın reklam seti başına ortalama 1-2 olabileceğini ya da bütçeye, kitle büyüklüğüne ve yayın süresine bağlı olarak çok daha yüksek çıkabileceğini söylüyor; asıl tavsiyesi bir sayı tutturmak değil, frekansı sonuçlarla birlikte izlemek: frekans yükselirken performans düşmeye başlıyorsa kitlen reklam yorgunluğu yaşıyor olabilir ve kreatifi ya da hedeflemeyi değiştirmek yerinde olabilir.",
            },
            {
              type: "p",
              text: "Aritmetik, küçük markanın neden bu duvara daha hızlı tosladığını da açıklıyor: frekans = gösterim / erişim. 30 bin kişilik bir retargeting kitlesine günde 500 TL harcarsan frekans günler içinde yükselir; 3 milyon kişilik bir kitlede aynı bütçe aylarca 1'in altında kalır. [Retargeting](/tr/kavramlar/retargeting) kitleleri tanımı gereği küçük olduğu için kreatif yorgunluğu ilk orada görünür.",
            },
          ],
        },
        {
          h2: "Meta panelinde bunu nereden görürsün?",
          blocks: [
            {
              type: "p",
              text: "Yayın (Delivery) sütunundan. Meta, bir kitlenin aynı reklamı çok fazla kez gördüğünü düşündüğünde reklam setinin ya da reklamın durumunda \"Kreatif sınırlı\" (Creative limited) veya \"Kreatif yorgunluğu\" (Creative fatigue) etiketini gösteriyor. İkisini ayıran şey maliyet: sonuç başına maliyet geçmiş reklamlarınkinden yüksek ama iki katından düşükse \"Kreatif sınırlı\", iki katına eşit ya da daha fazlaysa \"Kreatif yorgunluğu\" görünüyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "Aynı sayfanın iki detayı pratikte fark yaratıyor. Birincisi, Meta değerlendirmeye yalnızca o kampanyayı değil, sayfanın diğer kampanyaları dahil aynı görsel veya videonun bütün yakın tarihli gösterimlerini katıyor — yani aynı videoyu üç ayrı kampanyada döndürüyorsan yorgunluk toplamda birikiyor. İkincisi, özellik yalnızca tek kreatifli reklam setleri için çalışıyor; Advantage+ katalog reklamları, dinamik kreatif ve Advantage+ uygulama kampanyaları kapsam dışı. Kampanya yayına girmeden önce ilk yedi günde yorgunluk öngörülüyorsa uyarı yayından önce de gelebiliyor.",
            },
            {
              type: "h3",
              text: "Gördüğün her düşüş yorgunluk değildir",
            },
            {
              type: "p",
              text: "Panelde düşüş görmek ile kreatifin yorulması aynı şey değil. Meta, bazı reklam hesaplarında kademeli olarak devreye aldığı bütçe esnekliğiyle günlük bütçenin bazı günlerde %75'e kadar aşılabildiğini, sonuçların saat kırılımında bakıldığında zamanla ortalamaya dönen dalgalanmalar gösterebildiğini ve sonuçlara kampanya düzeyinde, tam bir hafta üzerinden bakılmasını yazıyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1364841787225722)). İki günlük bir bozulma, çoğu zaman yorgunluk değil gürültüdür.",
            },
            {
              type: "p",
              text: "İkinci ihtimal daha can sıkıcı: düşüş kreatiften değil ölçümden geliyor olabilir. Eksik düşen satın alma olayları ya da bozulan atıf, performansı olduğundan kötü gösterir ve sağlıklı bir reklamı kapattırır. Ölçümün nerede sessizce kırıldığını [Meta pixel ölçüm hataları yazımızda](/tr/blog/meta-pixel-olcum-hatalari-satis-atfi) ayrıntılı anlattık.",
            },
          ],
        },
        {
          h2: "Yeni markalar neden daha çabuk yoruluyor?",
          blocks: [
            {
              type: "p",
              text: "Çünkü tekrarın tolere edilme sınırı markanın tanınırlığına bağlı. Campbell ve Keller, televizyon reklamları ve internet reklamlarıyla yürüttükleri iki deneyde, tanınmayan bir markaya ait reklamın tekrarında etkinliğin düştüğünü; aynı reklam tanınan bir markaya atfedildiğinde ise yorulmanın ertelendiğini buldu ([Campbell ve Keller, 2003](https://doi.org/10.1086/376800)).",
            },
            {
              type: "p",
              text: "Mekanizma da kayda değer: yazarlar, tekrar arttıkça özellikle tanınmayan markanın reklamında \"taktiğin uygunsuzluğuna\" dair olumsuz düşüncelerin belirdiğini ve etkinlikteki düşüşü kısmen bunun sürüklediğini raporluyor. Tanıdık bir markanın ısrarı hatırlatma gibi okunurken, tanınmayan bir markanınki bunaltıcı bulunuyor.",
            },
            {
              type: "p",
              text: "Yeni bir kozmetik markası için pratik sonucu şu: tanınan bir markanın rahatça sürdürebileceği bir tekrar seviyesi senin için erken yorulma noktası olabilir. Kreatif üretim temposunu bir lüks değil, bütçenin bir parçası olarak planlaman gerekiyor — bu, [kreatif testi](/tr/kavramlar/kreatif-testi) döngüsünü sürdürebilmenin de ön koşulu.",
            },
          ],
        },
        {
          h2: "Kreatifi yenilemek mi, kitleyi büyütmek mi?",
          blocks: [
            {
              type: "p",
              text: "Meta'nın kendi önerdiği üç yol var ve üçü birbirinin alternatifi: orijinalden belirgin biçimde farklı yeni bir görsel ya da videoyla yeni bir reklam açmak, kitleyi büyüterek reklamı henüz çok görmemiş kişilere ulaşmak, ya da tek bir görsel/videodan otomatik varyasyonlar üreten Advantage+ kreatifi denemek ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "Aynı sayfada çoğu markanın refleksine ters düşen bir not var: yeni reklamı açarken orijinal reklamı duraklatmak ya da kapatmak yerine yayında bırakmak sonuçları en üst düzeye çıkarabilir. Yani \"yenilemek\" ile \"öncekini öldürmek\" aynı şey değil.",
            },
            {
              type: "p",
              text: "Rotasyonun ölçülmüş bir karşılığı da var. Braun ve Moe, kişinin gösterim geçmişine göre hangi kreatifin sırada olacağına karar veren bir kurgunun kendi verilerinde beklenen site ziyaretlerini %12,7, dönüşümleri %13,8 artırdığını simüle etti ([Braun ve Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)). Bu bir kozmetik markasının Instagram'da alacağı sonucun tahmini değil — tek bir markanın display kampanyasından çıkan bir model sonucu. Buradaki devredilebilir fikir yüzdeler değil, sıralamanın kendisinin bir kaldıraç olması.",
            },
            {
              type: "h3",
              text: "Dinlendirmek de bir araç",
            },
            {
              type: "p",
              text: "Aynı modelde aşınma kalıcı değil: aradan geçen her hafta, kampanya düzeyindeki aşınmanın %2,7'sini, belirli bir kreatife özgü aşınmanın ise %8,8'ini geri getiriyor. Yani iyi çalışmış bir kreatifi silmek yerine bir süre dinlendirip geri getirmek, modele göre anlamlı bir hamle.",
            },
            {
              type: "p",
              text: "Zamanlamanın kendisinin de etkisi var. Sahni, çevrimiçi saha deneyleriyle kurduğu bireysel veri setinde, reklamların birbirine yığılması yerine zamana yayılması durumunda ürünün satın alınma olasılığının arttığını — bu yayma, bazı gösterimleri satın alma anından uzaklaştırsa bile — buldu ([Sahni, 2015](https://doi.org/10.1007/s11129-015-9159-9)). Deneyler bir restoran arama platformunda yürütüldü; bulgu kozmetik e-ticaretine birebir taşınmaz, ama aynı bütçeyi üç güne sıkıştırmakla iki haftaya yaymanın nötr bir tercih olmadığını gösteriyor.",
            },
          ],
        },
        {
          h2: "Güzellik markası olarak pratikte ne yapmalısın?",
          blocks: [
            {
              type: "ul",
              items: [
                "Frekansı tek başına değil, sonuç başına maliyetle yan yana izle. Karar sinyali \"frekans 4 oldu\" değil, \"frekans yükselirken satın alma başı maliyet de yükseliyor\".",
                "Haftalık bak. Kampanya düzeyinde, tam hafta üzerinden; saatlik ve günlük kırılımlar seni yanlış alarma sürükler.",
                "Yayın sütununu kontrol et: \"Kreatif sınırlı\" bir erken uyarı, \"Kreatif yorgunluğu\" ise maliyetin çoktan ikiye katlandığı anlamına geliyor.",
                "Aynı videoyu farklı kampanyalarda döndürüyorsan yorgunluğun toplandığını unutma — kreatif envanterini kampanya bazında değil marka bazında say.",
                "Yenilerken gerçekten farklı bir şey üret: yeni bir müzik ya da yeni bir kapak karesi değil, farklı bir açı, farklı bir yüz, farklı bir açılış. Nereden başlayacağını [beş farklı hook testi yazımızda](/tr/blog/ayni-urun-5-farkli-hook-hangisi-durduruyor) anlattık.",
                "Kreatif üretimini bir hatta bağla. Yorgunluğun ilacı stok kreatiftir; küçük bütçeli markalar için bunu sürdürülebilir kılan format çoğunlukla [UGC](/tr/blog/ugc-neden-studyo-cekiminden-cok-satiyor) — üretim tarafında destek istiyorsan [kreatif üretim hizmetimiz](/tr/services#creative) tam olarak bu hattı kurmak için var.",
                "İyi çalışmış kreatifi silme, arşivle. Birkaç hafta dinlendikten sonra geri getirilen bir kreatif, sıfırdan üretilenden daha ucuza gelir.",
                "Kitle tarafını da kontrol et: satın alanları hariç tut, benzer kitleyi genişlet. Yorgunluk bazen kreatifin değil, kitlenin tükenmesidir.",
                "Reklamı kapatmadan önce ölçümü doğrula. Düşüş gerçek mi, yoksa eksik düşen dönüşüm mü — bu ayrımı yapmadan verilen her karar kör.",
              ],
            },
            {
              type: "p",
              text: "Bütün bunların altında tek bir çerçeve var: kreatif yorgunluğu bir hata değil, ödediğin dikkatin doğal amortismanı. Reklamın kötüleştiği için değil, kitlen onu öğrendiği için düşüyor. Reklam yapısının bütününe nereden bakacağını merak ediyorsan [güzellik markaları için Instagram reklam rehberimiz](/tr/blog/guzellik-markalari-icin-instagram-reklam-rehberi) iyi bir başlangıç noktası.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "İdeal reklam frekansı kaçtır?",
          a: "Tek bir doğru sayı yok. Meta frekansın reklam seti başına ortalama 1-2 olabileceğini ya da bütçe, kitle büyüklüğü ve yayın süresine göre çok daha yüksek çıkabileceğini söylüyor ve bir eşik vermek yerine frekansı sonuçlarla birlikte izlemeyi öneriyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1546570362238584)). Deneysel literatürde markaya yönelik tutumun yaklaşık on gösterimde tepe yaptığı ölçülmüş ([Schmidt ve Eisend, 2015](https://doi.org/10.1080/00913367.2015.1018460)); ama bu laboratuvar koşullarında tutum ölçen bir bulgu, panelde hedeflenecek bir sayı değil.",
        },
        {
          q: "Kreatif yorgunluğu ile kitle tükenmesi aynı şey mi?",
          a: "Hayır, ama panelde benzer görünürler. Kreatif yorgunluğunda sorun mesajın kendisidir: aynı kişiler aynı videoyu çok gördü. Kitle tükenmesinde ise ulaşılabilir kitlenin tamamına zaten ulaşılmıştır. Ayırt etmenin pratik yolu, kreatifi değiştirip aynı kitlede test etmek: yeni kreatifle maliyet düzeliyorsa sorun kreatiftesin, düzelmiyorsa kitleyi büyütmen gerekiyor.",
        },
        {
          q: "Yorulan reklamı kapatmalı mıyım?",
          a: "Şart değil. Meta, yeni bir reklam açarken orijinal reklamı duraklatmak ya da kapatmak yerine yayında bırakmanın sonuçları en üst düzeye çıkarabileceğini yazıyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)). Ayrıca aşınma kalıcı değil: Braun ve Moe'nun modelinde belirli bir kreatife özgü aşınmanın %8,8'i, aradan geçen her hafta geri geliyor ([Braun ve Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)) — yani dinlendirip geri getirmek gerçek bir seçenek.",
        },
        {
          q: "Reklamı ne sıklıkla yenilemeliyim?",
          a: "Takvimle değil sinyalle. Sabit bir \"her iki haftada bir\" kuralı, iyi çalışan kreatifi erken öldürür. İzlenecek sinyal, frekans yükselirken sonuç başına maliyetin de yükselmesi ve Meta'nın yayın sütununda \"Kreatif sınırlı\" ya da \"Kreatif yorgunluğu\" etiketinin belirmesi ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)). Bunlar görünmeden yenilemek, sadece öğrenmeyi sıfırlar.",
        },
        {
          q: "Küçük bütçeyle yeterli kreatif üretemiyorum, ne yapmalıyım?",
          a: "Üretim hacmini artıramıyorsan yayın hızını yavaşlat ve kitleyi genişlet — frekans, gösterimin erişime bölümü olduğu için ikisi de aynı sonucu verir. Zamana yaymanın ayrıca kendi kazancı var: saha deneylerinde reklamların yığılmak yerine zamana yayılmasının satın alma olasılığını artırdığı ölçülmüş ([Sahni, 2015](https://doi.org/10.1007/s11129-015-9159-9)).",
        },
      ],
      sources: [
        {
          label: "Schmidt, S., & Eisend, M. (2015). Advertising Repetition: A Meta-Analysis on Effective Frequency in Advertising. Journal of Advertising, 44(4), 415-428.",
          url: "https://doi.org/10.1080/00913367.2015.1018460",
          publisher: "Journal of Advertising",
        },
        {
          label: "Campbell, M. C., & Keller, K. L. (2003). Brand Familiarity and Advertising Repetition Effects. Journal of Consumer Research, 30(2), 292-304.",
          url: "https://doi.org/10.1086/376800",
          publisher: "Journal of Consumer Research",
        },
        {
          label: "Braun, M., & Moe, W. W. (2013). Online Display Advertising: Modeling the Effects of Multiple Creatives and Individual Impression Histories. Marketing Science, 32(5), 753-767.",
          url: "https://doi.org/10.1287/mksc.2013.0802",
          publisher: "INFORMS Marketing Science",
        },
        {
          label: "Sahni, N. S. (2015). Effect of temporal spacing between advertising exposures: Evidence from online field experiments. Quantitative Marketing and Economics, 13(3), 203-247.",
          url: "https://doi.org/10.1007/s11129-015-9159-9",
          publisher: "Quantitative Marketing and Economics",
        },
        {
          label: "Meta. Creative fatigue recommendations in Meta Ads Manager. Meta İşletme Yardım Merkezi (erişim: 30 Temmuz 2026).",
          url: "https://www.facebook.com/business/help/1346816142327858",
          publisher: "Meta",
        },
        {
          label: "Meta. Frequency. Meta İşletme Yardım Merkezi (erişim: 30 Temmuz 2026).",
          url: "https://www.facebook.com/business/help/1546570362238584",
          publisher: "Meta",
        },
        {
          label: "Meta. Understand fluctuations in ad performance. Meta İşletme Yardım Merkezi (erişim: 30 Temmuz 2026).",
          url: "https://www.facebook.com/business/help/1364841787225722",
          publisher: "Meta",
        },
      ],
      tags: [
        "Kreatif yorgunluğu",
        "Reklam frekansı",
        "Meta Ads",
        "Kozmetik pazarlaması",
      ],
    },
    en: {
      slug: "creative-fatigue-ad-frequency-when-to-refresh",
      title: "Your customer is seeing the same ad for the 15th time",
      metaTitle: "Creative Fatigue: When Is Ad Frequency a Problem? | Soleach",
      metaDescription: "Why performance quietly drops as frequency climbs: what research measures about ad repetition, the signals Meta shows in Ads Manager, and when to refresh.",
      excerpt: "The ad worked in week one; by week three the same budget sells half as much. What creative fatigue looks like in the research, the thresholds at which Meta flags it in Ads Manager, and how to decide when to refresh — with sources.",
      intro: [
        "Your ad worked in the first week. It slowed a little in the second. By the third week, the same budget going to the same audience produced a cost per purchase twice as high. Nothing changed in the creative or the offer — the only thing that changed is how many times the same people have now seen the same video.",
        "The industry calls this creative fatigue, and most brands either notice it far too late or diagnose it where it isn't and kill a healthy ad early. Both are expensive.",
        "This piece covers how repetition effects are actually measured in research, when frequency turns into a meaningful warning, the thresholds Meta uses to flag it in Ads Manager, and what should drive your refresh decision — with sources.",
      ],
      sections: [
        {
          h2: "Is creative fatigue a real thing?",
          blocks: [
            {
              type: "p",
              text: "Yes — it is a documented phenomenon both in the academic literature and in the platform's own documentation. Repetition effects aren't linear: they climb to a point, then fall. Meta-analysing 312 effect sizes from experimental studies, Schmidt and Eisend found that attitude reaches its maximum at approximately ten exposures, while recall increases and does not level off before the eighth exposure ([Schmidt & Eisend, 2015](https://doi.org/10.1080/00913367.2015.1018460)).",
            },
            {
              type: "p",
              text: "That number shouldn't be carried straight into your ads dashboard: the study pools laboratory experiments, and what it measures is attitude and recall, not purchases. The transferable finding is the shape of the curve, not the figure — as the same paper notes, the literature agrees on an inverted U-shaped curve for attitude and a logarithmic course for recall. So \"repetition is bad\" is wrong too: repetition has a productive range; the problem is running past it.",
            },
            {
              type: "p",
              text: "Field data points the same way. Braun and Moe modelled the individual impression histories of 5,803 people during a single automobile brand's ten-week display campaign in 2009, and showed that each repeat impression wears out a creative's effect, while that wearout is gradually restored as time passes ([Braun & Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)). The data is neither cosmetics nor social — but the mechanism, wearout plus restoration during a hiatus, is modelled behaviour rather than folklore.",
            },
            {
              type: "p",
              text: "Meta defines it this way in its own help centre: creative fatigue occurs when an audience has seen the same creative too many times; people may be less likely to engage with your ad, which can lead to a higher cost per result ([Meta Business Help Center](https://www.facebook.com/business/help/1346816142327858)).",
            },
          ],
        },
        {
          h2: "At what frequency does the problem start?",
          blocks: [
            {
              type: "p",
              text: "There is no universal threshold — worth stating plainly, because the \"never let frequency pass 3\" rules circulating online rest on no source at all. By Meta's own definition, frequency is the average number of times each Meta account saw your ad, calculated as impressions divided by reach, and it is an estimated metric ([Meta Business Help Center](https://www.facebook.com/business/help/1546570362238584)).",
            },
            {
              type: "p",
              text: "The word \"average\" is doing heavy lifting. A frequency of 3 does not mean everyone saw the ad three times; a large share may have seen it once while a small core has seen it fifteen times. The scenario in this article's title is precisely that tail, hiding under the average.",
            },
            {
              type: "p",
              text: "The same page notes frequency may average 1 to 2 per ad set or run much higher depending on budget, audience size and schedule; its actual advice is not to hit a number but to monitor frequency alongside your results — if performance begins to drop as frequency rises, your audience may be experiencing ad fatigue, and changing creative or targeting may be wise.",
            },
            {
              type: "p",
              text: "The arithmetic also explains why smaller brands hit this wall sooner: frequency = impressions / reach. Spend a meaningful daily budget against a 30,000-person retargeting pool and frequency climbs within days; the same budget against a three-million-person audience stays under 1 for months. Because [retargeting](/en/concepts/retargeting) audiences are small by definition, creative fatigue shows up there first.",
            },
          ],
        },
        {
          h2: "Where do you see it in Ads Manager?",
          blocks: [
            {
              type: "p",
              text: "In the Delivery column. When Meta believes your audience has seen the same ad too many times, your ad set or ad status shows either Creative limited or Creative fatigue. What separates them is cost: when cost per result is higher than ads you've run in the past but less than twice as high, you see Creative limited; when it is at least twice as high, you see Creative fatigue ([Meta Business Help Center](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "Two details on that page matter in practice. First, Meta considers all recent exposures of the ad's image or video, including those from other campaigns from your Page — so running the same video across three campaigns accumulates fatigue in aggregate. Second, the feature only covers ad sets with a single creative; Advantage+ catalogue ads, dynamic creative and Advantage+ app campaigns are excluded. If fatigue is predicted for the first seven days, the warning can also arrive before you publish.",
            },
            {
              type: "h3",
              text: "Not every drop is fatigue",
            },
            {
              type: "p",
              text: "Seeing a decline in the dashboard and a creative wearing out are not the same event. Meta notes that under the greater daily budget flexibility it is gradually introducing to some ad accounts, spend may run up to 75% over the daily budget on some days, that breaking results down by hour can show oscillations which average out over time, and that results are best read at campaign level across a full week ([Meta Business Help Center](https://www.facebook.com/business/help/1364841787225722)). A two-day dip is usually noise, not fatigue.",
            },
            {
              type: "p",
              text: "The second possibility is more uncomfortable: the drop may come from measurement rather than creative. Missing purchase events or broken attribution make performance look worse than it is and get a healthy ad switched off. We covered where measurement quietly breaks in our piece on [Meta Pixel measurement errors](/en/blog/meta-pixel-measurement-errors-attribution).",
            },
          ],
        },
        {
          h2: "Why do new brands fatigue faster?",
          blocks: [
            {
              type: "p",
              text: "Because how much repetition an audience tolerates depends on how well it knows the brand. Across two experiments using television ads and computer internet ads, Campbell and Keller found that repetition of advertising attributed to an unfamiliar brand showed decreased effectiveness, while the same advertising attributed to a known, familiar brand had its repetition wearout postponed ([Campbell & Keller, 2003](https://doi.org/10.1086/376800)).",
            },
            {
              type: "p",
              text: "The mechanism is worth noting too: the authors report that negative thoughts about tactic inappropriateness arose with repetition, particularly for an ad for an unfamiliar brand, and that these partly drove the decrease in effectiveness. A familiar brand's persistence reads as a reminder; an unknown brand's reads as pestering.",
            },
            {
              type: "p",
              text: "The practical consequence for a new cosmetics brand: a repetition level a known brand carries comfortably can be your fatigue point. Creative production cadence has to be planned as part of the budget rather than as a luxury — it's also the precondition for sustaining a [creative testing](/en/concepts/creative-testing) loop at all.",
            },
          ],
        },
        {
          h2: "Refresh the creative or expand the audience?",
          blocks: [
            {
              type: "p",
              text: "Meta itself recommends three routes, and they're alternatives to one another: create another ad with a new image or video that is materially different from the original, expand your audience to reach people who haven't seen the ad too much yet, or try Advantage+ creative, which automatically produces variations from a single image or video ([Meta Business Help Center](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "The same page carries a note that runs against most brands' reflex: keeping your original ad active instead of pausing or turning it off may maximise results. \"Refreshing\" and \"killing the previous ad\" are not the same move.",
            },
            {
              type: "p",
              text: "Rotation has a measured payoff as well. Braun and Moe simulated a setup that chooses which creative to serve next based on a person's impression history, and reported a 12.7% increase in expected website visits and a 13.8% increase in expected conversions for their data ([Braun & Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)). That is not a forecast for a cosmetics brand on Instagram — it is a model result from one brand's display campaign. The transferable idea is not the percentages but that sequencing itself is a lever.",
            },
            {
              type: "h3",
              text: "Resting a creative is a tool too",
            },
            {
              type: "p",
              text: "In the same model, wearout isn't permanent: each week that passes restores 2.7% of the campaign-level wearout and 8.8% of the wearout specific to a given creative. So parking a creative that worked and bringing it back later is, on this model, a defensible move rather than sentimentality.",
            },
            {
              type: "p",
              text: "Timing matters on its own. Using an individual-level data set built from online field experiments, Sahni found that the likelihood of a product's purchase increases when its ads are spread apart rather than bunched together — even when spreading them apart shifts some ads away from the purchase occasion ([Sahni, 2015](https://doi.org/10.1007/s11129-015-9159-9)). Those experiments ran on a restaurant search platform, so the finding doesn't transfer one-to-one to beauty e-commerce, but it does show that compressing a budget into three days versus spreading it over two weeks is not a neutral choice.",
            },
          ],
        },
        {
          h2: "What should a beauty brand actually do?",
          blocks: [
            {
              type: "ul",
              items: [
                "Read frequency next to cost per result, never on its own. The decision signal isn't \"frequency hit 4\", it's \"cost per purchase is rising as frequency rises\".",
                "Look weekly. At campaign level, over a full week; hourly and daily breakdowns will send you chasing false alarms.",
                "Watch the Delivery column: Creative limited is an early warning, Creative fatigue means cost per result has already doubled.",
                "If you run the same video across campaigns, remember fatigue accumulates across them — count your creative inventory at brand level, not campaign level.",
                "When you refresh, produce something genuinely different: not new music or a new cover frame, but a different angle, a different face, a different opening. Where to start is covered in our [five-hook test piece](/en/blog/same-product-five-hooks-which-one-stops-the-scroll).",
                "Put creative production on a line. The cure for fatigue is inventory, and for small budgets the format that makes it sustainable is usually [UGC](/en/blog/why-ugc-outsells-studio-content) — if you want help on the production side, our [creative production service](/en/services#creative) exists to build exactly that line.",
                "Archive winners instead of deleting them. A creative brought back after a few weeks' rest costs less than one produced from scratch.",
                "Check the audience side too: exclude purchasers, widen the lookalike. Sometimes what's exhausted isn't the creative but the audience.",
                "Verify measurement before you switch anything off. Is the drop real, or are conversions going missing? Every decision made without that distinction is blind.",
              ],
            },
            {
              type: "p",
              text: "One frame sits under all of it: creative fatigue isn't a mistake, it's the natural depreciation of the attention you bought. Performance falls not because the ad got worse but because your audience learned it. If you want the wider view of how the ad structure fits together, our [Instagram ads guide for beauty brands](/en/blog/instagram-ads-guide-for-beauty-brands) is a good starting point.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the ideal ad frequency?",
          a: "There is no single correct number. Meta says frequency may average 1 to 2 per ad set or run much higher depending on budget, audience size and schedule, and recommends monitoring it alongside results rather than targeting a threshold ([Meta Business Help Center](https://www.facebook.com/business/help/1546570362238584)). Experimental literature measures attitude peaking at approximately ten exposures ([Schmidt & Eisend, 2015](https://doi.org/10.1080/00913367.2015.1018460)) — but that is attitude measured in lab conditions, not a number to aim at in Ads Manager.",
        },
        {
          q: "Is creative fatigue the same as audience saturation?",
          a: "No, though they look alike in the dashboard. With creative fatigue the message is the problem: the same people have seen the same video too often. With audience saturation you have simply reached everyone reachable. The practical way to tell them apart is to change the creative and keep the audience: if cost recovers with a new creative, the creative was the issue; if it doesn't, you need a bigger audience.",
        },
        {
          q: "Should I turn off a fatigued ad?",
          a: "Not necessarily. Meta writes that keeping your original ad active instead of pausing or turning it off may maximise results when you add a new one ([Meta Business Help Center](https://www.facebook.com/business/help/1346816142327858)). Wearout also isn't permanent: in Braun and Moe's model, 8.8% of creative-specific wearout is restored for each week since the last exposure ([Braun & Moe, 2013](https://doi.org/10.1287/mksc.2013.0802)) — so resting and reviving is a genuine option.",
        },
        {
          q: "How often should I refresh my ads?",
          a: "By signal, not by calendar. A fixed \"every two weeks\" rule kills working creative early. The signals to watch are cost per result rising as frequency rises, and the Creative limited or Creative fatigue status appearing in Meta's Delivery column ([Meta Business Help Center](https://www.facebook.com/business/help/1346816142327858)). Refreshing before either appears mostly just resets your learning.",
        },
        {
          q: "I can't produce enough creative on a small budget — what now?",
          a: "If you can't raise production volume, slow delivery down and widen the audience — since frequency is impressions divided by reach, both push the same lever. Spreading spend over time has its own upside: field experiments measured purchase likelihood rising when ads were spread apart rather than bunched together ([Sahni, 2015](https://doi.org/10.1007/s11129-015-9159-9)).",
        },
      ],
      sources: [
        {
          label: "Schmidt, S., & Eisend, M. (2015). Advertising Repetition: A Meta-Analysis on Effective Frequency in Advertising. Journal of Advertising, 44(4), 415-428.",
          url: "https://doi.org/10.1080/00913367.2015.1018460",
          publisher: "Journal of Advertising",
        },
        {
          label: "Campbell, M. C., & Keller, K. L. (2003). Brand Familiarity and Advertising Repetition Effects. Journal of Consumer Research, 30(2), 292-304.",
          url: "https://doi.org/10.1086/376800",
          publisher: "Journal of Consumer Research",
        },
        {
          label: "Braun, M., & Moe, W. W. (2013). Online Display Advertising: Modeling the Effects of Multiple Creatives and Individual Impression Histories. Marketing Science, 32(5), 753-767.",
          url: "https://doi.org/10.1287/mksc.2013.0802",
          publisher: "INFORMS Marketing Science",
        },
        {
          label: "Sahni, N. S. (2015). Effect of temporal spacing between advertising exposures: Evidence from online field experiments. Quantitative Marketing and Economics, 13(3), 203-247.",
          url: "https://doi.org/10.1007/s11129-015-9159-9",
          publisher: "Quantitative Marketing and Economics",
        },
        {
          label: "Meta. Creative fatigue recommendations in Meta Ads Manager. Meta Business Help Center (accessed 30 July 2026).",
          url: "https://www.facebook.com/business/help/1346816142327858",
          publisher: "Meta",
        },
        {
          label: "Meta. Frequency. Meta Business Help Center (accessed 30 July 2026).",
          url: "https://www.facebook.com/business/help/1546570362238584",
          publisher: "Meta",
        },
        {
          label: "Meta. Understand fluctuations in ad performance. Meta Business Help Center (accessed 30 July 2026).",
          url: "https://www.facebook.com/business/help/1364841787225722",
          publisher: "Meta",
        },
      ],
      tags: [
        "Creative fatigue",
        "Ad frequency",
        "Meta Ads",
        "Cosmetics marketing",
      ],
    },
  },
};
