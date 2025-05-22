import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist'
  },
  esbuild: {
    jsxInject: `import React from 'react'`  // ✅ EKLENECEK SATIR
  }
})
