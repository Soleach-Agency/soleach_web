import type { Concept } from "@/lib/concepts";

export const cta: Concept = {
  id: "cta",
  category: "creative",
  publishedAt: "2026-07-30",
  related: ["hook", "funnel", "cro"],
  postIds: ["bes-hook-testi"],
  locales: {
    tr: {
      slug: "cta",
      name: "Harekete Geçirici Mesaj (CTA)",
      graphLabel: "CTA",
      metaTitle: "CTA Nedir? Harekete Geçirici Mesaj | Soleach Kavramlar",
      metaDescription:
        "CTA (call to action) nedir? Reklamda, üründe ve sayfada bir sonraki adımı söyleyen mesajın tanımı, işlevi ve kozmetik markaları için doğru kullanımı.",
      shortDef:
        "İzleyiciye ya da ziyaretçiye bir sonraki adımı açıkça söyleyen çağrı — \"şimdi satın al\", \"tonunu bul\", \"kaydet\"; reklamla dönüşüm arasındaki köprü.",
      sections: [
        {
          h2: "CTA nedir?",
          blocks: [
            {
              type: "p",
              text: "CTA (call to action, harekete geçirici mesaj), bir reklamın, videonun ya da sayfanın karşısındaki kişiye \"şimdi şunu yap\" dediği yerdir. Bir cümle olabilir (\"tonunu bul\"), bir buton olabilir (\"Sepete ekle\"), platformun kendi CTA etiketi olabilir (\"Alışveriş yap\", \"Daha fazla bilgi\") ya da videonun son karesindeki bir yönlendirme olabilir. Ortak özellikleri: tek bir eylemi, açık bir dille istemek.",
            },
            {
              type: "p",
              text: "İyi CTA, ikna edilmiş bir kişinin önündeki son belirsizliği kaldırır. Bu yüzden işlevi motive etmek değil, yönlendirmektir: içerik ilgiyi zaten kurmuşsa CTA sadece kapıyı gösterir. İçerik ikna etmemişse hiçbir CTA açığı kapatmaz — kötü CTA satışı engeller, iyi CTA satın alma sebebi üretmez.",
            },
            {
              type: "ul",
              items: [
                "Tek eylem: aynı kreatifte hem \"takip et\" hem \"satın al\" istemek, ikisinin de olma ihtimalini düşürür.",
                "Eylem dili: \"tıkla\" değil, tıklamadan sonra ne olacağını söyleyen bir fiil — \"tonunu bul\", \"rutini gör\".",
                "Beklentiyle tutarlılık: CTA neyi vaat ediyorsa açılan sayfa onu göstermeli; uyuşmazlık en pahalı dönüşüm kaybıdır.",
                "Yerleştirme: kısa videoda CTA'yı yalnızca sona bırakmak, videoyu sonuna kadar izlemeyen çoğunluğu kapsam dışı bırakır.",
              ],
            },
          ],
        },
        {
          h2: "Kozmetik markaları için CTA neden önemli?",
          blocks: [
            {
              type: "p",
              text: "Güzellik alışverişinde satın almanın önündeki engel çoğu zaman ilgisizlik değil, tereddüttür: \"bu ton bana uyar mı\", \"cildim buna ne tepki verir\". Bu yüzden kozmetikte en iyi çalışan CTA'lar satın almayı doğrudan zorlamak yerine tereddüdü çözen bir sonraki adımı önerir — ton eşleştirme, içerik listesi, kullanım rehberi, örnek boy.",
            },
            {
              type: "p",
              text: "Huninin katına göre de değişir: markayı ilk kez gören birine \"şimdi satın al\" demek, henüz kurulmamış bir güvenin karşılığını istemektir; aynı mesaj ürün sayfasını gezmiş bir kişide doğru mesajdır. Reklam kreatifinde CTA'yı, kişinin markayla ilişkisinin neresinde olduğuna göre seçmek en temel ayardır.",
            },
            {
              type: "ul",
              items: [
                "Soğuk kitle: keşif ve tereddüt çözen CTA — \"tonunu bul\", \"içeriği incele\".",
                "Sıcak kitle ve yeniden hedefleme: doğrudan satın alma CTA'sı; teklif varsa CTA'da görünür olsun.",
                "Organik içerik: kaydettiren ve paylaştıran CTA, satış CTA'sından daha çok erişim üretebilir.",
                "Sağlık iddiası içeren CTA'dan kaçın: kozmetik ürün tedavi vaat edemez, CTA da bunu ima edemez.",
              ],
            },
            {
              type: "p",
              text: "CTA'yı da bir test değişkeni olarak ele almayı [hook testi yazımızda](/tr/blog/ayni-urun-5-farkli-hook-hangisi-durduruyor) anlattık; açılışla ilişkisi için [hook](/tr/kavramlar/hook), indiği sayfa için [CRO](/tr/kavramlar/donusum-orani-optimizasyonu) kavramına bak.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "CTA'yı videonun neresine koymalıyım?",
          a: "Yalnızca sonuna değil. Kısa videoyu sonuna kadar izleyenler azınlıkta olduğu için, sözlü ya da metin bir yönlendirmeyi ortada bir kez daha vermek genellikle işe yarar. Kural: içerik vaadini teslim ettikten hemen sonra, izleyici hâlâ oradayken sor.",
        },
        {
          q: "Aynı reklamda birden fazla CTA olabilir mi?",
          a: "Aynı eylemi tekrarlayan birden fazla yerleşim sorun değil; farklı eylemler istemek sorundur. \"Takip et\" ile \"satın al\" arasında seçim yaptırmak, kararı izleyiciye devretmek demektir ve genellikle hiçbiri seçilmez.",
        },
        {
          q: "CTA'yı test etmeye değer mi?",
          a: "Değer, ama beklentiyi doğru kur: CTA genellikle kreatifin en küçük kaldıracıdır — hook ve teklif ondan çok daha büyük fark yaratır. Test edeceksen tek değişkenli test et ve kararı beğeniden değil dönüşüm maliyetinden oku.",
        },
      ],
      tags: ["CTA", "Harekete geçirici mesaj", "Reklam metni", "Dönüşüm"],
    },
    en: {
      slug: "cta",
      name: "Call to Action (CTA)",
      graphLabel: "CTA",
      metaTitle: "What Is a CTA? Call to Action Explained | Soleach Concepts",
      metaDescription:
        "CTA (call to action) explained: the line that tells a viewer what to do next, how it works in ads and on product pages, and how beauty brands should use it.",
      shortDef:
        "The prompt that tells a viewer or visitor exactly what to do next — \"shop now\", \"find your shade\", \"save this\"; the bridge between the ad and the conversion.",
      sections: [
        {
          h2: "What is a CTA?",
          blocks: [
            {
              type: "p",
              text: "A CTA (call to action) is the point where an ad, a video or a page tells the person in front of it to do one specific thing. It can be a line of copy (\"find your shade\"), a button (\"Add to cart\"), a platform CTA label (\"Shop now\", \"Learn more\") or a prompt in a video's closing frame. What they share: asking for a single action, in plain language.",
            },
            {
              type: "p",
              text: "A good CTA removes the last bit of uncertainty for someone already persuaded. Its job is direction, not motivation: if the content has built interest, the CTA simply points at the door. If the content hasn't, no CTA closes that gap — a bad CTA can block a sale, but a good one doesn't create a reason to buy.",
            },
            {
              type: "ul",
              items: [
                "One action: asking for both \"follow\" and \"buy\" in the same creative lowers the odds of either.",
                "Action language: not \"click here\" but a verb describing what happens next — \"find your shade\", \"see the routine\".",
                "Consistency with expectation: whatever the CTA promises, the landing page must deliver; a mismatch is the most expensive conversion loss there is.",
                "Placement: saving the CTA for the very end of a short video excludes the majority who never reach the end.",
              ],
            },
          ],
        },
        {
          h2: "Why the CTA matters for beauty brands",
          blocks: [
            {
              type: "p",
              text: "In beauty, what stands between interest and purchase is usually hesitation rather than indifference: \"will this shade suit me\", \"how will my skin react\". So the CTAs that work best in cosmetics often propose the next step that resolves the hesitation — shade matching, ingredient list, usage guide, sample size — instead of pushing straight for the sale.",
            },
            {
              type: "p",
              text: "It also depends on the funnel stage: telling someone who has just met your brand to \"buy now\" asks for trust that hasn't been built yet, while the same line is exactly right for someone who has browsed the product page. Choosing the CTA according to where the person stands in their relationship with the brand is the most basic adjustment in ad creative.",
            },
            {
              type: "ul",
              items: [
                "Cold audience: discovery and hesitation-resolving CTAs — \"find your shade\", \"check the ingredients\".",
                "Warm audience and retargeting: a direct purchase CTA; if there's an offer, make it visible in the CTA.",
                "Organic content: a CTA that earns saves and shares can generate more reach than a sales CTA.",
                "Avoid CTAs that imply a health claim: a cosmetic product cannot promise treatment, and neither can its CTA.",
              ],
            },
            {
              type: "p",
              text: "We treat the CTA as one test variable among others in our [hook testing](/en/blog/same-product-five-hooks-which-one-stops-the-scroll) post; for its relationship to the opening see [hook](/en/concepts/hook), and for the page it lands on see [CRO](/en/concepts/conversion-rate-optimization).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Where in a video should the CTA go?",
          a: "Not only at the end. Since only a minority watch a short video to completion, repeating the prompt once mid-video — spoken or on screen — usually helps. The rule: ask right after you've delivered what the content promised, while the viewer is still there.",
        },
        {
          q: "Can one ad have more than one CTA?",
          a: "Repeating the same action in several places is fine; asking for different actions is not. Making someone choose between \"follow\" and \"buy\" hands the decision to the viewer, and usually neither gets chosen.",
        },
        {
          q: "Is the CTA worth testing?",
          a: "Yes, but calibrate your expectations: the CTA is usually the smallest lever in a creative — the hook and the offer move far more. If you test it, change one variable at a time and read the result from cost per conversion, not from likes.",
        },
      ],
      tags: ["CTA", "Call to action", "Ad copy", "Conversion"],
    },
  },
};
