import { useMessageBoxState } from './use-message-box-state'
import { useMessageBoxEvent } from './use-message-box-event'

export const useMessageBox = () => {
  const state = useMessageBoxState()
  const event = useMessageBoxEvent()

  return { ...state, ...event }
}
