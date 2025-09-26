// 当前我们这个组件库统一的命名空间
const defaultNamespace = 'a'

// 定义一个私有的 _bem 函数，用于生成符合 BEM 规范的 class 类名
// a-button 是一个 Block 块
// a-button-wrap 也是一个块，只不过这个块包含一个块的后缀
const _bem = (namespace, block, blockSuffix, element, modifier, modifierValue) => {
  let className = `${namespace}-${block}`

  blockSuffix && (className += `-${blockSuffix}`)
  element && (className += `__${element}`)
  modifier && (className += `--${modifier}`)
  modifierValue && (className += `_${modifierValue}`)

  return className
}

export const useNamespace = (block) => {
  const namespace = defaultNamespace

  // 定义名为 b 的函数，用于生成符合 BEM 规范的“块类名”
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix)
  // 定义名为 e 的函数，用于生成符合 BEM 规范的“元素类名”
  const e = (element) => (element ? _bem(namespace, block, '', element) : '')
  // 定义名为 m 的函数，用于生成符合 BEM 规范的“修改器类名”
  const m = (modifier, modifierValue) =>
    modifier ? _bem(namespace, block, '', '', modifier, modifierValue) : ''
  // 定义一个 is 状态函数，用于根据状态值的 true 或 false，为元素生成 is- 开头的状态类名
  const is = (activeName, state) => (activeName && state ? `is-${activeName}` : '')

  return {
    namespace,
    b,
    e,
    m,
    is
  }
}
