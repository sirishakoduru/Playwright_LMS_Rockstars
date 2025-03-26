import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
const { Given, When, Then ,test} = createBdd();
require('dotenv').config();
// this.batchPage = new BatchPage(this.page);

Given('Admin is on the home page after login for batch', async function() {
    this.batchPageobj = new BatchPage(this.page);
    await this.batchPageobj.gotoLoginUrl();
    await this.batchPageobj.login();
});

Given('Admin is on the home page', async function() {
    this.batchPageobj = new BatchPage(this.page);
    console.log("admin is on the home page")
  //  await this.batchPageobj.gotoLoginUrl();
  //  this.batchPageobj.login();
  //  await this.batchPageobj.gotoHomeUrl();
    //  await this.batchPageobj.clickBatch();
});
When('Admin Clicks on the Batch menu from the header for batch', async function() {
  await this.batchPageobj.clickBatch();
});

Then('Admin should see the {string} Title', async function() {
   const title = await this.batchPageobj.verifyLMSTitle()
   console.log("Actual Title:", title);
   expect(await title).toBe(" LMS - Learning Management System ")
});

Then('Admin should see the {string} Heading', async function() {
  const heading = await this.batchPageobj.verifyHeading()
  console.log("heading :", heading)
  expect(await heading).toBe(" Manage Batch")
});

Then('Admin should see the disabled {string} under the header', async function() {
  const deletebutton = await this.batchPageobj.veriftDeleteButton()
  await expect (deletebutton).toBeDisabled()
});

Then('Admin should see the enabled pagination controls under the data table', async function() {
  const pagination = await this.batchPageobj.verifyPagenaginationIsEnabled();
  await expect (pagination).toBeEnabled();
});

Then('Admin should see the edit icon in each row', async function() {
  expect(this.batchPageobj.VerifyeditIconInEachRow()).toBeTruthy();
 
});

Then('Admin should see the delete icon in each row', async function() {
  expect (this.batchPageobj.VerifyDeleteIconInEachRow()).toBeTruthy();
});

Then('Admin should see the checkbox in each row', async function() {
  expect (this.batchPageobj.VerifyCheckBoxesInEachRow()).toBeTruthy();
});


Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit or Delete', async function() {
  const actualHeaderNames = await this.batchPageobj.verifyHeaderNames();
  const expectedHeaders = ['Batch Name',
    'Batch Description',
    'Batch Status',
    'No Of Classes','Program Name','Edit / Delete']
    expect(actualHeaderNames).toEqual(expectedHeaders);
  });

Then('Admin should see the checkbox  in the datatable header row', async function() {
  expect (this.batchPageobj.verifyHeaderCheckbox()).toBeVisible;
});

Then('Admin should see the sort icon next to all Datatable headers', async function() {
  expect (this.batchPageobj.verifyHeaderSortIcon()).toBeTruthy();
});