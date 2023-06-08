<template>
  <div class="flex h-full">
    <div class="flex-1 xl:overflow-y-auto">
      <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-blue-gray-900">Аккаунт</h1>
        <form class="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div class="sm:col-span-6">
              <h2 class="text-xl font-medium text-blue-gray-900">Профиль</h2>
              <p class="mt-1 text-sm text-blue-gray-500">Эта информация будет отображаться публично, поэтому будьте
                осторожны с тем, чем вы делитесь.</p>
            </div>
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-blue-gray-900">Имя</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                class="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-blue-gray-900">Фамилия</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                class="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
            </div>
            <div class="sm:col-span-6">
              <label for="username" class="block text-sm font-medium text-blue-gray-900">Никнейм</label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input type="text" name="username" id="username" autocomplete="username" value=""
                  class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-blue-gray-300 text-blue-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="photo" class="block text-sm font-medium text-blue-gray-900">Фото профиля</label>
              <div class="mt-1 flex items-center">
                <img class="inline-block h-12 w-12 rounded-full"
                  src=""
                  alt="" />
                <div class="ml-4 flex">
                  <div
                    class="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                    <label for="user-photo" class="pointer-events-none relative text-sm font-medium text-blue-gray-900">
                      <span>Сменить</span>
                    </label>
                    <input id="user-photo" name="user-photo" type="file"
                      class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                  </div>
                  <button type="button"
                    class="ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:border-blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-gray-50">Удалить</button>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
            <p class="text-sm text-blue-gray-500 sm:col-span-6">Этот аккаунт был создан <time
                datetime="2017-01-05T20:35:40">{account.date.created}</time>.</p>
          </div>
          <div class="flex justify-end pt-8">
            <button type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-blue-gray-900 shadow-sm hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Отмена</button>
            <button type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script setup>
useHead({
  title: 'Аккаунт'
})
</script>