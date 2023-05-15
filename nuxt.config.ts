// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'https://infinity.tail1f457.ts.net:10000/api',
        }
    },
    pinia: {
        autoImports: ["defineStore"]
    },
    typescript: {
        shim: false
    },
    imports: {
        dirs: ['stores'],
    },
})
