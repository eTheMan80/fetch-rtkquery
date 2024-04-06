import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/*.{ts,tsx}'
  },
})
