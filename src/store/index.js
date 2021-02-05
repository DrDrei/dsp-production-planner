import '../plugins/vuex'

import Vuex from 'vuex'
import planet from './planet'
import planets from './planets'

export default new Vuex.Store({
  modules: {
    planet,
    planets,
  },
})
