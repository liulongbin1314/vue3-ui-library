import { useMessageBoxState } from './use-message-box-state'

export const useMessageBox = () => {
  const state = useMessageBoxState()

  return { ...state }
}
