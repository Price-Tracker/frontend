<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl text-center font-bold text-gray-900 dark:text-white">История</p>
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> -->
            <!-- <div class="grid grid-cols-1 gap-8">
                <div v-for="shop in shops" class="bg-white shadow-md overflow-hidden">
                    <HistoryItem :shop="shop" />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
const shops = [
  {
    id: 1,
    name: 'shop_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    description: 'some_text_here',
  },
  {
    id: 2,
    name: 'shop_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    description: 'some_text_here',
  },
  {
    id: 3,
    name: 'shop_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    description: 'some_text_here',
  },
  {
    id: 4,
    name: 'shop_name',
    href: '#',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    description: 'some_text_here',
  },
]
</script>