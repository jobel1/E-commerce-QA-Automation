import { test, expect } from '@playwright/test';

test('checkoutTest', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  ).click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click()
  await page.locator('[data-test="firstName"]').fill('Job');
  await page.locator('[data-test="lastName"]').fill('I');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  
  const price=page.locator('[data-test="inventory-item-price"]').filter({hasText: '$29.9'});
  await expect(price).toBeVisible();

  await page.locator('[data-test="finish"]').click();

  const order = page.locator('[data-test="complete-header"]').filter({hasText: 'Thank you for your order!'});
  await expect(order).toBeVisible();
  await page.screenshot({path:'./screenshots/checkout.png'});

  


});
