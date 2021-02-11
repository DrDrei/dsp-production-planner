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
           right
           @click="open({planetId})">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-treeview :items="trees" dense selection-type="independent">
      <template v-slot:label="{ item }">
        <b>{{ item.name + ': ' }}</b> {{ item.units }}
      </template>
      <template v-slot:append="{ item }">
        <v-btn v-if="item.id" icon @click="removeProduction({planetId, tree: item})">
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
      return Recipe.list
    },
    trees () {
      return this.getTrees(this.planetId)
    },
  },
  methods: {
    ...mapActions({
      removeProduction: 'planets/removeProduction',
      removePlanet: 'planets/remove',
      open: 'productionMenu/open',
    }),
    editPlanet () {
      this.planet.editable = !this.planet.editable
      this.planet.backup = this.planet.name
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
  },
}
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
