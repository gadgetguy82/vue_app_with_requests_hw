<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  mounted() {

  },
  components: {
    "nav-bar": NavBar,
  }
}
</script>

<style lang="css" scoped>
#app {
  display: flex;
  margin: 0;
  padding: 0;
}

#view{
  display: flex;
}
</style>
