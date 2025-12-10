import { useDialogState } from './use-dialog-state'

export const useDialog = () => {
  const state = useDialogState()

  return { ...state }
}
