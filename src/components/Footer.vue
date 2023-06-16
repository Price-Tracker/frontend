<template>
    <footer class="bg-black text-gray-300 p-4">
        <div class="container mx-auto px-4 py-4">
            <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 justify-items-center md:auto-cols-min sm:max-h-32 sm:text-sm">
                <div v-for="(item, index) in links">
                    <NuxtLink :key="index" :to="item.to">
                        {{ item.label }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { label: 'О сервисе', to: '/about' },
            ],
        };
    },
};
</script>