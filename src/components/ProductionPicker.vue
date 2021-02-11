<template>
  <v-dialog :value="isOpen"
            width="500"
            @input="close()">
    <v-card>
      <v-card-title>
        Add Planetary Production
      </v-card-title>
      <v-divider class="mb-3" />
      <v-card-text>
        <div class="my-3 mx-5">
          <v-text-field v-model.number="units"
                        autofocus
                        label="Production"
                        outlined
                        type="number"
                        suffix="/min"
                        hide-details
                        clearable
                        dense />
        </div>
        <v-container fluid>
          <v-layout row justify-center>
            <table>
              <tr v-for="(row, rowIndex) in recipes" :key="`row_${rowIndex}`">
                <td v-for="(col, colIndex) in row" :key="`col_${colIndex}`">
                  <v-img :src="col.img || 'https://citybreaks.christiantour.ro/assets/img/img-placeholder-alpha-750x550.png'"
                         max-width="44"
                         class="pa-3 hoverCard"
                         @click="addProduction(col)" />
                </td>
              </tr>
            </table>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Recipes from '../data/recipes'

export default {
  name: 'ProductionPicker',
  data: () => ({
    units: 0,
  }),
  computed: {
    ...mapGetters({
      isOpen: 'productionMenu/isOpen',
      planetId: 'productionMenu/planetId',
    }),
    recipes () {
      return Recipes.table()
    },
  },
  methods: {
    ...mapActions({
      close: 'productionMenu/close',
      add: 'planets/addProduction',
    }),
    addProduction ({ name }) {
      this.add({
        id: this.planetId,
        name,
        units: this.units,
      })
      this.close()
    },
  },
}
</script>

<style scoped>

td {
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  padding: 2px;
}
.hoverCard:hover {
  background-color: grey;
  cursor: pointer;
}
</style>
