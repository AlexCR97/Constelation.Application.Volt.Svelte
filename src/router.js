import { navigateTo } from "svelte-router-spa";
import { LoginPage, SplashPage } from "./pages";

export const routes = [
    // {
    //     name: '/',
    //     component: SplashPage,
    // },
    // {
    //     name: '/login',
    //     component: LoginPage,
    // },
    {
        name: '/',
        component: LoginPage,
    },
]

export const router = {
    splash: {
        go: () => navigateTo('/'),
    },
    login: {
        go: () => navigateTo('/login'),
    },
}
