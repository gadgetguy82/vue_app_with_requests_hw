<template lang="html">
  <div class="">
    <select-box v-if="locations" :locations="locations"></select-box>
    <location-details v-if="selectedLocation" :selectedLocation="selectedLocation"></location-details>
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
      locations: [],
      selectedLocation: null
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then(res => res.json()).then(data => this.locations = data);

    eventBus.$on("selected-location", location => this.selectedLocation = location);
  },
  components: {
    "select-box": SelectBox,
    "location-details": LocationDetails
  }
}
</script>

<style lang="css" scoped>
</style>
