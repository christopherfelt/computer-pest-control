<template>
  <div class="container-fluid home-container">
    <div class="row d-flex justify-content-center mt-5 home-row">
      <div class="col-10 d-flex justify-content-center align-self-center">
        <div class="card w-100 long">
          <div class="card-body">
            <div class="row title-bar border-bottom p-0">
              <div class="col-2">Title</div>
              <div class="col-2">Reported By</div>
              <div class="col-2">Bug Type</div>
              <div class="col-2">Status</div>
              <div class="col-2">Assigned Tech</div>
              <div class="col-2">Last Modified</div>
            </div>

            <ul class="list-group mt-2">
              <bug v-for="bug in bugs" :key="bug.id" :bug="bug" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "../components/bug";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.BugStore.bugs;
    },
  },
  components: {
    Bug,
  },
};
</script>

<style lang="scss">
@import "../assets/_colors.scss";

.home-container {
  position: absolute;
  top: 0;
  left: 18%;
  width: 80%;
  height: auto;
  // border: 5px solid red;
}

.title-bar > div {
  font-size: 1.2rem;
}
</style>
