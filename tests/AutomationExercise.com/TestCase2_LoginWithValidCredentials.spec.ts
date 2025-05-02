import { test, expect } from '@playwright/test';
import testData from '../testData/testData.json';

test('Login and delete account with valid credentials', async ({ page }) => {
  const { email, password, name } = testData;

  // 1. Go to the website
  await page.goto('https://automationexercise.com');

  // 2. Verify homepage loaded
  await expect(page).toHaveURL('https://automationexercise.com/');

  // 3. Click on 'Signup / Login'
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // 4. Verify login form is visible
  await expect(page.getByText('Login to your account')).toBeVisible();

  // 5. Enter login credentials
  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill(password);

  // 6. Click 'Login' button
  await page.getByRole('button', { name: 'Login' }).click();

  // 7. Verify user is logged in
  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

  // 8. Delete the account
  await page.getByRole('link', { name: 'Delete Account' }).click();

  // 9. Verify account deletion message
  await expect(page.getByText(/Account Deleted!/i)).toBeVisible();
});
