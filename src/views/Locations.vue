<template lang="html">
  <div id="locations">
    <div class="main">
      <h2>Locations</h2>
      <select-box v-if="locations" :locations="locations"></select-box>
      <location-details v-if="selectedLocation && filmObjects && peopleObjects" :selectedLocation="selectedLocation" :filmObjects="filmObjects" :peopleObjects="peopleObjects"></location-details>
    </div>
    <div class="sidebar_right">

    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import LocationDetails from "@/components/LocationDetails";

export default {
  name: "locations",
  data() {
    return {
      locations: null,
      selectedLocation: null,
      filmObjects: null,
      peopleObjects: null
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then(res => res.json()).then(data => this.locations = data);

    eventBus.$on("selected-location", location => {
      this.selectedLocation = location;
      this.filmObjects = [];
      this.peopleObjects = [];
      this.selectedLocation.films.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.filmObjects.push(data)));
      if (this.selectedLocation.residents.length > 1) {
        this.selectedLocation.residents.map(residentURL => fetch(residentURL).then(res => res.json()).then(data => this.peopleObjects.push(data)));
      }
    });
  },
  components: {
    "select-box": SelectBox,
    "location-details": LocationDetails
  }
}
</script>

<style lang="css" scoped>
.main {
  width: 580px;
}

.sidebar_right{
  width: 500px;
}
</style>
