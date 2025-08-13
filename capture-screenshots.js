const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const websites = [
  {
    name: 'wedo-lu',
    url: 'https://wedo.lu',
    description: 'WeDo.lu Platform'
  },
  {
    name: 'hyperhost-pt',
    url: 'http://www.hyperhost.pt',
    description: 'Hyperhost.pt Services'
  },
  {
    name: 'vervoe',
    url: 'https://vervoe.com',
    description: 'Vervoe Platform'
  },
  {
    name: 'heckenschnitt',
    url: 'https://heckenschnitt.com',
    description: 'Heckenschnitt Services'
  }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureScreenshots() {
  console.log('🚀 Starting screenshot capture...');
  
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1920, height: 1080 },
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox', 
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor'
    ]
  });

  const imagesDir = path.join(__dirname, 'public', 'images');
  
  // Ensure images directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const website of websites) {
    try {
      console.log(`📸 Capturing ${website.name}...`);
      
      const page = await browser.newPage();
      
      // Set a longer timeout for slow-loading sites
      page.setDefaultTimeout(60000);
      
      // Set user agent to avoid blocking
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      
      // Set extra headers
      await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      });
      
      console.log(`🌐 Navigating to ${website.url}...`);
      
      // Navigate to the website
      await page.goto(website.url, { 
        waitUntil: 'domcontentloaded',
        timeout: 60000 
      });
      
      console.log(`⏳ Waiting for content to load...`);
      
      // Wait a bit for any dynamic content to load
      await sleep(5000);
      
      // Take screenshot
      const screenshotPath = path.join(imagesDir, `${website.name}-1.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });
      
      console.log(`✅ Captured ${website.name} successfully`);
      
      // Take a second screenshot (scrolled down a bit)
      await page.evaluate(() => {
        window.scrollTo(0, window.innerHeight / 2);
      });
      
      await sleep(2000);
      
      const screenshotPath2 = path.join(imagesDir, `${website.name}-2.png`);
      await page.screenshot({
        path: screenshotPath2,
        fullPage: false
      });
      
      // Take a third screenshot (focused on content area)
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      
      await sleep(2000);
      
      const screenshotPath3 = path.join(imagesDir, `${website.name}-3.png`);
      await page.screenshot({
        path: screenshotPath3,
        fullPage: false
      });
      
      await page.close();
      
    } catch (error) {
      console.error(`❌ Error capturing ${website.name}:`, error.message);
      
      // Try to take a screenshot even if there's an error
      try {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        console.log(`🔄 Retrying ${website.name} with different approach...`);
        
        // Try to navigate with a longer timeout
        await page.goto(website.url, { 
          waitUntil: 'domcontentloaded',
          timeout: 90000 
        });
        
        await sleep(3000);
        
        const screenshotPath = path.join(imagesDir, `${website.name}-error.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: false
        });
        
        console.log(`⚠️  Captured error screenshot for ${website.name}`);
        await page.close();
      } catch (retryError) {
        console.error(`❌ Failed to capture even error screenshot for ${website.name}:`, retryError.message);
      }
    }
  }

  console.log('🎉 Screenshot capture completed!');
  console.log('📁 Check the public/images folder for your screenshots');
  console.log('🔄 Keep the browser open to manually check any issues');
  
  // Keep browser open for manual inspection
  // await browser.close();
}

captureScreenshots().catch(console.error);
