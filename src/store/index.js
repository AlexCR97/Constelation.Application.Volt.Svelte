import { writable } from "svelte/store";

const pageTransitionStore = writable({
    show: false
})

const loadingModalStore = writable({
    open: false,
    message: '',
})

const modalStore = writable({
    open: false,
    component: undefined,
    props: {},
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
    modal: {
        open({ component, props }) {
            modalStore.set({ open: true, component, props })
        },
        close() {
            modalStore.set({ open: false, component: undefined, props: {} })
        },
        subscribe: modalStore.subscribe,
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
        getAccessToken: () => localStorage.getItem('constelation.volt.accessToken'),
        setAccessToken: (accessToken) => localStorage.setItem('constelation.volt.accessToken', accessToken),

        getRefreshToken: () => localStorage.getItem('constelation.volt.refreshToken'),
        setRefreshToken: (refreshToken) => localStorage.setItem('constelation.volt.refreshToken', refreshToken),
    },
}
