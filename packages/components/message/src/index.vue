<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <!-- 左侧的 icon -->
    <div :class="[ns.e('icon')]">
      <AIcon :icon="iconMap[type]"></AIcon>
    </div>

    <!-- 中间的消息内容 -->
    <div :class="[ns.e('content')]">这是一个消息</div>

    <!-- 右侧的关闭 icon -->
    <div :class="[ns.e('close')]">
      <AIcon icon="icon-close"></AIcon>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-message'
})

defineProps({
  // info/primary/success/warning/error
  type: {
    type: String,
    default: 'info'
  }
})

import { useNamespace } from '@ui-library/hooks'
import { AIcon } from '@ui-library/components'
import { useMessage } from './composables'

const ns = useNamespace('message')
const { iconMap } = useMessage()
</script>

<style scoped></style>
