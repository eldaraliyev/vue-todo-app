<template>
  <div class="task">
    <p class="task__description" :class="{ completed: task.completed }">
      {{ task.description }}
    </p>
    <button @click="completeTask(task)">Test</button>
    <p>{{ task.id }}</p>
    <p v-if="task.completed">Comleted</p>
    <!-- <p>{{task.category}}</p> -->
  </div>
</template>

<script>
import { completeTask } from "../../global-data";

export default {
  props: ["task"],
  setup() {
    return {completeTask}
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 12px;
  //box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.26);
  border-radius: 5px;
  margin-bottom: 10px;
  transition: transform 0.2s ease;
  width: 100%;
  /* 
  &:hover {
    transform: translate(1px, 1px);
  } */
  /* &__checkbox {
  } */
  &__description {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    word-wrap: break-word;
  }
}
.completed {
  text-decoration: line-through;
  color: #aaa;
}
</style>
