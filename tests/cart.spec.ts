import { Page, Locator, Expect, test, expect} from "@playwright/test";
import Login from "../pages/Login";
import Cart from "../pages/Cart";


test.beforeEach(async ({ page }) => {
    const login = new Login(page);

    await login.openLogin();
    await login.enterUsername("standard_user", "secret_sauce");

    //Verify login scccessful
    await expect(page).toHaveURL(
        "https://www.saucedemo.com/inventory.html"
    )

})

test('TC-06 - Verify that the Cart button works correctly', async ({ page }) => {
    const cart = new Cart(page);

    //check the CartIcon
    await expect(cart.cartIcon).toBeVisible()
     await cart.clickCarButton();
    //verify navigate currect page
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    //go baxk
    await expect(cart.cartHavePro).toHaveCount(0);
    // await page.goBack()

    await cart.clickContinueSoppingButton()
    
});
//000000
//Bug
test('TC-07 - Verify checkout with empty cart', async ({ page }) => {
    const cart = new Cart(page);

    await cart.clickCarButton();
    await cart.clickCheckoutButton();
    // await expect(cart.cartHavePro).toBeVisible();
})

// test()

test("TC-08 - Verify Remove button functionality in cart page'", async ({page}) => {
    const cart = new Cart(page);

    await cart.clickAddToCartButton();
    await cart.clickCarButton();
    await expect(cart.cartHavePro).toHaveCount(1);
    await cart.clickContinueSoppingButton();
    await cart.clickRemoveButoon();

    await cart.clickCarButton();
    // await cart.clickRemoveButoon()

})

test('TC-09 - Verify Remove button on All Items page', async ({ page }) => {
    const cart = new Cart(page);

    await cart.clickAddToCartButton();
    await cart.clickCarButton()
    await expect(cart.cartHavePro).toHaveCount(1);
    await cart.clickContinueSoppingButton();
    await cart.clickRemoveButoon()
})

test('TC-10 - Verify adding two products to cart', async ({ page }) => {
    const cart = new Cart(page);

    await cart.addProductToCart("sauce-labs-backpack");
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCarButton()
    await expect(cart.cartHavePro).toHaveCount(2)
    
})

test('TC-11 – Verify that the Checkout button works correctly when products are added to the cart.', async ({ page }) => {
    const cart = new Cart(page);

    await cart.addProductToCart("sauce-labs-backpack");
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCarButton()
    await expect(cart.cartHavePro).toHaveCount(2)
    await cart.clickCheckoutButton();
    
})