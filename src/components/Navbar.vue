<template>
    <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-4 py-4">
            <div class="grid grid-cols-3 justify-items-center">
                <nav class="flex justify-around items-center">
                    <ul class="flex space-x-4">
                        <li v-for="link of links_part1">
                            <NuxtLink class="text-black hover:text-green-600 transition-colors duration-200" :to="link.to">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center border border-black bg-white rounded-full px-4 py-2 m-2 w-96">
                    <input class="bg-transparent outline-none w-full text-gray-700 leading-tight focus:outline-none"
                        type="text" placeholder="Поиск">
                    <button class="flex-shrink-0 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors duration-200"
                        type="button">
                        <Icon name="ph:magnifying-glass" size="1.5em"></Icon>
                    </button>
                </div>
                <nav class="flex items-center leading-5">
                    <ul class="flex space-x-4">
                        <li>
                            <button class="flex flex-col items-center text-black hover:text-green-600 transition-colors duration-200">
                                <Icon name="ph:user" size="1.5em" />
                                <NuxtLink v-if="isLoggedIn" to="/account">
                                    {{ username }}
                                </NuxtLink>
                                <NuxtLink v-else to="/signin">
                                    Вход
                                </NuxtLink>
                            </button>
                        </li>
                        <li v-for="link of links_part2">
                            <button class="flex flex-col items-center text-black hover:text-green-600 transition-colors duration-200">
                                <Icon :name="link.icon" size="1.5em" />
                                <NuxtLink :to="link.to">
                                    {{ link.name }}
                                </NuxtLink>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    setup() {
        const authStore = useAuthStore()

        const isLoggedIn = computed(() => {
            return authStore.accessToken !== null
        })

        const username = computed(() => {
            return authStore.user
        })

        return {
            isLoggedIn,
            username,
        }
    },
    data() {
        return {
            links_part1: [
                { to: '/', name: 'Главная' },
                { to: '/shops', name: 'Магазины' },
                { to: '/catalog', name: 'Каталог' },
            ],
            links_part2: [
                { to: '/favourite', name: 'Избранное', icon: 'ph:star' },
                { to: '/cart', name: 'Корзина', icon: 'ph:shopping-cart' },
            ],
            links_part3: [
            ],
        };
    },
};
</script>