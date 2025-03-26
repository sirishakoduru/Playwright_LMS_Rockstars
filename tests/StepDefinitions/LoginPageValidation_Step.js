import{createBdd} from "playwright-bdd"
import { LoginPage } from "../PageObjects/LoginPage.js";
const{Given,When,Then}=createBdd()
const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');

 Given('Admin launch the browser', async function() {
    console.log("Admin launch the browser")  
  });
  
  When('Admin gives the correct LMS portal URL for login', async function() {

    const commonPage = this.poManager.getCommonPage()
    await commonPage.navigateToLoginPage()
    
  });
  
  Then('Admin should land on the login page', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.LoginPageValidation()
    
  });
  
  When('Admin gives the invalid LMS portal URL', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.navigateToLoginPageinvalidURL()
    
  });
  
  Then('Admin should recieve application error', async function() {
    
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.ApplicationErrorMsg()
    
  });

  // Then('HTTP response >= {int}. Then the link is broken', async function() {
    
  // });
  

  
  Then('Admin should see correct spellings in all fields', async function() {

    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.SpellingofFields()
  });
  
  Then('Admin should see  LMS - Learning Management System', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.ExtrctTextFromImage()
  });
  
  Then('Admin should see company name below the app name', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.ComanyName()
    
  });
  
  Then('Admin should see {string}', async function(){
    const LoginPage = this.poManager.getLoginPage()
    const actual_text = await LoginPage.Validate_Loginpage();
    expect(actual_text).toBe('Please login to LMS application');
    
    
  });
  Then('Admin should see two text field', async function() {
  const LoginPage = this.poManager.getLoginPage()
  const totaltextfields=await LoginPage.TextFiled()
  console.log("Total Text fields in the form:" + totaltextfields);
  expect(totaltextfields).toEqual(2)
  });
  

  Then('Admin should see {string} in the first text field', async function(){
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.UserTextfiled();
    
   
  });
  

  Then('Admin should see asterisk mark symbol next to text for mandatory fields', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.MandatoryFieldAstrerisk();
    
  });
  
  Then('Admin should {string} in the second text field', async function(){
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.PswdTextfiled();
  });
  
  Then('Admin should see asterisk mark symbol next to password text', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.PwdFieldAstrerisk();
  });
  
  // Then('Admin should see input field on the centre of the page', async function() {
  //   const LoginPage = this.poManager.getLoginPage()
  //   await LoginPage.Alignment();
  // });
  
  Then('Admin should see login button', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.LoginButton();
  });
  
  Then('Admin should see user in gray color', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.UserGrayColour();
  });
  
  Then('Admin should see password in gray color', async function() {
    const LoginPage = this.poManager.getLoginPage()
    await LoginPage.PasswordGrayColour();
    
  });
  