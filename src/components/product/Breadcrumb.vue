<template>
    <nav aria-label="breadcrumb" class="px-8 py-8 w-full p-4 bg-gray-50 text-gray-800">
        <ol class="flex h-2 space-x-2">
            <li class="flex items-center">
                <a rel="noopener noreferrer" href="#" title="Back to homepage" class="hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-5 h-5 pr-1 text-gray-600">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                        </path>
                    </svg>
                </a>
            </li>
            <li class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                    class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                    <path d="M32 30.031h-32l16-28.061z"></path>
                </svg>
                <a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Домашний</a>
            </li>
            <li class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                    class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                    <path d="M32 30.031h-32l16-28.061z"></path>
                </svg>
                <a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Домашний</a>
            </li>
            <li class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
                    class="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400">
                    <path d="M32 30.031h-32l16-28.061z"></path>
                </svg>
                <a rel="noopener noreferrer" href="#"
                    class="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Текущий</a>
            </li>
        </ol>
    </nav>
</template>


<!-- 
    breadcrumb
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
    </div> -->