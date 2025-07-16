<template>
  <div>
    <span>Manager View</span>
    <task/>
    <div>
      <router-link to="/employee">Go to Employee View</router-link>
    </div>
  </div>
</template>

<script>

import Task from './Task.vue';
export default {
  name: "Manager",
  components: {
    Task,
  },
};
</script>
