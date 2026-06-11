import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':           path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages':      path.resolve(__dirname, './src/pages'),
      '@data':       path.resolve(__dirname, './src/data'),
      '@hooks':      path.resolve(__dirname, './src/hooks'),
      '@layouts':    path.resolve(__dirname, './src/layouts'),
      '@routes':     path.resolve(__dirname, './src/routes'),
      '@styles':     path.resolve(__dirname, './src/styles'),
      '@assets':     path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react:  ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons:  ['react-icons'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})