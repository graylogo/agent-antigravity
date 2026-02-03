import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'auto' | 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>('auto')
  const isDark = ref(false)

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme-mode') as ThemeMode | null
  if (savedTheme && ['auto', 'light', 'dark'].includes(savedTheme)) {
    mode.value = savedTheme
  }

  // Function to check system preference
  function getSystemPreference(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Function to apply theme
  function applyTheme() {
    if (mode.value === 'auto') {
      isDark.value = getSystemPreference()
    } else {
      isDark.value = mode.value === 'dark'
    }

    // Apply to document
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  // Function to set theme mode
  function setTheme(newMode: ThemeMode) {
    mode.value = newMode
    localStorage.setItem('theme-mode', newMode)
    applyTheme()
  }

  // Function to cycle through themes
  function cycleTheme() {
    const modes: ThemeMode[] = ['auto', 'light', 'dark']
    const currentIndex = modes.indexOf(mode.value)
    const nextIndex = (currentIndex + 1) % modes.length
    const nextMode = modes[nextIndex]
    if (nextMode) {
      setTheme(nextMode)
    }
  }

  // Listen to system preference changes when in auto mode
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (mode.value === 'auto') {
      applyTheme()
    }
  })

  // Watch mode changes
  watch(mode, () => {
    applyTheme()
  }, { immediate: true })

  // Apply theme immediately
  applyTheme()

  return {
    mode,
    isDark,
    setTheme,
    cycleTheme
  }
})
