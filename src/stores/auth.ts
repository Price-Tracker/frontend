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
    saveUserTokens(accessToken: string, refreshToken: string) {
      this.setAccessToken(accessToken)
      this.setRefreshToken(refreshToken)

      let parsedToken = parseJwt(accessToken)

      if (parsedToken.nickname) {
        this.setUser(parsedToken.nickname)
      } else {
        this.setUser(parsedToken.login)
      }
    },
    isUserAuthenticated() {
      return this.accessToken !== null
    },
    resetAuth() {
      this.setUser(null)
      this.setAccessToken(null)
      this.setRefreshToken(null)
    }
  }
})
