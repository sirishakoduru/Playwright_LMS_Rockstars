const { ProgramPage } = require("./ProgramPage");
const { CommonPage } = require("./CommonPage");
const {LoginPage} = require ("./LoginPage")
const {LogOutPage} = require("./LogOutPage");
const {SortClassPage} = require("./SortClassPage");
const {BatchPage} = require("./Batch");



export class PageObjectManager{

    constructor(page)
    {
        this.page=page
        this.SortClass =null
        this.programPage=null
        this.commonPage=null
        this.LoginPage=null
        this.LogOutPage=null
        this.BatchPage=null

    }

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

    getLoginPage(){
        if(!this.LoginPage){
            this.LoginPage=new LoginPage(this.page)
        }
        return this.LoginPage
    }

    getLogOutPage(){
        if(!this.LogOutPage){
            this.LogOutPage=new LogOutPage(this.page)
        }
        return this.LogOutPage
    }
    getSortClassPage(){
        if(!this.SortClassPage){
            this.SortClassPage=new SortClassPage(this.page)
        }
        return this.SortClassPage
    }
    getBatchPage(){
        if(!this.BatchPage){
            this.BatchPage=new BatchPage(this.page)
        }
        return this.BatchPage
    }

    }


