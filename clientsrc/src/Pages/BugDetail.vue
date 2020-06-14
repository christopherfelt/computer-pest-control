<template>
  <div class="container-fluid detail-container">
    <div class="row d-flex justify-content-center mb-3 mt-5">
      <div class="col-10">
        <h1 class="mr-2 d-inline">{{ activeBug.title }}</h1>
        <span class="float-right status text-danger" v-if="activeBug.closed"
          >Closed</span
        >
        <span class="float-right status text-success font-weight-bolder" v-else
          >Open</span
        >
        <div>
          <h6 class="d-inline">Reported by:</h6>
          <span> {{ activeBug.creatorEmail }} </span>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-10 border description-box d-flex align-items-center">
        <p>{{ activeBug.description }}</p>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">
      <div class="col-10">
        <div class="row">
          <div class="col-6">
            <div>
              <h6 class="d-inline">Tech Assign to Report:</h6>

              <span>
                {{ activeBug.tech ? activeBug.tech : "unassigned" }}
              </span>
            </div>
            <div>
              <h6 class="d-inline">Collaborators:</h6>
              <span
                v-for="collaborator in activeBug.collaborators"
                :key="collaborator"
              >
                {{ collaborator }},
              </span>
            </div>
            <div>
              <h6 class="d-inline">Bug Type:</h6>
              <span> {{ activeBug.bugType }} </span>
            </div>
            <div>
              <h6 class="d-inline">Creation Date:</h6>
              <span> {{ activeBug.creation }} </span>
            </div>
            <div>
              <h6 class="d-inline">Last Modified Date:</h6>
              <span> {{ activeBug.modified }} </span>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-danger float-right">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-10 ">
        <div class="text-right">
          <button class="btn btn-info">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="border notes-box mt-2">
          Notes section
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugDetail",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  data() {
    return {};
  },
  computed: {
    activeBug() {
      return this.$store.state.BugStore.activeBug;
    },
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.detail-container {
  position: absolute;
  top: 0;
  left: 18%;
  width: 80%;
  height: auto;
}

.status {
  font-size: 2rem;
}

.description-box,
.notes-box {
  min-height: 200px;
}
</style>
