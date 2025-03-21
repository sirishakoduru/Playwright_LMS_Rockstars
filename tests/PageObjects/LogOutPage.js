
import { expect } from "@playwright/test";
require('dotenv').config();


export class LogOutPage {
   
    constructor(page) {
        this.page = page;
        this.LogOutButton = page.locator('#logout');
    }
async LogOut (){
    await this.LogOutButton.click()  
}
async navigateToback(){
    await this.page.goBack();
}
}