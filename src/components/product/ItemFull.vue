<template>
    <div v-if="loading">
        Загрузка...
    </div>
    <section v-else class="text-gray-600 body-font overflow-hidden">
        <nav aria-label="breadcrumb" class="px-40 py-8 w-full p-4 bg-gray-50 text-gray-800">
            <ol class="flex h-2 space-x-2">
                <li class="flex items-center">
                    <a rel="noopener noreferrer" href="#" title="Back to homepage" class="hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            class="w-5 h-5 pr-1 text-gray-600">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                        class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                        <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a rel="noopener noreferrer" href="#"
                        class="flex items-center px-1 capitalize hover:underline">Parent</a>
                </li>
                <li class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                        class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                        <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a rel="noopener noreferrer" href="#"
                        class="flex items-center px-1 capitalize hover:underline">Parent</a>
                </li>
                <li class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                        class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                        <path d="M32 30.031h-32l16-28.061z"></path>
                    </svg>
                    <a rel="noopener noreferrer" href="#"
                        class="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
                </li>
            </ol>
        </nav>
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div class="flex flex-col items-center">
                    <img v-if="product.product.picture_url" :src="product.product.picture_url"
                        class="w-full max-w-sm hover:scale-105 transition duration-200">
                    <img v-else class="w-full max-w-sm"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                </div>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div class="flex justify-between">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.product.name }}</h1>
                        <Icon class="hover:text-pink-600 transition-colors duration-200" name="ph:heart-light"
                            size="2.5em" />
                    </div>
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
                    <p v-if="product.product.description" class="leading-relaxed">{{ product.product.description }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div class="flex items-center">
                        <div v-for="store in product.prices"
                            class="title-font font-medium text-base md:text-xl lg:text-xl xl:text-2xl text-gray-900">
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