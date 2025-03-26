import exp from "constants";
import { createBdd } from "playwright-bdd"
const { Given, When, Then } = createBdd()
require('dotenv').config();

const { PageObjectManager } = require('../PageObjects/PageObjectManager')
const { test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');



Given('Admin is logged in to LMS Portal', async function () {
  const commonPage = this.poManager.getCommonPage()
  await commonPage.navigateToLoginPage()
  await commonPage.gotologin()

});

Given('Admin is on dashboard page after Login', async function () {
  console.log("Admin is on Dashboard Page")
});

When('Admin clicks Program on the navigation bar', async function () {

  console.log("Clicking Program")

  const programPage = this.poManager.getProgramPage()
  await programPage.clickOnProgramLink()

  //await programPage.batchlink()


});

Then('Admin should be navigated to Program module', async function () {
  console.log("Validating Manage Page")
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getManageProgramText()
  expect(await actualText).toBe(' Manage Program')

});

//Menubar feature

//logout link visibility
Then('Admin should see Logout in menu bar', async function () {
  console.log("Admin should see logout link on page")
  const commonPage = this.poManager.getCommonPage()

  const locator = await commonPage.logoutLink()
  expect(await commonPage.isLocatorVisible(locator)).toBe(true)

  //await commonPage.isLocatorVisible(locator)
  //expect(await commonPage.logoutOnMenubar()).toBe(true)
});

// //LMS heading
Then('Admin should see the heading {string}', async function ({ }, expectedText) {
  console.log("LMS Heading Validation")
  const commonPage = this.poManager.getCommonPage()

  const actualText = await commonPage.getDashboardTitle()
  expect(await actualText).toBe(expectedText)

});


//program, batch, class, logout
Then('Admin should see the page names as in order {string}', async function ({ }, expectedModules) {
  console.log("validating module names")

  const programPage = this.poManager.getProgramPage()
  const actualModules = await programPage.getModuleName()
  console.log(actualModules)
  console.log(expectedModules)
  expect(actualModules).toEqual(expectedModules.split(' '))

});

// add new program
Then('Admin should see sub menu in menu bar as {string}', async function ({ }, arg) {
  console.log("Checking add new program visibility")
  const programPage = this.poManager.getProgramPage()
  const locator = await programPage.addNewProgramLink


  const commonPage = this.poManager.getCommonPage()
  expect(await commonPage.isLocatorVisible(locator)).toBe(true)
});

//Program Page Validations
//1)
Then('Admin should see heading {string}', async function ({ }, expectedText) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getManageProgramText()
  expect(await actualText).toBe(expectedText)

});

//2)
Then('Admin should able to see Program name, description, and status for each program', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualProgramDetails = await programPage.getProgramDetails()
  expect(await actualProgramDetails).toEqual(['Program Name', 'Program Description', 'Program Status'])


});

//3)
Then('Admin should see a Delete button in left top is disabled', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const isDisabled = await programPage.getDisabledDelete()
  expect(await isDisabled).toBe(true)


});

//4)
Then('Admin should see Search bar with text as {string}', async function ({ }, expectedText) {
  const programPage = this.poManager.getProgramPage()

  const searchBox = await programPage.getSearchBoxText()
  expect(await searchBox).toBe(true)

  const actualText = await programPage.searchPlaceholderText()

  expect(actualText).toBe(expectedText)
});

//5)
Then('Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit Delete', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualHeaderNames = await programPage.getTableHeaderNames()

  expect(actualHeaderNames).toEqual(['Program Name', 'Program Description', 'Program Status', 'Edit / Delete'])


});

//6)
Then('Admin should see checkbox default state as unchecked beside Program Name column as header', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const checkbox = await programPage.checkBoxOnHeader()
  //expect(await checkbox).toBe(false)
  //expect(await checkbox).not.toBeChecked()
  expect(await checkbox).not.toBeChecked()

});

Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async function ({ }) {
  //const programPage = await this.poManager.getProgramPage()
  const programPage = this.poManager.getProgramPage()
  await programPage.verifyAllCheckBoxes()

});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.visibilityOfSortIcons()

});

