<template>
  <div class="task">
    <div class="task__body">
      <span class="task__title">{{ title }}</span>
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

<style lang="scss" scoped></style>
