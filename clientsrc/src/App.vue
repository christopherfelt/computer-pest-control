<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
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
  },
};
</script>

<style lang="scss">
@import "bootstrap";
@import "./assets/_bootswatch.scss";
@import "./assets/_colors.scss";

// * {
//   outline: 1px solid red;
// }

.btn-danger {
  background: $atomic-tangerine;
  border: $atomic-tangerine;
}
</style>
