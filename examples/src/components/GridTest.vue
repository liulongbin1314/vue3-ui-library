<template>
  <a-row>
    <!-- a-col-值 -->
    <!-- a-col-24 -->
    <a-col :span="24">24</a-col>
  </a-row>

  <a-row>
    <a-col :span="12">12</a-col>
    <a-col :span="12">12</a-col>
  </a-row>

  <a-row>
    <a-col :span="8">8</a-col>
    <a-col :span="8">8</a-col>
    <a-col :span="8">8</a-col>
  </a-row>

  <a-row>
    <a-col :span="6">6</a-col>
    <a-col :span="6">6</a-col>
    <a-col :span="6">6</a-col>
    <a-col :span="6">6</a-col>
  </a-row>

  <div style="overflow-x: hidden">
    <a-row :gutter="20" :gap="15">
      <a-col :span="4" :offset="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
      <a-col :span="4">4</a-col>
    </a-row>
  </div>

  <!-- start、center、end、space-between、space-around或space-evenly -->
  <a-row justify="space-evenly">
    <a-col :span="4">4</a-col>
    <a-col :span="4">4</a-col>
    <a-col :span="4">4</a-col>
    <a-col :span="4">4</a-col>
  </a-row>
</template>

<script setup></script>

<style scoped>
.a-row {
  margin-bottom: 15px;
}

.a-col {
  background-color: #ccc;

  &:nth-child(odd) {
    background-color: #eee;
  }
}
</style>
