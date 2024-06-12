import { defineConfig } from "@rsbuild/core";

export default defineConfig({
    test: {
      global: true,
      environment: 'jsdom',
      setupFiles : './setupTests.js',
    },

})