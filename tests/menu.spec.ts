import { urls } from "../data/dataAssets";

import { test, expect } from '@playwright/test';
import Menu from '../pages/Menu';
// import Login from '../pages/Login';

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



test("TC01 - Verify menu functionality on Inventory Page", async ({ page }) => {

    const menu = new Menu(page);

    // Check menu button visibility
    await expect(menu.menuButton).toBeVisible();

    // Open menu
    await menu.clickMenuButton();

    // Check close button
    await expect(menu.crossButton).toBeVisible();
    await menu.clickCrossButton();

    // Open menu again
    await menu.clickMenuButton();

    // Check menu tabs
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatalog).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    // Check submenu chevron
    await expect(menu.submenuChevron).toBeVisible();

    // Expand submenu
    await menu.clickSubMenuChevron();

    // Verify submenu items
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    // Navigate to Lazy Load page
    await menu.clickLazyLoadButton();
    await expect(page).toHaveURL(urls.dynamicCatalogLazyLoadURL);

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSpinnerURL);

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSliderURL);

    //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL(urls.aboutURL);

    //Back to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL(urls.baseURL);
});



test("TC02 - Verify menu functionality on Lazy Load Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Lazy Load page
    await page.goto(urls.dynamicCatalogLazyLoadURL);

    // Check menu button visibility
    await expect(menu.menuButton).toBeVisible();

    // Open menu
    await menu.clickMenuButton();

    // Check close button
    await expect(menu.crossButton).toBeVisible();
    await menu.clickCrossButton();

    // Open menu again
    await menu.clickMenuButton();

    // Verify menu tabs
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatalog).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    // Check submenu chevron
    await expect(menu.submenuChevron).toBeVisible();

    // Expand submenu
    await menu.clickSubMenuChevron();

    // Verify submenu items
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    // Navigate to Inventory page
    await menu.clickAllItemsButton();
    await expect(page).toHaveURL(urls.inventoryURL);

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSpinnerURL);

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSliderURL);

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL(urls.aboutURL);

    //Back to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL(urls.baseURL);
});



test("TC03 - Verify menu functionality on Spinner Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Spinner page
    await page.goto(urls.dynamicCatalogSpinnerURL);

    // Check menu button visibility
    await expect(menu.menuButton).toBeVisible();

    // Open menu
    await menu.clickMenuButton();

    // Check close button
    await expect(menu.crossButton).toBeVisible();
    await menu.clickCrossButton();

    // Open menu again
    await menu.clickMenuButton();

    // Verify menu tabs
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatalog).toBeVisible();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    // Expand submenu
    await menu.clickSubMenuChevron();

    // Verify submenu items
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    // Navigate to Inventory page
    await menu.clickAllItemsButton();
    await expect(page).toHaveURL(urls.inventoryURL);

    // Navigate to Lazy Load page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickLazyLoadButton();
    await expect(page).toHaveURL(urls.dynamicCatalogLazyLoadURL);

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSliderURL);

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL(urls.aboutURL);

    //Back to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL(urls.baseURL);
});



test("TC04 - Verify menu functionality on Slider Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Slider page
    await page.goto(urls.dynamicCatalogSliderURL);

    // Check menu button visibility
    // await expect(menu.menuButton).toBeVisible();

    // Open menu
    await menu.clickMenuButton();

    // Check close button
    // await expect(menu.crossButton).toBeVisible();
    await menu.clickCrossButton();

    // Open menu again
    await menu.clickMenuButton();

    // Verify menu tabs
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatalog).toBeVisible();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    // Expand submenu
    await menu.clickSubMenuChevron();

    // Verify submenu items
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    // Navigate to Inventory page
    await menu.clickAllItemsButton();
    await expect(page).toHaveURL(urls.inventoryURL);

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL(urls.dynamicCatalogSpinnerURL);

    // Navigate to Lazy Load page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickLazyLoadButton();
    await expect(page).toHaveURL(urls.dynamicCatalogLazyLoadURL);

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL(urls.aboutURL);

    //Back to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL(urls.baseURL);
});
