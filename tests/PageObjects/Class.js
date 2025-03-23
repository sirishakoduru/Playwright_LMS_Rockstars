import { expect } from "@playwright/test";
require('dotenv').config();

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
        this.closeIcon = page.locator("//button[@class='ng-tns-c168-13 p-dialog-header-icon p-dialog-header-close p-link p-ripple ng-star-inserted']"); 
        this.ClassTopic = page.locator("/html/body/app-root/app-session/p-dialog/div/div/div[2]/div[2]/label")
        //this.batchNameInput = page.locator('#batchName');
       
        //  this.batchNameInput = page.getByRole('textbox', { name: 'Select a Batch Name' })
        // this.batchNameInput = 
        // this.batchNameField = page.locator('input[placeholder="Select a Batch Name"]');
         this.batchDropDown = page.locator('#batchName').getByRole('button', { name: '' })
         this.batchNameInput = page.locator("//li[@role='option']")
    
        //  this.dropdownList = page.getByText('SMPO10');

       //this.classTopicInput = page.locator('input[name="classTopic"]');
       this.classTopicInput = page.locator('#classTopic');
       this.classDescriptionTextarea = page.locator('#classDescription');
      // this.selectClassDatesInput = page.locator('#icon')
      // this.Datesicon = page.locator('p-calendar').getByRole('button')
      //this.selectClassDatesInput = page.locator("xpath=//span[@class='ng-tns-c178-31 p-ripple ng-star-inserted'][normalize-space()='24']");
      this.datePicker = page.locator("//p-calendar//input");
      // this.noOfClassesInput = page.locator('#classNo');
       //this.noOfClassesInput = page.getByText('No of Classes')
       this.noOfClasses = page.locator("xpath=//html/body/app-root/app-session/p-dialog/div/div/div[2]/div[5]/input");
       this.staffnameDropdown = page.locator("//p-dropdown[@id='staffId']//div[contains(@class,'p-dropdown-trigger')]")
       this.staffNameOption = page.locator("//ul[@role='listbox']//li[@role='option']");
      //  this.staffNameSelect = page.locator('#staffId').getByRole('button', { name: '' });
      //  this.staffname =   page.getByRole('option', { name: 'Getha Takur' });
      //  this.statusSelect = page.getByText('Status');
      //  this.radioButtonStatus = page.locator('.p-radiobutton-box');
      this.statusActive = page.locator("//div[contains(text(),'Active')]//div[2]");
       this.notesTextarea = page.locator('#classNotes');
       this.recordingCheckbox = page.locator('#classRecordingPath');
      //  this.successMessage = page.locator('text=Class added Successfully');
       // Define locator for error messages
       this.errorMessages = page.locator('.error-message');
       this.successMsg = page.getByText("Successful");
        this.createdMsg = page.getByText("Class Created");
       
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
async enterBatchName() {
  await this.batchDropDown.click();
  await this.batchNameInput.nth(1).click();
 // await this.dropdownList.click();
 // await this.dropdownList.locator(`text=${batchName}`).click(); 
}

 async enterClassTopic(classTopic) {
   await this.classTopicInput.click();
   await this.classTopicInput.fill(classTopic);
 }

 async enterClassDescription(classDescription) {
  await this.classDescriptionTextarea.click();
  await this.classDescriptionTextarea.fill(classDescription);
 }


//  async selectClassDates() {
//   //await this.selectClassDatesInput.click();
  

//   await this.datePicker.click();
  
//   const year = "2025";
//   const month = "March";
//   const date = "26";
  
//   while(true){

//  const currentYear = await this.page.locator("//div//span[@class='p-datepicker-year ng-tns-c178-13 ng-star-inserted']").textContent()
//  const currentMonth = await this.page.locator("//div//span[@class='p-datepicker-month ng-tns-c178-13 ng-star-inserted']").textContent()

//  if (currentYear == year && currentMonth == month){
    
//      break;


//  }

//  const dates = this.page.$$("//td//span[@class='ng-tns-c178-13 p-ripple ng-star-inserted']")

//  for(const dt of dates){

// if (await dt.textContent == date){

// await dt.click()
// break;

// }

//  }
 



//  await this.page.WaitForTimeout(5000);

//   }

//   }
async closeOverlay() {
  await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
}
// async clickDatePicker(){
//   await this.datePicker.click();
// }
async selectClassDates() {
  await this.datePicker.click();

  const year = "2025";
  const month = "March";
  const date = "26";

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

//  async enterNumberOfClasses(numberOfClasses) {
//   await this.numberOfClassesInput.click();
//   await this.numberOfClassesInput.fill("2");
//  //await this.noOfClassesInput.fill(numberOfClasses.toString());
//  return await this.numberOfClassesInput.inputValue();
//  }

//  async selectStaffName(staffName) {

//  await this.staffNameSelect.selectOption({ label: staffName });
//  await this.staffNameSelect.fill(staffName).click();
//  }

async clickStaffNameDropdown(){
  await this.staffnameDropdown.click();
}
async selectStaffName(){
  await this.staffNameOption.nth(2).click();
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

async clickSaveButton() {
 await this.saveButton.click();
 }

 async clickCancelButton() {
 await this.cancelButton.click();
  }

async clickCloseIcon() {
 await this.closeIcon.click();
 }

async getSuccessMessage() {
return this.successMessage.textContent();
}

async getErrorMessages() {
 return this.errorMessages.allTextContents();
 }
}
