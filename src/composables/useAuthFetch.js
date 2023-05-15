export default function useAuthenticatedFetch() {
  const authStore = useAuthStore();
  const router = useRouter()

  async function authenticatedFetch(url, options = {}) {
    if (authStore.accessToken) {
      const tokenExpiration = parseJwt(authStore.accessToken).exp - 5; // Just to be sure when doing a request
      const currentTime = Math.floor(Date.now() / 1000);

      if (currentTime > tokenExpiration) {
        const success = await authStore.refreshAccessToken();
        if (!success) {
          router.push("/signin");
          return;
        }
      }

      options.headers = options.headers || {};
      options.headers.Authorization = authStore.accessToken;
    }

    return await fetch(url, options);
  }

  return { authFetch: authenticatedFetch };
}
