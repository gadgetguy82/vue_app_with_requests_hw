<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedSpecies.name}}</li>
      <li>Classification: {{selectedSpecies.classification}}</li>
      <li>Eye Colours: {{selectedSpecies.eye_colors}}</li>
      <li>Hair Colours: {{selectedSpecies.hair_colors}}</li>
      <li>People: {{selectedSpecies.people}}</li>
      <li>Films: {{selectedSpecies.films}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "species-details",
  props: ["selectedSpecies"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
