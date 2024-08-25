const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Ativa a gravação de vídeos
    videoCompression: 32, // Define a compressão do vídeo (0-100), onde 0 é sem compressão
    videosFolder: 'cypress/videos', // Pasta onde os vídeos serão salvos
  },
});
