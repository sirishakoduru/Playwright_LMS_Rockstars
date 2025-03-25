import { expect } from "@playwright/test";
require('dotenv').config();

export class SortClassPage {

    constructor(page){

        this.page = page;
        //Search Class
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
       this.CancelAddclass =page.locator("xpath=//p-dialog/div/div/div[3]/button[1]")      
       //Delete Class
       this.DeleteRowlevel =page.locator("xpath=//td[8]/div/span/button[2]")
       this.confirmDialouge = page.getByText('Confirm');
       this.NoButton = page.locator("xpath=//div/div[3]/button[1]");
       this.YesButton = page.locator("xpath=//div/div[3]/button[2]");
       this.CloseIcon = page.locator("xpath=//div[1]/div[1]/button");
       this.Dialouge = page.locator("xpath=//div/div/div[2]/span");
	   this.ClassTopicDelete =page.locator("xpath=//div/div[1]/table/tbody/tr[1]/td[3]")
       this.SearchBar =page.locator('#filterGlobal')	
       this.ManageClass = page.getByText(' Manage Class');	
       //Navigation Validation from Manage Class to other Pages
       this.Classpage = page.locator("xpath=//mat-toolbar/div/button[3]")
       this.AddBatch = page.getByText('Add New Batch');     
       this.Batch = page.locator("xpath=//mat-toolbar/div/button[2]")   
       this.Program =page.locator("xpath=//*[@id='program']")
       this.Logout =page.locator("xpath=//*[@id='logout']")
       this.AddBatchPopClose =page.locator("xpath=//button[@label='Cancel']")
       this.ManageBatch = page.getByText(' Manage Batch ');	
       this.AddProgram = page.getByRole('menuitem', { name: 'Add New Program' })
       this.AddProgrampopclose =page.locator("xpath=//p-dialog/div/div/div[1]/div/button")
       this.ManageProgram = page.getByText('Manage Program');
       this.LoginPage = page.getByText('Please login to LMS application ');	
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
// Delete Class------------------------------------------------

    async DeleteIconClick(){
        await this.AddClass.click();
        await this.CancelAddclass.click();
        await this.DeleteRowlevel.first().click();
    }
    async ClickYesButton(){
        await this.YesButton.click();
        
    }
    async ClickNoButton(){
        await this.NoButton.click();
        
    }
    async ClickCloseButton(){
        await this.CloseIcon.click();
        
    }
    async ConfirmPopUp(){
        await expect(this.confirmDialouge).toBeVisible();
    }
    async NoButtonIcon(){
        await expect(this.NoButton).toBeVisible();
    }
    async YesButtonIcon(){
        await expect(this.YesButton).toBeVisible();
    }
    async CloseButtonIcon(){
        await expect(this.CloseIcon).toBeVisible();
    }
    async DialougeText(){
        await expect(this.Dialouge).toBeVisible();
    }
    async ManageClassVisible(){
        await expect(this.ManageClass).toBeVisible();
    }
    async getDeleteCalssTopicText() {
        return await this.ClassTopicDelete.innerText();
    }


    async  deleteAndVerifyClassTopic() {
        // Step 1: Extract and save the row's text before deletion
        const deletedRowText = await this.ClassTopicDelete.textContent();
        console.log(`Deleted Row Text: ${deletedRowText}`);
    
        // Step 2: Click the delete button
        await this.YesButton.click();       
    
        // Step 4: Search for the deleted row text
        await this.SearchBar.fill(deletedRowText);
        await this.SearchBar.press("Enter"); // Simulate pressing Enter if required
    
        // Step 5: Check if the deleted row still exists in search results
        const isResultVisible = await this.ClassTopicDelete.isVisible();
    
        if (isResultVisible) {
            console.error(`"${deletedRowText}" is still visible in search results. Deletion failed.`);
            await expect(this.ClassTopicDelete).not.toHaveText(deletedRowText);
        } else {
            console.log(`"${deletedRowText}" is successfully deleted and not found in search results.`);
            await expect(this.ClassTopicDelete).not.toBeVisible();
        }
    }

//Search Class -----------------------------------

async BtachNameSearch(){
    await this.SearchBar.fill("Python101")
}
async BtachNameInTable(){
    await expect(this.batchnameList).toHaveText("Python101")
    console.log("The Searched Class (Python101) sucessfully Displayed in Table")
}
async ClassTopicSearch(){
    await this.SearchBar.fill("JavaTestPlaywright01")
}
async ClassTopicInTable(){
    await expect(this.classTopicList).toHaveText("JavaTestPlaywright01")
    console.log("The Searched Class (JavaTestPlaywright01) sucessfully Displayed in Table")
}
async StaffNameSearch(){
    await this.SearchBar.fill("Getha Takur")
}
async StaffNameInTable(){
    await expect(this.staffList).toHaveText("Getha Takur")
    console.log("The Searched Class (Getha Takur) sucessfully Displayed in Table")
}

//Navigation Validation from Manage Class to other Pages-----------------------

async ManageClassvisible(){
    await expect(this.ManageClass).toBeVisible();
}
async ManageBatchvisible(){
    await expect(this.ManageBatch).toBeVisible();
}
async Manageprogramhvisible(){
    await expect(this.ManageProgram).toBeVisible();
}
async Loginpagevisible(){
    await expect(this.LoginPage).toBeVisible();
}
async ClassPageClick(){
    await this.Classpage.click();
    await this.AddClass.click();
    await this.CancelAddclass.click();
    
}
async BatchPageClick(){
    await this.Batch.click();
    await this.AddBatch.click();
    await this.AddBatchPopClose.click();
    
}
async ProgramPageClick(){
    await this.Program.click();
    await this.AddProgram.click();
    await this.AddProgrampopclose.click();
    
}
async LogoutClick(){
    await this.Logout.click();
    
    
}


   
}
