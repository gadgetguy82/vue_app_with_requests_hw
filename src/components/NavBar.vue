<template lang="html">
  <nav>
    <router-link :to="{ name: 'films' }">Films</router-link>
    <router-link :to="{ name: 'people' }">People</router-link>
    <router-link :to="{ name: 'locations' }">Locations</router-link>
    <router-link :to="{ name: 'species' }">Species</router-link>
    <router-link :to="{ name: 'vehicles' }">Vehicles</router-link>
  </nav>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: center;
}

a {
  margin: 0 20px;
}
</style>
