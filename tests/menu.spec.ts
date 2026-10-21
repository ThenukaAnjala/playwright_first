import {test, expect} from '@playwright/test';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

//Verify the menu button visibility and click functionality
test ("Verify menubutton visibility and click functionality", async({page}) => {
    //Create login class object
    const login = new Login(page);
    //Create munu class object
    const menu = new Menu(page);

    try{
    //login
    await login.openLogin();
    await login.enterUsername("standard_user", "secret_sauce");

    // //Confirm login completed before checking the menu
    // await expect(page).toHaveURL(/inventory\.html/);
    //check visibility of menu button
    await expect(menu.menuButton).toBeVisible();

    //click the menu button
    await menu.clickMenuButton();

    //Visible cross button
    await expect(menu.crossButton).toBeVisible()
    //Check cross button
    await menu.clickCrossButton();

    // //Visibel menu drower
    await menu.clickMenuButton();
    //Ckeck menu tabs
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatolog).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();


    //check submenu button
    await expect(menu.submenuChevron).toBeVisible();

        //Click submenu Chevron button
    await menu.clickSubMenuChevron();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    //Check navigation
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");
    
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSliderButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html")

    





    //open the dynamic catolog lazy loading
    await page.goto("https://www.saucedemo.com/dynamic-catalog-lazy-load.html")

    //check visibility of menu button
    await expect(menu.menuButton).toBeVisible();

    //click the menu button
    await menu.clickMenuButton();
    await expect(menu.crossButton).toBeVisible();
    await menu.clickCrossButton();

    
    //check menu tabs
    await menu.clickMenuButton();
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatolog).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();


    //check submenu button
    await expect(menu.submenuChevron).toBeVisible();
    
    //Click submenu Chevron button
    await menu.clickSubMenuChevron();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    //Check navigation
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");
    
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSliderButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html")






    //open the catalog spinner
    await page.goto("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    //check the button visibility
    await expect(menu.menuButton).toBeVisible();
    //click the menu button
    await menu.clickMenuButton();
    await menu.clickCrossButton();

    
    //check the menu all items
    await menu.clickAboutButton();
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatolog).toBeVisible();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.logout).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    //click Submenu Chevron
    await menu.clickSubMenuChevron();
    //Check Visible Sub menu tab
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();

    //Check navigation
    await menu.clickLazLoadButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-lazy-load.html");
    
    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSpinnerButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-spinner.html");

    await menu.clickMenuButton();
    await menu.clickSubMenuChevron();

    await menu.clickSliderButton()
    await expect(page).toHaveURL("https://www.saucedemo.com/dynamic-catalog-slider.html")






    
    //open the slider page
    await page.goto("https://www.saucedemo.com/dynamic-catalog-slider.html");

    //check the button visibility
    await expect(menu.menuButton).toBeVisible();

    //click the menu button
    await menu.clickMenuButton();

    //check the menu all items 
    await expect(menu.allItems).toBeVisible();
    await expect(menu.dynamicCatolog).toBeVisible();
    await expect(menu.submenuChevron).toBeVisible();
    await expect(menu.about).toBeVisible();
    await expect(menu.resetAppState).toBeVisible();

    //click sub menu chevron
    await menu.clickSubMenuChevron();

    //check visibility sub-menu tab
    await expect(menu.lazyLoad).toBeVisible();
    await expect(menu.spinner).toBeVisible();
    await expect(menu.slider).toBeVisible();
    }catch(error){
        console.error("Test menu error :",error);
        throw error
    }


})

