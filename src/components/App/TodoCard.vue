<template>
  <div class="card">
    <div class="card__task">
      <div class="card__task__infobtn">
        <el-button
          circle
          size="small"
          type="info"
          :icon="MoreFilled"
          text
          @click="isInfoOpened = !isInfoOpened"
        ></el-button>
      </div>
      <div class="card__task__description">
        <p :class="{ completed: task.completed }">
          {{ task.description }}
        </p>
      </div>
      <div class="card__task__actions">
        <el-button
          v-if="!task.completed"
          @click="completeTask(task)"
          :icon="Check"
          circle
        />
        <el-button
          v-else
          @click="uncompleteTask(task)"
          :icon="Check"
          type="primary"
          circle
        ></el-button>
      </div>
    </div>

    <div v-if="isInfoOpened" class="card__additional">
      <table class="card__additional__info">
        <tbody>
          <tr>
            <th>Created:</th>
            <td>{{ task.createdAt }}</td>
          </tr>
          <tr>
            <th v-if="task.reopened">Reopened:</th>
            <td>{{ task.reopenedAt }}</td>
          </tr>
          <tr>
            <th>Completed:</th>
            <td>{{ task.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
      <el-button type="danger" text  @click="isDialogActive = true"
        >Delete Task</el-button
      >
    </div>
  </div>

  <el-dialog v-model="isDialogActive" title="Delete Todo" width="320px" center>
    <p>Are you sure you want to delete selected todo item?</p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isDialogActive = false">Cancel</el-button>
        <el-button type="success" @click="removeTask(task)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { useTaskStore } from "../../stores/tasks";
import { Check, Delete, MoreFilled } from "@element-plus/icons-vue";
import { ElDialog, ElButton, ElMessage } from "element-plus";
import { ref } from "vue";
export default {
  props: ["task"],
  setup() {
    const tasksStore = useTaskStore();
    const isDialogActive = ref(false);
    const isInfoOpened = ref(false);

    const removeTask = (task) => {
      tasksStore.removeTask(task);
      isDialogActive.value = false;
      ElMessage({
        showClose: true,
        message: "Done! To-do item has benn deleted",
        type: "success",
      });
      isInfoOpened.value = false;
    };
    return {
      isDialogActive,
      isInfoOpened,
      completeTask: tasksStore.completeTask,
      uncompleteTask: tasksStore.uncompleteTask,
      removeTask,
      Check,
      Delete,
      MoreFilled,
      ElDialog,
      ElButton,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  padding: 0.75rem 1rem;
  box-shadow: $box-shadow;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  transition: $transition;
  animation: task 0.3s ease;
  background-color: var(--bg-color-todo-card);
  color: var(--text-color);

  &:hover{
    background-color: var(--bg-color-todo-card-hover);
  }
  &__task {
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    align-items: center;
    &__infobtn {
      justify-self: start;
    }

    &__description {
      justify-self: start;
      width: 60%;
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      word-break: break-word;
      padding-right: 1rem;
    }

    &__actions {
      justify-self: end;
    }
  }
  &__additional {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    &__info {
      margin-bottom: 1rem;
      width: 100%;
      & th {
        text-align: left;
      }
      & td {
        text-align: right;
      }
    }
  }
}

.completed {
  text-decoration: line-through;
  color: #aaa;

  @keyframes task {
    from {
      opacity: 0.8;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
