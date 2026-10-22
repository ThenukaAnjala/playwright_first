import {Page, Locator} from "@playwright/test";//import page library
//Create menu class
export default class Menu{
    //declare page property
    readonly page: Page;
    readonly menuButton : Locator;
    // readonly itemlist : Locator;
    readonly allItems : Locator;
    readonly dynamicCatolog : Locator;
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
        this.dynamicCatolog = page.locator("#dynamic_catalog_sidebar_link");
        this.lazyLoad = page.locator("#dynamic_catalog_lazy_load_link");
        this.spinner = page.locator("#dynamic_catalog_spinner_link");
        this.slider = page.locator("#dynamic_catalog_slider_link");
        // this.about = page.locator("#about_sidebar_link");
        this.about = page.locator('[data-test="about-sidebar-link"]')
        this.logout = page.locator("#logout_sidebar_link");
        this.resetAppState = page.locator("#reset_sidebar_link");
        this.submenuChevron = page.locator('span.submenu-chevron');
        this.crossButton = page.locator('button:has-text("Close Menu")')
        
    }

    // async openMenu(){
    //     await this.page.goto("https://www.saucedemo.com/inventory.html");
    // }

    async clickMenuButton(){
        await this.menuButton.click();
    }

    async clickSubMenuChevron(){
        await this.submenuChevron.click();
    }

    async clickCrossButton(){
        await this.crossButton.click();
    }

    async clickAllItemsButton(){
        await this.allItems.click();
    }

    async clickLazLoadButton(){
        await this.lazyLoad.click();
    }

    async clickSpinnerButton(){
        await this.spinner.click();
    }

    async clickSliderButton(){
        await this.slider.click();
    }

    async clickAboutSidebarLink(){
        await this.about.click();
    }

    async clickLogoutButton(){
        await this.logout.click();
    }

    // async clickResetAppState(){
    //     await this.resetAppState.click();
    // }

}