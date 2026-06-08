import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const securityPolicy = {
  name: 'security-policy',
  apply: 'build',
  transformIndexHtml: {
    order: 'pre',
    handler() {
      return [
        {
          tag: 'meta',
          attrs: {
            'http-equiv': 'Content-Security-Policy',
            content:
              "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';",
          },
          injectTo: 'head',
        },
      ]
    },
  },
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ymoeller/' : '/',
  plugins: [
    securityPolicy,
    react(),
    tailwindcss(),
  ],
}))
