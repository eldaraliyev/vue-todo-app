<template>
  <div class="main">
    <div class="tasks">
      <div class="tasks__stats">
        <info-card
          title="Pending: "
          :count="pending"
          cardStyle="pending"
        ></info-card>
        <info-card
          title="Done: "
          :count="completed"
          cardStyle="done"
        ></info-card>
        <info-card title="Total: " :count="total" cardStyle="total"></info-card>
      </div>
      <task-section></task-section>
    </div>
    <div class="input">
      <input-field></input-field>
    </div>
  </div>
</template>

<script>
import InputField from "../components/UI/InputField.vue";
import TaskSection from "../components/App/TodoSection.vue";
import InfoCard from "../components/UI/InfoCard.vue";
import { useTaskStore } from "../stores/tasks";
import { computed } from "vue";
// import { pending, completed, total } from "../global-data";

export default {
  components: { InputField, TaskSection, InfoCard },
  name: "MainPage",
  setup() {
    const store = useTaskStore();
    const pending = computed(() => store.pendingTasks);
    const completed = computed(() => store.completedTasks);
    const total = computed(() => store.totalTasks);

    store.updateTaskList();

    return { pending, completed, total };
  },
};
</script>

<style lang="scss" scoped>
.main {
  @include flex(column, center);
  position: relative;
  margin: 30px auto;
  border-radius: 10px;

  .tasks {
    &__stats {
      @include flex(row);
      gap: 8px;
    }
  }
  .hide {
    width: 100vw;
    min-width: 320px;
    height: 150px;
    background: $hide-el-color;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .input {
    z-index: 2;
    position: fixed;
    bottom: 30px;
    border-radius: 5px;
  }
}
</style>
