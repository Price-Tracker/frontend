<template>
    <!-- <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://via.placeholder.com/350x200" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ history.date }}</p>
        </div>
    </div> -->

    <div class="mt-4 mb-4 flex gap-x-4">
        <img class="px-4 py-4 h-40 w-40 flex-none rounded-full" src="https://via.placeholder.com/350x200" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-xl font-semibold leading-6 text-gray-900">{{ product_in_history.product }}</p>
          <p class="mt-2 truncate text-lg leading-5 text-gray-500">{{ product_in_history.date}}</p>
        </div>
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