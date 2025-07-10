import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'container',
      remotes: {
        address: 'http://localhost:5174/assets/remoteEntry.js',
        account: 'http://localhost:5175/assets/remoteEntry.js',
        setgst: 'http://localhost:5176/assets/remoteEntry.js',
        setrefund: 'http://localhost:5177/assets/remoteEntry.js',
        wishlist: 'http://localhost:5178/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
