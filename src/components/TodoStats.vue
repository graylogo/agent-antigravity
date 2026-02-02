<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { ref, watch } from 'vue'

const store = useTodoStore()
const displayCount = ref(store.activeCount)

// Animate count changes
watch(() => store.activeCount, (newCount) => {
  const start = displayCount.value
  const end = newCount
  const duration = 300
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    displayCount.value = Math.round(start + (end - start) * progress)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  animate()
})
</script>

<template>
  <footer class="stats" v-if="store.todos.length > 0">
    <span class="count">
      <strong class="count-number">{{ displayCount }}</strong>
      {{ displayCount === 1 ? 'item' : 'items' }} left
    </span>

    <button
      class="clear-btn"
      @click="store.clearCompleted"
      :disabled="store.completedCount === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
      Clear completed
      <span v-if="store.completedCount > 0" class="badge">{{ store.completedCount }}</span>
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
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.count {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.count-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.375rem;
  color: var(--c-white);
  background: var(--c-primary);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px hsla(var(--hue-primary), 70%, 60%, 0.3);
}

.count-number:hover {
  transform: scale(1.1);
}

.clear-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--c-text-secondary);
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.clear-btn svg {
  transition: transform var(--transition-fast);
}

.clear-btn:hover:not(:disabled) {
  color: var(--c-danger);
  background: hsla(var(--hue-danger), 80%, 60%, 0.1);
  transform: translateX(-2px);
}

.clear-btn:hover:not(:disabled) svg {
  transform: rotate(-10deg) scale(1.1);
}

.clear-btn:active:not(:disabled) {
  transform: translateX(0) scale(0.95);
}

.clear-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  background: var(--c-danger);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.625rem;
  font-weight: 700;
  animation: badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes badgePop {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 640px) {
  .stats {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
