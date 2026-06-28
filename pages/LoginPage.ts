import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;
  private errorMessage: Locator;
  private successMessage: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.errorMessage = page.locator('#error');
    this.successMessage = page.getByText('Logged In Successfully');
    
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }


  async expectSuccessfulLogin() {
    await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(this.successMessage).toBeVisible();
}

async expectLoginError(message: string) {
  await expect(this.errorMessage).toBeVisible();
  await expect(this.errorMessage).toContainText(message);
}
}