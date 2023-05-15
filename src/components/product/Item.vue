<template>
    <div class="relative">
        <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full">
        <Icon class="absolute top-0 right-0 hover:text-pink-600 transition-colors duration-200" name="ph:heart-straight-light" size="2em" />
        <Icon class="absolute top-0 right-0 hover:text-pink-600 transition-colors duration-200" name="ph:heart-fill" size="2em" />
    </div>
    <div class="p-4 mt-4 flex justify-between">
        <div>
            <p class="mt-1 text-xl text-black">{{ product.name }}</p>
        </div>
        <p class="mt-1 font-semibold text-center text-base text-black">{{ product.minprice }} — {{ product.maxprice }} р.
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
    },
};
</script>

<!-- имя слева минимальная цена через дефис справа максимальная и описание -->