<template lang="html">
  <div id="species">
    <select-box v-if="species" :species="species"></select-box>
    <species-details v-if="selectedSpecies" :selectedSpecies="selectedSpecies"></species-details>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import SpeciesDetails from "@/components/SpeciesDetails"

export default {
  name: "species",
  data() {
    return {
      species: null,
      selectedSpecies: null
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/species")
    .then(res => res.json()).then(data => this.species = data);

    eventBus.$on("selected-species", species => this.selectedSpecies = species)
  },
  components: {
    "select-box": SelectBox,
    "species-details": SpeciesDetails
  }
}
</script>

<style lang="css" scoped>
</style>
