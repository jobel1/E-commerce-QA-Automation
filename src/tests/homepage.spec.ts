import {test,expect} from '@playwright/test'


test('homePagetest', async({page}) => {
    const response =await page.goto("https://sauce-demo.myshopify.com");
    expect(response).not.toBeNull();
    expect(response!.ok()).toBeTruthy();
    expect(page.url()).toContain('https://');


await page.goto("https://sauce-demo.myshopify.com")
await expect(page).toHaveTitle('Sauce Demo');

await expect(
    page.getByText("Sauce Demo"))
.toBeVisible();

await expect(page.getByPlaceholder('Search')).toBeVisible()
await expect(page.getByPlaceholder('Search')).toBeEnabled();
await expect(page.getByRole('img',{name:'Sauce Demo'})).toBeVisible();

const products = page.locator('#product-1');
await expect(products).toBeVisible();
await page.screenshot({path:'./screenshots/homepage.png'});



})