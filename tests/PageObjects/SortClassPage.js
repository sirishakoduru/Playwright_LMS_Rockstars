import { expect } from "@playwright/test";
require('dotenv').config();

export class SortClassPage {

    constructor(page){

        this.page = page;
        this.AddClass =page.locator("xpath=//button[@role='menuitem']")
        this.closeAddclass =page.locator("xpath=/html/body/app-root/app-session/p-dialog/div/div/div[1]/div/button")
        this.batchNameSort = page.locator('//th[2]');
        this.classTopicSort = page.locator("xpath=//thead//tr//th[3]//i");
        this.classDescSort = page.locator("xpath=//thead//tr//th[4]//i");
        this.statusSort = page.locator("xpath=//thead//tr//th[5]//i");
        this.dateSort = page.locator("xpath=//thead//tr//th[6]//i");
        this.staffSort = page.locator("xpath=//thead//tr//th[7]//i");
        this.paginationFooter = page.locator('//span[@class = "p-paginator-pages ng-star-inserted"]//button');
       this.batchnameList = page.locator("xpath=//tbody//td[2]");
       this.classTopicList = page.locator("xpath=//tbody//td[3]");
       this.classDescList = page.locator("xpath=//tbody//td[4]");
       this.statusList = page.locator("xpath=//tbody//td[5]");
       this.dateList = page.locator("xpath=//tbody//td[6]");
       this.staffList = page.locator("xpath=//tbody//td[7]");        
								
    }

    async BatchNamesort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.batchNameSort.click();
    }
    async ClassTopicsort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.classTopicSort.click();
    }

    async ClassDesccsort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.classDescSort.click();
    }

    async ClassSatussort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.statusSort.click();
    }

    async ClassDatesort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.dateSort.click();
    }
    async ClassStaffsort (){
        await this.AddClass.click();
        await this.closeAddclass.click();
        await this.staffSort.click();
    }


    async getbatchnameList(){
        return this.batchnameList;
    }
    async getclassTopicList(){
        return this.classTopicList;
    }
    async getclassDescList(){
        return this.classDescList;
    }
    async getstatusList(){
        return this.statusList;
    }
    async getdateList(){
        return this.dateList;
    }
    async getstaffList(){
        return this.staffList;
    }

    async sortingAscending(ele) {
        await this.page.waitForLoadState();
        
        let originalData = (await ele.allTextContents()).map(text => text.trim());
        console.log('Ascending Order actual List:', originalData);
    
        let expectedList = originalData.slice().sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
        console.log('Ascending Order expected:', expectedList);
    
        expect(originalData).toEqual(expectedList), 
            `Expected: ${expectedList}\nReceived: ${originalData}`;
    }

    async pagination_Asc_Sorting(ele){
        
        const count = await this.paginationFooter.count();
        console.log('Number of pages' + count)
        for (let i = 0; i <count; i++){
            if(i>0){
                
                await this.sortingAscending(ele);
                await this.paginationFooter.nth(i).click();
            }
        }
    }
    
}
