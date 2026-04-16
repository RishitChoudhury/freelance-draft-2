const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 1500)); // wait for full animations
  
  await page.screenshot({ path: '/Users/rishit/.gemini/antigravity/brain/61a62d9f-fc56-47fe-95ae-f5070d358c3e/final_dark_mode.jpeg', type: 'jpeg', quality: 90 });

  await browser.close();
})();
