<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl  text-left font-bold text-gray-900 dark:text-white">Категории товаров</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="category in categories" class="bg-white rounded-lg shadow-md overflow-hidden">
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