//const { CommonPage } = require("./CommonPage");
require('dotenv').config();


export class CommonPage{

constructor(page){
    this.page=page
    this.url=process.env.LoginURL
    this.username=page.getByRole('textbox', { name: 'User' })
    this.password=page.getByRole('textbox', { name: 'Password' })
    this.loginButton=page.getByRole('button', { name: 'Login' })
    this.logout=page.getByRole('button', { name: 'Logout' })
    //dashboard
    this.dashBoardTitle=page.getByText(' LMS - Learning Management System ')
   
}

async navigateToLoginPage(){
    await this.page.goto(this.url)

}

async gotologin(){

await this.username.fill(process.env.user)
await this.password.fill(process.env.Password)
await this.loginButton.click()

}
async logout(){
    await this.logout.click()
   
}

async getDashboardTitle(){
    const text=await this.dashBoardTitle.textContent()
    return text
}

async logoutLink(){
    return this.logout
}
async logoutOnMenubar(){
    return this.logout.isVisible()
}

async isLocatorVisible(locator){
    
    return await locator.isVisible()

}




}
//module.exports={CommonPage}
