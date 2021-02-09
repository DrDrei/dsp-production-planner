import '../plugins/vuex'

import Vuex from 'vuex'
import planet from './planet'
import planets from './planets'
import productionMenu from './production-menu'

export default new Vuex.Store({
  modules: {
    planet,
    planets,
    productionMenu,
  },
})
