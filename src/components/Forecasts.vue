<template>
  <div class="forecasts">
    <forecast-item
      v-for="forecast in getForecasts"
      :key="forecast.id"
      :city_name="forecast.city_name"
      :link="forecast.link"
      :weather="forecast.weather"
      :desc="forecast.description"
    />
  </div>
</template>

<script>
import ForecastVue from "./Forecast.vue";
import { mapGetters } from "vuex";
export default {
  name: "forecasts-list",
  components: {
    "forecast-item": ForecastVue,
  },
  data() {
    return {
      data: "hello",
    };
  },
  computed: {
    ...mapGetters(["getForecasts"]),
  },
};
</script>

<style>
.forecasts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  padding: 40px 0 0;
}
</style>
