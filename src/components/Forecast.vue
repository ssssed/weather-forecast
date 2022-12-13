<template>
  <div class="forecast">
    <p class="forecast__name">{{ city_name }}</p>
    <h2 class="forecast__weather">{{ weather }} <sup>&#xb0;C</sup></h2>
    <img :src="getLink" alt="snow rain" class="forecast__img" />
    <p class="forecast__description">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "forecast-item",
  props: {
    city_name: String,
    weather: Number,
    link: String,
    desc: String,
  },
  computed: {
    getLink() {
      return require(`../assets/${this.link}.svg`);
    },
  },
};
</script>

<style scoped>
.forecast {
  background: #fefefe;
  border-radius: 24px;
  max-width: 180px;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  border: 2px solid black;
}
.forecast__name {
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  color: #515561;
}

.forecast__weather {
  font-size: 40px;
  color: #191f2a;
}
.forecast__img {
  width: 100px;
  height: 100px;
}
.forecast__description {
  text-align: center;
}
</style>
