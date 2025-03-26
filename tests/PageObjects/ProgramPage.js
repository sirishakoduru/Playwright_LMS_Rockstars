const { page, expect } = require('@playwright/test')
require('dotenv').config();
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');
const filepath = process.env.FilePath

//exports.ProgramPage =
export class ProgramPage {

    constructor(page) {
        this.page = page
        this.programLink = page.getByRole('button', { name: 'Program' })
        this.manageProgramHeading = page.getByText('Manage Program')
        this.addNewProgramLink = page.getByRole('menuitem', { name: 'Add New Program' })
        this.closeAddNewProgram = page.getByRole('button', { name: '' })
        this.moduleNames = page.locator("span[class='mat-button-wrapper']")
        this.programDetails = page.locator('//thead//tr//th[@role="columnheader"]')
        this.disabledDelete = page.locator('//div[@class="box"]//button')
        this.searchBoxText = page.getByPlaceholder('Search...')
        this.tableHeader = page.locator('//thead//tr//th[position() > 1]')
        //this.mainCheckBox=page.locator('//thead//tr//th[position() < 2]')
        this.mainCheckBox = page.locator("//div[@class='p-checkbox-box']")
        this.allCheckBoxes = page.locator("//table//tbody/tr/td[1]//div[@role = 'checkbox']")
        this.sortIcons = page.locator("//th//p-sorticon")
        this.editIcons = page.locator("#editProgram")
        this.deleteIcons = page.locator("#deleteProgram")
        this.tableRows = page.locator("//tbody/tr")
        this.pageFooter = page.locator('//span[@class="p-paginator-current ng-star-inserted"]')

        this.programFooter = page.locator("//div[@class='p-d-flex p-ai-center p-jc-between ng-star-inserted']")
        this.overlayer = page.locator('.cdk-overlay-backdrop')
        this.programDetailsText = page.getByText('Program Details')
        this.asteriskName = page.getByText('Name*')


        //pagination
        this.paginationFooter = page.locator('//span[@class = "p-paginator-pages ng-star-inserted"]//button')
        this.nextLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-right"]')
        this.lastLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-double-right"]')
        //this.lastLink = page.locator('//p-paginator/div/button[4]')

        this.previousLink = page.locator('//span[@class ="p-paginator-icon pi pi-angle-left"]')
        this.doublePreviousLink = page.locator("//span[@class='p-paginator-icon pi pi-angle-double-left']")
        this.firstPage = page.locator("//button[normalize-space()='1']")
        // this.previousLink = page.locator("//p-paginator/div/button[1]")

        /////////////////sorting/////////////
        // this.programNameSort=page.getByRole('columnheader', { name: 'Program Name ' }).locator('i')
        // this.programDescSort=page.getByRole('columnheader', { name: 'Program Description ' })
        // this.programStatusSort=page.getByRole('columnheader', { name: 'Program Status ' })

        //this.programNameSort = page.locator("//p-sorticon[@field='programName']//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']")
        this.sortProgramName = page.locator("//th[contains(text(), 'Program Name ')]");
        this.sortProgramDesc = page.locator("//th[contains(text(), 'Program Description ')]")
        this.sortProgramStatus = page.locator("//th[contains(text(), 'Program Status ')]")

        ///table//////
        this.programName = page.locator('//tbody//td[2]')

        this.programDescription = page.locator('//th[3]')
        this.programStatus = page.locator('//th[4]')
        //this.programColumnData = page.locator('//tbody//td[2]')

        this.table = page.locator("//table")
        // this.columns=page.locator
        //this.rows=page.locator("tbody tr")

        //////search///////
        this.searchBox = page.getByPlaceholder('Search...')
        this.programNameData = page.locator("table tbody tr td:nth-child(2)")
        this.programDescData = page.locator("table tbody tr td:nth-child(3)")
        this.programStatusData = page.locator("table tbody tr td:nth-child(4)")
        this.tableValues = page.locator('//tr//td[2]')
        this.rowsLocator = page.locator('table tbody tr')

        ////////////////Add new program//////////
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.cancelButton = page.getByRole('button', { name: 'Cancel' })
        this.requiredText = page.getByLabel('Program Details')
        this.dialogBox = page.locator('//div[@role="dialog"]')
        this.statusRadioButton = page.locator('.p-radiobutton-box').first()
        //this.closeButton=page.locator("//span[@class='p-dialog-header-close-icon ng-tns-c168-102 pi pi-times']")
        this.closeButton = page.getByRole('button', { name: '' })
        this.programName = page.locator("#programName")
        this.programDescription = page.locator("#programDescription")
        this.successMsg = page.locator("//*[text()='Successful']")

        //for edit
        this.searchboxEdit=page.locator("#filterGlobal")
        this.editIconClick=page.locator("//tbody/tr[1]/td[5]/div[1]/span[1]/button[1]")
        
        // delete
        this.deleticon = page.locator('//tr[1]//button[@id = "deleteProgram"]')
        this.deleteConfirmation=page.locator("//div[@class='p-dialog-header ng-tns-c204-2 ng-star-inserted']")
        this.yesButton = page.getByText('Yes')
        this.noButton = page.getByText('No')

    }

