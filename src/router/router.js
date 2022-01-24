import { navigateTo } from "svelte-router-spa";
import { LoginPage, SignUpPage, SplashPage } from "../pages";
import store from "../store";

export const routes = [
    {
        name: '/',
        component: SplashPage,
    },
    {
        name: '/login',
        component: LoginPage,
    },
    {
        name: '/signUp',
        component: SignUpPage, // TODO Figure out why SignUpPage is crashing the app
    },
]

export const router = {
    back: async () => {
        store.pageTransition.show()
        await waitAsync(500)
        store.pageTransition.hide()
        navigateTo(path)
        window.history.back()
    },
    splash: {
        go: () => navigateAsync('/'),
    },
    login: {
        go: () => navigateAsync('/login'),
    },
    signUp: {
        go: () => navigateAsync('/signUp'),
    },
}

async function navigateAsync(path) {
    store.pageTransition.show()
    await waitAsync(500)
    store.pageTransition.hide()
    navigateTo(path)
}

async function waitAsync(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    })
}
