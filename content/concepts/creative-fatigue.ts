import type { Concept } from "@/lib/concepts";

export const creativeFatigue: Concept = {
  id: "creative-fatigue",
  category: "ads",
  publishedAt: "2026-08-01",
  related: ["creative-testing", "hook"],
  postIds: ["kreatif-yorgunlugu-frekans"],
  locales: {
    tr: {
      slug: "kreatif-yorgunlugu",
      name: "Kreatif Yorgunluğu",
      graphLabel: "Kreatif yorgunluğu",
      metaTitle: "Kreatif Yorgunluğu Nedir? Ne Zaman Yenilemeli | Soleach",
      metaDescription:
        "Kreatif yorgunluğu nedir? Aynı kitlenin aynı reklamı çok kez görmesiyle performansın düşmesi; tanımı, panelde görünen sinyalleri ve yenileme kararı.",
      shortDef:
        "Bir kitlenin aynı kreatifi çok fazla kez görmesi sonucu etkileşimin ve performansın düşmesi; reklamın kötüleşmesinden değil, kitlenin onu öğrenmesinden kaynaklanan doğal amortisman.",
      sections: [
        {
          h2: "Kreatif yorgunluğu nedir?",
          blocks: [
            {
              type: "p",
              text: "Kreatif yorgunluğu, bir kitlenin aynı kreatifi çok fazla kez görmesi durumunda ortaya çıkar: insanların reklamla etkileşime girme olasılığı düşer ve bu da sonuç başına maliyeti yükseltir. Meta olguyu kendi yardım merkezinde tam bu şekilde tanımlıyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "Önemli olan tekrarın etkisinin doğrusal olmaması: bir noktaya kadar tanınırlığı besler, sonra aşındırır. Akademik literatürde de aynı eğri görünür — ve aşınma kalıcı değildir, dinlendirilen bir kreatifin etkisi zamanla kısmen geri gelir. Yani 'yorulmuş' bir reklam ille de silinecek bir reklam değildir.",
            },
          ],
        },
        {
          h2: "Kozmetik markaları için kreatif yorgunluğu neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Tekrarın tolere edilme sınırı markanın tanınırlığına bağlıdır: tanınan bir markanın rahatça sürdürebileceği tekrar seviyesi, yeni bir kozmetik markası için erken yorulma noktası olabilir. Tanıdık bir markanın ısrarı hatırlatma gibi okunurken, tanınmayan markanınki rahatsızlık üretir. Pratik sonucu, kreatif üretim temposunu bir lüks değil bütçenin bir kalemi olarak planlamaktır.",
            },
            {
              type: "ul",
              items: [
                "Meta, yayın (Delivery) sütununda 'Kreatif sınırlı' ya da 'Kreatif yorgunluğu' etiketiyle uyarır.",
                "Panelde görülen her düşüş yorgunluk değildir; ölçüm bozulması da aynı görüntüyü üretir.",
                "Yorgunluk aynı görsel ya da videonun bütün kampanyalarındaki gösterimlerinde birikir, tek kampanyada değil.",
              ],
            },
            {
              type: "p",
              text: "Erken uyarı sinyali için [reklam frekansı](/tr/kavramlar/reklam-frekansi) kavramına, kreatifi neyle değiştireceğin için [kreatif testi](/tr/kavramlar/kreatif-testi) kavramına bakabilirsin; eşikler ve yenileme kararı [kreatif yorgunluğu yazımızda](/tr/blog/kreatif-yorgunlugu-reklam-frekansi) kaynaklarıyla anlatılıyor.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kreatif yorgunluğu ile kitle tükenmesi aynı şey mi?",
          a: "Hayır, ama panelde benzer görünürler. Kreatif yorgunluğunda sorun mesajın kendisidir: aynı kişiler aynı videoyu çok gördü. Kitle tükenmesinde ise ulaşılabilir kitlenin tamamına zaten ulaşılmıştır. Ayırt etmenin pratik yolu kreatifi değiştirip aynı kitlede test etmektir.",
        },
        {
          q: "Yorulan reklamı kapatmalı mıyım?",
          a: "Şart değil. Meta, yeni bir reklam açarken orijinali duraklatmak ya da kapatmak yerine yayında bırakmanın sonuçları en üst düzeye çıkarabileceğini yazıyor ([Meta İşletme Yardım Merkezi](https://www.facebook.com/business/help/1346816142327858)). Aşınma kalıcı olmadığı için iyi çalışmış bir kreatifi silmek yerine dinlendirip geri getirmek de bir seçenektir.",
        },
      ],
      tags: ["Kreatif yorgunluğu", "Reklam frekansı", "Kreatif strateji", "Meta Ads"],
    },
    en: {
      slug: "creative-fatigue",
      name: "Creative Fatigue",
      graphLabel: "Creative fatigue",
      metaTitle: "What Is Creative Fatigue? When to Refresh | Soleach Concepts",
      metaDescription:
        "Creative fatigue explained: performance dropping because the same audience has seen the same ad too often, the signals Meta shows, and when to refresh.",
      shortDef:
        "The drop in engagement and performance that follows an audience seeing the same creative too many times; not the ad getting worse, but the audience learning it.",
      sections: [
        {
          h2: "What is creative fatigue?",
          blocks: [
            {
              type: "p",
              text: "Creative fatigue sets in when an audience sees the same creative too many times: people become less likely to engage with the ad, which pushes cost per result up. That is how Meta defines the phenomenon in its own help centre ([Meta Business Help Centre](https://www.facebook.com/business/help/1346816142327858)).",
            },
            {
              type: "p",
              text: "What matters is that the effect of repetition is not linear: up to a point it builds familiarity, after which it erodes. The same curve shows up in the academic literature — and the erosion is not permanent, since a rested creative partly recovers its effect over time. A 'fatigued' ad is not necessarily an ad to delete.",
            },
          ],
        },
        {
          h2: "Why creative fatigue matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "How much repetition an audience tolerates depends on how well they know the brand: a level a familiar brand sustains comfortably can be the early fatigue point for a new beauty brand. Persistence from a familiar brand reads as a reminder; the same persistence from an unknown one produces irritation. The practical consequence is planning creative output as a budget line, not a luxury.",
            },
            {
              type: "ul",
              items: [
                "Meta flags it in the Delivery column with a 'Creative limited' or 'Creative fatigue' label.",
                "Not every drop you see is fatigue; broken measurement produces the same picture.",
                "Fatigue accumulates across every recent delivery of the same image or video, not within a single campaign.",
              ],
            },
            {
              type: "p",
              text: "For the early-warning signal see [ad frequency](/en/concepts/ad-frequency), and for what to replace the creative with see [creative testing](/en/concepts/creative-testing); the thresholds and the refresh decision are covered with sources in our [creative fatigue](/en/blog/creative-fatigue-ad-frequency-when-to-refresh) post.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is creative fatigue the same as audience saturation?",
          a: "No, though they look alike in the dashboard. With creative fatigue the problem is the message itself: the same people have seen the same video too often. With saturation you have simply reached everyone reachable. The practical way to tell them apart is to change the creative and test it on the same audience.",
        },
        {
          q: "Should I turn off a fatigued ad?",
          a: "Not necessarily. Meta writes that leaving the original ad running, rather than pausing or switching it off when you launch a new one, can maximise results ([Meta Business Help Centre](https://www.facebook.com/business/help/1346816142327858)). Since the erosion is not permanent, resting a creative that worked and bringing it back is also an option.",
        },
      ],
      tags: ["Creative fatigue", "Ad frequency", "Creative strategy", "Meta Ads"],
    },
  },
};
