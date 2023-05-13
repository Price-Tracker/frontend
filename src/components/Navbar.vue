<template>
    <header class="bg-gray-800">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <a href="/" class="text-white font-bold text-xl">
                    My Logo
                </a>
                <nav>
                    <ul class="flex space-x-4">
                        <li class="group relative">
                            <a href="#home" class="text-white hover:text-gray-300 p-1">
                                Home
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg p-4 rounded hidden group-hover:block">
                                <h3 class="font-bold text-lg mb-2">Home Popup</h3>
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
            popupLinks: [
                { text: 'Link 1', url: '#link1' },
                { text: 'Link 2', url: '#link2' },
                { text: 'Link 3', url: '#link3' },
            ],
        };
    },
};
</script>
  