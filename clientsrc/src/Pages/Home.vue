<template>
  <div class="container-fluid ">
    <div class="row ">
      <div class="col d-flex justify-content-center">
        <div>
          <h3>Bugs is live</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bugs from "../components/bugs";
export default {
  name: "home",
  components: {
    Bugs,
  },
};
</script>

<style lang="scss">
@import "../assets/_colors.scss";

.row {
  height: 80vh;
}
</style>
