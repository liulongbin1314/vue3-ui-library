import { computed, getCurrentInstance } from 'vue'

export const useRadioModel = ({ radioModel }) => {
  const instance = getCurrentInstance()

  const model = computed({
    get() {
      return radioModel.value
    },
    set(value) {
      radioModel.value = value
      instance.emit('change', value)
    }
  })

  return { model }
}
