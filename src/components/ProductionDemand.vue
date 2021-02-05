<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex xs12
              sm8
              md6>
        <v-card class="mb-3 pb-3">
          <v-card-title>
            Universe Consumption
          </v-card-title>
          <v-simple-table dense outlined>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Raw Resource
                  </th>
                  <th>
                    Consumption (units/min)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="each in resources" :key="each.resource">
                  <td>{{ each.resource }}</td>
                  <td>{{ each.amount }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider />
        </v-card>
        <div v-for="planet in planets" :key="planet.id">
          <planet :planet-id="planet.id" class="mt-3" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Planet from './Planet'
export default {
  name: 'ProductionDemand',
  components: {
    Planet,
  },
  computed: {
    ...mapGetters({
      resources: 'planets/resources',
      planets: 'planets/planets',
    }),
  },
}
</script>
