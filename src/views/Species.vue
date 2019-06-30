<template lang="html">
  <div id="species">
    <select-box v-if="species" :species="species"></select-box>
    <species-details v-if="selectedSpecies && !setSpecies && filmObjects && peopleObjects" :selectedSpecies="selectedSpecies" :filmObjects="filmObjects" :peopleObjects="peopleObjects"></species-details>
    <species-details v-if="setSpecies && filmObjects && peopleObjects" :selectedSpecies="selectedSpecies" :filmObjects="filmObjects" :peopleObjects="peopleObjects"></species-details>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import SpeciesDetails from "@/components/SpeciesDetails"

export default {
  name: "species",
  props: ["selectSpecies"],
  computed: {
    setSpecies: function () {
      if (this.selectSpecies && this.set) {
        this.selectedSpecies = this.selectSpecies;
        this.fetchURLs();
        this.set = false;
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      species: null,
      selectedSpecies: null,
      filmObjects: null,
      peopleObjects: null,
      set: true
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/species")
    .then(res => res.json()).then(data => this.species = data);

    eventBus.$on("selected-species", species => {
      this.selectedSpecies = species;
      this.filmObjects = [];
      this.peopleObjects = [];
      this.selectedSpecies.films.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.filmObjects.push(data)));
      this.selectedSpecies.people.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.peopleObjects.push(data)));
    });
  },
  methods: {
    fetchURLs: function() {
      this.filmObjects = [];
      this.peopleObjects = [];
      this.selectedSpecies.films.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.filmObjects.push(data)));
      this.selectedSpecies.people.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.peopleObjects.push(data)));
    }
  },
  components: {
    "select-box": SelectBox,
    "species-details": SpeciesDetails
  }
}
</script>

<style lang="css" scoped>
</style>
