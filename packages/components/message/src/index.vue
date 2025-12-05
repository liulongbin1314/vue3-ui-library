<template>
  <transition :name="ns.b()" @after-leave="handleAfterLeave">
    <!-- 根元素 -->
    <div
      :class="[ns.b(), ns.m(type), ns.is('background', background)]"
      :style="[styledTop, styledZIndex]"
      ref="el"
      v-show="visible"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- 左侧的 icon -->
      <div :class="[ns.e('icon')]">
        <AIcon :icon="iconMap[type]"></AIcon>
      </div>

      <!-- 中间的消息内容 -->
      <div :class="[ns.e('content')]">{{ content }}</div>

      <!-- 右侧的关闭 icon -->
      <div :class="[ns.e('close')]">
        <AIcon icon="icon-close" @click="handleIconClick(props.id)"></AIcon>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineOptions({
  name: 'a-message'
})

const props = defineProps({
  // info/primary/success/warning/error
  type: {
    type: String,
    default: 'info'
  },
  content: {
    type: String,
    default: ''
  },
  id: String,
  offset: {
    type: Number,
    default: 16
  },
  duration: {
    type: Number,
    default: 3000
  },
  background: Boolean
})

import { useNamespace } from '@ui-library/hooks'
import { AIcon } from '@ui-library/components'
import { useMessage } from './composables'

const ns = useNamespace('message')
const {
  iconMap,
  styledTop,
  bottomPosition,
  styledZIndex,
  el,
  visible,
  handleAfterLeave,
  handleMouseEnter,
  handleMouseLeave,
  handleIconClick
} = useMessage()

// 把当前组件的底边距离页面顶部的位置，向外暴露，
// 这样在渲染下一个 Message 组件的时候，就可以获取前一个组件通过
// defineExpose 暴露的 bottomPosition，作为 prevBottomPosition 进行使用
defineExpose({
  bottomPosition
})
</script>

<style scoped></style>
