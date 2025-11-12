import { useSwitchModel } from './use-switch-model'

export const useSwitch = ({ switchModel }) => {
  // 响应式数据模块
  const { model } = useSwitchModel({ switchModel })

  return { model }
}
