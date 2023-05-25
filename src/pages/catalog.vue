<template>
    <!-- breadcrumb -->
    <div class="border-b border-gray-200">
        <nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol role="list" class="flex items-center space-x-4 py-4">
                <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
                    <div class="flex items-center">
                        <a :href="breadcrumb.href" class="mr-4 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
                        <svg viewBox="0 0 6 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            class="h-5 w-auto text-gray-300">
                            <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                        </svg>
                    </div>
                </li>
                <li class="text-sm">
                    <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{breadcrumb.name}</a>
                </li>
            </ol>
        </nav>
    </div>



    <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pt-24 pb-10">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">{product.category}</h1>
        </div>

        <div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
                <h2 class="sr-only">Фильтры</h2>

                <button type="button" class="inline-flex items-center lg:hidden" @click="mobileFiltersOpen = true">
                    <span class="text-sm font-medium text-gray-700">Фильтры</span>
                    <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                </button>

                <div class="hidden lg:block">
                    <form class="space-y-10 divide-y divide-gray-200">
                        <div v-for="(section, sectionIdx) in filters" :key="section.name"
                            :class="sectionIdx === 0 ? null : 'pt-10'">
                            <fieldset>
                                <legend class="block text-sm font-medium text-gray-900">{{ section.name }}</legend>
                                <div class="space-y-3 pt-6">
                                    <div v-for="(option, optionIdx) in section.options" :key="option.value"
                                        class="flex items-center">
                                        <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                                            :value="option.value" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                        <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{
                                            option.label }}</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </aside>

            <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                <h2 id="product-heading" class="sr-only">Products</h2>

                <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                    <div v-for="product in products" :key="product.id"
                        class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                            <img :src="product.imageSrc" :alt="product.imageAlt"
                                class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
                        </div>
                        <div class="flex flex-1 flex-col space-y-2 p-4">
                            <h3 class="text-sm font-medium text-gray-900">
                                <a :href="product.href">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.name }}
                                </a>
                            </h3>
                            <p class="text-sm text-gray-500">{{ product.description }}</p>
                            <div class="flex flex-1 flex-col justify-end">
                                <p class="text-sm italic text-gray-500">{{ product.options }}</p>
                                <p class="text-base font-medium text-gray-900">{{ product.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<!-- <script setup>
useHead({
    title: 'Каталог'
})
</script> -->


<script setup>


const breadcrumbs = [{ id: 1, name: 'Главная', href: '#' }]


const filters = [
    {
        id: '{filter.name}',
        name: '{filter.name}',
        options: [
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
        ],
    },
    {
        id: '{filter.name}',
        name: '{filter.name}',
        options: [
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
        ],
    },
    {
        id: '{filter.name}',
        name: '{filter.name}',
        options: [
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
            { value: '{filter.value}', label: '{filter.value}' },
        ],
    },
]

const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
]

</script>