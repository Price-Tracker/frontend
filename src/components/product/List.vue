<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p v-if="!props.categoryId" class="px-4 py-8 pt-0 text-4xl font-bold text-gray-900">Популярные товары</p>
            <div v-if="products && products.length === 0" class="px-4 py-8 text-4xl text-center font-bold text-gray-900">Нет
                продуктов по текущим критериям!</div>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <div v-for="product in products" class="bg-white drop-shadow-md overflow-hidden rounded-lg">
                    <ProductItemPreview :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    categoryId: { type: Number, required: false },
})

const { $api } = useNuxtApp()

const products = props.categoryId ?
    await $api.product.getProductsByCategoryId(props.categoryId).then((res) => res.data)
    :
    await $api.product.getProducts().then((res) => res.data)
</script>