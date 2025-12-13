import { onMounted, ref } from 'vue'

export const useMessageBoxState = () => {
  const visible = ref(false)

  onMounted(() => {
    // 只要 MessageBox 组件挂载完成了，就自动把它展示出来
    // 将来，只要用户调用了咱们提供的 AMessageBox 函数，就可以直接看到消息组件
    visible.value = true
  })

  return { visible }
}
