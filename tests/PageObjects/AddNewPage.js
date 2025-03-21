import { expect } from "@playwright/test";
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
        this.selectProgramName = page.locator("//li[@aria-label='createdatalist']");
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
        await this.selectProgramName.click();   
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
    async EnterMandatoryFeilds(){
        await this.batchNameSuffix.fill("2024");
        await this.batchDescription.fill("The Batch list is created")
        await this.statusActive.click();
        await this.NumberOfClasses.fill("2");
        await this.saveButton.click();
    }
    async getSuccessmessage(){
        const successMsg1 = await this.successMsg
        const successMsg2 = await this.createdMsg
        let sucessMsgCreation = successMsg1 + " " + successMsg2
        console.log("success message is",sucessMsgCreation )
        return sucessMsgCreation;
    }
    async verifyWithEmptyMandatoryFeild(){
        await this.batchNameSuffix.fill("2008");
        await this.batchDescription.fill(" ")
        await this.statusActive.click();
        await this.NumberOfClasses.fill("2");
        await this.saveButton.click();
    }
    async verifyErrorMsgWithEmptyMandatoryFeild(){
        return await this.emptyBacthDescription;
    }
    async clickCancelButton(){
        await this.batchNameSuffix.fill("2024");
        await this.batchDescription.fill("The Batch list is created")
        await this.statusActive.click();
        await this.NumberOfClasses.fill("2");
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
    async EnterMandatoryFeildsforEdit(){
        await this.batchDescription.fill("The Batch is created for testing")
        await this.statusActive.click();
        await this.NumberOfClasses.fill("4");
        await this.saveButton.click();
    }
    async getEditSuccessmessage(){
        const successMsg1 = await this.successMsg
        const successMsg2 = await this.editSucessMsg
        let sucessMsgCreation = successMsg1 + " " + successMsg2
        console.log("success message is",sucessMsgCreation )
        return sucessMsgCreation;
    }
    async clickCancelButtonForEdit(){
        await this.batchDescription.fill("The Batch list is created")
        await this.statusActive.click();
        await this.NumberOfClasses.fill("2");
        await this.cancelButton.click();
    }
    
    

}