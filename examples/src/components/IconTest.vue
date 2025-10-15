<template>
  <p>图标组件 --- {{ color }} --- {{ size }}</p>
  <a-button @click="changeColor">change color</a-button>
  <a-button @click="changeSize">change size</a-button>
  <div class="row-gap">
    <a-icon :color="color" :size="size">
      <span class="iconfont icon-business-icon-buyers-club-fill"></span>
    </a-icon>

    <a-icon :color="color" size="40px">
      <span class="iconfont icon-business-icon-buyers-club-fill"></span>
    </a-icon>
  </div>

  <p>Svg 图标</p>
  <div class="row-gap">
    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Activity />
    </a-icon>

    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Airplay />
    </a-icon>

    <a-icon :color="color" :size="size">
      <!-- svg 的图标组件 -->
      <Bookmark />
    </a-icon>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Activity, Airplay, Bookmark } from '@ui-library/icons'

const color = ref('red')
const changeColor = () => {
  color.value = color.value === 'red' ? 'black' : 'red'
}

const size = ref(30)
const changeSize = () => {
  size.value += 5
}
</script>

<style scoped></style>
