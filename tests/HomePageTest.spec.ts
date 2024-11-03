import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://theconnectedshop.com/')
});

test('Check open home page, URL, title', async ({ page }) => {
    // open site
    await page.goto('https://theconnectedshop.com/');
    // check url
    await expect(page).toHaveURL('https://theconnectedshop.com/');
    // check title
    await expect(page).toHaveTitle(
        "The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office"
    );
 })

test('Check logo', async ({ page }) => {
    const logoPrimary = page.locator('.Header__LogoImage--primary');
    const logoTransparent = page.locator('.Header__LogoImage--transparent');
   // check if an object exists in html
    expect(logoPrimary).toBeTruthy();
    // check if an object is visible
    await expect(logoPrimary).toBeVisible();
    // check atribute src
    await expect(logoPrimary).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
    // check atribute alt
    await expect(logoPrimary).toHaveAttribute('alt', 'The Connected Shop Logo');
    // check atribute width
    await expect(logoPrimary).toHaveAttribute('width');
    // check atribute height
    await expect(logoPrimary).toHaveAttribute('height');
    // check atribute loading
    await expect(logoPrimary).toHaveAttribute('loading', 'lazy');
    
    // check if an object exists in html
    expect(logoTransparent).toBeTruthy();
    // check if an object is visible
    await expect(logoTransparent).toBeVisible();
    // check atribute src
    await expect(logoTransparent).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
    // check atribute alt
    await expect(logoTransparent).toHaveAttribute('alt', 'The Connected Shop Logo White');
    // check atribute width
    await expect(logoTransparent).toHaveAttribute('width', '250px');
    // check atribute height
    await expect(logoTransparent).toHaveAttribute('height', '75px');
    // check atribute loading
    await expect(logoTransparent).toHaveAttribute('loading', 'lazy');

})

