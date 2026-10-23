import {Page, Locator, expect} from '@playwright/test';

export default class Cart{
    //Declare page properties
    readonly page : Page;
    readonly cartIcon : Locator;
    readonly addToCart : Locator;
    readonly removeButton : Locator;
    readonly continueShoping : Locator;
    readonly cheout : Locator;
    readonly cartHavePro : Locator;
    readonly productAddButtons: Locator;




    constructor(page: Page){
        this.page = page;

        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.addToCart =  page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.continueShoping = page.locator('[data-test="continue-shopping"]');
        this.cheout = page.locator('[data-test="checkout"]');
        this.cartHavePro = page.locator('[data-test="inventory-item"]');

        // Select all Add to Cart buttons
        this.productAddButtons = page.locator('[data-test^="add-to-cart-"]');
    }


    //click cart buttonm

    async clickCarButton(){
        await expect(this.cartIcon).toBeVisible();
        await this.cartIcon.click()
    }

    async clickAddToCartButton(){
        await expect(this.addToCart).toBeVisible();
        await this.addToCart.click();
    }

    async clickRemoveButoon(){
        await expect(this.removeButton).toBeVisible();
        await this.removeButton.click();
    }

    async clickContinueSoppingButton(){
        await expect(this.continueShoping).toBeVisible();
        await this.continueShoping.click();
    }

    async clickCheckoutButton(){
        await expect(this.cheout).toBeVisible();
        await this.cheout.click();
    }

    // Add any product using its name
    async addProductToCart(productName: string) {
        const addButton = this.page.locator(
            `[data-test="add-to-cart-${productName}"]`
        );

        await expect(addButton).toBeVisible();
        await addButton.click();
    }

}
