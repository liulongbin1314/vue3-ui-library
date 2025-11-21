import { componentInstall } from '@ui-library/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const AForm = componentInstall(Form)
export const AFormItem = componentInstall(FormItem)
export default { AForm, AFormItem }
