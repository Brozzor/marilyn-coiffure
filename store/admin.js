export const state = () => ({})

export const mutations = {}

export const actions = {
  async dashboard({ commit }) {
    console.log('ttt')
    try {
        console.log('ttt')
      const response = await this.$axios.get('/admin/dashboard', {
          headers: {
            tokenSession: localStorage.tokenSession,
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            throw new Error(err.response.data.error)
          }
          throw err
        })
        console.log(response)
      return response
    } catch (error) {
      console.log(error)
      return { error: error.message }
    }
  },
}
