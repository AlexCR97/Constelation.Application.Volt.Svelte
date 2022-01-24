import api from "../api"

async function signUpWithEmailAsync(email, password) {
    try {
        const response = await api.identity.signUpAsync(email, password)
        return response
    } catch (err) {
        throw err
    }
}

export default {
    signUpWithEmailAsync,
}
