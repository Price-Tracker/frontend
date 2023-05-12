import { resolve } from 'path'
import { defineConfig } from 'vite'

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
    }
})