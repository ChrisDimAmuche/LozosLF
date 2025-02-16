import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Using custom domain
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
