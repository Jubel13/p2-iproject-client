<template>
  <section id="maps">
    <h1>To view nearby hospitals, please enter your current location</h1>
    <div class="card">
      <form>
        <div class="mb-3">
          <label class="form-label">Current Location</label>
          <input type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "Location",
};
</script>

<style>
</style>