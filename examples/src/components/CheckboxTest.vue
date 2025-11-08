<template>
  <p>基础用法</p>
  <div>
    <a-checkbox label="北京市"></a-checkbox>
    <a-checkbox label="上海市"></a-checkbox>
  </div>

  <p>勾选状态</p>
  <div>
    <a-checkbox label="北京市" checked></a-checkbox>
  </div>

  <p>禁用状态</p>
  <div>
    <a-checkbox label="北京市" disabled></a-checkbox>
    <a-checkbox label="北京市" checked disabled></a-checkbox>
  </div>

  <p>主题颜色</p>
  <div>
    <a-checkbox label="北京市" checked></a-checkbox>
    <a-checkbox label="北京市" checked type="primary"></a-checkbox>
    <a-checkbox label="北京市" checked type="success"></a-checkbox>
    <a-checkbox label="北京市" checked type="warning"></a-checkbox>
    <a-checkbox label="北京市" checked type="error"></a-checkbox>
  </div>
  <div>
    <a-checkbox label="北京市" checked disabled></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="primary"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="success"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="warning"></a-checkbox>
    <a-checkbox label="北京市" checked disabled type="error"></a-checkbox>
  </div>

  <p>尺寸</p>
  <div>
    <a-checkbox label="北京市" checked type="primary" size="small"></a-checkbox>
    <a-checkbox label="北京市" checked type="success" size="default"></a-checkbox>
    <a-checkbox label="北京市" checked type="warning" size="large"></a-checkbox>
    <a-checkbox label="北京市" checked type="error"></a-checkbox>
  </div>

  <p>复选框组</p>
  <a-checkbox-group size="default">
    <a-checkbox label="北京市" checked size="small"></a-checkbox>
    <a-checkbox label="上海市" checked></a-checkbox>
    <a-checkbox label="天津市" checked></a-checkbox>
  </a-checkbox-group>

  <p>单个复选框的 v-model</p>
  <div>
    <a-checkbox
      label="北京市"
      type="error"
      v-model="value1"
      true-value="yes"
      false-value="no"
      checked
      @change="handleChange1"
    ></a-checkbox>
  </div>
  <p>{{ value1 }}</p>

  <p>复选框组的 v-model</p>
  <a-checkbox-group v-model="value2" @change="handleChange2" :before-change="handleBeforeChange">
    <a-checkbox label="北京市" value="beijing"></a-checkbox>
    <a-checkbox label="上海市" value="shanghai"></a-checkbox>
    <a-checkbox label="天津市" value="tianjin"></a-checkbox>
  </a-checkbox-group>
  <p>{{ value2 }}</p>

  <p>单个复选框的 loading 动画效果</p>
  <div>
    <a-checkbox
      label="北京市"
      type="error"
      v-model="value1"
      true-value="yes"
      false-value="no"
      checked
      @change="handleChange1"
      :before-change="handleBeforeChange"
    ></a-checkbox>
  </div>
  <p>{{ value1 }}</p>

  <p>全选功能</p>
  <a-checkbox-all direction="horizontal" @change="handleAllChange">
    <a-checkbox value="beijing">北京市</a-checkbox>
    <a-checkbox value="shanghai">上海市</a-checkbox>
    <a-checkbox value="tianjin">天津市</a-checkbox>
    <a-checkbox value="chongqing">重庆市</a-checkbox>
  </a-checkbox-all>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(['beijing', 'shanghai'])

const handleChange1 = (value) => {
  console.log('单个复选框的 change 事件：', value)
}
const handleChange2 = (value) => {
  console.log('复选框组的 change 事件：', value)
}
const handleBeforeChange = (newValue, oldValue) => {
  console.log(newValue, oldValue)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      // reject()
    }, 1500)
  })
}
const handleAllChange = (values, isAllChecked) => {
  console.log(values, isAllChecked)
}
</script>

<style scoped></style>
