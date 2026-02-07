<template>
  <p>placement 为 top 和 bottom 的 Drawer 支持 round 属性：</p>
  <div class="box">
    <a-button type="primary" @click="show('top')">top to bottom</a-button>
    <a-button type="primary" @click="show('bottom')">bottom to top</a-button>
  </div>

  <hr />

  <p>placement 为 left 和 right 的 Drawer 不支持 round 属性：</p>
  <div class="box">
    <a-button type="primary" @click="show('left')">left to right</a-button>
    <a-button type="primary" @click="show('right')">right to left</a-button>
  </div>

  <a-drawer v-model="visible" title="标题" gray :placement="placement" lock-scroll round>
    <div>
      <p>这是抽屉的内容区域。</p>
    </div>
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const placement = ref('right')

const show = (place) => {
  placement.value = place
  visible.value = true
}
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
