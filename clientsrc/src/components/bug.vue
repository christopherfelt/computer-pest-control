<template>
  <div class="">
    <router-link :to="{ name: 'BugDetail', params: { id: bug.id } }">
      <li class="row buglist">
        <div class="col-2 buglist-item">{{ bug.title }}</div>
        <div class="col-2 buglist-item">{{ bug.creatorEmail }}</div>
        <div class="col-2 buglist-item">{{ bug.bugType }}</div>
        <div class="col-2 buglist-item" v-if="bug.closed">Closed</div>
        <div class="col-2 buglist-item" else>Open</div>
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
}

.buglist-item {
  /* border: 1px solid red; */
}
</style>
