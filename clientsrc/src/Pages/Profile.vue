<template>
  <div class="profile-container ">
    <div class="card profile-card float-right m-2 shadow-sm">
      <div class="img-div">
        <img
          class="profile-img"
          :src="profile.picture"
          alt="Generic placeholder image"
        />
        <span>
          {{ profile.email }}
        </span>
      </div>
      <div>
        <button class="btn btn-danger btn-sm float-right m-1" @click="logout">
          logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    async logout() {
      console.log("here");
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}

.profile-container {
  position: absolute;
  top: 0;
  left: 18%;
  width: 80%;
  height: auto;
}

.title-bar > div {
  font-size: 1.2rem;
}

.profile-card {
  width: 300px;
}

.profile-img {
  width: 32px;
}

.img-div {
  width: auto;
}
</style>
