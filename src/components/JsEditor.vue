<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'

interface Props {
  code: string
}

defineProps<Props>()

const emit = defineEmits<{
  'update:code': [value: string]
}>()

const extensions = [javascript()]
</script>

<template>
  <div class="js-editor-wrapper">
    <Codemirror
      :model-value="code"
      :extensions="extensions"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      @update:model-value="emit('update:code', $event)"
    />
  </div>
</template>

<style scoped>
.js-editor-wrapper {
  flex: 1 1 0;
  overflow: hidden;
}

.js-editor-wrapper :deep(.cm-editor) {
  height: 100%;
  font-size: 12pt;
}

.js-editor-wrapper :deep(.cm-scroller) {
  overflow: auto;
}

.js-editor-wrapper :deep(.cm-content) {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}
</style>
