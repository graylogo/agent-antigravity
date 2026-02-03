<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

function openGoogle() {
  window.open('https://www.google.com', '_self')
}

// 监听快捷键 Ctrl+K 或 Cmd+K
function handleKeyPress(event: KeyboardEvent) {
  // Ctrl+K (Windows/Linux) 或 Cmd+K (Mac)
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault()
    openGoogle()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
})
</script>

<template>
  <button
    class="google-search-btn"
    @click="openGoogle"
    title="Open Google Search (⌘K or Ctrl+K)"
    aria-label="Open Google Search"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
    <span class="btn-text">Google</span>
    <span class="shortcut-hint">⌘K</span>
  </button>
</template>

<style scoped>
.google-search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  color: var(--c-text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.google-search-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: #4285f4;
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  color: white;
}

.google-search-btn:active {
  transform: translateY(0);
}

.google-search-btn svg {
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.google-search-btn:hover svg {
  transform: rotate(90deg) scale(1.1);
}

.btn-text {
  font-weight: 600;
}

.shortcut-hint {
  margin-left: auto;
  padding: 0.125rem 0.375rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-family: monospace;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.google-search-btn:hover .shortcut-hint {
  opacity: 1;
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 640px) {
  .shortcut-hint {
    display: none;
  }

  .google-search-btn {
    padding: 0.5rem;
  }

  .btn-text {
    display: none;
  }
}
</style>
