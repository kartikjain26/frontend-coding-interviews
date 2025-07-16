<template>
  <div id="">
    Employee View
    <div>
      <router-link to="/">Go to Manager View</router-link>
    </div>
    <task/>
    <div>
      <h1></h1>
    </div>
  </div>
</template>

<script>

import Task from './Task.vue';

export default {
  name: "Employee",
  components: {
    Task,
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
