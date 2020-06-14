<template>
  <li class="list-group-item">
    <h6>{{ note.creatorEmail }}</h6>
    <p>{{ note.content }}</p>
  </li>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {};
  },
  props: ["note"],
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
