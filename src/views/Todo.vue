<template>
  <TasksInfo />
  <div class="main">
    <div class="tasks">
      <TaskSection />
    </div>
    <div class="input">
      <InputField />
    </div>
  </div>
</template>

<script>
import InputField from "../components/UI/InputField.vue";
import TaskSection from "../components/App/TodoSection.vue";
import { useTaskStore } from "../stores/tasks";
import TasksInfo from "../components/App/TasksInfo.vue";

export default {
  components: { InputField, TaskSection, TasksInfo },
  name: "MainPage",
  setup() {
    const tasksStore = useTaskStore();

    tasksStore.updateTaskList();
  },
};
</script>

<style lang="scss" scoped>
.main {
  @include flex(column, center);
  position: relative;
  margin: auto;
  border-radius: 10px;

  .input {
    z-index: 2;
    position: fixed;
    bottom: 30px;
    border-radius: 5px;
  }
}
</style>
