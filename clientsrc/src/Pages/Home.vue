<template>
  <div
    class="container-fluid home-container"
    :class="{ disabled: createFormVisible }"
  >
    <div class="row">
      <div class="col">
        <div class="float-right m-3">
          <button
            class="btn btn-info m-1"
            @click="createFormVisible = !createFormVisible"
          >
            <i class="fas fa-plus"></i>
          </button>
          <button class="btn btn-dark m-1">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="createFormVisible"
      class=" card bg-light border shadow create-form overlay-form"
    >
      <div class="card-body">
        <h4>Submit Report</h4>
        <form @submit.prevent="createReport">
          <div class="form-group">
            <label for="Title">Title</label>
            <input
              class="form-control"
              type="text"
              name="Title"
              placeholder="Enter a title"
              v-model="createForm.title"
            />
          </div>
          <div class="form-group">
            <label for="Title">Description</label>
            <textarea
              class="form-control"
              name="Description"
              placeholder="Explain the issue"
              rows="4"
              cols="50"
              v-model="createForm.description"
            />
          </div>
          <div class="form-group">
            <label for="Title">Add a Tech (Optional)</label>
            <input
              class="form-control"
              type="email"
              name="Tech"
              placeholder="Enter a email to assign a tech"
              v-model="createForm.tech"
            />
          </div>
          <div class="form-group">
            <label for="Title">Add Collaborators (Optional)</label>
            <input
              class="form-control"
              type="text"
              name="Collaborators"
              placeholder="Enter a emails (comma seperated)"
              v-model="createForm.collaborators"
            />
          </div>
          <div class="form-group float-right">
            <button class="btn btn-primary mx-1" type="submit">
              Submit
            </button>
            <button
              class="btn btn-primary mx-1"
              type="button"
              @click="createFormVisible = !createFormVisible"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5 home-row">
      <div class="col-10 d-flex justify-content-center align-self-center">
        <div class="card w-100 long">
          <div v-if="$auth.isAuthenticated" class="card-body">
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
          <div v-else class="card-body text-center">
            <h2>Login or Register</h2>
            <div>
              <button class="btn btn-primary m-2" @click="login">
                Sign Up
              </button>
              <button class="m-2 btn btn-primary" @click="login">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "../components/bug";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  data() {
    return {
      createFormVisible: false,
      createForm: {},
    };
  },
  computed: {
    bugs() {
      return this.$store.state.BugStore.bugs;
    },
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    createReport() {
      this.$store.dispatch("createBugReport", this.createForm);
      this.createForm = {};
      this.createFormVisible = false;
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

.overlay-form {
  position: fixed;
  top: 15%;
  left: 40%;
  width: 30%;
  z-index: 100;
}
</style>
