export default function useAuthenticatedFetch() {
  const authStore = useAuthStore();
  const router = useRouter()

  async function onRequest(ctx) {
    if (authStore.accessToken) {
      const tokenExpiration = parseJwt(authStore.accessToken).exp - 5
      const currentTime = Math.floor(Date.now() / 1000)

      if (currentTime > tokenExpiration) {
        const success = await authStore.refreshAccessToken()
        if (!success) {
          router.push('/signin')
          return
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

  async function get(url) {
    const response = await authenticatedFetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
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

  return { authFetch: authenticatedFetch, get, post, put };
}
