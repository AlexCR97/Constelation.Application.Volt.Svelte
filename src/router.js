import { navigateTo } from "svelte-router-spa";
import { LoginPage, SignUpPage, SplashPage } from "./pages";
import store from "./store";

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
    console.log('Showing...')
    store.pageTransition.show()
    console.log('Waiting...')
    await waitAsync(500)
    console.log('Hiding...')
    store.pageTransition.hide()
    console.log('Navigating...')
    navigateTo(path)
    console.log('Navigation complete!')
}

async function waitAsync(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds);
    })
}