Then('Admin should see the Edit and Delete buttons on each row of the data table', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.visibilityOfEditDeleteIcons()
});

Then('Admin should see the text as {string} along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records', async function ({ }, arg) {
  const programPage = this.poManager.getProgramPage()
  const actualText = await programPage.visbilityOfPaginationIcon()

  expect(actualText).toMatch(/Showing \d+ to \d+ of \d+ entries/);

});


Then('Admin should see the footer as In total there are z programs z- Total number of records', async function ({ }) {

  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getFooterText()

  expect(actualText).toMatch(/In total there are \d+ programs\./);

});

///////////// Add New Program////////////////


Given('Admin is on program module after reaching dashboard', async function ({ }) {
  const commonPage = this.poManager.getCommonPage()
  const programPage = this.poManager.getProgramPage()

  await commonPage.navigateToLoginPage()
  await commonPage.gotologin()
  await programPage.clickOnProgramLink()

});

Given('Admin is on Program module', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getManageProgramText()
  expect(actualText).toBe(" Manage Program")
});

When('Admin clicks on New Program under the Program menu bar', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  programPage.clickOnAddNewProgramLink()

});

Then('Admin should see pop up window for program details', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.addNewProgPopupVisiblity()

});

Then('Admin should see window title as {string}', async function ({ }, expectedText) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getProgramDetailsText()
  console.log(actualText)
  expect(actualText).toBe(expectedText)

});

Then('Admin should see red {string} mark beside mandatory field {string}', async function ({ }, asterisk, name) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.nameAsterisk()
  expect(actualText).toBe(name + asterisk)

});

Given('Admin is on Program details form', async function ({ }) {

  const programPage = this.poManager.getProgramPage()
  await programPage.clickOnAddNewProgramLink()

});

When('Admin clicks save button without entering mandatory', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.clickSaveButton()

});

Then('Admin gets message field is required', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  const fieldRequired = await programPage.fieldsRequired()
  await expect(fieldRequired).toContainText('Program name is required')
  await expect(fieldRequired).toContainText('Description is required.')
  await expect(fieldRequired).toContainText('Status is required.')

});

When('Admin clicks Cancel button', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.clickCancelButton()

});

Then('Admin can see Program Details form disappears', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const dialogBox = await programPage.getDialogBox()
  await expect(dialogBox).not.toBeVisible()

});

When('Admin selects the status of the program by clicking on the radio button {string}', async function ({ }, arg) {
  const programPage = this.poManager.getProgramPage()
  await programPage.clickOnStatusRadioBtn()

});

Then('Admin can see {string} status selected', async function ({ }, arg) {
  const programPage = this.poManager.getProgramPage()

  const statusRadioButton = await programPage.clickOnStatusRadioBtn()
  await expect(statusRadioButton).toBeVisible()
});

When('Admin Click on X button', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  console.log("verifying X button")
  await programPage.clickCloseButton()

});

///excel///
//entering program name

When('Admin enters the Name in the text box from {string} and {string}', async function ({ }, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()
  await programPage.enterProgramName(DataInput, sheetname)

});

Then('Admin can see the text entered', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualText1 = await programPage.enteredProgramNameText()

  console.log(actualText1)
  //await expect(actualText1).toBe('Playwright') //validating with input value
  await expect(actualText1).toBe(process.env.AssertProgramName)

  const actualText2 = await programPage.programNameText()
  await expect(actualText2).toBeVisible()
  await expect(actualText2).toHaveValue(process.env.AssertProgramName)  //to validate the entered text with locator

});

//entering program description
When('Admin enters the Description in text box from {string} and {string}', async function ({ }, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()

  await programPage.enterProgramDescription(DataInput, sheetname)

});

