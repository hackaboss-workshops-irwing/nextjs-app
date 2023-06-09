const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "video": false,
    "screenshotOnRunFailure": false,
    "supportFile": false,
    setupNodeEvents(on, config) {},
  },
});
