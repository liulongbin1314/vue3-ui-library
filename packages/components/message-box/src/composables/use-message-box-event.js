import { getCurrentInstance } from 'vue'

export const useMessageBoxEvent = () => {
  const instance = getCurrentInstance()
  const props = instance.props

  // 当对话框完全关闭之后，触发此函数
  const handleClosed = (action, el) => {
    document.body.removeChild(el)

    if (typeof props.callback === 'function') {
      props.callback(action)
    }
  }

  return { handleClosed }
}
