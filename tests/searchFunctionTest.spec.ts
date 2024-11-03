import { expect, test } from "@playwright/test";
import exp from "constants";

test.describe('Search function', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://theconnectedshop.com/')
    });
    //    find search element
    test('search exist product', async ({ page }) => {
        const searchLink = page.locator('.Header__SecondaryNav .Text--subdued[data-action="toggle-search"]');
        const searchInput = page.locator('input[name="q"]');
        const searchTitle = page.locator('h2.ProductItem__Title a:has-text("smart door lock")');
        const searchResult = page.locator('span.Heading .Text--subdued span:has-text("results")')
        await expect(searchLink).toBeTruthy();
        await expect(searchLink).toBeVisible();
        await expect(searchLink).toHaveAttribute('href', '/search');
        await expect(searchLink).toHaveAttribute('data-action', 'toggle-search');
        await searchLink.click();
        await expect(searchInput).toBeTruthy();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toBeFocused();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        //    fill text
        await searchInput.fill('smart door lock')
        await expect(searchInput).toHaveValue('smart door lock');
        
    })
    test('', async ({ page }) => {
        
     })

});

