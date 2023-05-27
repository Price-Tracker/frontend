export default defineNuxtPlugin(async nuxtApp => {
    console.log("App start");

    const authStore = useAuthStore();
    const { $api } = nuxtApp;

    if (authStore.refreshToken) {
        await $api.user.refreshToken(authStore.refreshToken);
    }
});