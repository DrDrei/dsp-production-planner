export default {
  namespaced: true,
  state: () => ({
    isOpen: false,
    planetId: null,
  }),
  getters: {
    isOpen: ({ isOpen }) => isOpen,
    planetId: ({ planetId }) => planetId,
  },
  mutations: {
    OPEN (state, { planetId }) {
      state.isOpen = true
      state.planetId = planetId
    },
    CLOSE (state) {
      state.isOpen = false
      state.planetId = null
    },
  },
  actions: {
    open ({ commit }, payload) {
      commit('OPEN', payload)
    },
    close ({ commit }) {
      console.log('closing...')
      commit('CLOSE')
    },
  },
}
