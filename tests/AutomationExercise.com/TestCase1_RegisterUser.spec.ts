import {test, expect} from '@playwright/test';
import testData from '../testData/testData.json';

test('Verify if able to register successfully', async  ({ page }) => {

    //Test Data
    const {name, email, password, First_Name, Last_Name, Company, 
        Address1, Address2, State, City, Zipcode, Mobile } = testData;

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
    
    //Fill password
    await page.locator('[data-qa="password"]').fill(password)

    await page.locator('#days').selectOption('8');
    await page.locator('#months').selectOption('3');
    await page.locator('#years').selectOption('2004');
 
    //10. Select checkbox 'Sign up for our newsletter!'
    await page.check('#newsletter')

    //11. Select checkbox 'Receive special offers from our partners!'
    await page.check('#optin')

    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.fill('#first_name',First_Name)
    await page.fill('#last_name', Last_Name)
    await page.fill('#company', Company)
    await page.fill('#address1', Address1)
    await page.fill('#address2', Address2)
    await page.getByLabel('Country *').selectOption('Singapore');
    await page.fill('#state', State)
    await page.fill('#city', City)
    await page.fill('#zipcode', Zipcode)
    await page.fill('#mobile_number', Mobile)

    //13. Click 'Create Account button'
    await page.getByRole('button',{name: "Create Account"}).click()

    //14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText(/Account Created!/i)).toBeVisible()

    //15. Click 'Continue' button
    await page.locator('[data-qa="continue-button"]').click()

    //16. Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();

    //17. Click 'Delete Account' button
    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button





})


