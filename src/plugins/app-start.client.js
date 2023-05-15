export default defineNuxtPlugin(async nuxtApp => {
    console.log("App start");

    const authStore = useAuthStore();

    if (authStore.refreshToken) {
        await authStore.refreshAccessToken();
    }
});