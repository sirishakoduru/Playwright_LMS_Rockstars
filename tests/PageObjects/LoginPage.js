import { truncate } from 'fs';
import { expect } from "@playwright/test";
require('dotenv').config();
const filepath = 'tests/TestData/LMS_Data.xlsx';
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');

export class LoginPage {
   

    constructor(page) {
        this.page = page;       
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login_btn = page.locator('#login');
        this.LMSTitle = page.getByText(' LMS - Learning Management System ',{exact:truncate})
        this.errorMessage = page.locator('#errormessage');
        this.userErrorMessage = page.getByText(' Please enter your user name ',{exact:truncate});
       this.passErrorMessage = page.getByText(' Please enter your password ',{exact:truncate});

    }

    async validLogin(DataInput){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';   
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        let userName = testData['UserName'];
        
        let password = testData['Password']
        
        if(userName === undefined || password === undefined){
            userName = '';
            password = '';
        }
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.login_btn.click();
        
    }

    async VerifyInvalidlogin(){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';
        const DataInput = 'InvalidCredential';
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const expectedErrorMessage = testData['ErrorMessage']
        await expect (this.errorMessage).toContainText(expectedErrorMessage);

    }

    async VerifyNulluserName(){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';
        const DataInput = 'NullUsername';
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const expectedErrorMessage = testData['ErrorMessage']
        await expect (this.userErrorMessage).toContainText(expectedErrorMessage);

    }

    async VerifyNullpassword(){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';
        const DataInput = 'NullPassword';
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        const expectedErrorMessage = testData['ErrorMessage']
        await expect (this.passErrorMessage).toContainText(expectedErrorMessage);

    }

    async validLoginByKeyboard(DataInput){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';
        
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        let userName = testData['UserName'];
        
        let password = testData['Password']
        
        if(userName === undefined || password === undefined){
            userName = '';
            password = '';
        }
        
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.page.keyboard.press("Enter")
    }

    async validLoginByMouseaction(DataInput){
        const filepath = 'tests/TestData/LMS_Data.xlsx';
        const sheetName = 'Login';
        
        const testData = getDataByDataInput(filepath,sheetName,DataInput);
        let userName = testData['UserName'];
        
        let password = testData['Password']
        
        if(userName === undefined || password === undefined){
            userName = '';
            password = '';
        }
        
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.login_btn.hover();
        await this.page.mouse.down(); // Press mouse button
        await this.page.mouse.up(); // Release
    }

    async CheckLMSTitle(){
            await expect(this.LMSTitle).toBeVisible();
        }
}


