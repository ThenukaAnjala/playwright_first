import {Page, Locator, expect} from '@playwright/test';

export default class Cart{
    //Declare page properties
    readonly page : Page;
    readonly cartIcon : Locator;
    readonly addToCart : Locator;
    readonly removeButton : Locator;
    readonly continueShopping : Locator;
    readonly checkout : Locator;
    readonly cartHavePro : Locator;
    readonly productAddButtons: Locator;




    constructor(page: Page){
        this.page = page;

        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.addToCart =  page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.continueShopping = page.locator('[data-test="continue-shopping"]');
        this.checkout = page.locator('[data-test="checkout"]');
        this.cartHavePro = page.locator('[data-test="inventory-item"]');

        // Select all Add to Cart buttons
        this.productAddButtons = page.locator('[data-test^="add-to-cart-"]');
    }


    //click cart button

    async clickCartButton(){
        await expect(this.cartIcon).toBeVisible();
        await this.cartIcon.click()
    }

    async clickAddToCartButton(){
        await expect(this.addToCart).toBeVisible();
        await this.addToCart.click();
    }

    async clickRemoveButton(){
        await expect(this.removeButton).toBeVisible();
        await this.removeButton.click();
    }

    async clickContinueShoppingButton(){
        await expect(this.continueShopping).toBeVisible();
        await this.continueShopping.click();
    }

    async clickCheckoutButton(){
        await expect(this.checkout).toBeVisible();
        await this.checkout.click();
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
