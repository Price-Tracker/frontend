class CartRepository {
    private $fetcher: typeof $fetch;

    constructor($fetcher: typeof $fetch) {
        this.$fetcher = $fetcher;
    }

    public async addToCart(productStoreId: number, quantity: number): Promise<any> {
        return await this.$fetcher(`/cart/add`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_store_id: productStoreId,
                quantity
            })
        })
    }
}

export default CartRepository;