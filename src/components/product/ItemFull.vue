<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                    <img v-if="product.product.picture_url" :src="product.product.picture_url"
                        class="w-full max-w-sm hover:scale-105 transition duration-200">
                    <img v-else class="w-full max-w-sm"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                </div>

                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.product.name }}</h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <span class="text-gray-600 ml-3">here reviews count {{}}</span>
                        </span>
                    </div>
                    <p class="leading-relaxed">here product description {{ product.description }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div class="flex items-center">
                        <div v-for="store in product.prices" class="title-font font-medium text-2xl text-gray-900">
                            <span class="m-2">
                                {{ store.price }} р.
                            </span>
                            <span class="m-2">
                                {{ store.store_name }}
                            </span>
                        </div>
                        <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">В
                            корзину</button>
                        <Icon class="ml-3 hover:text-pink-600 transition-colors duration-200" name="ph:heart-light"
                            size="1.5em" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    productId: { type: Number, required: true },
})

const runtimeConfig = useRuntimeConfig()
const { data: product, loading } = await useAsyncData(
    'product',
    () => $fetch(`${runtimeConfig.public.apiBaseUrl}/product/${props.productId}`),
    {
        transform: (product) => product.data,
    }
)

const { post } = useAuthFetch()

onMounted(async () => {
    const authStore = useAuthStore()

    if (authStore.accessToken) {
        let result = await post(`${runtimeConfig.public.apiBaseUrl}/history`, { product_id: props.productId })

        console.log(result.data)
    }
})


</script>
