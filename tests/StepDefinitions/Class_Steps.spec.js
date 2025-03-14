
//import {test,expect,chromium} from '@playwright/test';
//import { createBdd } from 'playwright-bdd';
//import { beforeEach, afterEach, page } from './hooks';

//import lmsPageClass from "../Pages/lmsPageClass";
//import lmsPageClass from "../Pages/lmsPageClass.js";
//beforeEach();
//afterEach();
import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { test,chromium, expect } from "@playwright/test";
import { Page } from "playwright";
import { createBdd } from "playwright-bdd";
import {ClassHome_Page} from '../Pages/ClassHome_Page.js'


const { Given, When, Then } = createBdd();

 
let browser
let page
let context
let HomePage

Given('Admin navigates to {string}', async function () {
  

   

   //browser = await chromium.launch({ headless: false,channel:"chrome" }); // Set to true for CI
   //const context = await browser.newContext();
   //page = await context.newPage();
   browser = await chromium.launch({ headless: false });
            const context = await browser.newContext();
            page = await context.newPage();

   await page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");


 // browser = await chromium.launch({headless: false,channel:"chrome"});
 // BrowserContext = await browser.newContext({viewport: null, javaScriptEnabled: true})
 // page = await bCtx.newPage();
  //page = await browser.newPage();
   // await page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login"); 
  });
  
  When('Admin enters username {string} and password {string}', async function ()  {
   
   
     
  await page.getByRole('textbox', { name: 'User' }).fill('Playwright@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('March@2025')
  await page.getByRole('button', { name: 'Login' }).click();
   
   //await page.fill(('#username'), username);
    //await page.fill(('#password'), password);
    //await page.click(('#login')); // Adjust selector if needed


     //await page.locator('#username').fill(username)
     //await page.locator('#password').fill(password)
     //await page.locator('#Login').click()

   // await page.waitForTimeout(3000)
    //await this.page.locator("#username").fill(username);
   //await this.page.locator("#password").fill(password);
   //await this.page.locator("xpath=//span[text()='Login']").click();

  })
  
  Then('Admin is landed on {string}', async function () {
    
    await page.waitForURL('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/');
   
  });
  
  Given('Admin is on the home Page', async function () {
    //HomePage = new ClassHome_Page(page);
    //HomePage.HomePage_Navigate();
    
    const currentUrl = await page.url();
  expect(currentUrl).toBe('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/'); 

});

 When('clicks the Class Navigation bar in the Header', async function () {
    
   await page.getByRole('button', { name: 'Class' }).click()
   //HomePage.ClassNav_Link();
    

  });
  
  Then('Admin should see the {string} Title', async function (expectedTitle) {
   
   // const actualTitle=await page.locator('LMS - Learning Management');
    const actualTitle = await page.getByText('LMS - Learning Management');
    console.log('This is expectedTitle' + expectedTitle)
  //

  });
  
  Given('Admin is on the home page after login', async function () {
    
    const currentUrl = await page.url();
    //expect(currentUrl).toBe('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/session'); 
  

  });
  
  When('Admin clicks the Class Navigation bar in the Header', async function (){
   const classtext= await page.getByRole('button', { name: 'Class' });
   await expect(classtext).toBeVisible();


   // await page.getByRole('button', { name: 'Class' }).click()

  });
  
  Then('Admin should see the {string} Header', async function (expectHeaderText) {
    const Header= await page.getByText('Manage Class');
    await expect(Header).toBeVisible()
    

  });
  
  Then('Admin should see the Search Bar in Manage class page', async ({}) => {
    
   const searchBar= await page.getByRole('textbox', { name: 'Search...' });
   await expect(searchBar).toBeVisible();

  });
  