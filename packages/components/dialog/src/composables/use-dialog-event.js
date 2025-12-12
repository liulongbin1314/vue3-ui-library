import { useEscape } from '@ui-library/hooks'
import { getCurrentInstance, ref, computed } from 'vue'

export const useDialogEvent = ({ visible, state }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const closeType = ref('')

  props.escapeClose && useEscape(() => handleClose())

  const isBeforeFn = computed(() => typeof props.beforeClose === 'function')

  const close = () => {
    visible.value = false
  }

  const handleClose = (type) => {
    if (type === 'cancel') {
    } else if (type === 'confirm') {
    } else {
      type = props.distinguishCancelAndClose ? 'close' : 'cancel'
    }

    closeType.value = type

    // 1. 判断是否传入了 beforeClose 函数
    if (isBeforeFn.value) {
      props.beforeClose(type, close)
      return
    }

    // 2. 如果没有传入，则直接关闭
    close()
  }

  // 触发自定义的 open 事件
  const handleBeforeEnter = () => {
    instance.emit('open')

    if (props.lockScroll) {
      document.documentElement.style.overflow = 'hidden'
    }
  }

  // 触发自定义的 opened 事件
  const handleAfterEnter = () => {
    instance.emit('opened')
  }

  // 触发自定义的 close 事件
  const handleBeforeLeave = () => {
    instance.emit('close', closeType.value)

    if (props.lockScroll) {
      document.documentElement.style.overflow = ''
    }
  }

  // 触发自定义的 closed 事件
  const handleAfterLeave = () => {
    instance.emit('closed', closeType.value)

    if (props.destroyOnClosed) {
      state.destroyKey.value++
    }
  }

  return { handleClose, handleBeforeEnter, handleAfterEnter, handleBeforeLeave, handleAfterLeave }
}
