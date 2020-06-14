<template>
  <div class="profile-container">
    <div class="card profile-card">
      <img
        class="mr-3"
        :src="profile.picture"
        alt="Generic placeholder image"
      />
      <div class="card-body">
        <h5>
          {{ profile.email }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
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
  width: 10%;
}
</style>
