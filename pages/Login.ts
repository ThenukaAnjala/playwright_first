import {Page, Locator} from "@playwright/test";//import page library
import { urls } from "../data/dataAssets";
//Create login class
export default class Login{
    //declare page property
    readonly page: Page;
    readonly userName : Locator;
    readonly password : Locator;
    readonly loginButton : Locator;
    readonly errorMessage : Locator;
    
    
    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator("[data-test='error']")
        
        
    }

async openLogin(){
    await this.page.goto(urls.baseURL);
}

async enterUsername(
    Username: string , 
    Password: string)
    {
    await this.userName.fill(Username);
    await this.password.fill(Password);
    await this.loginButton.click();

    }
}