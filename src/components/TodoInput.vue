<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const text = ref('')
const isAdding = ref(false)

function submit() {
  if (text.value.trim()) {
    isAdding.value = true
    store.addTodo(text.value)
    text.value = ''
    setTimeout(() => {
      isAdding.value = false
    }, 300)
  }
}
</script>

<template>
  <div class="input-wrapper" :class="{ adding: isAdding }">
    <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="plus-icon">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    </div>
    <input
      v-model="text"
      type="text"
      placeholder="What needs to be done?"
      @keyup.enter="submit"
      aria-label="New todo input"
    />
    <button class="add-btn" @click="submit" :disabled="!text.trim()">
        <span class="btn-text">Add</span>
        <span class="btn-ripple"></span>
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
  transition: all var(--transition-fast);
  border: 1px solid var(--c-border);
  overflow: hidden;
}

.input-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, hsla(var(--hue-primary), 70%, 60%, 0.1), transparent);
  transition: left 0.5s ease;
}

.input-wrapper:focus-within::before {
  left: 100%;
}

.input-wrapper:focus-within {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl), 0 0 0 3px hsla(var(--hue-primary), 70%, 60%, 0.1);
  border-color: var(--c-primary);
}

.input-wrapper.adding {
  animation: pulse 0.3s ease;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
}

.icon-wrapper {
    padding: 0 1rem;
    color: var(--c-text-secondary);
    transition: all var(--transition-fast);
}

.input-wrapper:focus-within .icon-wrapper {
  color: var(--c-primary);
}

.plus-icon {
  transition: transform var(--transition-fast);
}

.input-wrapper:focus-within .plus-icon {
  transform: rotate(90deg);
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
  transition: color var(--transition-fast);
}

.input-wrapper:focus-within input::placeholder {
  color: var(--c-gray-300);
}

.add-btn {
    position: relative;
    padding: 0.5rem 1.5rem;
    background: var(--c-primary);
    color: white;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    margin-left: 0.5rem;
    overflow: hidden;
}

.btn-text {
  position: relative;
  z-index: 1;
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.add-btn:active .btn-ripple {
  width: 300px;
  height: 300px;
}

.add-btn:hover:not(:disabled) {
    background: var(--c-primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px hsla(var(--hue-primary), 70%, 60%, 0.4);
}

.add-btn:active:not(:disabled) {
  transform: translateY(0);
}

.add-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--c-gray-400);
}

@media (max-width: 640px) {
    .add-btn {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
    }
}
</style>
