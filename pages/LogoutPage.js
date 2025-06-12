class LogoutPage {
  constructor(page) {
    this.page = page;
    this.menu = page.locator(".MuiIconButton-root");
    this.LogoutBtn = page.getByRole("menuitem", { name: "Logout" });
  }

  async doLogout() {
    await this.menu.click();
    await this.LogoutBtn.click();
  }
}

export default LogoutPage;
