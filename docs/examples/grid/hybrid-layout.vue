<template>
  <a-row :gutter="20">
    <a-col :span="16"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="8"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row :gutter="20">
    <a-col :span="8"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="8"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row :gutter="20">
    <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="16"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="4"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
</template>

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
