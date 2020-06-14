<template>
  <div id="app" class="wrapper">
    <!-- <navbar /> -->
    <nav-panel />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import NavPanel from "@/components/navpanel";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar,
    NavPanel,
  },
};
</script>

<style lang="scss">
@import "bootstrap";
@import "./assets/_bootswatch.scss";
@import "./assets/_colors.scss";

.wrapper {
  display: flex;
  width: 100%;
}
</style>
