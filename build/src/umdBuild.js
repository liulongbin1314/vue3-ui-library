import { rollup } from 'rollup'
// 导入插件
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'

// umd 全量打包的入口函数
const umdBuildEntry = async (isMinify = false) => {
  // 创建打包器
  const writeBundles = await rollup({
    // 入口相关的配置
    // 打包的入口模块
    input: '',
    plugins: [vue(), nodeResolve(), esbuild({ minify: isMinify, sourceMap: true }), postcss()],
    external: ['vue']
  })

  // 调用打包器的 write 函数，进行打包
  await writeBundles.write({
    // 输出配置
    // 打包的格式
    format: 'umd',
    // 输出的文件路径（需要包含文件名）
    file: '',
    // 组件库的全局变量名称
    name: 'EscookUI',
    // 只使用具名导出
    exports: 'named',
    // 外部依赖
    globals: { vue: 'Vue' }
  })
}
