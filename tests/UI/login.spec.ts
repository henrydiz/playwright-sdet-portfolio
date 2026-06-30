import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LoggedInPage } from '../../pages/LoggedInPage';

test('should login successfully and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await loggedInPage.expectSuccessfulLogin();

  await loggedInPage.logout();

  await expect(page).toHaveURL(
    'https://practicetestautomation.com/practice-test-login/'
  );
});

test('should show error for invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'WrongPassword');

  await loginPage.expectLoginError('Your password is invalid!');
});