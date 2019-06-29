<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedLocation.name}}</li>
      <li>Climate: {{selectedLocation.climate}}</li>
      <li>Terrain: {{selectedLocation.terrain}}</li>
      <li>Surface Water: {{selectedLocation.surface_water}}</li>
      <li>Residents: {{selectedLocation.residents}}</li>
      <li>Films: {{selectedFilms}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "location-details",
  props: ["selectedLocation"],
  computed: {
    selectedFilms: function() {
      if (this.selectedLocation) {
        return this.selectedLocation.films.map(
          filmURL => fetch(filmURL).then(res => res.json()).then(data => data));
      }
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
