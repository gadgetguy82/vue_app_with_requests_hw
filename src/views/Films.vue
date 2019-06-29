<template lang="html">
  <div id="films">
    <select-box v-if="films" :films="films"></select-box>
    <film-details v-if="selectedFilm" :selectedFilm="selectedFilm"></film-details>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import FilmDetails from "@/components/FilmDetails";

export default {
  name: "films",
  data() {
    return {
      films: null,
      selectedFilm: null,
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()).then(data => this.films = data);

    eventBus.$on("selected-film", film => this.selectedFilm = film);
  },
  components: {
    "select-box": SelectBox,
    "film-details": FilmDetails
  }
}
</script>

<style lang="css" scoped>
</style>
