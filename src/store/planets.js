import { v4 as uuidv4 } from 'uuid'
import Recipes from '../data/recipes'

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
            raw[key] = raw[key] || 0
            raw[key] += parseFloat(value)
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
    REMOVE_PLANET ({ planets }, { id }) {
      var index = planets.findIndex(x => x.id === id)
      planets.splice(index, 1)
    },
    ADD_PRODUCTION (state, { id, tree }) {
      const planet = state.planets.find(x => x.id === id)
      planet.trees.push(tree)
    },
    REMOVE_PRODUCTION ({ planets }, { planetId, tree }) {
      var trees = planets.find(x => x.id === planetId).trees
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
    remove ({ commit }, payload) {
      commit('REMOVE_PLANET', payload)
    },
    addProduction ({ commit }, { id, name, units }) {
      commit('ADD_PRODUCTION', {
        id,
        tree: Recipes.build(name, units),
      })
    },
    removeProduction ({ commit }, payload) {
      commit('REMOVE_PRODUCTION', payload)
    },
  },
}
