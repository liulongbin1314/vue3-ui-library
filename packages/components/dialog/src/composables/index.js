import { useDialogState } from './use-dialog-state'
import { useDialogEvent } from './use-dialog-event'

export const useDialog = ({ visible }) => {
  const state = useDialogState()
  const event = useDialogEvent({ visible })

  return { ...state, ...event }
}
