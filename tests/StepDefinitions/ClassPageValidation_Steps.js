import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { ClassPage } from '../PageObjects/Class.js';
//import { BatchPage } from '../PageObjects/Batch.js';


const { Given, When, Then ,test} = createBdd();
require('dotenv').config();

Given('Admin is on the loginPage', async function () {
 
     this.ClassPageObj = new ClassPage(this.page);
     await this.ClassPageObj.gotoLoginUrl();
});

When('Admin enter valid data in all field and clicks login button', async function () {
 
 this.ClassPageObj = new ClassPage(this.page)
  await this.ClassPageObj.login();
});

// Given('Admin is on the home Page', async function () {
//   this.ClassPageObj = new ClassPage(this.page);
//   await this.ClassPageObj.gotoLoginUrl();
//   await this.ClassPageObj.login();

// });

When('Admin clicks the Class Navigation bar in the Header', async function () {
  this.ClassPageObj = new ClassPage(this.page)
  await this.ClassPageObj.classButton();
});

Then('Admin should land on the Manage Class Page', async function () {
  const classurl = process.env.ClassURL
   await expect(this.page).toHaveURL(classurl);
});
