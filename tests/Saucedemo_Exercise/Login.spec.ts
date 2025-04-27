import { test, expect } from '@playwright/test';

test('Verify if player able to login successfully with valid username and password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.getByText('Swag Labs')).toBeVisible()
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await page.screenshot({path: 'test-screenshot/login-success.png', fullPage: true}) // Take a screenshot of the entire page'})

});

test('Verify if player cannot login successfully with invalid username and password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.locator('[data-test="username"]').fill('invalid_user')
  await page.locator('[data-test="password"]').fill('invalid_password')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
  await page.screenshot({path: 'test-screenshot/login-invalid.png', fullPage: true}) // Take a screenshot of the entire page'})
});

