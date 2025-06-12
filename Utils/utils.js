import fs from "fs";

const generateRandomID = (min, max) => {
  let randomID = Math.random() * (max - min) + min;
  return parseInt(randomID);
};

function updateEnvVariable(key, value) {
  const envPath = ".env";
  let envVars = fs.readFileSync(envPath, "utf8").split("\n");

  let updated = false;
  envVars = envVars.map((line) => {
    if (line.startsWith(`${key}=`)) {
      updated = true;
      return `${key}=${value}`;
    }
    return line;
  });

  if (!updated) {
    envVars.push(`${key}=${value}`);
  }

  fs.writeFileSync(envPath, envVars.join("\n"));
}

export { generateRandomID, updateEnvVariable };
