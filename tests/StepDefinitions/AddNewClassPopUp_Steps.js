import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { ClassPage } from '../PageObjects/Class.js';

const { Given, When, Then ,test} = createBdd();
require('dotenv').config();

Given('Admin is on the Class Popup window', async function () {

    this.classPopupPage = new ClassPage(this.page);
    await this.classPopupPage.gotoLoginUrl();
    await this.classPopupPage.login();
    await this.classPopupPage.classButton();
    await this.classPopupPage.addNew_ClassButton();
    expect (this.classPopupPage.isPopupVisible()).toBeTruthy();
    // expect(this.classPopupPage.isFormEmpty()).toBeTruthy();
    // expect(this.classPopupPage.isSaveButtonVisible()).toBeTruthy();
    // expect(this.classPopupPage.isCancelButtonVisible()).toBeTruthy();
    // expect(this.classPopupPage.isCloseIconVisible()).toBeTruthy();

  });
  
  When('Admin enters mandatory fields in the form and clicks on save button', async function () {
   
    this.classPopupPage = new ClassPage(this.page);
    
    await this.classPopupPage.enterBatchName();
    await this.classPopupPage.enterClassTopic('Playwright');
    await this.classPopupPage.enterClassDescription('PlaywrightClasses');
    await this.classPopupPage.closeOverlay();
    // await this.classPopupPage.clickDatePicker();
    await this.classPopupPage.selectClassDates();
    await this.classPopupPage.closeOverlay();
    // await this.classPopupPage.enterNumberOfClasses();
     await this.classPopupPage.clickStaffNameDropdown();
     await this.classPopupPage.selectStaffName(),
     await this.classPopupPage.selectStatus();
     await this.classPopupPage.clickSaveButton();
  });
  
  Then('Admin gets message Class added Successfully', async function () {

    // const message = await this.classPopupPage.getSuccessMessage();
    expect(this.classPopupPage.getSuccessmessage()).toBeTruthy();
  });
  
 When('Admin selects class date in date picker', async function () {

   await this.classPopupPage.selectClassDates('2025-03-24', '2025-04-28');
 });
  
  Then('Admin should see no of class value is added automatically', async function () {
    // const noOfClassesValue = await this.classPopupPage.noOfClassesInput.inputValue();
    // expect(noOfClassesValue).not.toBe('');
    expect (this.classPopupPage.getNoOfClasses()).toBeTruthy();
  });
  
  When('Admin clicks date picker', async function () {

    await this.classPopupPage.clickDatePicker();
  });
  
  Then('Admin should see weekends dates are disabled to select', async function () {
    // const disabledDates = await this.page.locator('.disabled-weekend').count();
    // expect(disabledDates).toBeGreaterThan(0);
    const isWeekendDisabled = await this.classPopupPage.VerifyDisabledWeekends();
    expect(isWeekendDisabled).toBe(true);

  });
  
  When('Admin skips to add value in mandatory field and enter only the optional field', async function () {
    await this.classPopupPage.enterNotes('Optional class notes');
    await this.classPopupPage.clickSaveButton();
  });
  
  Then('Admin should see error message below the test field and the field will be highlighted in red color', async function () {
    const errors = await this.classPopupPage.getEmptyClassFeildsError();
    expect(errors).not.toBe('');
    const backgroundColor = await this.classPopupPage.emptyMessageHighlighterColor();
    console.log("Received background color:", backgroundColor);
    expect(backgroundColor).toBe('rgb(255, 0, 0)');
  });
  
  When('Admin enters invalid data in all of the  fields in the form and clicks on save button', async function () {
    // await this.classPopupPage.enterBatchName('!@#');
    // await this.classPopupPage.enterClassTopic('12345');
    // await this.classPopupPage.enterClassDescription('');
    // await this.classPopupPage.selectClassDates('invalid-date', 'invalid-date');
    // await this.classPopupPage.closeOverlay();
    // // await this.classPopupPage.enterNumberOfClasses(-5);
    // await this.classPopupPage.selectStaffName('');
    // await this.classPopupPage.selectStatus('');
    // await this.classPopupPage.clickSaveButton();
    await this.classPopupPage.enterInvalidData();
  });
  
  Then('Admin gets error message and class is not created', async function () {
    const successMesaage = await this.classPopupPage.getSuccessmessage();
    expect(successMesaage).toBeFalsy();
  });
  
  When('Admin clicks on save button without entering data', async function () {
    await this.classPopupPage.clickSaveButton();
  });
  
  Then('class won\'t be created and Admin gets error message', async function () {
    // const errors = await this.classPopupPage.getErrorMessages();
    // expect(errors.length).toBeGreaterThan(0);
    expect (this.classPopupPage.emptyFeildsSubmission()).toBeTruthy();
  });
  
  When('Admin clicks Cancel or Close Icon on Admin Details form', async function () {
    await this.classPopupPage.clickCloseIcon();
  });
  
  Then('Class Details popup window should be closed without saving', async function () {
    await expect(this.classPopupPage.batchNameInput).not.toBeVisible();
  });
  
  When('Admin clicks save button', async function () {
    await this.classPopupPage.clickSaveButton();
  });
  
  Then('Admin can see the class details popup closed and adding new class', async function () {

    await expect(this.classPopupPage.batchNameInput).not.toBeVisible();
  });
  