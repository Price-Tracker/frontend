class HistoryRepository {
    private $fetcher: typeof $fetch;

    constructor($fetcher: typeof $fetch) {
        this.$fetcher = $fetcher;
    }

    public async addHistory(productId: number): Promise<any> {
        return await this.$fetcher(`/history`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_id: productId
            })
        })
    }
}

export default HistoryRepository;