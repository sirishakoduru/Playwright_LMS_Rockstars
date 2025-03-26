import{createBdd} from "playwright-bdd"
const{Given,When,Then}=createBdd()


const { PageObjectManager } = require('../PageObjects/PageObjectManager')
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');



Given('Admin is logged in to LMS Portal', async function() {
    const commonPage = this.poManager.getCommonPage()
    await commonPage.navigateToLoginPage()
    await commonPage.gotologin()

  });
  
  Given('Admin is on dashboard page after Login', async function() {
    console.log("Admin is on Dashboard Page")  
});
  
  When('Admin clicks Program on the navigation bar', async function() {
  
    console.log("Clicking Program")

    const programPage = this.poManager.getProgramPage()
    await programPage.clickOnProgramLink()

    //await programPage.batchlink()
  
  
});
  
  Then('Admin should be navigated to Program module', async function() {
    console.log("Validating Manage Page")
    const programPage = this.poManager.getProgramPage()
  
    const actualText = await programPage.getManageProgramText()
    expect(await actualText).toBe(' Manage Program')
    
});

//Menubar feature

//logout link visibility
Then('Admin should see Logout in menu bar', async function() {
  console.log("Admin should see logout link on page")
  const commonPage = this.poManager.getCommonPage()

  const locator = await commonPage.logoutLink()
  expect(await commonPage.isLocatorVisible(locator)).toBe(true)

  //await commonPage.isLocatorVisible(locator)
  //expect(await commonPage.logoutOnMenubar()).toBe(true)
});

// //LMS heading
Then('Admin should see the heading {string}', async function ({}, expectedText){
  console.log("LMS Heading Validation")
    const commonPage = this.poManager.getCommonPage()
  
    const actualText = await commonPage.getDashboardTitle()
    expect(await actualText).toBe(expectedText)
  
});


//program, batch, class, logout
Then('Admin should see the page names as in order {string}', async function ({}, expectedModules){
  console.log("validating module names")

    const programPage = this.poManager.getProgramPage()
    const actualModules = await programPage.getModuleName()
    console.log(actualModules)
    console.log(expectedModules)
    expect(actualModules).toEqual(expectedModules.split(' '))
  
});

// add new program
Then('Admin should see sub menu in menu bar as {string}', async function ({}, arg) {
  console.log("Checking add new program visibility")
    const programPage = this.poManager.getProgramPage()
    const locator = await programPage.addNewProgramLink
  
  
    const commonPage = this.poManager.getCommonPage()
    expect(await commonPage.isLocatorVisible(locator)).toBe(true)
});

//Program Page Validations
//1)
Then('Admin should see heading {string}', async function ({}, expectedText) {
  const programPage = this.poManager.getProgramPage()

  const actualText = await programPage.getManageProgramText()
  expect(await actualText).toBe(expectedText)

});

//2)
Then('Admin should able to see Program name, description, and status for each program', async function ({}){
  const programPage = this.poManager.getProgramPage()

  const actualProgramDetails = await programPage.getProgramDetails()
  expect(await actualProgramDetails).toEqual(['Program Name', 'Program Description', 'Program Status'])


});

//3)
Then('Admin should see a Delete button in left top is disabled', async function({}){
  const programPage = this.poManager.getProgramPage()

const isDisabled=await programPage.getDisabledDelete()
expect(await isDisabled).toBe(true)


});

//4)
Then('Admin should see Search bar with text as {string}', async function({}, expectedText){
  const programPage = this.poManager.getProgramPage()

  const searchBox=await programPage.getSearchBoxText()
  expect(await searchBox).toBe(true)

  const actualText=await programPage.searchPlaceholderText()

  expect(actualText).toBe(expectedText)
});

//5)
Then('Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit Delete', async function({}){
  const programPage = this.poManager.getProgramPage()

  const actualHeaderNames=await programPage.getTableHeaderNames()

  expect(actualHeaderNames).toEqual(['Program Name', 'Program Description', 'Program Status', 'Edit / Delete'])


});

//6)
Then('Admin should see checkbox default state as unchecked beside Program Name column as header', async function({}){
  const programPage = this.poManager.getProgramPage()
  
  const checkbox=await programPage.checkBoxOnHeader()
   //expect(await checkbox).toBe(false)
  //expect(await checkbox).not.toBeChecked()
  expect(await checkbox).not.toBeChecked()

});

Then('Admin should see check box default state as unchecked on the left side in all rows against program name', async ({}) => {


});

Then('Admin should see the sort arrow icon beside to each column header except Edit and Delete', async ({}) => {
  // Step: Then Admin should see the sort arrow icon beside to each column header except Edit and Delete
  // From: tests\features\Program\03_ProgramPageValidation.feature:40:9
});

Then('Admin should see the Edit and Delete buttons on each row of the data table', async ({}) => {
  // Step: Then Admin should see the Edit and Delete buttons on each row of the data table
  // From: tests\features\Program\03_ProgramPageValidation.feature:44:9
});

Then('Admin should see the text as {string} along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records', async ({}, arg) => {
  // Step: Then Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records    
  // From: tests\features\Program\03_ProgramPageValidation.feature:48:9
});


Then('Admin should see the footer as In total there are z programs z- Total number of records', async ({}) => {
  // Step: Then Admin should see the footer as In total there are z programs z- Total number of records
  // From: tests\features\Program\03_ProgramPageValidation.feature:53:9
});
// ---sort-------------------

When('Admin clicks on program in dashboard and admin lands on Manage program Page', async function() {
  const programPage = this.poManager.getProgramPage()
    await programPage.clickOnProgramLink()
    const actualText = await programPage.getManageProgramText()
    expect(await actualText).toBe(' Manage Program')
});

Given('Admin is on Program module', async function() {
  console.log("Admin is on Program module")
});

When('Admin clicks on Arrow next to programName', async function() {
  const programPage = this.poManager.getProgramPage()
  await programPage.closeOverlay();
  await programPage.clickSortProgramName();
  await programPage.SortProgramNameItemsAsc();
});

Then('Admin See the Program Name is sorted in Ascending order or Descending order', async function() {
  const programPage = this.poManager.getProgramPage()
  const sortedList = await programPage.SortProgramNameItemsAsc();
  const ActualList = await programPage.getProgramNameList();
  expect(ActualList).toEqual(sortedList);
  const sortedListDesc = await programPage.SortProgramNameItemsDesc();
  const ActualListDesc = await programPage.getProgramNameList();
  expect(ActualListDesc).toEqual(sortedListDesc);
  
});
When('Admin enter the program to search By program name', async function() {
  const programPage = this.poManager.getProgramPage()
  await programPage.closeOverlay();
  await programPage.EnterProgramNameInSearch();
  await programPage.searchDetails();
});

Then('Admin should able to see Program name, description, and status for searched program name', async function() {
  
});