<template>
    <div class="relative pt-4 pb-4 bg-gray-100">
        <img :src="product.product.picture_url" class="h-full w-full">
        <Icon class="absolute top-0 right-0 hover:text-pink-600 transition-colors duration-200" name="ph:heart-straight-fill" size="2em" />
        <!-- <Icon class="absolute top-0 right-0 hover:text-pink-600 transition-colors duration-200" name="ph:heart-straight-light" size="2em" /> -->
    </div>
    <div class="p-4 mt-4">
            <p class="mt-1 text-xl text-black md:w-auto">{{ product.product.name }}</p>
        <p v-if="product.min_price === product.max_price" class="whitespace-nowrap mt-8 font-bold text-center text-base text-black">
            {{ product.min_price }} р.
        </p>
        <p v-else class="mt-8 font-bold text-center text-base text-black">
            {{ product.min_price }} — {{ product.max_price }} р.
        </p>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    }
};
</script>

<!-- имя слева минимальная цена через дефис справа максимальная и описание -->