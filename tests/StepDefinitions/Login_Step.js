
import{createBdd} from "playwright-bdd"
import { LoginPage } from "../PageObjects/LoginPage.js";
const{Given,When,Then}=createBdd()
const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');


Given('Admin gives the correct LMS portal URL', async function() {
  const commonPage = this.poManager.getCommonPage()
  await commonPage.navigateToLoginPage()
   
});

Given('Admin is on login Page in LMS', async function() {
    const commonPage = this.poManager.getCommonPage()
    await commonPage.navigateToLoginPage()
      
  });
  
  When('Admin enter valid data in all field and  {string} clicks login button', async function({},DataInput) {
    
    const LoginPage = this.poManager.getLoginPage()  
    await LoginPage.validLogin(DataInput);

  });
  
  Then('Admin should land on home page in LMS', async function() {   
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.CheckLMSTitle()
  });
  
  When('Admin enter invalid data  {string} and clicks login button', async function({},DataInput) {
  
    const LoginPage = this.poManager.getLoginPage()    
    await LoginPage.validLogin(DataInput);
  });
  
  Then('Error message {string}', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.VerifyInvalidlogin();
    
  });
  
  When('Admin enter value only in password and {string} clicks login button', async function({},DataInput) {
    const LoginPage = this.poManager.getLoginPage()   
    await LoginPage.validLogin(DataInput);
  });
  
  Then('Error message" Please enter your user name"', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.VerifyNulluserName();
  });
  
  When('Admin enter value only in user name and  {string} clicks login button', async function({},DataInput) {    
    const LoginPage = this.poManager.getLoginPage()   
    await LoginPage.validLogin(DataInput);

  });
  
  Then('Error message" Please enter your password "', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.VerifyNullpassword();
    
  });
  
  When('Admin enter valid credentials {string} and clicks login button through keyboard', async function({},DataInput) {  
    const LoginPage = this.poManager.getLoginPage()   
    await LoginPage.validLoginByKeyboard(DataInput);
  });

  Then('Admin should land on home page', async function() {    
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.CheckLMSTitle()
  });
  
  When('Admin enter valid credentials {string} and clicks login button through mouse', async function({},DataInput) {
  
    const LoginPage = this.poManager.getLoginPage()   
    await LoginPage.validLoginByMouseaction(DataInput);
  });