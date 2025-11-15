<template>
  <!-- 根元素 -->
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.m('size', size),
      ns.is('checked', model),
      ns.m(type),
      ns.is('disabled', disabled)
    ]"
  >
    <!-- 外层容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <input type="checkbox" v-model="model" :disabled="disabled" :class="[ns.e('input')]" />
      <!-- 控制区域 -->
      <span :class="[ns.e('handle')]">
        <!-- 中心圆 -->
        <span :class="[ns.e('button')]">
          <template v-if="centerIcon">
            <a-icon :icon="activeIcon" v-if="activeIcon && model"></a-icon>
            <a-icon :icon="inactiveIcon" v-if="inactiveIcon && !model"></a-icon>
          </template>
        </span>
        <!-- 内层容器 -->
        <span :class="[ns.e('inner'), transitionMode]">
          <span :class="[ns.e('inner-checked'), ns.is('checked', model)]">
            <a-icon :icon="activeIcon" v-if="activeIcon && !centerIcon"></a-icon>
            <span v-else>{{ activeText ? activeText[0] : '' }}</span>
          </span>
          <span :class="[ns.e('inner-unchecked'), ns.is('checked', !model)]">
            <a-icon :icon="inactiveIcon" v-if="inactiveIcon && !centerIcon"></a-icon>
            <span v-else>{{ inactiveText ? inactiveText[0] : '' }}</span>
          </span>
        </span>
      </span>
    </span>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-switch'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'label'
  },
  size: {
    type: String,
    default: 'default'
  },
  transition: {
    type: String,
    default: 'scale' // slide
  },
  type: String,
  disabled: Boolean,
  // 关闭时候被选中的值
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false
  },
  // 打开时候被选中的值
  activeValue: {
    type: [String, Number, Boolean],
    default: false
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeIcon: [String, Object],
  inactiveIcon: [String, Object],
  centerIcon: Boolean
})

defineEmits(['change'])

const switchModel = defineModel({ type: [String, Number, Boolean], default: false })

if (switchModel.value === true && props.activeValue !== false) {
  switchModel.value = props.activeValue
}
if (switchModel.value === false && props.inactiveValue !== false) {
  switchModel.value = props.inactiveValue
}

import { useNamespace } from '@ui-library/hooks'
import { useSwitch } from './composables'
import { computed } from 'vue'
import { AIcon } from '@ui-library/components'

const ns = useNamespace('switch')
const { model } = useSwitch({ switchModel })

const transitionMode = computed(() => {
  // transition-slide
  return `transition-${props.transition}`
})
</script>

<style scoped></style>
