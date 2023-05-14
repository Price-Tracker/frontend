<template>
    <header class="bg-black">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-around items-center">
                <nav class="flex justify-around items-center">
                    <ul class="flex space-x-4">
                        <li v-for="link of links_part1">
                            <NuxtLink class="text-white hover:text-gray-300" :to="link.to">
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <input class="bg-transparent outline-none w-full text-gray-700 leading-tight focus:outline-none"
                        type="text" placeholder="Search...">
                    <button class="flex-shrink-0 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        type="button">
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M9 0C4.582 0 1 3.582 1 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14.667c-3.158 0-5.667-2.51-5.667-5.667S5.842 3.333 9 3.333s5.667 2.51 5.667 5.667-2.51 5.667-5.667 5.667z" />
                            <path
                                d="M19.707 18.293l-4.8-4.8a7.971 7.971 0 0 0 1.6-4.8c0-4.418-3.582-8-8-8S0 3.582 0 8s3.582 8 8 8a7.971 7.971 0 0 0 4.8-1.6l4.8 4.8a1.061 1.061 0 0 0 1.5 0c.4-.4.4-1.066 0-1.466zM2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul class="flex items-center space-x-4">
                        <li>
                            <button class="flex flex-col items-center text-white hover:text-gray-300">
                                <Icon name="ph:user" size="2em" />
                                <NuxtLink v-if="isLoggedIn" to="/account">
                                    {{ username }}
                                </NuxtLink>
                                <NuxtLink v-else to="/signin">
                                    Вход
                                </NuxtLink>
                            </button>
                        </li>
                        <li v-for="link of links_part3">
                            <button class="flex flex-col items-center text-white hover:text-gray-300">
                                <Icon :name="link.icon" size="2em" />
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
            links_part3: [
                { to: '/favourite', name: 'Избранное', icon: 'ph:star' },
            ],
        };
    },
};
</script>