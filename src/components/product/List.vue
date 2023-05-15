<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl  text-center font-bold text-gray-900 dark:text-white">Хит продаж!</p>
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

<!-- <script setup>
const products = [
  {
    id: 1,
    name: 'product_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    minprice: '1',
    maxprice: '15',
  },
  {
    id: 2,
    name: 'product_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    minprice: '10',
    maxprice: '40',
  },
  {
    id: 3,
    name: 'product_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    minprice: '13',
    maxprice: '44',
  },
  {
    id: 4,
    name: 'product_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    minprice: '4',
    maxprice: '17',
  },
]
</script> -->