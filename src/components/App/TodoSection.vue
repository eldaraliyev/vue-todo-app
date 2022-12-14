<template>
  <div class="tasks">
    <div class="task__list" v-for="(task, idx) in tasks" :key="idx">
      <TaskCard :task="task" />
    </div>
  </div>
</template>

<script>
import TaskCard from "./TodoCard.vue";
import { useTaskStore } from "../../stores/tasks";
export default {
  components: { TaskCard },
  setup() {
    const tasksStore = useTaskStore();

    return { tasks: tasksStore.tasks };
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  margin-bottom: 100px;
}
</style>
