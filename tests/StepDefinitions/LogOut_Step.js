import{createBdd} from "playwright-bdd"
const{Given,When,Then}=createBdd()
const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');

// Given('Admin is on login Page in LMS', async function() {
//     const commonPage = this.poManager.getCommonPage()
//     await commonPage.navigateToLoginPage()
    
//   });
  
  // When('Admin enter valid data in all field and  {string} clicks login button', async function() {
  //   const commonPage = this.poManager.getCommonPage()
  //   await commonPage.gotologin()
  // });
  
  Given('Admin is in home page', async function() {
    const commonPage = this.poManager.getCommonPage()
    await commonPage.getDashboardTitle()
  });
  
  When('Admin clicks on the logout in the menu bar', async function() {
    const LogOutPage = this.poManager.getLogOutPage()
    await LogOutPage.LogOut()
    
  });
  
  Then('Admin should be redirected to login page', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.LoginPageValidation()
  });
  
  Given('Admin is in login page', async function() {
    const LogOutPage = this.poManager.getLogOutPage()
    await LogOutPage.LogOut()
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.LoginPageValidation()
  });
  
  When('Admin clicks  browser back button', async function() {
    const LogOutPage = this.poManager.getLogOutPage()
    await LogOutPage.navigateToback();
  });
  
  Then('Admin should receive error message', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.LoginPageValidation()
  });