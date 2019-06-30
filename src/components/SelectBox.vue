<template lang="html">
  <div class="select_box">
    <select v-if="films" v-model="selectedFilm" v-on:change="handleSelectFilm">
      <option value="Select a film..." disabled>Select a film...</option>
      <option v-for="film in films" :value="film" :selected="selectFilm === film">{{film.title}}</option>
    </select>
    <select v-if="people" v-model="selectedPerson" v-on:change="handleSelectPerson">
      <option v-for="person in people" :value="person">{{person.name}}</option>
    </select>
    <select v-if="locations" v-model="selectedLocation" v-on:change="handleSelectLocation">
      <option v-for="location in locations" :value="location">{{location.name}}</option>
    </select>
    <select v-if="species" v-model="selectedSpecies" v-on:change="handleSelectSpecies">
      <option v-for="species in species" :value="species">{{species.name}}</option>
    </select>
    <select v-if="vehicles" v-model="selectedVehicle" v-on:change="handleSelectVehicle">
      <option v-for="vehicle in vehicles" :value="vehicle">{{vehicle.name}}</option>
    </select>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";

export default {
  name: "select-box",
  data() {
    return {
      selectedFilm: {},
      selectedPerson: {},
      selectedLocation: {},
      selectedSpecies: {},
      selectedVehicle: {}
    }
  },
  props: ["films", "people", "locations", "species", "vehicles", "selectFilm"],
  methods: {
    handleSelectFilm() {
      eventBus.$emit("selected-film", this.selectedFilm);
    },
    handleSelectPerson() {
      eventBus.$emit("selected-person", this.selectedPerson);
    },
    handleSelectLocation() {
      eventBus.$emit("selected-location", this.selectedLocation);
    },
    handleSelectSpecies() {
      eventBus.$emit("selected-species", this.selectedSpecies);
    },
    handleSelectVehicle() {
      eventBus.$emit("selected-vehicle", this.selectedVehicle);
    },
  }
}
</script>

<style lang="css" scoped>
.select_box {
  text-align: center;
}

select {
  font-size: 16px;
}
</style>
