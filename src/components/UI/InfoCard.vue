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
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  &__content {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
  
    .title,
    .count {
      font-size: 22px;
      font-weight: 700;
    }
  
  }

}
.pending {
  background: var(--el-color-warning-light-3);
}

.done {
  background: var(--el-color-success-light-3);
}
</style>