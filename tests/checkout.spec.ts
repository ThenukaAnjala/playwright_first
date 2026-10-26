import { urls } from "../data/dataAssets";
import { Page, test, expect } from "@playwright/test";
// import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

// Login before each test case
test.beforeEach(async ({ page }) => {
    // const login = new Login(page);

    await page.goto(urls.inventoryURL);
    // await login.enterUsername("standard_user", "secret_sauce");

    //Verify login successful
    await expect(page).toHaveURL(
        urls.inventoryURL
    )

})

test("TC12 - Verify First Name, Last Name, and ZIP Code fields in Checkout Information", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)

    //Enter first name
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "85779");
    await checkout.clickContinueButton();
    await expect(page).toHaveURL(urls.checkoutStepTwoURL);
    await checkout.clickFinishButton()

});

test("TC13 - Verify cancel checkout before finishing order", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)

    //Enter first name
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "85779");
    await checkout.clickContinueButton();
    await expect(page).toHaveURL(urls.checkoutStepTwoURL);
    await checkout.clickCancelButton();
    await expect(page).toHaveURL(urls.inventoryURL);

})

test("TC14 - Verify checkout with Last Name and ZIP Code but without First Name", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("", "Kulathunga", "85779");
    await checkout.clickContinueButton()
    await expect(checkout.errorMessage).toContainText(" First Name is required")
});

test("TC15 - Verify checkout with First Name and ZIP Code but without Last Name", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "", "85779");
    await checkout.clickContinueButton()
    await expect(checkout.errorMessage).toContainText("Last Name is required")
});

test("TC16 - Verify checkout with First Name and Last Name but without Zip code", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "");
    await checkout.clickContinueButton()
    await expect(checkout.errorMessage).toContainText("Postal Code is required")
});

test("TC17 - Verify checkout with all fields empty", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("", "", "");
    await checkout.clickContinueButton()
    await expect(checkout.errorMessage).toContainText("First Name is required")
})

test("TC18 - Verify checkout with only spaces in First Name", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("      ", "Kulathunga", "85779");
    await checkout.clickContinueButton()
    await checkout.clickFinishButton()


})

test("TC19 - Verify checkout with only spaces in Last Name", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "    ", "85779");
    await checkout.clickContinueButton()
    await checkout.clickFinishButton()


})

test("TC20 - Verify checkout with only spaces in Zip Code", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "     ");
    await checkout.clickContinueButton()
    await checkout.clickFinishButton()


})

test("TC21 - Verify checkout with only spaces in all fields", async ({ page }) => {

    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack")
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton()
    await cart.clickCheckoutButton()
    await expect(page).toHaveURL(urls.checkoutStepOneURL)
    await checkout.enterFirstNameLastNameAndZipCode("    ", "      ", "     ");
    await checkout.clickContinueButton()
    await checkout.clickFinishButton()

})


test("TC22 Total Price and product list", async ({ page }) => {
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await cart.addProductToCart("sauce-labs-backpack");
    await cart.addProductToCart("sauce-labs-bike-light");
    await cart.clickCartButton();
    await cart.clickCheckoutButton();

    await expect(page).toHaveURL(urls.checkoutStepOneURL);

    await checkout.enterFirstNameLastNameAndZipCode("Tiran", "Kulathunga", "85779");
    await checkout.clickContinueButton();

    await expect(page).toHaveURL(urls.checkoutStepTwoURL);

    const expectedTotal = await checkout.totalPrice();

    await expect(checkout.total).toHaveText(
        `Total: $${expectedTotal.toFixed(2)}`
    );
});