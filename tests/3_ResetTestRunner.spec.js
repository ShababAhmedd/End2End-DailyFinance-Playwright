import { test, expect } from "@playwright/test";
import jsonData from "../Utils/userData.json";
import fs from "fs";
import { getGmail, readGmail } from "../Utils/gmailAPI";
// import dotenv from "dotenv";
import ResetPage from "../pages/ResetPage";
// dotenv.config();

test("Reset new password", async ({ page }) => {
  await page.goto("/");

  const resetPage = new ResetPage(page);
  await resetPage.resetPass1();
  await expect(
    page.getByText("Password reset link sent to your email")
  ).toBeVisible({ timeout: 15000 });

  await page.waitForTimeout(5000);
  const mailID = await getGmail();
  const mailSnippet = await readGmail(mailID);
  const resetLink = mailSnippet.match(/https?:\/\/[^\s]+/)[0];
  console.log("Reset Link:", resetLink);

  await page.goto(resetLink);
  resetPage.resetPass2("1234");
  await expect(page.getByText("Password reset successfully")).toBeVisible({
    timeout: 15000,
  });

  const updatedJson = [...jsonData];
  updatedJson[updatedJson.length - 1].password = "1234";
  fs.writeFileSync(
    "./Utils/userData.json",
    JSON.stringify(updatedJson, null, 2)
  );

  //   await page.pause();
});
