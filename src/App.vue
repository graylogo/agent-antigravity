<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoStats from './components/TodoStats.vue'
</script>

<template>
  <main class="app-container">
    <header>
      <h1>Todo</h1>
      <TodoFilter />
    </header>
    
    <div class="card">
        <TodoInput />
        <TodoList />
        <TodoStats />
    </div>
    
    <footer class="app-footer">
        <p>Press <kbd>Enter</kbd> to add a task</p>
    </footer>
  </main>
</template>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 4rem auto;
  perspective: 1000px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, var(--c-primary) 0%, hsl(var(--hue-primary), 60%, 40%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.card {
    background: var(--c-bg-card); /* Fallback */
    /* Glassmorphism effect if supported, but let's stick to clean card first as per base.css var(--c-bg-card) which is opaque white/dark */
    /* Actually base.css has --c-bg-card as opaque. Let's make this container transparent if we want the input/list to be the cards, OR make this the main card. */
    /* The design in components assumes they are INSIDE a container or standalone. 
       TodoInput has background. TodoItem has background. 
       So maybe we don't need a card background here. */
    /* Let's remove card background and rely on components. */
}

/* Adjusting structure: Input is its own card-like. Items are cards. */
.card {
    display: flex;
    flex-direction: column;
}

.app-footer {
    margin-top: 2rem;
    text-align: center;
    color: var(--c-text-secondary);
    font-size: 0.875rem;
}

kbd {
    background: var(--c-gray-200);
    border-radius: 3px;
    padding: 0 4px;
    font-family: monospace;
    font-size: 0.9em;
}

@media (max-width: 640px) {
    .app-container {
        margin: 1rem auto;
    }
    
    header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}
</style>
