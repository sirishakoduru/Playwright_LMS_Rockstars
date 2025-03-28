import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { BatchPage } from '../PageObjects/Batch';
import { addNewBatchPage } from "../PageObjects/AddNewPage";
const { Given, When, Then ,test} = createBdd();

Given('Admin is on the batch page of LMS', async function() {
    this.batchPageObj = new BatchPage(this.page);
    await this.batchPageObj.gotoLoginUrl();
    this.batchPageObj.login();
    // await this.batchPageObj.clickBatch();
    this.addNewPage = new addNewBatchPage(this.page)
    await this.addNewPage.ClickBatchButton();
    
  
  });
  
  // Given('Admin is on the Batch page', async function() {
  //   console.log("Admin is on the batch page")
  // });
  
  When('Admin clicks the delete Icon on any row', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickDeleteButton();
  });
  
  Then('Admin should see the confirm alert box with yes and no button', async function() {
   expect (this.addNewPage.isDeletePopupwithYesNoAppear()).toBeTruthy();
  });
  
  When('Admin clicks on the delete icon and click yes button', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickDeleteButton();
    await this.addNewPage.clickYesOnDeletePopup();
  });
  
  Then('Admin should see the successful message and the batch should be deleted', async function() {
   expect (this.addNewPage.getDeleteSuccessMesaage()).toBeTruthy();
  });
  
  When('Admin clicks on the delete icon and click no button', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickDeleteButton();
    await this.addNewPage.clickNoOnDeletePopup()
  });
  
  Then('Admin should see the alert box closed and the batch is not deleted', async function() {
    expect (this.addNewPage.isDeletePopupClosed()).toBeTruthy();
  });

  Given('Admin is on the batch confirm popup page', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickDeleteButton();
    // await this.deleteBatch.OnBatchDeletePopup();
  });
  
  When('Admin clicks on the close icon of popup', async function() {
    await this.addNewPage.clickDeletePopupCloseButton();
  });

  Then('Admin should see the alert box closed', async function() {
   expect (this.addNewPage.isDeletrPopupCLosed()).toBeTruthy();
  });
  
  When('Admin clicks on the delete icon under the Manage batch header', async function() {
    await this.addNewPage.closeOverlay();
    await this.addNewPage.clickCheckBox();
    await this.addNewPage.clickDeleteIconInManageBatch();
    await this.addNewPage.clickYesOnDeletePopup();
   
  });
  
  Then('The respective row in the table should be deleted', async function() {

    expect (this.addNewPage.getDeleteSuccessMesaage()).toBeTruthy();
  });

//   --------------------------------------------Pagination and Search-----------------------------------------

When('Admin clicks next page link on the data table', async function() {
  await this.addNewPage.closeOverlay();
  await this.addNewPage.clickNextPage();
});

Then('Admin should see the Next enabled link', async function() {
  const isEnabled = await this.addNewPage.isNextPageEnabled();
 expect (isEnabled).toBeTruthy();
});

When('Admin clicks last page link on the data table', async function() {
  await this.addNewPage.closeOverlay();
  await this.addNewPage.clickLastPage();
});

Then('Admin should see the last page link with next page link disabled on the table', async function() {
  expect (this.addNewPage.verifyNextPageDisabled()).toBeTruthy();
});

When('Admin clicks previous page link on the data table', async function() {
 await this.addNewPage.closeOverlay();
 await this.addNewPage.clickPreviousPage();
});

Then('Admin should see the previous page on the table', async function() {
 expect (this.addNewPage.isPreviousPageDisplayed()).toBeTruthy();
});

When('Admin clicks first page link on the data table', async function() {
  await this.addNewPage.closeOverlay();
  await this.addNewPage.clickFirstPage();
});

Then('Admin should see the very first page on the data table', async function() {
  expect (this.addNewPage.isFirstPageDisplayed()).toBeTruthy();
});

When('Admin enters the batch name in the search text box', async function() {
  await this.addNewPage.closeOverlay();
  await this.addNewPage.EnterBatchNameInSearch();
});

Then('Admin should see the filtered batches in the data table', async function() {
 expect (this.addNewPage.isFileteredBatchDisplayed()).toBeTruthy();
});

When('Admin clicks on the logout button', async function() {
  await this.addNewPage.closeOverlay();
 await this.addNewPage.clickLogout();
});

Then('Admin should see the Login screen Page', async function() {
 expect (this.addNewPage.isLoginPageDisplayed()).toBeTruthy();
 console.log(await this.page.url());
});