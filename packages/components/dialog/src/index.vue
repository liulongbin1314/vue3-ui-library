<template>
  <teleport to="body">
    <!-- 遮罩层 -->
    <AMask v-show="visible">
      <!-- Dialog 根元素 -->
      <div :class="[ns.b()]">
        <!-- 内层容器 -->
        <div :class="[ns.e('wrapper')]">
          <!-- 头部 -->
          <div :class="[ns.e('header')]">
            <!-- 标题区域 -->
            <div :class="[ns.e('title')]">
              <!-- 可选的 icon 图标 -->
              <span :class="ns.e('icon-title')" ref="icon">
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
            <div :class="[ns.e('body-inner')]" :style="[styledIconWidth]">
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
              <AButton text :size="buttonSize" v-if="cancelButtonShow">
                {{ cancelButtonText }}
              </AButton>
              <!-- 确认按钮 -->
              <AButton type="primary" :size="buttonSize" v-if="confirmButtonShow">
                {{ confirmButtonText }}
              </AButton>
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

const visible = defineModel({ type: Boolean, default: false })

import { useNamespace } from '@ui-library/hooks'
import { AMask, AButton, AIcon } from '@ui-library/components'
import { X } from '@ui-library/icons'
import { dialogProps } from './dialog-config'
import { useDialog } from './composables'

const ns = useNamespace('dialog')
const { colors, styledIconWidth, handleClose } = useDialog({ visible })
</script>

<style scoped></style>
