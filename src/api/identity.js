import axios from "axios"
import { ResponseErrorModal } from "../components";
import environment from '../environment'
import { ResponseError } from "../models/ResponseError.model";
import store from '../store'

const api = axios.create({
    baseURL: environment.VX_API_IDENTITY,
})

api.interceptors.response.use((response) => {
    console.log('response:', response)
    return response;
}, (err) => {
    console.log('Intercepted error:', err)
    const error = ResponseError.fromAxiosError(err)
    store.modal.open({ component: ResponseErrorModal, props: { error } })
    return Promise.reject(error)
});

const authApi = axios.create({
    baseURL: environment.VX_API_IDENTITY,
})

authApi.interceptors.request.use(request => {
    const accessToken = store.user.getAccessToken()
    request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
})

authApi.interceptors.response.use(response => {
    console.log('response:', response)
    return response
}, err => {
    return Promise.reject(err)
})

/**
 * @param {String} email
 * @param {String} password
 */
async function getTokenAsync(email, password) {
    const response = await api.post('/token', { email, password })
    return response.data
}

async function getUsersAsync() {
    const response = await authApi.get('/users')
    return response.data
}

async function getUserByIdAsync(id) {
    const response = await authApi.get(`/users/${id}`)
    return response.data
}

async function signUpAsync(email, password) {
    try {
        const response = await api.post('/signUp', { email, password })
        return response.data

    } catch (err) {
        throw err
    }
}

export default {
    getTokenAsync,
    getUserByIdAsync,
    getUsersAsync,
    signUpAsync,
}
