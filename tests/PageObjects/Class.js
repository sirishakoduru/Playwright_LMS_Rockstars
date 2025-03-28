import { expect } from "@playwright/test";
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');
require('dotenv').config();
const filepath = process.env.FilePath;

export class ClassPage{
    page;

    constructor(page){

        this.page = page;
        this.userInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginbutton =page.locator("xpath=//span[text()='Login']");
        this.classBtn = page.locator("//span[normalize-space()='Class']");
        this.ManageClassHeader = page.getByText(' Manage Class')
        this.SearchBar = page.locator("//input[@id='filterGlobal']")
        this.DataTableHeaders = page.locator("xpath=//html/body/app-root/app-session/div/mat-card/mat-card-content/p-table/div/div[1]/table/thead");
       this.TextPagination =  page.locator("//div[@class='p-d-flex p-ai-center p-jc-between ng-star-inserted']")
       this.deleteButton = page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']//span[@class='p-button-icon pi pi-trash']")
        this.allRows = page.locator("xpath = //table/tbody/tr")
        this.sortIcon = page.locator("//div//table//thead//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']")
        this.totalNoClasses = page.locator("xpath=/html/body/app-root/app-session/div/mat-card/mat-card-content/p-table/div/div[2]/div");
        this.addNewClassBtn = page.locator("//button[@role='menuitem']");
        this.classDetailsPopup = page.locator("//div[@role='dialog']"); // Modify according to the actual class popup selector
        this.saveButton = page.locator("//span[normalize-space()='Save']");
        this.cancelButton = page.locator("/html/body/app-root/app-session/p-dialog/div/div/div[3]/button[1]");
        this.closeIcon = page.locator("//button//span[@class='p-dialog-header-close-icon ng-tns-c168-7 pi pi-times']"); 
        this.editCancelButton = page.locator("//span[normalize-space()='Cancel']");
        this.closeIcon = page.locator("//div//span[@class='p-dialog-header-close-icon ng-tns-c168-7 pi pi-times']"); 
        this.ClassTopic = page.locator("/html/body/app-root/app-session/p-dialog/div/div/div[2]/div[2]/label")
        //this.batchNameInput = page.locator('#batchName');
       
        //  this.batchNameInput = page.getByRole('textbox', { name: 'Select a Batch Name' })
        // this.batchNameInput = 
        // this.batchNameField = page.locator('input[placeholder="Select a Batch Name"]');
         this.batchDropDown = page.locator("//p-dropdown[@id='batchName']//div[contains(@class,'p-dropdown-trigger')]")
         this.batchNameInput = page.locator("//li[@role='option']")
         this.batchName = page.locator("//input[@placeholder='Select a Batch Name']");
    
        //  this.dropdownList = page.getByText('SMPO10');

       //this.classTopicInput = page.locator('input[name="classTopic"]');
        this.batchDropDown = page.locator("//p-dropdown[@id='batchName']//div[contains(@class,'p-dropdown-trigger')]")
         this.batchNameInput = page.locator("//body//app-root//p-dropdownitem")
         this.disabledBatchname = page.locator("//p-dropdown[@id='batchName']")
        this.classTopicInput = page.locator('#classTopic');
       this.classDescriptionTextarea = page.locator('#classDescription');
       this.datePicker = page.locator("//p-calendar//input");
      //  this.noOfClasses = page.locator("xpath=//html/body/app-root/app-session/p-dialog/div/div/div[2]/div[5]/input");
       this.noOfClasses = page.locator("//input[@id='classNo']")
       this.staffnameDropdown = page.locator("//p-dropdown[@id='staffId']//div[contains(@class,'p-dropdown-trigger')]")
       this.staffNameOption = page.locator("//ul[@role='listbox']//li[@role='option']");
       this.staffNameInput = page.locator("//input[@placeholder='Select a Staff Name']");
      //  this.staffNameSelect = page.locator('#staffId').getByRole('button', { name: '' });
      //  this.staffname =   page.getByRole('option', { name: 'Getha Takur' });
      //  this.statusSelect = page.getByText('Status');
      //  this.radioButtonStatus = page.locator('.p-radiobutton-box');
      // this.EditStaffNameDropDown = page.locator("//input[@placeholder='Select a Staff Name']")
      this.statusActive = page.locator("//div[contains(text(),'Active')]//div[2]");
      this.statusInactive = page.locator("//div[contains(text(),'Inactive')]//div[2]");
       this.notesTextarea = page.locator("//*[@id='classNotes']");
       this.recordingCheckbox = page.locator('#classRecordingPath');
      //  this.successMessage = page.locator('text=Class added Successfully');
       // Define locator for error messages
       this.errorMessages = page.locator('.error-message');
       this.emptyBatchNameErrorMsg = page.getByText('Batch Name is required.')
       this.emptyClassTopicErrorMsg = page.getByText('Class Topic is required.')
       this.emptyDateErrorMsg = page.getByText('Class Date is required.')
       this.emptyNoOfClassesErrorMsg = page.getByText('No. of Classes is required.')
       this.empyStaffNameErrorMsg = page.getByText('Staff Name is required.')
       this.emptyStatusErrorMsg = page.getByText('Status is required.')
       this.errorMessages = page.locator('.p-invalid ng-star-inserted');
       this.successMsg = page.getByText("Successful");
        this.createdMsg = page.getByText("Class Created");
       this.editIconButton = page.locator("(//tbody/tr[1]/td[8]/div[1]/span[1]/button[1]")
       this.EditClassPopUp = page.locator("//div[@role='dialog']");


    }

