# Soleach Anahtar Kelime Haritası

**Bu dosya yayınlanmaz.** `docs/` klasörü bir route değil; `npm run build`
çıktısı olan `out/` içine girmez. Sadece repo'da yaşar, içerik üretirken
referans olarak kullanılır.

**Dürüstlük notu:** Bu bir *arama hacmi çalışması değil*. Aşağıdaki listede
hiçbir arama hacmi, zorluk skoru veya tıklama tahmini yok — çünkü elimizde
Search Console / Ahrefs / Semrush verisi yok ve repo'nun kendi kuralı
"kaynağı olmayan rakam yazıya girmez" diyor. Bu liste bir **semantik
kapsam haritası**: hangi sayfa hangi kavramı sahiplenmeli, hangi eş
anlamlıları taşımalı, nerede boşluk var. Gerçek hacim verisi geldiğinde
(Search Console kurulunca) öncelik sırası bu haritanın üzerine yazılır.

Tarih: 2026-08-01 · Kapsam: 13 blog yazısı + 15 kavram × (TR + EN)

---

## 1. Sayfa–niyet eşlemesi

Her sorgu tipinin **tek bir sahibi** olmalı; aksi halde kendi sayfalarımız
birbiriyle yarışır (keyword cannibalization).

| Niyet | Sorgu tipi | Sahibi |
|---|---|---|
| Ticari | "kozmetik reklam ajansı", "beauty marketing agency" | Ana sayfa + `/hizmetler` |
| Tanımsal | "ROAS nedir", "what is UGC" | **Kavramlar** (`/tr/kavramlar/*`) |
| Nasıl yapılır | "Meta pixel nasıl kurulur", "hook nasıl yazılır" | **Blog** |
| Karşılaştırma | "UGC mi stüdyo mu", "Shopify mi özel yazılım mı" | **Blog** |
| Sorun giderme | "CapCut font yüklenmiyor", "reklamım neden reddedildi" | **Blog** |
| Soru formu (GEO) | "hassas cilde uygun güneş kremi hangisi" | Blog FAQ + kavram FAQ |

**Kural:** Bir kavram sayfası asla "nasıl yapılır" içeriğine genişlemez —
o zaman blog yazısıyla çakışır. Kavram tanımlar, blog uygular, hizmet satar.

---

## 2. Ticari çekirdek (hizmet sayfalarının işi, blog destekler)

Blog ve kavramlar bu terimleri **doğrudan hedeflemez**, ama metin içinde
doğal geçtiği yerde hizmet sayfasına bağlanır.

**TR:** kozmetik reklam ajansı · güzellik markası reklam ajansı · kozmetik
dijital pazarlama ajansı · kozmetik sosyal medya ajansı · güzellik markaları
için performans pazarlama · kozmetik markası Instagram reklamı · kozmetik
e-ticaret ajansı · Shopify kurulum ajansı · kozmetik SEO ajansı

**EN:** beauty marketing agency · cosmetics ad agency · beauty brand
performance marketing · skincare marketing agency · cosmetics ecommerce
agency · Shopify agency for beauty brands · beauty brand SEO agency

---

## 3. Kavram kümesi — sahiplenilen terim + taşınması gereken eş anlamlılar

"Birincil" = H1/slug/metaTitle'da geçmeli. "Varyantlar" = metin, shortDef,
metaDescription veya tag içinde en az bir kez geçmeli (istifleme değil —
doğal geçiş).

| Kavram | TR birincil | TR varyantlar | EN birincil | EN varyantlar |
|---|---|---|---|---|
| `geo` | GEO nedir | üretken motor optimizasyonu, yapay zekâ görünürlüğü, ChatGPT'de görünmek, AI arama | what is GEO | generative engine optimization, AI visibility, AI search, answer engine optimization |
| `seo` | SEO nedir | arama motoru optimizasyonu, organik trafik, teknik SEO, kozmetik SEO | what is SEO | search engine optimization, organic traffic, technical SEO |
| `meta-pixel` | Meta Pixel nedir | Facebook pixel, Meta piksel kurulumu, dönüşüm takibi, piksel kodu | what is the Meta Pixel | Facebook pixel, pixel setup, conversion tracking |
| `capi` | Conversions API nedir | CAPI, sunucu taraflı takip, server-side tracking, sinyal kaybı | what is the Conversions API | CAPI, server-side tracking, signal loss |
| `roas` | ROAS nedir | reklam harcaması getirisi, ROAS nasıl hesaplanır, iyi ROAS kaçtır | what is ROAS | return on ad spend, how to calculate ROAS, good ROAS |
| `cpa` | CPA nedir | edinim başına maliyet, müşteri edinme maliyeti, CAC, satış başına maliyet | what is CPA | cost per acquisition, customer acquisition cost, CAC |
| `retargeting` | retargeting nedir | yeniden hedefleme, remarketing, sepeti terk edene reklam | what is retargeting | remarketing, abandoned cart ads, warm audience |
| `hook` | hook nedir | video açılışı, ilk 3 saniye, Reels hook, kaydırmayı durdurma | what is a hook | video opening, first three seconds, scroll stopper |
| `creative-testing` | kreatif testi nedir | reklam A/B testi, kreatif test, varyant testi | what is creative testing | ad A/B testing, split testing, ad variant testing |
| `ugc` | UGC nedir | kullanıcı üretimi içerik, UGC içerik, UGC creator | what is UGC | user-generated content, UGC creator, UGC ads |
| `ai-video` | yapay zekâ video üretimi | AI video, yapay zekâ reklam videosu, üretken video | AI video production | generative video, AI ad creative |
| `shopify` | Shopify nedir | Shopify mağaza, Shopify e-ticaret, Shopify kurulumu | what is Shopify | Shopify store, Shopify ecommerce |
| `cro` | CRO nedir | dönüşüm oranı optimizasyonu, dönüşüm oranı nasıl artırılır | what is CRO | conversion rate optimization, improve conversion rate |
| `funnel` | funnel nedir | pazarlama hunisi, satış hunisi, dönüşüm hunisi, huni yapısı | what is a marketing funnel | sales funnel, conversion funnel, funnel stages |
| `cta` | CTA nedir | harekete geçirici mesaj, call to action, CTA örnekleri | what is a CTA | call to action, CTA examples |

