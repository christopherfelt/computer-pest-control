<template>
  <div class="">
    <router-link
      class="remove-underline"
      :to="{ name: 'BugDetail', params: { id: bug._id } }"
    >
      <li
        class="row border rounded buglist rounded-0"
        :class="{ closed: bug.closed, unresolved: !bug.closed }"
      >
        <div class="col-2 buglist-item">{{ bug.title }}</div>
        <div class="col-2 buglist-item">{{ bug.creatorEmail }}</div>
        <div class="col-2 buglist-item">{{ bug.bugType }}</div>
        <div class="col-2 buglist-item" v-if="bug.closed">Closed</div>
        <div class="col-2 buglist-item" v-else>Unresolved</div>
        <div class="col-2 buglist-item" v-if="bug.tech">{{ bug.tech }}</div>
        <div class="col-2 buglist-item" v-else>Unassigned</div>
        <div class="col-2 buglist-item">{{ bug.modified }}</div>
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

<style scoped>
.buglist {
  font-size: 1rem;
  color: black;
}
.buglist:hover {
  background-color: lightblue;
}

.remove-underline {
  text-decoration: none;
}

.buglist-item {
  /* border: 1px solid red; */
}

.closed {
  background-color: lightgreen;
  color: gray;
}

.unresolved {
  background-color: lightcoral;
}
</style>
