<template>
  <a-row>
    <a-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="12">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
    <a-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
    <a-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </a-col>
    <a-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </a-col>
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

.ep-bg-purple-dark {
  background-color: #2c2567;
}

.ep-bg-purple {
  background-color: #473ca4;
}

.ep-bg-purple-light {
  background-color: #6254e0;
}
</style>
