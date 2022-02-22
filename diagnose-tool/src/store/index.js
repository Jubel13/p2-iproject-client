import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    diagnoseResult: [],
    nearby: [],
    chats: [],
  },
  mutations: {
    setDiagnoseResult(state, payload) {
      state.diagnoseResult = payload;
    },
    setNearby(state, payload) {
      state.nearby = payload;
    },
    SOCKET_SENDTOCLIENT(state, payload) {
      state.chats = payload;
      console.log(payload);
      console.log(state.chats);
    },
  },
  actions: {
    //* Socket
    //! kalau listen, penamaan wajib mengikuti aturan
    socket_connect() {
      console.log("connected", this._vm.$socket);
    },

    socket_disconnect() {
      console.log("Disconnected", this._vm.$socket);
    },

    socket_customEventFromServer(_, payload) {
      console.log("customEventFromSrve", payload);
    },

    //? Ini untuk mengirim, bukan listen
    sendCustomEventToServer(_, payload) {
      this._vm.$socket.client.emit("customeEventFromClient", payload);
    },
  },
  modules: {},
});
