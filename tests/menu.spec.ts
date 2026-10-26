import { test, expect } from '@playwright/test';
import { urls } from '../data/dataAssets';
import Menu from '../pages/Menu';
// import Login from '../pages/Login';

//menu page array 
const menuPages = [
    { 
        name: 'Inventory Page', 
        url: urls.inventoryURL 
    },
    { 
        name: 'Lazy Load Page', 
        url: urls.dynamicCatalogLazyLoadURL 
    },
    { 
        name: 'Spinner Page', 
        url: urls.dynamicCatalogSpinnerURL 
    },
    { 
        name: 'Slider Page', 
        url: urls.dynamicCatalogSliderURL 
    },
];

//link array
const catalogLinks = [
    { 
        name: 'Lazy Load', 
        url: urls.dynamicCatalogLazyLoadURL, 
        click: (menu: Menu) => menu.clickLazyLoadButton()
    },
    { 
        name: 'Spinner', 
        url: urls.dynamicCatalogSpinnerURL, 
        click: (menu: Menu) => menu.clickSpinnerButton() 
    },
    { 
        name: 'Slider', 
        url: urls.dynamicCatalogSliderURL, 
        click: (menu: Menu) => menu.clickSliderButton() 
    },
];

//for loop
for (const menuPage of menuPages) {
    test.describe(`Menu on ${menuPage.name}`, () => {


        test.beforeEach(async ({ page }) => {
            await page.goto(menuPage.url);
            await expect(page).toHaveURL(menuPage.url);
        });


        test('Verify menu opens and closes', async ({ page }) => {
            const menu = new Menu(page);

            await expect(menu.menuButton).toBeVisible();
            await menu.clickMenuButton();
            await expect(menu.crossButton).toBeVisible();
            await menu.clickCrossButton();
            await expect(menu.crossButton).toBeHidden();
        });

        test('Verify menu links are visible', async ({ page }) => {
            const menu = new Menu(page);
            await menu.clickMenuButton();

            await expect(menu.allItems).toBeVisible();
            await expect(menu.dynamicCatalog).toBeVisible();
            await expect(menu.about).toBeVisible();
            await expect(menu.logout).toBeVisible();
            await expect(menu.resetAppState).toBeVisible();
            await expect(menu.submenuChevron).toBeVisible();
        });

        test('Verify Dynamic Catalog submenu expands', async ({ page }) => {
            const menu = new Menu(page);
            await menu.clickMenuButton();
            await menu.clickSubMenuChevron();

            await expect(menu.lazyLoad).toBeVisible();
            await expect(menu.spinner).toBeVisible();
            await expect(menu.slider).toBeVisible();
        });

        test('Verify All Items navigates to Inventory', async ({ page }) => {
            const menu = new Menu(page);
            await menu.clickMenuButton();
            await menu.clickAllItemsButton();

            await expect(page).toHaveURL(urls.inventoryURL);
        });

        for (const link of catalogLinks) {
            test(`Verify navigation to ${link.name}`, async ({ page }) => {
                const menu = new Menu(page);
                await menu.clickMenuButton();
                //await menu.clickSuMenuChevron();
                await menu.clickSubMenuChevron();
                await link.click(menu);

                await expect(page).toHaveURL(link.url);
            });
        }

        test('Verify About navigation', async ({ page }) => {
            const menu = new Menu(page);
            await menu.clickMenuButton();
            await menu.clickAboutSidebarLink();

            await expect(page).toHaveURL(urls.aboutURL);
        });

        test('Verify logout', async ({ page }) => {
            const menu = new Menu(page);
            await menu.clickMenuButton();
            await menu.clickLogoutButton();

            // awit expect(page).toHaveURL(urls.baseURL);
            await expect(page).toHaveURL(urls.baseURL);
        });
    });
}
