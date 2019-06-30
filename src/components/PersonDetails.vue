<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedPerson.name}}</li>
      <li>Gender: {{selectedPerson.gender}}</li>
      <li>Age: {{selectedPerson.age}}</li>
      <li>Eye Colour: {{selectedPerson.eye_color}}</li>
      <li>Hair Colour: {{selectedPerson.hair_color}}</li>
      <li>Species: <router-link :to="{ name: 'species', params: {'selectSpecies': speciesObject} }">{{speciesObject.name}}</router-link></li>
      <li>Films: <span v-for="film in filmObjects"><router-link :to="{name: 'films', params: {'selectFilm': film}}">{{film.title}}, </router-link></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "person-details",
  props: ["selectedPerson", "filmObjects", "speciesObject"]
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
