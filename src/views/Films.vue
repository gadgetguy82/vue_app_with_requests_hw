<template lang="html">
  <div id="films">
    <div class="main">
      <h2>Films</h2>
      <select-box v-if="films" :films="films" :selectFilm="selectedFilm"></select-box>
      <film-details v-if="selectedFilm && !setFilm" :selectedFilm="selectedFilm"></film-details>
      <film-details v-if="setFilm" :selectedFilm="selectedFilm"></film-details>
    </div>
    <div class="sidebar_right">
      <stats-box v-if="chartSettings" :chartSettings="chartSettings"></stats-box>
    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import FilmDetails from "@/components/FilmDetails";
import StatsBox from "@/components/StatsBox";

export default {
  name: "films",
  props: ["selectFilm"],
  computed: {
    setFilm: function() {
      if (this.selectFilm && this.set) {
        this.selectedFilm = this.selectFilm;
        this.set = false;
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      films: null,
      selectedFilm: null,
      set: true,
      chartSettings: {
        type: null,
        data: null,
        options: {
          title: "Film scores on Rotten Tomato",
          height: 400
        }
      },
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()).then(data => {
      this.films = data
      this.chartSettings.type = "ColumnChart";
      this.chartSettings.data = [["Title", "Rating"]]
      .concat(this.films.map(film => [film.title, parseFloat(film.rt_score)]));
    });

    eventBus.$on("selected-film", film => this.selectedFilm = film);
  },
  components: {
    "select-box": SelectBox,
    "film-details": FilmDetails,
    "stats-box": StatsBox
  }
}
</script>

<style lang="css" scoped>
#films {

}

.main {
  width: 580px;
}

.sidebar_right{
  width: 500px;
}
</style>
