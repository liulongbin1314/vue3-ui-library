import { componentInstall } from '@ui-library/utils'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const ACheckbox = componentInstall(Checkbox)
export const ACheckboxGroup = componentInstall(CheckboxGroup)

export default { ACheckbox, ACheckboxGroup }
