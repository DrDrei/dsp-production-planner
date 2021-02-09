<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex xs12
              sm8
              md6>
        <v-card>
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
                  <td>{{ each.amount.toFixed(2) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider />
        </v-card>
        <div v-for="planet in planets" :key="planet.id">
          <planet-card :planet-id="planet.id" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PlanetCard from './PlanetCard'

export default {
  name: 'ProductionDemand',
  components: {
    PlanetCard,
  },
  computed: {
    ...mapGetters({
      resources: 'planets/resources',
      planets: 'planets/planets',
    }),
  },
}
</script>
