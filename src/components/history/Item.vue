<template>
    <div class="mt-4 mb-4 flex justify-between gap-x-4">
        <img class="px-4 py-4 h-40 w-40 flex-none rounded-full" src="https://via.placeholder.com/350x200" alt="" hover:bg-red-600/>
        <div class="place-self-center">
            <p class="text-xl font-semibold leading-6 text-gray-900">{{ product_in_history.product }}</p>
            <p class="mt-2 truncate text-lg leading-5 text-gray-500">{{ product_in_history.date }}</p>
        </div>
        <div class="px-4 py-2">
            <Icon name="ph:x" size="1.5em"></Icon>
        </div>
    </div>

    <!-- <div class="bg-white rounded-lg shadow-lg p-4">
        <img class="w-full" src="https://via.placeholder.com/350x200" alt="" />
        <p class="mt-2 font-semibold leading-6 text-gray-900">{{ product_in_history.product }}</p>
        <p class="mt-2 truncate leading-5 text-gray-500">{{ product_in_history.date }}</p>
    </div> -->
</template>

<script>
export default {
    props: {
        product_in_history: {
            type: Object,
            required: true,
        },
    }
};
</script>