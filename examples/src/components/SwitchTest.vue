<template>
  <p>基础用法</p>
  <div>
    <a-switch></a-switch>
  </div>

  <p>size 尺寸</p>
  <div class="row-gap">
    <a-switch size="small"></a-switch>
    <a-switch size="default"></a-switch>
    <a-switch size="large"></a-switch>
  </div>

  <p>v-model 指令</p>
  <div>
    <a-switch v-model="value1"></a-switch>
  </div>
  <p>{{ value1 }}</p>

  <p>动画效果</p>
  <div class="row-gap">
    <a-switch></a-switch>
    <a-switch transition="slide"></a-switch>
  </div>

  <p>主题颜色</p>
  <div class="row-gap">
    <a-switch></a-switch>
    <a-switch type="primary"></a-switch>
    <a-switch type="success"></a-switch>
    <a-switch type="warning"></a-switch>
    <a-switch type="error"></a-switch>
  </div>

  <p>禁用状态</p>
  <div class="row-gap">
    <a-switch v-model="value2" disabled></a-switch>
    <a-switch v-model="value2" type="primary" disabled></a-switch>
    <a-switch v-model="value2" type="success" disabled></a-switch>
    <a-switch v-model="value2" type="warning" disabled></a-switch>
    <a-switch v-model="value2" type="error" disabled></a-switch>
  </div>

  <p>自定义 value 值</p>
  <div class="row-gap">
    <a-switch v-model="value3" transition="slide" @change="handleChange"></a-switch>
  </div>
  <p>{{ String(value3) }}</p>

  <p>自定义文字</p>
  <div class="row-gap">
    <a-switch active-text="开启" inactive-text="关闭"></a-switch>
    <a-switch active-text="Yes" inactive-text="No"></a-switch>
  </div>

  <p>自定义图标</p>
  <div class="row-gap">
    <a-switch
      active-text="开启"
      inactive-text="关闭"
      :active-icon="Sun"
      :inactive-icon="Moon"
      center-icon
    ></a-switch>
    <a-switch
      active-text="Yes"
      inactive-text="No"
      :active-icon="Eye"
      :inactive-icon="EyeOff"
    ></a-switch>
  </div>

  <p>异步</p>
  <div class="row-gap">
    <a-switch
      active-text="开启"
      inactive-text="关闭"
      :active-icon="Sun"
      :inactive-icon="Moon"
      center-icon
      v-model="value4"
      :before-change="handleBeforeChange"
    ></a-switch>
  </div>
  <p>{{ value4 }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { Sun, Moon, Eye, EyeOff } from '@ui-library/icons'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(false)

const handleChange = (value) => {
  console.log('change: ', value)
}
const handleBeforeChange = (nextVal, currentVal) => {
  console.log(nextVal, currentVal)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.ceil(Math.random() * 10)
      if (num <= 5) {
        resolve(() => console.log('成功了：', num))
      } else {
        reject(() => console.log('失败了：', num))
      }
    }, 1500)
  })
}
</script>

<style scoped></style>
