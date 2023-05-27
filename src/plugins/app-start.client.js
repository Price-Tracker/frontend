export default defineNuxtPlugin(async nuxtApp => {
    console.log("App start");

    const authStore = useAuthStore();
    const { $api } = useNuxtApp();

    if (authStore.refreshToken) {
        await $api.user.refreshToken(authStore.refreshToken)
            .catch(() => authStore.resetAuth())
            .then(result => result && authStore.saveUserTokens(result.data.access_token, result.data.refresh_token));
    }
});