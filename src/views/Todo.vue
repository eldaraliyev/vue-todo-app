<template>
  <div class="main">
    <div class="tasks">
      <div class="tasks__stats">
        <info-card title="⏳" :count="tasksCount" cardStyle="pending"></info-card>
        <info-card title="✅" :count="completed" cardStyle="done"></info-card>
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
import TaskSection from "../components/tasks/TaskSection.vue";
import InfoCard from "../components/UI/InfoCard.vue";
import {tasksCount, completed} from '../global-data'

export default {
  components: { InputField, TaskSection, InfoCard },
  name: "MainPage",
  setup() {
    return {tasksCount, completed}
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  //padding: 20px 0;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;

  .tasks {
    &__stats {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }
  .input {
    position: fixed;
    bottom: 30px;
    border-radius: 5px;
    background: #fff;
    max-width: 900px;
  width: 40%;
  min-width: 320px;
  }
}
</style>
