
import { Status } from "@cucumber/cucumber";
import fs from "fs";
import path from "path";
import { chromium } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Before, After,AfterStep,test} = createBdd();
const { PageObjectManager } = require('../PageObjects/PageObjectManager')

Before(async function(){
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  //creating an object of page object manager
  this.poManager = new PageObjectManager(this.page)

});

After(async function(){
  console.log("Closing the browser")
  // await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png`, fullPage: true });
  // await this.browser.close();

});
// After(async function (scenario) {
//   if (scenario?.result?.status === Status.FAILED) {  // ✅ Check if `scenario` and `result` are defined
//     const screenshotDir = "screenshots";
//     const screenshotPath = path.join(screenshotDir, `${scenario.pickle.name.replace(/\s+/g, "_")}.png`);

//     // ✅ Ensure the screenshots directory exists
//     if (!fs.existsSync(screenshotDir)) {
//       fs.mkdirSync(screenshotDir);
//     }

//     // 📸 Take the screenshot
//     await this.page.screenshot({ path: screenshotPath, fullPage: true });
//     console.log(`📸 Screenshot saved: ${screenshotPath}`);
//   }

//   // ✅ Close browser after execution
//   // await this.browser.close();
// });
// export { page, browser };
// export { BeforeHook };