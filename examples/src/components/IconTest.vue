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

  <p>Button 组件中使用 Icon 组件</p>
  <div class="row-gap">
    <a-button type="primary">
      <a-icon>
        <span class="iconfont icon-search"></span>
      </a-icon>
      按钮
      <a-icon>
        <PlusCircle />
      </a-icon>
    </a-button>

    <a-button type="error">
      <a-icon icon="icon-search" />
      按钮
      <a-icon :icon="PlusCircle" />
    </a-button>
  </div>
</template>

<script setup>
import { AButton, AIcon } from '@ui-library/components'
import '@ui-library/theme/src/icon.scss'
import '@ui-library/theme/src/button.scss'
import { ref } from 'vue'
import { Activity, Airplay, Bookmark, PlusCircle } from '@ui-library/icons'

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
