import api from "../api"

async function signUpWithEmailAsync(email, password) {
    const response = await api.identity.signUpAsync(email, password)
    console.log('response:', response)
    return response
}

export default {
    signUpWithEmailAsync,
}
