import { urls } from "../data/dataAssets";
import { test as setup ,expect } from '@playwright/test';

//Create authentication setup
setup("Authenticate" , async({page}) => {
    //Navigate to login website
    await page.goto(urls.baseURL);

    //Enter username and password
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    //click on login button
    await page.click("#login-button");

    //Verify login is successful
    await expect(page).toHaveURL(urls.inventoryURL)

    //save auth state to storage state
    await page.context().storageState({
        path: "playwright/.auth/user.json"
    })
})
