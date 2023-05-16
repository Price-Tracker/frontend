<template>
    <NuxtLink :to="'/category/' + category.id">
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900 text-center">{{ category.name }}</h3>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
};
</script>