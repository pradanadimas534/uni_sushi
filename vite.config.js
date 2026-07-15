import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Nama file output dibuat tetap (app.js / app.css) tanpa hash,
// supaya server/index.php bisa mereferensikannya langsung.
export default defineConfig({
  plugins: [react()],
  base: '/', // jika dipasang di subfolder, ubah mis. '/cafe/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (info) => {
          if (info.name && info.name.endsWith('.css')) return 'assets/app.css';
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
