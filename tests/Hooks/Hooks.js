
import { chromium } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Before, After,AfterStep,test} = createBdd();
const { PageObjectManager } = require('../PageObjects/PageObjectManager')

Before(async function(){
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(60000);
  //creating an object of page object manager
  this.poManager = new PageObjectManager(this.page)

});

After(async function(){
  console.log("Closing the browser")
  // await this.page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png`, fullPage: true });
  // await this.browser.close();

});


