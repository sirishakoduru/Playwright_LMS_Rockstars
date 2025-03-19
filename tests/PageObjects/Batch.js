import { truncate } from 'fs';
import { expect } from "@playwright/test";
import { Console } from 'console';
require('dotenv').config();
export class BatchPage {
    page;
    constructor(page) {
        this.page = page;
        this.userInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginbutton =page.locator("xpath=//span[text()='Login']");
        this.batchBtn = page.locator("xpath=//div//button[2][@class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base']");
        this.LMSTitle = page.getByText(' LMS - Learning Management System ')
        this.heading = page.getByText(' Manage Batch')
        this.deleteButton = page.locator("xpath=//button//span[@class= 'p-button-icon pi pi-trash']/..")
        this.nextPagePagination = page.locator("xpath=//button//span[@class='p-paginator-icon pi pi-angle-right']/..")
        this.allEditIcons = page.locator("xpath=//table/tbody/tr//button[contains(@icon, 'pi-pencil')]")
        this.allRows = page.locator("xpath = //table/tbody/tr")
        this.allDeleteIcons = page.locator("xpath=//table/tbody/tr//button[contains(@icon, 'pi pi-trash')]")
        this.allCheckBoxes = page.locator("xpath=//table/tbody/tr//div[contains(@class, 'p-checkbox-box')]")
        this.allHeaderNames = page.locator("//table//thead//th[position() > 1]");
        this.headerChechbox = page.locator("xpath=//table//thead/tr//div[contains(@class, 'p-checkbox-box')]")
        this.allSortIcons = page.locator("//div//table//thead//i[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']")
    }
    async gotoLoginUrl() {
        const url = process.env.LoginURL;
        await this.page.goto(url);
    }

    async login() {
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

    async clickBatch() {
        // await this.page.keyboard.press("Escape");
        await this.batchBtn.click();
        
    }
    async verifyLMSTitle(){
    //    await expect(page.getByText(' LMS - Learning Management System ')).toBeVisible()
        const titletext = await (this.LMSTitle).textContent();
        return titletext;
    }
    async verifyHeading(){
        const heading = await (this.heading).textContent();
        return heading;
        
    }
    async veriftDeleteButton(){
        return (this.deleteButton)
    }
    async verifyPagenaginationIsEnabled(){
        return (this.nextPagePagination)
    }
    async VerifyeditIconInEachRow(){
        const rowCount = await this.allRows.count();
        const editIconsCount = await this.allEditIcons.count();
        return rowCount === editIconsCount;
    }

    async VerifyDeleteIconInEachRow(){
        const rowCount = await this.allRows.count();
        const deleteIconCount = await this.allDeleteIcons.count();
        return deleteIconCount === rowCount;
    }
    async VerifyCheckBoxesInEachRow(){
        const rowCount = await this.allRows.count();
        const checkBoxCount = await this.allCheckBoxes.count();
        return checkBoxCount === rowCount;
    }
    async verifyHeaderNames() {
        await this.allHeaderNames.first().waitFor({ state: "visible" });
        const headers = await this.allHeaderNames.all();
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
    async verifyHeaderCheckbox(){
        return await (this.headerChechbox);
    }
    async verifyHeaderSortIcon(){
        const rowCount = await this.allRows.count();
        const sortIconCount = await this.allSortIcons.count();
        return sortIconCount === rowCount;
    }
    
}

    
