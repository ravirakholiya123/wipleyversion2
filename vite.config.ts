import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'react-leaflet'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      protocol: 'wss',
      host: process.env.REPLIT_DEV_DOMAIN,
      clientPort: 443,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
  },
});
