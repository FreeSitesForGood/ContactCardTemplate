const commentJson = require('comment-json');
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Parse the JSONC file directly here
  const configPath = path.resolve(__dirname, "site-config.jsonc");
  const configData = fs.readFileSync(configPath, "utf8");
  const parsedSiteConfig = commentJson.parse(configData);
  
  const cleanedData = Object.fromEntries(
    Object.entries(parsedSiteConfig).filter(([_, v]) => v !== "")
  );

  eleventyConfig.addFilter("startswith", function (str, start) {
    return typeof str === "string" && str.startsWith(start);
  });

  // Make it available globally in templates
  eleventyConfig.addGlobalData("siteConfig", parsedSiteConfig);

  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    dataTemplateEngine: "njk",
  };
};
