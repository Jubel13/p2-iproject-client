<template>
  <div id="map">
    <div id="detail">
      <h3>Hospital Detail</h3>
      <h6>Name: {{ hospital.name }}</h6>
      <h6>City: {{ hospital.city }}</h6>
      <h6>Address: {{ hospital.address_line2 }}</h6>
    </div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          :src="url"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a href="https://123movies-to.org"></a><br /><a
          href="https://www.embedgooglemap.net"
          >google maps iframe code</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  computed: {
    url() {
      return this.$store.state.url;
    },
    address() {
      return this.$store.state.address;
    },
    hospital() {
      return this.$store.state.hospitalDetail;
    },
  },
};
</script>

<style>
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
.mapouter {
  text-align: right;
  height: 500px;
  width: 600px;
}

#map {
  display: flex;
  justify-content: space-between;
}
</style>