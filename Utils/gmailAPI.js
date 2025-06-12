import { request } from "@playwright/test";
import { updateEnvVariable } from "./utils";
import dotenv from "dotenv";

dotenv.config();

const baseURL = "https://gmail.googleapis.com";
const TOKEN = process.env.TOKEN;

let emailID;
export async function getGmail() {
  const apiReq = await request.newContext();
  const res = await apiReq.get(`${baseURL}/gmail/v1/users/me/messages`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + TOKEN,
    },
  });
  const data = await res.json();
  // console.log(data);
  emailID = data.messages[0].id;
  console.log("Email ID: ", emailID);

  // updateEnvVariable("EMAIL_ID", emailID);

  return emailID;
}

export async function readGmail(emailID) {
  // const emailID = process.env.EMAIL_ID;
  const apiReq = await request.newContext();
  const res = await apiReq.get(
    `${baseURL}/gmail/v1/users/me/messages/${emailID}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    }
  );
  const data = await res.json();
  const mailSnippet = data.snippet;
  console.log("Email Snippet: ", mailSnippet);
  updateEnvVariable("EMAIL_BODY", mailSnippet);

  return mailSnippet;
}
