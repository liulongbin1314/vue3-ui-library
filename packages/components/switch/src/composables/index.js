import { useSwitchModel } from './use-switch-model'
import { useSwitchState } from './use-switch-state'
import { useSwitchEvent } from './use-switch-event'

export const useSwitch = ({ switchModel }) => {
  // 响应式数据模块
  const { model } = useSwitchModel({ switchModel })
  const { isLoading } = useSwitchState()
  const { clickEvent } = useSwitchEvent({ isLoading })

  return { model, isLoading, clickEvent }
}
