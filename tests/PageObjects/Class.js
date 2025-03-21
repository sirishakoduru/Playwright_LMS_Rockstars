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
        this.DataTableHeaders = page.locator("xpath=/html/body/app-root/app-session/div/mat-card/mat-card-content/p-table/div/div[1]/table/thead");
       this.TextPagination =  page.locator("//div[@class='p-d-flex p-ai-center p-jc-between ng-star-inserted']")
       this.deleteButton = page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']//span[@class='p-button-icon pi pi-trash']")
        this.allRows = page.locator("xpath = //table/tbody/tr")
        this.sortIcon = page.locator("//div//table//thead//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']")
        this.totalNoClasses = page.locator("xpath=/html/body/app-root/app-session/div/mat-card/mat-card-content/p-table/div/div[2]/div");


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

// async TotalClasses_Displayed() {

//    return (this.totalNoClasses);

//   }

}