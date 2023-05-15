<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center">
                <Icon name="bi:person-circle" size="5em" />
            </div>
            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход в аккаунт
            </h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="signin" class="space-y-4">
                <div>
                    <label for="login_or_email" class="block text-sm font-medium leading-6 text-gray-900">Логин или
                        почта</label>
                    <div class="mt-2">
                        <input v-model="login_or_email" id="login_or_email" name="login_or_email" type="email"
                            autocomplete="email"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="password" id="password" name="password" type="password"
                            autocomplete="current-password"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <button type="submit" :disabled="isLoading || !isFormValid" :class="{
                        'bg-indigo-600': isFormValid,
                        'bg-red-600': !isFormValid,
                        'hover:bg-indigo-500': isFormValid,
                        'hover:bg-red-500': !isFormValid,
                    }"
                        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300">
                        <span v-if="!isLoading">Войти</span>
                        <span v-else class="flex items-center">
                            <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z">
                                </path>
                            </svg>
                            Войти
                        </span>
                    </button>
                </div>
            </form>

            <div v-if="errorMessage" class="bg-red-600 rounded-md p-1 mt-4">
                <p class="text-center text-white">{{ errorMessage }}</p>
            </div>

            <p class="mt-4 text-center text-sm text-gray-500">
                Не зарегистрированы?
                <a href="/signup"
                    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Зарегистрироваться</a>
            </p>
            <div class="text-sm text-center">
                <a href="/recovery" class="font-semibold text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const head = useHead({
            title: 'Вход'
        })

        const store = useAuthStore()
        const login_or_email = ref('')
        const password = ref('')
        const errorMessage = ref('')
        const isLoading = ref(false)
        const router = useRouter()

        const isFormValid = computed(() => {
            return login_or_email.value.trim() !== '' && password.value.trim() !== ''
                && login_or_email.value.length >= 4 && password.value.length >= 4
        })

        const signin = async () => {
            errorMessage.value = ''
            isLoading.value = true

            try {
                let result = await store.login(login_or_email.value, password.value)
                if (!result) {
                    errorMessage.value = "Неправильный логин, почта, или пароль!"
                } else {
                    router.push('/')
                }
            } catch (error) {
                console.error('Login failed:', error)
                errorMessage.value = 'Произошла неизвестная ошибка!'
            } finally {
                isLoading.value = false
            }
        }

        return {
            head,
            store,
            login_or_email,
            password,
            errorMessage,
            isLoading,
            isFormValid,
            signin
        }
    },
}
</script>