import { defineStore } from 'pinia'
import { computed, ref } from "vue";

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([])
  let lsTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : []

  const totalTasks = computed(() => tasks.value.length)
  const pendingTasks = computed(() => tasks.value.filter(task => task.completed === false).length)
  const completedTasks = computed(() => tasks.value.filter(task => task.completed).length)
  const taskId = computed(() => Math.random().toString(36).substring(2, 15))

  function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  function updateTaskList() {
    tasks.value = lsTasks || []
  }

  function createTask(data) {
    tasks.value.push({
      id: taskId,
      description: data,
      completed: false,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    })
    updateStorage()
  }

  function completeTask(task) {
    task.completed = !task.completed
    task.updatedAt = new Date().toLocaleString()
    updateStorage()
  }

  function uncompleteTask(task) {
    task.completed = !task.completed
    task.reopened = true
    task.reopenedAt = new Date().toLocaleString()
    updateStorage()
  }

  function removeTask(task) {
    const idx = tasks.value.findIndex(item => item.id == task.id)
    if (!task && !idx) return
    tasks.value.splice(idx, 1)
    updateStorage()
  }

  return {
    // states
    tasks,
    lsTasks,
    // getters
    totalTasks,
    pendingTasks,
    completedTasks,
    // actions
    updateStorage,
    updateTaskList,
    createTask,
    completeTask,
    uncompleteTask,
    removeTask
  }
}) 