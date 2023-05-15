export type AuthState = {
  user: object | null
  accessToken: string | null
  refreshToken: string | null
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state(): AuthState {
    return {
      user: null,
      accessToken: null,
      refreshToken: null,
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    setUser(user: object | null) {
      this.user = user
    },
    setAccessToken(token: string | null) {
      this.accessToken = token
    },
    setRefreshToken(token: string | null) {
      this.refreshToken = token
    },
    async login(login_or_email: string, password: string) {
      const runtimeConfig = useRuntimeConfig()
      const response = await fetch(`${runtimeConfig.public.apiBaseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login_or_email, password })
      })

      if (response.ok) {
        const data = await response.json()

        if (data.status === "success") {
          this.setAccessToken(data.data.access_token)
          this.setRefreshToken(data.data.refresh_token)

          let parsedToken = parseJwt(data.data.access_token)

          if (parsedToken.nickname) {
            this.setUser(parsedToken.nickname)
          } else {
            this.setUser(parsedToken.login)
          }

          return true
        }
      } 
      
      return false
    },
    async refreshAccessToken() {
      const runtimeConfig = useRuntimeConfig()
      const response = await fetch(`${runtimeConfig.public.apiBaseUrl}/user/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh_token: this.refreshToken })
      })

      if (response.ok) {
        const data = await response.json()

        if (data.status === "success") {
          this.setAccessToken(data.data.access_token)
          this.setRefreshToken(data.data.refresh_token)

          let parsedToken = parseJwt(data.data.access_token)

          if (parsedToken.nickname) {
            this.setUser(parsedToken.nickname)
          } else {
            this.setUser(parsedToken.login)
          }

          return true
        }
      } 
      
      console.log("Resetting auth...")
      this.resetAuth()
      return false
    },
    resetAuth() {
      this.setUser(null)
      this.setAccessToken(null)
      this.setRefreshToken(null)
    }
  }
})
