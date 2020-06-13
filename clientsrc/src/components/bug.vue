<template>
  <div class="">
    <router-link :to="{ name: 'BugDetail', params: { id: bug.id } }">
      <li class="list-group-item">
        <h4>{{ bug.title }}</h4>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Bug",
  data() {
    return {};
  },
  props: ["bug"],
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped></style>
