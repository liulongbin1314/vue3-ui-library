<template>
  <a-row class="row-bg">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row class="row-bg" justify="center">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row class="row-bg" justify="end">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row class="row-bg" justify="space-between">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row class="row-bg" justify="space-around">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
  <a-row class="row-bg" justify="space-evenly">
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple-light" /></a-col>
    <a-col :span="6"><div class="grid-content ep-bg-purple" /></a-col>
  </a-row>
</template>

<style>
.row-bg {
  background-color: #e3e0ff;
}

.dark {
  .row-bg {
    background-color: rgb(31, 26, 74);
  }
}

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

.ep-bg-purple-light {
  background-color: #6254e0;
}
</style>
