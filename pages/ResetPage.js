import { expect } from "@playwright/test";
import jsonData from "../Utils/userData.json";
const lastJsonObj = jsonData[jsonData.length - 1];

class ResetPage {
  constructor(page) {
    this.page = page;
    this.ResetBtn = page.getByRole("link", { name: "Reset it here" });
    this.EmailTxt = page.getByRole("textbox", { name: "Email" });
    this.sendBtn = page.getByRole("button", { name: "SEND RESET LINK" });

    this.NewPassTxt = page.locator('input[type="password"]');
    this.ResetPassBtn = page.getByRole("button", { name: "RESET PASSWORD" });
  }

  async resetPass1() {
    await this.ResetBtn.click();
    console.log("Reset Email: ", lastJsonObj.email);
    await this.EmailTxt.fill(lastJsonObj.email);
    await this.sendBtn.click();
  }

  async resetPass2(pass) {
    await this.NewPassTxt.nth(0).fill(pass);
    await this.NewPassTxt.nth(1).fill(pass);
    await this.ResetPassBtn.click();
  }
}

export default ResetPage;
