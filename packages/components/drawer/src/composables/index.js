import { useDrawerState } from './use-drawer-state'
import { useDrawerEvent } from './use-drawer-event'

export const useDrawer = ({ visible }) => {
  const state = useDrawerState()
  const event = useDrawerEvent({ visible, state })

  return { ...state, ...event }
}
