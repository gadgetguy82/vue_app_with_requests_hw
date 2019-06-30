<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedVehicle.name}}</li>
      <li>Vehicle Class: {{selectedVehicle.vehicle_class}}</li>
      <li>Description: {{selectedVehicle.description}}</li>
      <li>Length: {{selectedVehicle.length}}</li>
      <li>Pilot: <router-link :to="{ name: 'people', params: {'selectPerson': pilotObject} }">{{pilotObject.name}}</router-link></li>
      <li>Film: <router-link :to="{ name: 'films', params: {'selectedFilm': filmObject} }">{{filmObject.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vehicle-details",
  props: ["selectedVehicle", "pilotObject", "filmObject"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
