import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diagnoseResult: [],
    nearby: [],
    url: "",
    address: "",
    hospitalDetail: {},
  },
  mutations: {
    setDiagnoseResult(state, payload) {
      state.diagnoseResult = payload;
    },
    setNearby(state, payload) {
      state.nearby = payload;
    },
    setUrl(state, payload) {
      state.url = payload;
    },
    setAddress(state, payload) {
      state.address = payload;
    },
    setHospitalDetail(state, payload) {
      state.hospitalDetail = payload;
    },
  },
  actions: {},
  modules: {},
});
