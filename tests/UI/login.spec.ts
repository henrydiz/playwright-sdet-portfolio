import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await expect(page).toHaveURL(
    'https://practicetestautomation.com/logged-in-successfully/'
  );

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test('should show error for invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'WrongPassword');

  await expect(page).toHaveURL(
    'https://practicetestautomation.com/practice-test-login/'
  );

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText(
    'Your password is invalid!'
  );
});