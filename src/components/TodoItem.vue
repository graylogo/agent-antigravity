<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import type { Todo } from '@/stores/todo'

defineProps<{
  todo: Todo
  enableDrag?: boolean
}>()

const store = useTodoStore()
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div v-if="enableDrag" class="drag-handle" title="Drag to reorder">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="12" r="1"></circle>
        <circle cx="9" cy="5" r="1"></circle>
        <circle cx="9" cy="19" r="1"></circle>
        <circle cx="15" cy="12" r="1"></circle>
        <circle cx="15" cy="5" r="1"></circle>
        <circle cx="15" cy="19" r="1"></circle>
      </svg>
    </div>

    <label class="checkbox-wrapper">
      <input 
        type="checkbox" 
        :checked="todo.completed"
        @change="store.toggleTodo(todo.id)"
      >
      <div class="custom-checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
    
    <span class="text">{{ todo.text }}</span>
    
    <button class="delete-btn" @click="store.removeTodo(todo.id)" aria-label="Delete todo">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--c-bg-card);
  border-radius: var(--radius-md);
  margin-bottom: 0.75rem;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  gap: 1rem;
}

.todo-item:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  border-color: var(--c-border);
}

.drag-handle {
  color: var(--c-gray-400);
  cursor: grab;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  margin-left: -0.5rem;
  transition: color var(--transition-fast);
}

.drag-handle:active {
  cursor: grabbing;
}

.drag-handle:hover {
  color: var(--c-text-primary);
}

.checkbox-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.checkbox-wrapper input {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}

.custom-checkbox {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--c-gray-300);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  color: white;
}

.checkbox-wrapper input:checked + .custom-checkbox {
  background: var(--c-success);
  border-color: var(--c-success);
}

.custom-checkbox svg {
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0;
  transform: scale(0.5);
  transition: all var(--transition-fast);
}

.checkbox-wrapper input:checked + .custom-checkbox svg {
  opacity: 1;
  transform: scale(1);
}

.text {
  flex: 1;
  font-size: 1rem;
  transition: color var(--transition-normal);
  word-break: break-word;
}

.todo-item.completed .text {
  color: var(--c-text-secondary);
  text-decoration: line-through;
}

.delete-btn {
  color: var(--c-gray-400);
  opacity: 0;
  transform: translateX(10px);
  transition: all var(--transition-fast);
  padding: 0.5rem;
  border-radius: var(--radius-md);
}

.delete-btn:hover {
  background: var(--c-gray-100);
  color: var(--c-danger);
}

.todo-item:hover .delete-btn,
.todo-item:focus-within .delete-btn {
  opacity: 1;
  transform: translateX(0);
}
</style>
