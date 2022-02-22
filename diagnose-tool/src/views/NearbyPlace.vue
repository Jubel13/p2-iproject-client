<template>
  <section id="nearby-result">
    <h1>
      Based on your location, this is list of hospitals nearby your location
    </h1>
    <hospital
      v-for="near in nearby"
      v-bind:key="near.place_id"
      :near="near"
    ></hospital>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(near, idx) in nearby" v-bind:key="near.place_id">
            <td>{{ idx + 1 }}</td>
            <td>{{ near.properties.name }}</td>
            <td>
              {{ near.properties.address_line2 }}
            </td>
            <td>
              <button
                @click="
                  showMapHandler(near.properties.address_line2, near.properties)
                "
                class="btn btn-primary"
              >
                Show on Map
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import Hospital from "../components/Hospital.vue";
export default {
  name: "Nearby",
  components: {
    Hospital,
  },
  computed: {
    nearby() {
      return this.$store.state.nearby;
    },
  },

  methods: {
    showMapHandler(address, hospitalDetail) {
      let fixAddress = address.replace(" ", "%20");
      this.$store.commit(
        "setUrl",
        `https://maps.google.com/maps?q=${fixAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`
      );
      this.$store.commit("setAddress", address);
      this.$store.commit("setHospitalDetail", hospitalDetail);
      this.$router.push("/map");
    },
  },
};
</script>

<style>
</style>