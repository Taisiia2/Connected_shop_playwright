import { expect, test } from "@playwright/test";


test.describe('Search function', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://theconnectedshop.com/')
    });
    //    find search element
    test('search exist product', async ({ page }) => {
        const searchLink = page.locator('.Header__SecondaryNav .Text--subdued[data-action="toggle-search"]');
        const searchInput = page.locator('input[name="q"]');
        const searchTitle = page.locator('h2.ProductItem__Title a:has-text("smart door lock")').nth(0);
        const searchResult = page.locator('span.Heading.Text--subdued.u-h7').nth(0);
        const searchNotFound = page.locator("//p[text()='No results could be found']").first();
        await expect(searchLink).toBeTruthy();
        await expect(searchLink).toBeVisible();
        await expect(searchLink).toHaveAttribute('href', '/search');
        await expect(searchLink).toHaveAttribute('data-action', 'toggle-search');
        await searchLink.click();
        await expect(searchInput).toBeTruthy();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toBeFocused();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
          //search product (world "results") positive case
        await searchInput.fill('smart door lock')
        await expect(searchInput).toHaveValue('smart door lock');
        await expect(searchTitle).toContainText('Smart Door Lock');
        await expect(searchResult).toContainText('results');
        // //search product (world "results") negative case
        await searchInput.fill('abracadabra');
        await expect(searchInput).toHaveValue('abracadabra');
        await expect(searchNotFound).toContainText('No results could be found');

    })
    test('', async ({ page }) => {
        
     })

});

