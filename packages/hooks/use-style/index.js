export const useStyle = () => {
  const fontSize = (value) => {
    if (!value) return {}

    const reg = /^\d+$/

    if (reg.test(value)) {
      // 纯数字
      return { fontSize: value + 'px' }
    } else {
      // 带单位的值
      return { fontSize: value }
    }
  }

  const color = (value) => {
    return value ? { color: value } : {}
  }

  return { fontSize, color }
}
