
require('dotenv').config();

import{createBdd} from "playwright-bdd"
import { ClassPage } from '../PageObjects/Class.js';
//import{SortClassPage} from '../PageObjects/Class.js';
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
  
  When('Admin clicks on the Batchname sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.BatchNamesort()
  });
  
  Then('Admin should see Class details are sorted by Batch Name', async function() {
     const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getbatchnameList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });

  When('Admin clicks on the Class topic sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassTopicsort()
    
  });
  
  Then('Admin should see Class details are sorted by Class Topic', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getclassTopicList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });
  
  When('Admin clicks on the Class description  sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassDesccsort()
  });
  
  Then('Admin should see Class details are sorted by Class Description', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getclassDescList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });
  
  When('Admin clicks on the Status sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassSatussort()
  });
  
  Then('Admin should see Class details are sorted by Status', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getstatusList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });
  
  When('Admin clicks on the Class Date sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassDatesort()
  });

  Then('Admin should see Class details are sorted by Class Date', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getdateList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });
  
  When('Admin clicks on the Staff Name sort icon', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    await SortClassPage.ClassStaffsort()
  });
  
  Then('Admin should see Class details are sorted by Staff name', async function() {
    const SortClassPage = this.poManager.getSortClassPage()
    const sortingList = await SortClassPage.getstaffList();
    await SortClassPage.pagination_Asc_Sorting(sortingList)
  });