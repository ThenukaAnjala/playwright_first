import{test, expect} from '@playwright/test';
import Login from '../pages/Login';


test ("Open SauceDemo Login page", async({page})=>{

    //create loginclass object
    const login = new Login(page);

    try{
    // Open the Login page 
    await login.openLogin();
       // await page.waitForTimeout(3000); // Wait for 3 seconds

    //Check the URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");
        // await page.waitForTimeout(3000); // Wait for 3 seconds

     //Enter username
    await login.enterUsername("standard_user","secret_sauce");
        //await page.waitForTimeout(3000); // Wait for 3 seconds

    // //Verify user name is Entered
    // await expect(login.userName).toHaveValue("standard_user");
    //     //await page.waitForTimeout(3000); // Wait for 3 seconds
    
    //check the url after login
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    } catch(error){
        console.error("Login test error:", error);
        throw error
    }

})

test("Verify login incurrect username and currect password", async({page}) =>{
    //crate the login class object
    const login = new Login(page);

    try{
    //Open login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 seconds

    //check the url
    await expect(page).toHaveURL("https://www.saucedemo.com/");

     //Enter Incurrect username and password
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

test("Verify login with currect username and incurrect password", async({page}) =>{
    //create login class object
    const login = new Login(page);

    try{
    //open Login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 
    
    //Check the Url
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    //Enter the currect username & incurrect password
    await login.enterUsername("standard_user","x2548xwyQ");

    //Verify the have error message 
    await expect(login.errorMessage).toBeVisible();

    //Verify the error message context
    await expect(login.errorMessage).toContainText("Username and password do not match any user in this service");
    }
    catch(error){
        console.error("Login test error : ",error);
        throw error
    }

})

test("Verify login with currect username and emty password", async({page}) =>{
    //Create login class object
    const login = new Login(page);

    try{
    //open login page
    await login.openLogin();
        // await page.waitForTimeout(3000); // Wait for 3 seconds

    //check the url 
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    //Enter currect username and emty password
    await login.enterUsername("standard_user","");

    //check error message are vicible 
    await expect(login.errorMessage).toBeVisible();
    
    //Verify the error message contex
    await expect(login.errorMessage).toContainText("Password is required");
    }catch(error){
        console.error("Login test error :", error);
        throw error
    }

})

//check the login with emty username & currect password
test("Verify login with emty username and currect password", async({page}) => {
    //Create login class object
    const login = new Login(page);

    try{
    //open login page
    await login.openLogin();

    //check the url
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    //enter emty username and currect password
    await login.enterUsername("","secret_sauce");

    //Verify the have error message
    await expect(login.errorMessage).toBeVisible()

    //Verify error message context
    await expect(login.errorMessage).toContainText("Username is required")
    }catch(error){
        console.error("Login page error: ",error);
        throw error
    }
})

//check the login with both are emmty username and password
test("Verify login with emty username and emty password", async({page}) =>{
    //Create login class object
    const login = new Login(page)
    
    try{
    //Open login page
    await login.openLogin();

    await expect(page).toHaveURL("https://www.saucedemo.com/");

    //Enter emty username and password
    await login.enterUsername("","");

    //Verify have the error message
    await expect(login.errorMessage).toBeVisible();

    //Verify error message contan text
    await expect(login.errorMessage).toContainText("Username is required")
    }catch(error){
        console.error("Login page error :",error);
        throw error
    }

})