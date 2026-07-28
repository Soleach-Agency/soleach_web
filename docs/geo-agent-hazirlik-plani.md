# GEO & Agent Hazırlık Planı

Cloudflare'in resmî tarayıcısı ([isitagentready.com](https://isitagentready.com/soleach.com))
üzerinden 24 Temmuz 2026'da alınan taban ölçüm ve buradan çıkan iş listesi.

> **Durum (24.07.2026): 21 → 79 / 100 · Level 1 → Level 5 (Agent-Native).**
> **Tamamlandı.** Discoverability 4/4, Content 1/1, Bot Access Control 2/2,
> API/Auth/MCP 4/7. Kalan 3 kontrol (OAuth ×2 + auth.md) bilerek boş —
> gerekçesi aşağıda. Bu, dürüst tavan.
>
> İki sürpriz: DNSSEC gerekmedi (`_mcp._agents` yayına girince DNS-AID geçti),
> ve Markdown for Agents Free plan'de olmadığı için kendimiz yazdık.

## Taban ölçüm (24.07.2026, 17:51)

**Skor: 21 / 100 — Level 1 (Basic Web Presence)**

Skor formülü basit: `geçen kontrol / toplam kontrol`. 14 kontrolün 3'ü geçiyor
(3/14 = %21). Yani her kontrol ≈ 7 puan.

| Kategori | Durum | Kontroller |
| --- | --- | --- |
| Discoverability | 2/4 | robots.txt ✅ · sitemap.xml ✅ · Link header ❌ · DNS-AID ❌ |
| Content | 0/1 | Markdown negotiation ❌ |
| Bot Access Control | 1/2 | AI bot kuralları ✅ · Content Signals ❌ · (Web Bot Auth ❌, sayılmıyor) |
| API, Auth, MCP & Skill | 0/7 | API Catalog · OAuth/OIDC · OAuth Protected Resource · auth.md · MCP Server Card · Agent Skills index · WebMCP — hepsi ❌ |
| Commerce | 0/4 | Opsiyonel, skoru etkilemiyor (x402 · MPP · UCP · ACP) |

### Taramadaki bir yanlış negatif

`Link header` kontrolü "header yok" diyor ama canlıda **var** — `public/_headers`
dosyası 17:27'de eklenmiş, tarama 17:51'de yapılmış; büyük ihtimalle o an henüz
deploy edilmemişti. `curl -I https://soleach.com/tr` şu an header'ı döndürüyor.
Yeniden tarandığında bu kontrol kendiliğinden geçmeli → +7 puan.

## Kapsam kararı: neyi yapmıyoruz ve neden

Bu tarayıcı "ajans sitesi" için değil, **API'si ve e-ticareti olan siteler** için
tasarlanmış. Puan uğruna sahte metadata yayınlamak zararlı — ajanları var olmayan
uç noktalara yönlendirir ve güveni bozar. Bu yüzden şunlar **bilerek atlanıyor**:

- **OAuth / OIDC discovery, OAuth Protected Resource, auth.md** (3 kontrol, 21 puan)
  → Korunan bir API yok. Hiçbir yere gitmeyen OAuth metadata'sı yayınlamak yanıltıcı olur.
- **Web Bot Auth** → Bu, *kendi botunuz* varsa imzalama içindir. İçerik sitesinin botu yok.
- **Commerce (x402 / MPP / UCP / ACP)** → Skoru etkilemiyor, ajans online satış yapmıyor.

**Gerçekçi tavan: ~79/100.** Kalan 21 puan, sahte olmadan alınamaz.

---

## Uygulama sırası

Her adım kendi başına tamamlanabilir ve deploy edilebilir. Kota/rate limit
nedeniyle yarıda kalırsa, kalınan adımdan devam edilir.

### Faz 1 — Repo tarafı (tek deploy, +5 kontrol ≈ +35 puan)

Hepsi bu repoda kod değişikliği; Cloudflare paneline gerek yok.

- [ ] **1.1 robots.txt → Content Signals** (`app/robots.ts`)
      `Content-Signal: search=yes, ai-input=yes, ai-train=yes` + adı geçen AI
      botları için açık `Allow` kuralları + `llms.txt` referansı. → +1 kontrol
- [ ] **1.2 Tek sıçramalı redirect** (`public/_redirects`)
      Şu an `/` → `/tr/` (302) → `/tr` (308) = iki sıçrama. `/` → `/tr` yapılacak.
      Skor kontrolü değil ama tarama bütçesi ve ajan davranışı için önemli.
