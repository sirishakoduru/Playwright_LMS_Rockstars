
// import { setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { Page } from "playwright";
import { createBdd } from "playwright-bdd";
const { Before, After,AfterStep,test } = createBdd();
const { PageObjectManager } = require('../PageObjects/PageObjectManager')

// let page;
// let browser;
// let context


Before(async function(){
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  //creating an object of page object manager
  this.poManager = new PageObjectManager(this.page)

});
 

  
// });
After(async function(){
  await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png`, fullPage: true });
 // await this.browser.close();

});
// export { page, browser };
// export { BeforeHook };