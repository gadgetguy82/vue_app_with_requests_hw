<template lang="html">
  <div class="stats">
    <google-charts :chartSettings="chartSettings"></google-charts>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import GoogleCharts from "@/components/GoogleCharts";

export default {
  name: "stats-box",
  props: ["chartSettings"],
  components: {
    "google-charts": GoogleCharts
  }
}
</script>

<style lang="css" scoped>
.stats {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #000000;
  height: 600px;
  width: 500px;
}
</style>
