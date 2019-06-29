<template lang="html">
  <div class="">
    <ul>
      <li>Name: {{selectedPerson.name}}</li>
      <li>Gender: {{selectedPerson.gender}}</li>
      <li>Age: {{selectedPerson.age}}</li>
      <li>Eye Colour: {{selectedPerson.eye_color}}</li>
      <li>Hair Colour: {{selectedPerson.hair_color}}</li>
      <li>Films: {{selectedPerson.films}}</li>
      <li>Species: {{selectedPerson.species}}</li>
      <li>URL: {{selectedPerson.url}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "person-details",
  props: ["selectedPerson"]
}
</script>

<style lang="css" scoped>
</style>