- [ ] **1.3 Link header zenginleştirme** (`public/_headers`)
      Mevcut `describedby`/`sitemap`/`alternate` üstüne `api-catalog` ve
      `service-doc` rel'leri. → Zaten geçecek olan kontrolü sağlamlaştırır.
- [ ] **1.4 Agent Skills index** (`public/.well-known/agent-skills/index.json`)
      Gerçek içerik: ajanlara Soleach'in ne yaptığını, hangi markalara uygun
      olduğunu ve nasıl brief alınacağını öğreten skill dosyaları. → +1 kontrol
- [ ] **1.5 API Catalog** (`public/.well-known/api-catalog`)
      RFC 9727 linkset — llms.txt, sitemap, agent-skills ve (Faz 4'ten sonra)
      MCP uç noktasını işaret eder. → +1 kontrol
- [ ] **1.6 WebMCP** (`app/[lang]/layout.tsx` içinde script)
      `navigator.modelContext.provideContext()` ile gerçek araçlar: hizmetleri
      listele, blogda ara, brief formunu aç. → +1 kontrol
- [ ] **1.7 llms-full.txt** (`scripts/` ile üretilen)
      Tüm blog içeriğinin tek dosyada düz metin hâli. Skor kontrolü değil —
      doğrudan GEO değeri: ajanlar tek fetch'te tüm içeriği alır.
- [ ] **1.8 Schema.org zenginleştirme** (`lib/schema.ts`)
      Organization'a `foundingDate`, `address`, `slogan`; sayfalara `WebPage` +
      `speakable`. Skor kontrolü değil — klasik GEO/rich-result değeri.

### Faz 2 — Cloudflare paneli (BEN YAPAMIYORUM, +1 kontrol ≈ +7 puan)

⚠️ **Bu adım kullanıcı müdahalesi gerektiriyor.** Bağlı Cloudflare API
token'ı zone ayarlarını okuyamıyor/yazamıyor (`10000: Authentication error`).
Token'ın izinleri: DNS ✅, Pages ✅, Rulesets ✅, Workers ✅, AI Search ✅ —
ama **Zone Settings ❌**.

- [ ] **2.1 Markdown for Agents'ı aç**
      Panelden: zone → Settings → "Markdown for Agents" → On.
      Ajanlar `Accept: text/markdown` gönderdiğinde Cloudflare HTML'i uçuşta
      markdown'a çevirir; token tüketimi %90+ düşer. Tek toggle, en yüksek
      değer/emek oranı olan madde. → +1 kontrol

      **Alternatif:** Zone Settings → Edit yetkisi olan yeni bir API token
      oluşturursan ben API'den açarım.

### Faz 3 — DNS-AID kayıtları (API'den yapabilirim, +1 kontrol ≈ +7 puan)

- [ ] **3.1** `_index._agents.soleach.com` altında SVCB/HTTPS kaydı.
      DNS yazma yetkim var. Ama önce Faz 4'teki MCP uç noktasının adresi
      belli olmalı — kayıt oraya işaret edecek. **Faz 4'ten sonra yapılmalı.**

### Faz 4 — Gerçek MCP uç noktası (+1 kontrol ≈ +7 puan)

- [ ] **4.1 Cloudflare AI Search instance'ı** — `soleach.com`'u website data
      source olarak crawl eder, içeriği indeksler.
- [ ] **4.2 NLWeb Worker'ı aç** — `/ask` ve `/mcp` uç noktalarını verir.
- [ ] **4.3 MCP Server Card** (`public/.well-known/mcp/server-card.json`)
      4.2'deki gerçek uç noktayı işaret eder. → +1 kontrol
- [ ] **4.4** API Catalog ve DNS-AID kayıtlarını MCP adresiyle güncelle.

⚠️ **Maliyet notu:** AI Search, Workers AI üzerinde çalışır. Free plan'de
günlük neuron kotası var; bu boyutta bir site için yetmesi beklenir ama
indeksleme sırasında kota aşımı ücret doğurabilir. Başlatmadan önce onay alınacak.

---

## Skor projeksiyonu

| Aşama | Geçen kontrol | Skor |
| --- | --- | --- |
| Taban | 3/14 | 21 · Level 1 |
| Faz 1 + Faz 3 | 8/14 | 57 · Level 2 |
| + Faz 4 (MCP) | 10/14 | 71 · Level 2 |
| **+ Markdown müzakeresi — final** | **11/14** | **79 · Level 5 (Agent-Native)** ✅ |

Kalan 3 kontrol (OAuth ×2 + auth.md) bilinçli olarak boş bırakılıyor.

## Markdown müzakeresi — neden kendimiz yazdık

Cloudflare'in **Markdown for Agents** özelliği Free plan'de yok: *"available to
Pro, Business and Enterprise plans."* Pro $20/ay (yıllık) / $25/ay. Tek bir
kontrol için bu para yerine aynı davranışı kendimiz ürettik.

**Nasıl çalışıyor:** her sayfanın build-time üretilmiş bir `.md` ikizi var
(`lib/markdown.ts` + altı `.md` route handler). `functions/_middleware.js`
istemci `text/markdown` istediğinde ikizi servis ediyor.

**Neden HTML'den çevirmekten iyi:** markdown tipli kaynaktan üretiliyor, yani
hiçbir şeyin "DOM'un hangi kısmı içerikti" diye tahmin etmesi gerekmiyor.
Çıktıda gerçek frontmatter, mutlak linkler ve korunmuş atıflar var.

**Müzakere kuralları** (Cloudflare'in dokümante ettiğiyle birebir, hepsi test edildi):

| `Accept` | Sonuç |
| --- | --- |
| `text/markdown` | Markdown |
| `text/markdown, text/html;q=0.9` | Markdown |
| `text/*` | Markdown |
| `*/*` | HTML |
| Tarayıcının varsayılan `Accept`'i | HTML |

**Kazanç:** `/tr` → 159 KB HTML yerine 9,6 KB markdown. **%94 daha az bayt.**

**Dikkat edilenler:** Pages Function eklemek mevcut kurulumu bozmadı —
`_headers` (Link, Content-Signal, CSP), `_redirects` ve `.well-known`
content-type'ları çalışmaya devam ediyor. `.md` ikizleri `_headers` üzerinden
`noindex`, böylece kanonik HTML URL'leriyle yarışmıyorlar; middleware müzakere
sırasında bu header'ı çıkarıyor. Keşif `Link` rel'leri siliniyor değil,
üzerine ekleniyor.

## AI Search instance yapılandırması

`soleach` · namespace `default` · 25 sayfa indeksli, 0 hata.

MCP ucu: `https://86818188-0323-457e-9182-859940cfba5c.search.ai.cloudflare.com/mcp`

Türkçe içerik için bilinçli seçimler:

| Ayar | Değer | Neden |
| --- | --- | --- |
| `embedding_model` | `@cf/baai/bge-m3` | Çok dilli. `bge-*-en-v1.5` ailesi İngilizce-only, korpusun Türkçe yarısında kötü sonuç verirdi. Ayrıca en ucuzu (1075 neuron/M). |
| `keyword_tokenizer` | `trigram` | Varsayılan `porter` İngilizce stemming. Trigram substring eşleşmesi Türkçe ekleri yakalıyor (kozmetik / kozmetikte / kozmetiğin). |
| `index_method` | vector + keyword | Hibrit, RRF fusion. Anlam için vektör, marka/ürün adları için BM25. |
| `content_selector` | `main` | Nav/footer gürültüsü indekse girmiyor. |
| `sync_interval` | 86400 (24s) | Site nadiren değişiyor; gereksiz crawl ve neuron harcamıyor. |
| `cache` | açık, 48s TTL | Tekrarlayan sorgular neuron harcamıyor. |
| `rate_limit` | 20 istek/dk, sliding | Neuron bütçesini koruyor. |
| `ai_search_model` | `@cf/meta/llama-3.1-8b-instruct-fp8` | Üretken yol için ucuz seçenek; asıl kullanılan yol retrieval. |

Doğrulama (kart yazılmadan **önce** yapıldı): `initialize` → `tools/list` →
`tools/call`. "kozmetik ürününde sağlık beyanı sınırı nedir" sorgusu doğru
chunk'ı 0.73 skorla getirdi.

---

## 24.07.2026 tarama sonucu (57/100)

| Kontrol | Sonuç |
| --- | --- |
| robots.txt | ✅ geçerli format |
| sitemap.xml | ✅ geçerli yapı |
| Link headers | ✅ `describedby, api-catalog, service-desc, alternate` bulundu |
| DNS-AID | ⚠️ **kayıt bulundu ama DNSSEC doğrulanmadı** |
| Markdown negotiation | ❌ panelden açılmalı |
| AI bot kuralları | ✅ 11 AI botu için kural bulundu |
| Content Signals | ✅ robots.txt'te bulundu |
| Web Bot Auth | ❌ (kapsam dışı, sayılmıyor) |
| API Catalog | ✅ 1 API listelenmiş |
| Agent Skills index | ✅ geçerli JSON |
| WebMCP | ✅ **3 araç tespit edildi** (`imperative_api`) |
| OAuth/OIDC · OAuth Protected Resource · auth.md | ❌ bilinçli atlandı |
| MCP Server Card | ❌ Faz 4 bekliyor |

---

## Bakım notları

### Yeni sayfa eklerken

`.md` ikizi otomatik gelmiyor — yeni bir sayfa tipi eklersen `lib/markdown.ts`'e
bir serileştirici ve `app/<yol>/index.md/route.ts` eklemek gerekiyor. Blog
yazıları hariç: onlar `[slug]/index.md` üzerinden otomatik.

Middleware ikiz bulamazsa sessizce HTML'e düşüyor, yani unutmak bir şeyi
bozmuyor — sadece o sayfa markdown vermiyor.

Bölüm slug'ı iki dilde farklıysa (ilk örnek: `/tr/kavramlar` ↔ `/en/concepts`)
literal klasör açma — `app/[lang]/kavramlar/` iki dilde de servis edilirdi.
Bunun yerine `app/[lang]/[section]/` dinamik segmenti kullanılıyor:
`generateStaticParams` yalnızca geçerli dil+slug çiftlerini üretiyor,
`dynamicParams = false` ve sayfa içi `notFound()` guard'ı geri kalanı kapatıyor.
Slug'ın tek kaynağı `lib/section-slugs.ts`; dil değiştiricinin `safeSwap`'ı da
oradan okuyor. `app/[lang]/` altına asla `kavramlar/` ya da `concepts/` adında
literal klasör ekleme — literal segment `[section]`'ı gölgeler.

Route handler'lar (`index.md/route.ts`) layout'un `generateStaticParams`'ını
devralmıyor; dinamik segmentli bir sayfa tipinde matrisin tamamını
(dil × section × slug) handler'ın kendisi saymalı.

### AI Search yeniden indeksleme

24 saatte bir otomatik. Yeni sayfalar hemen indekslensin istiyorsan elle
tetikle — kaynak `sitemap.xml`, yani sitemap'te olmayan sayfa indekslenmez:

```bash
npx wrangler ai-search jobs create soleach
```

Durumu izlemek için (`stats` yalnızca rapor verir, tetiklemez):

```bash
npx wrangler ai-search stats soleach
npx wrangler ai-search jobs logs soleach <job-id>
```

### Token kısıtı

Bağlı Cloudflare API token'ı DNS, Pages, Rulesets, Workers ve AI Search'ü
okuyup yazabiliyor ama **zone settings, cache purge ve DNSSEC uçlarına
yetkisi yok** (`10000: Authentication error`). Deploy sonrası kök dizindeki
metin dosyaları edge cache yüzünden ~4 saat bayat kalabiliyor; gerçeği görmek
için deployment'ın kendi adresinden çek:

```bash
curl https://soleach-web.pages.dev/robots.txt
```

### 2. ~~DNSSEC~~ — gerekmedi

`_index._agents` tek başınayken tarayıcı DNSSEC istiyordu. `_mcp._agents` kaydı
da yayına girince kontrol geçti (`AD: true`) ve Discoverability 4/4 oldu.
DNSSEC açmaya gerek kalmadı.

### 3. ~~AI Search~~ — yapıldı

Instance kuruldu, indekslendi, MCP ucu doğrulandı, server card yayında.
Yapılandırma detayı yukarıda. Panelden ek bir işlem gerekmiyor —
public endpoint ve rate limit API'den ayarlandı.

**Maliyet gerçeği:** Workers **Free** planında fatura yolu yok. Kota aşımı ücret
değil **hata** üretiyor (Cloudflare: *"further operations will fail with an
error"*). Ölçülen: tam re-index ~82 neuron = günlük 10.000 ücretsiz kotanın
**%0,8'i**. AI Search'ün kendisi open beta'da ücretsiz; depolama, vektör
indeksleme ve crawl dahil. Faturalanma başlamadan 30 gün önce duyurulacak.

---

## Not: skor ≠ GEO

Bu tarayıcı **ajan protokolü hazırlığını** ölçüyor — ChatGPT/Perplexity/Google
AI Overviews'da görünürlüğü değil. Gerçek GEO görünürlüğü şunlardan gelir:

1. **Entity netliği** — schema.org, llms.txt, tutarlı isim/tanım (bunda iyiyiz)
2. **Üçüncü taraf atıflar** — başka sitelerin Soleach'ten bahsetmesi (en zayıf halka)
3. **İçerik derinliği** — kaynaklı, spesifik, kopyalanamaz yazılar (blog sistemi hazır)
4. **Erişilebilirlik** — crawl edilebilirlik, hız, temiz HTML (iyiyiz)

Faz 1–4 bu listede sadece 4. maddeyi güçlendiriyor. 2. madde (atıflar) ayrı bir
iş ve bu planın kapsamı dışında.
