class ProductRepository {
    private $fetcher: typeof $fetch;

    constructor($fetcher: typeof $fetch) {
        this.$fetcher = $fetcher;
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
}

export default ProductRepository;