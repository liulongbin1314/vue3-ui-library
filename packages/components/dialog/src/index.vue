<template>
  <teleport to="body">
    <!-- 遮罩层 -->
    <AMask>
      <!-- Dialog 根元素 -->
      <div :class="[ns.b()]">
        <!-- 内层容器 -->
        <div :class="[ns.e('wrapper')]">
          <!-- 头部 -->
          <div :class="[ns.e('header')]">
            <!-- 标题区域 -->
            <div :class="[ns.e('title')]">
              <!-- 可选的 icon 图标 -->
              <span :class="ns.e('icon-title')">
                <slot name="icon"></slot>
              </span>
              <!-- 标题的文本 -->
              <span>{{ title }}</span>
            </div>
            <!-- 关闭图标 -->
            <AIcon :icon="X" :class="ns.e('icon-close')" v-if="showClose"></AIcon>
          </div>

          <!-- 主体 -->
          <div :class="[ns.e('body')]">
            <div :class="[ns.e('body-inner')]">
              <!-- 默认插槽 -->
              <slot></slot>
            </div>
          </div>

          <!-- 尾部 -->
          <div :class="[ns.e('footer')]" v-if="footer">
            <template v-if="$slots.footer">
              <slot name="footer"></slot>
            </template>
            <template v-else>
              <!-- 取消按钮 -->
              <AButton text>取消</AButton>
              <!-- 确认按钮 -->
              <AButton type="primary">确认</AButton>
            </template>
          </div>
        </div>
      </div>
    </AMask>
  </teleport>
</template>

<script setup>
defineOptions({
  name: 'a-dialog'
})

const props = defineProps(dialogProps)

import { useNamespace } from '@ui-library/hooks'
import { AMask, AButton, AIcon } from '@ui-library/components'
import { X } from '@ui-library/icons'
import { dialogProps } from './dialog-config'

const ns = useNamespace('dialog')
</script>

<style scoped></style>
