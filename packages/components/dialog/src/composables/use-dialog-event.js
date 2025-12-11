import { useEscape } from '@ui-library/hooks'
import { getCurrentInstance } from 'vue'

export const useDialogEvent = ({ visible }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  props.escapeClose && useEscape(() => handleClose())

  const close = () => {
    visible.value = false
  }

  const handleClose = () => {
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
    instance.emit('close')
  }

  // 触发自定义的 closed 事件
  const handleAfterLeave = () => {
    instance.emit('closed')
  }

  return { handleClose, handleBeforeEnter, handleAfterEnter, handleBeforeLeave, handleAfterLeave }
}
