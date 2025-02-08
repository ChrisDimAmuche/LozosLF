import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change 'base' to '/' for custom domains
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change to '/repo-name/' if not using a custom domain
});
