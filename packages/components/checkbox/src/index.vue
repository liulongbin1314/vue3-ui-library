<template>
  <!-- 根元素 -->
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('checked', isChecked || indeterminate),
      ns.is('disabled', isDisabled || isLoading),
      ns.m(type),
      ns.m('size', cbSize),
      ns.is('loading', isLoading)
    ]"
    @click="clickEvent"
  >
    <!-- 复选框容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <!-- 把 useCheckbox 返回的 model 数据，双向绑定到 checkbox 元素上， -->
      <!-- 好处：可以同时兼顾到单个复选框和复选框组的双向数据绑定的情况 -->
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        :disabled="isDisabled || isLoading"
        :class="[ns.e('input')]"
        :value="value"
      />
      <!-- 模拟出来的复选框 -->
      <span :class="[ns.e('inner')]">
        <a-icon
          :icon="Loader"
          :class="[ns.e('icon-check'), ns.is('loading-animate', isLoading)]"
          v-if="isLoading"
        ></a-icon>
        <template v-else>
          <a-icon :icon="Minus" :class="[ns.e('icon-check')]" v-if="indeterminate"></a-icon>
          <a-icon :icon="Check" :class="[ns.e('icon-check')]" v-else></a-icon>
        </template>
      </span>
    </span>
    <!-- label 描述文本 -->
    <span :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-checkbox'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'label'
  },
  label: String,
  checked: Boolean,
  disabled: Boolean,
  type: String,
  size: {
    type: String,
    default: 'default'
  },
  trueValue: {
    type: [String, Number],
    default: undefined
  },
  falseValue: {
    type: [String, Number],
    default: undefined
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  },
  beforeChange: Function,
  all: Boolean,
  indeterminate: Boolean
})

defineEmits(['change'])

const cbModel = defineModel({ type: [String, Number, Boolean], default: false })

if (props.checked) {
  if (props.trueValue) {
    cbModel.value = props.trueValue
  } else {
    cbModel.value = true
  }
} else {
  if (props.falseValue) {
    cbModel.value = props.falseValue
  }
}

import { useNamespace } from '@ui-library/hooks'
import { AIcon } from '@ui-library/components'
import { Check, Loader, Minus } from '@ui-library/icons'
import { useCheckbox } from './composables'

const ns = useNamespace('checkbox')
// 注意：这里返回的 model 是一个“可读可写”的计算属性
const { cbSize, isDisabled, isChecked, model, isLoading, clickEvent } = useCheckbox({ cbModel })
</script>
