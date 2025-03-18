//const { LoginPage } = require("./LoginPage");
const { ProgramPage } = require("./ProgramPage");
const { CommonPage } = require("./CommonPage");
//exports.PageObjectManager=


export class PageObjectManager{

    constructor(page)
    {
        this.page=page
        //this.loginPage=null
        this.programPage=null
        this.commonPage=null

    }

    // getLoginPage(){
    //     if(!this.loginPage){
    //         this.loginPage=new LoginPage(this.page)
    //     }
    //     return this.loginPage
    // }

    getProgramPage(){
        if(!this.programPage){
            this.programPage=new ProgramPage(this.page)
        }
        return this.programPage
    }

    getCommonPage(){
        if(!this.commonPage){
            this.commonPage=new CommonPage(this.page)
        }
        return this.commonPage
    }

}

//module.exports={PageObjectManager}