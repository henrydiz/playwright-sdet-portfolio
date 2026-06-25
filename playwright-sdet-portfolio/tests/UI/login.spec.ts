import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});