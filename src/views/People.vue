<template lang="html">
  <div id="people">
    <select-box v-if="people" :people="people"></select-box>
    <person-details v-if="selectedPerson" :selectedPerson="selectedPerson"></person-details>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import PersonDetails from "@/components/PersonDetails";

export default {
  name: "people",
  data() {
    return {
      people: null,
      selectedPerson: null
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(res => res.json()).then(data => this.people = data);

    eventBus.$on("selected-person", person => this.selectedPerson = person);
  },
  components: {
    "select-box": SelectBox,
    "person-details": PersonDetails
  }
}
</script>

<style lang="css" scoped>
</style>
