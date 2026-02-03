<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoStats from './components/TodoStats.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import GoogleSearchButton from './components/GoogleSearchButton.vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="background-gradient"></div>
  <ThemeToggle class="theme-toggle-fixed" />
  <GoogleSearchButton class="google-search-fixed" />
  <main class="app-container" :class="{ loaded: isLoaded }">
    <header>
      <h1 class="animated-title">
        <span class="letter">T</span>
        <span class="letter">o</span>
        <span class="letter">d</span>
        <span class="letter">o</span>
      </h1>
      <TodoFilter />
    </header>

    <div class="card">
        <TodoInput />
        <TodoList />
        <TodoStats />
    </div>

    <footer class="app-footer">
        <p>Press <kbd>Enter</kbd> to add a task • <kbd>⌘K</kbd> for Google</p>
    </footer>
  </main>
</template>

<style scoped>
.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 20% 30%, hsla(var(--hue-primary), 70%, 60%, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, hsla(var(--hue-success), 70%, 60%, 0.1) 0%, transparent 50%);
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.app-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 0 1rem;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.app-container.loaded {
  opacity: 1;
  transform: translateY(0);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.animated-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
  display: flex;
  gap: 0.1em;
}

.letter {
  display: inline-block;
  background: linear-gradient(135deg, var(--c-primary) 0%, hsl(var(--hue-primary), 60%, 40%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: letterFloat 3s ease-in-out infinite;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.letter:nth-child(1) { animation-delay: 0s; }
.letter:nth-child(2) { animation-delay: 0.1s; }
.letter:nth-child(3) { animation-delay: 0.2s; }
.letter:nth-child(4) { animation-delay: 0.3s; }

.letter:hover {
  transform: scale(1.2) rotate(-5deg);
}

@keyframes letterFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.card {
    display: flex;
    flex-direction: column;
    position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg,
    transparent 0%,
    hsla(var(--hue-primary), 70%, 60%, 0.1) 50%,
    transparent 100%);
  border-radius: var(--radius-lg);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card:hover::before {
  opacity: 1;
}

.app-footer {
    margin-top: 2rem;
    text-align: center;
    color: var(--c-text-secondary);
    font-size: 0.875rem;
    animation: fadeInUp 1s ease 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

kbd {
    background: var(--c-gray-200);
    border-radius: 4px;
    padding: 2px 6px;
    font-family: monospace;
    font-size: 0.9em;
    box-shadow: 0 2px 0 var(--c-gray-300);
    transition: all 0.2s ease;
}

kbd:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 0 var(--c-gray-300);
}

@media (max-width: 640px) {
    .app-container {
        margin: 1rem auto;
    }

    .animated-title {
        font-size: 2.5rem;
    }

    header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }

    .theme-toggle-fixed {
      top: 1rem;
      right: 1rem;
    }
}
</style>

<style>
/* Global styles for theme toggle */
.theme-toggle-fixed {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  animation: slideInFromRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
}

/* Google search button */
.google-search-fixed {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  animation: slideInFromLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
