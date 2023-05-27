import UserRepository from "~/repository/userRepository";
import ProductRepository from "~/repository/productRepository";

interface IApiInstance {
    user: UserRepository;
    product: ProductRepository;
}

export default defineNuxtPlugin(nuxtApp => {
    const fetchOptions = {
        baseURL: nuxtApp.$config.public.apiBaseUrl,
    }

    const apiFetcher = $fetch.create(fetchOptions);

    const modules: IApiInstance = {
        user: new UserRepository(apiFetcher),
        product: new ProductRepository(apiFetcher),
    };

    return {
        provide: {
            api: modules,
        },
    };
});