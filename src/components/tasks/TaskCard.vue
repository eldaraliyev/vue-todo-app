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
  @include flex(row, space-between);
  align-items: center;
  padding: 12px 16px;
  box-shadow: $base-box-shadow;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
  background: $task-card-bg;
  transition: $transition;
  animation: task 0.3s ease;

  &:hover {
    background: $input-add-btn;
  }

  &__description {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    word-break: break-word;
    padding-right: 20px;
  }
}

.completed {
  text-decoration: line-through;
  color: #aaa;
  
  @keyframes task {
    from {
      opacity: 0.5;
      transform: scale(0.9);
    }
    
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
