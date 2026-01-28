<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<template>
  <footer class="stats" v-if="store.todos.length > 0">
    <span class="count">
      <strong>{{ store.activeCount }}</strong> {{ store.activeCount === 1 ? 'item' : 'items' }} left
    </span>
    
    <button 
      class="clear-btn" 
      @click="store.clearCompleted"
      :disabled="store.completedCount === 0"
    >
      Clear completed
    </button>
  </footer>
</template>

<style scoped>
.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--c-border);
  color: var(--c-text-secondary);
  font-size: 0.875rem;
}

.count strong {
    color: var(--c-text-primary);
}

.clear-btn {
  color: var(--c-text-secondary);
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast);
}

.clear-btn:hover:not(:disabled) {
  color: var(--c-danger);
  text-decoration: underline;
}

.clear-btn:disabled {
    opacity: 0.5;
    cursor: default;
}
</style>
