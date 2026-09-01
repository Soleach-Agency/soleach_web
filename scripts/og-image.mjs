// Renders the brand Open Graph images (public/brand/og-tr.png, og-en.png,
// 1200×630) by screenshotting an HTML template in headless Chrome.
// Run manually after changing the tagline or brand look:
//   node scripts/og-image.mjs
// PNG (not WebP): WhatsApp and X still mishandle WebP og:image.
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const CHROME =
  process.env.CHROME_BIN ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const LOGO = resolve("public/brand/soleach-logo.webp");

// Kept in sync with dict.meta.home by hand — dictionaries are TS and this
// script stays dependency-free.
const VARIANTS = {
  tr: {
    tagline: "Güzellikte Büyüme · İşletmelere Özel Yazılım",
    sub: "Reklam · Kreatif · SEO & GEO | Özel yazılım · MCP · Yapay zekâ",
  },
  en: {
    tagline: "Beauty Growth · Custom Software for Business",
    sub: "Ads · Creative · SEO & GEO | Custom software · MCP · AI",
  },
};

const html = ({ tagline, sub }) => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Manrope:wght@500;600&display=block');
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: #181221;
    font-family: 'Manrope', sans-serif;
    display: flex; align-items: center; justify-content: center;
  }
  .glow-a, .glow-b {
    position: absolute; border-radius: 50%; filter: blur(120px); opacity: .5;
  }
  .glow-a { width: 640px; height: 640px; left: -160px; top: -220px; background: #8b3fd9; }
  .glow-b { width: 560px; height: 560px; right: -140px; bottom: -240px; background: #e56bb0; }
  .card { position: relative; display: flex; align-items: center; gap: 64px; padding: 0 96px; }
  .logo { width: 240px; height: 240px; filter: drop-shadow(0 24px 60px rgba(139,63,217,.45)); }
  .name {
    font-family: 'Fraunces', serif; font-weight: 600; font-size: 88px;
    letter-spacing: -0.03em; line-height: 1;
    background: linear-gradient(100deg, #c79bf0, #e56bb0);
    -webkit-background-clip: text; background-clip: text; color: transparent;
    padding-bottom: 8px;
  }
  .tagline { margin-top: 18px; font-size: 34px; font-weight: 600; color: #f4eefb; max-width: 640px; line-height: 1.3; }
  .sub { margin-top: 22px; font-size: 22px; font-weight: 500; color: #b9aecb; }
  .domain {
    position: absolute; left: 96px; bottom: 44px;
    font-size: 22px; font-weight: 600; color: #c79bf0; letter-spacing: .02em;
  }
</style>
</head>
<body>
  <div class="glow-a"></div>
  <div class="glow-b"></div>
  <div class="card">
    <img class="logo" src="file://${LOGO}" alt="">
    <div>
      <div class="name">Soleach</div>
      <div class="tagline">${tagline}</div>
      <div class="sub">${sub}</div>
    </div>
  </div>
  <div class="domain">soleach.com</div>
</body>
</html>`;

const work = mkdtempSync(join(tmpdir(), "og-"));
try {
  for (const [locale, variant] of Object.entries(VARIANTS)) {
    const page = join(work, `og-${locale}.html`);
    const out = resolve(`public/brand/og-${locale}.png`);
    writeFileSync(page, html(variant));
    execFileSync(CHROME, [
      "--headless=new",
      `--screenshot=${out}`,
      "--window-size=1200,630",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      // Let the webfont import settle before the shot.
      "--virtual-time-budget=8000",
      `file://${page}`,
    ]);
    console.log(`wrote public/brand/og-${locale}.png`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