---

## 4. Blog kümesi — her yazının sahiplendiği sorgu

| Yazı | TR birincil sorgu | EN birincil sorgu |
|---|---|---|
| `geo-rehberi` | GEO nedir / yapay zekâ görünürlüğü | what is GEO / AI visibility |
| `instagram-reklam-rehberi` | kozmetik Instagram reklamı nasıl verilir | Instagram ads for beauty brands |
| `capcut-font-yukleme-hatasi` | CapCut font yüklenmiyor | CapCut font upload error |
| `ugc-neden-daha-cok-satiyor` | UGC neden daha çok satıyor | why UGC outsells studio content |
| `studyo-cekimine-ihtiyaciniz-var-mi` | stüdyo çekimi gerekli mi | do I need a studio photoshoot |
| `yapay-zeka-video-reklamcilik` | yapay zekâ reklam videosu | AI video in advertising |
| `shopify-magaza-kurulumu` | kozmetik Shopify mağaza kurulumu | Shopify store setup for cosmetics |
| `meta-pixel-olcum-hatalari` | Meta pixel satış görünmüyor / ölçüm hatası | Meta pixel missing purchases |
| `bes-hook-testi` | hook testi nasıl yapılır | how to test ad hooks |
| `ekranda-parfum-satmak` | parfüm online nasıl satılır | how to sell perfume online |
| `reklam-ajanslari-neden-shopify` | Shopify Meta pixel kurulumu | Shopify Meta pixel setup |
| `kreatif-yorgunlugu-frekans` | reklam frekansı kaç olmalı / kreatif yorgunluğu | ad frequency / creative fatigue |
| `sosyal-medya-analitik-araclari` | sosyal medya analiz araçları / Instagram analiz aracı | social media analytics tools / Instagram analytics tools |

**Varyantlar —** TR: sosyal medya analiz aracı · Instagram istatistik aracı ·
TikTok analiz aracı · sosyal medya raporlama aracı · Instagram Insights ·
rakip analizi aracı. EN: social media analytics tool · Instagram insights ·
TikTok analytics · social media reporting tool · competitor benchmarking tool.
Sahibi **blog** (§1: karşılaştırma niyeti). Kavram sayfası açılmadı — yazı
araçları karşılaştırıyor, bir terim tanımlamıyor.

---

## 5. Kategori modifiye edicileri

Soleach yalnızca güzellik kategorisinde çalışıyor; niş görünürlük bu
modifiye edicilerden gelir. Şu an içerikte **"kozmetik" ve "güzellik"
baskın, alt kategoriler zayıf.**

| Alt kategori | TR | EN | Mevcut durum |
|---|---|---|---|
| Makyaj | makyaj markası, fondöten, ruj, maskara | makeup brand, foundation, lipstick | ⚠️ neredeyse yok |
| Cilt bakımı | cilt bakımı markası, serum, niasinamid, retinol, hassas cilt | skincare brand, serum, sensitive skin | ⚠️ zayıf |
| Parfüm | parfüm markası, koku, nota, EDP | perfume brand, fragrance, scent notes | ✅ `ekranda-parfum-satmak` |
| Saç bakımı | saç bakımı markası, şampuan, saç serumu | haircare brand, shampoo | ❌ yok |
| Güneş bakımı | güneş kremi, SPF, güneş koruyucu | sunscreen, SPF | ❌ yok |
| Doğal / vegan | vegan kozmetik, cruelty-free, doğal kozmetik, clean beauty | vegan cosmetics, cruelty-free, clean beauty | ❌ yok |

