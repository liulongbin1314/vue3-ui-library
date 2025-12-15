<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button type="primary" @click="show('right')">Right Drawer</a-button>
    <a-button type="primary" @click="show('left')">Left Drawer</a-button>
    <a-button type="primary" @click="show('top')">Top Drawer</a-button>
    <a-button type="primary" @click="show('bottom')">Bottom Drawer</a-button>
  </div>

  <a-drawer v-model="visible" title="标题" :placement round gray>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
    <div>这是内容</div>
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const placement = ref('right')

const show = (place) => {
  visible.value = true
  placement.value = place
}
</script>

<style scoped></style>
