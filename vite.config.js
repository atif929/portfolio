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
    // Increase chunk warning limit
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Code splitting by feature
        manualChunks: (id) => {
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom')) {
            return 'react-core'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion'
          }
          if (id.includes('node_modules/react-router-dom') ||
              id.includes('node_modules/react-router')) {
            return 'router'
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons'
          }
        },
      },
    },

    // Minification
    minify: 'esbuild',

    // Source maps off in production
    sourcemap: false,

    // Target modern browsers
    target: 'es2020',
  },

  server: {
    port: 3000,
    open: true,
  },

  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
  },
})