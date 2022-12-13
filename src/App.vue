<template>
  <div class="page">
    <h1 class="page__title">Simple Weather App</h1>
    <forecast-add-form />
    <forecasts-list />
  </div>
</template>

<script>
import ForecastAddForm from "./components/ForecastAddForm.vue";
import ForecastsVue from "./components/Forecasts.vue";
export default {
  name: "App",
  components: {
    "forecasts-list": ForecastsVue,
    "forecast-add-form": ForecastAddForm,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #0b1c39;
}
.page {
  background: #0b1c39;
  height: 100vh;
  padding: 40px;
}

.page__title {
  color: #fdfdfe;
  padding: 0 0 20px;
}
</style>
