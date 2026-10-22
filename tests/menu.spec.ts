
import { test, expect } from '@playwright/test';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

// Login before each test case
test.beforeEach(async ({ page }) => {
    const login = new Login(page);

    await login.openLogin();
    await login.enterUsername("standard_user", "secret_sauce");

    // Verify login successful
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});



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
    await expect(menu.dynamicCatolog).toBeVisible();
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
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html");

    //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL("https://saucelabs.com/");

    //Bcck to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});



test("TC02 - Verify menu functionality on Lazy Load Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Lazy Load page
    await page.goto("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");

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
    await expect(menu.dynamicCatolog).toBeVisible();
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
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html");

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL("https://saucelabs.com/");

    //Bcck to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});



test("TC03 - Verify menu functionality on Spinner Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Spinner page
    await page.goto("https://www.saucedemo.com/dynamic-catalog-spinner.html");

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
    await expect(menu.dynamicCatolog).toBeVisible();
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
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Navigate to Lazy Load page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");

    // Navigate to Slider page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSliderButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html");

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL("https://saucelabs.com/");

    //Bcck to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});



test("TC04 - Verify menu functionality on Slider Page", async ({ page }) => {

    const menu = new Menu(page);

    // Open Slider page
    await page.goto("https://www.saucedemo.com/dynamic-catalog-slider.html");

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
    await expect(menu.dynamicCatolog).toBeVisible();
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
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    // Navigate to Spinner page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    // Navigate to Lazy Load page
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");

        //Navigate to about page
    await menu.clickMenuButton();
    await menu.clickAboutSidebarLink();
    await expect(page).toHaveURL("https://saucelabs.com/");

    //Bcck to page
    await page.goBack()
    // await expect(page).toHaveURL()

    //Check Logout
    await menu.clickMenuButton();
    await menu.clickLogoutButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});
