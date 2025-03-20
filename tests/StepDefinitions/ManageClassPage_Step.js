import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { ClassPage } from '../PageObjects/Class.js';


const { Given, When, Then ,test} = createBdd();
require('dotenv').config();

Given('Admin is on the home page after login', async function () {
  this.ManageClassPageObj = new ClassPage(this.page);
  await this.ManageClassPageObj.gotoLoginUrl();
  await this.ManageClassPageObj.login();

});

Then('Admin should see the {string} Title', async function () {
   
   await this.ManageClassPageObj.LMS_Title();

});

Then('Admin should see the {string} Header', async function () {
 
  await this.ManageClassPageObj.ManageClass_Header();

});

Then('Admin should see the Search Bar in Manage class page', async function () {
  
  await this.ManageClassPageObj.Search_Bar();

});

Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async function () {
  
  this.ManageClassPageObj = new ClassPage(this.page);
  const actualHeaderNames = await this.ManageClassPageobj.DataTable_Headers();
  const expectedHeaders = ['Batch Name',
    'Batch Description',
    'Batch Status',
    'No Of Classes','Program Name','Edit / Delete']
    expect(actualHeaderNames).toEqual(expectedHeaders);
  });
    
Then('Admin should see the {string} and enabled pagination controls under the data table', async function () {
 
  this.ManageClassPageObj = new ClassPage(this.page);
  await this.ManageClassPageObj.Text_Pagination();
});

Then('Admin should see the Sort icon of all the field in the datatable', async function () {
  
  //this.ManageClassPageObj = new ClassPage(this.page);
  //const tableHeaders = await this.ManageClassPageObj.Sorticon_Elements();

  expect (this.ManageClassPageObj.Sorticon_Elements()).toBeTruthy();


});

Then('Admin should see the Delete button under the Manage class page header', async function () {
  
  this.ManageClassPageObj = new ClassPage(this.page);
  this.ManageClassPageObj.Delete_Button();

});

Then('Admin should see Total no of classes in below of the data table', async function () {
  this.ManageClassPageObj = new ClassPage(this.page);
  // const paginationtext = await this.ManageClassPageobj.TotalPages_Text();
  // await expect (paginationtext).toBeEnabled();
  //ManageClassPageObj.TotalClasses_Displayed();
  const isVisible = await this.ManageClassPageObj.TotalPages_Text();
  expect(isVisible).toBeTruthy();


});
