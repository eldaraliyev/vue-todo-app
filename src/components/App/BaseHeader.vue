<template>
  <header class="header">
    <h2>To Do List</h2>
    <el-button
      :dark="isDarkLayout"
      :icon="isDarkLayout ? Moon : Sunny"
      plain
      @click="toggleLayout"
      >{{ isDarkLayout ? "Dark" : "Light" }}</el-button
    >
  </header>
</template>

<script>
import { computed, onBeforeMount } from "vue";
import { useLayoutStore } from "../../stores/layout";
import { ElButton } from "element-plus";
import { Sunny, Moon } from "@element-plus/icons-vue";

export default {
  components: { ElButton },
  setup() {
    const layoutStore = useLayoutStore();

    const isDarkLayout = computed(() => layoutStore.isDark);

    const toggleLayout = () => layoutStore.toggleLayout();

    onBeforeMount(() => {
      layoutStore.initLayout()
    })

    return {
      isDarkLayout,
      toggleLayout,
      Sunny, 
      Moon
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
