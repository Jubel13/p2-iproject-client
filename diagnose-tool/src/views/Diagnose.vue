<template>
  <section id="diagnose">
    <h1>Please enter your information below, to determine your disease</h1>
    <div class="card">
      <form>
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Birth year</label>
          <input type="date" class="form-control" />
        </div>
        <div>
          <label class="typo__label mb-3">Symptoms</label>
          <multiselect
            v-model="value"
            placeholder="Symptoms"
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>
          <pre class="language-json"><code>{{ value  }}</code></pre>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "Diagnose",
  created() {
    this.$store.dispatch("fetchSymptoms");
  },
  computed: {
    options() {
      return this.$store.state.symptoms;
    },
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
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