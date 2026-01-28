<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<template>
  <div class="filters">
    <button 
        v-for="filter in ['all', 'active', 'completed'] as const"
        :key="filter"
        :class="{ active: store.filter === filter }"
        @click="store.setFilter(filter)"
    >
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 0.5rem;
  background: var(--c-gray-100);
  padding: 0.25rem;
  border-radius: var(--radius-lg);
  width: fit-content;
}

button {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--c-text-secondary);
  transition: all var(--transition-fast);
}

button:hover {
    color: var(--c-text-primary);
    background: rgba(255, 255, 255, 0.5);
}

button.active {
  background: var(--c-white);
  color: var(--c-primary);
  box-shadow: var(--shadow-sm);
}
</style>
