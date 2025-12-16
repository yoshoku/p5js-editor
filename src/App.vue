<script setup lang="ts">
import { ref } from 'vue'
import JsEditor from './components/JsEditor.vue'
import ToolBar from './components/ToolBar.vue'

const code = ref(`function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
}`)

const isRunning = ref(false)

const runSketch = () => {
  isRunning.value = true
}
const stopSketch = () => {
  isRunning.value = false
}
</script>

<template>
  <div class="container">
    <ToolBar :is-running="isRunning" @run="runSketch" @stop="stopSketch" />
    <div class="editor-section">
      <JsEditor :code="code" />
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.editor-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
</style>
