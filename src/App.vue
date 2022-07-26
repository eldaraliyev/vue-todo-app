<template>
  <div class="main">
    <div class="main__title">
      <h2>To Do List</h2>
    </div>
    <div class="main__body">
      <to-do></to-do>
      <div class="input-wrapper"></div>
    </div>
  </div>
</template>

<script>
import Todo from "./views/Todo.vue";
import { updateTaskList } from "./global-data";
import { onBeforeMount } from "vue";

export default {
  components: { "to-do": Todo },
  title: "test",
  setup() {
    onBeforeMount(() => {
      updateTaskList();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
body {
  @include body-width;
  margin: 30px auto 0;
  background: $body-main-color;
}
</style>
