<template>
  <v-card class="mt-10">
    <v-card-title v-if="!planet.editable" class="row-pointer" @click="editPlanet">
      {{ planet.name }}
    </v-card-title>
    <v-card-title v-else>
      <v-container>
        <v-row class="mb-1">
          <v-text-field ref="planetInput"
                        v-model="planet.name"
                        dense
                        outlined
                        class="m-3"
                        hide-details
                        @keypress.enter="savePlanet" />
        </v-row>
        <v-row>
          <v-btn small
                 text
                 color="red"
                 @click="removePlanet">
            delete
          </v-btn>
          <v-spacer />
          <v-btn small
                 text
                 class="mr-1"
                 @click="cancelPlanet">
            cancel
          </v-btn>
          <v-btn small
                 color="success"
                 @click="savePlanet">
            save
          </v-btn>
        </v-row>
      </v-container>
    </v-card-title>
    <v-divider />
    <v-btn color="pink"
           fab
           dark
           small
           absolute
           top
           right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
                      v-model.number="units"
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
    planet: {
      editable: false,
      name: 'Planet',
      backup: '',
    },
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
      removePlanet: 'planets/remove',
    }),
    editPlanet () {
      this.planet.editable = !this.planet.editable
      this.planet.backup = this.planet.name
      this.$nextTick(function () {
        this.$refs.planetInput.focus()
      })
    },
    savePlanet () {
      this.planet.editable = !this.planet.editable
    },
    cancelPlanet () {
      this.planet.name = this.planet.backup
      this.planet.editable = !this.planet.editable
    },
    deletePlanet () {
      this.removePlanet({ id: this.planetId })
    },
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

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
