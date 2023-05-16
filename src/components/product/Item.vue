<template>
    <div class="p-4 flex flex-col h-full justify-between">
        <div>
            <img v-if="product.product.picture_url" :src="product.product.picture_url" class="w-full">
            <img v-else class="w-full" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
            <div class="mt-4 flex justify-between">
                <p v-if="product.min_price === product.max_price" class="whitespace-nowrap font-bold text-base text-black">
                    {{ product.min_price }} р.
                </p>
                <p v-else class="font-bold text-base text-black">
                    {{ product.min_price }} — {{ product.max_price }} р.
                </p>
                <Icon class="hover:text-pink-600 transition-colors duration-200" name="ph:heart-light" size="1.5em" />
            </div>
            <p class="mt-2 text-black line-clamp-3 break-words">{{ product.product.name }}</p>
        </div>
        <button class="mt-4 rounded p-2 bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 text-white">В корзину</button>
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