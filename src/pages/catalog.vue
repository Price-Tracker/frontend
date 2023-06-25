<template>
  <div class="bg-white">
    <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">

      <div class="pt-24 pb-10">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Каталог товаров</h1>
        <p class="mt-4 text-base text-gray-500">Выбирайте товары по выгодной цене!</p>
      </div>
      
      <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
        <h2 id="product-heading" class="sr-only">Products</h2>
        <div class="grid grid-cols-2 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4">
          <div v-for="product in products" class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <ProductItemPreview :product="product" />
          </div>
        </div>
      </section>
    </main>
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
  await $api.product.getProducts(12).then((res) => res.data)
</script>