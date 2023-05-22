<template>
    <div class="relative">     
        <div class="mt-4 mb-4 flex gap-x-4">
            <img class="px-4 py-4 h-40 w-40 flex-none rounded-full" src="https://via.placeholder.com/350x200" alt="" />
            <div class="place-self-center">
                <p class="text-xl font-semibold leading-6 text-gray-900">{{ product_in_history.product }}</p>
                <p class="text-left mt-2 truncate text-lg leading-5 text-gray-500">{{ product_in_history.date }}</p>
            </div>
        </div>
        <button class="absolute top-1 right-2 h-8 w-8 rounded-full hover:bg-gray-300 focus:outline-none">
            <Icon name="ph:x" class="absolute top-0 right-0 h-8 w-8" size="1.5em"></Icon>
        </button>
    </div>
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