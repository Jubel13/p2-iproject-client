<template>
  <section id="nearby-result">
    <h1>
      Based on your location, this is list of hospitals nearby your location
    </h1>
    <hospital
      class="mb-2"
      v-for="near in nearby"
      v-bind:key="near.place_id"
      :near="near"
    ></hospital>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
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
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  computed: {
    nearby() {
      return this.$store.state.nearby;
    },
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style>
</style>