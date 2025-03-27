import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
import { addNewBatchPage } from "../PageObjects/AddNewPage";
const { Given, When, Then ,test} = createBdd();

Given('Admin is on the Batch page', async function () {
    this.batchPageObj = new BatchPage(this.page);
    await this.batchPageObj.gotoLoginUrl();
    this.batchPageObj.login();
    await this.batchPageObj.clickBatch
    this.addNewPage = new addNewBatchPage(this.page)
   
  });
  
  // Given('Admin is on the batch page', async function() {
  //   console.log("Admin is in the batch page")
  // });
  
  When('Admin clicks {string} on the navigation bar', async function () {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.ClickBatchButton();
  });
  
  Then('Admin should see sub menu in menu bar as Add New Batch', async function() {
    expect (this.addNewPage.verifyaddNewPageBtn).toBeTruthy();
  });
  
  // Given('Admin is on the home page', async function() {
  //   console.log("Admin is on the home page")
  // });
  
  When('Admin clicks on {string} under the {string} menu bar', async function () {
    await this.addNewPage.ClickBatchButton();
    await this.addNewPage.clickAddNewBatch();
  });
  
  Then('Admin should see the Batch Details pop up window', async function () {
   expect (this.addNewPage.verifyBatchPopup()).toBeTruthy();
  });