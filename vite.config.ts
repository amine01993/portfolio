import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: fileURLToPath(new URL('./src/translations/**', import.meta.url)),
      strictMessage: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url)),
      '~bootstrap-icons': fileURLToPath(new URL('./node_modules/bootstrap-icons', import.meta.url)),
    },
  },
  base: '',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
          quietDeps: true,
      }
    }
  },
})
