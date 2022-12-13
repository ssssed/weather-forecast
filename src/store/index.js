import { createStore } from "vuex";

export default createStore({
  state: {
    forecasts: [],
  },
  getters: {
    getForecasts(state) {
      return state.forecasts;
    },
  },
  mutations: {
    updateForecasts(state, payload) {
      const city = state.forecasts.find(
        (c) => c.city_name == payload.city_name
      );
      if (!city) state.forecasts.push(payload);
    },
  },
  actions: {
    addForecast({ commit }, payload) {
      commit("updateForecasts", payload);
    },
  },
  modules: {},
});
