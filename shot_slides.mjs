import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto('file:///Users/olesya/Downloads/mediakit-reutova/mediakit.html');
await page.waitForTimeout(5000);
const frames = await page.$$('.slide-frame');
for(let i=0;i<frames.length;i++){
  const n = String(i+1).padStart(2,'0');
  await frames[i].screenshot({path:`/Users/olesya/Downloads/mediakit-reutova/screens/slide-${n}.png`});
  process.stdout.write(`${n} `);
}
await browser.close();
console.log('\ndone');
