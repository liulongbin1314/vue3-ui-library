import { useMessageState } from './use-message-state'

export const useMessage = () => {
  const state = useMessageState()

  return { ...state }
}
