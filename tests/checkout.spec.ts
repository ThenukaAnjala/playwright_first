import { Page, test, expect } from "@playwright/test";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

// Login before each test case
test.beforeEach(async ({ page }) => {
    const login = new Login(page);

    await login.openLogin();
    await login.enterUsername("standard_user", "secret_sauce");

    // Verify login successful
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("TC12 - Verify First Name, Last Name, and ZIP Code fields in Checkout Information", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCarButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")

    //Enter first name
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "85779");
    await checkout.clickContinueButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    await checkout.clickFinishButton()

});

test("TC13 - Verify cancel checkout before finishing order", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCarButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")

    //Enter first name
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "85779");
    await checkout.clickContinueButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    await checkout.clickCancelButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

})