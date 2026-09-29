import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";

const html = pathToFileURL("/workspace/.grok/og-card.html").href;
const outPng = "/workspace/.grok/og-card-raw.png";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "load" });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await page.waitForTimeout(200);
await page.screenshot({ path: outPng, type: "png", omitBackground: false });
await browser.close();
writeFileSync("/workspace/.grok/og-render-ok", "ok");
console.log("wrote", outPng);
