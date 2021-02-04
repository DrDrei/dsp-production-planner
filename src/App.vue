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
      <HelloWorld />
      <recipe />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Recipe from './components/Recipe'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Recipe,
  },

}
</script>
