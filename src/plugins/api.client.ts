import UserRepository from "~/repository/userRepository";
import ProductRepository from "~/repository/productRepository";
import HistoryRepository from "~/repository/historyRepository";
import CartRepository from "~/repository/cartRepository";

interface IApiInstance {
    user: UserRepository;
    product: ProductRepository;
    history: HistoryRepository;
    cart: CartRepository;
}

export default defineNuxtPlugin(nuxtApp => {
    const authFetch = useAuthFetch();

    const fetchOptions = {
        baseURL: nuxtApp.$config.public.apiBaseUrl,
    }
    const authFetchOptions = {
        ...fetchOptions,
        onRequest: authFetch.authRequest,
    }

    const apiFetcher = $fetch.create(fetchOptions);
    const apiAuthFetcher = $fetch.create(authFetchOptions);

    const modules: IApiInstance = {
        user: new UserRepository(apiFetcher, apiAuthFetcher),
        product: new ProductRepository(apiFetcher, apiAuthFetcher),
        history: new HistoryRepository(apiAuthFetcher),
        cart: new CartRepository(apiAuthFetcher),
    };

    return {
        provide: {
            api: modules,
        },
    };
});