<template>
  <div class="container-fluid detail-container">
    <div class="row d-flex justify-content-center mb-3 mt-5">
      <div class="col-10">
        <form
          v-if="
            titleFormVisible &&
              activeBug.creatorEmail == this.$auth.user.email &&
              activeBug.closed == false
          "
          @submit.prevent="editBugReport"
        >
          <input
            type="text"
            v-model="activeBug.title"
            style="font-size: 25px"
          />
          <div class="d-inline">
            <button class="btn btn-primary btn-sm mx-1" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="titleFormVisible = false"
            >
              Cancel
            </button>
          </div>
        </form>
        <h1 v-else class="mr-2 d-inline" @click="titleFormVisible = true">
          {{ activeBug.title }}
        </h1>

        <span class="float-right status text-success" v-if="activeBug.closed"
          >Closed</span
        >
        <span class="float-right status text-danger font-weight-bolder" v-else
          >Unresolved</span
        >
        <div>
          <h6 class="d-inline">Reported by:</h6>
          <span> {{ activeBug.creatorEmail }} </span>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-10 border description-box d-flex align-items-center">
        <form
          v-if="
            descriptionFormVisible &&
              activeBug.creatorEmail == this.$auth.user.email &&
              activeBug.closed == false
          "
          @submit.prevent="editBugReport"
        >
          <textarea
            name=""
            id=""
            class="mt-1"
            cols="135"
            rows="9"
            v-model="activeBug.description"
          >
          </textarea>
          <div class="float-right">
            <button class="btn btn-primary m-1" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger m-1"
              @click="descriptionFormVisible = false"
            >
              Cancel
            </button>
          </div>
        </form>
        <p v-else @click="descriptionFormVisible = true">
          {{ activeBug.description }}
        </p>
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
            <button
              class="btn btn-success btn-lg float-right"
              @click="closeBugReport"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-10 ">
        <div class="text-right float-right">
          <button
            class="btn btn-info"
            @click="noteFormVisible = !noteFormVisible"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="notes-box mt-2">
          <h3>Notes</h3>
          <note v-for="note in notes" :key="note.id" :note="note" />
        </div>
      </div>
    </div>
    <div
      v-if="noteFormVisible"
      class="card p-3 note-form"
      @submit.prevent="createNote"
    >
      <form>
        <div class="form-group mb-0">
          <h6>Add a note</h6>
          <label for="content">
            <textarea
              title="content"
              class="form-control"
              v-model="noteForm.content"
              rows="2"
              cols="30"
            />
          </label>
        </div>
        <div class="form-group float-right">
          <button class="btn btn-primary btn-sm" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Note from "../components/note";
import Alerts from "../Alerts";

export default {
  name: "BugDetail",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  data() {
    return {
      noteForm: {},
      noteFormVisible: false,
      titleFormVisible: false,
      descriptionFormVisible: false,
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.BugStore.activeBug;
    },
    notes() {
      return this.$store.state.NoteStore.notes;
    },
  },
  methods: {
    createNote() {
      this.$store.dispatch("createNote", {
        content: this.noteForm.content,
        bugId: this.activeBug._id,
      });
      this.noteForm = {};
      this.noteFormVisible = false;
    },
    async closeBugReport() {
      if (this.activeBug.creatorEmail == this.$auth.user.email) {
        if (await Alerts.closeConfirm()) {
          this.$store.dispatch("editBugReport", {
            _id: this.activeBug._id,
            closed: true,
          });
        }
      } else {
        await Alerts.deleteUnauthorized();
      }
    },
    async editBugReport() {
      this.$store.dispatch("editBugReport", this.activeBug);
      this.descriptionFormVisible = false;
      this.titleFormVisible = false;
    },
  },
  components: { Note },
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

.note-form {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
