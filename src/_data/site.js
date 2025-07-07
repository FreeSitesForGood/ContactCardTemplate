const fs = require("fs");
const path = require("path");
const cjson = require("comment-json");

module.exports = () => {
  const configPath = path.resolve(__dirname, "site-config.jsonc");
  const configData = fs.readFileSync(configPath, "utf8");
  return cjson.parse(configData);
};
