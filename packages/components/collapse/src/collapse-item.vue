<template>
  <!-- 根元素 -->
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <!-- Header -->
    <div :class="[ns.e('header'), ns.is('active', active)]" @click="toggleActive">
      <div :class="ns.e('header-wrapper')">
        <slot name="icon" v-if="expandIconPosition === 'left'">
          <!-- 渲染图标 -->
          <AIcon :icon="icon" :class="[ns.e('header-icon'), ns.is('icon-rotate', active)]"></AIcon>
        </slot>
        <!-- title 具名插槽，渲染标题 -->
        <slot name="title">{{ title }}</slot>
      </div>
      <!-- icon 具名插槽，渲染图标 -->
      <slot name="icon" v-if="expandIconPosition === 'right'">
        <!-- 渲染图标 -->
        <AIcon :icon="icon" :class="[ns.e('header-icon'), ns.is('icon-rotate', active)]"></AIcon>
      </slot>
    </div>
    <!-- Content -->
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div v-show="active">
        <div :class="[ns.e('content')]">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-collapse-item'
})

const props = defineProps({
  name: { type: [String, Number], required: true },
  title: String,
  icon: { type: [String, Object], default: 'icon-right' },
  disabled: Boolean
})

import { useNamespace } from '@ui-library/hooks'
import { AIcon } from '@ui-library/components'
import { inject, computed } from 'vue'
import { transition } from '@vueuse/core'

const ns = useNamespace('collapse-item')
const { model, setActive, expandIconPosition } = inject('COLLAPSE', {})

const active = computed(() => {
  if (typeof model.value === 'string') {
    return props.name === model.value
  } else if (Array.isArray(model.value)) {
    return model.value.includes(props.name)
  } else {
    return false
  }
})

const toggleActive = () => {
  if (props.disabled) return
  setActive(props.name)
}

const onBeforeEnter = (el) => {
  el.style.height = '0px'
}
const onEnter = (el) => {
  el.style.height = el.scrollHeight + 'px'
}
const onBeforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px'
}
const onLeave = (el) => {
  el.style.height = '0px'
}
</script>
