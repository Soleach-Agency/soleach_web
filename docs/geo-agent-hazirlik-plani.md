# GEO & Agent Hazırlık Planı

Cloudflare'in resmî tarayıcısı ([isitagentready.com](https://isitagentready.com/soleach.com))
üzerinden 24 Temmuz 2026'da alınan taban ölçüm ve buradan çıkan iş listesi.

> **Durum (24.07.2026, 18:13): 21 → 57 / 100, Level 1 → Level 2 (Bot-Aware).**
> Faz 1 ve Faz 3 tamamlandı ve canlıda. Kalan 3 madde aşağıda "Sıradaki adımlar"
> başlığında — üçü de Cloudflare panelinden senin elini gerektiriyor.

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
| Taban | 3/14 | 21 |
| **Faz 1 + Faz 3 (yapıldı, canlıda)** | **8/14** | **57** ✅ |
| + Markdown for Agents (panel) | 9/14 | 64 |
| + DNSSEC (panel + registrar) | 10/14 | 71 |
| + MCP Server Card (AI Search) | 11/14 | **79** |

Kalan 3 kontrol (OAuth ×2 + auth.md) bilinçli olarak boş bırakılıyor.

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

## Sıradaki adımlar — senin elini gerektirenler

Üçü de benim erişimimin dışında kaldı. Bağlı Cloudflare API token'ı DNS, Pages,
Rulesets ve Workers'ı okuyup yazabiliyor ama **zone settings, cache purge ve
DNSSEC uçlarına yetkisi yok** (`10000: Authentication error`).

### 1. Markdown for Agents'ı aç → +7 puan

Panel: zone `soleach.com` → **Settings** → **Markdown for Agents** → On.

Ajanlar `Accept: text/markdown` gönderdiğinde Cloudflare HTML'i uçuşta
markdown'a çevirir. Ölçülen token tasarrufu %90+. Tek toggle, listedeki en iyi
değer/emek oranı.

Doğrulama:

```bash
curl -sI -H 'Accept: text/markdown' https://soleach.com/tr | grep -i content-type
```

`text/markdown` görmen lazım. Alternatif: **Zone Settings → Edit** yetkisi olan
bir API token açarsan ben API'den hallederim
(`PATCH /zones/{id}/settings/content_converter` → `{"value":"on"}`).

### 2. DNSSEC'i aç → +7 puan

DNS-AID kaydı (`_index._agents.soleach.com`, SVCB) **oluşturuldu ve çözümleniyor.**
Tarayıcı kaydı buluyor; tek eksik cevabın DNSSEC ile imzalanmamış olması
(`AD: false`).

Panel: zone → **DNS** → **Settings** → **DNSSEC** → Enable. Cloudflare bir DS
kaydı üretir; onu **registrar'da** (domaini aldığın yerde) eklemen gerekiyor.
DS eklenene kadar durum "pending" kalır — bu aşamada hiçbir şey bozulmaz.

⚠️ Bunu ben denedim, izin katmanı bloklandı — DS kaydı yanlış girilirse domain
çözümlenemez hale gelebildiği için makul bir blok. Registrar adımı zaten sende.

### 3. (Opsiyonel) AI Search + NLWeb → gerçek MCP ucu → +7 puan

`npx wrangler ai-search create soleach --type web-crawler --source soleach.com`
ardından panelden NLWeb Worker'ı açmak, siteye gerçek bir `/mcp` ve `/ask` ucu
kazandırır. Sonrasında ben `server-card.json`'ı ve DNS-AID `_mcp._agents`
kaydını yazarım.

⚠️ **Bunu bilerek başlatmadım.** AI Search Workers AI üzerinde çalışır; hesap
Free plan'de ve indeksleme neuron kotasını aşarsa ücret doğar. Sürekli gider
doğuran bir karar, senin onayın olmadan tetiklemek doğru olmaz.

Not: Skor için MCP Server Card yazıp gerçek bir uç koymamak mümkün — ama
ajanları var olmayan bir adrese yönlendirmiş oluruz. Kart, ancak uç gerçekten
varsa yazılmalı.

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