    async gotoLoginUrl(){
        const url = process.env.LoginURL;
        await this.page.goto(url);
    }

    async login(){
        const username = process.env.user;
        const password = process.env.Password;
        await this.userInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginbutton.click();
    }

     async gotoHomeUrl() {
        const homeurl = process.env.HomeURL;

        await this.page.goto(homeurl);
    }

    async classButton() {
    
        await this.classBtn.click();


    }

    async LMS_Title() {

    const actualTitle = await this.page.getByText(' LMS - Learning Management System ')
    await expect(actualTitle).toBeVisible();

    }

    async ManageClass_Header() {
        

    await expect(this.ManageClassHeader).toBeVisible();

    }

    async Search_Bar(){

    await expect(this.SearchBar).toBeVisible();

    }

    async DataTable_Headers() {
    
        await this.DataTableHeaders.first().waitFor({ state: "visible" });
        const headers = await this.DataTableHeaders.all();
        // Initialize an array to store the header texts
        let headerTexts = [];
    
        for (const header of headers) {
            const text = await header.textContent();
            // If there's text, push it to the headerTexts array (trim to remove extra spaces)
            if (text) headerTexts.push(text.trim()); // Remove extra spaces
        }
    
        console.log("Actual Headers:", headerTexts);
        return headerTexts;

    }

   async Text_Pagination() {
     //await this.page(this.Text_Pagination).getByText();
     await expect( this.TextPagination).toBeVisible();
    
    //await expect( this.TextPagination).toBeEnabled();



   }

   async Sorticon_Elements() {

    //return await this.DataTableHeaders.all()
    const rowCount = await this.allRows.count();
    const sortIconCount = await this.sortIcon.count();
    return sortIconCount === rowCount;

   }

async Delete_Button() {

const Deletebutton = await expect(this.deleteButton).toBeVisible();
return Deletebutton;
//await this.page(this.DeleteButton).toBeEnabled();

}

async TotalPages_Text(){

     return await this.totalNoClasses.innerText();
   // await this.page(this.totalNoClasses).toBeVisible();
    
}

async addNew_ClassButton(){
  
    return await this.addNewClassBtn.click();
    await this.page.waitForSelector('.class-popup', { state: 'visible' })

 }

 async isPopupVisible() {
    return await this.classDetailsPopup;

  }

  async isFormEmpty() {
    const formFields = await this.classDetailsPopup.locator('input').allTextContents();
    return formFields.every(field => field.trim() === '');
  }

  async isSaveButtonVisible() {
    return await this.saveButton;
  }

  async isCancelButtonVisible() {
    return await this.cancelButton;
  }

  async isCloseIconVisible() {
    return await this.closeIcon;
  }

