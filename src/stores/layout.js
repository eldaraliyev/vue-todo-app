import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLayoutStore = defineStore('layout', () => {
  const mode = ref(null)
  const persistMode = localStorage.layout

  const isDark = computed(() => mode.value === 'dark')

  function setDocumentTheme(value) {
    document.documentElement.setAttribute('data-theme', value)
    value === 'dark'
      ? document.documentElement.classList.add(value)
      : document.documentElement.classList.remove(...document.documentElement.classList)
  }

  function setLs(value) {
    localStorage.setItem('layout', value)
  }

  function initLayout() {
    if (!localStorage.layout) {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      let layoutMode = isDark ? 'dark' : 'light'
      setLs(layoutMode)
      setDocumentTheme(layoutMode)
      mode.value = layoutMode
    } else {
      setDocumentTheme(persistMode)
      mode.value = persistMode
    }
  }

  function toggleLayout() {
    if (mode.value && mode.value === 'dark') {
      setDocumentTheme('light')
      setLs('light')
      mode.value = 'light'
    } else {
      setDocumentTheme('dark')
      setLs('dark')
      mode.value = 'dark'
    }
  }

  return {
    // state
    mode,
    persistMode,
    // getters
    isDark,
    // actions
    toggleLayout,
    initLayout,
  }
})