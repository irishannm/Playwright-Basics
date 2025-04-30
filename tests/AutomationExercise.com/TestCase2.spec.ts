import {test, expect} from '@playwright/test';

test('Verify drop down test', async  ({ page }) => {
// Navigate to the page
await page.goto('https://automationexercise.com');

// Wait for the Day combobox to be visible and click it
await page.waitForSelector('role=combobox[name="Day"]', { state: 'visible', timeout: 5000 });
await page.locator('role=combobox[name="Day"]').click();

// Select the option for 15
await page.locator('role=option[name="15"]').click();

// Repeat the process for Month and Year as needed
})