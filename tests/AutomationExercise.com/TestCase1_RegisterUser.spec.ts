import {test, expect} from '@playwright/test';
import testData from '../testData/testData.json';

test('Verify if able to register successfully', async  ({ page }) => {

    //Test Data
    const {name, email} = testData;

    //2. Navigate to URL
    await page.goto('https://automationexercise.com')

    //3. Verify that home page is visible
    await expect(page).toHaveURL('https://automationexercise.com/')

    //4. Click on Signup/ Login button
    await page.getByRole('link',{name: ' Signup / Login'}).click()

    //5. Verify New User Signup! is visible
    await expect(page.getByRole('heading',{ name: 'New  User Signup!'})).toBeVisible();

    //6. Enter name and email address
    await page.locator('[data-qa="signup-name"]').fill(name)
    await page.locator('[data-qa="signup-email"]').fill(email)

    //7. Cick 'Signup' button //- That uses a case-insensitive RegEx 
    await page.getByRole('button',{ name: /signup/i }).click()

    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.getByText(/enter account information/i)).toBeVisible()

    //9. Fill details: Title, Name, Email, Password, Date of birth
    await page.locator('#id_gender1').check(); // Select title = Mr, to enhance will select based on names
      
    
})


