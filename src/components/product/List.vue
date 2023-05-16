<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl text-center font-bold text-gray-900 dark:text-white">Хит продаж!</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="product in products" class="bg-white shadow-md overflow-hidden">
                    <ProductItem :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: products } = await useAsyncData(
    'products',
    () => $fetch(`${runtimeConfig.public.apiBaseUrl}/products`),
    {
        transform: (product) => product.data,
    }
)

onMounted(() => refreshNuxtData('products'))
</script>