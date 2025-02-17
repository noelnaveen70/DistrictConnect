import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures the base path is set correctly for routing
  server: {
    historyApiFallback: true,  // Ensures React Router works correctly on refresh
  },
  build: {
    outDir: 'dist', // Directory to output the build
  },
});
