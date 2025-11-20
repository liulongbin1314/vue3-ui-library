<template>
  <!-- 根元素 -->
  <label
    :class="[
      ns.b(),
      ns.is('checked', isChecked),
      ns.is('disabled', isDisabled || isLoading),
      ns.m(radioType),
      ns.m('size', radioSize),
      ns.is('loading', isLoading)
    ]"
    @click="clickEvent"
  >
    <!-- 左侧的容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 被隐藏的真实的单选按钮 -->
      <input
        type="radio"
        :class="[ns.e('input')]"
        v-model="model"
        :value="value"
        :disabled="isDisabled || isLoading"
      />
      <!-- 模拟的单选按钮 -->
      <span :class="[ns.e('inner')]">
        <!-- Loading 图标 -->
        <a-icon
          :icon="Loader"
          v-if="isLoading"
          :class="[ns.is('loading-animate', isLoading), ns.e('icon-loading')]"
        ></a-icon>
        <!-- 选中后的小圆点 -->
        <span :class="[ns.e('dot')]" v-else></span>
      </span>
    </span>

    <!-- 右侧的描述文本 -->
    <span :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
defineOptions({
  name: 'a-radio'
})

const props = defineProps({
  disabled: Boolean,
  type: String,
  size: String,
  label: String,
  value: [String, Number, Boolean],
  beforeChange: Function
})

defineEmits(['change'])

const radioModel = defineModel({ type: [String, Number, Boolean], default: '' })

import { useNamespace } from '@ui-library/hooks'
import { useRadio } from './composables'
import { AIcon } from '@ui-library/components'
import { Loader } from '@ui-library/icons'

const ns = useNamespace('radio')
const { isChecked, isDisabled, radioSize, model, radioType, isLoading, clickEvent } = useRadio({
  radioModel
})
</script>

<style scoped></style>
