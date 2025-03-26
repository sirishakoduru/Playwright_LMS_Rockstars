require('dotenv').config();

import{createBdd} from "playwright-bdd"
import { ClassPage } from '../PageObjects/Class.js';
const { PageObjectManager } = require('../PageObjects/PageObjectManager.js')
const{Given,When,Then}=createBdd()
const {test, expect } = require('@playwright/test')
const playwright = require('@playwright/test');

Given('Admin is on Manage class page', async function() {
    
  });
  
  When('Admin clicks Next page link on the class table', async function() {
    
  });
  
  Then('Admin should see the next page record on the table  with Pagination has next active link enabled', async function() {
    
  });
  
  When('Admin clicks Last page link of class', async function() {
    
  });
  
  Then('Admin should see the last page record on the table with Next page link are disabled of class', async function() {
    
  });
  
  Given('Admin is on last page of class table', async function() {
    
  });
  
  When('Admin clicks First page link of class', async function() {
    
  });
  
  Then('Admin should see the previous page record on the table with pagination has previous page link enabled', async function() {
    
  });
  
  Given('Admin is on Previous class page', async function() {
    
  });
  
  When('Admin clicks Start page link', async function() {
    
  });
  Then('Admin should see the very first page record on the table with Previous page link are disabled of class', async function() {
    
  });