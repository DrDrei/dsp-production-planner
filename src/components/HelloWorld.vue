<template>
  <v-container fluid>
    <v-btn fab
           large
           dark
           bottom
           left
           class="v-btn--example">
      <v-icon>{{ activeFab.icon }}</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
  })

}
</script>
<style scoped>
  #lateral .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>
