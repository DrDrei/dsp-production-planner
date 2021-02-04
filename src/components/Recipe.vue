<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex class="box"
              xs12
              sm8
              md6>
        <v-card>
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
          <div v-if="rawResources.length">
            <v-simple-table dense outlined>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Raw Resource
                    </th>
                    <th class="text-left">
                      Consumption (units/min)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in rawResources"
                    :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.amount.toFixed(2) }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-divider />
            <br>
          </div>
          <v-treeview :items="items" dense selection-type="independent">
            <template v-slot:label="{ item }">
              {{ item.name + ": " + item.amount }}
            </template>
            <template v-slot:append="{ item }">
              <v-btn v-if="item.key" icon @click="removeProduction(item.key)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </template>
          </v-treeview>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Recipe from '../data/recipes'
export default {
  data: () => ({
    recipeName: '',
    units: null,
    items: [],
  }),
  computed: {
    recipes () {
      return (new Recipe()).list()
    },
    rawResources () {
      if (!this.items.length) return []

      const raw = {}
      for (const item of this.items) {
        for (const [name, amount] of Object.entries(item.raw)) {
          if (name in raw) {
            raw[name] += amount
          } else {
            raw[name] = amount
          }
        }
      }
      return Object.entries(raw).map(([name, amount]) => ({ name, amount }))
    },
  },
  methods: {
    addProduction () {
      this.items.push(new Recipe(this.recipeName).build(this.units).root)
    },
    focusInput () {
      this.$refs.valueInput.focus()
    },
    removeProduction (key) {
      var index = this.items.findIndex(x => x.key === key)
      this.items.splice(index, 1)
    },
  },
}
</script>
