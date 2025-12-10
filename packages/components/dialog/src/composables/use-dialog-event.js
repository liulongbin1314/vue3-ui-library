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

  return { handleClose }
}
