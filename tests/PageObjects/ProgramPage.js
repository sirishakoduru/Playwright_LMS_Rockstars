const{expect}=require('@playwright/test')
//require('dotenv').config();

//exports.ProgramPage =
export class ProgramPage {

        constructor(page) {
            this.page = page
            this.programLink = page.getByRole('button', { name: 'Program' })
            this.manageProgramHeading = page.getByText('Manage Program')
            this.addNewProgramLink = page.getByRole('menuitem', { name: 'Add New Program' })
            this.moduleNames = page.locator("span[class='mat-button-wrapper']")
            this.programDetails = page.locator('//thead//tr//th[@role="columnheader"]')
            this.disabledDelete = page.locator('//div[@class="box"]//button')
            this.searchBoxText = page.getByPlaceholder('Search...')
            this.tableHeader = page.locator('//thead//tr//th[position() > 1]')
            //this.mainCheckBox=page.locator('//thead//tr//th[position() < 2]')
            this.mainCheckBox=page.locator("//div[@class='p-checkbox-box']")
        }


        async checkBoxOnHeader(){

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

