import { test, expect } from "@playwright/test";
import jsonData from "../Utils/userData.json";
// import dotenv from "dotenv";
import LoginPage from "../pages/LoginPage";
// dotenv.config();

test("Login with new password", async ({ page }) => {
  const lastJsonObj = jsonData[jsonData.length - 1];
  await page.goto("/");
  const loginPage = new LoginPage(page);
  await loginPage.doLogin(lastJsonObj.email, lastJsonObj.password);
  console.log("password: ", lastJsonObj.password);
  let dashboard = await page.locator("h2").textContent();
  await expect(dashboard).toBe("User Daily Costs");
//   await page.pause();
});
