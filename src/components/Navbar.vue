<template>
    <header class="bg-gray-800">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-around items-center">
                <nav class="flex justify-around items-center">
                    <ul class="flex space-x-4">
                        <li v-for="link of links_part1">
                            <nuxt-link :key="link.name" :to="link.to" exact v-text="link.name"
                                class="text-white hover:text-gray-300" />
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul class="flex space-x-4">
                        <li class="group relative">
                            <a href="#home" class="text-white hover:text-gray-300 pb-2">
                                Home
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg p-4 pb-2 hidden group-hover:block z-10">
                                <ul>
                                    <li v-for="(link, index) in popupLinks" :key="index">
                                        <a :href="link.url" class="block mb-2 hover:text-gray-600">
                                            {{ link.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#about" class="text-white hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="text-white hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            links_part1: [
                { to: '/shops', name: 'Магазины' },
                { to: '/catalog', name: 'Каталог' },
            ],
            popupLinks: [
                { text: 'Link 1', url: '#link1' },
                { text: 'Link 2', url: '#link2' },
                { text: 'Link 3', url: '#link3' },
            ],
        };
    },
};
</script>
  