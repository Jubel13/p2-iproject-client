<template>
  <section id="nearby-result">
    <h1>
      Based on your location, this is list of hospitals nearby your location
    </h1>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(near, idx) in nearby" v-bind:key="near.properties.lon">
            <td>{{ idx + 1 }}</td>
            <td>{{ near.properties.name }}</td>
            <td>
              {{ near.properties.address_line2 }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Nearby",
  computed: {
    nearby() {
      return this.$store.state.nearby;
    },
  },
};
</script>

<style>
</style>