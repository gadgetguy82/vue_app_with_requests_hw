<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedLocation.name}}</li>
      <li>Climate: {{selectedLocation.climate}}</li>
      <li>Terrain: {{selectedLocation.terrain}}</li>
      <li>Surface Water: {{selectedLocation.surface_water}}</li>
      <li>Residents: {{selectedLocation.residents}}</li>
      <li>Films: {{selectedLocation.films}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "location-details",
  props: ["selectedLocation"]
}
</script>

<style lang="css" scoped>
</style>
