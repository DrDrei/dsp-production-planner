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
              raw[key] += value.toFixed(2)
            } else {
              raw[key] = value.toFixed(2)
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
  },
}
