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
  actions: {
    setUser(user: object) {
      this.user = user
    },
    setAccessToken(token: string) {
      this.accessToken = token
    },
    setRefreshToken(token: string) {
      this.refreshToken = token
    },
    async login(login_or_email: string, password: string) {
      const response = await fetch('http://localhost:8080/api/user/login', {
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
          console.log("Parsed token: " + JSON.stringify(parsedToken))

          if (parsedToken.nickname) {
            this.setUser(parsedToken.nickname)
          } else {
            this.setUser(parsedToken.login)
          }
        } else {
          return false
        }

        return true
      } else {
        return false
      }
    },
    logout() {
      this.setUser(Object)
      this.setAccessToken("")
    }
  }
})
