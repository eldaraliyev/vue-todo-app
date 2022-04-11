<template>
  <div class="input">
    <input
      class="input__field"
      type="text"
      v-model="description"
      @keyup.enter="createTask"
      placeholder="Enter task here..."
      maxlength="60"
    />
    <button class="input__add" @click="createTask">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { addTask } from "../../global-data";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const description = ref("");

    const createTask = () => {
      if (description.value.trim()) {
        addTask(description.value);
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
        message: "New To-Do item has been created",
        type: "success",
      });
    };
    const notifyMsg = () => {
      ElMessage({
        showClose: true,
        message: "Please enter something to input field",
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
    border-radius: 5px;
    height: 100%;
    box-shadow: $base-box-shadow;
    border: none;
    padding: 12px 50px 12px 12px;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  &__add {
    position: absolute;
    right: 0;
    height: 100%;
    padding: 0 12px;
    border: none;
    cursor: pointer;
    background: none;
    transition: $transition;
    &:hover {
      background: $input-add-btn;
    }
  }
}
</style>
