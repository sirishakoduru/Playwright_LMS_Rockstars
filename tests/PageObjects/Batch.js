import { truncate } from 'fs';
import { expect } from "@playwright/test";
require('dotenv').config();
export class BatchPage {
    page;
    constructor(page) {
        this.page = page;
        this.userInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginbutton =page.locator("xpath=//span[text()='Login']");
        this.batchBtn = page.locator("xpath=//div//button[2][@class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base']");
        this.LMSTitle = page.getByText(' LMS - Learning Management System ',{exact:truncate})
        this.heading = page.getByText(' Manage Batch',{exact:truncate})
        this.deleteButton = page.locator("xpath=//button//span[@class= 'p-button-icon pi pi-trash']/..")
        this.nextPagePagination = page.locator("xpath=//button//span[@class='p-paginator-icon pi pi-angle-right']/..")


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

    async clickBatch(){
        await this.batchBtn.click();
        
    }
    async verifyLMSTitle(){
    //    await expect(page.getByText(' LMS - Learning Management System ')).toBeVisible()
        await expect(this.LMSTitle).toBeVisible();
    }
    async verifyHeading(){
        await expect(this.heading).toBeVisible();
    }
    async veriftDeleteButton(){
        await expect(this.deleteButton).toBeVisible();
    }
    async verifyPagenaginationIsEnabled(){
        await expect(this.nextPagePagination).toBeEnabled();
    }

    
}