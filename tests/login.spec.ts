import{test, expect} from '@playwright/test';
import Login from '../pages/Login';
import { urls } from '../data/dataAssets';


test ("Open SauceDemo Login page", async({page})=>{

    //create login class object
    const login = new Login(page);

    try{
    // Open the Login page 
    await login.openLogin();
       // await page.waitForTimeout(3000); // Wait for 3 seconds

    //Check the URL
    await expect(page).toHaveURL(urls.baseURL);
        // await page.waitForTimeout(3000); // Wait for 3 seconds

     //Enter username
    await login.enterUsername("standard_user","secret_sauce");
        //await page.waitForTimeout(3000); // Wait for 3 seconds

    // //Verify user name is Entered
    // await expect(login.userName).toHaveValue("standard_user");
    //     //await page.waitForTimeout(3000); // Wait for 3 seconds
    
    //check the url after login
    await expect(page).toHaveURL(urls.inventoryURL);
    } catch(error){
        console.error("Login test error:", error);
        throw error
    }

})

test("Verify login with incorrect username and correct password", async({page}) =>{
    //create the login class object
    const login = new Login(page);

    try{
    //Open login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 seconds

    //check the url
    await expect(page).toHaveURL(urls.baseURL);

     //Enter Incorrect username and password
     await login.enterUsername("kalana","standard_user");

     //Verify the have error message
     await expect(login.errorMessage).toBeVisible();

     //Verify error message text
     await expect(login.errorMessage).toContainText("Username and password do not match any user in this service");
    }catch(error){
        console.error("Login test error: ",error);
        throw error
    }
});

test("Verify login with correct username and incorrect password", async({page}) =>{
    //create login class object
    const login = new Login(page);

    try{
    //open Login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 
    
    //Check the Url
    await expect(page).toHaveURL(urls.baseURL);

    //Enter the correct username & incorrect password
    await login.enterUsername("standard_user","x2548xwyQ");

    //Verify the have error message 
    await expect(login.errorMessage).toBeVisible();

    //Verify the error message text
    await expect(login.errorMessage).toContainText("Username and password do not match any user in this service");
    }
    catch(error){
        console.error("Login test error : ",error);
        throw error
    }

})

test("Verify login with correct username and empty password", async({page}) =>{
    //Create login class object
    const login = new Login(page);

    try{
    //open login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 seconds

    //check the url 
    await expect(page).toHaveURL(urls.baseURL);

    //Enter correct username and empty password
    await login.enterUsername("standard_user","");

    //check that the error message is visible
    await expect(login.errorMessage).toBeVisible();
    
    //Verify the error message text
    await expect(login.errorMessage).toContainText("Password is required");
    }catch(error){
        console.error("Login test error :", error);
        throw error
    }

})

//check the login with empty username & correct password
test("Verify login with empty username and correct password", async({page}) => {
    //Create login class object
    const login = new Login(page);

    try{
    //open login page
    await login.openLogin();

    //check the url
    await expect(page).toHaveURL(urls.baseURL);

    //enter empty username and correct password
    await login.enterUsername("","secret_sauce");

    //Verify the have error message
    await expect(login.errorMessage).toBeVisible()

    //Verify error message text
    await expect(login.errorMessage).toContainText("Username is required")
    }catch(error){
        console.error("Login page error: ",error);
        throw error
    }
})

//check the login with both are empty username and password
test("Verify login with empty username and empty password", async({page}) =>{
    //Create login class object
    const login = new Login(page)
    
    try{
    //Open login page
    await login.openLogin();

    await expect(page).toHaveURL(urls.baseURL);

    //Enter empty username and password
    await login.enterUsername("","");

    //Verify have the error message
    await expect(login.errorMessage).toBeVisible();

    //Verify error message contains text
    await expect(login.errorMessage).toContainText("Username is required")
    }catch(error){
        console.error("Login page error :",error);
        throw error
    }

})