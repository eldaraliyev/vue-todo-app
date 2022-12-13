<template>
  <header class="header">
    <h2> To Do List</h2>
    <el-button :dark="isDark" :icon="isDark ? Moon : Sunny " plain color="#94a3b8"  @click="toggle" >{{isDark ? 'Dark' : 'Light'}}</el-button>
  </header>
  <div class="main">
    <div class="main__body">
      <to-do></to-do>
      <div class="input-wrapper"></div>
    </div>
  </div>
</template>

<script>
import Todo from "./views/Todo.vue";
import { computed, onBeforeMount } from "vue";
import { useTaskStore } from "./stores/tasks";
import { useLayoutStore } from "./stores/layout";
import { ElButton } from "element-plus";
import { Sunny, Moon } from "@element-plus/icons-vue";

export default {
  components: { "to-do": Todo, ElButton },
  setup() {
    const store = useTaskStore();
    const layout = useLayoutStore();

    const isDark = computed(() => layout.isDark)

    const toggle = () => layout.toggleLayout()

    onBeforeMount(() => {
      store.updateTaskList();
      layout.initLayout()
    });
    return {
      isDark,
      Sunny,
      Moon,
      toggle
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap");


.header {
  display: flex;
  justify-content: space-between;
}
</style>
