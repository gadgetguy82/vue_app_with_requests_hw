<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedVehicle.name}}</li>
      <li>Vehicle Class: {{selectedVehicle.vehicle_class}}</li>
      <li>Description: {{selectedVehicle.description}}</li>
      <li>Length: {{selectedVehicle.length}}</li>
      <li>Pilot: {{selectedVehicle.pilot}}</li>
      <li>Films: {{selectedVehicle.films}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vehicle-details",
  props: ["selectedVehicle"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
