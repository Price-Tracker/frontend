<template>
    <div>
        <ProductItemFull :productId="productId"></ProductItemFull>
    </div>
</template>
  
<script setup>
const route = useRoute()
const productId = +route.params.id
</script>
