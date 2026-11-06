import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file:///Users/olesya/Downloads/mediakit-reutova/mediakit.html', {waitUntil:'networkidle'});
await page.waitForTimeout(3000);
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: '/Users/olesya/Downloads/mediakit-reutova/mediakit-reutova.pdf',
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();
console.log('pdf done');
