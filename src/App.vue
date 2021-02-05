<template>
  <v-app>
    <v-app-bar app
               color="primary"
               dark>
      <v-toolbar-title>
        DSP Production Calc
      </v-toolbar-title>

      <v-spacer />
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
  </v-app>
</template>

<script>
import ProductionDemand from './components/ProductionDemand'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    ProductionDemand,
  },
  methods: {
    ...mapActions({
      addPlanet: 'planets/add',
    }),
  },
}
</script>
