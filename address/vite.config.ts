import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'address',
      filename: 'remoteEntry.js',
      exposes: {
        './AddressPage': './src/components/AddressPage',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 5174,
    cors: true,
    host: true,
  },
})
