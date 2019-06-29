<template lang="html">
  <div id="vehicles">
    <select-box v-if="vehicles" :vehicles="vehicles"></select-box>
    <vehicle-details v-if="selectedVehicle" :selectedVehicle="selectedVehicle"></vehicle-details>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import VehicleDetails from "@/components/VehicleDetails";

export default {
  name: "vehicles",
  data() {
    return {
      vehicles: null,
      selectedVehicle: null
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
    .then(res => res.json()).then(data => this.vehicles = data);

    eventBus.$on("selected-vehicle", vehicle => this.selectedVehicle = vehicle);
  },
  components: {
    "select-box": SelectBox,
    "vehicle-details": VehicleDetails
  }
}
</script>

<style lang="css" scoped>
</style>
