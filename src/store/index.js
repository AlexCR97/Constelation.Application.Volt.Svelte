import { writable } from "svelte/store";

const pageTransitionStore = writable({
    show: false
})

const loadingModalStore = writable({
    open: false,
    message: '',
})

export default {
    loadingModal: {
        open({ message }) {
            loadingModalStore.set({ open: true, message })
        },
        close() {
            loadingModalStore.set({ open: false, message: '' })
        },
        wait(milliseconds, { message }) {
            loadingModalStore.set({ open: true, message })
            setTimeout(() => loadingModalStore.set({ open: false, message: '' }), milliseconds);
        },
        subscribe: loadingModalStore.subscribe,
    },
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
