<template>
  <v-app>
    <v-app-bar app
               color="primary"
               dark>
      <v-toolbar-title>
        DSP Production Calc
      </v-toolbar-title>

      <v-spacer />
      <v-btn icon @click="openGithub">
        <v-icon>
          mdi-github
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ProductionDemand class="mt-3" />
      <v-btn color="green"
             dark
             fixed
             bottom
             right
             fab
             @click="addPlanet">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-main>
    <production-picker />
  </v-app>
</template>

<script>
import ProductionDemand from './components/ProductionDemand'
import ProductionPicker from './components/ProductionPicker'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    ProductionDemand,
    ProductionPicker,
  },
  methods: {
    ...mapActions({
      addPlanet: 'planets/add',
    }),
    openGithub () {
      window.open('https://github.com/DrDrei/dsp-production-planner', '_blank')
    },
  },
}
</script>
