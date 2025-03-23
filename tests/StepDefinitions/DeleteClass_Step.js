require('dotenv').config();

import{createBdd} from "playwright-bdd"
import { ClassPage } from '../PageObjects/Class.js';
const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const{Given,When,Then}=createBdd()
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');


// Class Delete
Given('Admin is on Manage Class Page', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await this.ClassPageObj.classButton();
  });
  
  When('Admin clicks the delete icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.DeleteIconClick()
  });
  
  Then('Admin should see a alert open with heading {string} along with  <YES> and <NO> button for deletion in Class', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ConfirmPopUp()
    await SortClassPage.NoButtonIcon()
    await SortClassPage.YesButtonIcon()


  });
  
  Given('Admin is on Confirm Deletion alert in Class', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    const SortClassPage = this.poManager.getSortClassPage()
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await this.ClassPageObj.classButton();   
    await SortClassPage.DeleteIconClick()
  });
  
  When('Admin clicks yes option in class delete', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.deleteAndVerifyClassTopic()
    
  });
  
  Then('Admin gets a message {string} alert and do not see that Class in the data table', async function() {
    console.log("The Selected Class sucessfully Deleted and not seen in Table")
  });
  
  Given('Admin is on Confirm Deletion alert in class', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    const SortClassPage = this.poManager.getSortClassPage()
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await this.ClassPageObj.classButton();   
    await SortClassPage.DeleteIconClick()
  });
  
  When('Admin clicks  No option in class', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClickNoButton()
  });
  
  Then('Admin can see the deletion alert disappears without deleting in class delete', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ManageClassVisible()
  });
  
  When('Admin clicks on close button in class delete', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClickCloseButton()
  });
  Then('Admin can see the deletion alert disappears without any changes in class delete', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ManageClassVisible()
  });