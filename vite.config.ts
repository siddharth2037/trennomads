import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// BASE_PATH is set by the GitHub Pages workflow (.github/workflows/deploy.yml)
// to "/<repo-name>/", because Pages serves the site from a sub-folder.
// Locally, and on Vercel/Netlify, it's unset and the site lives at "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
