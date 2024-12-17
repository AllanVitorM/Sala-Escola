import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/salaoescola': {
        target: 'http://localhost:8081', // Porta onde o seu backend está rodando
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
