import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "shell",
});
const page = await browser.newPage();
await page.goto("http://localhost:3000/schools", { waitUntil: "networkidle0" });
const imgs = await page.evaluate(() =>
  Array.from(document.querySelectorAll("img")).map((i) => ({
    src: i.currentSrc || i.src,
    alt: i.alt.slice(0, 40),
  })),
);
console.log(JSON.stringify(imgs, null, 1));
await browser.close();
