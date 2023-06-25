<template>
    <div v-if="loading">
        Загрузка...
    </div>
    <section v-else class="text-gray-600 body-font overflow-hidden">
        <!-- <ProductBreadcrumb /> -->
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div class="flex justify-center lg:w-auto w-full">
                    <img v-if="product.product.picture_url" :src="product.product.picture_url"
                        class="w-full max-w-sm hover:scale-105 transition duration-200">
                    <img v-else class="w-full max-w-sm"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                </div>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div class="flex justify-between">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.product.name }}</h1>
                        <button type="button"
                        @click="toggleSubscribe(product.productStoreId)" class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <Icon name="ph:heart-light" class="h-8 w-8 flex-shrink-0" aria-hidden="true" />
                            <span class="sr-only">Add to favorites</span>
                        </button>
                    </div>
                    <p v-if="product.product.description" class="leading-relaxed">{{ product.product.description }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div class="flex items-center flex-col">
                        <div v-for="store in product.prices"
                            class="m-2 title-font font-medium text-base md:text-xl lg:text-xl xl:text-2xl text-gray-900 flex justify-between w-full">
                            <span class="m-2">
                                {{ store.price }} р.
                            </span>
                            <span class="m-2">
                                {{ store.store_name }}
                            </span>
                            <button @click="addToCart(store.product_store_id)"
                                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">В
                                корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <ProductUsersReviews /> -->
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

const addToCart = async (productStoreId) => {
    if (authStore.isUserAuthenticated()) {
        await $api.cart.addToCart(productStoreId, 1) // allow user to select quantity
    }
    alert("Товар добавлен в корзину!")
}

let subscribeResponse = ref(false)

if (authStore.isUserAuthenticated()) {
    subscribeResponse.value = (await $api.product.subscribeInfo(props.productId).then(res => res.data.subscribed))
}

const isSubscribed = computed(() => {
    return subscribeResponse.value
})

const toggleSubscribe = async (productId) => {
    if (authStore.isUserAuthenticated()) {
        if (!isSubscribed.value) {
            try {
                await $api.product.subscribeProduct(productId)
                subscribeResponse.value = true
                alert('Вы успешно подписались на уведомления о снижении цены')
            } catch (e) {
                alert('Произошла ошибка при подписке на уведомления')
                console.error(e)
            }
        } else {
            try {
                await $api.product.unsubscribeProduct(productId)
                subscribeResponse.value = false
                alert('Вы успешно отписались от уведомлений о снижении цены')
            } catch (e) {
                alert('Произошла ошибка при отписке от уведомлений')
                console.error(e)
            }
        }
    }
}
</script>