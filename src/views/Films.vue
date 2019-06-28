<template lang="html">
  <div id="films">

  </div>
</template>

<script>

export default {
  name: "films",
  data() {
    return {
      films: []
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json()).then(data => this.films = data);
  },
}
</script>

<style lang="css" scoped>
</style>
