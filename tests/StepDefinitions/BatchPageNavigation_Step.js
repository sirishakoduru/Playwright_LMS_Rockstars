import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
const { Given, When, Then ,test} = createBdd();
require('dotenv').config();

Given('Admin is on login Page', async function () {
   this.batchPageObj = new BatchPage(this.page);
   // browser = await chromium.launch({ headless: false });
   // const context = await browser.newContext();
   // page = await context.newPage();
  
   await this.batchPageObj.gotoLoginUrl();
   // await this.page.goto(url);

});


When('Admin enter valid data in all field and clicks login button', async function () {
    this.batchPageObj.login();
});


Given('Admin is on the home Page', async function () {
   // this.batchPageObj = new BatchPage(this.page);
   // await this.batchPageObj.gotoLoginUrl();
   // this.batchPageObj.login();
   await this.batchPageObj.gotoHomeUrl();
});
   
When('Admin Clicks on the Batch menu from the header', async function() {
   console.log("Inside Bathc menu click");
   await this.page.waitForTimeout(3000);
   this.batchPageObj.clickBatch();
});
   
Then('Admin should be in the Manage Batch Page', async function() {
   const batchurl = process.env.BatchURL
   await expect(this.page).toHaveURL(batchurl);
});


          