import {test, expect} from '@playwright/test';

test('Verify if able to register successfully', async  ({ page }) => {
    //Go to homepage
    await page.goto('https://automationexercise.com/')

    //Click on Sign up/Login and wait for navigation
    await Promise.all([
        page.waitForNavigation({waitUntil:'load'}),
        page.getByRole('link', { name: ' Signup / Login'}).click(),
    ]);

    //Assert the new URL is correct
    await expect(page).toHaveURL('https://automationexercise.com/login');
})