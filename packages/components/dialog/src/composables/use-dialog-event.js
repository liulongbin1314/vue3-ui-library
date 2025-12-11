import { useEscape } from '@ui-library/hooks'
import { getCurrentInstance, ref } from 'vue'

export const useDialogEvent = ({ visible }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const closeType = ref('')

  props.escapeClose && useEscape(() => handleClose())

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

    close()
  }

  // 触发自定义的 open 事件
  const handleBeforeEnter = () => {
    instance.emit('open')
  }

  // 触发自定义的 opened 事件
  const handleAfterEnter = () => {
    instance.emit('opened')
  }

  // 触发自定义的 close 事件
  const handleBeforeLeave = () => {
    instance.emit('close', closeType.value)
  }

  // 触发自定义的 closed 事件
  const handleAfterLeave = () => {
    instance.emit('closed', closeType.value)
  }

  return { handleClose, handleBeforeEnter, handleAfterEnter, handleBeforeLeave, handleAfterLeave }
}
