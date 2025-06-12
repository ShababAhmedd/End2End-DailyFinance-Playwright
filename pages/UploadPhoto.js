class UploadPhoto {
  constructor(page) {
    this.page = page;
    this.menu = page.locator(".MuiIconButton-root");
    this.Profile = page.getByRole("menuitem", { name: "Profile" });
    this.EDIT = page.getByRole("button", { name: "EDIT" });
    this.ChooseFile = page.getByRole("button", { name: "Choose File" });
    this.UPLOADIMAGE = page.getByRole("button", { name: "UPLOAD IMAGE" });
    this.UPDATE = page.getByRole("button", { name: "UPDATE" });
  }

  async uploadPhoto(location) {
    await this.menu.click();
    await this.Profile.click();
    await this.EDIT.click();
    await this.ChooseFile.setInputFiles(location);
    await this.UPLOADIMAGE.click();
    await this.UPDATE.click();
  }
}

export default UploadPhoto;