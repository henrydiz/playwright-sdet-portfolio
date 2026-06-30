import { Page, Locator, expect } from '@playwright/test';

export class LoggedInPage {
  private successMessage: Locator;
  private logoutButton: Locator;

  constructor(private page: Page) {
    this.successMessage = page.getByText('Logged In Successfully');
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async expectSuccessfulLogin() {
    await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(this.successMessage).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}