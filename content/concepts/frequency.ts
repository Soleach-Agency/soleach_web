import type { Concept } from "@/lib/concepts";

export const frequency: Concept = {
  id: "frequency",
  category: "ads",
  publishedAt: "2026-08-01",
  related: ["creative-fatigue", "retargeting"],
  postIds: ["kreatif-yorgunlugu-frekans"],
  locales: {
    tr: {
      slug: "reklam-frekansi",
      name: "Reklam Frekansı",
      graphLabel: "Frekans",
      metaTitle: "Reklam Frekansı Nedir? Nasıl Hesaplanır | Soleach Kavramlar",
      metaDescription:
        "Reklam frekansı nedir, nasıl hesaplanır? Bir kişinin aynı reklamı ortalama kaç kez gördüğünü gösteren metriğin tanımı ve neden tek bir eşiği yok.",
      shortDef:
        "Gösterim sayısının erişime bölünmesiyle bulunan oran; kitledeki bir kişinin aynı reklamı ortalama kaç kez gördüğünü gösterir — kreatif yorgunluğunun en yakın erken uyarı sinyali.",
      sections: [
        {
          h2: "Reklam frekansı nedir?",
          blocks: [
            {
              type: "p",
              text: "Frekans, bir reklamın gösterim sayısının erişimine bölünmesiyle bulunur: aynı reklamı gören ortalama kişi başına kaç gösterim düştüğünü söyler. Meta bunu her hesabın reklamı ortalama kaç kez gördüğü olarak tanımlıyor ve tahmini bir metrik olduğunu belirtiyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1546570362238584)).",
            },
            {
              type: "p",
              text: "Kritik kelime 'ortalama'. Frekans 3 göründüğünde bu, herkesin reklamı üç kez gördüğü anlamına gelmez; kitlenin büyük bölümü bir kez görmüşken küçük bir çekirdek onu çok daha fazla görmüş olabilir. Bu yüzden frekans tek başına bir karar metriği değil, sonuç başına maliyetle birlikte okunan bir bağlam metriğidir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için reklam frekansı neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Frekans bir aritmetik sonucudur: gösterim ÷ erişim. Küçük bir kitleye sabit bütçe akıtan marka frekansın günler içinde yükseldiğini görür; aynı bütçe çok daha büyük bir kitlede aylarca düşük frekansta kalır. Yeni ve niş kozmetik markalarının bu duvara daha hızlı toslamasının sebebi kreatifin kötülüğü değil, kitle büyüklüğüdür.",
            },
            {
              type: "ul",
              items: [
                "Evrensel bir güvenli eşik yoktur; Meta bir sayı vermek yerine frekansı sonuçlarla birlikte izlemeyi önerir.",
                "Frekans yükselirken sonuç başına maliyet de yükseliyorsa sinyal ciddiye alınmalıdır.",
                "Retargeting katmanında kitle küçük olduğu için frekans her zaman daha hızlı tırmanır.",
              ],
            },
            {
              type: "p",
              text: "Frekans yükselirken performansın neden düştüğünü [kreatif yorgunluğu](/tr/kavramlar/kreatif-yorgunlugu) kavramında; eşikleri, panel sinyallerini ve yenileme kararını ise [kreatif yorgunluğu ve reklam frekansı yazımızda](/tr/blog/kreatif-yorgunlugu-reklam-frekansi) kaynaklarıyla inceledik.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "İdeal reklam frekansı kaçtır?",
          a: "Tek bir doğru sayı yok. Meta, frekansın reklam seti başına ortalama 1-2 olabileceğini ya da bütçe, kitle büyüklüğü ve yayın süresine göre çok daha yüksek çıkabileceğini söylüyor; bir eşik vermek yerine frekansı sonuçlarla birlikte izlemeyi öneriyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1546570362238584)). İnternette dolaşan 'frekans 3'ü geçmesin' tipi kurallar kaynaksızdır.",
        },
        {
          q: "Frekansı nasıl düşürürüm?",
          a: "İki yoldan biriyle: kitleyi büyüterek ya da yayın hızını yavaşlatarak. Frekans gösterimin erişime bölümü olduğu için paydayı büyütmek de payı küçültmek de aynı sonuca çıkar. Üçüncü yol kreatif hacmini artırmaktır — aynı kitleye aynı şeyi değil, farklı şeyleri göstermek.",
        },
      ],
      tags: ["Reklam frekansı", "Frekans", "Reklam metrikleri", "Meta Ads"],
    },
    en: {
      slug: "ad-frequency",
      name: "Ad Frequency",
      graphLabel: "Frequency",
      metaTitle: "What Is Ad Frequency? How to Read It | Soleach Concepts",
      metaDescription:
        "Ad frequency explained: impressions divided by reach, how often the average person sees your ad, and why there is no universal safe threshold.",
      shortDef:
        "Impressions divided by reach — how many times the average person in your audience saw the same ad; the closest thing to an early-warning signal for creative fatigue.",
      sections: [
        {
          h2: "What is ad frequency?",
          blocks: [
            {
              type: "p",
              text: "Frequency is an ad's impressions divided by its reach: how many impressions fall on the average person who saw it. Meta defines it as the average number of times each account saw your ad, and notes that it is an estimated metric ([Meta Business Help Centre](https://www.facebook.com/business/help/1546570362238584)).",
            },
            {
              type: "p",
              text: "The critical word is 'average'. A frequency of 3 does not mean everyone saw the ad three times; most of the audience may have seen it once while a small core saw it far more. That is why frequency is not a decision metric on its own but a context metric, read alongside cost per result.",
            },
          ],
        },
        {
          h2: "Why ad frequency matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "Frequency is the output of arithmetic: impressions ÷ reach. A brand pushing a fixed budget into a small audience watches frequency climb within days; the same budget stays at low frequency for months in a much larger one. New and niche beauty brands hit that wall faster not because their creative is worse, but because their audience is smaller.",
            },
            {
              type: "ul",
              items: [
                "There is no universal safe threshold; instead of naming a number, Meta recommends watching frequency together with results.",
                "If cost per result is climbing while frequency climbs, the signal is worth acting on.",
                "In the retargeting layer the audience is small, so frequency always rises faster.",
              ],
            },
            {
              type: "p",
              text: "Why performance drops as frequency climbs is covered under [creative fatigue](/en/concepts/creative-fatigue); the thresholds, the signals in Ads Manager and the refresh decision are covered with sources in our [creative fatigue and ad frequency](/en/blog/creative-fatigue-ad-frequency-when-to-refresh) post.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "What is the ideal ad frequency?",
          a: "There is no single right number. Meta says frequency may average 1-2 per ad set, or run much higher depending on budget, audience size and duration; rather than naming a threshold it recommends monitoring frequency together with results ([Meta Business Help Centre](https://www.facebook.com/business/help/1546570362238584)). The 'never exceed a frequency of 3' rules circulating online have no source behind them.",
        },
        {
          q: "How do I bring frequency down?",
          a: "One of two ways: grow the audience or slow the delivery. Since frequency is impressions divided by reach, enlarging the denominator and shrinking the numerator lead to the same place. A third route is producing more creative — showing the same audience different things rather than the same thing.",
        },
      ],
      tags: ["Ad frequency", "Frequency", "Ad metrics", "Meta Ads"],
    },
  },
};
