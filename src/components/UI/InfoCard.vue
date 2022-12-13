<template>
  <div class="card" :class="cardStyle">
    <div class="card__content ">
      <p class="title ">{{ title }}</p>
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
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  color: $font-main;
  &__content {
    @include flex(row, center);
    gap: 0.5rem;
    align-items: center;

    .title {
      font-size: 16px;
      font-weight: 700;
    }
    .count {
      font-size: 20px;
      font-weight: 700;
    }
  }
  &.pending {
    background-color: var(--bg-infocard-pending);
  }
  &.done {
    background-color: var(--bg-infocard-done);
  }
  &.total {
    background-color: var(--bg-infocard-total);
  }
}

</style>