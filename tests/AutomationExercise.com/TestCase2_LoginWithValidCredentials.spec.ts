import {test, expect} from '@playwright/test';

test('Verify if able to login with correct email and password', async  ({ page }) => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto("http://automationexercise.com")

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveURL("http://automationexercise.com")
    
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    // 8. Verify that 'Logged in as username' is visible
    // 9. Click 'Delete Account' button
    // 10. Verify that 'ACCOUNT DELETED!' is visible
})