<template lang="html">
  <div class="sidebar">
    <div class="title">
      <h2>Studio Ghibli Anime Feature Films</h2>
      <h3>ジオジブリ</h3>
      <h3>株式会社スタ</h3>
    </div>
    <nav>
      <router-link :to="{ name: 'films' }">Films</router-link>
      <router-link :to="{ name: 'people' }">People</router-link>
      <router-link :to="{ name: 'locations' }">Locations</router-link>
      <router-link :to="{ name: 'species' }">Species</router-link>
      <router-link :to="{ name: 'vehicles' }">Vehicles</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style lang="css" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #000000;
  height: 600px;
}

.title {
  display: flex;
  flex-direction: row;
}

h2 {
  width: 150px;
  background-color: #59518A;
  margin: 0;
  color: #FFFFFF;
  font-family: 'Abel', sans-serif;
}

h3 {
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  width: 20px;
  margin: 0;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a {
  border-bottom: 1px solid #D3D3D3;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  color: #A9A9A9;
  font-family: 'Stylish', sans-serif;
  font-size: 30px;
}

a:hover {
  background-color: #00FF7F;
}
</style>