  async validateInputFields(expectedFields) {
    await expect(this.classDetailsPopup).toBeVisible();

    for (const field of expectedFields) {
        const inputField = this.page.locator('/html/body/app-root/app-session/p-dialog/div/div/div[2]/div[2]/label');
        await expect(inputField).toBeVisible();
    }

}
async clickBatchDropdown() {
  await this.batchDropDown.click();
  await this.batchNameInput.nth(2).click();
 // await this.dropdownList.click();
 // await this.dropdownList.locator(`text=${batchName}`).click(); 

}
async selectBatchName(){

  await this.batchNameInput.click();
 
 }
 async isBatchNameDisabled() {
  const isDisabled = await this.disabledBatchname.isDisabled();
  const isReadOnly = await this.disabledBatchname.evaluate(el => el.hasAttribute('readonly'));
  
  console.log(`Batch Name Field - isDisabled: ${isDisabled}, isReadOnly: ${isReadOnly}`);
  
  //expect(isDisabled || isReadOnly).toBeTruthy();
 // expect(isDisabled).toBeTruthy();
}

 async enterClassTopic(classTopic) {
   await this.classTopicInput.click();
   await this.classTopicInput.fill(classTopic);
 }

 async isClassTopicDisabled() {
  const isDisabled = await this.classTopicInput.isDisabled();
  expect(isDisabled).toBeTruthy();
}

 async enterClassDescription(classDescription) {
  await this.classDescriptionTextarea.click();
  await this.classDescriptionTextarea.fill(classDescription);
 }

 async isPopupVisible() {
  return await this.EditClassPopUp;
  //await expect(this.popup).toBeVisible();
}
async closeOverlay() {
  await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
}
async clickDatePicker(){
  await this.datePicker.click();
}
// async clickDatePicker(){
//   await this.datePicker.click();
// }


async selectClassDates() {
  await this.datePicker.click();

  const year = "2025";
  const month = "March";
  const date = "28";

  while (true) {
      const currentYear = await this.page.locator("//div//span[contains(@class, 'p-datepicker-year')]").textContent();
      const currentMonth = await this.page.locator("//div//span[contains(@class, 'p-datepicker-month')]").textContent();

      if (currentYear.trim() === year && currentMonth.trim() === month) {
          break;
      }

      await this.page.locator("//button[contains(@class, 'p-datepicker-next')]").click();
      await this.page.waitForTimeout(500);
  }

  const dateLocator = `//td[not(contains(@class, 'p-datepicker-other-month'))]//span[contains(@class, 'p-ripple') and normalize-space(text())='${date}']`;

 // Wait for element to be attached and visible before clicking
 await this.page.waitForSelector(dateLocator, { state: 'attached', timeout: 5000 });
 await this.page.waitForSelector(dateLocator, { state: 'visible', timeout: 5000 });
  
  // Ensure the element exists before clicking
  const dateElement = this.page.locator(dateLocator);
  if (!(await dateElement.count())) {
      throw new Error(`Date ${date} not found in the date picker`);
  }

  await dateElement.click();
}

async getNoOfClassesValue() {
  return await this.noOfClasses.inputValue();  // Get value from the number of classes input field
}

async clickStaffNameDropdown(){
  await this.staffnameDropdown.click();
}
async selectStaffName(){
  await this.staffNameOption.nth(1).click();
}
 async selectStatus() {
  await this.statusActive.click();
  // await this.radioButtonStatus.first().click();
 }
 async getSuccessmessage(){
  const successMsg1 = await this.successMsg;
  const successMsg2 = await this.createdMsg;
  let sucessMsgCreation = successMsg1 + " " + successMsg2;
  return sucessMsgCreation;
}
async getNoOfClasses(){
  return await this.noOfClasses.inputValue();
}
async VerifyDisabledWeekends(){
  const today = new Date();
  const currentMonth = today.getMonth(); // Get current month (0-based index)
  const currentYear = today.getFullYear(); // Get current year

  // Get all Saturdays and Sundays of the current month
  let weekendDates = [];
  let date = new Date(currentYear, currentMonth, 1);

  while (date.getMonth() === currentMonth) {
      if (date.getDay() === 6 || date.getDay() === 0) { // 6 = Saturday, 0 = Sunday
          weekendDates.push(date.getDate());
      }
      date.setDate(date.getDate() + 1);
  }

  console.log(`Weekend Dates for ${today.toLocaleString('default', { month: 'long' })} ${currentYear}:`, weekendDates);

  // Find all disabled dates in the current month
  const disabledDatesElements = await this.page.locator("//td[not(contains(@class, 'p-datepicker-other-month'))]//span[contains(@class, 'p-disabled')]").all();

  let totalDisabled = 0;

  for (const element of disabledDatesElements) {
      const dateText = await element.textContent();
      if (weekendDates.includes(parseInt(dateText))) {
          totalDisabled++;
      }
  }

  return totalDisabled === weekendDates.length; // Return true if all weekends are disabled
}