---

## 6. GEO / soru formu sorgular

Üretken motorlar soru formundaki blokları alıntılıyor. FAQ alanları bu
işin ana taşıyıcısı — mevcut yazılarda güçlü, kavramlarda ise her kavram
başına sadece 2 soru var (CTA hariç: 3).

Cevaplanması gereken, henüz cevaplanmamış soru tipleri:

- "kozmetik markası reklam bütçesi ne kadar olmalı"
- "kozmetik reklamı neden reddedilir" (Meta politika)
- "kozmetikte önce-sonra görseli kullanılabilir mi"
- "ChatGPT markamı tanıyor mu / nasıl öğretirim"
- "vegan / doğal / cruelty-free iddiası nasıl yazılır"

---

## 7. Etiket (tag) taksonomisi

`tags` alanı schema `keywords`'e gidiyor. Aynı şeyi iki farklı yazan etiket
entity sinyalini böler. Kanonik biçim:

| Kanonik TR | Birleştirilen varyantlar |
|---|---|
| Kozmetik pazarlaması | Kozmetik, Güzellik markaları |
| Meta Ads | Meta |
| Kreatif testi | Kreatif test |
| A/B testi | A/B test |
| Ölçümleme | Ölçüm |
| Sosyal medya analitiği | Sosyal medya analizi, Analitik |
| Dönüşüm oranı optimizasyonu | Dönüşüm optimizasyonu |

| Kanonik EN | Birleştirilen varyantlar |
|---|---|
| Cosmetics marketing | Cosmetics, Beauty brands |
| Meta Ads | Meta |
| Creative testing | Creative testing (post: "Hooks" → "Hook") |
| A/B testing | — |
| Measurement | — |
| Social media analytics | Social analytics, Analytics |
| Conversion rate optimization | Conversion optimization |

---

## 8. Tespit edilen boşluklar — 2026-08-01 denetimi

### Kapatıldı (bu denetimde düzeltildi)

1. **Kavramların 2. H2'si anahtar kelime taşımıyordu.** 15 kavramın 30
   sayfasında ikinci başlık birebir aynıydı: "Kozmetik markaları için neden
   önemli?" / "Why it matters for beauty brands". Terim başlığa eklendi
   ("Kozmetik markaları için ROAS neden önemli?") — anlam aynı, H2 artık
   anahtar kelime taşıyor ve 30 sayfa birbirinin kopyası değil.
2. **metaDescription'lar kısaydı.** 30 kavram açıklamasının 17'si 140
   karakterin altındaydı (en kısası 116). Rehberdeki 140-160 aralığına
   çekildi; kazanılan yere eş anlamlılar yerleştirildi.
3. **metaTitle'lar sınırı aşıyordu.** 60 karakter kuralını aşan 5 kavram +
   5 blog başlığı kısaltıldı (en uzunu 68 karakterdi — SERP'te kesiliyordu).
4. **Kavramlarda hiç iç bağlantı yoktu.** 30 kavram sayfası link alıyor
   ama hiç link vermiyordu. Her kavrama ilgili yazıya/kavrama giden bağlantı
   eklendi.
5. **`cta` kavramı öksüzdü** (`postIds: []`). İlgili yazılara bağlandı.
6. **Etiket taksonomisi dağınıktı** (§7). Kanonik biçime çekildi.
7. **Yazısı olan ama kavramı olmayan iki terim eklendi:** `frequency`
   (Reklam Frekansı / Ad Frequency) ve `creative-fatigue` (Kreatif Yorgunluğu /
   Creative Fatigue). İkisi de `kreatif-yorgunlugu-frekans` yazısına bağlandı;
   kavram sayısı 15 → 17.

### Açık kalan boşluklar (yeni içerik gerektirir — bu denetimin kapsamı dışı)

**Kategori sayfalarını besleyecek eksik kavramlar:**

CTR (tıklama oranı) · AOV (sepet ortalaması) · LTV · Atıf modeli
(attribution) · Benzer kitle (lookalike) · Advantage+ / ASC · Sepet terki ·
Yapılandırılmış veri (schema markup) · Açılış sayfası (landing page) ·
Reels · TikTok Ads · Mikro-influencer

**Not:** `seo-geo` bir headline hizmet ama sadece 2 kavramı var (geo, seo);
`web-ecommerce` de 2 (shopify, cro). Kavram grafiğinin ağırlığı `ads` ve
`creative` tarafında. Yeni kavram eklerken `content/concepts/index.ts`
listesinin **SONUNA** eklenir (append-only — bkz. içerik üretim rehberi §5).

**Eksik yazılar:** İçerik üretim rehberi §4'teki 20 konudan 12'si hâlâ
yazılmadı; özellikle 3, 4, 8, 10, 11 numaralı olanlar §5'teki boş alt
kategorileri (cilt bakımı, makyaj, saç bakımı, güneş bakımı) kapatıyor.
