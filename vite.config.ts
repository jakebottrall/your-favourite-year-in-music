/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  test: {
    environment: "jsdom",
    root: "./",
    setupFiles: "./vitest.setup.ts",
  },
});
