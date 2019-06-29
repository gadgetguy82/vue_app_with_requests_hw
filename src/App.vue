<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <router-view id="view"></router-view>
    <stats-box></stats-box>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import StatsBox from "@/components/StatsBox"

export default {
  name: "app",
  mounted() {

  },
  components: {
    "nav-bar": NavBar,
    "stats-box": StatsBox
  }
}
</script>

<style lang="css" scoped>
#app {
  display: flex;
  margin: 0;
  padding: 0;
}
</style>
