<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <p class="px-4 py-8 text-4xl  text-center font-bold text-gray-900 dark:text-white">Хит продаж!</p>
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img :src="product.imageSrc" :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-200" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    {
        id: 1,
        name: 'product_name',
        href: '#',
        price: 'price',
        imageSrc: 'https://via.placeholder.com/350x200',
        imageAlt: 'image_alt.',
    },
    {
        id: 2,
        name: 'product_name',
        href: '#',
        price: 'price',
        imageSrc: 'https://via.placeholder.com/350x200',
        imageAlt: 'image_alt.',
    },
    {
        id: 3,
        name: 'product_name',
        href: '#',
        price: 'price',
        imageSrc: 'https://via.placeholder.com/350x200',
        imageAlt: 'image_alt.',
    },
    {
        id: 4,
        name: 'product_name',
        href: '#',
        price: 'price',
        imageSrc: 'https://via.placeholder.com/350x200',
        imageAlt: 'image_alt.',
    },
]
</script>