    async clickYesButton(){
    await (this.yesButton).click()
    }
    async clickNoButton(){
    await (this.noButton).click()
        
    }
    async clickDeleteIcon(){
        await this.closeOverlay()
        await (this.deleticon).click()
    }
    async visibilityOfDeleteConfirmation(){
        expect(await this.deleteConfirmation).toBeVisible()
       }

    async searchDeletedProgramName() {
        console.log("Program name from env file : ", process.env.DeleteProgram)
        await this.searchBox.fill(process.env.DeleteProgram)

    }

    async searchProgramNameToDelete() {
        console.log("Program name from env file : ", process.env.DeleteProgram)
        await this.searchBox.fill(process.env.DeletedProgramName)

    }


    async clickRadioButton(){
        await (this.statusRadioButton).click()
    }
    async clickOnEditIcon(){
        await this.editIconClick.click()
    }
   
  
    async clickEditIcon() {
        await this.editIcons.click()
    }


    async editValidProgramDescription(DataInput, sheetname){
        await this.closeOverlay()
        const testData = getDataByDataInput(filepath, sheetname, DataInput)
        console.log(testData)
        const existingName = testData["SearchCreatedProgramName"]
        const toUpdateDescription = testData["ProgramDescription"]

        await this.searchboxEdit.click()
        await this.searchboxEdit.fill(existingName)
        //await this.clickEditIcon()
        await this.editIconClick.click()
        
        await this.programDescription.fill(toUpdateDescription)
        console.log(toUpdateDescription)
        
       // await this.page.waitForLoadState('load'); 

        //await this.page.waitForTimeout();
        // this.page.waitForTimeout(6000)
       await this.clickSaveButton()

    }
    async editValidProgramName(DataInput, sheetname){
        await this.closeOverlay()
        const testData = getDataByDataInput(filepath, sheetname, DataInput)
        console.log(testData)
        const existingName = testData["SearchCreatedProgramName"]
        const toUpdateName = testData["ProgramName"]

        await this.searchboxEdit.click()
        await this.searchboxEdit.fill(existingName)
        //await this.clickEditIcon()
        await this.editIconClick.click()
        
        await this.programName.fill(toUpdateName)
        
       // await this.page.waitForLoadState('load'); 

        //await this.page.waitForTimeout();
        // this.page.waitForTimeout(6000)
        await this.clickSaveButton()

    }

    async searchingToEditProgramName(DataInput, sheetname) {

        await this.closeOverlay()
        const testData = getDataByDataInput(filepath, sheetname, DataInput)
        //console.log(testData)
        const programName = testData["SearchCreatedProgramName"]

        await this.searchboxEdit.click()
        await this.searchboxEdit.fill(programName)
       
        await this.page.waitForTimeout(6000)
    }

    async getSearchBox(){
        await this.searchboxEdit.click()
     }

    async getSuccessMsg() {
        const text = await this.successMsg.textContent()
        return text
        // const text = this.programName.inputValue()
        // return text
    }
    async enterValidDetails(DataInput, sheetname) {
        const testData = getDataByDataInput(filepath, sheetname, DataInput)

        const programName = testData["ProgramName"]
        const programDescription = testData["ProgramDescription"]

        await this.programName.fill(programName)
        await this.programDescription.fill(programDescription)
        await this.clickOnStatusRadioBtn()
        await this.clickSaveButton()


    }

    async enterProgramName(DataInput, sheetname) {

        const testData = getDataByDataInput(filepath, sheetname, DataInput)
        console.log("Test data from excel",testData)
        const programName = testData["ProgramName"]

        await this.programName.fill(programName)

    }