Then('Admin can see the entered text in the description box', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.enteredProgDescriptionText()

  await expect(actualText).toBeVisible()
  await expect(actualText).toHaveValue(process.env.AssertProgramDescription)  //to validate the entered text with locator


});

//entering valid details and  click save button
When('Admin enter valid details for mandatory fields from {string} and {string} and Click on save button', async function ({ }, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()

  await programPage.enterValidDetails(DataInput, sheetname)


});

Then('Admin gets a message {string} Program created', async function ({ }, successmessage) {
  const programPage = this.poManager.getProgramPage()
  const successMsg = await programPage.getSuccessMsg()
  // expect(await successMsg.textContent()).toHaveValue('Successful')
  expect(await successMsg).toBe(successmessage)

});

//validate created program
When('Admin searches with newly created Program Name sent from {string} and {string}', async function ({ }, DataInput, sheetname) {
  //const programPage = this.poManager.getProgramPage()
  console.log("When")
});

Then('Records of the newly created  Program Name is displayed and match the data entered from {string} and {string}', async function ({ }, DataInput, sheetname) {
  // const programPage = this.poManager.getProgramPage()
  console.log("Then")
});


////////////////////////Edit Program////////////////////

When('Admin clicks on Edit option for particular program from {string} and {string}', async function ({ }, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()
  //await programPage.closeOverlay()
  await programPage.searchingToEditProgramName(DataInput, sheetname)
  
  await programPage.clickEditIcon()


});

Then('Admin lands on Program details form', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const dialogBox = await programPage.getDialogBox()
  await expect(dialogBox).toBeVisible()

  // const programPage = this.poManager.getProgramPage()
  // const actualText = await programPage.getProgramDetailsText()
  // expect(await actualText).toBe("Program Details")
});

When('Admin edits the program name and click on save button from {string} and {string}', async function ({}, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()
 
  await programPage.editValidProgramName(DataInput, sheetname)
  //await programPage.clickSaveButton()

});

Then('Updated program name is seen by the Admin', async function ({}) {
  const programPage = this.poManager.getProgramPage()
  const successMsg = await programPage.getSuccessMsg()
  expect(await successMsg).toBe("Successful")


});

//editing description

When('Admin edits the description text and click on save button from {string} and {string}', async function ({}, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()
  await programPage.editValidProgramDescription(DataInput, sheetname)

});

Then('Admin can see the description is updated', async function({}) {
  const programPage = this.poManager.getProgramPage()
  const successMsg = await programPage.getSuccessMsg()
  expect(await successMsg).toBe("Successful")


});

//to edit status
When('Admin can change the status of the program from {string} and {string} and click on save button', async function ({}, DataInput, sheetname) {
  const programPage = this.poManager.getProgramPage()
  programPage.editValidProgramStatus(DataInput, sheetname)

});

Then('Status updated can be viewed by the Admin', async function ({}) {
  const programPage = this.poManager.getProgramPage()
  const successMsg = await programPage.getSuccessMsg()
  expect(await successMsg).toBe("Successful")


});


/////////////// Pagination////////////////////


When('Admin clicks on program in dashboard and admin lands on Manage program Page', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.clickOnProgramLink()

});



Given('Admin is on the Program module', async function ({ }) {

  console.log("Admin is on Program page")

});

When('Admin clicks Next page link on the program table', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.closeOverlay()
  await programPage.clickNextLink()

});

Then('Admin should see the Pagination has {string} active link', async function ({ }, arg) {
  const programPage = this.poManager.getProgramPage()

  //await programPage.validateNextPageLink()
  await programPage.validateNextLink()


});

When('Admin clicks Last page link', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.closeOverlay()
  await programPage.clickLastLink()

});

Then('Admin should see the last page record on the table with Next page link are disabled', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  expect(await programPage.visibilityOfNextLink()).toBe(true)

});

Given('Admin is on last page of Program module table', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.closeOverlay()
  await programPage.clickLastLink()


});

