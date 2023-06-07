<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 pt-0 text-4xl font-bold text-gray-900">Избранные товары</p>
            <div v-if="!isLoaded" class="px-4 py-8 text-4xl text-center font-bold text-gray-900">Загрузка...</div>
            <div v-else-if="products && products.length === 0" class="px-4 py-8 text-4xl text-center font-bold text-gray-900">Нет избранных товаров!</div>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <div v-for="product in products" class="bg-white drop-shadow-md overflow-hidden rounded-lg">
                    <ProductItemPreview :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $api } = useNuxtApp()

const products = ref([])
const isLoaded = ref(false)

onMounted(async () => {
    let subscriptions = await $api.user.getSubscriptions().then(res => res.data)
    let productsIds = subscriptions.map(subscription => subscription.product_id)

    for (let productId of productsIds) {
        let product = await $api.product.getProductById(productId).then(res => res.data)
        products.value.push(product)
    }
    isLoaded.value = true
})
</script>