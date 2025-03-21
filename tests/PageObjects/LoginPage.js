import { truncate } from 'fs';
import { expect } from "@playwright/test";
require('dotenv').config();
const filepath = 'tests/TestData/LMS_Data.xlsx';
const { getDataByDataInput } = require('../Utilities/ExcelReader.js');
const Tesseract = require('tesseract.js');
const fs = require('fs');

export class LoginPage {
   

    constructor(page) {
        this.page = page;      
        this.invalidurl=process.env.InvalidURL 
        this.username = page.locator('#username');
        this.userText = page.getByText('User',{exact:truncate})
        this.password = page.locator('#password');
        this.pwdText =page.getByText('Password',{exact:truncate})
        this.login_btn = page.locator('#login');
        this.loginText =page.getByText('Login',{exact:truncate})
        this.LogingInPage = page.locator('#signin-content');       
        this.ForgetPwdText= page.getByText('Forgot Password',{exact:truncate})
        this.LMSTitle = page.getByText(' LMS - Learning Management System ',{exact:truncate}) 
        this.LoginPageValidate = page.getByText(' Please login to LMS application ',{exact:truncate})              
        this.errorMessage = page.locator('#errormessage');
        this.userErrorMessage = page.getByText(' Please enter your user name ',{exact:truncate});
       this.passErrorMessage = page.getByText(' Please enter your password ',{exact:truncate});
       this.applicationerror = page.locator('iframe').contentFrame().getByText('There\'s nothing here, yet. Build something amazing')  
       this.Home_image = page.locator('.image-container'); 
       this.textfields = page.locator('form input');
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
    async LoginButton(){
            await expect(this.login_btn).toBeVisible();
        }
    async LoginPageValidation(){
            await expect(this.LoginPageValidate).toBeVisible();
        }
    async ApplicationErrorMsg(){
            await expect(this.applicationerror).toBeVisible();
        }

    async navigateToLoginPageinvalidURL(){
            await this.page.goto(this.invalidurl)
        
        }
           
    async SpellingofFields(){
       expect(this.LoginPageValidate).toHaveText('Please login to LMS application');
       expect(this.userText).toHaveText('User');  
       expect(this.pwdText).toHaveText('Password');
       expect(this.loginText).toHaveText('Login');
       expect(this.ForgetPwdText).toHaveText('Forgot Password');
     }
     async UserTextfiled(){ 
        expect(this.userText).toHaveText('User'); 
     }

     async PswdTextfiled(){ 
        expect(this.pwdText).toHaveText('Password'); 
     }

     async MandatoryFieldAstrerisk(){
        expect(this.userText).toHaveText('*'); 
        expect(this.pwdText).toHaveText('*'); 
     }

     async PwdFieldAstrerisk(){        
         expect(this.pwdText).toHaveText('*'); 
        
     }

     async ExtrctTextFromImage(){
    // Take a screenshot of the image
       
        await (this.Home_image).screenshot({path: 'homepage.png'})   
          
    // Use Tesseract.js for OCR
    const { data: { text } } = await Tesseract.recognize('homepage.png');

    console.log('Extracted Text:', text);

    // Optional: Assert that extracted text matches expected
    expect(text).toContain("LMS - Learning Management System");   
}

async ComanyName(){
    // Take a screenshot of the image
       
        await (this.Home_image).screenshot({path: 'homepage.png'})   
          
    // Use Tesseract.js for OCR
    const { data: { text } } = await Tesseract.recognize('homepage.png');

    console.log('Extracted Text:', text);

    // Optional: Assert that extracted text matches expected
    expect(text).toContain("NumpyNinja");   
}

async Validate_Loginpage(){
    const text = await this.LoginPageValidate.textContent();
    return text;
}

 
async TextFiled(){

      const presentfields = await this.textfields
      const count = await presentfields.count();
      return count
    }

    async Alignment(){

    // const inputFields = page.locator('input'); // Adjust selector if needed
    const textfields = this.page.locator('form input');
    // Wait for input fields to be visible
    await expect(textfields).toBeVisible();

    // Get number of input fields
    const count = await textfields.count();
    expect(count).toBeGreaterThan(0); // Ensure at least one input field exists

    // Get page width
    const pageWidth = await page.evaluate(() => window.innerWidth);
    const pageCenterX = pageWidth / 2;

    // Loop through each input field and check its center position
    for (let i = 0; i < count; i++) {
        const box = await textfields.nth(i).boundingBox();
        if (box) {
            const fieldCenterX = box.x + box.width / 2;
            console.log(`Input Field ${i + 1} Center X: ${fieldCenterX}, Page Center X: ${pageCenterX}`);

            // Allow a margin of 10px for flexibility
            expect(Math.abs(fieldCenterX - pageCenterX)).toBeLessThanOrEqual(10);
        } else {
            throw new Error(`Bounding box not found for input field ${i + 1}`);
        }
    }

    }
async UserGrayColour(){
    //    const userElement = await expect(this.username).toBeVisible();
       const color = await (this.userText).evaluate(el => getComputedStyle(el).color);
       console.log(color); // Verify if it's gray (e.g., "rgba(0, 0, 0, 0.54)")

       expect(color).toBe('rgba(0, 0, 0, 0.54)'); // Adjust RGB value based on expected gray
}
async PasswordGrayColour(){
    //    const userElement = await expect(this.username).toBeVisible();
       const color = await (this.pwdText).evaluate(el => getComputedStyle(el).color);
       console.log(color); // Verify if it's gray (e.g., "rgba(0, 0, 0, 0.54)")

       expect(color).toBe('rgba(0, 0, 0, 0.54)'); // Adjust RGB value based on expected gray
}
}




