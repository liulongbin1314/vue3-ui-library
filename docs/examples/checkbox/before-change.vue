<template>
  <p>单个复选框的异步操作</p>
  <a-checkbox v-model="value1" :before-change="handleBeforeChange">异步 loading 示例</a-checkbox>
  <p>value1 的值：{{ value1 }}</p>

  <hr />
  <p>多个复选框的异步操作</p>
  <a-checkbox-group v-model="value2" :before-change="handleBeforeChange">
    <a-checkbox label="北京市" value="beijing"></a-checkbox>
    <a-checkbox label="上海市" value="shanghai"></a-checkbox>
    <a-checkbox label="天津市" value="tianjin"></a-checkbox>
  </a-checkbox-group>
  <p>value2 的值：{{ value2 }}</p>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(['beijing'])

// before-change 属性的值，必须为函数，且返回值为 Promise 对象。
// 形参中的 newValue 是选中状态变化后的新值；
// 形参中的 oldValue 是选中状态变化前的旧值。
const handleBeforeChange = (newValue, oldValue) => {
  AMessage({
    type: 'success',
    background: true,
    content: `新值为：${newValue}，旧值为：${oldValue}`
  })

  // 函数内必须 return Promise 对象
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1500)
  })
}
</script>
