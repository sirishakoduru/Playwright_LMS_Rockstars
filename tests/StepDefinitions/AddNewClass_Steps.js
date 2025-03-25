import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { ClassPage } from '../PageObjects/Class.js';

const { Given, When, Then ,test} = createBdd();
require('dotenv').config();

let NewClassPageObj;

Given('Admin is on the Manage class page', async function () {
    this.NewClassPageObj = new ClassPage(this.page);
    await this.NewClassPageObj.gotoLoginUrl();
    await this.NewClassPageObj.login();
  });
  
  When('Admin clicks a add new class under the class menu bar', async function () {
    this.NewClassPageObj = new ClassPage(this.page);
    await this.NewClassPageObj.classButton();
    await this.NewClassPageObj.addNew_ClassButton();
  });
  
  Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close\\(X) Icon on the top right corner of the window', async function () {
    
   expect (this.NewClassPageObj.isPopupVisible()).toBeTruthy();
    expect(this.NewClassPageObj.isFormEmpty()).toBeTruthy();
    expect(this.NewClassPageObj.isSaveButtonVisible()).toBeTruthy();
    expect(this.NewClassPageObj.isCancelButtonVisible()).toBeTruthy();
    expect(this.NewClassPageObj.isCloseIconVisible()).toBeTruthy();


  });

  Then('Admin should see few input fields and their respective text boxes in the class details window:', async ({page}, dataTable) => {
    //this.NewClassPageObj = new ClassPage(this.page);
    this.NewClassPageObj = new ClassPage(this.page);
    const expectedFields = dataTable.rows().flat(); // Converts the table into an array
    await this.NewClassPageObj.validateInputFields(expectedFields);
  });

  

  