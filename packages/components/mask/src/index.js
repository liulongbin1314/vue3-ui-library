import { h, defineComponent, computed } from 'vue'
import { useNamespace, useZIndex } from '@ui-library/hooks'

export default defineComponent({
  name: 'a-mask',
  props: {
    // 灰色的半透明遮罩
    gray: {
      type: Boolean,
      default: false
    },
    // 毛玻璃效果
    blur: {
      type: Boolean,
      default: true
    },
    // 是否可穿透
    penetrable: {
      type: Boolean,
      default: false
    }
  },
  emits: [],
  setup(props, { slots, emit }) {
    const ns = useNamespace('mask')
    const { currentZIndex, genNextIndex } = useZIndex('modal')
    // 请注意：一定要通过 .value 访问 currentZIndex 真正的值
    const styledZIndex = { zIndex: currentZIndex.value }
    genNextIndex()

    const isPenetrable = computed(() => props.penetrable && !props.blur && !props.gray)

    // 必须返回一个渲染函数
    return () => {
      // 根元素
      return h(
        'div',
        {
          class: [
            ns.b(),
            ns.is('gray', props.gray),
            ns.is('blur', props.blur),
            ns.is('penetrable', isPenetrable.value)
          ],
          style: [styledZIndex]
        },
        [
          // 内层容器
          h('div', { class: [ns.e('wrapper')] }, [
            // default 插槽
            slots.default?.()
          ])
        ]
      )
    }
  }
})
