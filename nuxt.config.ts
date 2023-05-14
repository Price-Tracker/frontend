// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@sidebase/nuxt-auth',
        'nuxt-icon',
    ],
    typescript: {
        shim: false
    },
    auth: {
        baseURL: 'http://localhost:8080/api/user',
        provider: {
            type: "local",
            endpoints: {
                signIn: { path: '/login', method: 'post' },
                signOut: { path: '/logout', method: 'post' },
                signUp: { path: '/signup', method: 'post' },
                // getSession: { path: '/session', method: 'get' }
            },
            pages: {
                login: '/signin'
            },
            token: {
                signInResponseTokenPointer: '/data/access_token'
            }
        },
    },
})
