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
  
  
});
  
  Then('Admin should be navigated to Program module', async function() {
    console.log("Validating Manage Page")
    const programPage = this.poManager.getProgramPage()
  
    const actualText = await programPage.getManageProgramText()
    expect(await actualText).toBe(' Manage Program')
    
});