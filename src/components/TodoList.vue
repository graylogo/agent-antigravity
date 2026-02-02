<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import TodoItem from './TodoItem.vue'
import draggable from 'vuedraggable'

const store = useTodoStore()
</script>

<template>
  <div class="todo-list">
    <draggable
      v-if="store.filter === 'all'"
      v-model="store.todos"
      item-key="id"
      handle=".drag-handle"
      ghost-class="sortable-ghost"
      drag-class="sortable-drag"
      :animation="200"
    >
      <template #item="{ element }">
        <TodoItem
          :todo="element"
          :enable-drag="true"
        />
      </template>
    </draggable>

    <TransitionGroup v-else name="list" tag="div">
      <TodoItem
        v-for="todo in store.filteredTodos"
        :key="todo.id"
        :todo="todo"
      />
    </TransitionGroup>

    <div v-if="store.todos.length === 0" class="empty-state">
      <div class="empty-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      </div>
      <p class="empty-title">No tasks yet</p>
      <p class="empty-subtitle">Add one to get started!</p>
    </div>

     <div v-else-if="store.filteredTodos.length === 0" class="empty-state">
      <div class="empty-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>
      <p class="empty-title">No {{ store.filter }} tasks</p>
      <p class="empty-subtitle">Try a different filter</p>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  margin-top: 1.5rem;
  position: relative;
  min-height: 100px;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--c-text-secondary);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: var(--c-gray-300);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.empty-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--c-text-primary);
  margin-bottom: 0.5rem;
}

.empty-subtitle {
  font-size: 0.875rem;
  color: var(--c-text-secondary);
}

/* Draggable Styles */
.sortable-ghost {
  opacity: 0.4;
  background: var(--c-bg-secondary);
  border: 2px dashed var(--c-primary);
  transform: rotate(2deg);
}

.sortable-drag {
  cursor: grabbing;
  opacity: 0.9;
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}

/* List Transitions */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px) scale(0.9);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(0.9);
}

.list-leave-active {
  position: absolute;
  width: calc(100% - 2rem);
}
</style>
