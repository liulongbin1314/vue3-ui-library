import { componentInstall } from '@ui-library/utils'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/checkbox-group.vue'
import CheckboxAll from './src/checkbox-all.vue'

export const ACheckbox = componentInstall(Checkbox)
export const ACheckboxGroup = componentInstall(CheckboxGroup)
export const ACheckboxAll = componentInstall(CheckboxAll)

export default { ACheckbox, ACheckboxGroup, ACheckboxAll }
