import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import jsonData from "../Utils/userData.json";
import fs from "fs";
import RegistrationPage from "../pages/RegistrationPage";
import { generateRandomID } from "../Utils/utils";
import { getGmail, readGmail } from "../Utils/gmailAPI";
// import dotenv from "dotenv";
// dotenv.config();

test("User Registration", async ({ page }) => {
  await page.goto("/");
  const reg = new RegistrationPage(page);
  const userModel = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: "shabab.ahmed2000sa+" + generateRandomID(1000, 9999) + "@gmail.com",
    password: faker.internet.password(),
    phoneNumber: `01${generateRandomID(100000000, 999999999)}`,
    address: faker.location.city(),
  };
  await reg.registerUser(userModel);

  const toastLocator = page.locator(".Toastify__toast");
  await expect(toastLocator).toBeVisible({ timeout: 50000 });
  const msg = await toastLocator.textContent();
  expect(msg).toContain("successfully");

  jsonData.push(userModel);
  fs.writeFileSync("./Utils/userData.json", JSON.stringify(jsonData, null, 2));

  await page.waitForTimeout(5000);
  const mailID = await getGmail();
  const mailSnippet = await readGmail(mailID);
  expect(mailSnippet).toContain("Welcome to our platform!");
});
