import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'wishlist',
      filename: 'remoteEntry.js',
      exposes: {
        './WishlistApp': './src/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 5178,
    cors: true,
    host: true,
  },
})
