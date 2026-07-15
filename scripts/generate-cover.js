const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateCover() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to Behance cover dimensions
  await page.setViewport({ width: 8080, height: 4040, deviceScaleFactor: 1 });
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, '../public/juicerush-cover-preview.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Modify HTML to show full size version
  const modifiedHtml = htmlContent.replace(
    '<div class="cover" id="cover">',
    '<div class="cover" id="cover" style="width:8080px;height:4040px;max-width:none;position:fixed;top:0;left:0;">'
  ).replace(
    'aspect-ratio: 2 / 1;',
    'width: 8080px; height: 4040px;'
  );
  
  await page.setContent(modifiedHtml, { waitUntil: 'networkidle0' });
  
  // Wait for fonts to load
  await page.waitForTimeout(2000);
  
  // Take screenshot
  const screenshotPath = path.join(__dirname, '../public/juicerush-cover.png');
  await page.screenshot({ 
    path: screenshotPath,
    fullPage: false,
    clip: { x: 0, y: 0, width: 8080, height: 4040 }
  });
  
  console.log(`Cover generated: ${screenshotPath}`);
  await browser.close();
}

generateCover().catch(console.error);