 async enterNotes(notes) {
  await this.notesTextarea.click();
 await this.notesTextarea.fill(notes);

 }

async toggleRecording(enable) {
 const isChecked = await this.recordingCheckbox.isChecked();
 if (isChecked !== enable) {
await this.recordingCheckbox.click();
  }
 }


 async selectInvalidBatchName() {
  await this.closeOverlay();
  await this.batchDropDown.click();
  const invalidBatchOption = this.page.locator("//li[contains(text(),'Invalid Staff')]");

  if (await invalidBatchOption.count() > 0) {
      await invalidBatchOption.click();
  } else {
      console.warn("⚠️ Invalid batch name not found, leaving empty.");
      await this.page.keyboard.press('Escape'); // Close dropdown without selection
  }
}
async enterInvalidDetails() {

  await this.selectInvalidBatchName();
  await this.classTopicInput.fill('@!#$%'); // Invalid topic
  await this.classDescriptionTextarea.fill('000'); // Empty description (invalid)
  await this.noOfClasses.click();
  await this.noOfClasses.fill('kkkk'); // Invalid number

  await this.staffnameDropdown.click();
  const invalidStaffOption = this.page.locator("//li[contains(text(),'Invalid Status')]");
  if (await invalidStaffOption.count() > 0) {
      await invalidStaffOption.click();
  } else {
      console.warn("⚠️ Invalid staff not found, leaving empty.");
      await this.page.keyboard.press('Escape');
  }

  await this.statusDropdown.click();
  const invalidStatusOption = this.page.locator("//small[normalize-space()='Status is required.']");
  if (await invalidStatusOption.count() > 0) {
      await invalidStatusOption.click();
  } else {
      console.warn("⚠️ Invalid status not found, leaving empty.");
      await this.page.keyboard.press('Escape'); 
  }
}

async areWeekendDatesDisabled() {

  const weekendDates = await this.page.locator('td.p-datepicker-weekend.p-datepicker-disabled span.p-datepicker-day').all();

  // Check if there are any weekend dates that are disabled
  let disabledWeekendDates = weekendDates.length;

  // Return true if disabled weekend dates are present
  return disabledWeekendDates > 0; // At least one disabled weekend date should be found
}


async clickSaveButton() {
 await this.saveButton.click();
 }

 async clickCancelButton() {
 await this.cancelButton.click();
  }

  async EditcancelButton() {
    await this.editCancelButton.click();
     }

async clickCloseIcon() {
 await this.closeIcon.click();
 }

