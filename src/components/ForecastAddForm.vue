<template>
  <form class="form" @submit.prevent="handleSubmitForm">
    <div class="form__container">
      <input v-model="city" type="text" class="form__input" name="search" />
      <button class="form__submit" type="submit">Submit</button>
    </div>
    <p class="form__error">{{ error }}</p>
  </form>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      city: "",
      error: "",
    };
  },
  methods: {
    ...mapActions(["addForecast"]),
    async handleSubmitForm() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.VUE_APP_TOKEN}&units=metric&lang=ru`
        );
        const weatherInfo = response.data.weather[0];
        const weatherTemp = response.data.main;
        if (response.status == 200) {
          this.addForecast({
            id: weatherInfo.id,
            city_name: this.city,
            weather: Math.round(weatherTemp.temp),
            link: weatherInfo.icon,
            description: weatherInfo.description,
          });
        }
      } catch (error) {
        this.error = "Неудалось найти город с таким названием";
      } finally {
        this.city = "";
      }
    },
  },
};
</script>

<style scoped src="">
.form__container {
  display: flex;
  gap: 10px;
}
.form__input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: white;
}

.form__input:focus {
  outline: none;
}

.form__submit {
  background: #fe1c3c;
  padding: 5px 8px;
  text-transform: uppercase;
  border: 0;
  color: white;
  border-radius: 3px;
}

.disable {
  background: gray;
}

.form__error {
  color: white;
  padding: 10px 0 0;
}
</style>
