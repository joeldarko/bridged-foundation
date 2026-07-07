// Capture the branded route-transition overlay mid-flight:
// load home (skip splash), click a nav link, screenshot during the hold.
import puppeteer from "puppeteer-core";

const [, , out] = process.argv;

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "shell",
  args: ["--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.evaluateOnNewDocument(() => {
  try {
    sessionStorage.setItem("bridgeed-splash", "1");
  } catch {}
});

await page.goto("http://localhost:3000/", {
  waitUntil: "networkidle0",
  timeout: 45000,
});

await page.click('a[href="/programs"]');
await new Promise((r) => setTimeout(r, 550)); // inside cover+hold window
await page.screenshot({ path: out });
await browser.close();
console.log("saved", out);
