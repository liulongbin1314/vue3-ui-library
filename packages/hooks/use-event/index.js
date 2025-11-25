import { ref, getCurrentInstance } from 'vue'

export const useEvent = (options = {}) => {
  const isFocus = ref(false)
  const isEnter = ref(false)
  // 是否正在组合文字
  const isComposition = ref(false)

  const { emit } = getCurrentInstance()

  const focusEvent = (e) => {
    isFocus.value = true
    emit('focus', e)
  }
  const blurEvent = (e) => {
    isFocus.value = false
    emit('blur', e)
    options.afterBlur?.()
  }

  const mouseenterEvent = (e) => {
    isEnter.value = true
    emit('mouseenter', e)
  }
  const mouseleaveEvent = (e) => {
    isEnter.value = false
    emit('mouseleave', e)
  }

  const keydownEvent = (e) => {
    emit('keydown', e)
  }
  const keyupEvent = (e) => {
    emit('keyup', e)
  }

  const inputEvent = (e) => {
    emit('input', e.target.value, e)
  }
  const changeEvent = (e) => {
    emit('change', e.target.value, e)
  }

  const compositionstartEvent = (e) => {
    // 表示当前已经开始组合文字了
    isComposition.value = true
    emit('compositionstart', e)
  }
  const compositionupdateEvent = (e) => {
    emit('compositionupdate', e)
  }
  const compositionendEvent = (e) => {
    // isComposition.value = false
    // emit('compositionend', e)
    return new Promise((resolve, reject) => {
      if (isComposition.value) {
        isComposition.value = false
        emit('compositionend', e)
        resolve()
      } else {
        reject()
      }
    })
  }

  return {
    isFocus,
    focusEvent,
    blurEvent,
    isEnter,
    mouseenterEvent,
    mouseleaveEvent,
    keydownEvent,
    keyupEvent,
    inputEvent,
    changeEvent,
    compositionstartEvent,
    compositionupdateEvent,
    compositionendEvent,
    isComposition
  }
}
