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
    <p class="input__hint">Click Enter to create</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { addTask } from "../../global-data";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const moment = require("moment");

    const description = ref("");

    const id = computed(() => {
      return moment().format("DD.MM.YY HH:mm:ss");
    });

    const time = computed(() => {
      return moment().format("DD.MM.YY HH:mm:ss");
    });

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
    return { description, id, time, createTask, successMsg, notifyMsg };
  },
};
</script>

<style lang="scss" scoped>
.input {
  height: 50px;
  display: flex;
  flex-direction: column;
  &__field {
    width: 320px;
    height: 100%;
    background: #ffffff;
    //box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    //border-radius: 5px;
    border: none;
    padding: 12px;
    font-size: 14px;
    background: none;
    font-family: inherit;

    &:focus {
      outline: none;
    }
  }
  &__hint {
    font-weight: 300;
    font-size: 12px;
    margin: 12px 0px 0px 12px;
    color: #ccc;
  }
}
</style>
