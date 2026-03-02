<template>
  <p>基本用法</p>
  <ACollapse v-model="activeNames" expandIconPosition="left" @change="handleChange">
    <ACollapseItem name="1" title="第1个">
      <div>111</div>
    </ACollapseItem>

    <ACollapseItem name="2" title="第2个">
      <div>222</div>
      <div>222</div>
    </ACollapseItem>

    <ACollapseItem name="3" title="第3个" disabled>
      <div>333</div>
      <div>333</div>
      <div>333</div>
    </ACollapseItem>
  </ACollapse>

  <p>手风琴模式</p>
  <AButtonGroup>
    <AButton @click="toggle('1')">Toggle 1</AButton>
    <AButton @click="toggle('2')">Toggle 2</AButton>
    <AButton @click="toggle('3')">Toggle 3</AButton>
  </AButtonGroup>
  <ACollapse ref="refEl" v-model="activeNames2" accordion @change="handleChange">
    <ACollapseItem name="1" title="第1个">
      <div>111</div>
    </ACollapseItem>

    <ACollapseItem name="2" title="第2个">
      <div>222</div>
      <div>222</div>
    </ACollapseItem>

    <ACollapseItem name="3" title="第3个">
      <div>333</div>
      <div>333</div>
      <div>333</div>
    </ACollapseItem>
  </ACollapse>
</template>

<script setup>
import { AButton, AButtonGroup, ACollapse, ACollapseItem } from '@ui-library/components'
import { ref } from 'vue'
const activeNames = ref(['1', '3'])
const activeNames2 = ref('1')
const refEl = ref(null)

const handleChange = (value) => {
  console.log(value)
}

const toggle = (name) => {
  refEl.value.setActive(name)
}
</script>

<style scoped></style>
