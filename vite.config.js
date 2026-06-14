import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Base path logic:
// - Custom domain (public/CNAME present)  -> served at the domain ROOT -> base '/'
// - GitHub Pages project site (no CNAME)   -> served at /<repo>/        -> base '/<repo>/'
//   (the deploy workflow provides VITE_BASE=/<repo>/ automatically)
// So when you add your domain later, the base switches to '/' on its own.
// https://vite.dev/guide/static-deploy
const hasCustomDomain = existsSync(fileURLToPath(new URL('./public/CNAME', import.meta.url)))
const base = hasCustomDomain ? '/' : process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
