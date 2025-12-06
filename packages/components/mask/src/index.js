import { h, defineComponent } from 'vue'
import { useNamespace } from '@ui-library/hooks'

export default defineComponent({
  name: 'a-mask',
  props: {},
  emits: [],
  setup(props, { slots, emit }) {
    const ns = useNamespace('mask')

    // 必须返回一个渲染函数
    return () => {
      // 根元素
      return h('div', { class: [ns.b()] }, [
        // 内层容器
        h('div', { class: [ns.e('wrapper')] }, [
          // default 插槽
          slots.default?.()
        ])
      ])
    }
  }
})
