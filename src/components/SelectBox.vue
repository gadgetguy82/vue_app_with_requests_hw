<template lang="html">
  <div class="">
    <select v-if="films" v-model="selectedFilm" v-on:change="handleSelect">
      <option v-for="film in films" :value="film">{{film.title}}</option>
    </select>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";

export default {
  name: "select-box",
  data() {
    return {
      selectedFilm: {}
    }
  },
  props: ["films"],
  methods: {
    handleSelect() {
      eventBus.$emit("selected-film", this.selectedFilm);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
