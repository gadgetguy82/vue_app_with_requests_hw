<template lang="html">
  <div class="">
    <ul>
      <li>Title: {{selectedFilm.title}}</li>
      <li>Director: {{selectedFilm.director}}</li>
      <li>Producer: {{selectedFilm.producer}}</li>
      <li>Release Date: {{selectedFilm.release_date}}</li>
      <li>Rotten Tomato Score: {{selectedFilm.rt_score}}</li>
      <li>Description: {{selectedFilm.description}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "film-details",
  props: ["selectedFilm"],
}
</script>

<style lang="css" scoped>
ul {
  font-family: 'Shojumaru', cursive;
  font-size: 20px;
}
</style>
