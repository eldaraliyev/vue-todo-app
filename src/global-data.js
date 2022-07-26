import { ref } from 'vue'

const tasks = ref([])

const pending = ref(0)

const completed = ref(0)

const total = ref(0)

let handler = JSON.parse(localStorage.getItem('tasks'))

const updateStats = () => {
  pending.value = tasks.value.filter(item => item.completed == false).length
  completed.value = tasks.value.filter(item => item.completed == true).length
  total.value = tasks.value.length
}

const updateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

const updateTaskList = () => {
  handler ? tasks.value = handler : handler = []
  updateStats()
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

const removeTask = (task) => {
  console.log(task.id);
  // tasks.value.filter(item => {
  //   return item.id !== task.id
  // })
  const target = tasks.value.findIndex(item => item.id == task.id)
  const remove = confirm("Are you sure?")
  if (remove) {
    tasks.value.splice(target, 1)
  } else {
    return
  }
  updateStorage()
  updateStats()
}

export {
  tasks,
  pending,
  completed,
  total,
  updateTaskList,
  addTask,
  completeTask,
  removeTask
}