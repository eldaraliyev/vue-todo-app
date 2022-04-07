<template>
 <h1>Your To-Do List</h1>

  <!-- <div class="menu">
    <div class="menu__button" @click="toggleMenu">

      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="menu__mobile" :style="{opacity: menuOpen? '1' : '0'}">
      <nuxt-link to="">All tasks</nuxt-link>
      <nuxt-link to="">Completed</nuxt-link>
      <nuxt-link to="">Topics</nuxt-link>
      <nuxt-link to="">Menu Item</nuxt-link>
      <nuxt-link to="">Menu Item</nuxt-link>
    </div>
    <div class="menu__links">
      <nuxt-link to="">All tasks</nuxt-link>
      <nuxt-link to="">Completed</nuxt-link>
      <nuxt-link to="">Topics</nuxt-link>
      <nuxt-link to="">Menu Item</nuxt-link>
      <nuxt-link to="">Menu Item</nuxt-link>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100px;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #e0e1dd;
  &__button {
    z-index: 20;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: block;
    }
    & div {
      height: 4px;
      width: 40px;
      margin-bottom: 5px;
      background: #0d1b2a;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__mobile {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #778da9;
    padding: 120px 20px;
    display: none;
    flex-direction: column;
    gap: 40px;
    transition: opacity .2s ease;
    & a {
      font-size: 25px;
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  &__links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
