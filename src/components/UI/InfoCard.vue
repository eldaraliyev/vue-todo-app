<template>
  <div class="card" :class="cardStyle">
    <div class="card__content">
      <p class="title">{{ title }}</p>
      <p class="count">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    cardStyle: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 10px 20px;

  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
  &__content {
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title,
    .count {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
.pending {
  background: var(--el-color-warning);
}
.done {
  background: var(--el-color-success);
}
</style>