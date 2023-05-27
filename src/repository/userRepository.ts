class UserRepository {
    private $fetcher: typeof $fetch;

    constructor($fetcher: typeof $fetch) {
        this.$fetcher = $fetcher;
    }

    public async login(login_or_email: string, password: string): Promise<any> {
        return await this.$fetcher(`/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login_or_email, password })
        })
    }

    public async signup(login: string, email: string, password: string): Promise<any> {
        return await this.$fetcher(`/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, email, password })
        })
    }

    public async refreshToken(refresh_token: string): Promise<any> {
        return await this.$fetcher(`/user/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token })
        })
    }
}

export default UserRepository;