
import { Page, Locator, expect } from "@playwright/test";

// Create filter class
export default class Filter {

    // Declare page properties
    readonly page: Page;
    readonly filterIcon: Locator;
    readonly nameAtoZ: Locator;
    readonly nameZtoA: Locator;
    readonly priceLtoH: Locator;
    readonly priceHtoL: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {
        this.page = page;

        this.filterIcon = page.locator('[data-test="product-sort-container"]');

        this.nameAtoZ = page.locator('option[value="az"]');
        this.nameZtoA = page.locator('option[value="za"]');
        this.priceLtoH = page.locator('option[value="lohi"]');
        this.priceHtoL = page.locator('option[value="hilo"]');

        // Get all product names
        this.productName = page.locator(".inventory_item_name");

        // Get all product prices
        this.productPrice = page.locator(".inventory_item_price");
    }

    // async clickFilterButton(){
    //     await expect(this.filterIcon).toBeVisible()
    //     await this.filterIcon.click()
    // }

    // Select Name A to Z
    async clickNameAtoZ() {
        await this.filterIcon.selectOption("az");
        await expect(this.filterIcon).toHaveValue("az");
    }

    // Select Name Z to A
    async clickNameZtoA() {
        await this.filterIcon.selectOption("za");
        await expect(this.filterIcon).toHaveValue("za");
    }

    // Select Price Low to High
    async clickPriceLtoH() {
        await this.filterIcon.selectOption("lohi");
        await expect(this.filterIcon).toHaveValue("lohi");
    }

    // Select Price High to Low
    async clickPriceHtoL() {
        await this.filterIcon.selectOption("hilo");
        await expect(this.filterIcon).toHaveValue("hilo");
    }

    // Sort name alphabetically A to Z
    async verifyNameAtoZ() {
        await expect(this.productName).toHaveCount(6);

        const names = await this.productName.allTextContents();

        const expectedNames = [...names].sort((a, b) =>
            a.localeCompare(b)
        );

        await expect(this.productName).toHaveText(expectedNames);
    }

    // Sort name alphabetically Z to A
    async verifyNameZtoA() {
        await expect(this.productName).toHaveCount(6);

        const names = await this.productName.allTextContents();

        const expectedNames = [...names].sort((a, b) =>
            b.localeCompare(a)
        );

        await expect(this.productName).toHaveText(expectedNames);
    }

    // async verifyPriceLToH(){
    //     await expect.poll(async () =>{
    //         const prices =(await this.productPrice.allTextContents())
    //         .map(p => Number(p.replace("$","")));

    //         return prices.length > 1 && prices.every((price, i) =>
    //             i == 0 || price >= prices[i - 1]
    //         );
    //     }).toBe(true)
    // }

    // Verify Price Low to High
    async verifyPriceLToH() {
        await expect(this.productPrice).toHaveCount(6);

        const price = await this.productPrice.allTextContents();

        const prices = price.map(p =>
            Number(p.replace("$", "").trim())
        );

        const expectedPrices = [...prices].sort((a, b) => a - b);

        console.log("Actual Prices:", prices);
        console.log("Expected Prices:", expectedPrices);

        expect(prices.every(Number.isFinite)).toBe(true);
        expect(prices).toEqual(expectedPrices);
    }

    // Verify Price High to Low
    async verifyPriceHtoL() {
        await expect(this.productPrice).toHaveCount(6);

        const price = await this.productPrice.allTextContents();

        const prices = price.map(p =>
            Number(p.replace("$", "").trim())
        );

        const expectedPrices = [...prices].sort((a, b) => b - a);

        console.log("Actual Prices:", prices);
        console.log("Expected Prices:", expectedPrices);

        expect(prices.every(Number.isFinite)).toBe(true);
        expect(prices).toEqual(expectedPrices);
    }
}
