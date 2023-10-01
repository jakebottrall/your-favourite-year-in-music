/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  server: { port: 3000 },
  test: {
    environment: 'jsdom',
    root: './',
    setupFiles: './vitest.setup.ts',
  },
});