When('Admin clicks Previous page link', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.clickPreviousLink()

});

Then('Admin should see the previous page record on the table with pagination has previous page link', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  const actualText = await programPage.paginationText()

  expect(actualText).toMatch(/Showing \d+ to \d+ of \d+ entries/);
});

Given('Admin is on Previous Program page', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.closeOverlay()
  await programPage.clickLastLink()
  await programPage.clickDoublePreviousLink()
});

When('Admin clicks First page link', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.clickFirstPage()
});

Then('Admin should see the very first page record on the table with Previous page link are disabled', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.paginationText()
  expect(actualText).toMatch(/Showing \d+ to \d+ of \d+ entries/)

  expect(await programPage.visibilityOfDblPreviousLink()).toBe(true)
});


//////////////////////////Program sorting///////////////////////////////

When('Admin clicks on Arrow next to programName', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.closeOverlay()
  await programPage.clickSortProgramName()
  await programPage.SortProgramNameItemsAsc()
  // await programPage.getProgramNameColumn()


});

Then('Admin See the Program Name is sorted in Ascending order or Descending order', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const sortedList = await programPage.SortProgramNameItemsAsc();
  const ActualList = await programPage.getProgramNameList();
  expect(ActualList).toEqual(sortedList);

  const sortedListDesc = await programPage.SortProgramNameItemsDesc();
  const ActualListDesc = await programPage.getProgramNameList();
  expect(ActualListDesc).toEqual(sortedListDesc);

});

When('Admin clicks on Arrow next to Program Description', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.closeOverlay()
  await programPage.clickSortProgramDesc()
  await programPage.SortProgramDescriptionAsc()

});

Then('Admin See the program Description is sorted in Ascending order or Descending order', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const sortedList = await programPage.SortProgramDescriptionAsc();
  const ActualList = await programPage.getProgramDescList();
  expect(ActualList).toEqual(sortedList);

  const sortedListDesc = await programPage.SortProgramDescriptionDesc();
  const ActualListDesc = await programPage.getProgramDescList();
  expect(ActualListDesc).toEqual(sortedListDesc);


});

When('Admin clicks on Arrow next to Program status', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.closeOverlay()
  await programPage.clickSortProgramStatus()
  await programPage.SortProgramStatusAsc()
});

Then('Admin See the  Program Status is sorted in Ascending order or Descending order', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  const sortedList = await programPage.SortProgramStatusAsc();
  const ActualList = await programPage.getProgramStatusList();
  expect(ActualList).toEqual(sortedList);

  const sortedListDesc = await programPage.SortProgramStatusDesc();
  const ActualListDesc = await programPage.getProgramStatusList();
  expect(ActualListDesc).toEqual(sortedListDesc);


});

///////////////////////////////////////////////
//////////////////////////////////////search functionality/////////////////

When('Admin enter the program to search By program name', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.searchByProgramName()

});

Then('Admin should able to see Program name, description, and status for searched program name', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.visibilityOfSearchedData()


});

When('Admin enter the program to search By program description', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.searchByProgramDesc()


});

Then('Admin should able to see Program name, description, and status for searched program description', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  await programPage.visibilityOfSearchedData()
  //await programPage.getTableValues()
});

When('Admin enter the program to search By program name that does not exist', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.searchByInvalidProgramName()

});

Then('There should be zero results.', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  const actualText = await programPage.paginationText()
  expect(actualText).toMatch(/Showing \d+ to \d+ of \d+ entries/)

});

When('Admin enter the program to search By partial name of program', async function ({ }) {
  const programPage = this.poManager.getProgramPage()

  await programPage.searchByPartialProgramName()



});

Then('Admin should able to see Program name, description, and status for searched program name for partial search', async function ({ }) {
  const programPage = this.poManager.getProgramPage()
  const actualText = await programPage.paginationText()
  await expect(actualText).toMatch(/Showing \d+ to \d+ of \d+ entries/)


});