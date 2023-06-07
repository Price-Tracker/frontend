<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
            <h2 class="sr-only">Products</h2>
            <div class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="product in products" :key="product.id" class="border-r border-b border-gray-200 p-4 sm:p-6">
                    <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                        <img :src="product.imageSrc" :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="pt-10 pb-4 text-center">
                        <h3 class="text-sm font-medium text-gray-900">
                            <a :href="product.href">
                                <span aria-hidden="true" class="inset-0"></span>
                                {{ product.name }}
                            </a>
                        </h3>
                        <div class="mt-3 flex flex-col items-center">
                            <p class="mt-1 text-sm text-gray-500">{{ product.reviewCount }} reviews</p>
                        </div>
                        <p class="mt-4 text-base font-medium text-gray-900">{{ product.price }}</p>
                        <button class="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const runtimeConfig = useRuntimeConfig()

const { authRequest } = useAuthFetch()

const { data: favourite, loading } = await useAsyncData(
    'favourite',
    () => $fetch(`${runtimeConfig.public.apiBaseUrl}/favourite`, {
      method: 'GET',
      onRequest: authRequest
    }),
    {
        transform: (favourite) => favourite.data,
        server: false
    }
)
</script>