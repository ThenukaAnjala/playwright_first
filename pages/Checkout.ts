import { Page, expect, Locator} from "@playwright/test";

export default class Checkout{
    readonly page : Page;
    readonly firstName :Locator;
    readonly lastName : Locator;
    readonly zipCode : Locator;
    readonly continue :Locator;
    readonly finish :Locator;
    readonly cancel :Locator;
    readonly errorMessage: Locator;


    constructor(page:Page){
        this.page = page;
        this.firstName =  page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.continue = page.locator('[data-test="continue"]');
        this.finish =  page.locator('[data-test="finish"]');
        this.cancel =  page.locator('[data-test="cancel"]');
        this.errorMessage =  page.locator('div.error-message-container.error');
    }

    async enterFirstNameLastNameAndZipCode(
        Firstname: string, 
        Lastname: string, 
        Zipcode:string){
        await this.firstName.fill(Firstname);
        await this.lastName.fill(Lastname);
        await this.zipCode.fill(Zipcode);
        }

    async clickContinueButton(){
        await expect(this.continue).toBeVisible();
        await this.continue.click();
    }

    async clickFinishButton(){
        await expect(this.finish).toBeVisible();
        await this.finish.click();
    }

    async clickCancelButton(){
        await expect(this.cancel).toBeVisible();
        await this.cancel.click();
    }

}