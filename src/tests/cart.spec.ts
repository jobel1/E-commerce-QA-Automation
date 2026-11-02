import { test, expect } from '@playwright/test';

test('cartTest', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.screenshot({path:'./screenshots/login.png'});



});