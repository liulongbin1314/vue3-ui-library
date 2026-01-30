<template>
  <a-button-group>
    <a-button @click="gutter = 20">列间隔 20px</a-button>
    <a-button @click="gutter = 40">列间隔 40px</a-button>
  </a-button-group>

  <hr />
  <a-row :gutter>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
</template>

<script setup>
import { ref } from 'vue'
const gutter = ref(20)
</script>

<style scoped>
.a-row {
  margin-bottom: 20px;
}

.a-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.ep-bg-purple {
  background-color: #473ca4;
}
</style>
