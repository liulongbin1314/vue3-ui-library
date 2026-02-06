<template>
  <p>没有绑定 v-model 的组件状态会被重置：</p>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog v-model="visible" title="标题" destroy-on-closed>
    <a-input></a-input>
  </a-dialog>

  <hr />

  <p>绑定了 v-model 时，destroy-on-closed 属性不会生效，组件的状态需要手动重置：</p>
  <a-button type="primary" @click="visible2 = true">展示 Dialog 弹窗</a-button>
  <!-- 下面的 destroy-on-closed 属性不会生效 -->
  <!-- 需要使用 @closed 事件手动重置状态 -->
  <a-dialog v-model="visible2" title="标题" destroy-on-closed @closed="onClosed">
    <a-input v-model="msg"></a-input>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const msg = ref('')

// Dialog 关闭完成后，手动重置
const onClosed = () => {
  msg.value = ''
}
</script>
