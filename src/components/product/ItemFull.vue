<template>
    <div class="flex justify-center w-full">
        <div v-if="loading">
            Загрузка...
        </div>
        <div v-else class="m-2 flex justify-evenly w-full">
            <div class="flex flex-col items-center">
                <div class="flex items-center mb-8">
                    <p class="text-2xl font-bold line-clamp-3 break-words">{{ product.product.name }}</p>
                    <Icon class="ml-3 hover:text-pink-600 transition-colors duration-200" name="ph:heart-light"
                        size="1.5em" />
                </div>
                <img v-if="product.product.picture_url" :src="product.product.picture_url"
                    class="w-full max-w-sm hover:scale-105 transition duration-200">
                <img v-else class="w-full max-w-sm"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                <div class="mt-4 flex">
                </div>
            </div>
            <div>
                <!-- actionbar -->


                <!-- store info -->
                <div class="flex flex-col h-full">
                    <!-- <div class="p-4 shadow-md rounded">
                        <p v-if="product.min_price === product.max_price"
                            class="whitespace-nowrap font-bold text-lg text-center">
                            {{ product.min_price }} р.
                        </p>
                        <p v-else class="font-bold text-lg text-center">
                            {{ product.min_price }} — {{ product.max_price }} р.
                        </p>
                    </div> -->
                    <div class="flex flex-col justify-around">
                        <div class="p-4 flex flex-col shadow-md">
                            <!-- <span class="font-bold text-xl">Магазины:</span> -->
                            <div v-for="store in product.prices" class="flex justify-between font-bold text-xl">
                                <span class="m-2">
                                    {{ store.price }} р.
                                </span>
                                <span class="m-2">
                                    {{ store.store_name }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
