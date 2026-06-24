import { test, expect } from '@playwright/test';

test('should open the login page', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await expect(page).toHaveTitle(/Test Login/);

  const usernameInput = page.locator('#username');

  await usernameInput.fill('student');

  await expect(usernameInput).toBeVisible();

  const passwordInput = page.locator('#password');

  await passwordInput.fill('Password123');

  await expect(passwordInput).toBeVisible();

const submitButton = page.getByRole('button', { name: 'Submit' });

await expect(submitButton).toBeVisible();

await submitButton.click();

await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

const successMessage = page.getByText('Logged In Successfully');

await expect(successMessage).toBeVisible();


});

test('should show error for invalid password', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('WrongPassword');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

  const errorMessage = page.locator('#error');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Your password is invalid!');
});