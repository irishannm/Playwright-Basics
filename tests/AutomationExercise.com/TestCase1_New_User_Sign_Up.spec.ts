import {test, expect} from '@playwright/test';

//Verify 
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

    // Wait for Name and Email input fields to be visible 
    await page.locator('[data-qa="signup-name"]').waitFor();
    await page.locator('[data-qa="signup-email"]').waitFor();

    //Input name and email address
    await page.locator('[data-qa="signup-name"]').fill('irishann')
    await page.locator('[data-qa="signup-email"]').fill('iamorales.main@gmail.com')
    await page.locator('[data-qa="signup-button"]').click()

    //Redirect to Sign Up page
    await expect(page).toHaveURL('https://automationexercise.com/signup');
})

