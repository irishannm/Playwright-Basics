import {test, expect} from '@playwright/test';
import testData from '../testData/testData.json';

test('Verify if able to login with correct email and password', async  ({ page }) => {
    
    const {email, password } = testData;

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto("http://automationexercise.com")

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 4. Click on 'Signup / Login' button
    await page.click("text= Signup / Login")

    // 5. Verify 'Login to your account' is visible
    await expect(page.getByText('Login to your account')).toBeVisible()

    // 6. Enter correct email address and password
    await page.fill("#login-email", email)
    await page.fill("#login-password",password)

    // 7. Click 'login' button
    await page.getByRole("button", {name: /Login/i}).click()

    // 8. Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

    // 9. Click 'Delete Account' button
    await page.getByRole("link", {name: /Delete Account/i}).click()

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    await expect(page.getByText(/Account Deleted!/i)).toBeVisible();


})