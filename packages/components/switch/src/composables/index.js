import { useSwitchModel } from './use-switch-model'
import { useSwitchState } from './use-switch-state'

export const useSwitch = ({ switchModel }) => {
  // 响应式数据模块
  const { model } = useSwitchModel({ switchModel })
  const { isLoading } = useSwitchState()

  return { model, isLoading }
}
