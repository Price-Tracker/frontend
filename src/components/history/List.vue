<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p class="px-4 py-8 text-4xl text-center font-bold text-gray-900">История</p>
            <div class="grid grid-cols-1 gap-8">
                <div v-if="loading" class="px-4 py-8 text-4xl text-center font-bold text-gray-900">Загрузка...</div>
                <div v-else v-for="historyItem in history" class="bg-white shadow-md overflow-hidden">
                    <HistoryItem :historyItem="historyItem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import moment from 'moment'; 

const serverTime = moment('2023-05-23T12:00:00Z');
const userTime = serverTime.local();
const formattedTime = userTime.format('MMMM Do YYYY, h:mm:ss a');

const runtimeConfig = useRuntimeConfig()

const { authRequest } = useAuthFetch()

const { data: history, loading } = await useAsyncData(
    'history',
    () => $fetch(`${runtimeConfig.public.apiBaseUrl}/history`, {
      method: 'GET',
      onRequest: authRequest
    }),
    {
        transform: (history) => history.data,
        server: false
    }
)
</script>