 async isClassPopupClosed() {
  return await this.classDetailsPopup.isHidden(); // Returns true if popup is closed
}

async getSuccessMessage() {
return this.successMsg.textContent();
}
async enterMandatoryFeilds(DataInput,sheetName){
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        console.log(testData)
        const classTopicInput = testData['classTopic'];
        const classDescription = testData['classDescription'];
        await this.clickBatchDropdown();
        await this.classTopicInput.click();
        await this.classTopicInput.fill(classTopicInput);
        await this.classDescriptionTextarea.fill(classDescription);
        await this.selectClassDates();
        await this.closeOverlay();
        await this.clickStaffNameDropdown();
        await this.page.waitForTimeout(3000);
        await this.selectStaffName();
        await this.page.waitForTimeout(3000);
        await this.selectStatus();
        await this.clickSaveButton();
  
}

async getErrorMessages() {
 return this.errorMessages.allTextContents();
 }
 async getEmptyClassFeildsError(){
  let message = "";
  if(await this.emptyBatchNameErrorMsg.isVisible()){
    message = await this.emptyBatchNameErrorMsg.textContent();
  } else if(await this.emptyClassTopicErrorMsg.isVisible()){
    message = await this.emptyClassTopicErrorMsg.textContent();
  } else if(await this.emptyDateErrorMsg.isVisible()){
    message = await this.emptyDateErrorMsg.textContent()
  } else if(await this.emptyNoOfClassesErrorMsg.isVisible()){
    message = await this.emptyNoOfClassesErrorMsg.textContent();
  } else if(await this.emptyStatusErrorMsg.isVisible()){
    message = await this.emptyStatusErrorMsg.textContent();
  } else if(await this.empyStaffNameErrorMsg.isVisible()){
    message = await this.empyStaffNameErrorMsg.text();
  }
  console.log("Error message appeared is:", message);
  return message;
  
 }
 async emptyMessageHighlighterColor(){
  const backgroundColor = await this.noOfClasses.evaluate(el => getComputedStyle(el).backgroundColor);

  if (backgroundColor === "rgb(255, 0, 0)" || backgroundColor === "rgba(255, 0, 0, 1)") {
      console.log("The field is highlighted in red.");
  } else {
      console.log("The field is NOT highlighted in red. Current color:", backgroundColor);
  }

  return backgroundColor;
 }
 async enterInvalidData(){
  await this.batchName.fill('str@#$');
  await this.classTopicInput.fill('shdb36#$');
  await this.classDescriptionTextarea.fill('23543');
  await this.clickDatePicker();
  await this.selectClassDates();
  await this.staffNameInput.fill('dg@#$');
  await this.selectStatus();
 }
 async emptyFeildsSubmission(){
  const errorMesages = this.page.locator("//small[contains(@class, 'p-invalid ng-star-inserted')]");
  const errorCount = await errorMesages.count();
  if (errorCount > 0) {
    console.log("Error messages are displayed:");
    for (let i = 0; i < errorCount; i++) {
      const errorMsg = await errorMesages.nth(i).textContent();
      console.log(errorMsg);
    }
    return true; 
  } else {
    console.log("No error messages displayed. Test failed.");
    return false;  
  }
 }

async editIcon(){

await this.editIconButton.first().click();


}

async editClassPopUp() {

  return this.EditClassPopUp.allTextContents()


}
async editClassClosePopUp() {
  return this.EditClassPopUp;

}

async updateFields(valid = true) {
    if (valid) {
     // await this.classTopicInput.fill('new india'); // Invalid topic
      await this.classDescriptionTextarea.fill('PlaywrightGroup'); // Empty description (invalid)
     
    } else {
     
      await this.classDescriptionTextarea.fill('12345'); // Empty description (invalid)
     
  
    }
  }
  async selectStatus(status = 'Active') {
    if (status === 'Active') {
      // Check if Active radio button is already selected, if not, click it
      const isActiveSelected = await this.statusActive.evaluate((el) => el.checked);
      if (!isActiveSelected) {
        await this.statusActive.click(); // Click only if not already selected
      }
    } else if (status === 'Inactive') {
      // Check if Inactive radio button is already selected, if not, click it
      const isInactiveSelected = await this.statusInactive.evaluate((el) => el.checked);
      if (!isInactiveSelected) {
        await this.statusInactive.click(); // Click only if not already selected
      }
    } else {
      throw new Error('Invalid status selected'); // Error if the status is invalid
    }
  }
  async updateMandatoryFields(valid = true) {
    
    await this.selectStatus('Active'); // Set to Active for valid case

    if (valid) {
      
      await this.notesTextarea.fill('Regular classes'); // Example optional valid input
    } else {
    
      await this.notesTextarea.fill('@!@#'); // Invalid optional notes
    }

  
  }
  async enterInvalidDataInDescription() {
    await this.classDescriptionTextarea.fill('!@#$%&*');
  }

}
