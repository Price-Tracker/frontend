<template>
    <div>
        <ProductList :categoryId="categoryId"></ProductList>
    </div>
</template>
  
<script setup>
const route = useRoute()
const categoryId = route.params.id
</script>
