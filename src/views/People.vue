<template lang="html">
  <div id="people">
    <div class="main">
      <h2>Characters</h2>
      <select-box v-if="people" :people="people"></select-box>
      <person-details v-if="selectedPerson && !setPerson && speciesObject && filmObjects" :selectedPerson="selectedPerson" :filmObjects="filmObjects" :speciesObject="speciesObject"></person-details>
      <person-details v-if="setPerson && speciesObject && filmObjects" :selectedPerson="selectedPerson" :filmObjects="filmObjects" :speciesObject="speciesObject"></person-details>
    </div>
    <div class="sidebar_right">

    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SelectBox from "@/components/SelectBox";
import PersonDetails from "@/components/PersonDetails";

export default {
  name: "people",
  props: ["selectPerson"],
  computed: {
    setPerson: function() {
      if (this.selectPerson && this.set) {
        this.selectedPerson = this.selectPerson;
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
      people: null,
      selectedPerson: null,
      filmObjects: null,
      speciesObject: null,
      set: true
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(res => res.json()).then(data => this.people = data);

    eventBus.$on("selected-person", person => {
      this.selectedPerson = person;
      this.filmObjects = [];
      this.selectedPerson.films.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.filmObjects.push(data)));
      fetch(this.selectedPerson.species).then(res => res.json()).then(data => this.speciesObject = data);
    });
  },
  methods: {
    fetchURLs: function() {
      this.filmObjects = [];
      this.selectedPerson.films.map(filmURL => fetch(filmURL).then(res => res.json()).then(data => this.filmObjects.push(data)));
      fetch(this.selectedPerson.species).then(res => res.json()).then(data => this.speciesObject = data);
    }
  },
  components: {
    "select-box": SelectBox,
    "person-details": PersonDetails
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
