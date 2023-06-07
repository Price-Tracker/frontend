interface PasswordRequirements {
    min_length: number;
    max_length: number;
    min_uppercase: number;
    min_lowercase: number;
    min_digits: number;
    min_special: number;
}

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

    public async passwordRequirements(): Promise<PasswordRequirements> {
        var res: any = await this.$fetcher(`/user/password-requirements`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as PasswordRequirements;
    }
}

export default UserRepository;