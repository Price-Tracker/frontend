<template>
  <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
    <div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      <div class="hidden lg:block">
        <form class="space-y-10 divide-y divide-gray-200">
          <div v-for="(section, sectionIdx) in filters" :key="section.name" :class="sectionIdx === 0 ? null : 'pt-10'">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">{{ section.name }}</legend>
              <div class="space-y-3 pt-6">
                <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                  <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value"
                    type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{
                    option.label }}</label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>

      <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">

        <div v-for="product in products" class="bg-white drop-shadow-md overflow-hidden rounded-lg">
          <ProductItemPreview :product="product" />
        </div>
        <h2 id="product-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
          <div v-for="product in products" :key="product.id"
            class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
              <img :src="product.imageSrc" :alt="product.imageAlt"
                class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
            </div>
            <div class="flex flex-1 flex-col space-y-2 p-4">
              <h3 class="text-sm font-medium text-gray-900">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="text-sm text-gray-500">{{ product.description }}</p>
              <div class="flex flex-1 flex-col justify-end">
                <p class="text-base font-medium text-gray-900">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
    productId: { type: Number, required: true },
})

const authStore = useAuthStore()
const { $api } = useNuxtApp()

const product = await $api.product.getProductById(props.productId).then((res) => res.data)

onMounted(async () => {
    if (authStore.isUserAuthenticated()) {
        await $api.history.addHistory(props.productId)
    }
})

</script>