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
          <v-text-field v-model.number="amount"
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
                  <v-tooltip left>
                    <template v-slot:activator="{ }">
                      <v-hover v-slot="{ hover }">
                        <v-img :src="col.img || 'https://citybreaks.christiantour.ro/assets/img/img-placeholder-alpha-750x550.png'"
                               width="48"
                               height="46"
                               :class="{'hoverCard': hover}" />
                      </v-hover>
                    </template>
                    <span>Top tooltip</span>
                  </v-tooltip>
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
    amount: 0,
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
    }),
  },
}
</script>

<style scoped>

td {
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
}
.hoverCard {
  background-color: grey;
  cursor: pointer;
}
</style>
