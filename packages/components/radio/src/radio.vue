<template>
  <!-- 根元素 -->
  <label
    :class="[
      ns.b(),
      ns.is('checked', isChecked),
      ns.is('disabled', isDisabled),
      ns.m(type),
      ns.m('size', radioSize)
    ]"
  >
    <!-- 左侧的容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 被隐藏的真实的单选按钮 -->
      <input type="radio" :class="[ns.e('input')]" />
      <!-- 模拟的单选按钮 -->
      <span :class="[ns.e('inner')]">
        <!-- 选中后的小圆点 -->
        <span :class="[ns.e('dot')]"></span>
      </span>
    </span>

    <!-- 右侧的描述文本 -->
    <span :class="[ns.e('label')]">xxx</span>
  </label>
</template>

<script setup>
defineOptions({
  name: 'a-radio'
})

const props = defineProps({
  disabled: Boolean,
  type: String,
  size: String
})

import { useNamespace } from '@ui-library/hooks'
import { useRadio } from './composables'

const ns = useNamespace('radio')
const { isChecked, isDisabled, radioSize } = useRadio()
</script>

<style scoped></style>
