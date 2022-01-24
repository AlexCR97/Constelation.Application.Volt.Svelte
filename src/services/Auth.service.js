import api from "../api"
import store from "../store"

async function signUpWithEmailAsync(email, password) {
    await api.identity.signUpAsync(email, password)
    const response = await api.identity.getTokenAsync(email, password)
    const accessToken = response.content.accessToken
    const refreshToken = response.content.refreshToken
    store.user.setAccessToken(accessToken)
    store.user.setRefreshToken(refreshToken)
}

export default {
    signUpWithEmailAsync,
}
