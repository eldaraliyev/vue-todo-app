<template>
  <div class="task">
    <p class="task__description" :class="{ completed: task.completed }">
      {{ task.description }}
    </p>
    <el-button
      v-if="!task.completed"
      @click="completeTask(task)"
      type="success"
      :icon="Check"
      circle
    />
    <el-button
      v-else
      @click="removeTask(task)"
      type="danger"
      :icon="Delete"
      circle
    />
  </div>
</template>

<script>
import { completeTask, removeTask } from "../../global-data";
import { Check, Delete } from "@element-plus/icons-vue";
export default {
  props: ["task"],
  setup() {
    return { completeTask, removeTask, Check, Delete };
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 12px 16px;
  box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.26);
  border-radius: 5px;
  margin: 10px 0;
  transition: transform 0.2s ease;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  &__description {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
   word-break: break-word;
  }
}
.completed {
  text-decoration: line-through;
  color: #aaa;
}
</style>
