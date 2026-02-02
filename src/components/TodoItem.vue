<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import type { Todo } from '@/stores/todo'

defineProps<{
  todo: Todo
  enableDrag?: boolean
}>()

const store = useTodoStore()
const isCompleting = ref(false)

function handleToggle(id: string) {
  isCompleting.value = true
  store.toggleTodo(id)
  setTimeout(() => {
    isCompleting.value = false
  }, 600)
}
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed, completing: isCompleting }">
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
        @change="handleToggle(todo.id)"
      >
      <div class="custom-checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div class="checkbox-ripple"></div>
      </div>
    </label>

    <span class="text">{{ todo.text }}</span>

    <button class="delete-btn" @click="store.removeTodo(todo.id)" aria-label="Delete todo">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Celebration particles -->
    <div v-if="isCompleting && todo.completed" class="celebration">
      <span class="particle" v-for="i in 6" :key="i" :style="{ '--i': i }"></span>
    </div>
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
  position: relative;
  overflow: visible;
}

.todo-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--c-primary);
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  transform: scaleY(0);
  transition: transform var(--transition-normal);
}

.todo-item:hover::before {
  transform: scaleY(1);
}

.todo-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
  border-color: var(--c-border);
}

.todo-item.completing {
  animation: itemBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes itemBounce {
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  25% {
    transform: translateX(4px) scale(1.02);
  }
  75% {
    transform: translateX(-2px) scale(0.98);
  }
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
  position: relative;
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

.checkbox-ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--c-success);
  opacity: 0;
  transform: scale(0);
}

.checkbox-wrapper input:checked + .custom-checkbox {
  background: var(--c-success);
  border-color: var(--c-success);
  animation: checkboxPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes checkboxPop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.checkbox-wrapper input:checked + .custom-checkbox .checkbox-ripple {
  animation: rippleEffect 0.6s ease-out;
}

@keyframes rippleEffect {
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}

.custom-checkbox svg {
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0;
  transform: scale(0.5) rotate(-45deg);
  transition: all var(--transition-fast);
  position: relative;
  z-index: 1;
}

.checkbox-wrapper input:checked + .custom-checkbox svg {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.text {
  flex: 1;
  font-size: 1rem;
  transition: all var(--transition-normal);
  word-break: break-word;
  position: relative;
}

.todo-item.completed .text {
  color: var(--c-text-secondary);
}

.todo-item.completed .text::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background: var(--c-text-secondary);
  transform: scaleX(0);
  transform-origin: left;
  animation: strikethrough 0.3s ease-out 0.2s forwards;
}

@keyframes strikethrough {
  to {
    transform: scaleX(1);
  }
}

.delete-btn {
  color: var(--c-gray-400);
  opacity: 0;
  transform: translateX(10px) scale(0.8);
  transition: all var(--transition-fast);
  padding: 0.5rem;
  border-radius: var(--radius-md);
}

.delete-btn:hover {
  background: var(--c-danger);
  color: white;
  transform: translateX(0) scale(1) rotate(90deg);
}

.delete-btn:active {
  transform: translateX(0) scale(0.9) rotate(90deg);
}

.todo-item:hover .delete-btn,
.todo-item:focus-within .delete-btn {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Celebration effect */
.celebration {
  position: absolute;
  top: 50%;
  left: 2rem;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--c-success);
  border-radius: 50%;
  animation: particleFloat 0.6s ease-out forwards;
  opacity: 0;
}

.particle:nth-child(1) { --i: 1; }
.particle:nth-child(2) { --i: 2; }
.particle:nth-child(3) { --i: 3; }
.particle:nth-child(4) { --i: 4; }
.particle:nth-child(5) { --i: 5; }
.particle:nth-child(6) { --i: 6; }

@keyframes particleFloat {
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(
      calc(cos(calc(var(--i) * 60deg)) * 30px),
      calc(sin(calc(var(--i) * 60deg)) * 30px)
    ) scale(0);
  }
}
</style>
