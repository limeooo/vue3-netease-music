import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // vite-plugin-svg-icons  用于生成 svg 雪碧图.
    // see https://github.com/anncwb/vite-plugin-svg-icons
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [join(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      /**
       * 自定义插入位置
       * @default: body-last
       */
      inject: 'body-last',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__'
    })
  ],
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
