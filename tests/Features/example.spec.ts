import { test, expect } from '@playwright/test'; //Importing tools that came from @playwright/test package


//Test = Test case
//Playwright run in parallel
test('Verify if title is correct', async ({ page }) => { // Async - Marks a function as asynchronous to handle time-consuming tasks.
  await page.goto('https://playwright.dev/'); //Await - Pauses the function until the task (like loading a page) finishes.

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

