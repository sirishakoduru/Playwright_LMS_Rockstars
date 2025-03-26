import { expect } from "@playwright/test";
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');
require('dotenv').config();
const filepath = process.env.FilePath;
export class addNewBatchPage{
    page
    constructor(page){
        this.page = page;
        this.addNewBatchButton = page.getByText('Add New Batch');
        this.batchBtnClick = page.locator("//div//button[2][@class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base']")
        this.batchPopup = page.getByText('Batch Details')
        this.programDropdown = page.locator("//div[@class='p-dropdown-trigger ng-tns-c171-9']")
        this.batchName = page.locator('#batchProg')
        this.batchDescription = page.locator('#batchDescription');
        this.statusActive = page.locator("//*[text()=' ACTIVE ']");
        this.statusInactive = page.getByText(' INACTIVE ');
        this.NumberOfClasses = page.locator('#batchNoOfClasses');
        this.selectProgramName = page.locator("//ul[@role='listbox']//li[@role='option']");
        this.batchNameSuffix = page.locator("//input[@id='batchName' and (not(@hidden) or @hidden='false')]");
        this.BatchSuffixerrorMessage = page.locator("//small[@id='text-danger']");
        this.saveButton = page.locator("//button[@class='p-button-rounded p-button-success p-button p-component ng-star-inserted']");
        this.successMsg = page.getByText("Successful");
        this.createdMsg = page.getByText("Batch Created Successfully");
        this.emptyBacthDescription = page.getByText("Batch Description is required.");
        this.cancelButton = page.locator("//button[@label='Cancel']");
        this.closeButton = page.locator("//button[@class='ng-tns-c168-6 p-dialog-header-icon p-dialog-header-close p-link p-ripple ng-star-inserted']")
        this.editButton = page.locator("//tbody/tr[3]/td[7]/div/span[1]/button");
        this.programName = page.locator("//input[@class='p-dropdown-label p-inputtext ng-tns-c171-9 ng-star-inserted']")
        this.editDescription = page.locator("//input[@id='batchDescription']")
        this.editSucessMsg = page.getByText("batch Updated")
        this.deleteButton = page.locator("//tbody/tr[2]/td[7]/div/span[2]/button");
        this.deletePopup = page.locator("//div[@class='ng-trigger ng-trigger-animation ng-tns-c204-8 p-dialog p-confirm-dialog p-component ng-star-inserted']")
        this.confirmYesButton = page.locator("//button[@class='ng-tns-c204-8 p-confirm-dialog-accept p-ripple p-button p-component ng-star-inserted']")
        this.confirmNoButton = page.locator("//button[@class='ng-tns-c204-8 p-confirm-dialog-reject p-ripple p-button p-component ng-star-inserted']")
        this.deleteSuccessMsg = page.getByText("batch Deleted")
        this.deletePopupCloseButton = page.locator("//button[@class='ng-tns-c204-8 p-dialog-header-icon p-dialog-header-close p-link ng-star-inserted']")
        this.deleteIcon = page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']");
        this.selectCheckBox = page.locator("//tr[1]/td[1]");
        this.nextPage = page.locator("//button//span[@class='p-paginator-icon pi pi-angle-right']")
        this.lastPage = page.locator("//button[@class='p-paginator-last p-paginator-element p-link p-ripple ng-star-inserted']")
        this.previousPage = page.locator("//button//span[@class='p-paginator-icon pi pi-angle-left']")
        this.FristPage = page.locator("//button[@class='p-paginator-page p-paginator-element p-link p-highlight p-ripple ng-star-inserted' and contains(text(), '1')]")
        this.disabledNextPage = page.locator("//button//span[@class='p-paginator-icon pi pi-angle-right']");
        this.search = page.locator('#filterGlobal');
        this.FilteredBatch = page.locator("//tbody[@class='p-datatable-tbody']")
        this.logout = page.locator('#logout');

    }
    async verifyaddNewPageBtn(){
        return (this.addNewBatchButton);
    }
    async closeOverlay() {
        await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
    }
    async ClickBatchButton(){
        await this.batchBtnClick.click();
    }
    async clickAddNewBatch(){
        await this.addNewBatchButton.click();
    }
    async verifyBatchPopup(){
        return this.batchPopup;
    }
    async verifyBatchDetailsFieldsEnabled(){
        if(await this.programDropdown.isEnabled() &&
           await this.batchName.isEnabled() &&
           await this.batchDescription.isEnabled() &&
           await this.statusActive.isEnabled() &&
           await this.statusInactive.isEnabled() &&
           await this.NumberOfClasses.isEnabled() )
           {
           console.log("All fields are enabled")}
           else {
            console.log("Somme fields are disabled")    
           }
    }
    async verifyInputFieldsInBatch(){
        const batchNameLocator = this.page.locator("//input[@id='batchProg']")
        await batchNameLocator.getAttribute('type','text')
        const batchDescriptionLocator = this.page.locator("//input[@id='batchDescription']")
        await batchDescriptionLocator.getAttribute('type','text')
        const NoOfClassesLocator = this.page.locator("//input[@id='batchNoOfClasses']")
        await NoOfClassesLocator.getAttribute('type','number')
    }
    async verifyprogramNameAsDropdown(){
        const dropdown = this.page.locator("//p-dropdown[@id='programName']");
        // expect(dropdown).toBe(true);
    }
    async verifyRadioButton(){
        const activeRadioButton = this.page.locator("#ACTIVE");
        await activeRadioButton.getAttribute('type','radio')
        const inactiveRadioButton = this.page.locator("#INACTIVE");
        await inactiveRadioButton.getAttribute('type','radio')
    }
    async clickProgramNameDropdown(){
        await this.programDropdown.click();
    }
    async selectProgramNameFromDropdown(){
        await this.selectProgramName.nth(1).click();   
    }
    async verifySelectedProgramNameInBatchPrefix(){
        const batchPrefix = await this.batchName.inputValue();
        return this.batchPrefix;
    }
    async EnterApphbetsinBatchSuffix(){
        await this.batchNameSuffix.fill('ABDCD');
    }
    async varifyBatchSuffixErrorMsg(){
        return await this.BatchSuffixerrorMessage.textContent();
    }
    async enterAlpharetInBatchPrefix() {
    const isDisabled = await this.batchName.isDisabled();
    const isEditable = await this.batchName.isEditable();
    
    console.log("Is Batch Prefix Disabled?", isDisabled);
    console.log("Is Batch Prefix Editable?", isEditable);

    if (!isDisabled && isEditable) {
        await this.batchName.fill('XYZ');
    } else {
        console.log("Cannot fill the field because it is disabled or not editable!");
    }
    }
    async verifyEmptyBatchPrefix(){
        return await this.batchName.inputValue();
    }
    async clickStatusActive(){
        await this.statusActive.click();
    }
    async EnterMandatoryFields(DataInput,sheetName){
        // await this.batchNameSuffix.fill("2024");
        // await this.batchDescription.fill("The Batch list is created")
        // await this.statusActive.click();
        // await this.NumberOfClasses.fill("2");
        // await this.saveButton.click();
        // const filepath = 'tests/TestData/LMS_Data.xlsx';
        // const sheetName = 'Batch';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const batchNameSuffix = testData['batchNameSuffix'].toString();
        const batchDescription = testData['batchDescription'];
        const NoOfClasses = testData.NumberOfClasses.toString();
        await this.batchNameSuffix.fill(batchNameSuffix);
        await this.batchDescription.fill(batchDescription);
        await this.NumberOfClasses.fill(NoOfClasses);
        await this.saveButton.click();
    }
    async validateTextbox(DataInput,sheetname){
        const filepath = process.env.FilePath
        const testData = getDataByDataInput(filepath,sheetname,DataInput);
        const programName=testData["ProgramName"]
        //const programDescription=testData["Description"]
        
        await this.programName.fill(programName)
        //await this.programDescription.fill(programDescription)

        // const expectedErrorMessage = testData['ErrorMessage']
        // await expect (this.errorMessage).toContainText(expectedErrorMessage);

    }
    async getSuccessmessage(){
        const successMsg1 = await this.successMsg;
        const successMsg2 = await this.createdMsg;
        let sucessMsgCreation = successMsg1 + " " + successMsg2;
        return sucessMsgCreation;
    }
    async verifyWithEmptyMandatoryFeild(DataInput){
        // await this.batchNameSuffix.fill("2008");
        // await this.batchDescription.fill(" ");
        // await this.statusActive.click();
        // await this.NumberOfClasses.fill("2");
        // await this.saveButton.click();
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Batch';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const batchNameSuffix = testData['batchNameSuffix'].toString();
        const batchDescription = testData['batchDescription'];
        const NoOfClasses = testData.NumberOfClasses.toString();
        await this.batchNameSuffix.fill(batchNameSuffix);
        await this.batchDescription.fill(batchDescription);
        await this.statusActive.click();
        await this.NumberOfClasses.fill(NoOfClasses);
        await this.saveButton.click();
    }
    async verifyErrorMsgWithEmptyMandatoryFeild(){
        return await this.emptyBacthDescription;
    }
    async clickCancelButton(DataInput){
        // await this.batchNameSuffix.fill("2024");
        // await this.batchDescription.fill("The Batch list is created")
        // await this.statusActive.click();
        // await this.NumberOfClasses.fill("2");
        // await this.cancelButton.click();
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Batch';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const batchNameSuffix = testData['batchNameSuffix'].toString();
        const batchDescription = testData['batchDescription'];
        const NoOfClasses = testData.NumberOfClasses.toString();
        await this.batchNameSuffix.fill(batchNameSuffix);
        await this.batchDescription.fill(batchDescription);
        await this.statusActive.click();
        await this.NumberOfClasses.fill(NoOfClasses);
        await this.cancelButton.click();
    }
    async IsBatchPopupClosed(){
        const isBtachPopupClosed = this.cancelButton
        if(!isBtachPopupClosed) {
            console.log("Add new batch popup closed successfully")
        }else {
            console.log("add new class popup is still open")
        }
    }
    async clickCloseButton(){
        await this.closeButton.click();
    }
    async clickEditButton(){
        await this.editButton.click();
    }
    async isProgramNameDisabled(){
        const isProgramNameDisabled = this.programName
        if(!isProgramNameDisabled){
            console.log("Program name feild is diabled")
            } else {
                console.log("program name feild is enabled")
            }
    }
    async isBatchNameDisabled(){
        const isBatchNameDisabled = this.batchNameSuffix
        if(!isBatchNameDisabled){
            console.log("Batch name feild is diabled")
            } else {
                console.log("Batch name feild is enabled")
            }
    }
    async verifydescriptionWithInvalidData(){
        await this.editDescription.fill("34");
        await this.saveButton.click();
    }
    async EnterMandatoryFeildsforEdit(DataInput){
        // await this.batchDescription.fill("The Batch is created for testing")
        // await this.statusActive.click();
        // await this.NumberOfClasses.fill("4");
        // await this.saveButton.click();
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Batch';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const batchDescription = testData['batchDescription'];
        const NoOfClasses = testData.NumberOfClasses.toString();
        await this.batchDescription.fill(batchDescription);
        await this.statusActive.click();
        await this.NumberOfClasses.fill(NoOfClasses);
        await this.saveButton.click();
    }
    async getEditSuccessmessage(){
        const successMsg1 = await this.successMsg
        const successMsg2 = await this.editSucessMsg
        let sucessMsgCreation = successMsg1 + " " + successMsg2
        console.log("success message is",sucessMsgCreation )
        return sucessMsgCreation;
    }
    async clickCancelButtonForEdit(DataInput){
        // await this.batchDescription.fill("The Batch list is created")
        // await this.statusActive.click();
        // await this.NumberOfClasses.fill("2");
        // await this.cancelButton.click();
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Batch';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const batchDescription = testData['batchDescription'];
        const NoOfClasses = testData.NumberOfClasses.toString();
        await this.batchDescription.fill(batchDescription);
        await this.statusActive.click();
        await this.NumberOfClasses.fill(NoOfClasses);
        await this.cancelButton.click();
    }
    async clickDeleteButton(){
        await this.deleteButton.click();
    }
    async isDeletePopupwithYesNoAppear(){
        await this.deletePopup;
        await this.confirmYesButton;
        await this.confirmNoButton;
    }
    async OnBatchDeletePopup (){
        return await this.deletePopup
    }
    async clickYesOnDeletePopup(){
        await this.confirmYesButton.click();
    }
    async getDeleteSuccessMesaage(){
        const successMsg1 = await this.successMsg
        const successMsg2 = await this.deleteSuccessMsg
        let deleteMsgCreation = successMsg1 + " " + successMsg2
        console.log("success message is",deleteMsgCreation )
        return deleteMsgCreation;
    }
    async clickNoOnDeletePopup(){
        await this.confirmNoButton.click();
    }
    async isDeletePopupClosed(){
        const isDeletePopupClosed = this.confirmNoButton
        if(!isDeletePopupClosed) {
            console.log("Delete popup closed successfully")
        }else {
            console.log("Delete popup is still open")
        }
    }
    async clickDeletePopupCloseButton(){
    await this.deletePopupCloseButton.click();
    }
    async isDeletrPopupCLosed(){
        const isDeletePopupClosed = this.deletePopupCloseButton
        if(!isDeletePopupClosed) {
            console.log("Delete popup closed successfully")
        }else {
            console.log("Delete popup is still open")
        } 
    }
    async clickDeleteIconInManageBatch(){
        await this.deleteIcon.click();
    }
    async clickCheckBox(){
        await this.selectCheckBox.click();
    }
    async clickNextPage(){
        await this.nextPage.click();
    }
    async isNextPageEnabled(){
        return this.nextPage.isEnabled();
    }
    async verifyNextPageDisabled(){
        return this.disabledNextPage;
    }
    async clickLastPage(){
        await this.lastPage.click();
    }
    async clickPreviousPage(){
        await this.nextPage.click();
        await this.previousPage.click();
    }
    async isPreviousPageDisplayed(){
        await this.previousPage.isVisible();
    }
    async clickFirstPage(){
        await this.FristPage.click();
    }
    async isFirstPageDisplayed(){
        await this.FristPage.isVisible();
    }
    async EnterBatchNameInSearch(){
        await this.search.click();
        await this.search.fill("createdata1145");
    }
    async isFileteredBatchDisplayed(){
        await this.FilteredBatch.isVisible();
    }
    async clickLogout(){
        await this.logout.click();
    }
    async isLoginPageDisplayed(){
        return this.page.url();
        
    }


}