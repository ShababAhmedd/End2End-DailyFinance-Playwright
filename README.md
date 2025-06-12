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
2. **Install dependencies**
   ```bash
     npm install
   ```

3. **Create `.env` file** <br></br>
   **Create a `.env` file in the root directory with the following content:**
   ```bash
     TOKEN=your_gmail_api_token
   ```
   > This token is used to access your Gmail inbox for reading user registration and password reset emails.


