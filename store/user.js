
export const state = () => ({
    currentUser: {}
})

export const mutations = {
    SET_CURRENT_TOKEN(state, token) {
        localStorage.tokenSession = token

    },


}

export const actions = {
    async register({ commit }, form) {
        try {
            const response = await $axios.post(
                localStorage.server + '/register',
                form
            ).catch(err => {
                if (err.response.status === 400) {
                    throw new Error(err.response.data.status)
                }
                throw err
            })
            const token = response.headers.tokensession
            commit('SET_CURRENT_TOKEN', token)
            return true
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    },
    async signIn({ commit }, form) {
        try {
            const response = await $axios.post(
                localStorage.server + '/connect',
                form
            ).catch(err => {
                if (err.response.status === 400) {
                    throw new Error(err.response.data.status)
                }
                throw err
            })
            const token = response.headers.tokensession
            commit('SET_CURRENT_TOKEN', token)
            return true
        } catch (error) {
            return { error: error.message }
        }
    },
}