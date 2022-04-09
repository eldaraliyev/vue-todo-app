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

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
}

body {
  max-width: 900px;
  width: 40%;
  min-width: 320px;
  margin: 30px auto 0;
  background: #EDEBD7;
}
</style>
