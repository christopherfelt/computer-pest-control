<template>
  <li class="list-group-item">
    <div
      v-if="note.creatorEmail == this.$auth.user.email"
      class="float-right text-danger"
      @click="deleteNote"
    >
      <i class="fas fa-trash-alt "></i>
    </div>
    <div>
      <h6>{{ note.creatorEmail }}</h6>
      <p>{{ note.content }}</p>
    </div>
  </li>
</template>

<script>
import Alerts from "../Alerts";
export default {
  name: "Note",
  data() {
    return {};
  },
  props: ["note"],
  computed: {},
  methods: {
    async deleteNote() {
      let res = await Alerts.deleteConfirm();
      console.log(res);
      if (res) {
        this.$store.dispatch("deleteNote", this.note);
      }
    },
  },
  components: {},
};
</script>

<style scoped></style>
