<template>
  <div>
    <h1>Your To-Do List</h1>
    <to-do></to-do>
  </div>
</template>

<script>
import Todo from "./views/Todo.vue";
import { updateTaskList } from "./global-data";
import { onBeforeMount } from "vue";

export default {
  components: { "to-do": Todo},
  setup() {
    onBeforeMount(() => {
      updateTaskList();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700;900&display=swap");

body {
  @include body-width;
  margin: 30px auto 0;
  background: $body-main-color;
}
</style>
