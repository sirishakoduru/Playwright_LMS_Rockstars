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
            //this.batchHeaders=page.locator("//thead[@class='p-datatable-thead']")
            //this.batchLink=this.programLink = page.getByRole('button', { name: 'Batch' })
            this.sortProgramName = page.locator("//th[contains(text(), 'Program Name ')]");
            this.search = page.locator("#filterGlobal");
            this.table = page.locator("//table")
        }

        async batchlink(){

            return await this.batchLink.click()

        }
     
        async batchHeadersNames(){
          
                const actualHeaderNames = await this.tableHeader.batchHeaders()
                console.log(actualHeaderNames)
                return actualHeaderNames.map(text => text.trim())
    
            

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
        async clickSortProgramName(){
            await this.sortProgramName.click();
        }
        async closeOverlay() {
            await this.page.mouse.click(0, 0); // Clicks at the top-left corner to dismiss the overlay
        }
    async getProgramNameList(){
        const programNames = await this.sortProgramName.allTextContents();
        const ActualList = programNames.map(name => name.toLowerCase().trim());
        console.log("Program name list: ",ActualList )
        return ActualList;
    }

        async SortProgramNameItemsAsc(){
            const originalList = await this.getProgramNameList();
            const sortedList = [...originalList].sort(); // Use spread operator to avoid mutating originalList
            console.log("Program names sorted list:", sortedList);
            console.log("Program Name List:", originalList);
            return sortedList;
        }
        async SortProgramNameItemsDesc(){
            const originalList = await this.getProgramNameList();
            const sortedList = [...originalList].sort().reverse(); // Use spread operator to avoid mutating originalList
            console.log("Program names sorted list:", sortedList);
            return sortedList;
        }
        async EnterProgramNameInSearch(){
            await this.search.click();
            await this.search.fill("playwrightjavascript");
        }
        async searchDetails(){
            // const table=await this.table
            const rows=await this.table.locator("//tbody//tr")
            for(let i=0;i<await rows.count();i++){
                const row=rows.nth(i)
                const tds=row.locator('td')
    
                for(let j=0;j<await tds.count()-1;j++){
                    const text = await tds.nth(j).textContent()
                    console.log(text);
    
                }
            }
        }
    















    }
//module.exports={ProgramPage}

