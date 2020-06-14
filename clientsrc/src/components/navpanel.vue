<template>
  <nav id="sidebar" class="bg-secondary">
    <div class="sidebar-header m-3">
      <h5 class="">Computer Pest Control</h5>
    </div>
    <div class="d-flex justify-content-start ml-4">
      <ul class="list-unstyled components ">
        <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle remove-underline"
            >Activity</a
          >
          <ul class="collapse list-unstyled pl-2" id="homeSubmenu">
            <li>
              <a href="#" class="remove-underline">All Reports</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Open Reports</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Closed Reports</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle remove-underline"
            >Personal Activity</a
          >
          <ul class="collapse list-unstyled pl-2" id="pageSubmenu">
            <li>
              <router-link class="remove-underline" :to="{ name: 'Profile' }"
                >Profile</router-link
              >
            </li>
            <li>
              <a href="#" class="remove-underline">Page 2</a>
            </li>
            <li>
              <a href="#" class="remove-underline">Page 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavPanel",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
#sidebar {
  position: fixed;
  width: 17%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
}

.remove-underline {
  text-decoration: none;
  color: white;
}

.remove-underline:hover {
  color: lightblue;
}
</style>
