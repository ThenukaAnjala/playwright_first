import {Page, Locator} from "@playwright/test";//imprt page libbry
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
    await this.page.goto("https://www.saucedemo.com/");
}

async enterUsername(Username: string , Password: string){
    await this.userName.fill(Username);
    await this.password.fill(Password);
    await this.loginButton.click();

}
}