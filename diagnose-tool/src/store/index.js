import Vue from "vue";
import Vuex from "vuex";
import api from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    symptoms: [],
  },
  mutations: {
    setSymptoms(state, payload) {
      state.symptoms = payload;
    },
  },
  actions: {
    fetchSymptoms(context) {
      api
        .get("/symptoms")
        .then((resp) => {
          console.log(resp.data);
          context.commit("setSymptoms", resp.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  modules: {},
});
