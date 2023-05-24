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
    ssr: false,
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'https://elxreno.me/api',
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
