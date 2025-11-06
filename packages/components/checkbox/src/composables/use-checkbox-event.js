export const useCheckboxEvent = () => {
  const clickEvent = (e) => {
    // 阻止复选框切换选中状态的默认行为
    e.preventDefault()
  }

  return { clickEvent }
}
