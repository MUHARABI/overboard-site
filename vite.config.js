import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/overboard-site/',   // 👈 repo name
  build: {
    outDir: 'docs',           // 👈 GitHub Pages-friendly folder
  },
})
