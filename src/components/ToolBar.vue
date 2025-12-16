<script setup lang="ts">
interface Props {
  isRunning: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  run: []
  stop: []
}>()
</script>

<template>
  <div class="toolbar">
    <button class="run-button" :disabled="isRunning" @click="emit('run')">Run</button>
    <button class="stop-button" :disabled="!isRunning" @click="emit('stop')">Stop</button>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  padding: 8px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  width: 100%;
}

.run-button {
  padding: 6px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
}

.run-button:hover:not(:disabled) {
  background-color: #45a049;
}

.run-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.stop-button {
  padding: 6px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.stop-button:hover:not(:disabled) {
  background-color: #da190b;
}

.stop-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
