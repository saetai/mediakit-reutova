import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto('file:///Users/olesya/Downloads/mediakit-reutova/mediakit.html');
await page.waitForTimeout(4000);
const frames = await page.$$('.slide-frame');
// slide 11 (index 10) = Темы 1+2; slide 13 (index 12) = 3 темы для аудитории
await frames[10].screenshot({path:'/tmp/check_s11.png'});
await frames[12].screenshot({path:'/tmp/check_s13.png'});
await browser.close();
console.log('done');
