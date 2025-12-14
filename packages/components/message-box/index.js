import Method from './src/method'
import { functionInstall } from '@ui-library/utils'

export const AMessageBox = functionInstall(Method, '$msgbox', {
  // 键：要安装到全局的函数的名字
  // 值：需要被调用的函数
  $alert: Method.alert,
  $confirm: Method.confirm
})
export default AMessageBox
