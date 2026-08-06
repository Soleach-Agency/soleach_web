#!/usr/bin/env node
// Renders app/apple-icon.png (180×180) by screenshotting the brand mark on a
// solid background in headless Chrome. Run manually after a logo change:
//   node scripts/apple-icon.mjs
//
// Solid, not transparent: iOS composites an alpha home-screen icon onto black,
// which turns the deep-plum mark into a smudge. Same reason og-image.mjs
// bakes its background in rather than shipping alpha.
import { writeFileSync, mkdtempSync, rmSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const CHROME =
  process.env.CHROME_BIN ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const SIZE = 180;
const logo = readFileSync(resolve("public/brand/soleach-logo.png")).toString("base64");

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: ${SIZE}px; height: ${SIZE}px; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    /* --color-background from app/globals.css, light theme. */
    background: rgb(255, 253, 255);
  }
  img { width: 78%; height: 78%; object-fit: contain; }
</style>
</head>
<body><img src="data:image/png;base64,${logo}"></body>
</html>`;

const dir = mkdtempSync(join(tmpdir(), "soleach-apple-icon-"));
const page = join(dir, "icon.html");
const shot = join(dir, "icon.png");

writeFileSync(page, html);

execFileSync(CHROME, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  "--default-background-color=00000000",
  `--screenshot=${shot}`,
  `--window-size=${SIZE},${SIZE}`,
  `file://${page}`,
]);

const out = resolve("app/apple-icon.png");
writeFileSync(out, readFileSync(shot));
rmSync(dir, { recursive: true, force: true });

console.log(`apple-icon: wrote ${out} (${SIZE}x${SIZE})`);
