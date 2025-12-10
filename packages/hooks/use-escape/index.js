import { onMounted, onUnmounted } from 'vue'

export const useEscape = (cb) => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      cb()
    }
  }

  onMounted(() => document.documentElement.addEventListener('keydown', handleEscape))
  onUnmounted(() => document.documentElement.removeEventListener('keydown', handleEscape))
}
