export const state = () => ({})

export const mutations = {}

export const actions = {
  async dashboard({ commit }) {

    try {
        console.log('ttt')
      const response = await this.$axios.$get('/admin/dashboard', {
          headers: {
            'Access-Control-Allow-Origin': '*',
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
