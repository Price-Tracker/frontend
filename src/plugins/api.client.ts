import UserRepository from "~/repository/userRepository";

interface IApiInstance {
    user: UserRepository;
}

export default defineNuxtPlugin(nuxtApp => {
    const fetchOptions = {
        baseURL: nuxtApp.$config.public.apiBaseUrl,
    }

    const apiFetcher = $fetch.create(fetchOptions);

    const modules: IApiInstance = {
        user: new UserRepository(apiFetcher),
    };

    return {
        provide: {
            api: modules,
        },
    };
});