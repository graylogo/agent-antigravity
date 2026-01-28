import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

export type FilterType = 'all' | 'active' | 'completed'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const filter = ref<FilterType>('all')

  // Load from localStorage
  const savedTodos = localStorage.getItem('todo-app-data')
  if (savedTodos) {
      try {
          todos.value = JSON.parse(savedTodos)
      } catch (e) {
          console.error('Failed to load todos', e)
      }
  }

  // Watch for changes and save
  watch(todos, (newTodos) => {
      localStorage.setItem('todo-app-data', JSON.stringify(newTodos))
  }, { deep: true })

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter((t) => !t.completed)
      case 'completed':
        return todos.value.filter((t) => t.completed)
      default:
        return todos.value
    }
  })

  const activeCount = computed(() => todos.value.filter(t => !t.completed).length)
  const completedCount = computed(() => todos.value.filter(t => t.completed).length)

  function addTodo(text: string) {
    if (!text.trim()) return
    todos.value.unshift({
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    })
  }

  function toggleTodo(id: string) {
    const todo = todos.value.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  function clearCompleted() {
    todos.value = todos.value.filter((t) => !t.completed)
  }

  function setFilter(newFilter: FilterType) {
      filter.value = newFilter
  }

  return {
    todos,
    filter,
    filteredTodos,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    setFilter
  }
})
