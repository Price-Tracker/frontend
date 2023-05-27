export default function useAuthenticatedFetch() {
  const authStore = useAuthStore();
  const { $api } = useNuxtApp();
  const router = useRouter()

  async function onRequest(ctx) {
    if (authStore.accessToken) {
      const tokenExpiration = parseJwt(authStore.accessToken).exp - 5
      const currentTime = Math.floor(Date.now() / 1000)

      if (currentTime > tokenExpiration) {
        const response = await $api.user.refreshToken(authStore.refreshToken)
        if (!response) {
          router.push('/signin')
          return
        } else {
          authStore.saveUserTokens(response.data.access_token, response.data.refresh_token)
        }
      }

      ctx.options.headers = ctx.options.headers || {}
      ctx.options.headers.Authorization = authStore.accessToken
    }
  }

  async function authenticatedFetch(url, options = {}) {
    return useFetch(url, {
      ...options,
      onRequest,
    })
  }

  async function post(url, body = {}) {
    const response = await authenticatedFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    return response;
  }

  async function put(url, body = {}) {
    const response = await authenticatedFetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    return response;
  }

  return { authRequest: onRequest, authFetch: authenticatedFetch, post, put };
}
