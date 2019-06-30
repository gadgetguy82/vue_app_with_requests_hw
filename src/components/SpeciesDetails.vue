<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedSpecies.name}}</li>
      <li>Classification: {{selectedSpecies.classification}}</li>
      <li>Eye Colours: {{selectedSpecies.eye_colors}}</li>
      <li>Hair Colours: {{selectedSpecies.hair_colors}}</li>
      <li>People: <span v-for="person in peopleObjects"><router-link :to="{name: 'people', params: {'selectPerson': person}}">{{person.name}}, </router-link></span></li>
      <li>Films: <span v-for="film in filmObjects"><router-link :to="{name: 'films', params: {'selectedFilm': film}}">{{film.title}}, </router-link></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "species-details",
  props: ["selectedSpecies", "filmObjects", "peopleObjects"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
