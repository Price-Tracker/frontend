<template>
    <footer class="bg-black text-gray-300 p-4">
        <div class="container mx-auto px-4 py-4">
            <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 justify-items-center md:auto-cols-min sm:max-h-32 sm:text-sm">
                <div v-for="(item, index) in links"><a :href="item.to">{{ item.label }}</a> </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { label: 'О сервисе', to: '#' },
                { label: 'Возможности', to: '#' },
                { label: 'Применение', to: '#' },
                { label: 'Партнерам', to: '#' },
                { label: 'Цены', to: '#' },
                { label: 'База знаний', to: '#' },
                { label: 'Настройка системы', to: '#' },
                { label: 'Справочный центр', to: '#' },
                { label: 'Интеграции', to: '#' },
                { label: 'Отчеты', to: '#' },
                { label: 'Компания', to: '#' },
                { label: 'Наша история', to: '#' },
                { label: 'Преса о нас', to: '#' },
                { label: 'Карьера', to: '#' },
                { label: 'Контакты', to: '#' },
            ],
        };
    },
};
</script>