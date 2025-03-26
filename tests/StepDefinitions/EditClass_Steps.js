import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { ClassPage } from "../PageObjects/Class";

const { Given, When, Then ,test} = createBdd();

let EditClassPageObj;

Given('Admin is on the Manage class page', async function () {
    this.EditClassPageObj = new ClassPage(this.page);
    await this.EditClassPageObj.gotoLoginUrl();
    await this.EditClassPageObj.login();
    await this.EditClassPageObj.classButton();
  });
  
  When('Admin clicks on the edit icon', async function () {
    await this.EditClassPageObj.closeOverlay()
   await this.EditClassPageObj.editIcon();
  });
  
  Then('A new pop up with class details appears', async function (){
    
   await this.EditClassPageObj.editClassPopUp();

  });
  
  Then('Admin should see batch name field is disabled', async function () {
    await this.EditClassPageObj.closeOverlay()
    await this.EditClassPageObj.isBatchNameDisabled();
  });
  
  Then('Admin should see class topic field is disabled', async function () {
    await this.EditClassPageObj.isClassTopicDisabled()
  });
  
  Given('Admin is on the Edit Class Popup window', async function () {
    await this.EditClassPageObj.isPopupVisible();
  });
  
   When('Update the fields with valid data and click save', async function () {

      await this.EditClassPageObj.updateFields(true);
        await this.EditClassPageObj.clickSaveButton();
   });
  
    Then('Admin gets message {string} and see the updated values in data table', async function () {
  
         await this.EditClassPageObj.getSuccessMessage();

 });
  
    When('Update the fields with invalid values and click save', async function () {

        await this.EditClassPageObj.updateFields(false);
       await this.EditClassPageObj.clickSaveButton();
  });
  
  Then('Admin should get Error message', async function () {

     await this.EditClassPageObj.getErrorMessages()
  });

  
When('Update the mandatory fields with valid values and click save', async function () {
   await this.EditClassPageObj.updateMandatoryFields(true);
   await this.EditClassPageObj.clickSaveButton();
   });
  
  When('Update the optional fields with valid values and click save', async function () {
    await this.EditClassPageObj.updateMandatoryFields(false);
    await this.EditClassPageObj.clickSaveButton();
  });
  
 When('Admin enters only numbers or special char in the text fields', async function () {

    await this.EditClassPageObj.enterInvalidDataInDescription();

});
  
  When('Admin clicks Cancel button on edit popup', async function () {
    await this.EditClassPageObj.EditcancelButton(); 
  });

  
  Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', async function (){
    const popup = await this.EditClassPageObj.editClassClosePopUp();
     await expect(popup).toBeHidden(); 
  });
  