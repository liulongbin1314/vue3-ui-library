import { ref, getCurrentInstance } from 'vue'

export const useEvent = () => {
  const isFocus = ref(false)
  const { emit } = getCurrentInstance()

  const focusEvent = (e) => {
    isFocus.value = true
    emit('focus', e)
  }
  const blurEvent = (e) => {
    isFocus.value = false
    emit('blur', e)
  }

  return { isFocus, focusEvent, blurEvent }
}
