import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      components: '@/components',
      assets: '@/assets'
    }
  },
  server: {
    port: 9338,
    open: true,
    proxy: {
      '/api': {
        target: 'http://175.178.164.2:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
