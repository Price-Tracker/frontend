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
