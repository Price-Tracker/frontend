<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center">
                <Icon name="material-symbols:person-add-rounded" size="5em" />
            </div>
            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Регистрация
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="user_name" class="block text-sm font-medium leading-6 text-gray-900">Имя
                    </label>
                    <div class="mt-2">
                        <input id="user_name" name="user_name" type="text" autocomplete="text"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="user_surname" class="block text-sm font-medium leading-6 text-gray-900">Фамилия</label>
                    </div>
                    <div class="mt-2">
                        <input id="user_surname" name="user_surname" type="user_surname" autocomplete="user_surname"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Эл. почта
                    </label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Зарегистрироваться</button>
                </div>
            </form>

            <p class="mt-4 text-center text-sm text-gray-500">
                Уже есть зарегистрированы?
                <a href="/signin"
                    class="font-semibold underline underline-offset-1 leading-6 text-indigo-600 hover:text-indigo-500">Войти</a>
            </p>
        </div>
    </div>
</template>