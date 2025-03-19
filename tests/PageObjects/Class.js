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
        //this.LMSTitle = page.getByText(' LMS - Learning Management System ')
        this.ManageClassHeader = page.getByText(' Manage Class')
        this.SearchBar = page.locator("//input[@id='filterGlobal']")
        this.DataTableHeaders = page.locator("//thead[@class='p-datatable-thead']")
       
        this.TextPagination = page.locator("//span[@class='p-paginator-current ng-star-inserted']")
        this.deleteButton = page.locator("//button[@class='p-button-danger p-button p-component p-button-icon-only']//span[@class='p-button-icon pi pi-trash']")
         //this.DeleteButton = page.locator("xpath=//button//span[@class= 'p-button-icon pi pi-trash']")
       // this.sortIcon = page.locator("//p-sorticon[@field='batchName']//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']")

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


     const DtHeaders = await this.DataTableHeaders.allInnerTexts();
     console.log("DataTable Headers:", DtHeaders);
     return DtHeaders.map(header => header.trim());

    }

   async Text_Pagination() {

    await expect( this.TextPagination).toBeVisible();
    await expect( this.TextPagination).toBeEnabled();



   }

   async Sorticon_Elements() {

    return await this.DataTableHeaders.all()

   }

async Delete_Button() {

await expect(this.deleteButton).toBeVisible();
//await this.page(this.DeleteButton).toBeEnabled();

}



}