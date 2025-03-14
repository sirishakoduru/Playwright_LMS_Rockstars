import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";
import { Page } from "playwright";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

let page
let browser

         Given('Admin is on login Page', async function () {

            // browser = await chromium.launch({ headless: false });
            // const context = await browser.newContext();
            // page = await context.newPage();
            await this.page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");
        
           
         });


         When('Admin enter valid data in all field and clicks login button', async function () {
            await this.page.locator("#username").fill("Playwright@gmail.com");
            await this.page.locator("#password").fill("March@2025");
            await this.page.locator("xpath=//span[text()='Login']").click();
         });


         Then('Admin should land on home page', async function () {

            await expect(this.page).toHaveURL("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/")
          
         });