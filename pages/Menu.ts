import {Page, Locator, expect} from "@playwright/test";//import page library
//Create menu class
export default class Menu{
    //declare page property
    readonly page: Page;
    readonly menuButton : Locator;
    // readonly itemlist : Locator;
    readonly allItems : Locator;
    readonly dynamicCatalog : Locator;
    readonly lazyLoad : Locator;
    readonly spinner : Locator;
    readonly slider : Locator;
    readonly about :Locator;
    readonly logout : Locator;
    readonly resetAppState : Locator;
    readonly submenuChevron : Locator;
    readonly crossButton : Locator;   



    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator("#react-burger-menu-btn");
        // this.itemlist = page.locator("#bm-item-list");
        // this.allItems = page.locator("#dynamic_catalog_sidebar_link");
        this.allItems = page.locator('[data-test="inventory-sidebar-link"]')
        this.dynamicCatalog = page.locator("#dynamic_catalog_sidebar_link");
        this.lazyLoad = page.locator("#dynamic_catalog_lazy_load_link");
        this.spinner = page.locator("#dynamic_catalog_spinner_link");
        this.slider = page.locator("#dynamic_catalog_slider_link");
        // this.about = page.locator("#about_sidebar_link");
        this.about = page.locator('[data-test="about-sidebar-link"]')
        this.logout = page.locator("#logout_sidebar_link");
        this.resetAppState = page.locator("#reset_sidebar_link");
        this.submenuChevron = page.locator('[data-test="dynamic-catalog-sidebar-link"]');
        // await 
        this.crossButton = page.locator('button:has-text("Close Menu")')
        
    }

    // async openMenu(){
    //     await this.page.goto("https://www.saucedemo.com/inventory.html");
    // }

    async clickMenuButton(){
        await expect(this.menuButton).toBeVisible({timeout:1000});
        await this.menuButton.click();
        
    }

    async clickSubMenuChevron(){
        await expect(this.submenuChevron).toBeVisible({timeout:1000});
        await this.submenuChevron.click();
    }

    async clickCrossButton(){
        await expect(this.crossButton).toBeVisible({timeout:1000});
        await this.crossButton.click();
    }

    async clickAllItemsButton(){
        await expect(this.allItems).toBeVisible({timeout:1000});
        await this.allItems.click();
    }

    async clickLazyLoadButton(){
        await expect(this.lazyLoad).toBeVisible({timeout:1000});
        await this.lazyLoad.click();
    }

    async clickSpinnerButton(){
        await expect(this.spinner).toBeVisible({timeout:1000});
        await this.spinner.click();
    }

    async clickSliderButton(){
        await expect(this.slider).toBeVisible({timeout:1000});
        await this.slider.click();
    }

    async clickAboutSidebarLink(){
        await expect(this.about).toBeVisible({timeout:1000});
        await this.about.click();
    }

    async clickLogoutButton(){
        await expect(this.logout).toBeVisible({timeout:1000});
        await this.logout.click();
    }

    // async clickResetAppState(){
    //     await this.resetAppState.click();
    // }

}