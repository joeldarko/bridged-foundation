import puppeteer from "puppeteer-core";

const [, , url, out, yStr = "0", wStr = "1440", hStr = "900"] = process.argv;

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "shell",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.setViewport({ width: +wStr, height: +hStr, deviceScaleFactor: 1 });
await page.evaluateOnNewDocument(() => {
  try {
    sessionStorage.setItem("bridgeed-splash", "1");
  } catch {}
});

await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
await page.evaluate((y) => window.scrollTo(0, y), +yStr);
await new Promise((r) => setTimeout(r, 1500));

const scrollWidth = await page.evaluate(
  () => document.documentElement.scrollWidth === window.innerWidth,
);
console.log("no-horizontal-scroll:", scrollWidth);

await page.screenshot({ path: out, fullPage: false });
await browser.close();
console.log("saved", out);
