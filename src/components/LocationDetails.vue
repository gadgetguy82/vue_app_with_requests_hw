<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedLocation.name}}</li>
      <li>Climate: {{selectedLocation.climate}}</li>
      <li>Terrain: {{selectedLocation.terrain}}</li>
      <li>Surface Water: {{selectedLocation.surface_water}}</li>
      <li>Residents: <span v-for="resident in peopleObjects"><router-link :to="{name: 'people', params: {'selectPerson': resident}}">{{resident.name}}, </router-link></span></li>
      <li>Films: <span v-for="film in filmObjects"><router-link :to="{name: 'films', params: {'selectedFilm': film}}">{{film.title}}, </router-link></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "location-details",
  props: ["selectedLocation", "filmObjects", "peopleObjects"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
