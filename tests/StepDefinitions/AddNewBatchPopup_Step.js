import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
import { addNewBatchPage } from "../PageObjects/AddNewPage";
const { Given, When, Then ,test} = createBdd();

Given('Admin is on the Add new batch pop up', async function() {
    this.batchPageObj = new BatchPage(this.page);
    await this.batchPageObj.gotoLoginUrl();
    this.batchPageObj.login();
    this.addNewPage = new addNewBatchPage(this.page)
    await this.addNewPage.ClickBatchButton();
    await this.addNewPage.clickAddNewBatch();
    
  });
  
  Given('Admin is on the Batch Details Pop Up WIndow', async function() {
   console.log("Admin is on batch popup window")
  });
  
  When('Admin checks all the fields are enabled', async function() {
   await this.addNewPage.verifyBatchDetailsFieldsEnabled();
  });
  
  Then('The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as drop down,Status as radio button', async function() {
    expect (this.addNewPage.verifyInputFieldsInBatch()).toBeTruthy();
    expect (this.addNewPage.verifyprogramNameAsDropdown()).toBeTruthy();
    expect (this.addNewPage.verifyRadioButton()).toBeTruthy();
  });
  
  When('Admin selects program name present in the dropdown', async function() {
    await this.addNewPage.clickProgramNameDropdown();
    await this.addNewPage.selectProgramNameFromDropdown();
   
  });
  
  Then('Admin should see selected program name in the batch name prefix box', async function() {
    const actualProgramName = await this.addNewPage.verifySelectedProgramNameInBatchPrefix();
    const expectedProgramName = await (this.addNewPage.selectProgramNameFromDropdown());
    expect (actualProgramName).toBe(expectedProgramName);
  });
  
  When('Admin enters alphabets in batch name suffix box', async function() {
    await this.addNewPage.EnterApphbetsinBatchSuffix();
  });
  
  Then('Admin should get error message below the text box of respective field', async function() {
    const actualErrorMsg = await this.addNewPage.varifyBatchSuffixErrorMsg();
    console.log("Actual Error Message:", actualErrorMsg);
     expect (actualErrorMsg?.trim()).toBe("This field accept only numbers and max 5 count.")
  });
  
  When('Admin enters alphabets in batch name prefix box', async function() {
   await this.addNewPage.enterAlpharetInBatchPrefix();
  });
  
  Then('Admin should see empty text box', async function() {
   expect (this.addNewPage.verifyEmptyBatchPrefix()).toBeTruthy();
  });
  When('Admin enters the data only to the mandatory fields with {string},{string} and clicks save button', async function ({}, DataInput, SheetName) {
   
    await this.addNewPage.clickProgramNameDropdown();
    await this.addNewPage.selectProgramNameFromDropdown();
    await this.addNewPage.EnterMandatoryFields(DataInput,SheetName);
    await this.addNewPage.clickStatusActive();
    await this.addNewPage.clickSaveButton();
  });
  
  Then('Admin should get a successful message', async function() {
    expect (this.addNewPage.getSuccessmessage()).toBeTruthy();
  });
  
  When('Admin leaves blank one of the mandatory fields with {string} and {string}', async function ({},DataInput, SheetName) {
    await this.addNewPage.clickProgramNameDropdown();
    await this.addNewPage.selectProgramNameFromDropdown();
    await this.addNewPage.verifyWithEmptyMandatoryFeild(DataInput,SheetName);
  });
  
  Then('Admin should get a error message on the respective mandatory field', async function() {
    expect (this.addNewPage.verifyErrorMsgWithEmptyMandatoryFeild()).toBeTruthy();
  });
  
  When('Admin enters the valid data to all the mandatory fields with {string} and {string} and click cancel button', async function ({}, DataInput, SheetName) {
    await this.addNewPage.clickProgramNameDropdown();
    await this.addNewPage.selectProgramNameFromDropdown();
    await this.addNewPage.clickCancelButton(DataInput,SheetName);
  });
  
  Then('Admin can see the batch details popup closes without creating any batch', async function() {
    expect (this.addNewPage.IsBatchPopupClosed()).toBeTruthy();
  });
  
  When('Admin clicks on the close icon', async function() {
   await this.addNewPage.clickCloseButton();
  });
  
  Then('batch details pop up closes', async function() {
    expect (this.addNewPage.IsBatchPopupClosed()).toBeTruthy();
  });

  // -----------------------------------------Edit Batch-------------------------------------------

  Given('Admin is on the batch page', async function() {
    this.batchPageObj = new BatchPage(this.page);
    await this.batchPageObj.gotoLoginUrl();
    this.batchPageObj.login();
    await this.batchPageObj.clickBatch();
    this.addNewPage = new addNewBatchPage(this.page)
   
  });
  
  Given('Admin is on the Batch page', async function() {
    console.log("Admin is on the batch page")
  });
  
  When('Admin clicks the edit icon', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickEditButton();
  });
  
  Then('Admin should see the Batch details pop up window', async function() {
    expect (this.addNewPage.verifyBatchPopup()).toBeTruthy();
  });
  
  Then('Admin should see Program name value field is disabled for editing', async function() {
    expect (this.addNewPage.isProgramNameDisabled()).toBeTruthy();
  });
  
  Then('Admin should see batch name value field is disabled for editing', async function() {
    expect (this.addNewPage.isBatchNameDisabled()).toBeTruthy();
  });
  
  Given('Admin is on the Batch Details Page', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickEditButton();
    await this.addNewPage.verifyBatchPopup();
  });
  
  When('Admin Updates any fields with invalid data and click save button', async function() {
    await this.addNewPage.verifydescriptionWithInvalidData();
  });
  
  Then('Admin should get a error message under the respective field', async function() {
    expect (this.addNewPage.varifyBatchSuffixErrorMsg()).toBeTruthy();
  });
  
  When('Admin enters the valid data to all the mandatory fields with {string},{string} and click save button', async function ({}, DataInput, SheetName) {    
   await this.addNewPage.EnterMandatoryFeildsforEdit(DataInput, SheetName);
  });

  Then('Admin should get a successful message for editing the batch', async function() {
   expect (this.addNewPage.getEditSuccessmessage()).toBeTruthy();
  });

  When('Admin enters the valid data to all the mandatory fields {string},{string} for edit and click cancel button', async function ({}, DataInput, SheetName) {
    await this.addNewPage.clickCancelButtonForEdit(DataInput, SheetName);
  });
  
  Then('Admin can see the batch details popup closes without editing the batch', async function() {
    expect (this.addNewPage.IsBatchPopupClosed()).toBeTruthy();
  });

  When('Admin clicks on program name dropdown and select program name', async function () {
    
  });