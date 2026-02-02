<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { ref, watch, type ComponentPublicInstance } from 'vue'

const store = useTodoStore()
const filterButtons = ref<HTMLElement[]>([])
const indicatorStyle = ref({ left: '0px', width: '0px' })

const filters = ['all', 'active', 'completed'] as const

watch(() => store.filter, updateIndicator, { immediate: true })

function updateIndicator() {
  setTimeout(() => {
    const activeButton = filterButtons.value.find(
      btn => btn.dataset.filter === store.filter
    )
    if (activeButton) {
      indicatorStyle.value = {
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`
      }
    }
  }, 0)
}

function setRef(el: Element | ComponentPublicInstance | null, index: number) {
  if (el) filterButtons.value[index] = el as HTMLElement
}
</script>

<template>
  <div class="filters">
    <div class="filter-indicator" :style="indicatorStyle"></div>
    <button
        v-for="(filter, index) in filters"
        :key="filter"
        :ref="el => setRef(el, index)"
        :data-filter="filter"
        :class="{ active: store.filter === filter }"
        @click="store.setFilter(filter)"
    >
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  position: relative;
  display: flex;
  gap: 0.5rem;
  background: var(--c-gray-100);
  padding: 0.25rem;
  border-radius: var(--radius-lg);
  width: fit-content;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.filter-indicator {
  position: absolute;
  top: 0.25rem;
  bottom: 0.25rem;
  background: var(--c-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 0;
}

button {
  position: relative;
  z-index: 1;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--c-text-secondary);
  transition: all var(--transition-fast);
}

button:hover {
    color: var(--c-text-primary);
    transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

button.active {
  color: var(--c-primary);
  text-shadow: 0 0 20px hsla(var(--hue-primary), 70%, 60%, 0.3);
}

@media (prefers-color-scheme: dark) {
  .filters {
    background: var(--c-gray-800);
  }

  .filter-indicator {
    background: var(--c-gray-700);
  }
}
</style>
