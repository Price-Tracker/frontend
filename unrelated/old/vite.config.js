import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { resolve } from 'path'

var rootDir = 'src';

export default defineConfig({
    root: rootDir,
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                account_cart: resolve(__dirname, rootDir + '/account-cart.html'),
                cart: resolve(__dirname, rootDir + '/cart.html'),
                index: resolve(__dirname, rootDir + '/index.html'),
                listing: resolve(__dirname, rootDir + '/listing.html'),
            },
        },
    },
    plugins: [
        ViteImageOptimizer({})
    ],
})