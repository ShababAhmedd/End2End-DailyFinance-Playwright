# End2End-DailyFinance-Playwright

This project automates end-to-end user interactions on [DailyFinance](https://dailyfinance.roadtocareer.net) using Playwright and JavaScript. It covers user registration, login, item addition, profile photo upload, password reset, and login with the new password — along with validations and reporting.

## Features Covered

- User registration with email toast verification
- Login with valid credentials
- Add two cost items and verify total count and cost
- Upload profile picture via settings
- Logout from the dashboard
- Reset password using Gmail verification link
- Login with the newly set password


## Setup Instructions

1. **Clone the repository**

  ```bash
    git clone https://github.com/ShababAhmedd/End2End-DailyFinance-Playwright.git
    cd End2End-DailyFinance-Playwright
  ```
2. **Install dependencies** <br></br>
   First, install all required packages. 
   ```bash
     npm install @playwright/test dotenv @faker-js/faker allure-playwright --save-dev
   ```
   Then, install Playwright browsers:
   ```bash
     npx playwright install
   ```

4. **Create `.env` file** <br></br>
   **Create a `.env` file in the root directory with the following content:**
   ```bash
     TOKEN=your_gmail_api_token
   ```
   > This token is used to access your Gmail inbox for reading user registration and password reset emails.


## Running the Tests

To execute all test cases using Playwright, run:

```bash
npx playwright test
```
This will perform the full end-to-end flow:

- User registration
- Login and add items
- Upload profile picture
- Reset password
- Login with the new password


### Run a Specific Test File

To run a specific test file, use:

```bash
npx playwright test tests/1_RegistrationTestRunner.spec.js
```
> Replace the file path with any specific `.spec.js` file you want to execute individually.


## 📊 Generating Allure Report

After running your tests, generate and view the Allure report using:

```bash
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
```
> This will generate a visual HTML report and open it in your browser.

If you haven’t installed Allure CLI yet, install it globally with:

```bash
  npm install -g allure-commandline --save-dev
```
