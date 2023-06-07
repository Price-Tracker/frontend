<template>
    <section aria-labelledby="cart-heading" class="lg:col-span-7">
        <!-- Show product_store_id and quantity from productStore for debug -->
        <div class="flex justify-between">
            <p class="text-sm text-gray-500">
                {{ productStore.product_store_id }} {{ productStore.quantity }}
            </p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    productStore: { type: Object, required: true },
})

const { $api } = useNuxtApp()

onMounted(async () => {
    const product = await $api.product.getProductByProductStoreId(props.productStore.product_store_id).then((res) => res.data)
})

</script>