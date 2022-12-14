<template>
  <div class="tasks-info">
    <InfoCard title="Waiting: " :count="pending" cardStyle="pending" />
    <InfoCard title="Done: " :count="completed" cardStyle="done" />
    <InfoCard title="Total: " :count="total" cardStyle="total" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useTaskStore } from "../../stores/tasks";
import InfoCard from "../UI/InfoCard.vue";

export default {
  components: {
    InfoCard,
  },
  setup() {
    const tasksStore = useTaskStore();
    const pending = computed(() => tasksStore.pendingTasks);
    const completed = computed(() => tasksStore.completedTasks);
    const total = computed(() => tasksStore.totalTasks);
    return {
      pending,
      completed,
      total,
    };
  },
};
</script>

<style lang="scss" scoped>
.tasks-info {
  @include flex(row);
  gap: 0.5rem;
  margin: 1rem 0;
}
</style>
