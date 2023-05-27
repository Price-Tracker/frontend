class ProductRepository {
    private $fetcher: typeof $fetch;
    private $authFetcher: typeof $fetch;

    constructor($fetcher: typeof $fetch, $authFetcher: typeof $fetch) {
        this.$fetcher = $fetcher;
        this.$authFetcher = $authFetcher;
    }

    public async getProducts(): Promise<any> {
        return await this.$fetcher(`/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async getProductsByCategoryId(categoryId: number): Promise<any> {
        return await this.$fetcher(`/products?category_id=${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async getProductById(productId: number): Promise<any> {
        return await this.$fetcher(`/product/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async subscribeInfo(productId: number): Promise<any> {
        return await this.$authFetcher(`/product/${productId}/subscription`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async subscribeProduct(productId: number): Promise<any> {
        return await this.$authFetcher(`/product/${productId}/subscribe`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async unsubscribeProduct(productId: number): Promise<any> {
        return await this.$authFetcher(`/product/${productId}/subscribe`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default ProductRepository;