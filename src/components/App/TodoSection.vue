<template>
  <div class="tasks">
    <div class="task__list" v-for="(task, idx) in tasks" :key="idx">
      <task-card :task="task"></task-card>
    </div>
  </div>
</template>

<script>
import TaskCard from "./TodoCard.vue";
import { useTaskStore } from "../../stores/tasks";
export default {
  components: { TaskCard },
  setup() {
    const store = useTaskStore();

    return { tasks: store.tasks };
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  margin-bottom: 100px;
}
</style>
