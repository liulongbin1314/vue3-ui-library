<template>
  <div>
    <a-button-group>
      <a-button @click="gap = 15">换行间距 15px</a-button>
      <a-button @click="gap = 30">换行间距 30px</a-button>
    </a-button-group>

    <hr />
    <a-row :gutter="20" :gap>
      <a-col :span="4" :offset="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
      <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const gap = ref(15)
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
