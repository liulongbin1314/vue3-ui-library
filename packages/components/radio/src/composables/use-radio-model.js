import { computed } from 'vue'

export const useRadioModel = ({ radioModel }) => {
  const model = computed({
    get() {
      return radioModel.value
    },
    set(value) {
      radioModel.value = value
    }
  })

  return { model }
}
