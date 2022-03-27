<template>
  <div>
    <app-header></app-header>
    <to-do></to-do>
  </div>
</template>

<script>
import Todo from "./views/Todo.vue";
import Header from "./components/layout/Header.vue";
import { updateTaskList } from "./global-data";
import { onBeforeMount } from "vue";

export default {
  components: { "to-do": Todo, "app-header": Header },
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
}

body {
  font-family: "Roboto Slab", serif;
  max-width: 30%;
  min-width: 320px;
  margin: 30px auto 0;
  background: #e5e7eb;
  @media screen and (max-width: 768px) {
    //min-width: 100vw;
  }
}
</style>
