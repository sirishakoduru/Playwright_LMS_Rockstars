import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
const { Given, When, Then ,test} = createBdd();
require('dotenv').config();
// this.batchPage = new BatchPage(this.page);

Given('Admin is on the home page after login', async function() {
    this.batchPageobj = new BatchPage(this.page);
    await this.batchPageobj.gotoLoginUrl();
    await this.batchPageobj.login();
});

Given('Admin is on the home page', async function() {
    this.batchPageObj = new BatchPage(this.page);
   await this.batchPageObj.gotoLoginUrl();
   this.batchPageObj.login();
   await this.batchPageobj.gotoHomeUrl();
});

Then('Admin should see the {string} Title', async function() {
   await this.batchPageobj.verifyLMSTitle()
});

Then('Admin should see the {string} Heading', async function() {
  await this.batchPageObj.verifyHeading()
});

Then('Admin should see the disabled {string} under the header', async function() {
  await this.batchPageObj.veriftDeleteButton()
});

Then('Admin should see the enabled pagination controls under the data table', async function() {
  await this.batchPageObj.verifyPagenaginationIsEnabled()
});

Then('Admin should see the edit icon in each row', async function() {
 
});

Then('Admin should see the delete icon in each row', async function() {
  
});

Then('Admin should see the checkbox in each row', async function() {
  
});


Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit or Delete', async function() {
  
  });

Then('Admin should see the checkbox  in the datatable header row', async function() {
  
});

Then('Admin should see the sort icon next to all Datatable headers', async function() {
 
});