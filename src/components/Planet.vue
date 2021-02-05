<template>
  <v-card my-3>
    <v-card-title>
      Planet
      <v-spacer />
      <v-btn icon color="yellow">
        <v-icon>mdi-trash</v-icon>
      </v-btn>
    </v-card-title>
    <v-layout row justify-center mx-3>
      <v-col cols="8">
        <v-autocomplete v-model="recipeName"
                        outlined
                        dense
                        :items="recipes"
                        @change="focusInput" />
      </v-col>
      <v-col cols="4">
        <v-text-field ref="valueInput"
                      v-model="units"
                      outlined
                      dense
                      clearable
                      type="number"
                      :append-outer-icon="'mdi-plus'"
                      @click:append-outer="addProduction"
                      @keypress.enter="addProduction" />
      </v-col>
    </v-layout>
    <v-treeview :items="trees" dense selection-type="independent">
      <template v-slot:label="{ item }">
        <b>{{ item.name + ': ' }}</b> {{ item.amount }}
      </template>
      <template v-slot:append="{ item }">
        <v-btn v-if="item.id" icon @click="removeProduction(item)">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </template>
    </v-treeview>
    <v-btn color="blue"
           dark
           fixed
           bottom
           right
           fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Recipe from '../data/recipes'
export default {
  name: 'Planet',
  props: {
    planetId: {
      type: String,
      default: null,
      require: true,
    },
  },
  data: () => ({
    recipeName: '',
    units: 0,
  }),
  computed: {
    ...mapGetters({
      getTrees: 'planets/getTrees',
    }),
    recipes () {
      return (new Recipe()).list()
    },
    trees () {
      return this.getTrees(this.planetId)
    },
  },
  methods: {
    ...mapActions({
      addProd: 'planets/addProduction',
      removeProd: 'planets/removeProduction',
    }),
    addProduction () {
      this.addProd({
        id: this.planetId,
        tree: new Recipe(this.recipeName).build(this.units).root,
      })
    },
    focusInput () {
      this.$refs.valueInput.focus()
    },
    removeProduction (tree) {
      this.removeProd({ id: this.planetId, tree })
    },
  },
}
</script>
