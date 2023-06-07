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
            <form @submit.prevent="signup" class="space-y-4">
                <div>
                    <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
                    <div class="mt-2">
                        <input v-model="login" id="login" name="login" type="text" autocomplete="text" required="true"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Эл. почта</label>
                    <div class="mt-2">
                        <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="true"
                            class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                    <div class="mt-2">
                        <input v-model="password" id="password" name="password" type="password" required="true"
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
                        <span v-if="!isLoading">Зарегистрироваться</span>
                        <span v-else class="flex items-center">
                            <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z">
                                </path>
                            </svg>
                            Зарегистрироваться
                        </span>
                    </button>
                </div>
            </form>

            <div v-if="errorMessage" class="bg-red-600 rounded-md p-1 mt-4">
                <p class="text-center text-white">{{ errorMessage }}</p>
            </div>

            <p class="mt-4 text-center text-sm text-gray-500">
                Уже есть зарегистрированы?
                <a href="/signin"
                    class="font-semibold underline underline-offset-1 leading-6 text-indigo-600 hover:text-indigo-500">Войти</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    async setup() {
        const head = useHead({
            title: 'Регистрация'
        })

        const store = useAuthStore()
        const { $api } = useNuxtApp()
        const login = ref('')
        const email = ref('')
        const password = ref('')
        const errorMessage = ref('')
        const isLoading = ref(false)
        const router = useRouter()

        const passwordRequirements = await $api.user.passwordRequirements()

        const isFormValid = computed(() => {
            errorMessage.value = ''
            let isValid = login.value.length >= 3 && login.value.length <= 32 &&
                email.value.length >= 3 && email.value.length <= 32 &&
                password.value.length >= passwordRequirements.min_length &&
                password.value.length <= passwordRequirements.max_length &&
                (password.value.match(/[A-Z]/g)?.length || 0) >= passwordRequirements.min_uppercase &&
                (password.value.match(/[a-z]/g)?.length || 0) >= passwordRequirements.min_lowercase &&
                (password.value.match(/[0-9]/g)?.length || 0) >= passwordRequirements.min_digits &&
                (password.value.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)?.length || 0) >= passwordRequirements.min_special
            return isValid
        })

        const signup = async () => {
            errorMessage.value = ''
            isLoading.value = true

            try {
                let result = await $api.user.signup(login.value, email.value, password.value)
                if (!result) {
                    errorMessage.value = "Такой пользователь уже существует!"
                } else {
                    let tokens = await $api.user.login(login.value, password.value)
                    store.saveUserTokens(tokens.data.access_token, tokens.data.refresh_token)
                    router.push('/')
                }
            } catch (error) {
                console.error('Register failed:', error)
                errorMessage.value = 'Произошла неизвестная ошибка! Код: 2'
            } finally {
                isLoading.value = false
            }
        }

        return {
            head,
            store,
            login,
            email,
            password,
            errorMessage,
            isLoading,
            isFormValid,
            signup
        }
    },
}
</script>