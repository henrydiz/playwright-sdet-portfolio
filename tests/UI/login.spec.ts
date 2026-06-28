import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('should login successfully', async ({ page }) => {
  //loginPage is an instance of the LoginPage class, which is imported from the pages/LoginPage.ts file. It is used to interact with the login page of the application being tested.
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await loginPage.expectSuccessfulLogin();

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test('should show error for invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
await loginPage.login('student', 'WrongPassword');

await loginPage.expectLoginError('Your password is invalid!');  
});