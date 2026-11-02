import {test,expect} from '@playwright/test'

test('loginTest', async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await expect(page).toHaveURL(/^https:/)

    await page.getByLabel('Username').fill('standard_user')
    await page.getByLabel('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'LOGIN'}).click();
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('div.primary_header')).toBeVisible();


    const element = page.locator('.inventory_item');
    await expect(element).toHaveCount(6);

    const hamburgerMenu = page.locator('.bm-burger-button');
    await hamburgerMenu.click();


const menuLinks = [
    '#inventory_sidebar_link',
    '#dynamic_catalog_sidebar_link',
    '#about_sidebar_link',
    '#logout_sidebar_link',
    '#reset_sidebar_link'
];

for (const selector of menuLinks) {
    await expect(page.locator(selector)).toBeVisible();
}
 
const footer = page.locator('footer');
await expect(footer).toBeVisible();
await page.screenshot({path:'./screenshots/login.png'});

    

    
     
})