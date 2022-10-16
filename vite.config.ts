/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    exclude: ["node_modules"],
    include: ["**/*.spec.{ts,tsx}"],
    coverage: {
      provider: "c8",
    },
    clearMocks: true,
    setupFiles: ["./src/test/mocks"],
  },
});
