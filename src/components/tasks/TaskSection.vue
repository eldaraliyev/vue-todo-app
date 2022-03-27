<template>
  <div class="tasks">
    <div class="task__list" v-for="(task, idx) in tasks" :key="idx">
      <task-card :task="task"></task-card>
    </div>
  </div>
</template>

<script>
import TaskCard from "../tasks/TaskCard.vue";
//import { ref } from "vue";
import { tasks } from "../../global-data";
export default {
  components: { TaskCard },
  setup() {
    return { tasks};

  },
};
</script>

<style lang="scss" scoped>
</style>
