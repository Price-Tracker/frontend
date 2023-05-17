<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 pt-0 text-4xl text-left font-bold text-gray-900">Ваша корзина</p>
            <div class="flex flex-wrap flex-col md:flex-row gap-4">
                <div v-for="category in categories" class="grow bg-white rounded-lg shadow-md overflow-hidden">
                    <CategoryItem :category="category" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const { data: categories } = await useAsyncData(
    'categories',
    () => $fetch(`${runtimeConfig.public.apiBaseUrl}/categories`),
    {
        transform: (categories) => categories.data,
    }
)
</script>