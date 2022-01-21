import { writable } from "svelte/store";

const pageTransitionStore = writable({
    show: false
})

export default {
    pageTransition: {
        show() {
            pageTransitionStore.set({ show: true })
        },
        hide() {
            pageTransitionStore.set({ show: false })
        },
        subscribe: pageTransitionStore.subscribe,
    },
    user: {
        getAccessToken: () => localStorage.getItem('constelation.volt'),
        setAccessToken: (accessToken) => localStorage.setItem('constelation.volt', accessToken),
    },
}
