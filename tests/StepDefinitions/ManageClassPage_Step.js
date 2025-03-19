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
  const actualHeaders = await this.ManageClassPageObj.DataTable_Headers();
  const expectedHeaders = ('Batchname','Class Topic','Class Description','Status','Class Date','Staff Name', 'Edit/Delete')
    
    
    
    
   //const expectedHeaders =[ 
   
  //   'Batchname',
  //   'Class Topic',
  //   'Class Description',
  //   'Status',
  //   'Class Date',
  //   'Staff Name',
  //   'Edit/Delete'
  // ];
  
  
 // const actualHeaders = await this.ManageClassPageObj.DataTable_Headers();
  console.log("Expected Headers:", expectedHeaders);
  console.log("Actual Headers:", actualHeaders);
  expect(actualHeaders).toEqual(expectedHeaders);
});

Then('Admin should see the {string} and enabled pagination controls under the data table', async function () {
  
  await this.ManageClassPageObj.Text_Pagination()


});

Then('Admin should see the Sort icon of all the field in the datatable', async function () {
  
  this.ManageClassPageObj = new ClassPage(this.page);
  const tableHeaders = await this.ManageClassPageObj.Sorticon_Elements();




});

Then('Admin should see the Delete button under the Manage class page header', async function () {
  
  this.ManageClassPageObj = new ClassPage(this.page);
  this.ManageClassPageObj.Delete_Button();

});

Then('Admin should see Total no of classes in below of the data table', async function () {
  // Step: Then Admin should see Total no of classes in below of the data table
  // From: tests\features\ManageClassPage.feature:40:1
});
