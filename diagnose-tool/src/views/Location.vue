<template>
  <section id="maps">
    <h1>To view nearby hospitals, please enter your current location</h1>
    <div class="card">
      <form @submit.prevent="getNearby">
        <div class="mb-3">
          <label class="form-label">Current Location</label>
          <input v-model="location" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Radius from current location</label>
          <input v-model="radius" type="number" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import api from "../apis/server";
export default {
  name: "Location",
  data: function () {
    return {
      location: "",
      radius: 0,
    };
  },
  methods: {
    getNearby() {
      api
        .post("/nearby", { location: this.location, radius: this.radius })
        .then((resp) => {
          console.log(resp.data);
          this.$store.commit("setNearby", resp.data.features);
          this.$router.push({ name: "Nearby" });
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style>
</style>