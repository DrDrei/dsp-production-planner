import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: () => ({
    planets: [],
  }),
  getters: {
    planets: ({ planets }) => planets,
    getTrees: ({ planets }) => (id) => planets.find(x => x.id === id).trees,
    resources: function ({ planets }) {
      const raw = {}
      for (const { trees } of planets) {
        for (const tree of trees) {
          for (const [key, value] of Object.entries(tree.raw)) {
            if (key in raw) {
              raw[key] += parseFloat(value)
            } else {
              raw[key] = parseFloat(value)
            }
          }
        }
      }
      return Object.entries(raw).map(([resource, amount]) => ({ resource, amount }))
    },
  },
  mutations: {
    ADD_PLANET ({ planets }, { id }) {
      planets.push({
        id,
        trees: [],
      })
    },
    ADD_PRODUCTION (state, { id, prodId, tree }) {
      const planet = state.planets.find(x => x.id === id)
      planet.trees.push(tree)
    },
    REMOVE_PRODUCTION ({ planets }, { id, tree }) {
      var trees = planets.find(x => x.id === id).trees
      var index = trees.findIndex(x => x.id === tree.id)
      trees.splice(index, 1)
    },
  },
  actions: {
    add ({ commit }) {
      commit('ADD_PLANET', {
        id: uuidv4(),
        production: [],
      })
    },
    addProduction ({ commit }, { id, tree }) {
      commit('ADD_PRODUCTION', {
        id,
        tree,
      })
    },
    removeProduction ({ commit }, payload) {
      commit('REMOVE_PRODUCTION', payload)
    },
  },
}
