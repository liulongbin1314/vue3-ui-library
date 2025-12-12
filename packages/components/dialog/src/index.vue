<template>
  <teleport to="body">
    <transition
      :name="ns.b()"
      @before-enter="handleBeforeEnter"
      @after-enter="handleAfterEnter"
      @before-leave="handleBeforeLeave"
      @after-leave="handleAfterLeave"
    >
      <!-- 遮罩层 -->
      <AMask v-show="visible" v-bind="$attrs" @close="handleClose">
        <!-- Dialog 根元素 -->
        <div :class="[ns.b(), ns.is('fixed-screen', fixedScreen)]" :style="[styledWidth]">
          <!-- 内层容器 -->
          <div :class="[ns.e('wrapper')]">
            <!-- 头部 -->
            <div :class="[ns.e('header')]">
              <!-- 标题区域 -->
              <div :class="[ns.e('title')]">
                <!-- 可选的 icon 图标 -->
                <span :class="ns.e('icon-title')" ref="icon" v-if="$slots.icon">
                  <!-- 作用域插槽 -->
                  <slot name="icon" :colors="colors"></slot>
                </span>
                <!-- 标题的文本 -->
                <span>{{ title }}</span>
              </div>
              <!-- 关闭图标 -->
              <AIcon
                :icon="X"
                :class="ns.e('icon-close')"
                v-if="showClose"
                @click="handleClose"
              ></AIcon>
            </div>

            <!-- 主体 -->
            <div :class="[ns.e('body')]">
              <div :class="[ns.e('body-inner')]" :style="[styledIconWidth]" :key="destroyKey">
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
                <AButton
                  text
                  :size="buttonSize"
                  :disabled="isCancelLoading || isConfirmLoading"
                  :loading="isCancelLoading"
                  v-if="cancelButtonShow"
                  @click="handleClose('cancel')"
                >
                  {{ cancelButtonText }}
                </AButton>
                <!-- 确认按钮 -->
                <AButton
                  type="primary"
                  :size="buttonSize"
                  :disabled="isCancelLoading || isConfirmLoading"
                  :loading="isConfirmLoading"
                  v-if="confirmButtonShow"
                  @click="handleClose('confirm')"
                >
                  {{ confirmButtonText }}
                </AButton>
              </template>
            </div>
          </div>
        </div>
      </AMask>
    </transition>
  </teleport>
</template>

<script setup>
defineOptions({
  name: 'a-dialog',
  inheritAttrs: false
})

const props = defineProps(dialogProps)
// open 在打开对话框的那一刻触发；
// opened 在打开的动画效果结束之后触发；
// close 在关闭对话框的那一刻触发；
// closed 在关闭动画结束之后触发；
defineEmits(['open', 'opened', 'close', 'closed'])

const visible = defineModel({ type: Boolean, default: false })

import { useNamespace } from '@ui-library/hooks'
import { AMask, AButton, AIcon } from '@ui-library/components'
import { X } from '@ui-library/icons'
import { dialogProps } from './dialog-config'
import { useDialog } from './composables'

const ns = useNamespace('dialog')
const {
  colors,
  styledIconWidth,
  handleClose,
  handleBeforeEnter,
  handleAfterEnter,
  handleBeforeLeave,
  handleAfterLeave,
  destroyKey,
  styledWidth,
  isCancelLoading,
  isConfirmLoading
} = useDialog({ visible })
</script>

<style scoped></style>
