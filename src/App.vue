<template>
  <BaseHeader />
  <Todo />
</template>

<script>
import BaseHeader from "./components/App/BaseHeader.vue";
import Todo from "./views/Todo.vue";
import { onBeforeMount } from "vue";
import { useTaskStore } from "./stores/tasks";

export default {
  components: { Todo, BaseHeader },
  setup() {
    const tasksStore = useTaskStore();

    onBeforeMount(() => {
      tasksStore.updateTaskList();
    });
  },
};
</script>

<style lang="scss"></style>
