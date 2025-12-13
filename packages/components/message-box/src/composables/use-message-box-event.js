export const useMessageBoxEvent = () => {
  // 当对话框完全关闭之后，触发此函数
  const handleClosed = (_, el) => {
    document.body.removeChild(el)
  }

  return { handleClosed }
}
