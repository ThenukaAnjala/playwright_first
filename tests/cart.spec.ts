import { urls } from "../data/dataAssets";
import { Page, Locator, Expect, test, expect} from "@playwright/test";
import Login from "../pages/Login";
import Cart from "../pages/Cart";


test.beforeEach(async ({ page }) => {
    // const login = new Login(page);

    await page.goto(urls.inventoryURL);
    // await login.enterUsername("standard_user", "secret_sauce");

    //Verify login successful
    await expect(page).toHaveURL(
        urls.inventoryURL
    )

})

test('TC-06 - Verify that the Cart button works correctly', async ({ page }) => {
    const cart = new Cart(page);

    //check the CartIcon
    await expect(cart.cartIcon).toBeVisible()
     await cart.clickCartButton();
    //verify navigate correct page
    await expect(page).toHaveURL(urls.cartURL);
    //go back
    await expect(cart.cartHavePro).toHaveCount(0);
    // await page.goBack()

    await cart.clickContinueShoppingButton()
    
});
//000000
//Bug
test('TC-07 - Verify checkout with empty cart', async ({ page }) => {
    const cart = new Cart(page);

    await cart.clickCartButton();
    await cart.clickCheckoutButton();
    // await expect(cart.cartHavePro).toBeVisible();
})

// test()

test("TC-08 - Verify Remove button functionality in cart page'", async ({page}) => {
    const cart = new Cart(page);

    await cart.clickAddToCartButton();
    await cart.clickCartButton();
    await expect(cart.cartHavePro).toHaveCount(1);
    await cart.clickContinueShoppingButton();
    await cart.clickRemoveButton();

    await cart.clickCartButton();
    // await cart.clickRemoveButton()

})

test('TC-09 - Verify Remove button on All Items page', async ({ page }) => {
    const cart = new Cart(page);

    await cart.clickAddToCartButton();
    await cart.clickCartButton()
    await expect(cart.cartHavePro).toHaveCount(1);
    await cart.clickContinueShoppingButton();
    await cart.clickRemoveButton()
})

test('TC-10 - Verify adding two products to cart', async ({ page }) => {
    const cart = new Cart(page);

    await cart.addProductToCart("sauce-labs-backpack");
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await expect(cart.cartHavePro).toHaveCount(2)
    
})

test('TC-11 – Verify that the Checkout button works correctly when products are added to the cart.', async ({ page }) => {
    const cart = new Cart(page);

    await cart.addProductToCart("sauce-labs-backpack");
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await expect(cart.cartHavePro).toHaveCount(2)
    await cart.clickCheckoutButton();
    
})