    async enteredProgramNameText() {
        const text = this.programName.inputValue()
        return text
    }
    async programNameText() {
        return this.programName
    }
    async enterProgramDescription(DataInput, sheetname) {
        const testData = getDataByDataInput(filepath, sheetname, DataInput);
        const programDescription = testData["ProgramDescription"]

        await this.programDescription.fill(programDescription)

    }

    async enteredProgDescriptionText() {
        return await this.programDescription
    }



    async clickCloseButton() {
        await this.closeButton.click()
    }
    async clickOnStatusRadioBtn() {
        await this.statusRadioButton.click()
        return this.statusRadioButton
    }


    async getDialogBox() {
        return this.dialogBox
    }

    async fieldsRequired() {
        return this.requiredText

    }
    async getRows() {
        return await this.page.locator('table tbody tr')
    }

    async getTableValues() {
        const rows = await this.getRows()
        const rowCount = await rows.count();
        console.log(`Total Rows: ${rowCount}`);


        let tableData = [];

        for (let i = 0; i < rowCount; i++) {
            //    const programName = await rows.nth(i).locator('//tbody//tr//td[2]').textContent();
            const description = await rows.nth(i).locator('//tbody//tr//td[3]').textContent();
            //   const status = await rows.nth(i).locator('//tbody//tr//td[4]').textContent();

            tableData.push({
                //programName: programName.trim(),
                description: description.trim(),
                // status: status.trim(),
            })
        }
        console.log('Extracted Table Data:', tableData)
        return tableData;

    }

