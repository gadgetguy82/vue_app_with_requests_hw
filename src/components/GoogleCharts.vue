<template lang="html">
  <div class="chart">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import {GChart} from "vue-google-charts";

export default {
  name: "google-charts",
  props: ["chartSettings"],
  data() {
    return {
      chartType: "ColumnChart"
    }
  },
  computed: {
    chartData: function() {return this.chartSettings.data},
    chartOptions: function() {return this.chartSettings.options}
  },
  components: {
    GChart
  }
}
</script>

<style lang="css" scoped>
</style>
