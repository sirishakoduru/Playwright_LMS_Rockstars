require('dotenv').config();

import{createBdd} from "playwright-bdd"
import { ClassPage } from '../PageObjects/Class.js';

const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const{Given,When,Then}=createBdd()
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');


   Given('Admin is on the Manage class page', async function() {
    this.ClassPageObj = new ClassPage(this.page);
    await this.ClassPageObj.gotoLoginUrl();
    await this.ClassPageObj.login();
    await this.ClassPageObj.classButton();
    
  });
  
  When('Admin enter the Batch Name in search textbox', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.BtachNameSearch()
  });
  
  Then('Admin should see Class details are searched by Batch Name', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.BtachNameInTable()
    
  });
  
  When('Admin enter the Class topic in search textbox', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassTopicSearch()
  });
  
  Then('Admin should see Class details are searched by Class topic', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassTopicInTable()
  });
  
  When('Admin enter the Staff Name in search textbox', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.StaffNameSearch()
  });
  
  Then('Admin should see Class details are searched by Staff name', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.StaffNameInTable()
  });