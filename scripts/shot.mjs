// Full-page screenshot harness: scrolls through the page (fires whileInView),
// waits for animations to settle, captures full page.
import puppeteer from "puppeteer-core";

const [, , url, out, wStr = "1440", hStr = "900", reduced = ""] = process.argv;

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "shell",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.setViewport({ width: +wStr, height: +hStr, deviceScaleFactor: 1 });
if (reduced === "reduced") {
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
}
// Skip first-visit splash deterministically.
await page.evaluateOnNewDocument(() => {
  try {
    sessionStorage.setItem("bridgeed-splash", "1");
  } catch {}
});

await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });

// Scroll through the document to trigger whileInView reveals.
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 160));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1200)); // let tweens settle

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
