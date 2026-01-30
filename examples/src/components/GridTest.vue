<template>
  <a-container>
    <a-aside width="200px"></a-aside>
    <a-container>
      <a-header height="80px"></a-header>
      <a-main></a-main>
      <a-main></a-main>
      <a-footer height="80px"></a-footer>
    </a-container>
  </a-container>

  <hr />

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
      <a-col :span="4" :offset="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
      <a-col :span="4"><div class="item"></div></a-col>
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

<script setup>
import { ARow, ACol, AContainer, AHeader, AFooter, AMain, AAside } from '@ui-library/components'
import '@ui-library/theme/src/row.scss'
import '@ui-library/theme/src/col.scss'
import '@ui-library/theme/src/container.scss'
import '@ui-library/theme/src/header.scss'
import '@ui-library/theme/src/footer.scss'
import '@ui-library/theme/src/main.scss'
import '@ui-library/theme/src/aside.scss'
</script>

<style scoped>
.a-row {
  margin-bottom: 15px;
}

.a-col {
  background-color: #ccc;
  height: 30px;

  &:nth-child(odd) {
    background-color: #eee;
  }
}

.item {
  background-color: rgb(75, 0, 128);
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
</style>
