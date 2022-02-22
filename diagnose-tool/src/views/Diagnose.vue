<template>
  <section id="diagnose">
    <h1>Please enter your information below, to determine your disease</h1>
    <div class="card">
      <form @submit.prevent="getDiagnose">
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <select
            v-model="gender"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Date of Birth</label>
          <input v-model="date" type="date" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="typo__label">Select symptoms</label>
          <multiselect
            v-model="value"
            :options="options"
            :custom-label="symptomsName"
            :multiple="true"
            placeholder="Select one"
            label="name"
            track-by="ID"
          ></multiselect>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import symptoms from "../data/dummySymptoms";
import api from "../apis/server";
export default {
  name: "Diagnose",
  components: {
    Multiselect,
  },
  data() {
    return {
      value: null,
      options: symptoms,
      date: "",
      gender: "",
    };
  },
  computed: {
    year() {
      return new Date(this.date).getFullYear();
    },
    symptomsId() {
      let id = [];
      this.value.forEach((el) => {
        id.push(el.ID);
      });
      return id;
    },
  },
  methods: {
    symptomsName({ Name }) {
      return Name;
    },
    getDiagnose() {
      api
        .post(
          "/diagnosis",
          {
            gender: this.gender,
            symptoms: this.symptomsId,
            yearOfBirth: this.year,
          },
          {}
        )
        .then((resp) => {
          console.log(resp.data);
          this.$store.commit("setDiagnoseResult", resp.data);
          this.$router.push({ name: "Result" });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
#diagnose h1 {
  text-align: center;
}

#result h1 {
  text-align: center;
}
</style>