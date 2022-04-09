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
    <button class="input__add">Add</button>
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
      if (description.value) {
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
  height: 50px;
  display: flex;
  flex-direction: column;
  &__field {
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.26);
    border: none;
    padding: 12px;
    font-size: 14px;
    background: none;
    font-family: inherit;
    padding-right: 50px;
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
    transition: all .3s ease;
    &:hover {
      background: lighten($color: #000000, $amount: 90);
    }
  }
}
</style>
