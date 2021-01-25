export const state = () => ({

})

export const mutations = {

}

export const actions = {
    async booking({ commit }, form) {
        try {
            const response = await this.$axios.$post(
                '/reservation/booking',
                form
            ).catch(err => {
                if (err.response.status === 400) {
                    throw new Error(err.response.data.error)
                }
                
                throw err
            })
            return true
        } catch (error) {
            return { error: error.message }
        }
    },
}