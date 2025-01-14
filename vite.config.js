import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SquareTreasureB/', // The name of the repository on GitHub
  plugins: [react()],
})
