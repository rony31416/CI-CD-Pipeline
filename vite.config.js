import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom", // Use jsdom for DOM-like tests
        globals: true,        // Enable global `describe`, `it`, etc.
        setupFiles: "./src/test/setupTests.js", // Include jest-dom setup
    },
});
