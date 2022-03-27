import { ref } from 'vue'

const tasks = ref([])

const tasksCount = ref(0)

const completed = ref(0)

const handler = JSON.parse(localStorage.getItem('tasks'))

const updateStats = () => {
  tasksCount.value = handler.filter(item => item.completed == false).length
  completed.value = handler.filter(item => item.completed == true).length
}

const updateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

const updateTaskList = () => {
  if (!handler) {
    return
  } else {
    tasks.value = handler
    updateStats()
  }
}

const addTask = (newData) => {
  tasks.value.push({
    id: Math.random().toString(36).substring(2, 15),
    description: newData,
    completed: false,
  })
  updateStorage()
  updateStats()
}

const completeTask = (task) => {
  task.completed = !task.completed
  updateStorage()
  updateStats()
}

export { tasks, tasksCount, completed, updateTaskList, addTask, completeTask }