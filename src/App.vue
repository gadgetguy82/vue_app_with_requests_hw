<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <h2>Test</h2>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  name: "app",
  mounted() {
    // fetch("https://ghibliapi.herokuapp.com/species")
    // .then(res => res.json()).then(data => console.log(data))
  },
  components: {
    "nav-bar": NavBar
  }
}
</script>

<style lang="css" scoped>
</style>