    async searchData() {
        // const table=await this.table
        const rows = await this.table.locator("//tbody//tr")
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                const text = await tds.nth(j).textContent()
                console.log(text);

            }
        }
    }
    async retrieveData() {
        const rows = await this.page.locator('table tbody tr')
        const rowCount = await rows.count()

        for (let i = 0; i < rowCount; i++) {
            const cells = await rows.nth(i).locator('td')
            const cellCount = await cells.count()

            let rowData = [];
            for (let j = 0; j < cellCount; j++) {
                const cellText = await cells.nth(j).textContent()
                rowData.push(cellText.trim())
            }
            console.log(`Row ${i + 1}: `, rowData)
        }
    }

    async visibilityOfSearchedData() {
        await expect(this.programNameData).toBeVisible()
        await expect(this.programDescData).toBeVisible()
        await expect(this.programStatusData).toBeVisible()

        const nameText = await this.programNameData.textContent()
        const descText = await this.programDescData.textContent()
        const statusText = await this.programStatusData.textContent()
        console.log(`Program Name : ${nameText}`)
        console.log(`Program Description : ${descText}`)
        console.log(`Program Status : ${statusText}`)


    }
   
    async searchByInvalidProgramName() {
        console.log("InvalidProgram name from env file : ", process.env.InvalidProgramName)
        await this.searchBox.fill(process.env.InvalidProgramName)

    }

    async searchByProgramDesc() {
        console.log("Program Desc from env file : ", process.env.ProgramDescription)
        await this.searchBox.fill(process.env.ProgramDescription)
    }

    async searchByProgramName() {
        console.log("Program name from env file : ", process.env.ProgramName)
        await this.searchBox.fill(process.env.ProgramName)

    }

    async clickSortProgramStatus() {
        await this.sortProgramStatus.click();

    }

    async getProgramStatusList() {
        const programStatus = await this.sortProgramStatus.allTextContents();
        const ActualList = programStatus.map(name => name.toLowerCase().trim());
        console.log("Program Status list: ", ActualList)
        return ActualList;
    }
    async SortProgramStatusAsc() {
        const originalList = await this.getProgramStatusList();
        const sortedList = [...originalList].sort(); // Use spread operator to avoid mutating originalList
        console.log("Program Status sorted asc list:", sortedList);
        return sortedList;
    }

    async SortProgramStatusDesc() {
        const originalList = await this.getProgramStatusList();
        const sortedList = [...originalList].sort().reverse(); // Use spread operator to avoid mutating originalList
        console.log("Program Status sorted desc list:", sortedList);
        return sortedList;
    }


    async clickSortProgramDesc() {
        await this.sortProgramDesc.click();
    }
    async getProgramDescList() {
        const programdescrption = await this.sortProgramDesc.allTextContents();
        const ActualList = programdescrption.map(name => name.toLowerCase().trim());
        console.log("Program Description list: ", ActualList)
        return ActualList;
    }
    async SortProgramDescriptionAsc() {
        const originalList = await this.getProgramDescList();
        const sortedList = [...originalList].sort(); // Use spread operator to avoid mutating originalList
        console.log("Program Description sorted asc list:", sortedList);
        return sortedList;
    }

    async SortProgramDescriptionDesc() {
        const originalList = await this.getProgramDescList();
        const sortedList = [...originalList].sort().reverse(); // Use spread operator to avoid mutating originalList
        console.log("Program Description sorted desc list:", sortedList);
        return sortedList;
    }


    async clickSortProgramName() {
        await this.sortProgramName.click();
    }

    async getProgramNameList() {
        const programNames = await this.sortProgramName.allTextContents();
        const ActualList = programNames.map(name => name.toLowerCase().trim());
        console.log("Program name list: ", ActualList)
        return ActualList;
    }
    async SortProgramNameItemsAsc() {
        const originalList = await this.getProgramNameList();
        const sortedList = [...originalList].sort(); // Use spread operator to avoid mutating originalList
        console.log("Program names sorted asc list:", sortedList);
        return sortedList;
    }

    async SortProgramNameItemsDesc() {
        const originalList = await this.getProgramNameList();
        const sortedList = [...originalList].sort().reverse(); // Use spread operator to avoid mutating originalList
        console.log("Program names sorted desc list:", sortedList);
        return sortedList;
    }

    async searchDetails() {
        const table = await this.table
        const rows = await table.locator("tbody tr")
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j)).textContent()


            }
        }
    }

    async searchResult() {
        // await this.programName
        // await this.programDescription
        // await this.programStatus

        return [this.programName, this.programDescription, this.programStatus];

    }
    async programNameAssertion() {
        //await expect(this.programName).toHaveText(process.env.ProgramName)
        await expect(this.programName).toHaveText("playwrightjavascript")
    }

    async getProgramNameResult() {
        return this.programName
    }

    async searchByProgramName() {
        console.log("Program name from env file : ", process.env.ProgramName)
        await this.searchBox.fill(process.env.ProgramName)

    }

    async searchByPartialProgramName() {
        console.log("Partial Program name from env file : ", process.env.PartialProgramName)
        await this.searchBox.fill(process.env.PartialProgramName)

    }

    async getProgramNameColumn() {
        return this.programNameSort
    }

    async visibilityOfDblPreviousLink() {
        return await this.doublePreviousLink.isDisabled()
    }
    async clickDoublePreviousLink() {
        await this.doublePreviousLink.click()
    }

    async clickFirstPage() {
        await this.firstPage.click()
    }

    async closeOverlay() {
        await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
    }
    async clickProgramNameSort() {

        await this.programNameSort.click()
    }

    async clickNewProgCross() {
        await this.closeAddNewProgram.click()
    }
    async verifyAscendingSort() {
        const list = await this.getProgColumnData()
        const sortedList = [...list].sort()
        expect(list).toEqual(sortedList)

    }

    async verifyProgramnames() {
        const programNames = await page.$$eval('table tbody tr', (rows) => {
            return rows.map(row => row.cells[1].innerText.trim());
        });

        const isSortedAsc = programNames.every((value, index, array) => {
            return index === 0 || array[index - 1] <= value;
        });
    }

    async getProgColumnData() {
        return await this.programColumnData.allTextContents()
    }

    async clickProgNameSortIcon() {
        await this.programNameSort.click()
    }

    async paginationText() {

        const paginationText = await this.pageFooter.textContent()
        const actualText = await paginationText.toString()
        console.log("Pagination Text", actualText)
        return actualText
    }
    async clickPreviousLink() {
        // await this.previousLink.waitFor({ state: 'visible' })
        // await this.previousLink.waitFor({ state: 'attached' });
        // //await this.previousLink.waitFor({ state: 'enabled' });
        await this.previousLink.click()
    }


    async visibilityOfNextLink() {
        return await this.lastLink.isDisabled()
    }
    async clickLastLink() {
        await this.lastLink.click()
    }

    async clickNextLink() {

        await this.nextLink.click()
        //     if(expect(await this.nextLink).toBeDisabled()){

        //         console.log('Next Link disabled')
        //     }
        //    else{
        //     this.nextLink.click()
        //    }
    }

    async validateNextLink() {

        const isEnabled = await this.nextLink.isEnabled()
        return isEnabled
    }
    async validateNextPageLink() {
        const count = await this.paginationFooter.count();
        for (let i = 0; i < count; i++) {
            await this.nextLink.click();
            if (expect(await this.nextLink).toBeDisabled()) {
                console.log('This is the last page');
            }
            else {
                continue;
            }
        }

    }

    async click(element) {
        await element.click()
    }

    async getOverLayer() {
        return await this.overlayer
    }

    async clickCancelButton() {
        await this.cancelButton.click()
    }


    async clickSaveButton() {
        await this.saveButton.click()
    }

    async nameAsterisk() {
        const text = await this.asteriskName.textContent()
        console.log(text)
        return text
    }
    async getProgramDetailsText() {

        const text = await this.programDetailsText.textContent()
        return text

    }

    async overLayer() {
        const overLayerVisible = await this.overlayer.isVisible();
        if (overLayerVisible) {
            await this.overLayer.click()
        }

    }
    async addNewProgPopupVisiblity() {
        const isPopupVisible = await this.overlayer.isVisible();
        expect(isPopupVisible).toBe(true)
    }

    async getFooterText() {
        const footerText = await this.programFooter.textContent()
        const text = await footerText.toString()
        console.log("Footer Text", text)
        return text
    }
    async visbilityOfPaginationIcon() {
        const paginationText = await this.pageFooter.textContent()
        const actualText = await paginationText.toString()
        console.log("Pagination Text", actualText)
        return actualText

    }

    async visibilityOfEditDeleteIcons() {
        const tablerows = await this.tableRows;
        const rowCount = await this.tableRows.count()

        for (let i = 0; i < rowCount; i++) {
            const row = tablerows.nth(i)

            const editIcon = row.locator(this.editIcons)
            const deleteIcon = row.locator(this.deleteIcons)

            const isEditPresent = await editIcon.count()
            const isDeletePreent = await deleteIcon.count()

            if (isEditPresent) {
                await expect(editIcon).toBeVisible()
            } else {
                console.log("Edit Icon is not present")
            }

            if (isDeletePreent) {
                await expect(deleteIcon).toBeVisible()
            } else {
                console.log("Delete Icon is not present")
            }

        }
        console.log("All Edit and Delete icons are visible");
    }

    async visibilityOfSortIcons() {
        const count = await this.sortIcons.count();  // Get the number of checkboxes
        for (let i = 0; i < count; i++) {
            await expect(this.sortIcons.nth(i)).toBeVisible()

        }
        console.log("All sort icons are visible");
    }

    async getAllCheckBoxes() {
        return await this.allCheckBoxes
    }

    async verifyAllCheckBoxes() {
        const count = await this.allCheckBoxes.count();  // Get the number of checkboxes
        for (let i = 0; i < count; i++) {
           await expect(this.allCheckBoxes.nth(i)).not.toBeChecked()
        }
        console.log("All Checkboxes are verified - Unchecked");
    }



    async checkBoxOnHeader() {

        //return await this.mainCheckBox.isChecked()
        return await this.mainCheckBox
    }

    async getTableHeaderNames() {
        const actualHeaderNames = await this.tableHeader.allTextContents()
        console.log(actualHeaderNames)
        return actualHeaderNames.map(text => text.trim())

    }


    async searchPlaceholderText() {

        // const placeholderText= await this.searchBoxText.getAttribute('placeholder')
        // console.log(placeholderText)
        return await this.searchBoxText.getAttribute('placeholder')

    }
    async getSearchBoxText() {
        return this.searchBoxText.isEnabled()

    }
    async getDisabledDelete() {


        return this.disabledDelete.isDisabled()
    }

    async getProgramDetails() {

        const detailsOfProgram = await this.programDetails.allTextContents()
        console.log(detailsOfProgram)
        return detailsOfProgram.map(text => text.trim());
    }

    async clickOnProgramLink() {
        await this.programLink.click()
    }

    async getManageProgramText() {

        const text = await this.manageProgramHeading.textContent()
        return text

    }

    async addNewProgramLink() {
        return this.addNewProgramLink
    }

    async clickOnAddNewProgramLink() {
        this.addNewProgramLink.click()
    }

    async getModuleName() {
        const moduleNames = await this.moduleNames.allTextContents()
        return moduleNames
    }















}
//module.exports={ProgramPage}

