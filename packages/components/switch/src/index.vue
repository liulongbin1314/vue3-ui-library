<template>
  <!-- 根元素 -->
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.m('size', _size),
      ns.is('checked', model),
      ns.m(type),
      ns.is('disabled', disabled || isLoading)
    ]"
    @click="clickEvent"
  >
    <!-- 外层容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <input
        type="checkbox"
        v-model="model"
        :disabled="disabled || isLoading"
        :class="[ns.e('input')]"
      />
      <!-- 控制区域 -->
      <span :class="[ns.e('handle')]">
        <!-- 中心圆 -->
        <span :class="[ns.e('button')]">
          <a-icon
            :icon="Loader"
            v-if="isLoading"
            :class="[ns.is('loading-animate', isLoading)]"
          ></a-icon>
          <template v-else-if="centerIcon">
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
  size: String,
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
  centerIcon: Boolean,
  beforeChange: Function
})

defineEmits(['change'])

const switchModel = defineModel({ type: [String, Number, Boolean], default: false })

import { useNamespace } from '@ui-library/hooks'
import { useSwitch } from './composables'
import { computed, watch, ref } from 'vue'
import { AIcon } from '@ui-library/components'
import { Loader } from '@ui-library/icons'
import { useFormItem } from '@ui-library/components/form/src/composables'

const ns = useNamespace('switch')
const { formProps, formItemProps } = useFormItem()
const { model, isLoading, clickEvent } = useSwitch({ switchModel })
const _size = computed(() => props.size || formProps?.size.value || 'default')
const isFirst = ref(false)

if (switchModel.value === true && props.activeValue !== false) {
  switchModel.value = props.activeValue
  isFirst.value = true
}
if (switchModel.value === false && props.inactiveValue !== false) {
  switchModel.value = props.inactiveValue
  isFirst.value = true
}

const transitionMode = computed(() => {
  // transition-slide
  return `transition-${props.transition}`
})

watch(
  () => switchModel.value,
  () => {
    if (isFirst.value) return (isFirst.value = false)
    formItemProps?.validate('change')
  }
)
</script>

<style scoped></style>
