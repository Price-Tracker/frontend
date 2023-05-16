<template>
    <NuxtLink :to="'/category/' + category.id">
        <img class="h-48 w-full object-cover" src="https://via.placeholder.com/350x200" alt="Category Image">
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900">{{ category.name }}</h3>
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