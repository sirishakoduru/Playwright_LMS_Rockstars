
// import { setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { Page } from "playwright";
import { createBdd } from "playwright-bdd";
const { Before, After,AfterStep,test } = createBdd();
const { PageObjectManager } = require('../PageObjects/PageObjectManager')

let page;
let browser;
let context

Before(async function(){
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  this.page = await context.newPage();
  //creating an object of page object manager
  this.poManager = new PageObjectManager(this.page)

});
// AfterStep(async function({result}) {
  // if(result.status === Status.FAILED){
  //   const screenshot = await this.page.screenshot()
  //   await this.attach(screenshot.toString('base64'),'base64:image/png')
  //   console.log("screenshot attached")
    

  
// });
After(async function(){
  await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png`, fullPage: true });
  // await this.browser.close();

});
// export { page, browser };
// export { BeforeHook };