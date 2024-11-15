import {test,expect} from "../fixtures/fixtures.js"

test.describe('Login form test cases' , () => {

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Verify that user can login to the system with valid credentials', async ({loginPage,page}) => {
        await loginPage.loginPage();
        await loginPage.login('gihaan@mailinator.com','Mangotree@1999')
        await page.waitForURL('https://practicesoftwaretesting.com/account');
        await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })


})

