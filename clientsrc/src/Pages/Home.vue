<template>
  <div class="container-fluid ">
    <div class="row d-flex justify-content-center">
      <div class="col-8 d-flex justify-content-center border align-self-center">
        <div class="card">
          <h2>Bug Stuff</h2>
          <div class="card-body">
            <ul class="list-group">
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

.row {
  height: 80vh;
}
</style>
