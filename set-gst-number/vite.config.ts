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
      name: 'setgst',
      filename: 'remoteEntry.js',
      exposes: {
        './GSTINForm': './src/components/GSTINForm',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 5176,
    cors: true,
    host: true,
  },
})
