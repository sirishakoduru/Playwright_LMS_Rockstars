import {test,expect} from '@playwright/test'

class ClassHome_Page{

    constructor(page){
    this.page = page
    this.ClassNav = page.getByRole('button', { name: 'Class' });
    this.expectedTitle = page.locator('LMS - Learning Management');
    //this.PageTitle = page.getByText('LMS - Learning Management');

    }

    async HomePage_Navigate() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/'); 
      }
 
    async ClassNav_Link(){

    await this.page(this.ClassNav).click();


    }



    
    // async HomePage_Title(){

    // // await this.page( this.PageTitle);
    // return this.page.title();

    // }




}
module.exports = ClassHome_Page;