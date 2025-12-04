import { useMessageState } from './use-message-state'
import { useMessageEvent } from './use-message-event'

export const useMessage = () => {
  const state = useMessageState()
  const event = useMessageEvent()

  return { ...state, ...event }
}
