const fs = require("fs");
const path = require("path");

function loadEnvFile(filePath) {
  const env = {};
  try {
    const content = fs.readFileSync(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      env[key] = value;
    }
  } catch {
    // .env may be absent locally; production must provide it.
  }
  return env;
}

const fileEnv = loadEnvFile(path.join(__dirname, ".env"));

module.exports = {
  apps: [
    {
      name: "arsenal",
      exec_mode: "cluster",
      instances: 1,
      script: ".output/server/index.mjs",
      cwd: "/var/www/arsenal",
      env: {
        NITRO_PORT: 3000,
        NITRO_HOST: "127.0.0.1",
        HOST: "127.0.0.1",
        PORT: 3000,
        ...fileEnv,
      },
    },
  ],
};
