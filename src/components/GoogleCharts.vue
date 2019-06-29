<template lang="html">
  <div class="">
    <!-- <GCharts :type="chartSettings.type" :data="chartSettings.data" :options="chartSettings.options"/> -->
  </div>
</template>

<script>
import GChart from "vue-google-charts";

export default {
  name: "google-charts",
  data() {
    return {
      type: null,
      data: null,
      options: null
    }
  },
  props: ["chartSettings"],
  components: {
    GChart
  }
}
</script>

<style lang="css" scoped>
</style>
