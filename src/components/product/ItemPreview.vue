<template>
    <div :class="{
        'flex-col': !isCartItem,
        'flex-row': isCartItem,
    }" class="p-4 flex h-full justify-between">
        <div :class="{ 'flex w-full': isCartItem }">
            <img v-if="product.product.picture_url" :src="product.product.picture_url"
                class="w-48 px-8 hover:scale-105 transition duration-200">
            <img v-else class="w-full"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
            <div v-if="!isCartItem" class="mt-4 flex justify-between">
                <p v-if="product.min_price === product.max_price" class="whitespace-nowrap font-bold text-base text-black">
                    {{ product.min_price }} р.
                </p>
                <p v-else class="font-bold text-base text-black">
                    {{ product.min_price }} — {{ product.max_price }} р.
                </p>
                <button @click="toggleSubscribe(product.product.id)" class="focus:outline-none">
                    <Icon v-if="isSubscribed" class="text-pink-600" name="ph:heart-fill" size="1.5em" />
                    <Icon v-else class="hover:text-pink-600 transition-colors duration-200" name="ph:heart-light"
                        size="1.5em" />
                </button>
            </div>
            <p class="mt-4 mb-4 w-full h-full text-black line-clamp-3 break-words">{{ product.product.name }}</p>
            <div v-if="isCartItem" class="w-full mt-4">
                <p class="">{{ product.store.name }}: {{ product.price }} р.</p>
            </div>
            <div v-if="isCartItem" class="mt-4">
                <Icon class="text-gray-600" name="ph:x" size="1.5em" />
            </div>
        </div>
        <NuxtLink v-if="!isCartItem" :to="'/product/' + product.product.id">
            <button
                class="w-full mt-4 rounded p-2 bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 text-white">
                {{ product.prices.length }} {{ offerString }}
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    product: { type: Object, required: true },
    isCartItem: { type: Boolean, required: false, default: false },
})

const authStore = useAuthStore()
const { $api } = useNuxtApp()

const offerString = computed(() => {
    let offerCount = props.product.prices.length
    let offerString = 'предложение'
    if (offerCount >= 5) {
        offerString = 'предложений'
    } else if (offerCount >= 2) {
        offerString = 'предложения'
    }
    return offerString
})

let subscribeResponse = ref(false)

if (authStore.isUserAuthenticated()) {
    subscribeResponse.value = (await $api.product.subscribeInfo(props.product.product.id).then(res => res.data.subscribed))
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