<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl text-center font-bold text-gray-900">История</p>
            <div class="grid grid-cols-1 gap-8">
                <div v-for="product_in_history in history" class="bg-white shadow-md overflow-hidden">
                    <HistoryItem :product_in_history="product_in_history" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const history = [
  {
    id: 1,
    product: 'product_name',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    date: '14 мая',
  },
  {
    id: 2,
    product: 'product_name',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    date: '11 мая',
  },
  {
    id: 3,
    product: 'product_name',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    date: '11 мая',
  },
  {
    id: 4,
    product: 'product_name',
    imageSrc: 'https://via.placeholder.com/350x200',
    imageAlt: "text",
    date: '12 мая',
  },
]
</script>