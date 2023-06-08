<template>
    <section v-if="product" aria-labelledby="cart-heading" class="lg:col-span-12">
        <ProductItemPreview :product="product" :isCartItem="true" />
    </section>
</template>

<script setup>
const props = defineProps({
    productStoreId: { type: Number, required: true }
})

const { $api } = useNuxtApp()

const product = ref(null)

onMounted(async () => {
    let fetchResult = await $api.product.getProductByProductStoreId(props.productStoreId).then((res) => res.data)
    product.value = fetchResult
    console.log(fetchResult)
})

</script>