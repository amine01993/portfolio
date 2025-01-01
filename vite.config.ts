/// <reference types="vitest/config" />
import { defineConfig, UserConfig } from 'vite';
import { InlineConfig } from 'vitest/node';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
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
                api: 'modern-compiler',
            }
        }
    },
    test: {
        reporters: ['verbose', 'html'],
    }
};

export default defineConfig(config)
