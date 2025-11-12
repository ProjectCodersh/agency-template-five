// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression(), // adds gzip compression for production
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // use @ for cleaner imports
    },
  },
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
  },
});
