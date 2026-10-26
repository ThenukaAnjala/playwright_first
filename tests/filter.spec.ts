import { urls } from "../data/dataAssets";

import { test, expect } from "@playwright/test";
// import Login from "../pages/Login";
import Filter from "../pages/Filter";

test.beforeEach(async ({ page }) => {
    // const login = new Login(page);

    await page.goto(urls.inventoryURL);
    // await login.enterUsername("standard_user", "secret_sauce");

    //Verify login successful
    await expect(page).toHaveURL(
        urls.inventoryURL
    )

})
test("TC05 - Verify filter Function", async ({ page }) => {

    const filter = new Filter(page);

    // await filter.clickFilterButton()

    // Check filter dropdown visibility
    await expect(filter.filterIcon).toBeVisible();

    // Check filter options
    await expect(filter.nameAtoZ).toHaveText("Name (A to Z)");
    await expect(filter.nameZtoA).toHaveText("Name (Z to A)");
    await expect(filter.priceLtoH).toHaveText("Price (low to high)");
    await expect(filter.priceHtoL).toHaveText("Price (high to low)");

    // Verify product count
    await expect(filter.productName).toHaveCount(6);
    await expect(filter.productPrice).toHaveCount(6);

    // Check Name Z to A
    await filter.clickNameZtoA();
    await filter.verifyNameZtoA();

    // Check Name A to Z
    await filter.clickNameAtoZ();
    await filter.verifyNameAtoZ();

    // Check Price Low to High
    await filter.clickPriceLtoH();
    await filter.verifyPriceLToH();

    // Check Price High to Low
    await filter.clickPriceHtoL();
    await filter.verifyPriceHtoL();

});
