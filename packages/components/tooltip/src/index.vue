<template>
  <!-- 根元素 -->
  <div ref="containerRef" :class="[ns.b(), ns.is('light', effect === 'light')]" v-on="hoverEvents">
    <!-- 触发区域 -->
    <div :class="[ns.e('trigger')]" ref="reference" v-on="clickEvents">
      <slot></slot>
    </div>

    <transition name="tooltip-fade">
      <!-- 浮层区域 -->
      <div :class="[ns.e('floating')]" ref="floating" :style="floatingStyles" v-if="visible">
        <slot name="content">{{ content }}</slot>
        <!-- 箭头元素 -->
        <div :class="[ns.e('arrow')]" ref="floatingArrow" :style="arrowStyles"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-tooltip',
})

const props = defineProps({
  content: String,
  // 浮层显示的位置
  placement: { type: String, default: 'bottom' },
  // 当触发元素离开视口之后，是否自动隐藏浮层元素
  autoHide: Boolean,
  // 主题：light / dark
  effect: { type: String, default: 'dark' },
  // 触发时机 click / hover
  trigger: { type: String, default: 'hover' },
  manual: Boolean,
})

import { useNamespace, useClickOutside } from '@ui-library/hooks'
import { ref, watch, computed, reactive } from 'vue'
import { useFloating, offset, flip, autoUpdate, hide, arrow } from '@floating-ui/vue'

const ns = useNamespace('tooltip')
const visible = ref(false)
let clickEvents = reactive({})
let hoverEvents = reactive({})

const reference = ref(null)
const floating = ref(null)
const floatingArrow = ref(null)
const containerRef = ref(null)
const { floatingStyles, middlewareData, placement } = useFloating(reference, floating, {
  // 浮层默认的展示方向
  placement: props.placement,
  // 中间件
  middleware: [offset(10), flip(), hide(), arrow({ element: floatingArrow })],
  whileElementsMounted: autoUpdate,
})

useClickOutside(containerRef, () => {
  if (props.manual) return
  visible.value = false
})

const clickHandler = () => {
  visible.value = !visible.value
}
let timer = null
const open = () => {
  clearTimeout(timer)
  visible.value = true
}
const close = () => {
  if (props.trigger === 'hover' && !props.manual) {
    timer = setTimeout(() => {
      visible.value = false
    }, 150)
  } else {
    visible.value = false
  }
}

const bindEvents = () => {
  if (props.manual) return
  clickEvents = {}
  hoverEvents = {}

  if (props.trigger === 'click') {
    clickEvents['click'] = clickHandler
  }
  if (props.trigger === 'hover') {
    hoverEvents['mouseenter'] = open
    hoverEvents['mouseleave'] = close
  }
}

watch(
  () => props.trigger,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      bindEvents()
    }
  },
  { immediate: true },
)

watch(
  () => middlewareData.value,
  (md) => {
    if (md.hide.referenceHidden && props.autoHide) {
      visible.value = false
    }
  },
)

const arrowStyles = computed(() => {
  let x = middlewareData.value.arrow?.x != null ? `${middlewareData.value.arrow.x}px` : ''
  let y = middlewareData.value.arrow?.y != null ? `${middlewareData.value.arrow.y}px` : ''

  // 获取浮层元素的宽和高
  const w = floating.value?.offsetWidth || 0
  const h = floating.value?.offsetHeight || 0
  // 获取 arrow 宽度的一半
  const half = (floatingArrow.value?.offsetWidth || 0) / 2 + 1

  let border = {}
  if (placement.value.includes('top')) {
    y = h - half + 'px'
    border = { 'border-bottom-width': '1px', 'border-right-width': '1px' }
  }
  if (placement.value.includes('bottom')) {
    y = -half + 'px'
    border = { 'border-top-width': '1px', 'border-left-width': '1px' }
  }
  if (placement.value.includes('left')) {
    x = w - half + 'px'
    border = { 'border-top-width': '1px', 'border-right-width': '1px' }
  }
  if (placement.value.includes('right')) {
    x = -half + 'px'
    border = { 'border-bottom-width': '1px', 'border-left-width': '1px' }
  }

  return {
    position: 'absolute',
    left: x,
    top: y,
    ...border,
  }
})

defineExpose({
  open,
  close,
})
</script>
