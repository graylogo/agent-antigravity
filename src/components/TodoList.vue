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

    <TransitionGroup v-else name="list">
      <TodoItem 
        v-for="todo in store.filteredTodos" 
        :key="todo.id" 
        :todo="todo" 
      />
    </TransitionGroup>
    
    <div v-if="store.todos.length === 0" class="empty-state">
      <p>No tasks yet. Add one to get started!</p>
    </div>
    
     <div v-else-if="store.filteredTodos.length === 0" class="empty-state">
      <p>No {{ store.filter }} tasks found.</p>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  margin-top: 1.5rem;
  position: relative;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--c-text-secondary);
}

/* Draggable Styles */
.sortable-ghost {
  opacity: 0.5;
  background: var(--c-bg-secondary);
  border: 1px dashed var(--c-border);
}

.sortable-drag {
  cursor: grabbing;
}

/* List Transitions */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all var(--transition-normal);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
