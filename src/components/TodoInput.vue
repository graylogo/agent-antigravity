<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const text = ref('')

function submit() {
  if (text.value.trim()) {
    store.addTodo(text.value)
    text.value = ''
  }
}
</script>

<template>
  <div class="input-wrapper">
    <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plus-icon"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <input
      v-model="text"
      type="text"
      placeholder="What needs to be done?"
      @keyup.enter="submit"
      aria-label="New todo input"
    />
    <button class="add-btn" @click="submit" :disabled="!text.trim()">
        Add
    </button>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--c-bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  border: 1px solid var(--c-border);
}

.input-wrapper:focus-within {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  border-color: var(--c-primary);
}

.icon-wrapper {
    padding: 0 1rem;
    color: var(--c-text-secondary);
}

input {
  flex: 1;
  padding: 1rem 0;
  font-size: 1.1rem;
  outline: none;
  min-width: 0;
}

input::placeholder {
  color: var(--c-gray-400);
}

.add-btn {
    padding: 0.5rem 1.5rem;
    background: var(--c-primary);
    color: white;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: background-color var(--transition-fast), opacity var(--transition-fast);
    margin-left: 0.5rem;
}

.add-btn:hover:not(:disabled) {
    background: var(--c-primary-hover);
}

.add-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--c-gray-400);
}

@media (max-width: 640px) {
    .add-btn {
        display: none; /* Mobile users rely on Enter key mostly, or we can make it smaller */
    }
}
</style>
