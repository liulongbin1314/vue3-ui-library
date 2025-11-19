<template>
  <p>基础用法</p>
  <div>
    <a-radio>基础用法1</a-radio>
    <a-radio>基础用法2</a-radio>
  </div>

  <p>禁用状态</p>
  <div>
    <a-radio disabled>禁用状态</a-radio>
  </div>

  <p>主题颜色</p>
  <div>
    <a-radio type="primary">primary</a-radio>
    <a-radio type="success">success</a-radio>
    <a-radio type="warning">warning</a-radio>
    <a-radio type="error">error</a-radio>
  </div>
  <div>
    <a-radio disabled type="primary">primary</a-radio>
    <a-radio disabled type="success">success</a-radio>
    <a-radio disabled type="warning">warning</a-radio>
    <a-radio disabled type="error">error</a-radio>
  </div>

  <p>size 尺寸</p>
  <div>
    <a-radio type="primary" size="small">primary</a-radio>
    <a-radio type="success" size="default">success</a-radio>
    <a-radio type="warning" size="large">warning</a-radio>
    <a-radio type="error">error</a-radio>
  </div>

  <p>label 文本</p>
  <div>
    <a-radio label="男" value="man" v-model="value1" @change="handleChange1"></a-radio>
    <a-radio label="女" value="woman" v-model="value1" @change="handleChange1"></a-radio>
    <a-radio value="secret" v-model="value1" @change="handleChange1">保密</a-radio>
  </div>
  <p>{{ value1 }}</p>

  <p>RadioGroup 组件</p>
  <a-radio-group v-model="value2" @change="handleChange1">
    <a-radio label="男" value="man"></a-radio>
    <a-radio label="女" value="woman"></a-radio>
    <a-radio value="secret">保密</a-radio>
  </a-radio-group>
  <p>{{ value2 }}</p>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('man')
const value2 = ref('man')

const handleChange1 = (value) => {
  console.log('trigger change evnet: ', value)
}
</script>

<style scoped></style>
