<template>
  <div class="task">
    <div class="task__body">
      <span class="task__title">{{ title }}</span>
      <span class="task__time"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .todo-item {
    padding: 1em;
    margin: 1em;
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    box-shadow: 0 0 10px 4px rgba($color: #000000, $alpha: 0.26);
    border-radius: 1em;
    span {
      display: block;
      padding: 1em;
      &.task-info {
        font-weight: 300;
      }
      &.task-title {
        font-weight: 700;
      }
    }
  }
}
</style>
