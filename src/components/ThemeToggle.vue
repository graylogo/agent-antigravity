<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { computed } from 'vue'

const themeStore = useThemeStore()

const themeIcon = computed(() => {
  if (themeStore.mode === 'auto') {
    return 'auto'
  } else if (themeStore.mode === 'light') {
    return 'sun'
  } else {
    return 'moon'
  }
})

const themeLabel = computed(() => {
  const labels = {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark'
  }
  return labels[themeStore.mode]
})
</script>

<template>
  <button
    class="theme-toggle"
    @click="themeStore.cycleTheme"
    :aria-label="`Switch theme (current: ${themeLabel})`"
    :title="`Theme: ${themeLabel}`"
  >
    <Transition name="icon-fade" mode="out-in">
      <!-- Auto Icon -->
      <svg
        v-if="themeIcon === 'auto'"
        key="auto"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
        <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4z" opacity="0.5"></path>
      </svg>

      <!-- Sun Icon -->
      <svg
        v-else-if="themeIcon === 'sun'"
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>

      <!-- Moon Icon -->
      <svg
        v-else
        key="moon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </Transition>

    <span class="theme-label">{{ themeLabel }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
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

.theme-toggle:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--c-primary);
}

.theme-toggle:active {
  transform: translateY(0);
}

.theme-toggle svg {
  flex-shrink: 0;
  color: var(--c-primary);
  transition: transform var(--transition-fast);
}

.theme-toggle:hover svg {
  transform: rotate(20deg) scale(1.1);
}

.theme-label {
  min-width: 3rem;
  text-align: left;
}

/* Icon transition */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

@media (max-width: 640px) {
  .theme-label {
    display: none;
  }

  .theme-toggle {
    padding: 0.5rem;
  }
}
</style>
