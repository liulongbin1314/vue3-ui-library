<template>
  <i :class="[ns.b()]" :style="[styledColor, styledFSize]">
    <!-- 1. 通过插槽渲染图标 -->
    <slot v-if="$slots.default"></slot>
    <!-- 2. 通过 iconfont 渲染字体图标 -->
    <span class="iconfont" :class="icon" v-if="_isIconFont"></span>
    <!-- 3. 通过 svg 渲染图标 -->
    <component :is="icon" v-else></component>
  </i>
</template>

<script setup>
defineOptions({
  name: 'a-icon'
})

const { color, size, icon } = defineProps({
  color: String,
  size: [String, Number],
  icon: [String, Object]
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { computed } from 'vue'

const ns = useNamespace('icon')
const uStyle = useStyle()

const styledFSize = computed(() => uStyle.fontSize(size))
const styledColor = computed(() => uStyle.color(color))

const _isIconFont = computed(() => typeof icon === 'string')
</script>
