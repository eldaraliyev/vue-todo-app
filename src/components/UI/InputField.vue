<template>
  <div class="input">
    <input
      class="input__field"
      type="text"
      v-model.trim="description"
      @keyup.enter="createTask"
      placeholder="Add a task"
      maxlength="60"
    />
    <button
      :disabled="isEmptyInputField"
      class="input__add"
      @click="createTask"
    >
      Add
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
// import { addTask } from "../../global-data";
import { ElMessage } from "element-plus";
import { useTaskStore } from "../../stores/tasks";
export default {
  setup() {
    const description = ref("");
    const tasksStore = useTaskStore();

    const isEmptyInputField = computed(() => description.value === "");

    const createTask = () => {
      if (description.value.trim()) {
        tasksStore.createTask(description.value);
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
    return {
      description,
      isEmptyInputField,
      createTask,
      successMsg,
      notifyMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  @include flex(column);
  width: clamp(320px, 40%, 900px);
  &__field {
    border-radius: .5rem;
    height: 100%;
    box-shadow: $box-shadow;
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
    &:disabled {
      color: var(--bg-input-add-btn-disabled);
    }
    &:hover:disabled {
      background: none;
      cursor: auto;
    }
    &:hover {
      background: var(--bg-input-add-btn);
    }
  }
}
</style>
