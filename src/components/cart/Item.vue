<template>
    <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <div v-if="products && products.length === 0" class="px-4 py-8 text-4xl text-center font-bold text-gray-900">В
            корзине ничего нет!</div>
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
                <li v-for="(product, cartID) in products" :key="product.id" class="flex py-6 sm:py-10">
                    <div class="flex-shrink-0">
                        <img :src="product.product.picture_url" :alt="product.imageAlt"
                            class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
                    </div>
                    <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                                <div class="flex justify-between">
                                    <h3 class="text-sm">
                                        <a :href="product.product.picture_url"
                                            class="font-medium text-gray-700 hover:text-gray-800">{{
                                                product.name }}</a>
                                    </h3>
                                </div>
                                <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:pr-9">
                                <div class="absolute top-0 right-0">
                                    <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Удалить</span>
                                        <Icon name="ph:x" class="h-6 w-6" aria-hidden="true" size="1.5em" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    cartID: { type: Number, required: false },
})

const { $api } = useNuxtApp()

const cart = props.productId ?
    await $api.cart.getProductsByCategoryId(props.cartID).then((res) => res.data)
    :
    await $api.cart.getCart().then((res) => res.data)
</script>

<!-- <script setup>

const products = [
    {
        id: 1,
        name: '{product.name}',
        href: '#',
        price: '{product.price}',
        imageSrc: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
]
</script> -->


<!-- 
<script>
export default {
    props: {
        products: {
            type: Object,
            required: true,
        },
    },
    components: { Icon }
};
</script> -->