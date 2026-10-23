import { Page, expect, Locator} from "@playwright/test";

export default class Checkout{
    readonly page : Page;
    readonly firstName :Locator;
    readonly lastName : Locator;
    readonly zipCode : Locator;

    constructor(page:Page){
        this.page = page;
        this.firstName =  page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]')
    }

}