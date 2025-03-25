require('dotenv').config();

import{createBdd} from "playwright-bdd"
import { ClassPage } from '../PageObjects/Class.js';

const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const{Given,When,Then}=createBdd()
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');



Given('AAdmin is on Manage Class page', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    const SortClassPage = this.poManager.getSortClassPage()
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await SortClassPage.ClassPageClick();
    
  });
  
  Given('Admin is on Manage Class Page', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    const SortClassPage = this.poManager.getSortClassPage()
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await SortClassPage.ClassPageClick();
  });
  
  When('Admin clicks on Class link on Manage Class page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassPageClick()
  });
  
  Then('Admin is redirected to class page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ManageClassvisible()
  });
  
  When('Admin clicks on Batch page link on Manage Class page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.BatchPageClick()
  });
  
  Then('Admin is redirected to Btach page link they clicked.', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ManageBatchvisible()
  });
  
  When('Admin clicks on Program page link on Manage Class page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ProgramPageClick()
  });
  
  Then('Admin is redirected to Program page link they clicked.', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.Manageprogramhvisible()
  });
  
  When('Admin clicks on Logout link on Manage class page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.LogoutClick()
  });
  
  Then('Admin is redirected to Login page', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.Loginpagevisible()
  });