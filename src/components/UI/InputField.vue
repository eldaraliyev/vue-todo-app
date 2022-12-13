<template>
  <div class="input">
    <input
      class="input__field"
      type="text"
      v-model="description"
      @keyup.enter="createTask"
      placeholder="Add a task"
      maxlength="60"
    />
    <button class="input__add" @click="createTask">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";
// import { addTask } from "../../global-data";
import { ElMessage } from "element-plus";
import { useTaskStore } from "../../stores/tasks";
export default {
  setup() {
    const description = ref("");
    const store = useTaskStore();

    const createTask = () => {
      if (description.value.trim()) {
        store.createTask(description.value);
        successMsg();
        description.value = "";
      } else {
        notifyMsg();
        return;
      }
    };
    const successMsg = () => {
      ElMessage({
        showClose: true,
        message: "Success! Created new to-do item",
        type: "success",
      });
    };
    const notifyMsg = () => {
      ElMessage({
        showClose: true,
        message: "You must enter something to create new to-do item",
        type: "warning",
      });
    };
    return { description, createTask, successMsg, notifyMsg };
  },
};
</script>

<style lang="scss" scoped>
.input {
  @include body-width;
  @include flex(column);
  height: 50px;
  &__field {
    border-radius: 8px;
    height: 100%;
    box-shadow: $base-box-shadow;
    border: none;
    padding: 1rem 3.125rem 1rem 1rem;
    font-size: 14px;
    background-color: var(--bg-color-input);
    color: var(--text-color);
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0.5;
        transition: $transition;
      }
    }
    &::placeholder {
        opacity: 1;
        color: var(--text-color);
        transition: $transition;
      }
  }
  
  &__add {
    border-radius: inherit;
    position: absolute;
    right: 0;
    height: 100%;
    padding: 0 1rem;
    border: none;
    cursor: pointer;
    background: none;
    transition: $transition;
    font-weight: 700;
    color: var(--text-color);
    &:hover {
      background: var(--bg-input-add-btn);
    }
  }
}
</style>
