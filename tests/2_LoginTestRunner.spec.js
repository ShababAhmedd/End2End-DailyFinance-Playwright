import { test, expect } from "@playwright/test";
import jsonData from "../Utils/userData.json";
// import dotenv from "dotenv";
import LoginPage from "../pages/LoginPage";
import AddItem from "../pages/AddItem";
import UploadPhoto from "../pages/UploadPhoto";
import LogoutPage from "../pages/LogoutPage";
// dotenv.config();

test("User Login", async ({ page }) => {
  await page.goto("/");

  const lastJsonObj = jsonData[jsonData.length - 1];

  const login = new LoginPage(page);
  await login.doLogin(lastJsonObj.email, lastJsonObj.password);

  await expect(page.getByText("Dashboard")).toBeVisible({ timeout: 5000 });

  const addItem = new AddItem(page);

  const costData1 = {
    ItemName: "first_item",
    Amount: "1",
    Remarks: "1st item",
  };

  const costData2 = {
    ItemName: "second_item",
    Amount: "2",
    Remarks: "2nd item",
  };

  await addItem.AddCost(costData1);
  await addItem.AddCost(costData2);

  await expect(page.getByText("Total Rows: 2")).toBeVisible();
  await expect(page.getByText("Total Cost: 3 TK")).toBeVisible();

  const uploadPhoto = new UploadPhoto(page);
  await uploadPhoto.uploadPhoto("Resources/linus.faces22052.web_-720x900.jpg");

  // await page.pause();
  const logoutPage = new LogoutPage(page);
  await logoutPage.doLogout();
  // await page.pause();
});
